-- Test harness for the Leap runtime. Plain Lua (NOT preprocessed): it is loaded
-- before each preprocessed case file, in a fresh Lua state per case file.
--
-- Results are collected in the global table __TEST_RESULTS so any host (node, python, ...)
-- can read them: { { name = "...", status = "ok" | "fail" | "todo" | "todo_passed", message = "..." }, ... }

-- Keep the raw type function: the Leap prelude overrides `type` for class instances
rawtype = type

__TEST_RESULTS = {}

-- Minimal stand-in for the FiveM-only `table.type` (used by the Leap `in` operator).
-- cfxlua semantics: "array" = only 1..n keys, "hash" = no array part, "mixed" = both.
if not table.type then
    table.type = function(t)
        local total, n = 0, #t
        for _ in pairs(t) do total = total + 1 end
        if total == n then return "array" end
        if n == 0 then return "hash" end
        return "mixed"
    end
end

local function repr(v, depth)
    depth = depth or 0
    local t = rawtype(v)
    if t == "string" then return string.format("%q", v) end
    if t ~= "table" then return tostring(v) end
    if depth > 3 then return "{...}" end

    local keys = {}
    for k in pairs(v) do keys[#keys + 1] = k end
    table.sort(keys, function(a, b) return tostring(a) < tostring(b) end)

    local parts = {}
    for _, k in ipairs(keys) do
        parts[#parts + 1] = tostring(k) .. "=" .. repr(v[k], depth + 1)
    end
    return "{" .. table.concat(parts, ", ") .. "}"
end

local function deepEqual(a, b, seen)
    if a == b then return true end
    if rawtype(a) ~= "table" or rawtype(b) ~= "table" then return false end

    seen = seen or {}
    if seen[a] == b then return true end
    seen[a] = b

    for k, v in next, a do
        if not deepEqual(v, rawget(b, k), seen) then return false end
    end
    for k in next, b do
        if rawget(a, k) == nil then return false end
    end
    return true
end

local function record(name, status, message)
    __TEST_RESULTS[#__TEST_RESULTS + 1] = { name = name, status = status, message = message }
end

-- test("name", function() ... end): a thrown error (assertion or otherwise) fails the test
function test(name, fn)
    local ok, err = pcall(fn)
    if ok then record(name, "ok") else record(name, "fail", tostring(err)) end
end

-- todo("name", fn): documents a KNOWN BUG. The body asserts the CORRECT behavior and is
-- expected to fail today. It is reported as "todo" (not a failure). When it starts passing it is
-- reported as "todo_passed" so the marker can be promoted to a normal test().
function todo(name, fn)
    local ok, err = pcall(fn)
    if ok then record(name, "todo_passed") else record(name, "todo", tostring(err)) end
end

-- ---- assertions (all raise with level 2 so the message points at the test line) ----

function eq(actual, expected, msg)
    if not deepEqual(actual, expected) then
        error((msg and (msg .. ": ") or "") .. "expected " .. repr(expected) .. " but got " .. repr(actual), 2)
    end
end

function neq(actual, unexpected, msg)
    if deepEqual(actual, unexpected) then
        error((msg and (msg .. ": ") or "") .. "expected value to differ from " .. repr(unexpected), 2)
    end
end

function same(actual, expected, msg) -- reference equality
    if actual ~= expected then
        error((msg and (msg .. ": ") or "") .. "expected the same reference (" .. tostring(expected) .. ", got " .. tostring(actual) .. ")", 2)
    end
end

function notSame(actual, other, msg)
    if actual == other then
        error((msg and (msg .. ": ") or "") .. "expected different references", 2)
    end
end

function truthy(v, msg)
    if not v then error((msg or "expected a truthy value") .. " (got " .. repr(v) .. ")", 2) end
end

function falsy(v, msg)
    if v then error((msg or "expected a falsy value") .. " (got " .. repr(v) .. ")", 2) end
end

-- throws(fn, "plain substring"): fn must raise an error whose message contains the substring.
-- Returns the error message.
function throws(fn, substring)
    local ok, err = pcall(fn)
    if ok then error("expected an error but none was raised", 2) end

    local text = rawtype(err) == "table" and tostring(err) or tostring(err)
    if substring and not text:find(substring, 1, true) then
        error("expected error containing " .. string.format("%q", substring) .. " but got " .. string.format("%q", text), 2)
    end
    return err
end

-- Force finalizers to run (objects with __gc need an extra cycle after becoming unreachable)
function fullgc()
    for _ = 1, 4 do collectgarbage("collect") end
end
