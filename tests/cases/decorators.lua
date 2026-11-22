-- Decorators: functions, classes, class fields

-- ---------------------------------------------------------------- function decorators

function double(func)
    return function(...)
        return func(...) * 2
    end
end

function addN(func, n)
    return function(...)
        return func(...) + n
    end
end

function observe(func) -- returns nil: the original must stay in place
    DECORATED_SEEN = leap.fsignature(func).name
end

@double
function five()
    return 5
end

@addN(100)
function one()
    return 1
end

@observe
function untouched()
    return "original"
end

test("function decorator replaces the function with the returned value", function()
    eq(five(), 10)
end)

test("function decorator receives extra arguments", function()
    eq(one(), 101)
end)

test("function decorator returning nil keeps the original function", function()
    eq(untouched(), "original")
    eq(DECORATED_SEEN, "untouched", "decorator can read the target's signature name")
end)

test("local decorators work on functions (resolved lexically)", function()
    local function noop(f) return nil end
    eq(rawtype(noop), "function")
end)

-- stacked: record application order
ORDER = {}
function tag(func, label)
    ORDER[#ORDER + 1] = label
    return function(...) return label .. "(" .. func(...) .. ")" end
end

@tag("outer")
@tag("inner")
function core()
    return "core"
end

test("stacked function decorators apply in a deterministic order", function()
    eq(ORDER, { "outer", "inner" }, "application order")
    eq(core(), "inner(outer(core))", "call nesting")
end)

-- ---------------------------------------------------------------- class decorators

function markModel(class)
    class.__prototype.isModel = true
    return class
end

function replaceClass(class)
    return { replaced = true }
end

function keepClass(class)
    class.__prototype.touched = true
end

@markModel
class SavedEntity {
    id = 1
}

@keepClass
class Kept {
    id = 2
}

test("class decorator can modify the prototype", function()
    local e = new SavedEntity()
    eq(e.isModel, true)
    eq(e.id, 1)
end)

test("class decorator returning nil keeps the class", function()
    local k = new Kept()
    eq(k.touched, true)
    eq(type(k), "Kept")
end)

-- ---------------------------------------------------------------- class field decorators

CALLS = {}

-- (self, func, ...args); returns nil -> original stays
function logCall(self, func, label)
    CALLS[#CALLS + 1] = { instance = self, label = label, signature = leap.fsignature(func) }
end

-- returns a replacement that calls the wrapped method
function times3(self, func)
    return function(...)
        return func(...) * 3
    end
end

function withArgs(self, func, a, b)
    return function(...)
        return func(...) .. ":" .. a .. ":" .. b
    end
end

class Service {
    base = 7,

    @logCall("first")
    plain = function()
        return self.base
    end,

    @times3
    triple = function()
        return self.base
    end,

    @withArgs("x", "y")
    tagged = function(prefix)
        return prefix .. self.base
    end,

    undecorated = function()
        return "u"
    end
}

test("field decorator returning nil leaves the method working", function()
    local s = new Service()
    eq(s:plain(), 7)
end)

test("field decorator receives the instance, the wrapped method and its args", function()
    CALLS = {}
    local s = new Service()

    eq(#CALLS, 1)
    same(CALLS[1].instance, s)
    eq(CALLS[1].label, "first")
end)

test("the wrapper handed to the decorator exposes the original signature", function()
    CALLS = {}
    local s = new Service()
    truthy(CALLS[1].signature, "fsignature(wrapper) is not nil")
    eq(CALLS[1].signature.name, "plain")
end)

test("field decorator replacement is used for calls and sees self through the wrapper", function()
    local s = new Service()
    eq(s:triple(), 21)
    s.base = 2
    eq(s:triple(), 6)
end)

test("field decorator extra arguments reach the decorator and parameters pass through (dot call)", function()
    local s = new Service()
    eq(s.tagged("p"), "p7:x:y")
end)

-- CURRENT BEHAVIOR (pinned on purpose): the wrapper given to a decorator is `function(...) return original(obj, ...) end`
-- so a replacement invoked with colon syntax forwards the instance as an extra first argument to the original.
test("replacement invoked with a colon call forwards the instance as an extra first argument", function()
    local s = new Service()
    local received
    function capture(self, func) return function(...) return func(...) end end

    class Probe {
        @capture
        grab = function(first, second)
            received = { first, second }
        end
    }

    local p = new Probe()
    p:grab("a")
    same(received[1], p, "instance is shifted into the first parameter")
    eq(received[2], "a")

    p.grab("b")
    eq(received[1], "b", "dot call forwards untouched")
end)

test("decorators are applied per instance (each instance has its own bound wrapper)", function()
    local a = new Service()
    local b = new Service()
    a.base = 1
    b.base = 10
    eq(a:triple(), 3)
    eq(b:triple(), 30)
    notSame(a.triple, b.triple)
end)

test("the decorator runs once per instantiation", function()
    CALLS = {}
    local a = new Service()
    local b = new Service()
    local c = new Service()
    eq(#CALLS, 3)
end)

test("undecorated methods stay shared on the prototype", function()
    local a = new Service()
    local b = new Service()
    same(a.undecorated, b.undecorated)
    eq(rawget(a, "undecorated"), nil)
end)

test("decorated methods are stored on the instance", function()
    local s = new Service()
    truthy(rawget(s, "triple"))
    truthy(rawget(s, "plain"))
end)

test("the prototype keeps the undecorated original", function()
    local original = Service.__prototype.triple
    eq(original({ base = 4 }), 4)
end)

-- inheritance: decorators of parent-defined fields apply to subclass instances

class ChildService extends Service {
    base = 5
}

test("decorators of inherited fields apply to subclass instances", function()
    local c = new ChildService()
    eq(c:triple(), 15)
    eq(c.tagged("c"), "c5:x:y")
end)

test("parent field decorators run for subclass instances too", function()
    CALLS = {}
    local c = new ChildService()
    eq(#CALLS, 1)
    same(CALLS[1].instance, c)
end)

-- two decorators on the same field

TRACE = {}
function stepA(self, func) return function(...) TRACE[#TRACE + 1] = "A" return func(...) end end
function stepB(self, func) return function(...) TRACE[#TRACE + 1] = "B" return func(...) end end

class Pipeline {
    @stepA
    @stepB
    run = function()
        TRACE[#TRACE + 1] = "run"
        return "done"
    end
}

test("two decorators on one field both run and the method result is preserved", function()
    TRACE = {}
    local p = new Pipeline()
    eq(p:run(), "done")
    eq(#TRACE, 3)
    eq(TRACE[3], "run")
end)

test("order of stacked field decorators is stable (bottom decorator is the outermost call)", function()
    TRACE = {}
    local p = new Pipeline()
    p:run()
    eq(TRACE, { "B", "A", "run" })
end)

-- errors

test("a missing field decorator raises a clear error at instantiation", function()
    class BrokenDecorated {
        @thisDecoratorDoesNotExist
        m = function() return 1 end
    }
    throws(function() local b = new BrokenDecorated() end, "Decorator thisDecoratorDoesNotExist does not exist")
end)

-- decorator wrappers must not break `self` handling or varargs

class VarArgs {
    @times3
    sum = function(a, b, c)
        return (a or 0) + (b or 0) + (c or 0)
    end
}

test("wrapped methods forward all arguments", function()
    local v = new VarArgs()
    eq(v.sum(1, 2, 3), 18)
    eq(v.sum(1), 3)
end)
