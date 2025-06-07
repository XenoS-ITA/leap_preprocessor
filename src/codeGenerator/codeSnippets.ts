import { IdentifierContext } from "../grammar/LuaParser";
import always from "./staticSnippets/always.lua";
import classCode from "./staticSnippets/class.lua";
import inOp from "./staticSnippets/in.lua";
import usingOp from "./staticSnippets/using.lua";
import callKargs from "./staticSnippets/kargs.lua"
import Code from "./manager";

const luaTypes = {
    string: true,
    number: true,
    boolean: true,
    table: true,
    function: true,
    userdata: true,
    thread: true,
    nil: true,
    vector2: true,
    vector3: true,
    vector4: true,
    quat: true
}

namespace CodeSnippets {
    export function typeCheck(partypeList: string[], param: IdentifierContext): string {
        const paramText = param.getText();
        const expectedTypes = partypeList.join(" | ");
        const isOnlyLuaTypes = partypeList.every((type) => luaTypes[type]);

        const conditions = partypeList.map((type) => {
            return luaTypes[type]
                ? `type(${paramText}) ~= "${type}"`
                : `not _leap_internal_is_operator(${paramText}, ${type})`;
        });

        let condition = isOnlyLuaTypes
            ? conditions.join(" and ")
            : `_type(${paramText}) ~= "table" and ${conditions.join(" and ")}`;

        const errorMsg = isOnlyLuaTypes
            ? `${paramText}: must be (${expectedTypes}) but got '..type(${paramText})..'`
            : `${paramText}: must be (${expectedTypes}) or a derived class but got '..type(${paramText})..'`;

        return `if ${condition} then error('${errorMsg}', 2) end;`;
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