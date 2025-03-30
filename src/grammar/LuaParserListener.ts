// Generated from grammar/leap/LuaParser.g4 by ANTLR 4.13.2

import {ParseTreeListener} from "antlr4";


import { Start_Context } from "./LuaParser.js";
import { ChunkContext } from "./LuaParser.js";
import { BlockContext } from "./LuaParser.js";
import { StatContext } from "./LuaParser.js";
import { AttnamelistContext } from "./LuaParser.js";
import { AttribContext } from "./LuaParser.js";
import { RetstatContext } from "./LuaParser.js";
import { LabelContext } from "./LuaParser.js";
import { FuncnameContext } from "./LuaParser.js";
import { VarlistContext } from "./LuaParser.js";
import { NamelistContext } from "./LuaParser.js";
import { DecoratorContext } from "./LuaParser.js";
import { DecoratorbodyContext } from "./LuaParser.js";
import { NewcallContext } from "./LuaParser.js";
import { ExplistContext } from "./LuaParser.js";
import { ExpContext } from "./LuaParser.js";
import { FilterfieldContext } from "./LuaParser.js";
import { FilterfieldlistContext } from "./LuaParser.js";
import { TablecomprehensionContext } from "./LuaParser.js";
import { CompactfuncContext } from "./LuaParser.js";
import { Indexed_memberContext } from "./LuaParser.js";
import { VarContext } from "./LuaParser.js";
import { PrefixexpContext } from "./LuaParser.js";
import { FunctioncallContext } from "./LuaParser.js";
import { CompoundContext } from "./LuaParser.js";
import { ArgumentContext } from "./LuaParser.js";
import { ArgumentlistContext } from "./LuaParser.js";
import { ArgsContext } from "./LuaParser.js";
import { FunctiondefContext } from "./LuaParser.js";
import { FuncbodyContext } from "./LuaParser.js";
import { ClassContext } from "./LuaParser.js";
import { PartypeContext } from "./LuaParser.js";
import { DefaultvalueContext } from "./LuaParser.js";
import { ExtendedparContext } from "./LuaParser.js";
import { ExtendedparlistContext } from "./LuaParser.js";
import { ParlistContext } from "./LuaParser.js";
import { TableconstructorContext } from "./LuaParser.js";
import { FieldlistContext } from "./LuaParser.js";
import { FieldContext } from "./LuaParser.js";
import { FieldsepContext } from "./LuaParser.js";
import { IdentifierContext } from "./LuaParser.js";
import { NumberContext } from "./LuaParser.js";
import { StringContext } from "./LuaParser.js";


/**
 * This interface defines a complete listener for a parse tree produced by
 * `LuaParser`.
 */
