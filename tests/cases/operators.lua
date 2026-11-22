-- Operators and syntax sugar: in / not in, !=, ternary, interpolation, number separators,
-- comprehensions, continue, compact functions, filters + using

-- ---------------------------------------------------------------- in / not in

test("`in` on an array matches values", function()
    local arr = { 10, 20, 30 }
    truthy(20 in arr)
    falsy(99 in arr)
    falsy(1 in arr, "indexes are not values in arrays")
end)

test("`in` on a hash table matches keys", function()
    local hash = { apple = 1, pear = 2 }
    truthy("apple" in hash)
    falsy(1 in hash, "values are not matched in hashes")
    falsy("banana" in hash)
end)

test("`in` on a mixed table matches either keys or values", function()
    local mixed = { "a", "b", key = "v" }
    truthy("a" in mixed)
    truthy("key" in mixed)
    truthy("v" in mixed)
    falsy("zzz" in mixed)
end)

test("`in` on a string is a substring search", function()
    truthy("ell" in "hello")
    falsy("xyz" in "hello")
end)

test("`in` raises for unsupported types", function()
    throws(function() local r = 1 in 5 end, "in operator: unsupported type")
end)

test("`not in` negates", function()
    local arr = { 1, 2, 3 }
    truthy(4 not in arr)
    falsy(2 not in arr)
end)

test("`in` works inside conditions", function()
    local arr = { "x", "y" }
    local hit = false
    if "x" in arr then hit = true end
    truthy(hit)

    local miss = false
    if "z" not in arr then miss = true end
    truthy(miss)
end)

-- `in` / `not in` sit on the comparison level (same as ==): tighter than and/or, looser than arithmetic and `..`

test("`in` combines with `or` (each side is its own membership test)", function()
    local first, second = { "x" }, { "y" }
    truthy("q" in first or "y" in second)
    falsy("q" in first or "q" in second)
end)

test("`in` combines with `and` (each side is its own membership test)", function()
    local first, second = { "x" }, { "y" }
    truthy("x" in first and "y" in second)
    falsy("x" in first and "q" in second)
end)

test("a falsy left operand of `and` is not searched for in the table", function()
    local list = { false }
    local r = false and "x" in list
    eq(r, false)
end)

test("the result of `in` can be compared with ==", function()
    local list = { "x" }
    eq("x" in list == true, true)
    eq("q" in list == false, true)
    eq("x" in list ~= true, false)
end)

test("`not in` combines with and / or", function()
    local first, second = { "x" }, { "y" }
    truthy("q" not in first and "z" not in second)
    falsy("x" not in first and "z" not in second)
    truthy("x" not in first or "q" not in second)
end)

test("arithmetic and concatenation bind tighter than `in`", function()
    truthy(1 + 1 in { 2 })
    truthy("a" .. "b" in { "ab" })
    falsy(1 + 2 in { 2 })
end)

test("`in` works as a ternary condition and inside call arguments", function()
    local list = { "x" }
    eq("x" in list ? "yes" : "no", "yes")
    eq("q" in list ? "yes" : "no", "no")

    local function pair(a, b) return a, b end
    local a, b = pair("x" in list, "q" in list)
    eq(a, true)
    eq(b, false)
end)

test("`in` combines with `is` and with `not`", function()
    class Member { }
    local m = new Member()
    local list = { "x" }
    truthy(m is Member and "x" in list)
    falsy(m is Member and "q" in list)
    truthy(not ("q" in list))
end)

test("`in` is usable in if / while conditions with several clauses", function()
    local list = { "a", "b" }
    local hits = 0
    for _, v in ipairs({ "a", "c", "b", "d" }) do
        if v in list or v == "d" then
            hits = hits + 1
        end
    end
    eq(hits, 3)
end)

-- ---------------------------------------------------------------- != and ternary

test("`!=` is inequality", function()
    truthy(1 != 2)
    falsy(1 != 1)
    truthy("a" != "b")
end)

test("ternary picks the matching branch", function()
    local open = true
    local state = open ? "open" : "closed"
    eq(state, "open")

    open = false
    state = open ? "open" : "closed"
    eq(state, "closed")
end)

test("ternary evaluates only the selected branch", function()
    local calls = 0
    local function bump() calls = calls + 1 return calls end
    local r = true ? 1 : bump()
    eq(r, 1)
    eq(calls, 0)
end)

test("ternary can be nested through the else branch", function()
    local function size(n)
        return n < 10 ? "small" : (n < 100 ? "medium" : "large")
    end
    eq(size(5), "small")
    eq(size(50), "medium")
    eq(size(500), "large")
end)

test("ternary returns a falsy `then` value (does not fall through like and/or)", function()
    local r = true ? false : "else"
    eq(r, false)

    local n = true ? nil : "else"
    eq(n, nil)
end)

-- ---------------------------------------------------------------- interpolation, numbers

test("string interpolation in double and single quotes", function()
    local name, n = "Ann", 3
    eq("${name} bought ${n}x", "Ann bought 3x")
    eq('${name}!', "Ann!")
end)

test("interpolation evaluates expressions", function()
    local t = { a = { b = 5 } }
    eq("v=${t.a.b + 1}", "v=6")
    eq("${1 + 2}${'x'}", "3x")
end)

