// Builds a standalone cfx Lua (LuaGLM 5.4) CLI into tests/.bin so the suite runs on the same
// Lua dialect FiveM uses (vectors, table.type/clone, safe navigation, +=, backtick joaat, ...).
//
//   node tests/build_cfxlua.js            # clone (first time) + build
//   CXX="clang++" node tests/build_cfxlua.js   # use a specific C++ compiler instead of zig
//
// Source: https://github.com/citizenfx/lua, branch `luaglm-548` = the branch FiveM pins as `vendor/lua`
// (see citizenfx/fivem .gitmodules). Flags mirror the repo's own makefile (GRIT patches + GLM defines),
// minus readline. No game natives are included: it is only the language runtime.
//
// Needs a C++11 compiler. If none is configured it falls back to `zig c++` (zig on PATH, or the PyPI
// `ziglang` package via `python -m ziglang`), which needs no Visual Studio. Only Windows was verified.
const { spawnSync } = require("child_process");
const fs = require("fs");
const path = require("path");

const REPO = "https://github.com/citizenfx/lua.git";
const BRANCH = "luaglm-548";

const BIN_DIR = path.join(__dirname, ".bin");
const SRC_DIR = path.join(BIN_DIR, "cfxlua-src");
const EXE = path.join(BIN_DIR, process.platform === "win32" ? "cfxlua.exe" : "cfxlua");

function run(cmd, args, options = {}) {
    const r = spawnSync(cmd, args, { stdio: "inherit", ...options });
    if (r.error || r.status !== 0) {
        throw new Error(`Command failed: ${cmd} ${args.join(" ")}${r.error ? ` (${r.error.message})` : ""}`);
    }
}

function works(cmd, args) {
    const r = spawnSync(cmd, args, { encoding: "utf8" });
    return !r.error && r.status === 0;
}

// Returns [command, ...leadingArgs] for a C++ compiler
function findCompiler() {
    if (process.env.CXX) return process.env.CXX.split(" ");
    if (works("zig", ["version"])) return ["zig", "c++"];
    for (const py of ["python", "python3", "py"]) {
        if (works(py, ["-m", "ziglang", "version"])) return [py, "-m", "ziglang", "c++"];
    }
    throw new Error("No C++ compiler found. Set CXX, install zig, or `pip install ziglang`.");
}

fs.mkdirSync(BIN_DIR, { recursive: true });

if (!fs.existsSync(path.join(SRC_DIR, ".git"))) {
    console.log(`Cloning ${REPO} (${BRANCH})...`);
    run("git", ["clone", "--depth", "1", "--branch", BRANCH, REPO, SRC_DIR]);
    run("git", ["submodule", "update", "--init", "--depth", "1", "libs/glm"], { cwd: SRC_DIR });
}

const [cxx, ...cxxLead] = findCompiler();

const defines = [
    // makefile LUA_PATCHES (without GRIT_POWER_READLINE_HISTORY)
    "LUA_COMPAT_5_3", "LUA_C99_MATHLIB", "LUA_USE_LONGJMP", "GRIT_COMPAT_IPAIRS", "GRIT_POWER_DEFER_OLD",
    "GRIT_POWER_COMPOUND", "GRIT_POWER_INTABLE", "GRIT_POWER_TABINIT", "GRIT_POWER_SAFENAV", "GRIT_POWER_CCOMMENT",
    "GRIT_POWER_JOAAT", "GRIT_POWER_EACH", "GRIT_POWER_WOW", "GRIT_POWER_CHRONO", "GRIT_POWER_BLOB",
    // makefile GLM_FLAGS
    "GLM_ENABLE_EXPERIMENTAL", "GLM_FORCE_INTRINSICS", "GLM_FORCE_INLINE", "GLM_FORCE_Z_UP", "LUA_GLM_INCLUDE_ALL",
    "LUA_GLM_ALIASES", "LUA_GLM_GEOM_EXTENSIONS", "LUA_GLM_RECYCLE",
].map((d) => `-D${d}`);

const platform = process.platform === "win32" ? [] : ["-DLUA_USE_POSIX", "-ldl", "-lm"];

console.log(`Compiling with: ${[cxx, ...cxxLead].join(" ")}`);
run(
    cxx,
    [...cxxLead, "-std=c++11", "-O2", "-DNDEBUG", "-w", "-x", "c++", "onelua.c", "-o", EXE, ...defines,
        "-I.", "-Ilibs/glm", "-Ilibs/glm-binding", ...platform],
    { cwd: SRC_DIR }
);

console.log(`\nBuilt ${EXE}`);
