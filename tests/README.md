# Leap runtime tests

Behavior tests for the code Leap generates and injects (classes, inheritance, decorators, typed
params / kwargs, operators, filters, serialization, lifecycle). They exist so changes to the
preprocessor or the runtime prelude (`src/codeGenerator/staticSnippets/*.lua`) can be checked for
unchanged *logic*.

## Run

```
npm test                       # builds dist/leap.js from src/, then runs every case
node tests/run.js              # same without rebuilding (uses the current dist/leap.js)
node tests/run.js params -v    # only files matching "params", list passing tests too
```

The tests run on **cfx Lua** (citizenfx's LuaGLM 5.4, the dialect FiveM runs) via
`tests/.bin/cfxlua.exe`, a standalone build of the language runtime only (no game natives). If the binary
is missing, rebuild it (needs a C++11 compiler; falls back to `zig c++` / `pip install ziglang`):

```
node tests/build_cfxlua.js                       # CXX="clang++" to force a compiler
```

It clones `citizenfx/lua` branch `luaglm-548` (the branch FiveM pins as `vendor/lua`) into
`tests/.bin/cfxlua-src` (git-ignored). Only Windows was verified. Any Lua 5.4 CLI also works for most
cases: `LUA_BIN=path/to/lua node tests/run.js`.

## How it works

1. `tests/cases/*.lua` are **Leap source** files. `tests/preprocess.js` preprocesses them with
   `dist/leap.js` into `tests/.out/` (git-ignored).
2. Each output file runs in its own process (**fresh Lua state**): `cli_driver.lua` loads
   `harness.lua`, then the case, then prints one result line per test.
3. `run.js` parses those lines and prints a summary; the exit code is non-zero on failures.

## Writing tests

```lua
test("name", function() eq(actual, expected) end)   -- also: neq same notSame truthy falsy throws(fn, "substring") fullgc()
todo("name", function() ... end)                     -- a KNOWN BUG: assert the CORRECT behavior
```

- `todo` is expected to fail today and is reported separately. If it starts passing it is reported as
  `todo_passed` and fails the run, so you remember to promote it to a normal `test`.
- Files named `*.broken.lua` are expected to fail to *load* (e.g. the generated Lua is invalid). Same rule:
  once one loads and passes, rename it.
- Use the global `rawtype` for the real `type()` (the prelude overrides `type`).
- Grammar limits worth knowing: no member access on `new X()` directly (`new X().f` is a syntax error), and
  the inline compact form `name do <expr>` takes an expression, not a statement.

## Scope

These tests cover logic, not memory or speed. Memory/GC numbers differ per Lua build, so they do not
belong in pass/fail tests.
