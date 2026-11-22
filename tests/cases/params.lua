-- Typed parameters, defaults, keyword arguments, function signatures (leap.fsignature)

function typed(a: number, b: string)
    return a, b
end

function defaults(a: number = 5, b: string = "x")
    return a, b
end

function optional(a: number | nil)
    return a
end

function union(a: number | string)
    return a
end

function boolOnly(flag: boolean = false)
    return flag
end

function tableOnly(t: table = {})
    return t
end

-- NOTE: `f: function` is documented as a built-in type but the grammar rejects it (`function` is a keyword
-- token), so it cannot be exercised here.

class Base { }
class Derived extends Base { }
class Unrelated { }

function needsBase(x: Base)
    return x
end

-- ---------------------------------------------------------------- type checks

test("typed parameters accept matching values", function()
    local a, b = typed(1, "s")
    eq(a, 1)
    eq(b, "s")
end)

test("typed parameters reject wrong types with a descriptive message", function()
    throws(function() typed("1", "s") end, "a: must be (number) but got string")
    throws(function() typed(1, 2) end, "b: must be (string) but got number")
end)

test("a typed parameter without a default rejects nil", function()
    throws(function() typed(nil, "s") end, "a: must be (number) but got nil")
    throws(function() typed(1) end, "b: must be (string) but got nil")
end)

test("`| nil` makes a typed parameter optional", function()
    eq(optional(), nil)
    eq(optional(3), 3)
    throws(function() optional("no") end, "must be (number | nil)")
end)

test("union types accept either member and reject others", function()
    eq(union(1), 1)
    eq(union("s"), "s")
    throws(function() union(true) end, "a: must be (number | string) but got boolean")
end)

test("boolean / table built-in types", function()
    eq(boolOnly(true), true)
    throws(function() boolOnly("yes") end, "flag: must be (boolean)")
    eq(tableOnly({ 1 }), { 1 })
    throws(function() tableOnly(5) end, "t: must be (table)")
end)

test("class-typed parameters accept instances and subclass instances", function()
    local base = new Base()
    local derived = new Derived()
    same(needsBase(base), base)
    same(needsBase(derived), derived)
end)

test("class-typed parameters reject non-table values", function()
    throws(function() needsBase(5) end, "x: must be (Base) or a derived class")
    throws(function() needsBase("s") end, "x: must be (Base) or a derived class")
    throws(function() needsBase(nil) end, "x: must be (Base) or a derived class")
end)

