<h1 align="center">Leap</h1>

<p align="center">
  <b>L</b>ua <b>e</b>xtension <b>a</b>ccessibility <b>p</b>re-processor
</p>

Leap is a source-to-source preprocessor. You write an extended dialect of Lua (classes, decorators, typed parameters,
`try`/`catch`, string interpolation, ...) and Leap turns it into plain Lua that runs on stock Lua 5.4 and on FiveM's
[cfx Lua](https://github.com/citizenfx/lua/tree/luaglm-dev/cfx) (LuaGLM). There is nothing to install at runtime: the
output is ordinary Lua plus a small helper library that Leap embeds in the generated files.

This is **V3**, a rewrite of the generator on top of an ANTLR4 grammar.

## What it adds to Lua

| Area | Features |
|---|---|
| Object model | `class`, `extends`, `new`, `self:super()`, `is`, `destructor`, built-in `Error` class |
| Functions | decorators, typed parameters (`name: Type`), default values, keyword arguments, compact functions (`(a, b) do ...`), filters + `using` |
| Operators | `in` / `not in`, `!=`, ternary (`a ? b : c`), string interpolation (`"${x}"`), `10_000` number separators |
| Control flow | `try` / `catch` / `throw`, `continue` |
| Data | table comprehensions (`{v for k, v in pairs(t)}`), `leap.serialize` / `leap.deserialize` |
| cfx Lua | the LuaGLM "power patches" (`+=`, `?.`, `{ .a, .b }`, `` `hash` ``, `defer`, ...) are parsed too |

## How it works

```
Leap source ──▶ lexer + parser ──▶ parse tree ──▶ code generator ──▶ plain Lua
                 (ANTLR4)                          (+ runtime injection)
```

**1. Parsing.** `grammar/leap/` holds an ANTLR4 lexer and parser grammar: the Lua 5.4 grammar extended with the Leap
and cfx syntax. ANTLR generates a TypeScript parser from it (`src/grammar/`). Syntax errors are collected by an error
listener and thrown together as a `LeapSyntaxErrors` with the line and column of each one.

**2. Code generation.** `src/codeGenerator/generator.ts` walks the parse tree rule by rule. Plain Lua nodes are copied
through unchanged, including their original whitespace; only Leap constructs are rewritten. For example a class becomes
a call to a class builder, a typed parameter becomes a check at the top of the function body, and a decorator becomes
`target = decorator(target) or target`. Every named function is also registered with its signature, a constant string
such as `"speak|times|r"` (name, parameters, whether it returns a value), which is what makes keyword arguments and
`leap.fsignature` possible.

**3. Runtime injection.** Some constructs need helper code at runtime (the class builder, the `in` and `is` operators,
keyword-argument calls, filters). While generating, the generator records which of those the file uses, and at the end
the matching snippets from `src/codeGenerator/staticSnippets/*.lua` are prepended to the output. Every helper is wrapped
in `if not x then ... end`, so many files can each carry the same prelude and only the first one defines it.

**4. Line numbers are preserved.** Generated code is written inline instead of on new lines: the prelude is prepended to
line 1 without a line break, and parameter checks sit on the same line as the function header. A Lua error at line N of
the output points at line N of your Leap source.

### Example

Input:

```lua
class Dog {
    sound = "woof",

    speak = function(times: number = 1)
        return "${self.sound} x${times}"
    end
}

local d = new Dog()
print(d:speak(2))
```

Output (the helper prelude that is prepended to line 1 is left out here):

```lua
_leap_internal_classBuilder("Dog",{
    sound = "woof",

    speak = leap.registerfunc(function(self, times)if times == nil then times = 1 end;if type(times) ~= "number" then error('times: must be (number) but got '..type(times)..'', 2) end;
        return ""..(self.sound).." x"..(times)..""
    end, "speak|times|r")
}, {})

local d = Dog()
print(d:speak(2))
```

### The runtime library

The injected prelude defines the `leap` table and a few `_leap_internal_*` helpers:

- **Classes**: the builder keeps one prototype per class and chains it to its parent's prototype, so inherited fields
  and methods are resolved by plain Lua `__index` lookups (and changes to a prototype are seen by existing instances).
  Instances only store what they change; primitive defaults and methods are read from the prototype. Table-valued
  fields are copied per instance (a table without nested tables is a single shallow clone). Decorators on class fields
  are applied when an instance is created. Only instances of a class that has a `destructor` get a `__gc` finalizer.
- **Metadata**: `leap.registerfunc` stores each function's signature string in a weak table, and `leap.fsignature`
  decodes it on demand into a table that is shared by every closure with the same signature.
- **Serialization**: `leap.serialize` / `leap.deserialize` convert class instances to and from plain data (e.g. to send
  them over the network).
- **`type()`** is wrapped so that it returns the class name for instances. The original is kept as `_type`.

## Using it

**In FiveM**, Leap runs as a resource. A resource opts in with `dependency "leap"` in its `fxmanifest.lua`; Leap
preprocesses its files into a `build/` folder and points the manifest at them (`leap_ignore` excludes files). Edit the
Leap source, never `build/`.

**As a library**, the built bundle exposes one function:

```js
const { preprocessCode } = require("./dist/leap.js");

const lua = preprocessCode(source);   // returns the generated Lua, throws LeapSyntaxErrors on a syntax error
```

## Project layout

| Path | Contents |
|---|---|
| `grammar/leap/` | ANTLR4 lexer and parser grammar of the Leap dialect (`grammar/lua5.4+cfxlua/` is the cfx Lua reference) |
| `src/grammar/` | Generated parser, do not edit by hand |
| `src/codeGenerator/` | The code generator, the injecter, and the runtime snippets in `staticSnippets/*.lua` |
| `src/index.ts` | Entry point (`preprocessCode`) |
| `scripts/` | `build.js` (esbuild bundle) and a scratch input for `npm start` |
| `dist/` | The built bundle (`leap.js`), committed |
| `tests/` | Behavior tests, see [`tests/README.md`](tests/README.md) |

## Development

```
npm install
npm run build         # bundle src/ into dist/leap.js; the runtime snippets are minified with luamin and embedded
npm start             # build, then preprocess scripts/test.lua into scripts/test_parsed.lua
npm run startfull     # same, but regenerate the parser from grammar/leap first (needs the ANTLR4 tool)
npm test              # build, then run the behavior tests
```

The tests preprocess Leap files, run the generated Lua in a fresh **cfx Lua** process each, and compare the results.
Run them before and after changing the generator or the runtime snippets to confirm the logic is unchanged. Known bugs
are kept in the suite as `todo` tests that assert the correct behavior.

## License

ISC, by XenoS.
