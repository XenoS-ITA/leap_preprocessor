import { ParserRuleContext, TerminalNode } from "antlr4"

type ParserNode = TerminalNode | ParserRuleContext
type EnterRule = (node: ParserNode | ParserNode[]) => string | void

export { ParserNode, EnterRule }