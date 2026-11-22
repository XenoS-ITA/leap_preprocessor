-- Runs ONE preprocessed case file in the current (fresh) Lua state and prints its results, one per line.
-- Used by tests/run.js:   <lua-binary> tests/cli_driver.lua tests/harness.lua tests/.out/<case>.lua
--
-- Output lines (tab separated):
--   RESULT <status> <name> <message>     status = ok | fail | todo | todo_passed
--   FILE_ERROR <message>                 the case file failed to load / an error escaped a test
local harnessPath, casePath = arg[1], arg[2]

local function oneline(s)
    return (tostring(s):gsub("[\r\n\t]+", " "))
end

dofile(harnessPath)

local chunk, loadError = loadfile(casePath)
if not chunk then
    print("FILE_ERROR\t" .. oneline(loadError))
    os.exit(2)
end

-- NOTE: after this point `type` may be overridden by the Leap prelude, so only use rawtype/tostring here
local ok, runError = pcall(chunk)
if not ok then
    print("FILE_ERROR\t" .. oneline(runError))
end

for _, r in ipairs(__TEST_RESULTS) do
    print("RESULT\t" .. r.status .. "\t" .. oneline(r.name) .. "\t" .. oneline(r.message or ""))
end

os.exit(ok and 0 or 2)