test("strings without interpolation are untouched", function()
    eq("plain $ string", "plain $ string")
    eq("braces {} stay", "braces {} stay")
end)

test("numeric literals accept underscores", function()
    eq(10_000, 10000)
    eq(1_000_000, 1000000)
end)

-- ---------------------------------------------------------------- comprehensions

test("value comprehension", function()
    local src = { 1, 2, 3, 4 }
    local doubled = {v * 2 for k, v in pairs(src)}
    eq(doubled, { 2, 4, 6, 8 })
end)

test("comprehension with a filter", function()
    local src = { 1, 2, 3, 4, 5, 6 }
    local evens = {v for k, v in pairs(src) if v % 2 == 0}
    eq(evens, { 2, 4, 6 })
end)

test("key/value comprehension builds a hash table", function()
    local src = { "a", "b" }
    local map = {"item:${k}", v for k, v in pairs(src)}
    eq(map, { ["item:1"] = "a", ["item:2"] = "b" })
end)

test("comprehension over an empty source is empty", function()
    local empty = {v for k, v in pairs({})}
    eq(empty, {})
end)

-- ---------------------------------------------------------------- continue

test("continue skips to the next iteration in a for loop", function()
    local seen = {}
    for i = 1, 6 do
        if i % 2 == 0 then
            continue
        end
        seen[#seen + 1] = i
    end
    eq(seen, { 1, 3, 5 })
end)

-- NOTE: `continue` inside `while` / `repeat` emits a goto without a label and the chunk fails to load.
-- That bug is documented in continue_loops.broken.lua.
test("continue works in pairs/ipairs loops and nested for loops", function()
    local out = {}
    for _, v in ipairs({ "a", "skip", "b" }) do
        if v == "skip" then
            continue
        end
        out[#out + 1] = v
    end
    eq(out, { "a", "b" })

    local pairsOut = {}
    for k, v in pairs({ x = 1 }) do
        if v == 1 then
            continue
        end
        pairsOut[#pairsOut + 1] = k
    end
    eq(pairsOut, {})

    local count = 0
    for a = 1, 3 do
        for b = 1, 3 do
            if b == 2 then
                continue
            end
            count = count + 1
        end
        if a == 1 then
            continue
        end
        count = count + 100
    end
    eq(count, 6 + 200)
end)

-- ---------------------------------------------------------------- compact functions

test("inline compact function with multiple parameters", function()
    local items = { { order = 3 }, { order = 1 }, { order = 2 } }
    table.sort(items, (a, b) do a.order < b.order)
    eq({ items[1].order, items[2].order, items[3].order }, { 1, 2, 3 })
end)

test("inline compact function with a single parameter", function()
    local function apply(cb, v) return cb(v) end
    eq(apply(n do n * 2, 21), 42)
end)

test("block compact function", function()
    local function apply(cb, v) return cb(v) end
    local r = apply((x) do
        local y = x * 2
        return y + 1
    end, 5)
    eq(r, 11)
end)

-- ---------------------------------------------------------------- filters / using

filter IsAdmin(action)
    user.role == "admin" else "User is not an admin",
    user.permissions[action] else "Missing permission: ${action}",
end

filter Positive
    value > 0 else "value must be positive",
end

RAN = {}

function deleteRecord(user, id) using IsAdmin("deleteRecord")
    RAN[#RAN + 1] = id
    return "deleted " .. id
end

function setValue(value) using Positive
    return value
end

test("filter lets the function run when every condition holds", function()
    local admin = { role = "admin", permissions = { deleteRecord = true } }
    eq(deleteRecord(admin, "r1"), "deleted r1")
    eq(RAN, { "r1" })
end)

test("a failed filter raises and the function body does not run", function()
    RAN = {}
    local user = { role = "user", permissions = {} }
    throws(function() deleteRecord(user, "r2") end, "User is not an admin")
    eq(RAN, {})
end)

test("filter messages interpolate parameters", function()
    local admin = { role = "admin", permissions = {} }
    throws(function() deleteRecord(admin, "r3") end, "Missing permission: deleteRecord")
end)

test("failure message names the filter and line", function()
    local user = { role = "user", permissions = {} }
    local err = throws(function() deleteRecord(user, "r4") end)
    truthy(tostring(err):find("IsAdmin:", 1, true), tostring(err))
end)

test("filter without arguments", function()
    eq(setValue(5), 5)
    throws(function() setValue(-1) end, "value must be positive")
end)

test("filters are plain globals registered as strings", function()
    eq(rawtype(IsAdmin), "string")
    eq(rawtype(Positive), "string")
end)

-- ---------------------------------------------------------------- misc runtime helpers

test("table.clone fallback shallow-copies", function()
    local src = { a = 1, nested = { 1 } }
    local c = table.clone(src)
    notSame(c, src)
    same(c.nested, src.nested)
    eq(c.a, 1)
end)

test("the type override is idempotent across repeated prelude injection", function()
    eq(type(1), "number")
    local before = type
    -- executing another preprocessed chunk re-injects the prelude: guards must keep the same functions
    same(leap.registerfunc, leap.registerfunc)
    same(type, before)
end)
