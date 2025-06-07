const fs = require("fs");
const { preprocessCode } = require('../dist/leap.js');

const input = fs.readFileSync('./scripts/test.lua', 'utf8');
const code = preprocessCode(input);
console.log(code);

fs.writeFileSync('./scripts/test_parsed.lua', code);