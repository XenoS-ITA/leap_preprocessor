-- Core class behavior: instantiation, fields, prototype reads/writes, constructors, tostring

class Counter {
    count = 0,
    label = "counter",

    increment = function(by: number = 1)
        self.count = self.count + by
        return self.count
    end,

    getLabel = function()
        return self.label
    end
}

class WithCtor {
    constructor = function(a, b)
        self.a = a
        self.b = b
    end
}

class WithTables {
    items = {},
    config = { nested = { depth = 1 }, list = { 1, 2, 3 } },
}

test("instance reads primitive defaults from the prototype", function()
    local c = new Counter()
    eq(c.count, 0)
    eq(c.label, "counter")
end)

test("methods receive self implicitly", function()
    local c = new Counter()
    eq(c:increment(), 1)
    eq(c:increment(5), 6)
    eq(c.count, 6)
    eq(c:getLabel(), "counter")
end)

test("`new X()` and `X()` are equivalent", function()
    local a = Counter()
    local b = new Counter()
    eq(type(a), "Counter")
    eq(type(b), "Counter")
end)

test("writing a field on an instance does not touch the prototype or other instances", function()
    local a = new Counter()
    local b = new Counter()
    a.count = 10
    a.label = "changed"

    eq(a.count, 10)
    eq(b.count, 0)
    eq(b.label, "counter")
    eq(Counter.__prototype.count, 0)
    eq(Counter.__prototype.label, "counter")
end)

test("instance fields shadow prototype fields (rawget)", function()
    local c = new Counter()
    eq(rawget(c, "count"), nil, "unset primitive is not copied onto the instance")
    c.count = 3
    eq(rawget(c, "count"), 3)
end)

test("constructor receives arguments", function()
    local o = new WithCtor(1, "two")
    eq(o.a, 1)
    eq(o.b, "two")
end)

test("constructor errors propagate", function()
    class Thrower {
        constructor = function()
            error("boom from ctor")
        end
    }
    throws(function() local t = new Thrower() end, "boom from ctor")
end)

test("table fields are deep-copied per instance", function()
    local a = new WithTables()
    local b = new WithTables()

    notSame(a.items, b.items)
    notSame(a.config, b.config)
    notSame(a.config.nested, b.config.nested)
    notSame(a.config.list, b.config.list)

    table.insert(a.items, "x")
    a.config.nested.depth = 99
    a.config.list[1] = 100

    eq(#b.items, 0)
    eq(b.config.nested.depth, 1)
    eq(b.config.list, { 1, 2, 3 })
    eq(WithTables.__prototype.config.nested.depth, 1, "prototype table is not mutated")
    eq(#WithTables.__prototype.items, 0)
end)

test("table fields start with the prototype's contents", function()
    local a = new WithTables()
    eq(a.config, { nested = { depth = 1 }, list = { 1, 2, 3 } })
    eq(a.items, {})
end)

test("prototype writes are visible to existing instances (cache is invalidated)", function()
    local c = new Counter()
    eq(c.label, "counter") -- primes the lookup cache
    Counter.__prototype.label = "updated"
    eq(c.label, "updated")
    local fresh = new Counter()
    eq(fresh.label, "updated")
    Counter.__prototype.label = "counter"
end)

test("methods added to the prototype later are callable on existing instances", function()
    local c = new Counter()
    Counter.__prototype.late = function(self) return "late:" .. self.count end
    eq(c:late(), "late:0")
end)

test("missing fields read as nil", function()
    local c = new Counter()
    eq(c.doesNotExist, nil)
    eq(c.alsoMissing, nil)
end)

test("class tables expose __type and __prototype", function()
    eq(Counter.__type, "Counter")
    truthy(Counter.__prototype)
    eq(Counter.__prototype.label, "counter")
end)

test("instances expose __type", function()
    local c = new Counter()
    eq(c.__type, "Counter")
end)

test("assigning a non-internal property on the class errors", function()
    throws(function() Counter.something = 1 end, "attempt to assign class property 'something' directly")
end)

test("assigning an internal (__) property on the class is allowed", function()
    Counter.__custom = 5
    eq(rawget(Counter, "__custom"), 5)
end)

test("type() returns the class name for instances and the raw type otherwise", function()
    eq(type(new Counter()), "Counter")
    eq(type(1), "number")
    eq(type("s"), "string")
    eq(type({}), "table")
    eq(type(print), "function")
    eq(type(nil), "nil")
end)

class WithStatic {
    echo = function(a, b)
        return a, b
    end,

    selfIsNil = function()
        return self == nil
    end
}

test("methods called through the class (static style) receive nil self and the real args", function()
    -- `Class:method(x)` : the class table passed by the colon is dropped, self is nil
    local a, b = WithStatic:echo(1, 2)
    eq(a, 1)
    eq(b, 2)
    truthy(WithStatic:selfIsNil())
end)

test("non-function class fields are returned as-is", function()
    eq(Counter.label, "counter")
    eq(Counter.count, 0)
end)

test("default tostring lists instance fields", function()
    local o = new WithCtor(1, "two")
    local s = tostring(o)
    truthy(s:find("<WithCtor:", 1, true), s)
    truthy(s:find("a: 1", 1, true), s)
    truthy(s:find('b: "two"', 1, true), s)
end)

test("tostring uses toString when defined", function()
    class Pretty {
        toString = function() return "pretty!" end
    }
    local p = new Pretty()
    eq(tostring(p), "pretty!")
end)

test("leap.minimal hides fields in tostring", function()
    local o = new WithCtor(1, "two")
    leap.minimal = true
    local s = tostring(o)
    leap.minimal = false
    truthy(s:find("<WithCtor:", 1, true), s)
    falsy(s:find("a: 1", 1, true), s)
end)

test("tostring of table fields prints nested instances compactly", function()
    local outer = new WithCtor(new Counter(), nil)
    local s = tostring(outer)
    truthy(s:find("<Counter:", 1, true), s)
end)

test("redefining a class replaces the global and keeps instances working", function()
    class Redefined { v = 1, get = function() return self.v end }
    local old = new Redefined()
    class Redefined { v = 2, get = function() return self.v end }
    local fresh = new Redefined()
    eq(fresh:get(), 2)
    eq(old:get(), 1, "old instances keep the old prototype")
end)
