import { ParserRuleContext, Token } from "antlr4";
import { EnterRule } from "./types";
import Code from "./manager";
import LuaLexer from "../grammar/LuaLexer";

namespace Utils {
    export function convertNodes(nodes: ParserRuleContext[], enterRule?: EnterRule, separator = ",") {
        let code = new Code();

        nodes.forEach((node, i) => {
            if (i > 0 && separator != null) code.add(separator)
            
            // If we didnt do anything we need to remove the separator
            if (!code.add(node, enterRule)) {
                code.remove(separator.length)
            }
        })

        return code.get();
    }

    export function getSpacesBetweenTokens(from: Token, to: Token) {
        const start = from.stop+1; // Stop in antlr is exclusive
        const end = to.start-1; // Start in antlr is inclusive

        let text = from.getInputStream().getText(start, end)

        // Remove any non-whitespace (this prevents strange behaviors when developing and when copying thing wrongly)
        text = text.replace(/\S/g, '')
        return text;
    }

    export function getSpacesUntilToken(to: Token, from: number = 0) {
        const start = from;
        const end = to.start-1; // Start in antlr is inclusive

        let text = to.getInputStream().getText(start, end)

        // Remove any non-whitespace (this prevents strange behaviors when developing and when copying thing wrongly)
        text = text.replace(/\S/g, '')
        return text;
    }

    export function convertToken(from: Token, to: number) {
        from.type = to
        from.text = LuaLexer.literalNames[to]
        from.text = from.text.substring(1, from.text.length-1)
    }

    export function getCallerName(level: number = 1) {
        var callerName: string;
        try { 
            throw new Error();
        }
        catch (e) {
            const stacks: string[] = e.stack.split('\n')

            const result = stacks[level+1].match(/at (?:\w+\.)?(\w+)/)
            callerName = result ? result[1] : 'unknown'
        }
        return callerName
    }
}

export default Utils