-- KNOWN BUG: the generated check is `_type(x) ~= "table" and not is(x, Base)`, so ANY table passes a
-- class-typed parameter (other classes' instances and plain tables included).
todo("class-typed parameters reject instances of unrelated classes", function()
    local other = new Unrelated()
    throws(function() needsBase(other) end, "x: must be (Base) or a derived class")
end)

todo("class-typed parameters reject plain tables", function()
    throws(function() needsBase({}) end, "x: must be (Base) or a derived class")
end)

-- ---------------------------------------------------------------- defaults

test("defaults apply for missing (nil) arguments", function()
    local a, b = defaults()
    eq(a, 5)
    eq(b, "x")

    a, b = defaults(9)
    eq(a, 9)
    eq(b, "x")
end)

test("defaults are applied before the type check (no failure on a missing argument)", function()
    local a = defaults(nil, "y")
    eq(a, 5)
end)

test("explicit false is kept and not replaced by the default", function()
    eq(boolOnly(false), false)
end)

test("table defaults are evaluated per call", function()
    local a = tableOnly()
    local b = tableOnly()
    notSame(a, b)
end)

test("typed constructor and method parameters are checked", function()
    class Checked {
        constructor = function(n: number = 1)
            self.n = n
        end,

        add = function(x: number)
            return self.n + x
        end
    }

    local c = new Checked()
    eq(c.n, 1)
    eq(c:add(2), 3)
    throws(function() local bad = new Checked("no") end, "n: must be (number)")
    throws(function() c:add("no") end, "x: must be (number)")
end)

-- ---------------------------------------------------------------- keyword arguments

function greet(name: string = "nobody", age: number = 0, shout: boolean = false)
    return name, age, shout
end

test("keyword arguments fill the matching parameter", function()
    local name, age = greet(name = "John")
    eq(name, "John")
    eq(age, 0)
end)

test("positional and keyword arguments combine", function()
    local name, age, shout = greet("Ann", age = 30)
    eq(name, "Ann")
    eq(age, 30)
    eq(shout, false)
end)

test("keyword arguments apply in any order", function()
    local name, age = greet(age = 40, name = "Zed")
    eq(name, "Zed")
    eq(age, 40)
end)

test("providing a parameter both positionally and by keyword raises", function()
    throws(function() greet("Ann", name = "Bob") end, "was provided both positionally")
end)

test("keyword arguments on a function without metadata (native) raise", function()
    throws(function() print(a = 1) end)
end)

test("keyword-argument calls still type-check the filled parameters", function()
    throws(function() greet("Ann", age = "old") end, "age: must be (number)")
end)

-- KNOWN LIMITATION (documented): skipping a parameter leaves a hole in the argument list and `table.unpack`
-- drops everything after it, so `age` silently falls back to its default.
todo("keyword arguments may skip leading parameters", function()
    local name, age = greet(age = 30)
    eq(name, "nobody")
    eq(age, 30)
end)

-- ---------------------------------------------------------------- fsignature

function plainFn(first, second)
    return first
end

function noReturn(only)
    local x = only
end

test("fsignature describes a named function", function()
    local sig = leap.fsignature(plainFn)
    eq(sig.name, "plainFn")
    eq(#sig.args, 2)
    eq(sig.args[1].name, "first")
    eq(sig.args[2].name, "second")
    eq(sig.has_return, true)
end)

test("fsignature has no has_return for a function without a value return", function()
    local sig = leap.fsignature(noReturn)
    eq(sig.name, "noReturn")
    eq(sig.has_return, nil)
end)

test("fsignature of typed/default parameters lists the parameter names", function()
    local sig = leap.fsignature(defaults)
    eq(sig.args[1].name, "a")
    eq(sig.args[2].name, "b")
end)

test("fsignature of class methods includes the method name", function()
    class Sig {
        method = function(p, q)
            return p
        end
    }
    local sig = leap.fsignature(Sig.__prototype.method)
    eq(sig.name, "method")
    eq(#sig.args, 2, "the implicit self is not listed")
    eq(sig.args[1].name, "p")
    eq(sig.args[2].name, "q")
end)

test("fsignature is nil for functions Leap did not process", function()
    eq(leap.fsignature(print), nil)
    eq(leap.fsignature(string.format), nil)
end)

test("fsignature rejects non-functions", function()
    throws(function() leap.fsignature(5) end, "passed argument must be a function")
end)

test("leap.registerfunc attaches metadata and returns the function", function()
    local f = function() end
    local back = leap.registerfunc(f, { name = "custom", args = {} })
    same(back, f)
    eq(leap.fsignature(f).name, "custom")
end)

test("introspection metadata does not keep dead functions alive (weak keys)", function()
    local function entries()
        local n = 0
        for _ in pairs(__leap__introspection) do n = n + 1 end
        return n
    end

    fullgc()
    local before = entries()

    do
        for i = 1, 200 do
            leap.registerfunc(function() return i end, { name = "temp" })
        end
    end

    fullgc()
    eq(entries(), before, "registered closures are collected")
end)

-- Metadata of nested function expressions must describe each function itself (it used to leak between them).
function outer(p, q)
    return function(z) return z + p end
end

test("fsignature of a function that returns a closure describes the outer function", function()
    local sig = leap.fsignature(outer)
    eq(sig.name, "outer")
    eq(#sig.args, 2)
    eq(sig.args[1].name, "p")
    eq(sig.args[2].name, "q")
end)

local function makeNested(delay)
    local helper = function() return delay end
    local tick = function(n) return n + delay end
    return helper, tick
end

test("a nested function without parameters does not inherit the parameters of its parent", function()
    local helper, tick = makeNested(5)
    eq(#leap.fsignature(helper).args, 0)
    eq(leap.fsignature(helper).name, "helper")
    eq(#leap.fsignature(tick).args, 1)
    eq(leap.fsignature(tick).args[1].name, "n")
    eq(#leap.fsignature(makeNested).args, 1)
    eq(leap.fsignature(makeNested).args[1].name, "delay")
end)

local callbackThenNamed = function(cb) return cb end
callbackThenNamed(function(leaked, params) return leaked end)

local afterCallback = function() return 1 end

test("parameters of an anonymous callback do not leak into the next function", function()
    eq(#leap.fsignature(afterCallback).args, 0)
    eq(leap.fsignature(afterCallback).name, "afterCallback")
end)

test("every closure created from the same source line is described correctly", function()
    local _, tick1 = makeNested(1)
    local _, tick2 = makeNested(2)
    eq(leap.fsignature(tick1).name, "tick")
    eq(leap.fsignature(tick2).name, "tick")
    eq(leap.fsignature(tick1).args[1].name, "n")
    eq(leap.fsignature(tick2).args[1].name, "n")
end)

test("fsignature returns the same table every time for the same function", function()
    same(leap.fsignature(plainFn), leap.fsignature(plainFn))
end)

test("a function name computed at runtime is still reported", function()
    local key = "dynamicName"
    local holder = {}
    holder[key] = function(a, b) return a end

    local sig = leap.fsignature(holder.dynamicName)
    eq(sig.name, "dynamicName")
    eq(#sig.args, 2)
    eq(sig.args[2].name, "b")
    eq(sig.has_return, true)
end)

test("a runtime function name may contain the separator or be a non-string key", function()
    local holder = {}
    local pipeKey, numKey = "on|open", 7
    holder[pipeKey] = function(a, b) return a end
    holder[numKey] = function(c) end

    local pipeSig = leap.fsignature(holder["on|open"])
    eq(pipeSig.name, "on|open")
    eq(#pipeSig.args, 2)
    eq(pipeSig.args[2].name, "b")
    eq(pipeSig.has_return, true)

    local numSig = leap.fsignature(holder[7])
    eq(tostring(numSig.name), "7")
    eq(numSig.args[1].name, "c")
    eq(numSig.has_return, nil)
end)

test("a computed key in a table constructor names the function with its string value", function()
    local i, pipeKey = 2, "on|open"
    local holder = {
        ["m" .. i] = function(a, b) return a end,
        ["literal"] = function() end,
        [pipeKey] = function(c) return c end,
        [5] = function() end,
    }

    local computed = leap.fsignature(holder.m2)
    eq(computed.name, "m2")
    eq(#computed.args, 2)
    eq(computed.has_return, true)

    eq(leap.fsignature(holder.literal).name, "literal")
    eq(leap.fsignature(holder["on|open"]).name, "on|open")
    eq(tostring(leap.fsignature(holder[5]).name), "5")
end)

test("a computed key in a class body names the method and the class still works", function()
    class ComputedKeys {
        ["dyn" .. 1] = function(x) return x end,
        plain = function() return 1 end,
    }

    local o = new ComputedKeys()
    eq(o:dyn1(7), 7)
    eq(leap.fsignature(ComputedKeys.__prototype.dyn1).name, "dyn1")
end)

test("leap.registerfunc keeps accepting the table form, also mixed with generated metadata", function()
    local f = leap.registerfunc(function() end, { name = "manual", args = { { name = "x" } }, has_return = true })
    eq(leap.fsignature(f).name, "manual")
    eq(leap.fsignature(f).args[1].name, "x")
    eq(leap.fsignature(f).has_return, true)
end)

test("keyword arguments work on a function nested in another function", function()
    local run = function()
        local add = function(a, b) return a * 10 + b end
        return add(b = 2, a = 1)
    end

    eq(run(), 12)
end)
