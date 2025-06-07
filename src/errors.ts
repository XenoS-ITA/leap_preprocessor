import { LeapSyntaxError } from "./errorListener";

class LeapSyntaxErrors extends Error {
    errors: LeapSyntaxError[]

    constructor(errors: LeapSyntaxError[]) {
        super();

        this.errors = errors
    }
}

export { LeapSyntaxErrors };