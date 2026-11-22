// Preprocesses every Leap test case in tests/cases into plain Lua under tests/.out
// using the built preprocessor (dist/leap.js). Usage: node tests/preprocess.js
//
// Exported for runners: preprocessCases() -> [{ name, source, outPath }]
const fs = require("fs");
const path = require("path");

const CASES_DIR = path.join(__dirname, "cases");
const OUT_DIR = path.join(__dirname, ".out");

function preprocessCases() {
    const { preprocessCode } = require("../dist/leap.js");
    fs.mkdirSync(OUT_DIR, { recursive: true });

    return fs
        .readdirSync(CASES_DIR)
        .filter((f) => f.endsWith(".lua"))
        .sort()
        .map((file) => {
            const name = path.basename(file, ".lua");
            let source;

            try {
                source = preprocessCode(fs.readFileSync(path.join(CASES_DIR, file), "utf8"));
            } catch (e) {
                // The preprocessor throws an object with an `errors` list; keep the output readable
                const details = (e.errors || [e]).map((x) => `  line ${x.line}:${x.column} ${x.msg || x.message || x}`).join("\n");
                throw new Error(`Failed to preprocess ${file}\n${details}`);
            }

            const outPath = path.join(OUT_DIR, file);

            fs.writeFileSync(outPath, source);
            return { name, source, outPath };
        });
}

module.exports = { preprocessCases, CASES_DIR, OUT_DIR };

if (require.main === module) {
    const cases = preprocessCases();
    console.log(`Preprocessed ${cases.length} case file(s) into ${OUT_DIR}`);
}
