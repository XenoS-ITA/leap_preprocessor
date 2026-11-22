-- leap.serialize / leap.deserialize / skipSerialize

class Plain {
    name = "plain",
    count = 3,
    tags = { "a", "b" },

    constructor = function(extra)
        self.extra = extra
    end,

    method = function()
        return 1
    end
}

class Parent {
    pField = "p",
}

class Child extends Parent {
    cField = "c",
}

class CtorCounter {
    constructor = function()
        CTOR_RUNS = (CTOR_RUNS or 0) + 1
        self.fromCtor = true
    end
}

-- ---------------------------------------------------------------- serialize

test("serialize passes primitives through", function()
    eq(leap.serialize(5), 5)
    eq(leap.serialize("s"), "s")
    eq(leap.serialize(true), true)
    eq(leap.serialize(nil), nil)
end)

test("serialize deep-copies plain tables", function()
    local src = { a = 1, nested = { b = 2 } }
    local out = leap.serialize(src)
    eq(out, src)
    notSame(out, src)
    notSame(out.nested, src.nested)
end)

test("serialize keeps __type and instance fields, drops functions", function()
    local p = new Plain("x")
    local out = leap.serialize(p)

    eq(out.__type, "Plain")
    eq(out.extra, "x")
    eq(out.tags, { "a", "b" })
    eq(out.method, nil, "functions are dropped")
    eq(out.constructor, nil)
end)

test("serialized output is not an instance (no metatable)", function()
    local out = leap.serialize(new Plain("x"))
    eq(getmetatable(out), nil)
end)

test("serialize does not carry super / __parent / __stack", function()
    local c = new Child()
    c.__stack = { "x" }
    local out = leap.serialize(c)
    eq(out.super, nil)
    eq(out.__parent, nil)
    eq(out.__stack, nil)
    eq(out.__type, "Child")
end)

test("serialize does not mutate the source instance", function()
    local p = new Plain("x")
    local before = tostring(p)
    leap.serialize(p)
    eq(tostring(p), before)
    truthy(rawget(p, "tags"))
    eq(p:method(), 1)
end)

test("serialize recurses into nested instances", function()
    local outer = { child = new Plain("inner"), list = { new Plain("in-list") } }
    local out = leap.serialize(outer)
    eq(out.child.__type, "Plain")
    eq(out.child.extra, "inner")
    eq(out.list[1].__type, "Plain")
    eq(out.list[1].extra, "in-list")
end)

test("shared references serialize to one shared copy", function()
    local shared = { v = 1 }
    local out = leap.serialize({ a = shared, b = shared })
    same(out.a, out.b)
    notSame(out.a, shared)
end)

test("circular plain tables and instance cycles serialize into a matching cyclic copy", function()
    local a = { name = "a" }
    local b = { name = "b", back = a }
    a.next = b
    local out = leap.serialize({ root = a })
    same(out.root.next.back, out.root)

    local x = new Plain("x")
    local y = new Plain("y")
    x.other = y
    y.other = x
    local outX = leap.serialize(x)
    eq(outX.extra, "x")
    eq(outX.other.extra, "y")
    same(outX.other.other, outX, "instance cycle is preserved through the visited map")
end)

-- A custom `serialize` that re-enters leap.serialize WITHOUT passing `visited` creates a true loop
class Looper {
    other = nil,
    serialize = function()
        return { other = leap.serialize(self.other) }
    end
}

test("a true circular serialization loop raises and names the path", function()
    local a = new Looper()
    local b = new Looper()
    a.other = b
    b.other = a
    local err = throws(function() leap.serialize(a) end, "circular serialization loop detected")
    truthy(tostring(err):find("leap.serialize:", 1, true), tostring(err))
    truthy(tostring(err):find("<table>", 1, true) or tostring(err):find("<Looper>", 1, true), tostring(err))
end)

test("a failed serialize leaves the helper usable afterwards", function()
    local a = new Looper()
    local b = new Looper()
    a.other = b
    b.other = a
    throws(function() leap.serialize(a) end, "circular serialization loop")
    eq(leap.serialize({ ok = true }), { ok = true }, "internal stack is reset after an error")
    local p = new Plain("after")
    eq(leap.serialize(p).extra, "after")
end)

test("custom serialize method is used and tagged with __type", function()
    class Custom {
        secret = "s",
        serialize = function()
            return { shown = self.secret .. "!" }
        end
    }
    local out = leap.serialize(new Custom())
    eq(out, { shown = "s!", __type = "Custom" })
end)

test("custom serialize returning nil omits the object", function()
    class Hidden {
        serialize = function() return nil end
    }
    local out = leap.serialize({ keep = 1, hidden = new Hidden() })
    eq(out.keep, 1)
    eq(out.hidden, nil)
end)

test("custom serialize must return a table", function()
    class BadSerialize {
        serialize = function() return 5 end
    }
    throws(function() leap.serialize(new BadSerialize()) end, "custom serialize method must return a table")
end)

-- ---------------------------------------------------------------- skipSerialize

class Session {
    handle = nil,
    running = false,
    keep = "yes",
}
skipSerialize(Session, { "handle", "running" })

class SingleSkip {
    a = 1,
    b = 2,
}
skipSerialize(SingleSkip, "b")

