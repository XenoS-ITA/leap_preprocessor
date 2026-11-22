-- Object lifecycle: destructor / __gc, collectability of instances, no leaks through the shared caches

DESTROYED = {}

class WithDestructor {
    id = 0,
    destructor = function()
        DESTROYED[#DESTROYED + 1] = self.id
    end
}

class ChildOfDestructor extends WithDestructor { }

class NoDestructor {
    value = 1
}

function noopDeco(self, func) return nil end
function wrapDeco(self, func) return function(...) return func(...) end end

class DecoratedLifecycle {
    @noopDeco
    a = function() return 1 end,
    @wrapDeco
    b = function() return 2 end,
}

local function make(class, count)
    for i = 1, count do
        local o = class()
        o.id = i
    end
end

test("destructor runs when an instance is collected", function()
    DESTROYED = {}
    make(WithDestructor, 3)
    fullgc()
    table.sort(DESTROYED)
    eq(DESTROYED, { 1, 2, 3 })
end)

test("destructor sees the instance state (self)", function()
    DESTROYED = {}
    do
        local o = new WithDestructor()
        o.id = 42
    end
    fullgc()
    eq(DESTROYED, { 42 })
end)

test("destructor is inherited by subclasses", function()
    DESTROYED = {}
    make(ChildOfDestructor, 2)
    fullgc()
    eq(#DESTROYED, 2)
end)

test("classes without a destructor are collected silently", function()
    make(NoDestructor, 5)
    fullgc()
    truthy(true)
end)

test("instances are collectable (no hidden strong references)", function()
    local weak = setmetatable({}, { __mode = "v" })
    do
        weak[1] = new NoDestructor()
        weak[2] = new WithDestructor()
        weak[3] = new DecoratedLifecycle()
    end
    fullgc()
    eq(weak[1], nil, "plain instance")
    eq(weak[2], nil, "instance with destructor")
    eq(weak[3], nil, "decorated instance (closure <-> instance cycle)")
end)

test("decorated instances do not leak entries in the introspection table", function()
    local function entries()
        local n = 0
        for _ in pairs(__leap__introspection) do n = n + 1 end
        return n
    end

    fullgc()
    local before = entries()
    make(DecoratedLifecycle, 300)
    fullgc()
    eq(entries(), before, "wrappers registered per instance are collected with their instances")
end)

test("deserialized instances are collected and run destructors too", function()
    DESTROYED = {}
    do
        local data = leap.serialize((function() local o = new WithDestructor() o.id = 7 return o end)())
        local copy = leap.deserialize(data)
    end
    fullgc()
    table.sort(DESTROYED)
    eq(DESTROYED, { 7, 7 }, "the serialized source and the deserialized copy are both finalized")
end)

-- Pinned on purpose: __gc is chosen at instantiation, so a late destructor only reaches new instances
test("a destructor added to the prototype later does not run for existing instances", function()
    class LateDestructor { id = 0 }
    DESTROYED = {}

    local o = new LateDestructor()
    o.id = 99
    LateDestructor.__prototype.destructor = function(self)
        DESTROYED[#DESTROYED + 1] = self.id
    end
    o = nil

    fullgc()
    eq(DESTROYED, {})
end)

test("a destructor added to a parent prototype later runs for child instances created afterwards", function()
    class LateParent { id = 0 }
    class LateChild extends LateParent { }
    DESTROYED = {}

    LateParent.__prototype.destructor = function(self)
        DESTROYED[#DESTROYED + 1] = self.id
    end
    do
        local o = new LateChild()
        o.id = 11
    end

    fullgc()
    eq(DESTROYED, { 11 })
end)

test("a destructor assigned by the constructor runs", function()
    class CtorDestructor {
        id = 0,
        constructor = function(id)
            self.id = id
            self.destructor = function(this)
                DESTROYED[#DESTROYED + 1] = this.id
            end
        end
    }
    DESTROYED = {}

    do
        local o = new CtorDestructor(8)
    end

    fullgc()
    eq(DESTROYED, { 8 })
end)

test("a destructor added to the prototype later runs for instances created afterwards", function()
    class LateDestructor2 { id = 0 }
    DESTROYED = {}

    LateDestructor2.__prototype.destructor = function(self)
        DESTROYED[#DESTROYED + 1] = self.id
    end
    do
        local o = new LateDestructor2()
        o.id = 5
    end

    fullgc()
    eq(DESTROYED, { 5 })
end)

test("churn: many short-lived instances can be created and dropped", function()
    DESTROYED = {}
    for i = 1, 5000 do
        local o = new WithDestructor()
        o.id = i
    end
    fullgc()
    eq(#DESTROYED, 5000, "every dropped instance was finalized exactly once")
end)
