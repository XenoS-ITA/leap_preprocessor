-- Inheritance: extends, field/method lookup through the hierarchy, super, `is`, Error class

class Animal {
    legs = 4,
    sound = "...",
    tags = { "animal" },

    constructor = function(name: string = "unnamed")
        self.name = name
    end,

    speak = function()
        return self.name .. " says " .. self.sound
    end,

    describe = function()
        return "animal:" .. self.name
    end
}

class Dog extends Animal {
    sound = "woof",
    traits = { loyal = true },

    constructor = function(name)
        self:super(name)
        self.tricks = {}
    end,

    describe = function()
        return "dog>" .. self.super:describe()
    end,

    parentSound = function()
        return self.super.sound
    end
}

class Puppy extends Dog {
    sound = "yip",

    describe = function()
        return "puppy>" .. self.super:describe()
    end
}

test("child inherits fields and methods from the parent", function()
    local d = new Dog("rex")
    eq(d.legs, 4)
    eq(d:speak(), "rex says woof")
end)

test("child overrides parent fields", function()
    local a = new Animal("a")
    local d = new Dog("d")
    eq(a.sound, "...")
    eq(d.sound, "woof")
end)

test("self:super(...) runs the parent constructor", function()
    local d = new Dog("rex")
    eq(d.name, "rex")
    eq(d.tricks, {})
end)

test("parent constructor default parameters apply through super", function()
    local d = new Dog()
    eq(d.name, "unnamed")
end)

test("self.super:method() calls the parent method with the instance as self", function()
    local d = new Dog("rex")
    eq(d:describe(), "dog>animal:rex")
end)

test("self.super.field reads the parent prototype field", function()
    local d = new Dog("rex")
    eq(d:parentSound(), "...")
end)

test("three-level chain: super resolves lexically per class", function()
    local p = new Puppy("bit")
    eq(p:describe(), "puppy>dog>animal:bit")
    eq(p:speak(), "bit says yip")
    eq(p.legs, 4)
end)

test("table fields from every level are present and independent per instance", function()
    local a = new Puppy("a")
    local b = new Puppy("b")

    eq(a.tags, { "animal" })
    eq(a.traits, { loyal = true })
    notSame(a.tags, b.tags)
    notSame(a.traits, b.traits)

    table.insert(a.tags, "puppy")
    a.traits.loyal = false
    eq(b.tags, { "animal" })
    eq(b.traits.loyal, true)
    eq(Animal.__prototype.tags, { "animal" })
    eq(Dog.__prototype.traits.loyal, true)
end)

test("child overriding a table field replaces the parent's field", function()
    class Cat extends Animal {
        tags = { "cat", "feline" }
    }
    local c = new Cat("tom")
    eq(c.tags, { "cat", "feline" })
    local plain = new Animal("x")
    eq(plain.tags, { "animal" })
end)

test("prototype write on the parent is visible to child instances", function()
    local p = new Puppy("p")
    eq(p.legs, 4)
    Animal.__prototype.legs = 3
    eq(p.legs, 3)
    Animal.__prototype.legs = 4
end)

test("prototype write on a child shadows the parent for existing instances", function()
    local d = new Dog("d")
    eq(d.sound, "woof")
    Dog.__prototype.sound = "grr"
    eq(d.sound, "grr")
    Dog.__prototype.sound = "woof"
    eq(d.sound, "woof")
end)

-- Dedicated classes: these tests mutate prototypes, which must not leak into other tests
class CacheBase { legs = 4, speak = function() return "base" end }
class CacheChild extends CacheBase { }

test("defining a field on a child after it was cached from the parent takes precedence", function()
    -- `legs` only exists on CacheBase: reading it through a child instance caches "found on CacheBase"
    local c = new CacheChild()
    eq(c.legs, 4)
    CacheChild.__prototype.legs = 6
    eq(c.legs, 6, "stale lookup cache must be invalidated by the prototype write")
end)

test("a method added to a child after it was cached from the parent takes precedence", function()
    local c = new CacheChild()
    eq(c:speak(), "base")
    CacheChild.__prototype.speak = function(self) return "overridden" end
    eq(c:speak(), "overridden")
end)

class CacheBase2 { legs = 4 }
class CacheChild2 extends CacheBase2 { }

test("removing a child override (assigning nil) falls back to the parent's value", function()
    local c = new CacheChild2()
    eq(c.legs, 4)
    CacheChild2.__prototype.legs = 6
    eq(c.legs, 6)
    CacheChild2.__prototype.legs = nil
    eq(c.legs, 4)
end)

