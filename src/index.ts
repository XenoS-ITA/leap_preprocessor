import { CharStream, CommonTokenStream } from 'antlr4';
import LuaLexer from './grammar/LuaLexer.js';
import LuaParser, { Start_Context } from './grammar/LuaParser.js';
import { CodeGenerator } from './codeGenerator/generator.js';
import { ExtendedErrorListener } from './errorListener.js';
import { LeapSyntaxErrors } from './errors.js';

// Need error handling and error reporting
function parseCode(code: string): Start_Context {
    const chars = new CharStream(code);
    const lexer = new LuaLexer(chars);
    const tokens = new CommonTokenStream(lexer);
    const parser = new LuaParser(tokens);

    const errorListener = new ExtendedErrorListener();

    parser.removeErrorListeners();
    parser.addErrorListener(errorListener);

    return parser.start_();
}

function preprocessCode(code: string): string {
    const chars = new CharStream(code);
    const lexer = new LuaLexer(chars);
    const tokens = new CommonTokenStream(lexer);
    const parser = new LuaParser(tokens);

    const errorListener = new ExtendedErrorListener();

    parser.removeErrorListeners();
    parser.addErrorListener(errorListener);

    const tree = parser.start_();
    let codePreprocessed = "";

    if (errorListener.getErrors().length > 0) {
        throw new LeapSyntaxErrors(errorListener.getErrors());
    }

    try {
        const gen = new CodeGenerator();
        codePreprocessed = gen.convert(tree);
    } catch (e) {
        throw Error("Internal error: " + e.stack);
    }

    return codePreprocessed;
}

export { preprocessCode }