export default class LuaParserListener extends ParseTreeListener {
	/**
	 * Enter a parse tree produced by `LuaParser.start_`.
	 * @param ctx the parse tree
	 */
	enterStart_?: (ctx: Start_Context) => void;
	/**
	 * Exit a parse tree produced by `LuaParser.start_`.
	 * @param ctx the parse tree
	 */
	exitStart_?: (ctx: Start_Context) => void;
	/**
	 * Enter a parse tree produced by `LuaParser.chunk`.
	 * @param ctx the parse tree
	 */
	enterChunk?: (ctx: ChunkContext) => void;
	/**
	 * Exit a parse tree produced by `LuaParser.chunk`.
	 * @param ctx the parse tree
	 */
	exitChunk?: (ctx: ChunkContext) => void;
	/**
	 * Enter a parse tree produced by `LuaParser.block`.
	 * @param ctx the parse tree
	 */
	enterBlock?: (ctx: BlockContext) => void;
	/**
	 * Exit a parse tree produced by `LuaParser.block`.
	 * @param ctx the parse tree
	 */
	exitBlock?: (ctx: BlockContext) => void;
	/**
	 * Enter a parse tree produced by `LuaParser.stat`.
	 * @param ctx the parse tree
	 */
	enterStat?: (ctx: StatContext) => void;
	/**
	 * Exit a parse tree produced by `LuaParser.stat`.
	 * @param ctx the parse tree
	 */
	exitStat?: (ctx: StatContext) => void;
	/**
	 * Enter a parse tree produced by `LuaParser.attnamelist`.
	 * @param ctx the parse tree
	 */
	enterAttnamelist?: (ctx: AttnamelistContext) => void;
	/**
	 * Exit a parse tree produced by `LuaParser.attnamelist`.
	 * @param ctx the parse tree
	 */
	exitAttnamelist?: (ctx: AttnamelistContext) => void;
	/**
	 * Enter a parse tree produced by `LuaParser.attrib`.
	 * @param ctx the parse tree
	 */
	enterAttrib?: (ctx: AttribContext) => void;
	/**
	 * Exit a parse tree produced by `LuaParser.attrib`.
	 * @param ctx the parse tree
	 */
	exitAttrib?: (ctx: AttribContext) => void;
	/**
	 * Enter a parse tree produced by `LuaParser.retstat`.
	 * @param ctx the parse tree
	 */
	enterRetstat?: (ctx: RetstatContext) => void;
	/**
	 * Exit a parse tree produced by `LuaParser.retstat`.
	 * @param ctx the parse tree
	 */
	exitRetstat?: (ctx: RetstatContext) => void;
	/**
	 * Enter a parse tree produced by `LuaParser.label`.
	 * @param ctx the parse tree
	 */
	enterLabel?: (ctx: LabelContext) => void;
	/**
	 * Exit a parse tree produced by `LuaParser.label`.
	 * @param ctx the parse tree
	 */
	exitLabel?: (ctx: LabelContext) => void;
	/**
	 * Enter a parse tree produced by `LuaParser.funcname`.
	 * @param ctx the parse tree
	 */
	enterFuncname?: (ctx: FuncnameContext) => void;
	/**
	 * Exit a parse tree produced by `LuaParser.funcname`.
	 * @param ctx the parse tree
	 */
	exitFuncname?: (ctx: FuncnameContext) => void;
	/**
	 * Enter a parse tree produced by `LuaParser.varlist`.
	 * @param ctx the parse tree
	 */
	enterVarlist?: (ctx: VarlistContext) => void;
	/**
	 * Exit a parse tree produced by `LuaParser.varlist`.
	 * @param ctx the parse tree
	 */
	exitVarlist?: (ctx: VarlistContext) => void;
	/**
	 * Enter a parse tree produced by `LuaParser.namelist`.
	 * @param ctx the parse tree
	 */
	enterNamelist?: (ctx: NamelistContext) => void;
	/**
	 * Exit a parse tree produced by `LuaParser.namelist`.
	 * @param ctx the parse tree
	 */
	exitNamelist?: (ctx: NamelistContext) => void;
	/**
	 * Enter a parse tree produced by `LuaParser.decorator`.
	 * @param ctx the parse tree
	 */
	enterDecorator?: (ctx: DecoratorContext) => void;
	/**
	 * Exit a parse tree produced by `LuaParser.decorator`.
	 * @param ctx the parse tree
	 */
	exitDecorator?: (ctx: DecoratorContext) => void;
	/**
	 * Enter a parse tree produced by `LuaParser.decoratorbody`.
	 * @param ctx the parse tree
	 */
	enterDecoratorbody?: (ctx: DecoratorbodyContext) => void;
	/**
	 * Exit a parse tree produced by `LuaParser.decoratorbody`.
	 * @param ctx the parse tree
	 */
	exitDecoratorbody?: (ctx: DecoratorbodyContext) => void;
	/**
	 * Enter a parse tree produced by `LuaParser.newcall`.
	 * @param ctx the parse tree
	 */
	enterNewcall?: (ctx: NewcallContext) => void;
	/**
	 * Exit a parse tree produced by `LuaParser.newcall`.
	 * @param ctx the parse tree
	 */
	exitNewcall?: (ctx: NewcallContext) => void;
	/**
	 * Enter a parse tree produced by `LuaParser.explist`.
	 * @param ctx the parse tree
	 */
	enterExplist?: (ctx: ExplistContext) => void;
	/**
	 * Exit a parse tree produced by `LuaParser.explist`.
	 * @param ctx the parse tree
	 */
	exitExplist?: (ctx: ExplistContext) => void;
	/**
	 * Enter a parse tree produced by `LuaParser.exp`.
	 * @param ctx the parse tree
	 */
	enterExp?: (ctx: ExpContext) => void;
	/**
	 * Exit a parse tree produced by `LuaParser.exp`.
	 * @param ctx the parse tree
	 */
	exitExp?: (ctx: ExpContext) => void;
	/**
	 * Enter a parse tree produced by `LuaParser.filterfield`.
	 * @param ctx the parse tree
	 */
	enterFilterfield?: (ctx: FilterfieldContext) => void;
	/**
	 * Exit a parse tree produced by `LuaParser.filterfield`.
	 * @param ctx the parse tree
	 */
	exitFilterfield?: (ctx: FilterfieldContext) => void;
	/**
	 * Enter a parse tree produced by `LuaParser.filterfieldlist`.
	 * @param ctx the parse tree
	 */
	enterFilterfieldlist?: (ctx: FilterfieldlistContext) => void;
	/**
	 * Exit a parse tree produced by `LuaParser.filterfieldlist`.
	 * @param ctx the parse tree
	 */
	exitFilterfieldlist?: (ctx: FilterfieldlistContext) => void;
	/**
	 * Enter a parse tree produced by `LuaParser.tablecomprehension`.
	 * @param ctx the parse tree
	 */
	enterTablecomprehension?: (ctx: TablecomprehensionContext) => void;
	/**
	 * Exit a parse tree produced by `LuaParser.tablecomprehension`.
	 * @param ctx the parse tree
	 */
	exitTablecomprehension?: (ctx: TablecomprehensionContext) => void;
	/**
	 * Enter a parse tree produced by `LuaParser.compactfunc`.
	 * @param ctx the parse tree
	 */
	enterCompactfunc?: (ctx: CompactfuncContext) => void;
	/**
	 * Exit a parse tree produced by `LuaParser.compactfunc`.
	 * @param ctx the parse tree
	 */
	exitCompactfunc?: (ctx: CompactfuncContext) => void;
	/**
	 * Enter a parse tree produced by `LuaParser.indexed_member`.
	 * @param ctx the parse tree
	 */
	enterIndexed_member?: (ctx: Indexed_memberContext) => void;
	/**
	 * Exit a parse tree produced by `LuaParser.indexed_member`.
	 * @param ctx the parse tree
	 */
	exitIndexed_member?: (ctx: Indexed_memberContext) => void;
	/**
	 * Enter a parse tree produced by `LuaParser.var`.
	 * @param ctx the parse tree
	 */
	enterVar?: (ctx: VarContext) => void;
	/**
	 * Exit a parse tree produced by `LuaParser.var`.
	 * @param ctx the parse tree
	 */
	exitVar?: (ctx: VarContext) => void;
	/**
	 * Enter a parse tree produced by `LuaParser.prefixexp`.
	 * @param ctx the parse tree
	 */
	enterPrefixexp?: (ctx: PrefixexpContext) => void;
	/**
	 * Exit a parse tree produced by `LuaParser.prefixexp`.
	 * @param ctx the parse tree
	 */
	exitPrefixexp?: (ctx: PrefixexpContext) => void;
	/**
	 * Enter a parse tree produced by `LuaParser.functioncall`.
	 * @param ctx the parse tree
	 */
	enterFunctioncall?: (ctx: FunctioncallContext) => void;
	/**
	 * Exit a parse tree produced by `LuaParser.functioncall`.
	 * @param ctx the parse tree
	 */
	exitFunctioncall?: (ctx: FunctioncallContext) => void;
	/**
	 * Enter a parse tree produced by `LuaParser.compound`.
	 * @param ctx the parse tree
	 */
	enterCompound?: (ctx: CompoundContext) => void;
	/**
	 * Exit a parse tree produced by `LuaParser.compound`.
	 * @param ctx the parse tree
	 */
	exitCompound?: (ctx: CompoundContext) => void;
	/**
	 * Enter a parse tree produced by `LuaParser.argument`.
	 * @param ctx the parse tree
	 */
	enterArgument?: (ctx: ArgumentContext) => void;
	/**
	 * Exit a parse tree produced by `LuaParser.argument`.
	 * @param ctx the parse tree
	 */
	exitArgument?: (ctx: ArgumentContext) => void;
	/**
	 * Enter a parse tree produced by `LuaParser.argumentlist`.
	 * @param ctx the parse tree
	 */
	enterArgumentlist?: (ctx: ArgumentlistContext) => void;
	/**
	 * Exit a parse tree produced by `LuaParser.argumentlist`.
	 * @param ctx the parse tree
	 */
	exitArgumentlist?: (ctx: ArgumentlistContext) => void;
	/**
	 * Enter a parse tree produced by `LuaParser.args`.
	 * @param ctx the parse tree
	 */
	enterArgs?: (ctx: ArgsContext) => void;
	/**
	 * Exit a parse tree produced by `LuaParser.args`.
	 * @param ctx the parse tree
	 */
	exitArgs?: (ctx: ArgsContext) => void;
	/**
	 * Enter a parse tree produced by `LuaParser.functiondef`.
	 * @param ctx the parse tree
	 */
	enterFunctiondef?: (ctx: FunctiondefContext) => void;
	/**
	 * Exit a parse tree produced by `LuaParser.functiondef`.
	 * @param ctx the parse tree
	 */
	exitFunctiondef?: (ctx: FunctiondefContext) => void;
	/**
	 * Enter a parse tree produced by `LuaParser.funcbody`.
	 * @param ctx the parse tree
	 */
	enterFuncbody?: (ctx: FuncbodyContext) => void;
	/**
	 * Exit a parse tree produced by `LuaParser.funcbody`.
	 * @param ctx the parse tree
	 */
	exitFuncbody?: (ctx: FuncbodyContext) => void;
	/**
	 * Enter a parse tree produced by `LuaParser.class`.
	 * @param ctx the parse tree
	 */
	enterClass?: (ctx: ClassContext) => void;
	/**
	 * Exit a parse tree produced by `LuaParser.class`.
	 * @param ctx the parse tree
	 */
	exitClass?: (ctx: ClassContext) => void;
	/**
	 * Enter a parse tree produced by `LuaParser.partype`.
	 * @param ctx the parse tree
	 */
	enterPartype?: (ctx: PartypeContext) => void;
	/**
	 * Exit a parse tree produced by `LuaParser.partype`.
	 * @param ctx the parse tree
	 */
	exitPartype?: (ctx: PartypeContext) => void;
	/**
	 * Enter a parse tree produced by `LuaParser.defaultvalue`.
	 * @param ctx the parse tree
	 */
	enterDefaultvalue?: (ctx: DefaultvalueContext) => void;
	/**
	 * Exit a parse tree produced by `LuaParser.defaultvalue`.
	 * @param ctx the parse tree
	 */
	exitDefaultvalue?: (ctx: DefaultvalueContext) => void;
	/**
	 * Enter a parse tree produced by `LuaParser.extendedpar`.
	 * @param ctx the parse tree
	 */
	enterExtendedpar?: (ctx: ExtendedparContext) => void;
	/**
	 * Exit a parse tree produced by `LuaParser.extendedpar`.
	 * @param ctx the parse tree
	 */
	exitExtendedpar?: (ctx: ExtendedparContext) => void;
	/**
	 * Enter a parse tree produced by `LuaParser.extendedparlist`.
	 * @param ctx the parse tree
	 */
	enterExtendedparlist?: (ctx: ExtendedparlistContext) => void;
	/**
	 * Exit a parse tree produced by `LuaParser.extendedparlist`.
	 * @param ctx the parse tree
	 */
	exitExtendedparlist?: (ctx: ExtendedparlistContext) => void;
	/**
	 * Enter a parse tree produced by `LuaParser.parlist`.
	 * @param ctx the parse tree
	 */
	enterParlist?: (ctx: ParlistContext) => void;
	/**
	 * Exit a parse tree produced by `LuaParser.parlist`.
	 * @param ctx the parse tree
	 */
	exitParlist?: (ctx: ParlistContext) => void;
	/**
	 * Enter a parse tree produced by `LuaParser.tableconstructor`.
	 * @param ctx the parse tree
	 */
	enterTableconstructor?: (ctx: TableconstructorContext) => void;
	/**
	 * Exit a parse tree produced by `LuaParser.tableconstructor`.
	 * @param ctx the parse tree
	 */
	exitTableconstructor?: (ctx: TableconstructorContext) => void;
	/**
	 * Enter a parse tree produced by `LuaParser.fieldlist`.
	 * @param ctx the parse tree
	 */
	enterFieldlist?: (ctx: FieldlistContext) => void;
	/**
	 * Exit a parse tree produced by `LuaParser.fieldlist`.
	 * @param ctx the parse tree
	 */
	exitFieldlist?: (ctx: FieldlistContext) => void;
	/**
	 * Enter a parse tree produced by `LuaParser.field`.
	 * @param ctx the parse tree
	 */
	enterField?: (ctx: FieldContext) => void;
	/**
	 * Exit a parse tree produced by `LuaParser.field`.
	 * @param ctx the parse tree
	 */
	exitField?: (ctx: FieldContext) => void;
	/**
	 * Enter a parse tree produced by `LuaParser.fieldsep`.
	 * @param ctx the parse tree
	 */
	enterFieldsep?: (ctx: FieldsepContext) => void;
	/**
	 * Exit a parse tree produced by `LuaParser.fieldsep`.
	 * @param ctx the parse tree
	 */
	exitFieldsep?: (ctx: FieldsepContext) => void;
	/**
	 * Enter a parse tree produced by `LuaParser.identifier`.
	 * @param ctx the parse tree
	 */
	enterIdentifier?: (ctx: IdentifierContext) => void;
	/**
	 * Exit a parse tree produced by `LuaParser.identifier`.
	 * @param ctx the parse tree
	 */
	exitIdentifier?: (ctx: IdentifierContext) => void;
	/**
	 * Enter a parse tree produced by `LuaParser.number`.
	 * @param ctx the parse tree
	 */
	enterNumber?: (ctx: NumberContext) => void;
	/**
	 * Exit a parse tree produced by `LuaParser.number`.
	 * @param ctx the parse tree
	 */
	exitNumber?: (ctx: NumberContext) => void;
	/**
	 * Enter a parse tree produced by `LuaParser.string`.
	 * @param ctx the parse tree
	 */
	enterString?: (ctx: StringContext) => void;
	/**
	 * Exit a parse tree produced by `LuaParser.string`.
	 * @param ctx the parse tree
	 */
	exitString?: (ctx: StringContext) => void;
}

