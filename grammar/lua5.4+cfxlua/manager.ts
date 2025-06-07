import { ParserRuleContext, TerminalNode } from "antlr4";
import { ParserNode, EnterRule } from "./types";
import Utils from "./utils";

class Code {
    code = ""
    lastNode: ParserNode = null

    static getTokenFromNode(node: ParserNode, start: boolean = true) {
        if (node instanceof TerminalNode) {
            return node.symbol;
        } else {
            return start ? node.start : node.stop;
        }
    }

    add(code: string | ParserNode | ParserNode[], enterRule?: EnterRule) {
        if (typeof code == "string") {
            this.code += code;
            return;
        }

        let codeToAdd = "";

        // Convert node to string
        if (enterRule) {
            codeToAdd += enterRule(code);
        } else {
            if (Array.isArray(code)) {
                code.forEach(node => {
                    codeToAdd += node.getText();
                })
            } else {
                codeToAdd += code.getText();
            }
        }

        // Don't add empty code (this prevent also random spaces when the code added is empty)
        if (codeToAdd.length == 0) return

        // Add spaces between nodes
        if (Array.isArray(code)) {
            if (code.length == 0) return

            if (this.lastNode) {
                this.addSpaces(this.lastNode, code[0]);
            }

            this.lastNode = code[code.length-1];
        } else {
            if (this.lastNode) {
                this.addSpaces(this.lastNode, code);
            }

            this.lastNode = code;
        }

        this.code += codeToAdd;
    }

    addSpaces(from: ParserNode, to: ParserNode) {
        let fromToken = Code.getTokenFromNode(from, false);
        let toToken = Code.getTokenFromNode(to, true);

        const spaces = Utils.getSpacesBetweenTokens(fromToken, toToken);

        //console.log("Adding spaces between", from.getText(), "and", to.getText());
        //console.log(JSON.stringify(spaces));

        this.code += spaces
    }

    remove(charsToRemove: number) {
        this.code = this.code.slice(0, -charsToRemove);
    }

    get() {
        return this.code
    }
}

export default Code