test("instances of siblings do not leak into each other", function()
    class Bird extends Animal { sound = "tweet", legs = 2 }
    local b = new Bird("b")
    local d = new Dog("d")
    eq(b.legs, 2)
    eq(d.legs, 4)
    eq(b.sound, "tweet")
    eq(d.sound, "woof")
end)

test("extending an undefined class raises ExtendingNotDefined", function()
    throws(function()
        class Orphan extends DoesNotExistAnywhere {
            x = 1
        }
    end, "ExtendingNotDefined: Orphan tried to extend a class that is not defined")
end)

class L1 { a = 1, who = function() return "L1" end }
class L2 extends L1 { b = 2 }
class L3 extends L2 { c = 3 }
class L4 extends L3 { d = 4 }
class L5 extends L4 { e = 5 }
class L6 extends L5 { f = 6 }

test("deep hierarchy (6 levels) resolves fields and methods", function()
    local o = new L6()
    eq({ o.a, o.b, o.c, o.d, o.e, o.f }, { 1, 2, 3, 4, 5, 6 })
    eq(o:who(), "L1")
    eq(type(o), "L6")
    truthy(o is L1)
    truthy(o is L4)
end)

class M1 { who = function() return "M1" end }
class M2 extends M1 { who = function() return "M2>" .. self.super:who() end }
class M3 extends M2 { who = function() return "M3>" .. self.super:who() end }

test("self.super:method() chains through overriding parents", function()
    local o = new M3()
    eq(o:who(), "M3>M2>M1")
end)

class G1 { who = function() return "G1" end }
class G2 extends G1 { }
class G3 extends G2 { who = function() return "G3>" .. self.super:who() end }

test("self.super:method() finds a method inherited from a grandparent", function()
    local o = new G3()
    eq(o:who(), "G3>G1")
end)

-- ---------------------------------------------------------------- `is` operator

test("`is` matches the exact class", function()
    local d = new Dog("d")
    truthy(d is Dog)
end)

test("`is` is inheritance-aware", function()
    local p = new Puppy("p")
    truthy(p is Puppy)
    truthy(p is Dog)
    truthy(p is Animal)
end)

test("`is` is false for unrelated or more derived classes", function()
    local d = new Dog("d")
    falsy(d is Puppy)
    falsy(d is Cat)
end)

class Standalone { }

-- KNOWN BUG: for an instance of a class with no parent, `_leap_internal_is_operator` indexes
-- `_obj.__prototype`, which is nil on instances, and raises instead of returning false.
todo("`is` is false (does not raise) for a root-class instance vs an unrelated class", function()
    local a = new Standalone()
    falsy(a is Dog)
end)

test("`is` is true for a root-class instance and its own class", function()
    local a = new Standalone()
    truthy(a is Standalone)
end)

test("`is` is false when the left side is nil", function()
    local nothing = nil
    falsy(nothing is Dog)
end)

test("`is` raises when the left side is a class and not an instance", function()
    throws(function()
        local r = Dog is Animal
    end, "must be a class instance, but got class")
end)

test("`is` on a primitive is false for a class", function()
    local n = 5
    falsy(n is Dog)
end)

-- ---------------------------------------------------------------- Error class

test("built-in Error stores the message and formats as <Class>: <message>", function()
    local e = new Error("something broke")
    eq(e.message, "something broke")
    eq(tostring(e), "Error: something broke")
end)

test("custom errors extend Error and may override toString", function()
    class ValidationError extends Error {
        toString = function()
            return "Invalid payload: " .. self.message
        end
    }
    local e = new ValidationError("missing id")
    eq(e.message, "missing id")
    eq(tostring(e), "Invalid payload: missing id")
    truthy(e is Error)
    truthy(e is ValidationError)
end)

test("custom error without toString uses the class name", function()
    class PlainError extends Error {}
    local e = new PlainError("nope")
    eq(tostring(e), "PlainError: nope")
end)

test("throw / try / catch round-trips class instances", function()
    class NotFound extends Error {}
    local caught
    try
        throw new NotFound("item 7")
    catch e then
        caught = e
    end

    truthy(caught is NotFound)
    truthy(caught is Error)
    eq(caught.message, "item 7")
end)

test("try / catch catches plain string errors and non-errors alike", function()
    local msg
    try
        error("plain failure", 0)
    catch e then
        msg = e
    end
    eq(msg, "plain failure")

    local value
    try
        throw 42
    catch e then
        value = e
    end
    eq(value, 42)
end)

test("try without a failure skips the catch block", function()
    local ran = false
    local reached = false
    try
        reached = true
    catch e then
        ran = true
    end
    truthy(reached)
    falsy(ran)
end)
