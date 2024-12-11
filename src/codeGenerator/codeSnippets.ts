import { IdentifierContext } from "../grammar/LuaParser";
import always from "./staticSnippets/always.lua";
import classCode from "./staticSnippets/class.lua";
import inOp from "./staticSnippets/in.lua";

namespace CodeSnippets {
    export function typeCheck(partypelist: IdentifierContext[], param: IdentifierContext) {
        let codeToInject: string = "";
        codeToInject += `if `

        const paramText = param.getText()

        partypelist.forEach((type, i) => {
            if (i > 0) codeToInject += ` and `

            codeToInject += `type(${paramText}) ~= "${type.getText()}"`
        })

        const typesText = partypelist.map(type => type.getText()).join(" | ")
        codeToInject += ` then error('${paramText}: must be (${typesText}) but got '..type(${paramText})) end;`

        return codeToInject
    }

    export function defaultValue(param: IdentifierContext, defaultConverted: string) {
        let codeToInject: string = "";

        codeToInject += `if ${param.getText()} == nil then `
        codeToInject += `${param.getText()} = ${defaultConverted}`
        codeToInject += ` end;`

        return codeToInject
    }

    export function decorator(funcName: string, decoratorName: string, decBody?: string) {
        let codeToInject: string = "";

        codeToInject += `;${funcName} = ${decoratorName}(${funcName}`
        if (decBody) { codeToInject += `, ${decBody}` }
        codeToInject += `)`

        return codeToInject
    }

    // Features
    export function alwaysInjected() {
        return always
    }

    export function classBuilder() {
        return classCode
    }

    export function inOperator() {
        return inOp
    }
}

export default CodeSnippets