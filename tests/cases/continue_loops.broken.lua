-- KNOWN BUGS (file-level todo). Files named *.broken.lua are expected to fail to load/run today:
-- `continue` inside `while` and `repeat` loops compiles to `goto continue_N` but the matching
-- `::continue_N::` label is never emitted (only `for` loops get the label), so Lua rejects the chunk.
--
-- When the generator is fixed this file loads and passes: runners then report it as "todo_passed"
-- and the file should be renamed to continue_loops.lua so it runs as a normal test.

test("continue skips an iteration in a while loop", function()
    local i, count = 0, 0
    while i < 5 do
        i = i + 1
        if i == 3 then
            continue
        end
        count = count + 1
    end
    eq(count, 4)
end)

test("continue skips an iteration in a repeat loop", function()
    local i, count = 0, 0
    repeat
        i = i + 1
        if i == 3 then
            continue
        end
        count = count + 1
    until i >= 5
    eq(count, 4)
end)
