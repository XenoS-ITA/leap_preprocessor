import { IdentifierContext } from "../grammar/LuaParser";
import always from "./staticSnippets/always.lua";
import classCode from "./staticSnippets/class.lua";
import inOp from "./staticSnippets/in.lua";
import usingOp from "./staticSnippets/using.lua";
import callKargs from "./staticSnippets/kargs.lua"
import Code from "./manager";

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
        codeToInject += ` then error('${paramText}: must be (${typesText}) but got '..type(${paramText}), 2) end;`

        return codeToInject
    }

    export function defaultValue(param: IdentifierContext, defaultConverted: string) {
        let codeToInject: string = "";

        codeToInject += `if ${param.getText()} == nil then `
        codeToInject += `${param.getText()} = ${defaultConverted}`
        codeToInject += ` end;`

        return codeToInject
    }

    function decoratorMetatable(funcName: string, self?: boolean) {
        let codeToInject: string = "";

        codeToInject += `setmetatable(`
            codeToInject += `{name = "${funcName}", og = ${self ? "self." : ""}${funcName}}`
            codeToInject += `, `
            codeToInject += `{__index = ${self ? "self." : ""}${funcName}, __call = function(__, ...) return __.og(${self ? "self," : ""}...) end}`
        codeToInject += ")"

        return codeToInject
    }

    export function decorator(funcName: string, decoratorName: string, decBody?: string) {
        let codeToInject: string = "";

        codeToInject += `;${funcName} = ${decoratorName}(${funcName}`

        if (decBody) codeToInject += `, ${decBody}`

        codeToInject += `)`
        codeToInject += ` or ${funcName};` // Preserve function without metatable garbage (fallback to original function)

        return codeToInject
    }

    export function classDecorator(className:string, funcName: string, decoratorName: string, decBody?: string) {
        let codeToInject: string = "";

        codeToInject += `table.insert(${className}.__prototype._leap_internal_decorators, {name = "${funcName}", decoratorName = "${decoratorName}", args = {${decBody || ""}}});`

        return codeToInject
    }

    export function functionIntrospection(functionName: string, injectBody, injectArgs, functionReturn) {
        let code = new Code();

        code.add("leap.registerfunc(function")
            injectBody(code)
            code.add(", {")
            code.add("args={")
                injectArgs(code)
            code.add("},")

            if (functionName && functionName.length > 0) {
                code.add(`name=${functionName},`)
            }

            if (functionReturn()) {
                code.add("has_return=true,")
            }
        code.add("})")

        return code.get()
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

    export function usingOperator() {
        return usingOp
    }

    export function kargs() {
        return callKargs
    }
}

export default CodeSnippets