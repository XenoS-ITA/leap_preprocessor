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

    const plainName = /^"([A-Za-z_][A-Za-z0-9_]*)"$/
    const plainIdentifier = /^[A-Za-z_][A-Za-z0-9_]*$/

    // Metadata of a function ("info card") as sent to leap.registerfunc.
    //
    // Constant form (the usual case): one string literal "name|arg1,arg2|r" ("r" = has_return).
    // A literal is a constant of the compiled chunk, so creating the closure allocates nothing for it;
    // leap.fsignature decodes it lazily (see always.lua).
    //
    // A name computed at runtime (t[k] = function) is joined in front of the constant part: tostring(k).."|a,b|r".
    //
    // Table form (fallback): only for names/parameters that cannot be expressed that way.
    export function functionInfo(functionName: string, args: string[], hasReturn: boolean) {
        const name = functionName && functionName.length > 0 ? functionName : null
        const literal = name ? plainName.exec(name) : null

        if (args.every(arg => plainIdentifier.test(arg))) {
            const rest = `|${args.join(",")}|${hasReturn ? "r" : ""}`

            if (literal) {
                return `"${literal[1]}${rest}"`
            }

            // Name computed at runtime (t[k] = function, { [expr] = function }): any expression that is not a plain
            // "identifier" literal, joined in front of the constant part.
            // Strings up to 40 chars are interned by Lua, so closures with the same name still share one string.
            // tostring() keeps non-string keys from raising a concat error.
            if (name) {
                return `tostring(${name}).."${rest}"`
            }
        }

        let info = "{args={"

        for (const arg of args) {
            info += `{name = "${arg}"},`
        }

        info += "},"

        if (name) info += `name=${name},`
        if (hasReturn) info += "has_return=true,"

        return info + "}"
    }

    export function functionIntrospection(functionName: string, injectBody, getArgs: () => string[], functionReturn: () => boolean) {
        let code = new Code();

        code.add("leap.registerfunc(function")
            injectBody(code)

            // Order matters: the body has to be generated before the args / return flag are known
            const args = getArgs()
            const hasReturn = !!functionReturn()

            code.add(", ")
            code.add(functionInfo(functionName, args, hasReturn))
        code.add(")")

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