test("skipSerialize with a list drops those fields", function()
    local s = new Session()
    s.handle = 123
    s.running = true
    s.keep = "kept"
    local out = leap.serialize(s)
    eq(out.handle, nil)
    eq(out.running, nil)
    eq(out.keep, "kept")
end)

test("skipSerialize with a single string", function()
    local s = new SingleSkip()
    s.a = 10
    s.b = 20
    local out = leap.serialize(s)
    eq(out.a, 10)
    eq(out.b, nil)
end)

test("skipSerialize rejects invalid arguments", function()
    throws(function() skipSerialize(5, "x") end, "#1 passed argument must be a class")
    throws(function() skipSerialize(Session, 5) end, "#2 passed argument must be a table or a string")
end)

class SkipChild extends Session {
    extraField = "e",
}

test("skipSerialize is inherited by subclasses", function()
    local s = new SkipChild()
    s.handle = 1
    s.extraField = "e"
    local out = leap.serialize(s)
    eq(out.handle, nil)
    eq(out.extraField, "e")
end)

test("skipSerialize on a subclass adds to the inherited list without touching the parent's", function()
    class SkipChild2 extends Session { }
    skipSerialize(SkipChild2, "extra")

    local child = new SkipChild2()
    child.handle = 1
    child.extra = 2
    child.keep = "k"
    local out = leap.serialize(child)
    eq(out.handle, nil, "inherited entry still skipped")
    eq(out.extra, nil, "own entry skipped")
    eq(out.keep, "k")

    local parent = new Session()
    parent.extra = 3
    eq(leap.serialize(parent).extra, 3, "parent list was not modified")
end)

-- ---------------------------------------------------------------- deserialize

test("deserialize primitives and plain tables", function()
    eq(leap.deserialize(5), 5)
    eq(leap.deserialize("s"), "s")
    eq(leap.deserialize({ a = { b = 1 } }), { a = { b = 1 } })
end)

test("deserialize rebuilds the class instance", function()
    local data = leap.serialize(new Plain("x"))
    local obj = leap.deserialize(data)

    eq(type(obj), "Plain")
    eq(obj.extra, "x")
    eq(obj.name, "plain")
    eq(obj:method(), 1)
    truthy(obj is Plain)
end)

test("deserialize does not run the constructor", function()
    CTOR_RUNS = 0
    local fresh = new CtorCounter()
    eq(CTOR_RUNS, 1)

    local obj = leap.deserialize(leap.serialize(fresh))
    eq(CTOR_RUNS, 1, "constructor not called again")
    eq(obj.fromCtor, true, "constructor-set field is restored from data")
end)

test("deserialize does not leave the skip flag set on the class", function()
    CTOR_RUNS = 0
    leap.deserialize(leap.serialize(new CtorCounter()))
    local again = new CtorCounter()
    eq(CTOR_RUNS, 2, "a normal instantiation after a deserialize runs the constructor")
end)

test("deserialize rebuilds nested instances and keeps shared references", function()
    local shared = new Plain("shared")
    local data = leap.serialize({ a = shared, b = shared, c = new Plain("solo") })
    local out = leap.deserialize(data)

    eq(type(out.a), "Plain")
    same(out.a, out.b)
    notSame(out.a, out.c)
    eq(out.c.extra, "solo")
end)

test("deserialize unknown class raises", function()
    throws(function() leap.deserialize({ __type = "NoSuchClassAnywhere" }) end, "Class 'NoSuchClassAnywhere' not found")
end)

test("custom deserialize hook receives the data", function()
    class Pos {
        x = 0,
        serialize = function() return { packed = self.x * 10 } end,
        deserialize = function(data) self.x = data.packed / 10 end,
    }
    local p = new Pos()
    p.x = 4
    local out = leap.deserialize(leap.serialize(p))
    eq(type(out), "Pos")
    eq(out.x, 4)
end)

test("round trip keeps table fields independent from the source", function()
    local p = new Plain("rt")
    table.insert(p.tags, "c")
    local out = leap.deserialize(leap.serialize(p))
    eq(out.tags, { "a", "b", "c" })
    notSame(out.tags, p.tags)
    table.insert(out.tags, "d")
    eq(#p.tags, 3)
end)

test("round trip through an inheritance chain keeps the class", function()
    local c = new Child()
    c.pField = "changed"
    local out = leap.deserialize(leap.serialize(c))
    eq(type(out), "Child")
    eq(out.pField, "changed")
    eq(out.cField, "c")
    truthy(out is Parent)
end)

test("deserialize hydrates {x,y,z} tables into vectors when vector types exist", function()
    local calls = {}
    local saved2, saved3, saved4 = vector2, vector3, vector4
    vector2 = function(x, y) calls[#calls + 1] = "v2"; return { kind = "v2", x, y } end
    vector3 = function(x, y, z) calls[#calls + 1] = "v3"; return { kind = "v3", x, y, z } end
    vector4 = function(x, y, z, w) calls[#calls + 1] = "v4"; return { kind = "v4", x, y, z, w } end

    local out = leap.deserialize({ a = { x = 1, y = 2 }, b = { x = 1, y = 2, z = 3 }, c = { x = 1, y = 2, z = 3, w = 4 } })

    vector2, vector3, vector4 = saved2, saved3, saved4

    eq(out.a.kind, "v2")
    eq(out.b.kind, "v3")
    eq(out.c.kind, "v4")
    eq(#calls, 3)
end)
