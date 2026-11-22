-- Table fields: what every new instance gets (copy semantics of class table fields)

local shared = { 1, 2 }
local cyclic = { name = "loop" }
cyclic.self = cyclic

class Fields {
    empty = {},
    flat = { a = 1, b = "two", 3, 4 },
    withFunction = { run = function() return "ran" end },
    nested = { inner = { value = 1 }, list = { 1, 2, 3 } },
    aliased = { first = shared, second = shared },
    twin1 = shared,
    twin2 = shared,
    loop = cyclic,
    count = 0,
}

test("empty and flat table fields start with the prototype's contents", function()
    local o = new Fields()
    eq(o.empty, {})
    eq(o.flat, { a = 1, b = "two", 3, 4 })
    eq(o.nested, { inner = { value = 1 }, list = { 1, 2, 3 } })
end)

test("every instance gets its own copy of each table field, none is the prototype's table", function()
    local a, b = new Fields(), new Fields()
    local proto = Fields.__prototype

    for _, key in ipairs({ "empty", "flat", "nested", "withFunction" }) do
        notSame(a[key], b[key], key)
        notSame(a[key], proto[key], key)
        truthy(rawget(a, key), key .. " is stored on the instance")
    end

    notSame(a.nested.inner, b.nested.inner)
    notSame(a.nested.list, proto.nested.list)
end)

test("changing a copied table does not touch the prototype or other instances", function()
    local a, b = new Fields(), new Fields()
    a.empty.x = 1
    a.flat.a = 99
    a.nested.inner.value = 5
    a.nested.list[#a.nested.list + 1] = 4

    eq(b.empty, {})
    eq(b.flat.a, 1)
    eq(b.nested.inner.value, 1)
    eq(#b.nested.list, 3)
    eq(Fields.__prototype.flat.a, 1)
    eq(#Fields.__prototype.nested.list, 3)
end)

test("functions inside a table field are kept by reference", function()
    local a, b = new Fields(), new Fields()
    same(a.withFunction.run, b.withFunction.run)
    eq(a.withFunction.run(), "ran")
end)

test("a table referenced twice inside one field stays a single shared copy", function()
    local o = new Fields()
    same(o.aliased.first, o.aliased.second)
    notSame(o.aliased.first, shared)
    eq(o.aliased.first, { 1, 2 })
end)

test("two different fields that reference the same table get independent copies", function()
    local o = new Fields()
    notSame(o.twin1, o.twin2)
    o.twin1[#o.twin1 + 1] = 3
    eq(o.twin2, { 1, 2 })
end)

test("a cyclic table field is copied with its cycle intact", function()
    local o = new Fields()
    notSame(o.loop, cyclic)
    same(o.loop.self, o.loop)
    eq(o.loop.name, "loop")
end)

test("non-table fields are not copied", function()
    local o = new Fields()
    eq(rawget(o, "count"), nil)
    eq(o.count, 0)
end)

test("the prototype's current value is read at every instantiation", function()
    class Live { items = { "a" } }
    local first = new Live()
    eq(first.items, { "a" })

    Live.__prototype.items = { "b", "c" }
    local o = new Live()
    eq(o.items, { "b", "c" })
    notSame(o.items, Live.__prototype.items)

    Live.__prototype.items = 5
    local last = new Live()
    eq(rawget(last, "items"), 5)
end)

class FieldParent { base = { 1 }, shadowed = { "parent" } }
class FieldChild extends FieldParent { own = { 2 }, shadowed = { "child" } }

test("fields of every level are copied, the nearest definition wins", function()
    local o = new FieldChild()
    eq(o.base, { 1 })
    eq(o.own, { 2 })
    eq(o.shadowed, { "child" })
    notSame(o.base, FieldParent.__prototype.base)
end)

class FieldCtor {
    items = {},
    constructor = function(n)
        self.extra = { n }
        self.items[#self.items + 1] = n
    end
}

test("a constructor sees its own copy of the table fields and may add more", function()
    local a, b = new FieldCtor(1), new FieldCtor(2)
    eq(a.items, { 1 })
    eq(b.items, { 2 })
    eq(a.extra, { 1 })
    eq(FieldCtor.__prototype.items, {})
end)

class ManyFields {
    a = {}, b = {}, c = {}, d = {}, e = {}, f = {}, g = {}, h = {}, i = {},
}

test("a class with many table fields gets all of them", function()
    local o = new ManyFields()
    for _, key in ipairs({ "a", "b", "c", "d", "e", "f", "g", "h", "i" }) do
        eq(o[key], {}, key)
    end

    o.j = 1
    o.k = 2
    eq(o.j + o.k, 3)
end)
