-- Parent / child resolution edge cases (prototype chain): overrides, shadowing, falsy values, late changes,
-- constructors, destructors, decorators, serialization and internal keys across several levels

-- ---------------------------------------------------------------- overrides and polymorphism

class Shape {
    name = "shape",
    sides = 0,
    describe = function() return self.name .. ":" .. self:kind() end,
    kind = function() return "generic" end,
    area = function() return self.sides end,
}

class Square extends Shape {
    name = "square",
    sides = 4,
    kind = function() return "square" end,
}

class Cube extends Square {
    kind = function() return "cube>" .. self.super:kind() end,
}

class Triangle extends Shape {
    sides = 3,
}

test("a parent method calls the child's override through self", function()
    eq(new Shape():describe(), "shape:generic")
    eq(new Square():describe(), "square:square")
end)

test("an override on the leaf wins and super reaches the parent's version", function()
    eq(new Cube():describe(), "square:cube>square")
end)

test("an override does not leak into the parent, siblings or the other levels", function()
    eq(new Shape():kind(), "generic")
    eq(new Triangle():kind(), "generic")
    eq(new Square():kind(), "square")
end)

test("a method defined only on the root is found from every level", function()
    eq(new Cube():area(), 4)
    eq(new Triangle():area(), 3)
    eq(new Shape():area(), 0)
end)

test("a child can replace a method with a non-function and the other way around", function()
    class TypeBase { v = 1, f = function() return "f" end }
    class TypeChild extends TypeBase { v = function() return "v-fn" end, f = "f-str" }

    local c = new TypeChild()
    eq(c:v(), "v-fn")
    eq(c.f, "f-str")

    local b = new TypeBase()
    eq(b.v, 1)
    eq(b:f(), "f")
end)

