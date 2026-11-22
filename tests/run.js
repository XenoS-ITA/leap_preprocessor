// Runs the Leap runtime test suite on a Lua binary.
//
//   node tests/run.js [filter] [-v]
//
// Uses tests/.bin/cfxlua (LuaGLM 5.4, the dialect FiveM runs; build it with `node tests/build_cfxlua.js`),
// or the executable named by LUA_BIN (any Lua 5.4 CLI works too).
// Each case file runs in a fresh process (fresh Lua state).
//
// Exit code is non-zero if a test fails, a case file errors, or a known bug got fixed
// (`todo_passed`: promote the `todo(...)` to `test(...)` / rename the `.broken.lua` file).
const { spawnSync } = require("child_process");
const fs = require("fs");
const path = require("path");
const { preprocessCases } = require("./preprocess");

const args = process.argv.slice(2);
const verbose = args.includes("-v");
const filter = args.find((a) => !a.startsWith("-"));

const builtBin = path.join(__dirname, ".bin", process.platform === "win32" ? "cfxlua.exe" : "cfxlua");
const luaBin = process.env.LUA_BIN || (fs.existsSync(builtBin) ? builtBin : undefined);
if (!luaBin) {
    console.error("No Lua binary: run `node tests/build_cfxlua.js` (cfx Lua) or set LUA_BIN to a Lua 5.4 executable.");
    process.exit(1);
}

const HARNESS = path.join(__dirname, "harness.lua");
const DRIVER = path.join(__dirname, "cli_driver.lua");

const counts = { ok: 0, fail: 0, todo: 0, todo_passed: 0 };
const LABEL = { ok: "ok", fail: "FAIL", todo: "todo", todo_passed: "TODO-PASSED" };

const version = spawnSync(luaBin, ["-e", "io.write(_VERSION)"], { encoding: "utf8" });
console.log(`Lua runtime: ${version.stdout.trim() || "unknown"} (${luaBin})`);

for (const c of preprocessCases()) {
    const file = path.basename(c.outPath);
    if (filter && !file.includes(filter)) continue;

    const broken = file.endsWith(".broken.lua");
    const proc = spawnSync(luaBin, [DRIVER, HARNESS, c.outPath], { encoding: "utf8", timeout: 120000 });

    console.log(`\n== ${file}`);

    if (proc.error) {
        console.log(`  FAIL        could not run the Lua binary: ${proc.error.message}`);
        counts.fail++;
        continue;
    }

    const lines = proc.stdout.split(/\r?\n/).filter(Boolean);
    const fileError = lines.find((l) => l.startsWith("FILE_ERROR\t"));
    const results = lines
        .filter((l) => l.startsWith("RESULT\t"))
        .map((l) => {
            const [, status, name, message] = l.split("\t");
            return { status, name, message };
        });

    if (fileError || proc.status !== 0) {
        const message = fileError ? fileError.split("\t")[1] : proc.stderr.trim().split("\n")[0];

        if (broken) {
            console.log(`  todo        (file does not load, as expected) ${message.slice(0, 150)}`);
            counts.todo++;
        } else {
            console.log(`  FAIL        case file error: ${message}`);
            counts.fail++;
        }
        continue;
    }

    if (broken) {
        if (results.every((r) => r.status === "ok")) {
            console.log("  TODO-PASSED this file now loads and passes: rename it to drop `.broken`");
            counts.todo_passed++;
        } else {
            console.log("  todo        (file loads but its tests still fail)");
            counts.todo++;
        }
        continue;
    }

    for (const r of results) {
        counts[r.status]++;

        if (r.status !== "ok" || verbose) {
            console.log(`  ${LABEL[r.status].padEnd(11)} ${r.name}`);
            if (r.message && (r.status === "fail" || r.status === "todo")) console.log(`              ${r.message}`);
        }
    }
}

console.log("\n" + Object.entries(counts).map(([k, v]) => `${k}=${v}`).join("  "));
process.exit(counts.fail || counts.todo_passed ? 1 : 0);
