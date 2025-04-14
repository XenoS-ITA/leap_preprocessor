const fs = require("fs");
const path = require('path');
const luamin = require('luamin');

const { build } = require("esbuild");
const { dependencies } = require('../package.json')

// Plugin to bundle lua files and minify them on build
const luaLoaderPlugin = {
    name: 'lua-loader',
    setup(build) {
        build.onLoad({ filter: /\.lua$/ }, async (args) => {
            const filePath = path.resolve(args.path);
            const luaCode = fs.readFileSync(filePath, 'utf-8');
            const minified = luamin.minify(luaCode);

            return {
                contents: `module.exports = \`${minified.replace(/`/g, '\\`')}\`;`,
                loader: 'js'
            };
        });
    }
};

build({
    entryPoints: ["src/*.ts"],
    bundle: true,
    minify: true,
    sourcemap: true,
    external: Object.keys(dependencies),
    plugins: [luaLoaderPlugin],
    platform: 'node',
    target: "es2021",
    outdir: "dist",
}).then(() => {
    const content = fs.readFileSync("dist/index.js", "utf8");
    fs.writeFileSync("dist/leap.js", content);
    fs.rmSync("dist/index.js");
})