test("inherited methods are shared, not copied onto instances", function()
    local a, b = new Cube(), new Cube()
    same(a.area, b.area)
    eq(rawget(a, "area"), nil)

    local keys = {}
    for k in pairs(new Cube()) do keys[#keys + 1] = k end
    eq(keys, { "__type" })
end)

test("an instance field can shadow an inherited method for that instance only", function()
    local a, b = new Square(), new Square()
    a.kind = function() return "custom" end
    eq(a:kind(), "custom")
    eq(b:kind(), "square")
    a.kind = nil
    eq(a:kind(), "square")
end)

-- ---------------------------------------------------------------- falsy values and nil

class FlagBase { enabled = true, label = "on", count = 5 }
class FlagChild extends FlagBase { enabled = false, count = 0 }
class FlagGrand extends FlagChild { }

test("false and 0 on a child shadow the parent's truthy values", function()
    local c = new FlagChild()
    eq(c.enabled, false)
    eq(c.count, 0)
    eq(c.label, "on")
end)

test("a grandchild inherits the nearest value, including false", function()
    local g = new FlagGrand()
    eq(g.enabled, false)
    eq(g.count, 0)
    eq(g.label, "on")
end)

test("clearing an instance field falls back to the nearest prototype value", function()
    local g = new FlagGrand()
    g.enabled = true
    eq(g.enabled, true)
    g.enabled = nil
    eq(g.enabled, false)
end)

test("reading a missing key (any key type) returns nil at every level", function()
    local o = new Cube()
    eq(o.nothing, nil)
    eq(o[1], nil)
    eq(o[true], nil)
    eq(o[0.5], nil)
    eq(o.__nothing, nil)
end)

-- ---------------------------------------------------------------- changes after the classes exist

class LateRoot { }
class LateMid extends LateRoot { }
class LateLeaf extends LateMid { }

test("a method added to the root later is visible to leaf instances that already exist", function()
    local o = new LateLeaf()
    eq(o.hello, nil)
    LateRoot.__prototype.hello = function() return "hi" end
    eq(o:hello(), "hi")
end)

test("overrides added and removed at any level take effect immediately", function()
    LateRoot.__prototype.who = function() return "root" end
    local o = new LateLeaf()
    eq(o:who(), "root")

    LateMid.__prototype.who = function() return "mid" end
    eq(o:who(), "mid")

    LateLeaf.__prototype.who = function() return "leaf" end
    eq(o:who(), "leaf")

    LateLeaf.__prototype.who = nil
    eq(o:who(), "mid")

    LateMid.__prototype.who = nil
    eq(o:who(), "root")

    LateRoot.__prototype.who = nil
    eq(o.who, nil)
end)

test("changing a parent value later is visible unless a closer level defines it", function()
    class ValRoot { v = 1 }
    class ValMid extends ValRoot { }
    class ValLeaf extends ValMid { v = 10 }

    local mid, leaf = new ValMid(), new ValLeaf()
    ValRoot.__prototype.v = 2
    eq(mid.v, 2)
    eq(leaf.v, 10)
end)

test("super reads the parent's CURRENT method, not a captured one", function()
    class SupRoot { go = function() return "root1" end }
    class SupChild extends SupRoot { go = function() return "child>" .. self.super:go() end }

    local o = new SupChild()
    eq(o:go(), "child>root1")
    SupRoot.__prototype.go = function() return "root2" end
    eq(o:go(), "child>root2")
end)

test("redefining a class that extends its own previous definition keeps both layers", function()
    class Layered { a = 1, who = function() return "old" end }
    class Layered extends Layered { b = 2 }

    local o = new Layered()
    eq({ o.a, o.b }, { 1, 2 })
    eq(o:who(), "old")
end)

-- ---------------------------------------------------------------- internal keys

test("__parent and __prototype keep their meaning on classes and instances", function()
    local o = new Cube()
    same(Cube.__parent, Square)
    same(Square.__parent, Shape)
    eq(Shape.__parent, nil)
    same(o.__parent, Square)
    eq(o.__prototype, nil)
    eq(o.__type, "Cube")
    eq(Cube.__type, "Cube")
    same(Cube.__prototype.__parent, Square)
end)

test("internal (__) prototype keys of a parent resolve through the chain", function()
    Shape.__prototype.__meta = "m"
    local square, cube = new Square(), new Cube()
    eq(square.__meta, "m")
    eq(cube.__meta, "m")
    Shape.__prototype.__meta = nil
end)

-- ---------------------------------------------------------------- static access through the class table

test("class tables read inherited fields and expose inherited methods", function()
    eq(Cube.sides, 4)
    eq(Cube.name, "square")
    eq(Triangle.name, "shape")
    eq(type(Cube.kind), "function")
    eq(Cube.nothing, nil)
end)

test("an inherited method called through a subclass receives the real arguments", function()
    class StaticBase { add = function(a, b) return a + b end }
    class StaticChild extends StaticBase { }
    eq(StaticChild:add(2, 3), 5)
end)

-- ---------------------------------------------------------------- constructors

ORDER = {}

class CtorRoot {
    tag = "root",
    constructor = function(x)
        ORDER[#ORDER + 1] = "root:" .. tostring(x)
        self.x = x
        self.seen = self:label()
    end,
    label = function() return "root-label" end,
}

class CtorMid extends CtorRoot { }

class CtorLeaf extends CtorMid {
    tag = "leaf",
    label = function() return "leaf-label:" .. self.tag end,
}

class CtorSkip extends CtorRoot {
    constructor = function()
        ORDER[#ORDER + 1] = "skip"
    end,
}

class CtorChain extends CtorMid {
    constructor = function(x)
        ORDER[#ORDER + 1] = "chain"
        self:super(x)
    end,
}

test("a child without a constructor inherits the nearest parent constructor and its arguments", function()
    ORDER = {}
    local o = new CtorLeaf(7)
    eq(o.x, 7)
    eq(ORDER, { "root:7" })
end)

test("a constructor of a parent can call a method overridden by the child, with the child's defaults", function()
    local o, root = new CtorLeaf(1), new CtorRoot(1)
    eq(o.seen, "leaf-label:leaf")
    eq(root.seen, "root-label")
end)

test("a child constructor that does not call super skips the parent constructor", function()
    ORDER = {}
    local o = new CtorSkip()
    eq(ORDER, { "skip" })
    eq(o.x, nil)
end)

test("super skips levels without a constructor and reaches the ancestor", function()
    ORDER = {}
    local o = new CtorChain(3)
    eq(ORDER, { "chain", "root:3" })
    eq(o.x, 3)
end)

-- ---------------------------------------------------------------- tostring

class StrRoot { toString = function() return "root-string" end }
class StrMid extends StrRoot { }
class StrLeaf extends StrMid { toString = function() return "leaf-string" end }

test("toString is inherited and can be overridden", function()
    eq(tostring(new StrMid()), "root-string")
    eq(tostring(new StrLeaf()), "leaf-string")
end)

-- ---------------------------------------------------------------- destructors

DESTROYED = {}

class DtorRoot { destructor = function() DESTROYED[#DESTROYED + 1] = "root" end }
class DtorMid extends DtorRoot { }
class DtorLeaf extends DtorMid { }
class DtorOverride extends DtorMid { destructor = function() DESTROYED[#DESTROYED + 1] = "override" end }
class DtorNone { }
class DtorNoneChild extends DtorNone { }

local function drop(class)
    local _ = new class()
end

test("a grandparent destructor runs for a leaf instance, exactly once", function()
    DESTROYED = {}
    drop(DtorLeaf)
    fullgc()
    eq(DESTROYED, { "root" })
end)

test("a child destructor replaces the inherited one", function()
    DESTROYED = {}
    drop(DtorOverride)
    fullgc()
    eq(DESTROYED, { "override" })
end)

test("a hierarchy with no destructor never runs one", function()
    DESTROYED = {}
    drop(DtorNoneChild)
    fullgc()
    eq(DESTROYED, {})
end)

test("a destructor added to the root later reaches new instances of every level", function()
    DESTROYED = {}
    DtorNone.__prototype.destructor = function() DESTROYED[#DESTROYED + 1] = "late" end
    drop(DtorNoneChild)
    drop(DtorNone)
    fullgc()
    eq(DESTROYED, { "late", "late" })
end)

-- ---------------------------------------------------------------- decorators across the hierarchy

APPLIED = {}

function mark(self, func, label)
    APPLIED[#APPLIED + 1] = self.__type .. ":" .. label
    return nil
end

function loud(self, func)
    return function(...) return "!" .. func(...) end
end

class DecBase {
    @mark("base")
    run = function() return "base-run" end,

    @loud
    say = function() return "base" end,
}

class DecMid extends DecBase {
    @mark("mid")
    walk = function() return "mid-walk" end,
}

class DecLeaf extends DecMid { }

class DecOverride extends DecBase {
    say = function() return "child" end,
}

local function sorted(list)
    local copy = table.clone(list)
    table.sort(copy)
    return copy
end

test("each decorator of every level is applied exactly once per instance", function()
    APPLIED = {}
    new DecLeaf()
    eq(sorted(APPLIED), { "DecLeaf:base", "DecLeaf:mid" })

    APPLIED = {}
    new DecMid()
    eq(sorted(APPLIED), { "DecMid:base", "DecMid:mid" })

    APPLIED = {}
    new DecBase()
    eq(APPLIED, { "DecBase:base" })
end)

test("a decorator of the parent also wraps the child's override of that method", function()
    eq(new DecBase():say(), "!base")
    eq(new DecOverride():say(), "!child")
end)

test("a decorated method of the parent is reachable undecorated through super", function()
    class DecSuper extends DecBase {
        say = function() return "sub>" .. self.super:say() end,
    }
    eq(new DecSuper():say(), "!sub>base")
end)

test("decorated methods are per instance and do not leak into the prototypes", function()
    local a, b = new DecLeaf(), new DecLeaf()
    truthy(rawget(a, "say"))
    notSame(a.say, b.say)
    truthy(rawget(DecBase.__prototype, "say"))
    eq(rawget(DecLeaf.__prototype, "say"), nil)
    eq(a:say(), "!base")
end)

-- ---------------------------------------------------------------- serialization across the hierarchy

class SerRoot {
    serialize = function() return { kind = "custom" } end,
}
class SerChild extends SerRoot { }

class IgnRoot { }
skipSerialize(IgnRoot, "secret")
class IgnMid extends IgnRoot { }
class IgnLeaf extends IgnMid { }
class IgnOwn extends IgnMid { }
skipSerialize(IgnOwn, "token")

test("a serialize method of an ancestor is used and the type is the instance's class", function()
    local out = leap.serialize(new SerChild())
    eq(out.kind, "custom")
    eq(out.__type, "SerChild")
end)

test("the ignore list of the root applies two levels down", function()
    local o = new IgnLeaf()
    o.secret = 1
    o.keep = 2
    local out = leap.serialize(o)
    eq(out.secret, nil)
    eq(out.keep, 2)
end)

test("a subclass adding to the ignore list does not change its parent or siblings", function()
    local own, leaf, root = new IgnOwn(), new IgnLeaf(), new IgnRoot()
    own.secret, own.token = 1, 2
    leaf.token = 3
    root.token = 4

    local out = leap.serialize(own)
    eq(out.secret, nil)
    eq(out.token, nil)
    eq(leap.serialize(leaf).token, 3)
    eq(leap.serialize(root).token, 4)
end)

test("an ancestor adding to the ignore list later reaches subclasses that have no list of their own", function()
    class IgnLateRoot { }
    skipSerialize(IgnLateRoot, "first")
    class IgnLateLeaf extends IgnLateRoot { }
    skipSerialize(IgnLateRoot, "second")

    local o = new IgnLateLeaf()
    o.first, o.second, o.keep = 1, 2, 3
    local out = leap.serialize(o)
    eq(out.first, nil)
    eq(out.second, nil)
    eq(out.keep, 3)
end)

-- ---------------------------------------------------------------- table fields across the hierarchy

class TblRoot { items = { "r" }, cfg = { depth = { n = 1 } } }
class TblMid extends TblRoot { extra = { "m" } }
class TblLeaf extends TblMid { }

test("table fields of every level are copied per instance, deeply, in a 3-level chain", function()
    local a, b = new TblLeaf(), new TblLeaf()
    notSame(a.items, b.items)
    notSame(a.cfg.depth, b.cfg.depth)
    a.items[#a.items + 1] = "x"
    a.cfg.depth.n = 99
    eq(b.items, { "r" })
    eq(b.cfg.depth.n, 1)
    eq(TblRoot.__prototype.cfg.depth.n, 1)
    eq(a.extra, { "m" })
end)

-- ---------------------------------------------------------------- deep chains

test("a 60-level hierarchy resolves the first and the last method", function()
    local last
    for i = 1, 60 do
        local base = i == 1 and {} or _G["Deep" .. (i - 1)]
        local proto = {}
        proto["m" .. i] = function() return i end
        _leap_internal_classBuilder("Deep" .. i, proto, base)
        last = _G["Deep" .. i]
    end

    local o = last()
    eq(o.m1(), 1)
    eq(o.m30(), 30)
    eq(o.m60(), 60)
    eq(o.m61, nil)
    truthy(o is Deep1)
end)
