import { CommonToken, ErrorListener } from 'antlr4';

type LeapSyntaxError = { line: number; column: number; message: string; offendingSymbol: any };

class ExtendedErrorListener extends ErrorListener<CommonToken> {
    errors: Array<LeapSyntaxError>;

    constructor() {
        super();
        this.errors = [];
    }

    syntaxError(recognizer: any, offendingSymbol: CommonToken, line: number, column: number, msg: string, e: any) {
        const error = {
            line,
            column,
            message: msg,
            offendingSymbol,
        };

        this.errors.push(error);
    }

    getErrors() {
        return this.errors;
    }
}

export { LeapSyntaxError, ExtendedErrorListener };