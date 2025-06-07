import { ParserRuleContext, Token } from "antlr4";
import { EnterRule } from "./types";
import Code from "./manager";
import LuaLexer from "../grammar/LuaLexer";

namespace Utils {
    export function convertNodes(nodes: ParserRuleContext[], enterRule?: EnterRule, separator = ",") {
        let code = new Code();

        nodes.forEach((node, i) => {
            code.add(node, enterRule)

            if (i != nodes.length-1 && separator != null) code.add(separator)
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

        return from
    }
}

export default Utils