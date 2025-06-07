// Generated from grammar/leap/LuaParser.g4 by ANTLR 4.13.2
// noinspection ES6UnusedImports,JSUnusedGlobalSymbols,JSUnusedLocalSymbols

import {
	ATN,
	ATNDeserializer, DecisionState, DFA, FailedPredicateException,
	RecognitionException, NoViableAltException, BailErrorStrategy,
	Parser, ParserATNSimulator,
	RuleContext, ParserRuleContext, PredictionMode, PredictionContextCache,
	TerminalNode, RuleNode,
	Token, TokenStream,
	Interval, IntervalSet
} from 'antlr4';
import LuaParserListener from "./LuaParserListener.js";
// for running tests with parameters, TODO: discuss strategy for typed parameters in CI
// eslint-disable-next-line no-unused-vars
type int = number;

export default class LuaParser extends Parser {
	public static readonly SEMI = 1;
	public static readonly EQ = 2;
	public static readonly NEW = 3;
	public static readonly CLASS = 4;
	public static readonly EXTENDS = 5;
	public static readonly USING = 6;
	public static readonly FILTER = 7;
	public static readonly IS = 8;
	public static readonly TRY = 9;
	public static readonly CATCH = 10;
	public static readonly THROW = 11;
	public static readonly QUESTMARK = 12;
	public static readonly COMPPLUS = 13;
	public static readonly COMPMINUS = 14;
	public static readonly COMPSTAR = 15;
	public static readonly COMPSLASH = 16;
	public static readonly COMPLL = 17;
	public static readonly COMPGG = 18;
	public static readonly COMPAMP = 19;
	public static readonly COMPPIPE = 20;
	public static readonly COMPCARET = 21;
	public static readonly DEFER = 22;
	public static readonly AT = 23;
	public static readonly BREAK = 24;
	public static readonly GOTO = 25;
	public static readonly DO = 26;
	public static readonly END = 27;
	public static readonly WHILE = 28;
	public static readonly REPEAT = 29;
	public static readonly UNTIL = 30;
	public static readonly IF = 31;
	public static readonly THEN = 32;
	public static readonly ELSEIF = 33;
	public static readonly ELSE = 34;
	public static readonly FOR = 35;
	public static readonly COMMA = 36;
	public static readonly IN = 37;
	public static readonly FUNCTION = 38;
	public static readonly LOCAL = 39;
	public static readonly LT = 40;
	public static readonly GT = 41;
	public static readonly RETURN = 42;
	public static readonly CONTINUE = 43;
	public static readonly CC = 44;
	public static readonly NIL = 45;
	public static readonly FALSE = 46;
	public static readonly TRUE = 47;
	public static readonly DOT = 48;
	public static readonly SQUIG = 49;
	public static readonly MINUS = 50;
	public static readonly POUND = 51;
	public static readonly OP = 52;
	public static readonly CP = 53;
	public static readonly NOT = 54;
	public static readonly LL = 55;
	public static readonly GG = 56;
	public static readonly AMP = 57;
	public static readonly SS = 58;
	public static readonly PER = 59;
	public static readonly COL = 60;
	public static readonly LE = 61;
	public static readonly GE = 62;
	public static readonly AND = 63;
	public static readonly OR = 64;
	public static readonly PLUS = 65;
	public static readonly STAR = 66;
	public static readonly OCU = 67;
	public static readonly CCU = 68;
	public static readonly OB = 69;
	public static readonly CB = 70;
	public static readonly EE = 71;
	public static readonly DD = 72;
	public static readonly PIPE = 73;
	public static readonly CARET = 74;
	public static readonly SLASH = 75;
	public static readonly DDD = 76;
	public static readonly SQEQ = 77;
	public static readonly NOTEQ_ALT = 78;
	public static readonly NAME = 79;
	public static readonly NORMALSTRING = 80;
	public static readonly CHARSTRING = 81;
	public static readonly JENKINSHASHSTRING = 82;
	public static readonly LONGSTRING = 83;
	public static readonly INT = 84;
	public static readonly HEX = 85;
	public static readonly FLOAT = 86;
	public static readonly HEX_FLOAT = 87;
	public static readonly COMMENT = 88;
	public static readonly C_COMMENT = 89;
	public static readonly WS = 90;
	public static readonly NL = 91;
	public static readonly SHEBANG = 92;
	public static override readonly EOF = Token.EOF;
	public static readonly RULE_start_ = 0;
	public static readonly RULE_chunk = 1;
	public static readonly RULE_block = 2;
	public static readonly RULE_stat = 3;
	public static readonly RULE_attnamelist = 4;
	public static readonly RULE_attrib = 5;
	public static readonly RULE_retstat = 6;
	public static readonly RULE_label = 7;
	public static readonly RULE_funcname = 8;
	public static readonly RULE_varlist = 9;
	public static readonly RULE_namelist = 10;
	public static readonly RULE_decorator = 11;
	public static readonly RULE_decoratorbody = 12;
	public static readonly RULE_newcall = 13;
	public static readonly RULE_explist = 14;
	public static readonly RULE_exp = 15;
	public static readonly RULE_filterfield = 16;
	public static readonly RULE_filterfieldlist = 17;
	public static readonly RULE_tablecomprehension = 18;
	public static readonly RULE_compactfunc = 19;
	public static readonly RULE_indexed_member = 20;
	public static readonly RULE_var = 21;
	public static readonly RULE_prefixexp = 22;
	public static readonly RULE_functioncall = 23;
	public static readonly RULE_compound = 24;
	public static readonly RULE_argument = 25;
	public static readonly RULE_argumentlist = 26;
	public static readonly RULE_args = 27;
	public static readonly RULE_functiondef = 28;
	public static readonly RULE_funcbody = 29;
	public static readonly RULE_class = 30;
	public static readonly RULE_isop = 31;
	public static readonly RULE_type = 32;
	public static readonly RULE_partype = 33;
	public static readonly RULE_defaultvalue = 34;
	public static readonly RULE_extendedpar = 35;
	public static readonly RULE_extendedparlist = 36;
	public static readonly RULE_parlist = 37;
	public static readonly RULE_tableconstructor = 38;
	public static readonly RULE_fieldlist = 39;
	public static readonly RULE_field = 40;
	public static readonly RULE_fieldsep = 41;
	public static readonly RULE_identifier = 42;
	public static readonly RULE_number = 43;
	public static readonly RULE_string = 44;
	public static readonly literalNames: (string | null)[] = [ null, "';'", 
                                                            "'='", "'new'", 
                                                            "'class'", "'extends'", 
                                                            "'using'", "'filter'", 
                                                            "'is'", "'try'", 
                                                            "'catch'", "'throw'", 
                                                            "'?'", "'+='", 
                                                            "'-='", "'*='", 
                                                            "'/='", "'<<='", 
                                                            "'>>='", "'&='", 
                                                            "'|='", "'^='", 
                                                            "'defer'", "'@'", 
                                                            "'break'", "'goto'", 
                                                            "'do'", "'end'", 
                                                            "'while'", "'repeat'", 
                                                            "'until'", "'if'", 
                                                            "'then'", "'elseif'", 
                                                            "'else'", "'for'", 
                                                            "','", "'in'", 
                                                            "'function'", 
                                                            "'local'", "'<'", 
                                                            "'>'", "'return'", 
                                                            "'continue'", 
                                                            "'::'", "'nil'", 
                                                            "'false'", "'true'", 
                                                            "'.'", "'~'", 
                                                            "'-'", "'#'", 
                                                            "'('", "')'", 
                                                            "'not'", "'<<'", 
                                                            "'>>'", "'&'", 
                                                            "'//'", "'%'", 
                                                            "':'", "'<='", 
                                                            "'>='", "'and'", 
                                                            "'or'", "'+'", 
                                                            "'*'", "'{'", 
                                                            "'}'", "'['", 
                                                            "']'", "'=='", 
                                                            "'..'", "'|'", 
                                                            "'^'", "'/'", 
                                                            "'...'", "'~='", 
                                                            "'!='" ];
	public static readonly symbolicNames: (string | null)[] = [ null, "SEMI", 
                                                             "EQ", "NEW", 
                                                             "CLASS", "EXTENDS", 
                                                             "USING", "FILTER", 
                                                             "IS", "TRY", 
                                                             "CATCH", "THROW", 
                                                             "QUESTMARK", 
                                                             "COMPPLUS", 
                                                             "COMPMINUS", 
                                                             "COMPSTAR", 
                                                             "COMPSLASH", 
                                                             "COMPLL", "COMPGG", 
                                                             "COMPAMP", 
                                                             "COMPPIPE", 
                                                             "COMPCARET", 
                                                             "DEFER", "AT", 
                                                             "BREAK", "GOTO", 
                                                             "DO", "END", 
                                                             "WHILE", "REPEAT", 
                                                             "UNTIL", "IF", 
                                                             "THEN", "ELSEIF", 
                                                             "ELSE", "FOR", 
                                                             "COMMA", "IN", 
                                                             "FUNCTION", 
                                                             "LOCAL", "LT", 
                                                             "GT", "RETURN", 
                                                             "CONTINUE", 
                                                             "CC", "NIL", 
                                                             "FALSE", "TRUE", 
                                                             "DOT", "SQUIG", 
                                                             "MINUS", "POUND", 
                                                             "OP", "CP", 
                                                             "NOT", "LL", 
                                                             "GG", "AMP", 
                                                             "SS", "PER", 
                                                             "COL", "LE", 
                                                             "GE", "AND", 
                                                             "OR", "PLUS", 
                                                             "STAR", "OCU", 
                                                             "CCU", "OB", 
                                                             "CB", "EE", 
                                                             "DD", "PIPE", 
                                                             "CARET", "SLASH", 
                                                             "DDD", "SQEQ", 
                                                             "NOTEQ_ALT", 
                                                             "NAME", "NORMALSTRING", 
                                                             "CHARSTRING", 
                                                             "JENKINSHASHSTRING", 
                                                             "LONGSTRING", 
                                                             "INT", "HEX", 
                                                             "FLOAT", "HEX_FLOAT", 
                                                             "COMMENT", 
                                                             "C_COMMENT", 
                                                             "WS", "NL", 
                                                             "SHEBANG" ];
	// tslint:disable:no-trailing-whitespace
	public static readonly ruleNames: string[] = [
		"start_", "chunk", "block", "stat", "attnamelist", "attrib", "retstat", 
		"label", "funcname", "varlist", "namelist", "decorator", "decoratorbody", 
		"newcall", "explist", "exp", "filterfield", "filterfieldlist", "tablecomprehension", 
		"compactfunc", "indexed_member", "var", "prefixexp", "functioncall", "compound", 
		"argument", "argumentlist", "args", "functiondef", "funcbody", "class", 
		"isop", "type", "partype", "defaultvalue", "extendedpar", "extendedparlist", 
		"parlist", "tableconstructor", "fieldlist", "field", "fieldsep", "identifier", 
		"number", "string",
	];
	public get grammarFileName(): string { return "LuaParser.g4"; }
	public get literalNames(): (string | null)[] { return LuaParser.literalNames; }
	public get symbolicNames(): (string | null)[] { return LuaParser.symbolicNames; }
	public get ruleNames(): string[] { return LuaParser.ruleNames; }
	public get serializedATN(): number[] { return LuaParser._serializedATN; }

	protected createFailedPredicateException(predicate?: string, message?: string): FailedPredicateException {
		return new FailedPredicateException(this, predicate, message);
	}

	constructor(input: TokenStream) {
		super(input);
		this._interp = new ParserATNSimulator(this, LuaParser._ATN, LuaParser.DecisionsToDFA, new PredictionContextCache());
	}
	// @RuleVersion(0)
	public start_(): Start_Context {
		let localctx: Start_Context = new Start_Context(this, this._ctx, this.state);
		this.enterRule(localctx, 0, LuaParser.RULE_start_);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 90;
			this.chunk();
			this.state = 91;
			this.match(LuaParser.EOF);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public chunk(): ChunkContext {
		let localctx: ChunkContext = new ChunkContext(this, this._ctx, this.state);
		this.enterRule(localctx, 2, LuaParser.RULE_chunk);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 93;
			this.block();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public block(): BlockContext {
		let localctx: BlockContext = new BlockContext(this, this._ctx, this.state);
		this.enterRule(localctx, 4, LuaParser.RULE_block);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 98;
			this._errHandler.sync(this);
			_alt = this._interp.adaptivePredict(this._input, 0, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 95;
					this.stat();
					}
					}
				}
				this.state = 100;
				this._errHandler.sync(this);
				_alt = this._interp.adaptivePredict(this._input, 0, this._ctx);
			}
			this.state = 102;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (((((_la - 24)) & ~0x1F) === 0 && ((1 << (_la - 24)) & 786433) !== 0)) {
				{
				this.state = 101;
				this.retstat();
				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public stat(): StatContext {
		let localctx: StatContext = new StatContext(this, this._ctx, this.state);
		this.enterRule(localctx, 6, LuaParser.RULE_stat);
		let _la: number;
		try {
			this.state = 246;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 14, this._ctx) ) {
			case 1:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 104;
				this.match(LuaParser.SEMI);
				}
				break;
			case 2:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 105;
				this.varlist();
				this.state = 106;
				this.match(LuaParser.EQ);
				this.state = 107;
				this.explist();
				}
				break;
			case 3:
				this.enterOuterAlt(localctx, 3);
				{
				this.state = 109;
				this.compound();
				}
				break;
			case 4:
				this.enterOuterAlt(localctx, 4);
				{
				this.state = 111;
				this._errHandler.sync(this);
				switch ( this._interp.adaptivePredict(this._input, 2, this._ctx) ) {
				case 1:
					{
					this.state = 110;
					this.match(LuaParser.NEW);
					}
					break;
				}
				this.state = 113;
				this.functioncall(0);
				}
				break;
			case 5:
				this.enterOuterAlt(localctx, 5);
				{
				this.state = 114;
				this.label();
				}
				break;
			case 6:
				this.enterOuterAlt(localctx, 6);
				{
				this.state = 115;
				this.match(LuaParser.BREAK);
				}
				break;
			case 7:
				this.enterOuterAlt(localctx, 7);
				{
				this.state = 116;
				this.match(LuaParser.GOTO);
				this.state = 117;
				this.identifier();
				}
				break;
			case 8:
				this.enterOuterAlt(localctx, 8);
				{
				this.state = 118;
				this.match(LuaParser.WHILE);
				this.state = 119;
				this.exp(0);
				this.state = 120;
				this.match(LuaParser.DO);
				this.state = 121;
				this.block();
				this.state = 122;
				this.match(LuaParser.END);
				}
				break;
			case 9:
				this.enterOuterAlt(localctx, 9);
				{
				this.state = 124;
				this.match(LuaParser.REPEAT);
				this.state = 125;
				this.block();
				this.state = 126;
				this.match(LuaParser.UNTIL);
				this.state = 127;
				this.exp(0);
				}
				break;
			case 10:
				this.enterOuterAlt(localctx, 10);
				{
				this.state = 129;
				this.match(LuaParser.IF);
				this.state = 130;
				this.exp(0);
				this.state = 131;
				this.match(LuaParser.THEN);
				this.state = 132;
				this.block();
				this.state = 140;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la===33) {
					{
					{
					this.state = 133;
					this.match(LuaParser.ELSEIF);
					this.state = 134;
					this.exp(0);
					this.state = 135;
					this.match(LuaParser.THEN);
					this.state = 136;
					this.block();
					}
					}
					this.state = 142;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 145;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===34) {
					{
					this.state = 143;
					this.match(LuaParser.ELSE);
					this.state = 144;
					this.block();
					}
				}

				this.state = 147;
				this.match(LuaParser.END);
				}
				break;
			case 11:
				this.enterOuterAlt(localctx, 11);
				{
				this.state = 149;
				this.match(LuaParser.FOR);
				this.state = 150;
				this.identifier();
				this.state = 151;
				this.match(LuaParser.EQ);
				this.state = 152;
				this.exp(0);
				this.state = 153;
				this.match(LuaParser.COMMA);
				this.state = 154;
				this.exp(0);
				this.state = 157;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===36) {
					{
					this.state = 155;
					this.match(LuaParser.COMMA);
					this.state = 156;
					this.exp(0);
					}
				}

				this.state = 159;
				this.match(LuaParser.DO);
				this.state = 160;
				this.block();
				this.state = 161;
				this.match(LuaParser.END);
				}
				break;
			case 12:
				this.enterOuterAlt(localctx, 12);
				{
				this.state = 163;
				this.match(LuaParser.FOR);
				this.state = 164;
				this.namelist();
				this.state = 165;
				this.match(LuaParser.IN);
				this.state = 166;
				this.explist();
				this.state = 167;
				this.match(LuaParser.DO);
				this.state = 168;
				this.block();
				this.state = 169;
				this.match(LuaParser.END);
				}
				break;
			case 13:
				this.enterOuterAlt(localctx, 13);
				{
				this.state = 171;
				this.match(LuaParser.DO);
				this.state = 172;
				this.block();
				this.state = 173;
				this.match(LuaParser.END);
				}
				break;
			case 14:
				this.enterOuterAlt(localctx, 14);
				{
				this.state = 178;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la===23) {
					{
					{
					this.state = 175;
					this.decorator();
					}
					}
					this.state = 180;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 181;
				this.match(LuaParser.FUNCTION);
				this.state = 182;
				this.funcname();
				this.state = 183;
				this.funcbody();
				}
				break;
			case 15:
				this.enterOuterAlt(localctx, 15);
				{
				this.state = 188;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la===23) {
					{
					{
					this.state = 185;
					this.decorator();
					}
					}
					this.state = 190;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 191;
				this.match(LuaParser.LOCAL);
				this.state = 192;
				this.match(LuaParser.FUNCTION);
				this.state = 193;
				this.identifier();
				this.state = 194;
				this.funcbody();
				}
				break;
			case 16:
				this.enterOuterAlt(localctx, 16);
				{
				this.state = 196;
				this.match(LuaParser.FILTER);
				this.state = 197;
				this.funcname();
				this.state = 202;
				this._errHandler.sync(this);
				switch ( this._interp.adaptivePredict(this._input, 8, this._ctx) ) {
				case 1:
					{
					this.state = 198;
					this.match(LuaParser.OP);
					this.state = 199;
					this.parlist();
					this.state = 200;
					this.match(LuaParser.CP);
					}
					break;
				}
				this.state = 204;
				this.filterfieldlist();
				this.state = 205;
				this.match(LuaParser.END);
				}
				break;
			case 17:
				this.enterOuterAlt(localctx, 17);
				{
				this.state = 207;
				this.match(LuaParser.USING);
				this.state = 208;
				this.identifier();
				this.state = 214;
				this._errHandler.sync(this);
				switch ( this._interp.adaptivePredict(this._input, 10, this._ctx) ) {
				case 1:
					{
					this.state = 209;
					this.match(LuaParser.OP);
					this.state = 211;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					if ((((_la) & ~0x1F) === 0 && ((1 << _la) & 4196344) !== 0) || ((((_la - 38)) & ~0x1F) === 0 && ((1 << (_la - 38)) & 536968065) !== 0) || ((((_la - 76)) & ~0x1F) === 0 && ((1 << (_la - 76)) & 4089) !== 0)) {
						{
						this.state = 210;
						this.explist();
						}
					}

					this.state = 213;
					this.match(LuaParser.CP);
					}
					break;
				}
				}
				break;
			case 18:
				this.enterOuterAlt(localctx, 18);
				{
				this.state = 216;
				this.match(LuaParser.LOCAL);
				this.state = 217;
				this.attnamelist();
				this.state = 220;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===2) {
					{
					this.state = 218;
					this.match(LuaParser.EQ);
					this.state = 219;
					this.explist();
					}
				}

				}
				break;
			case 19:
				this.enterOuterAlt(localctx, 19);
				{
				this.state = 222;
				this.match(LuaParser.LOCAL);
				this.state = 223;
				this.attnamelist();
				this.state = 224;
				this.match(LuaParser.IN);
				this.state = 225;
				this.prefixexp();
				}
				break;
			case 20:
				this.enterOuterAlt(localctx, 20);
				{
				this.state = 227;
				this.match(LuaParser.DEFER);
				this.state = 228;
				this.block();
				this.state = 229;
				this.match(LuaParser.END);
				}
				break;
			case 21:
				this.enterOuterAlt(localctx, 21);
				{
				this.state = 231;
				this.match(LuaParser.TRY);
				this.state = 232;
				this.block();
				this.state = 233;
				this.match(LuaParser.CATCH);
				this.state = 238;
				this._errHandler.sync(this);
				switch ( this._interp.adaptivePredict(this._input, 13, this._ctx) ) {
				case 1:
					{
					this.state = 234;
					this.identifier();
					this.state = 236;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					if (_la===32) {
						{
						this.state = 235;
						this.match(LuaParser.THEN);
						}
					}

					}
					break;
				}
				this.state = 240;
				this.block();
				this.state = 241;
				this.match(LuaParser.END);
				}
				break;
			case 22:
				this.enterOuterAlt(localctx, 22);
				{
				this.state = 243;
				this.match(LuaParser.THROW);
				this.state = 244;
				this.exp(0);
				}
				break;
			case 23:
				this.enterOuterAlt(localctx, 23);
				{
				this.state = 245;
				this.class_();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public attnamelist(): AttnamelistContext {
		let localctx: AttnamelistContext = new AttnamelistContext(this, this._ctx, this.state);
		this.enterRule(localctx, 8, LuaParser.RULE_attnamelist);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 248;
			this.identifier();
			this.state = 249;
			this.attrib();
			this.state = 256;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===36) {
				{
				{
				this.state = 250;
				this.match(LuaParser.COMMA);
				this.state = 251;
				this.identifier();
				this.state = 252;
				this.attrib();
				}
				}
				this.state = 258;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public attrib(): AttribContext {
		let localctx: AttribContext = new AttribContext(this, this._ctx, this.state);
		this.enterRule(localctx, 10, LuaParser.RULE_attrib);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 263;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===40) {
				{
				this.state = 259;
				this.match(LuaParser.LT);
				this.state = 260;
				this.identifier();
				this.state = 261;
				this.match(LuaParser.GT);
				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public retstat(): RetstatContext {
		let localctx: RetstatContext = new RetstatContext(this, this._ctx, this.state);
		this.enterRule(localctx, 12, LuaParser.RULE_retstat);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 271;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 42:
				{
				this.state = 265;
				this.match(LuaParser.RETURN);
				this.state = 267;
				this._errHandler.sync(this);
				switch ( this._interp.adaptivePredict(this._input, 17, this._ctx) ) {
				case 1:
					{
					this.state = 266;
					this.explist();
					}
					break;
				}
				}
				break;
			case 24:
				{
				this.state = 269;
				this.match(LuaParser.BREAK);
				}
				break;
			case 43:
				{
				this.state = 270;
				this.match(LuaParser.CONTINUE);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			this.state = 274;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===1) {
				{
				this.state = 273;
				this.match(LuaParser.SEMI);
				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public label(): LabelContext {
		let localctx: LabelContext = new LabelContext(this, this._ctx, this.state);
		this.enterRule(localctx, 14, LuaParser.RULE_label);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 276;
			this.match(LuaParser.CC);
			this.state = 277;
			this.identifier();
			this.state = 278;
			this.match(LuaParser.CC);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public funcname(): FuncnameContext {
		let localctx: FuncnameContext = new FuncnameContext(this, this._ctx, this.state);
		this.enterRule(localctx, 16, LuaParser.RULE_funcname);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 280;
			this.identifier();
			this.state = 285;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===48) {
				{
				{
				this.state = 281;
				this.match(LuaParser.DOT);
				this.state = 282;
				this.identifier();
				}
				}
				this.state = 287;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 290;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===60) {
				{
				this.state = 288;
				this.match(LuaParser.COL);
				this.state = 289;
				this.identifier();
				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public varlist(): VarlistContext {
		let localctx: VarlistContext = new VarlistContext(this, this._ctx, this.state);
		this.enterRule(localctx, 18, LuaParser.RULE_varlist);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 292;
			this.var_();
			this.state = 297;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===36) {
				{
				{
				this.state = 293;
				this.match(LuaParser.COMMA);
				this.state = 294;
				this.var_();
				}
				}
				this.state = 299;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public namelist(): NamelistContext {
		let localctx: NamelistContext = new NamelistContext(this, this._ctx, this.state);
		this.enterRule(localctx, 20, LuaParser.RULE_namelist);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 300;
			this.identifier();
			this.state = 305;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===36) {
				{
				{
				this.state = 301;
				this.match(LuaParser.COMMA);
				this.state = 302;
				this.identifier();
				}
				}
				this.state = 307;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public decorator(): DecoratorContext {
		let localctx: DecoratorContext = new DecoratorContext(this, this._ctx, this.state);
		this.enterRule(localctx, 22, LuaParser.RULE_decorator);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 308;
			this.match(LuaParser.AT);
			this.state = 309;
			this.var_();
			this.state = 310;
			this.decoratorbody();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public decoratorbody(): DecoratorbodyContext {
		let localctx: DecoratorbodyContext = new DecoratorbodyContext(this, this._ctx, this.state);
		this.enterRule(localctx, 24, LuaParser.RULE_decoratorbody);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 317;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===52) {
				{
				this.state = 312;
				this.match(LuaParser.OP);
				this.state = 314;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if ((((_la) & ~0x1F) === 0 && ((1 << _la) & 4196344) !== 0) || ((((_la - 38)) & ~0x1F) === 0 && ((1 << (_la - 38)) & 536968065) !== 0) || ((((_la - 76)) & ~0x1F) === 0 && ((1 << (_la - 76)) & 4089) !== 0)) {
					{
					this.state = 313;
					this.explist();
					}
				}

				this.state = 316;
				this.match(LuaParser.CP);
				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public newcall(): NewcallContext {
		let localctx: NewcallContext = new NewcallContext(this, this._ctx, this.state);
		this.enterRule(localctx, 26, LuaParser.RULE_newcall);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 319;
			this.match(LuaParser.NEW);
			this.state = 320;
			this.functioncall(0);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public explist(): ExplistContext {
		let localctx: ExplistContext = new ExplistContext(this, this._ctx, this.state);
		this.enterRule(localctx, 28, LuaParser.RULE_explist);
		try {
			let _alt: number;
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 322;
			this.exp(0);
			this.state = 327;
			this._errHandler.sync(this);
			_alt = this._interp.adaptivePredict(this._input, 26, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 323;
					this.match(LuaParser.COMMA);
					this.state = 324;
					this.exp(0);
					}
					}
				}
				this.state = 329;
				this._errHandler.sync(this);
				_alt = this._interp.adaptivePredict(this._input, 26, this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}

	public exp(): ExpContext;
	public exp(_p: number): ExpContext;
	// @RuleVersion(0)
	public exp(_p?: number): ExpContext {
		if (_p === undefined) {
			_p = 0;
		}

		let _parentctx: ParserRuleContext = this._ctx;
		let _parentState: number = this.state;
		let localctx: ExpContext = new ExpContext(this, this._ctx, _parentState);
		let _prevctx: ExpContext = localctx;
		let _startState: number = 30;
		this.enterRecursionRule(localctx, 30, LuaParser.RULE_exp, _p);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 346;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 27, this._ctx) ) {
			case 1:
				{
				this.state = 331;
				this.match(LuaParser.NIL);
				}
				break;
			case 2:
				{
				this.state = 332;
				this.match(LuaParser.FALSE);
				}
				break;
			case 3:
				{
				this.state = 333;
				this.match(LuaParser.TRUE);
				}
				break;
			case 4:
				{
				this.state = 334;
				this.number_();
				}
				break;
			case 5:
				{
				this.state = 335;
				this.string_();
				}
				break;
			case 6:
				{
				this.state = 336;
				this.match(LuaParser.DDD);
				}
				break;
			case 7:
				{
				this.state = 337;
				this.newcall();
				}
				break;
			case 8:
				{
				this.state = 338;
				this.compactfunc();
				}
				break;
			case 9:
				{
				this.state = 339;
				this.tablecomprehension();
				}
				break;
			case 10:
				{
				this.state = 340;
				this.functiondef();
				}
				break;
			case 11:
				{
				this.state = 341;
				this.prefixexp();
				}
				break;
			case 12:
				{
				this.state = 342;
				this.tableconstructor();
				}
				break;
			case 13:
				{
				this.state = 343;
				_la = this._input.LA(1);
				if(!(((((_la - 49)) & ~0x1F) === 0 && ((1 << (_la - 49)) & 39) !== 0))) {
				this._errHandler.recoverInline(this);
				}
				else {
					this._errHandler.reportMatch(this);
				    this.consume();
				}
				this.state = 344;
				this.exp(11);
				}
				break;
			case 14:
				{
				this.state = 345;
				this.isop();
				}
				break;
			}
			this._ctx.stop = this._input.LT(-1);
			this.state = 384;
			this._errHandler.sync(this);
			_alt = this._interp.adaptivePredict(this._input, 29, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					if (this._parseListeners != null) {
						this.triggerExitRuleEvent();
					}
					_prevctx = localctx;
					{
					this.state = 382;
					this._errHandler.sync(this);
					switch ( this._interp.adaptivePredict(this._input, 28, this._ctx) ) {
					case 1:
						{
						localctx = new ExpContext(this, _parentctx, _parentState);
						this.pushNewRecursionContext(localctx, _startState, LuaParser.RULE_exp);
						this.state = 348;
						if (!(this.precpred(this._ctx, 12))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 12)");
						}
						{
						this.state = 349;
						this.match(LuaParser.CARET);
						}
						this.state = 350;
						this.exp(12);
						}
						break;
					case 2:
						{
						localctx = new ExpContext(this, _parentctx, _parentState);
						this.pushNewRecursionContext(localctx, _startState, LuaParser.RULE_exp);
						this.state = 351;
						if (!(this.precpred(this._ctx, 10))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 10)");
						}
						this.state = 352;
						_la = this._input.LA(1);
						if(!(((((_la - 58)) & ~0x1F) === 0 && ((1 << (_la - 58)) & 131331) !== 0))) {
						this._errHandler.recoverInline(this);
						}
						else {
							this._errHandler.reportMatch(this);
						    this.consume();
						}
						this.state = 353;
						this.exp(11);
						}
						break;
					case 3:
						{
						localctx = new ExpContext(this, _parentctx, _parentState);
						this.pushNewRecursionContext(localctx, _startState, LuaParser.RULE_exp);
						this.state = 354;
						if (!(this.precpred(this._ctx, 9))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 9)");
						}
						this.state = 355;
						_la = this._input.LA(1);
						if(!(_la===50 || _la===65)) {
						this._errHandler.recoverInline(this);
						}
						else {
							this._errHandler.reportMatch(this);
						    this.consume();
						}
						this.state = 356;
						this.exp(10);
						}
						break;
					case 4:
						{
						localctx = new ExpContext(this, _parentctx, _parentState);
						this.pushNewRecursionContext(localctx, _startState, LuaParser.RULE_exp);
						this.state = 357;
						if (!(this.precpred(this._ctx, 8))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 8)");
						}
						{
						this.state = 358;
						this.match(LuaParser.DD);
						}
						this.state = 359;
						this.exp(8);
						}
						break;
					case 5:
						{
						localctx = new ExpContext(this, _parentctx, _parentState);
						this.pushNewRecursionContext(localctx, _startState, LuaParser.RULE_exp);
						this.state = 360;
						if (!(this.precpred(this._ctx, 7))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 7)");
						}
						this.state = 361;
						_la = this._input.LA(1);
						if(!(((((_la - 40)) & ~0x1F) === 0 && ((1 << (_la - 40)) & 2153775107) !== 0) || _la===77 || _la===78)) {
						this._errHandler.recoverInline(this);
						}
						else {
							this._errHandler.reportMatch(this);
						    this.consume();
						}
						this.state = 362;
						this.exp(8);
						}
						break;
					case 6:
						{
						localctx = new ExpContext(this, _parentctx, _parentState);
						this.pushNewRecursionContext(localctx, _startState, LuaParser.RULE_exp);
						this.state = 363;
						if (!(this.precpred(this._ctx, 6))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 6)");
						}
						this.state = 364;
						_la = this._input.LA(1);
						if(!(_la===63 || _la===64)) {
						this._errHandler.recoverInline(this);
						}
						else {
							this._errHandler.reportMatch(this);
						    this.consume();
						}
						this.state = 365;
						this.exp(7);
						}
						break;
					case 7:
						{
						localctx = new ExpContext(this, _parentctx, _parentState);
						this.pushNewRecursionContext(localctx, _startState, LuaParser.RULE_exp);
						this.state = 366;
						if (!(this.precpred(this._ctx, 5))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 5)");
						}
						this.state = 367;
						_la = this._input.LA(1);
						if(!(((((_la - 49)) & ~0x1F) === 0 && ((1 << (_la - 49)) & 16777665) !== 0))) {
						this._errHandler.recoverInline(this);
						}
						else {
							this._errHandler.reportMatch(this);
						    this.consume();
						}
						this.state = 368;
						this.exp(6);
						}
						break;
					case 8:
						{
						localctx = new ExpContext(this, _parentctx, _parentState);
						this.pushNewRecursionContext(localctx, _startState, LuaParser.RULE_exp);
						this.state = 369;
						if (!(this.precpred(this._ctx, 3))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 3)");
						}
						this.state = 370;
						this.match(LuaParser.IN);
						this.state = 371;
						this.exp(4);
						}
						break;
					case 9:
						{
						localctx = new ExpContext(this, _parentctx, _parentState);
						this.pushNewRecursionContext(localctx, _startState, LuaParser.RULE_exp);
						this.state = 372;
						if (!(this.precpred(this._ctx, 2))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 2)");
						}
						this.state = 373;
						this.match(LuaParser.NOT);
						this.state = 374;
						this.match(LuaParser.IN);
						this.state = 375;
						this.exp(3);
						}
						break;
					case 10:
						{
						localctx = new ExpContext(this, _parentctx, _parentState);
						this.pushNewRecursionContext(localctx, _startState, LuaParser.RULE_exp);
						this.state = 376;
						if (!(this.precpred(this._ctx, 1))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 1)");
						}
						this.state = 377;
						this.match(LuaParser.QUESTMARK);
						this.state = 378;
						this.exp(0);
						this.state = 379;
						this.match(LuaParser.COL);
						this.state = 380;
						this.exp(2);
						}
						break;
					}
					}
				}
				this.state = 386;
				this._errHandler.sync(this);
				_alt = this._interp.adaptivePredict(this._input, 29, this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.unrollRecursionContexts(_parentctx);
		}
		return localctx;
	}
	// @RuleVersion(0)
	public filterfield(): FilterfieldContext {
		let localctx: FilterfieldContext = new FilterfieldContext(this, this._ctx, this.state);
		this.enterRule(localctx, 32, LuaParser.RULE_filterfield);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 387;
			this.exp(0);
			this.state = 390;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===34) {
				{
				this.state = 388;
				this.match(LuaParser.ELSE);
				this.state = 389;
				this.explist();
				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public filterfieldlist(): FilterfieldlistContext {
		let localctx: FilterfieldlistContext = new FilterfieldlistContext(this, this._ctx, this.state);
		this.enterRule(localctx, 34, LuaParser.RULE_filterfieldlist);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 392;
			this.filterfield();
			this.state = 398;
			this._errHandler.sync(this);
			_alt = this._interp.adaptivePredict(this._input, 31, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 393;
					this.fieldsep();
					this.state = 394;
					this.filterfield();
					}
					}
				}
				this.state = 400;
				this._errHandler.sync(this);
				_alt = this._interp.adaptivePredict(this._input, 31, this._ctx);
			}
			this.state = 402;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===1 || _la===36) {
				{
				this.state = 401;
				this.fieldsep();
				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public tablecomprehension(): TablecomprehensionContext {
		let localctx: TablecomprehensionContext = new TablecomprehensionContext(this, this._ctx, this.state);
		this.enterRule(localctx, 36, LuaParser.RULE_tablecomprehension);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 404;
			this.match(LuaParser.OCU);
			this.state = 405;
			this.exp(0);
			this.state = 408;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===36) {
				{
				this.state = 406;
				this.match(LuaParser.COMMA);
				this.state = 407;
				this.exp(0);
				}
			}

			this.state = 410;
			this.match(LuaParser.FOR);
			this.state = 411;
			this.namelist();
			this.state = 412;
			this.match(LuaParser.IN);
			this.state = 413;
			this.explist();
			this.state = 416;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===31) {
				{
				this.state = 414;
				this.match(LuaParser.IF);
				this.state = 415;
				this.exp(0);
				}
			}

			this.state = 418;
			this.match(LuaParser.CCU);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public compactfunc(): CompactfuncContext {
		let localctx: CompactfuncContext = new CompactfuncContext(this, this._ctx, this.state);
		this.enterRule(localctx, 38, LuaParser.RULE_compactfunc);
		let _la: number;
		try {
			this.state = 443;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 37, this._ctx) ) {
			case 1:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 421;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===52) {
					{
					this.state = 420;
					this.match(LuaParser.OP);
					}
				}

				this.state = 423;
				this.identifier();
				this.state = 425;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===53) {
					{
					this.state = 424;
					this.match(LuaParser.CP);
					}
				}

				this.state = 427;
				this.match(LuaParser.DO);
				this.state = 428;
				this.exp(0);
				}
				break;
			case 2:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 430;
				this.match(LuaParser.OP);
				this.state = 431;
				this.parlist();
				this.state = 432;
				this.match(LuaParser.CP);
				this.state = 433;
				this.match(LuaParser.DO);
				this.state = 434;
				this.block();
				this.state = 435;
				this.match(LuaParser.END);
				}
				break;
			case 3:
				this.enterOuterAlt(localctx, 3);
				{
				this.state = 437;
				this.match(LuaParser.OP);
				this.state = 438;
				this.parlist();
				this.state = 439;
				this.match(LuaParser.CP);
				this.state = 440;
				this.match(LuaParser.DO);
				this.state = 441;
				this.exp(0);
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public indexed_member(): Indexed_memberContext {
		let localctx: Indexed_memberContext = new Indexed_memberContext(this, this._ctx, this.state);
		this.enterRule(localctx, 40, LuaParser.RULE_indexed_member);
		try {
			this.state = 454;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 69:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 445;
				this.match(LuaParser.OB);
				this.state = 446;
				this.exp(0);
				this.state = 447;
				this.match(LuaParser.CB);
				}
				break;
			case 48:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 449;
				this.match(LuaParser.DOT);
				this.state = 450;
				this.identifier();
				}
				break;
			case 12:
				this.enterOuterAlt(localctx, 3);
				{
				this.state = 451;
				this.match(LuaParser.QUESTMARK);
				this.state = 452;
				this.match(LuaParser.DOT);
				this.state = 453;
				this.identifier();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public var_(): VarContext {
		let localctx: VarContext = new VarContext(this, this._ctx, this.state);
		this.enterRule(localctx, 42, LuaParser.RULE_var);
		try {
			this.state = 460;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 39, this._ctx) ) {
			case 1:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 456;
				this.identifier();
				}
				break;
			case 2:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 457;
				this.prefixexp();
				{
				this.state = 458;
				this.indexed_member();
				}
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public prefixexp(): PrefixexpContext {
		let localctx: PrefixexpContext = new PrefixexpContext(this, this._ctx, this.state);
		this.enterRule(localctx, 44, LuaParser.RULE_prefixexp);
		try {
			let _alt: number;
			this.state = 485;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 43, this._ctx) ) {
			case 1:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 462;
				this.identifier();
				this.state = 466;
				this._errHandler.sync(this);
				_alt = this._interp.adaptivePredict(this._input, 40, this._ctx);
				while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1) {
						{
						{
						this.state = 463;
						this.indexed_member();
						}
						}
					}
					this.state = 468;
					this._errHandler.sync(this);
					_alt = this._interp.adaptivePredict(this._input, 40, this._ctx);
				}
				}
				break;
			case 2:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 469;
				this.functioncall(0);
				this.state = 473;
				this._errHandler.sync(this);
				_alt = this._interp.adaptivePredict(this._input, 41, this._ctx);
				while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1) {
						{
						{
						this.state = 470;
						this.indexed_member();
						}
						}
					}
					this.state = 475;
					this._errHandler.sync(this);
					_alt = this._interp.adaptivePredict(this._input, 41, this._ctx);
				}
				}
				break;
			case 3:
				this.enterOuterAlt(localctx, 3);
				{
				this.state = 476;
				this.match(LuaParser.OP);
				this.state = 477;
				this.exp(0);
				this.state = 478;
				this.match(LuaParser.CP);
				this.state = 482;
				this._errHandler.sync(this);
				_alt = this._interp.adaptivePredict(this._input, 42, this._ctx);
				while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1) {
						{
						{
						this.state = 479;
						this.indexed_member();
						}
						}
					}
					this.state = 484;
					this._errHandler.sync(this);
					_alt = this._interp.adaptivePredict(this._input, 42, this._ctx);
				}
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}

	public functioncall(): FunctioncallContext;
	public functioncall(_p: number): FunctioncallContext;
	// @RuleVersion(0)
	public functioncall(_p?: number): FunctioncallContext {
		if (_p === undefined) {
			_p = 0;
		}

		let _parentctx: ParserRuleContext = this._ctx;
		let _parentState: number = this.state;
		let localctx: FunctioncallContext = new FunctioncallContext(this, this._ctx, _parentState);
		let _prevctx: FunctioncallContext = localctx;
		let _startState: number = 46;
		this.enterRecursionRule(localctx, 46, LuaParser.RULE_functioncall, _p);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 532;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 48, this._ctx) ) {
			case 1:
				{
				this.state = 488;
				this.identifier();
				this.state = 492;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la===12 || _la===48 || _la===69) {
					{
					{
					this.state = 489;
					this.indexed_member();
					}
					}
					this.state = 494;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 495;
				this.args();
				}
				break;
			case 2:
				{
				this.state = 497;
				this.match(LuaParser.OP);
				this.state = 498;
				this.exp(0);
				this.state = 499;
				this.match(LuaParser.CP);
				this.state = 503;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la===12 || _la===48 || _la===69) {
					{
					{
					this.state = 500;
					this.indexed_member();
					}
					}
					this.state = 505;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 506;
				this.args();
				}
				break;
			case 3:
				{
				this.state = 508;
				this.identifier();
				this.state = 512;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la===12 || _la===48 || _la===69) {
					{
					{
					this.state = 509;
					this.indexed_member();
					}
					}
					this.state = 514;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 515;
				this.match(LuaParser.COL);
				this.state = 516;
				this.identifier();
				this.state = 517;
				this.args();
				}
				break;
			case 4:
				{
				this.state = 519;
				this.match(LuaParser.OP);
				this.state = 520;
				this.exp(0);
				this.state = 521;
				this.match(LuaParser.CP);
				this.state = 525;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la===12 || _la===48 || _la===69) {
					{
					{
					this.state = 522;
					this.indexed_member();
					}
					}
					this.state = 527;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 528;
				this.match(LuaParser.COL);
				this.state = 529;
				this.identifier();
				this.state = 530;
				this.args();
				}
				break;
			}
			this._ctx.stop = this._input.LT(-1);
			this.state = 555;
			this._errHandler.sync(this);
			_alt = this._interp.adaptivePredict(this._input, 52, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					if (this._parseListeners != null) {
						this.triggerExitRuleEvent();
					}
					_prevctx = localctx;
					{
					this.state = 553;
					this._errHandler.sync(this);
					switch ( this._interp.adaptivePredict(this._input, 51, this._ctx) ) {
					case 1:
						{
						localctx = new FunctioncallContext(this, _parentctx, _parentState);
						this.pushNewRecursionContext(localctx, _startState, LuaParser.RULE_functioncall);
						this.state = 534;
						if (!(this.precpred(this._ctx, 5))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 5)");
						}
						this.state = 538;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
						while (_la===12 || _la===48 || _la===69) {
							{
							{
							this.state = 535;
							this.indexed_member();
							}
							}
							this.state = 540;
							this._errHandler.sync(this);
							_la = this._input.LA(1);
						}
						this.state = 541;
						this.args();
						}
						break;
					case 2:
						{
						localctx = new FunctioncallContext(this, _parentctx, _parentState);
						this.pushNewRecursionContext(localctx, _startState, LuaParser.RULE_functioncall);
						this.state = 542;
						if (!(this.precpred(this._ctx, 2))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 2)");
						}
						this.state = 546;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
						while (_la===12 || _la===48 || _la===69) {
							{
							{
							this.state = 543;
							this.indexed_member();
							}
							}
							this.state = 548;
							this._errHandler.sync(this);
							_la = this._input.LA(1);
						}
						this.state = 549;
						this.match(LuaParser.COL);
						this.state = 550;
						this.identifier();
						this.state = 551;
						this.args();
						}
						break;
					}
					}
				}
				this.state = 557;
				this._errHandler.sync(this);
				_alt = this._interp.adaptivePredict(this._input, 52, this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.unrollRecursionContexts(_parentctx);
		}
		return localctx;
	}
	// @RuleVersion(0)
	public compound(): CompoundContext {
		let localctx: CompoundContext = new CompoundContext(this, this._ctx, this.state);
		this.enterRule(localctx, 48, LuaParser.RULE_compound);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 558;
			this.var_();
			this.state = 559;
			_la = this._input.LA(1);
			if(!((((_la) & ~0x1F) === 0 && ((1 << _la) & 4186112) !== 0))) {
			this._errHandler.recoverInline(this);
			}
			else {
				this._errHandler.reportMatch(this);
			    this.consume();
			}
			this.state = 560;
			this.exp(0);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public argument(): ArgumentContext {
		let localctx: ArgumentContext = new ArgumentContext(this, this._ctx, this.state);
		this.enterRule(localctx, 50, LuaParser.RULE_argument);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 565;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 53, this._ctx) ) {
			case 1:
				{
				this.state = 562;
				this.identifier();
				this.state = 563;
				this.match(LuaParser.EQ);
				}
				break;
			}
			this.state = 567;
			this.exp(0);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public argumentlist(): ArgumentlistContext {
		let localctx: ArgumentlistContext = new ArgumentlistContext(this, this._ctx, this.state);
		this.enterRule(localctx, 52, LuaParser.RULE_argumentlist);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 569;
			this.argument();
			this.state = 574;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===36) {
				{
				{
				this.state = 570;
				this.match(LuaParser.COMMA);
				this.state = 571;
				this.argument();
				}
				}
				this.state = 576;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public args(): ArgsContext {
		let localctx: ArgsContext = new ArgsContext(this, this._ctx, this.state);
		this.enterRule(localctx, 54, LuaParser.RULE_args);
		let _la: number;
		try {
			this.state = 584;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 52:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 577;
				this.match(LuaParser.OP);
				this.state = 579;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if ((((_la) & ~0x1F) === 0 && ((1 << _la) & 4196344) !== 0) || ((((_la - 38)) & ~0x1F) === 0 && ((1 << (_la - 38)) & 536968065) !== 0) || ((((_la - 76)) & ~0x1F) === 0 && ((1 << (_la - 76)) & 4089) !== 0)) {
					{
					this.state = 578;
					this.argumentlist();
					}
				}

				this.state = 581;
				this.match(LuaParser.CP);
				}
				break;
			case 67:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 582;
				this.tableconstructor();
				}
				break;
			case 80:
			case 81:
			case 82:
			case 83:
				this.enterOuterAlt(localctx, 3);
				{
				this.state = 583;
				this.string_();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public functiondef(): FunctiondefContext {
		let localctx: FunctiondefContext = new FunctiondefContext(this, this._ctx, this.state);
		this.enterRule(localctx, 56, LuaParser.RULE_functiondef);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 586;
			this.match(LuaParser.FUNCTION);
			this.state = 587;
			this.funcbody();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public funcbody(): FuncbodyContext {
		let localctx: FuncbodyContext = new FuncbodyContext(this, this._ctx, this.state);
		this.enterRule(localctx, 58, LuaParser.RULE_funcbody);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 589;
			this.match(LuaParser.OP);
			this.state = 590;
			this.parlist();
			this.state = 591;
			this.match(LuaParser.CP);
			this.state = 592;
			this.block();
			this.state = 593;
			this.match(LuaParser.END);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public class_(): ClassContext {
		let localctx: ClassContext = new ClassContext(this, this._ctx, this.state);
		this.enterRule(localctx, 60, LuaParser.RULE_class);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 598;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===23) {
				{
				{
				this.state = 595;
				this.decorator();
				}
				}
				this.state = 600;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 601;
			this.match(LuaParser.CLASS);
			this.state = 602;
			this.identifier();
			this.state = 605;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===5) {
				{
				this.state = 603;
				this.match(LuaParser.EXTENDS);
				this.state = 604;
				this.identifier();
				}
			}

			this.state = 607;
			this.tableconstructor();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public isop(): IsopContext {
		let localctx: IsopContext = new IsopContext(this, this._ctx, this.state);
		this.enterRule(localctx, 62, LuaParser.RULE_isop);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 609;
			this.var_();
			this.state = 610;
			this.match(LuaParser.IS);
			this.state = 611;
			this.var_();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public type_(): TypeContext {
		let localctx: TypeContext = new TypeContext(this, this._ctx, this.state);
		this.enterRule(localctx, 64, LuaParser.RULE_type);
		try {
			this.state = 615;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 3:
			case 4:
			case 5:
			case 6:
			case 7:
			case 8:
			case 9:
			case 10:
			case 22:
			case 79:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 613;
				this.identifier();
				}
				break;
			case 45:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 614;
				this.match(LuaParser.NIL);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public partype(): PartypeContext {
		let localctx: PartypeContext = new PartypeContext(this, this._ctx, this.state);
		this.enterRule(localctx, 66, LuaParser.RULE_partype);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 626;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===60) {
				{
				this.state = 617;
				this.match(LuaParser.COL);
				this.state = 618;
				this.type_();
				this.state = 623;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la===73) {
					{
					{
					this.state = 619;
					this.match(LuaParser.PIPE);
					this.state = 620;
					this.type_();
					}
					}
					this.state = 625;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public defaultvalue(): DefaultvalueContext {
		let localctx: DefaultvalueContext = new DefaultvalueContext(this, this._ctx, this.state);
		this.enterRule(localctx, 68, LuaParser.RULE_defaultvalue);
		try {
			this.state = 631;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 2:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 628;
				this.match(LuaParser.EQ);
				this.state = 629;
				this.exp(0);
				}
				break;
			case 36:
			case 53:
				this.enterOuterAlt(localctx, 2);
				// tslint:disable-next-line:no-empty
				{
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public extendedpar(): ExtendedparContext {
		let localctx: ExtendedparContext = new ExtendedparContext(this, this._ctx, this.state);
		this.enterRule(localctx, 70, LuaParser.RULE_extendedpar);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 633;
			this.identifier();
			this.state = 634;
			this.partype();
			this.state = 635;
			this.defaultvalue();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public extendedparlist(): ExtendedparlistContext {
		let localctx: ExtendedparlistContext = new ExtendedparlistContext(this, this._ctx, this.state);
		this.enterRule(localctx, 72, LuaParser.RULE_extendedparlist);
		try {
			let _alt: number;
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 637;
			this.extendedpar();
			this.state = 642;
			this._errHandler.sync(this);
			_alt = this._interp.adaptivePredict(this._input, 63, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 638;
					this.match(LuaParser.COMMA);
					this.state = 639;
					this.extendedpar();
					}
					}
				}
				this.state = 644;
				this._errHandler.sync(this);
				_alt = this._interp.adaptivePredict(this._input, 63, this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public parlist(): ParlistContext {
		let localctx: ParlistContext = new ParlistContext(this, this._ctx, this.state);
		this.enterRule(localctx, 74, LuaParser.RULE_parlist);
		let _la: number;
		try {
			this.state = 652;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 3:
			case 4:
			case 5:
			case 6:
			case 7:
			case 8:
			case 9:
			case 10:
			case 22:
			case 79:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 645;
				this.extendedparlist();
				this.state = 648;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===36) {
					{
					this.state = 646;
					this.match(LuaParser.COMMA);
					this.state = 647;
					this.match(LuaParser.DDD);
					}
				}

				}
				break;
			case 76:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 650;
				this.match(LuaParser.DDD);
				}
				break;
			case 53:
				this.enterOuterAlt(localctx, 3);
				// tslint:disable-next-line:no-empty
				{
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public tableconstructor(): TableconstructorContext {
		let localctx: TableconstructorContext = new TableconstructorContext(this, this._ctx, this.state);
		this.enterRule(localctx, 76, LuaParser.RULE_tableconstructor);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 654;
			this.match(LuaParser.OCU);
			this.state = 656;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if ((((_la) & ~0x1F) === 0 && ((1 << _la) & 12584952) !== 0) || ((((_la - 38)) & ~0x1F) === 0 && ((1 << (_la - 38)) & 2684452737) !== 0) || ((((_la - 76)) & ~0x1F) === 0 && ((1 << (_la - 76)) & 4089) !== 0)) {
				{
				this.state = 655;
				this.fieldlist();
				}
			}

			this.state = 658;
			this.match(LuaParser.CCU);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public fieldlist(): FieldlistContext {
		let localctx: FieldlistContext = new FieldlistContext(this, this._ctx, this.state);
		this.enterRule(localctx, 78, LuaParser.RULE_fieldlist);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 660;
			this.field();
			this.state = 666;
			this._errHandler.sync(this);
			_alt = this._interp.adaptivePredict(this._input, 67, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 661;
					this.fieldsep();
					this.state = 662;
					this.field();
					}
					}
				}
				this.state = 668;
				this._errHandler.sync(this);
				_alt = this._interp.adaptivePredict(this._input, 67, this._ctx);
			}
			this.state = 670;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===1 || _la===36) {
				{
				this.state = 669;
				this.fieldsep();
				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public field(): FieldContext {
		let localctx: FieldContext = new FieldContext(this, this._ctx, this.state);
		this.enterRule(localctx, 80, LuaParser.RULE_field);
		let _la: number;
		try {
			this.state = 705;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 71, this._ctx) ) {
			case 1:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 673;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				do {
					{
					{
					this.state = 672;
					this.decorator();
					}
					}
					this.state = 675;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				} while (_la===23);
				this.state = 677;
				this.match(LuaParser.OB);
				this.state = 678;
				this.exp(0);
				this.state = 679;
				this.match(LuaParser.CB);
				this.state = 680;
				this.match(LuaParser.EQ);
				this.state = 681;
				this.functiondef();
				}
				break;
			case 2:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 684;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				do {
					{
					{
					this.state = 683;
					this.decorator();
					}
					}
					this.state = 686;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				} while (_la===23);
				this.state = 688;
				this.identifier();
				this.state = 689;
				this.match(LuaParser.EQ);
				this.state = 690;
				this.functiondef();
				}
				break;
			case 3:
				this.enterOuterAlt(localctx, 3);
				{
				this.state = 692;
				this.match(LuaParser.OB);
				this.state = 693;
				this.exp(0);
				this.state = 694;
				this.match(LuaParser.CB);
				this.state = 695;
				this.match(LuaParser.EQ);
				this.state = 696;
				this.exp(0);
				}
				break;
			case 4:
				this.enterOuterAlt(localctx, 4);
				{
				this.state = 698;
				this.match(LuaParser.DOT);
				this.state = 699;
				this.identifier();
				}
				break;
			case 5:
				this.enterOuterAlt(localctx, 5);
				{
				this.state = 700;
				this.identifier();
				this.state = 701;
				this.match(LuaParser.EQ);
				this.state = 702;
				this.exp(0);
				}
				break;
			case 6:
				this.enterOuterAlt(localctx, 6);
				{
				this.state = 704;
				this.exp(0);
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public fieldsep(): FieldsepContext {
		let localctx: FieldsepContext = new FieldsepContext(this, this._ctx, this.state);
		this.enterRule(localctx, 82, LuaParser.RULE_fieldsep);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 707;
			_la = this._input.LA(1);
			if(!(_la===1 || _la===36)) {
			this._errHandler.recoverInline(this);
			}
			else {
				this._errHandler.reportMatch(this);
			    this.consume();
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public identifier(): IdentifierContext {
		let localctx: IdentifierContext = new IdentifierContext(this, this._ctx, this.state);
		this.enterRule(localctx, 84, LuaParser.RULE_identifier);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 709;
			_la = this._input.LA(1);
			if(!((((_la) & ~0x1F) === 0 && ((1 << _la) & 4196344) !== 0) || _la===79)) {
			this._errHandler.recoverInline(this);
			}
			else {
				this._errHandler.reportMatch(this);
			    this.consume();
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public number_(): NumberContext {
		let localctx: NumberContext = new NumberContext(this, this._ctx, this.state);
		this.enterRule(localctx, 86, LuaParser.RULE_number);
		try {
			let _alt: number;
			this.state = 719;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 84:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 712;
				this._errHandler.sync(this);
				_alt = 1;
				do {
					switch (_alt) {
					case 1:
						{
						{
						this.state = 711;
						this.match(LuaParser.INT);
						}
						}
						break;
					default:
						throw new NoViableAltException(this);
					}
					this.state = 714;
					this._errHandler.sync(this);
					_alt = this._interp.adaptivePredict(this._input, 72, this._ctx);
				} while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER);
				}
				break;
			case 85:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 716;
				this.match(LuaParser.HEX);
				}
				break;
			case 86:
				this.enterOuterAlt(localctx, 3);
				{
				this.state = 717;
				this.match(LuaParser.FLOAT);
				}
				break;
			case 87:
				this.enterOuterAlt(localctx, 4);
				{
				this.state = 718;
				this.match(LuaParser.HEX_FLOAT);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public string_(): StringContext {
		let localctx: StringContext = new StringContext(this, this._ctx, this.state);
		this.enterRule(localctx, 88, LuaParser.RULE_string);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 721;
			_la = this._input.LA(1);
			if(!(((((_la - 80)) & ~0x1F) === 0 && ((1 << (_la - 80)) & 15) !== 0))) {
			this._errHandler.recoverInline(this);
			}
			else {
				this._errHandler.reportMatch(this);
			    this.consume();
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}

	public sempred(localctx: RuleContext, ruleIndex: number, predIndex: number): boolean {
		switch (ruleIndex) {
		case 15:
			return this.exp_sempred(localctx as ExpContext, predIndex);
		case 23:
			return this.functioncall_sempred(localctx as FunctioncallContext, predIndex);
		}
		return true;
	}
	private exp_sempred(localctx: ExpContext, predIndex: number): boolean {
		switch (predIndex) {
		case 0:
			return this.precpred(this._ctx, 12);
		case 1:
			return this.precpred(this._ctx, 10);
		case 2:
			return this.precpred(this._ctx, 9);
		case 3:
			return this.precpred(this._ctx, 8);
		case 4:
			return this.precpred(this._ctx, 7);
		case 5:
			return this.precpred(this._ctx, 6);
		case 6:
			return this.precpred(this._ctx, 5);
		case 7:
			return this.precpred(this._ctx, 3);
		case 8:
			return this.precpred(this._ctx, 2);
		case 9:
			return this.precpred(this._ctx, 1);
		}
		return true;
	}
	private functioncall_sempred(localctx: FunctioncallContext, predIndex: number): boolean {
		switch (predIndex) {
		case 10:
			return this.precpred(this._ctx, 5);
		case 11:
			return this.precpred(this._ctx, 2);
		}
		return true;
	}

	public static readonly _serializedATN: number[] = [4,1,92,724,2,0,7,0,2,
	1,7,1,2,2,7,2,2,3,7,3,2,4,7,4,2,5,7,5,2,6,7,6,2,7,7,7,2,8,7,8,2,9,7,9,2,
	10,7,10,2,11,7,11,2,12,7,12,2,13,7,13,2,14,7,14,2,15,7,15,2,16,7,16,2,17,
	7,17,2,18,7,18,2,19,7,19,2,20,7,20,2,21,7,21,2,22,7,22,2,23,7,23,2,24,7,
	24,2,25,7,25,2,26,7,26,2,27,7,27,2,28,7,28,2,29,7,29,2,30,7,30,2,31,7,31,
	2,32,7,32,2,33,7,33,2,34,7,34,2,35,7,35,2,36,7,36,2,37,7,37,2,38,7,38,2,
	39,7,39,2,40,7,40,2,41,7,41,2,42,7,42,2,43,7,43,2,44,7,44,1,0,1,0,1,0,1,
	1,1,1,1,2,5,2,97,8,2,10,2,12,2,100,9,2,1,2,3,2,103,8,2,1,3,1,3,1,3,1,3,
	1,3,1,3,1,3,3,3,112,8,3,1,3,1,3,1,3,1,3,1,3,1,3,1,3,1,3,1,3,1,3,1,3,1,3,
	1,3,1,3,1,3,1,3,1,3,1,3,1,3,1,3,1,3,1,3,1,3,1,3,1,3,5,3,139,8,3,10,3,12,
	3,142,9,3,1,3,1,3,3,3,146,8,3,1,3,1,3,1,3,1,3,1,3,1,3,1,3,1,3,1,3,1,3,3,
	3,158,8,3,1,3,1,3,1,3,1,3,1,3,1,3,1,3,1,3,1,3,1,3,1,3,1,3,1,3,1,3,1,3,1,
	3,1,3,5,3,177,8,3,10,3,12,3,180,9,3,1,3,1,3,1,3,1,3,1,3,5,3,187,8,3,10,
	3,12,3,190,9,3,1,3,1,3,1,3,1,3,1,3,1,3,1,3,1,3,1,3,1,3,1,3,3,3,203,8,3,
	1,3,1,3,1,3,1,3,1,3,1,3,1,3,3,3,212,8,3,1,3,3,3,215,8,3,1,3,1,3,1,3,1,3,
	3,3,221,8,3,1,3,1,3,1,3,1,3,1,3,1,3,1,3,1,3,1,3,1,3,1,3,1,3,1,3,1,3,3,3,
	237,8,3,3,3,239,8,3,1,3,1,3,1,3,1,3,1,3,1,3,3,3,247,8,3,1,4,1,4,1,4,1,4,
	1,4,1,4,5,4,255,8,4,10,4,12,4,258,9,4,1,5,1,5,1,5,1,5,3,5,264,8,5,1,6,1,
	6,3,6,268,8,6,1,6,1,6,3,6,272,8,6,1,6,3,6,275,8,6,1,7,1,7,1,7,1,7,1,8,1,
	8,1,8,5,8,284,8,8,10,8,12,8,287,9,8,1,8,1,8,3,8,291,8,8,1,9,1,9,1,9,5,9,
	296,8,9,10,9,12,9,299,9,9,1,10,1,10,1,10,5,10,304,8,10,10,10,12,10,307,
	9,10,1,11,1,11,1,11,1,11,1,12,1,12,3,12,315,8,12,1,12,3,12,318,8,12,1,13,
	1,13,1,13,1,14,1,14,1,14,5,14,326,8,14,10,14,12,14,329,9,14,1,15,1,15,1,
	15,1,15,1,15,1,15,1,15,1,15,1,15,1,15,1,15,1,15,1,15,1,15,1,15,1,15,3,15,
	347,8,15,1,15,1,15,1,15,1,15,1,15,1,15,1,15,1,15,1,15,1,15,1,15,1,15,1,
	15,1,15,1,15,1,15,1,15,1,15,1,15,1,15,1,15,1,15,1,15,1,15,1,15,1,15,1,15,
	1,15,1,15,1,15,1,15,1,15,1,15,1,15,5,15,383,8,15,10,15,12,15,386,9,15,1,
	16,1,16,1,16,3,16,391,8,16,1,17,1,17,1,17,1,17,5,17,397,8,17,10,17,12,17,
	400,9,17,1,17,3,17,403,8,17,1,18,1,18,1,18,1,18,3,18,409,8,18,1,18,1,18,
	1,18,1,18,1,18,1,18,3,18,417,8,18,1,18,1,18,1,19,3,19,422,8,19,1,19,1,19,
	3,19,426,8,19,1,19,1,19,1,19,1,19,1,19,1,19,1,19,1,19,1,19,1,19,1,19,1,
	19,1,19,1,19,1,19,1,19,3,19,444,8,19,1,20,1,20,1,20,1,20,1,20,1,20,1,20,
	1,20,1,20,3,20,455,8,20,1,21,1,21,1,21,1,21,3,21,461,8,21,1,22,1,22,5,22,
	465,8,22,10,22,12,22,468,9,22,1,22,1,22,5,22,472,8,22,10,22,12,22,475,9,
	22,1,22,1,22,1,22,1,22,5,22,481,8,22,10,22,12,22,484,9,22,3,22,486,8,22,
	1,23,1,23,1,23,5,23,491,8,23,10,23,12,23,494,9,23,1,23,1,23,1,23,1,23,1,
	23,1,23,5,23,502,8,23,10,23,12,23,505,9,23,1,23,1,23,1,23,1,23,5,23,511,
	8,23,10,23,12,23,514,9,23,1,23,1,23,1,23,1,23,1,23,1,23,1,23,1,23,5,23,
	524,8,23,10,23,12,23,527,9,23,1,23,1,23,1,23,1,23,3,23,533,8,23,1,23,1,
	23,5,23,537,8,23,10,23,12,23,540,9,23,1,23,1,23,1,23,5,23,545,8,23,10,23,
	12,23,548,9,23,1,23,1,23,1,23,1,23,5,23,554,8,23,10,23,12,23,557,9,23,1,
	24,1,24,1,24,1,24,1,25,1,25,1,25,3,25,566,8,25,1,25,1,25,1,26,1,26,1,26,
	5,26,573,8,26,10,26,12,26,576,9,26,1,27,1,27,3,27,580,8,27,1,27,1,27,1,
	27,3,27,585,8,27,1,28,1,28,1,28,1,29,1,29,1,29,1,29,1,29,1,29,1,30,5,30,
	597,8,30,10,30,12,30,600,9,30,1,30,1,30,1,30,1,30,3,30,606,8,30,1,30,1,
	30,1,31,1,31,1,31,1,31,1,32,1,32,3,32,616,8,32,1,33,1,33,1,33,1,33,5,33,
	622,8,33,10,33,12,33,625,9,33,3,33,627,8,33,1,34,1,34,1,34,3,34,632,8,34,
	1,35,1,35,1,35,1,35,1,36,1,36,1,36,5,36,641,8,36,10,36,12,36,644,9,36,1,
	37,1,37,1,37,3,37,649,8,37,1,37,1,37,3,37,653,8,37,1,38,1,38,3,38,657,8,
	38,1,38,1,38,1,39,1,39,1,39,1,39,5,39,665,8,39,10,39,12,39,668,9,39,1,39,
	3,39,671,8,39,1,40,4,40,674,8,40,11,40,12,40,675,1,40,1,40,1,40,1,40,1,
	40,1,40,1,40,4,40,685,8,40,11,40,12,40,686,1,40,1,40,1,40,1,40,1,40,1,40,
	1,40,1,40,1,40,1,40,1,40,1,40,1,40,1,40,1,40,1,40,1,40,3,40,706,8,40,1,
	41,1,41,1,42,1,42,1,43,4,43,713,8,43,11,43,12,43,714,1,43,1,43,1,43,3,43,
	720,8,43,1,44,1,44,1,44,0,2,30,46,45,0,2,4,6,8,10,12,14,16,18,20,22,24,
	26,28,30,32,34,36,38,40,42,44,46,48,50,52,54,56,58,60,62,64,66,68,70,72,
	74,76,78,80,82,84,86,88,0,10,2,0,49,51,54,54,3,0,58,59,66,66,75,75,2,0,
	50,50,65,65,4,0,40,41,61,62,71,71,77,78,1,0,63,64,3,0,49,49,55,57,73,73,
	1,0,13,21,2,0,1,1,36,36,3,0,3,10,22,22,79,79,1,0,80,83,807,0,90,1,0,0,0,
	2,93,1,0,0,0,4,98,1,0,0,0,6,246,1,0,0,0,8,248,1,0,0,0,10,263,1,0,0,0,12,
	271,1,0,0,0,14,276,1,0,0,0,16,280,1,0,0,0,18,292,1,0,0,0,20,300,1,0,0,0,
	22,308,1,0,0,0,24,317,1,0,0,0,26,319,1,0,0,0,28,322,1,0,0,0,30,346,1,0,
	0,0,32,387,1,0,0,0,34,392,1,0,0,0,36,404,1,0,0,0,38,443,1,0,0,0,40,454,
	1,0,0,0,42,460,1,0,0,0,44,485,1,0,0,0,46,532,1,0,0,0,48,558,1,0,0,0,50,
	565,1,0,0,0,52,569,1,0,0,0,54,584,1,0,0,0,56,586,1,0,0,0,58,589,1,0,0,0,
	60,598,1,0,0,0,62,609,1,0,0,0,64,615,1,0,0,0,66,626,1,0,0,0,68,631,1,0,
	0,0,70,633,1,0,0,0,72,637,1,0,0,0,74,652,1,0,0,0,76,654,1,0,0,0,78,660,
	1,0,0,0,80,705,1,0,0,0,82,707,1,0,0,0,84,709,1,0,0,0,86,719,1,0,0,0,88,
	721,1,0,0,0,90,91,3,2,1,0,91,92,5,0,0,1,92,1,1,0,0,0,93,94,3,4,2,0,94,3,
	1,0,0,0,95,97,3,6,3,0,96,95,1,0,0,0,97,100,1,0,0,0,98,96,1,0,0,0,98,99,
	1,0,0,0,99,102,1,0,0,0,100,98,1,0,0,0,101,103,3,12,6,0,102,101,1,0,0,0,
	102,103,1,0,0,0,103,5,1,0,0,0,104,247,5,1,0,0,105,106,3,18,9,0,106,107,
	5,2,0,0,107,108,3,28,14,0,108,247,1,0,0,0,109,247,3,48,24,0,110,112,5,3,
	0,0,111,110,1,0,0,0,111,112,1,0,0,0,112,113,1,0,0,0,113,247,3,46,23,0,114,
	247,3,14,7,0,115,247,5,24,0,0,116,117,5,25,0,0,117,247,3,84,42,0,118,119,
	5,28,0,0,119,120,3,30,15,0,120,121,5,26,0,0,121,122,3,4,2,0,122,123,5,27,
	0,0,123,247,1,0,0,0,124,125,5,29,0,0,125,126,3,4,2,0,126,127,5,30,0,0,127,
	128,3,30,15,0,128,247,1,0,0,0,129,130,5,31,0,0,130,131,3,30,15,0,131,132,
	5,32,0,0,132,140,3,4,2,0,133,134,5,33,0,0,134,135,3,30,15,0,135,136,5,32,
	0,0,136,137,3,4,2,0,137,139,1,0,0,0,138,133,1,0,0,0,139,142,1,0,0,0,140,
	138,1,0,0,0,140,141,1,0,0,0,141,145,1,0,0,0,142,140,1,0,0,0,143,144,5,34,
	0,0,144,146,3,4,2,0,145,143,1,0,0,0,145,146,1,0,0,0,146,147,1,0,0,0,147,
	148,5,27,0,0,148,247,1,0,0,0,149,150,5,35,0,0,150,151,3,84,42,0,151,152,
	5,2,0,0,152,153,3,30,15,0,153,154,5,36,0,0,154,157,3,30,15,0,155,156,5,
	36,0,0,156,158,3,30,15,0,157,155,1,0,0,0,157,158,1,0,0,0,158,159,1,0,0,
	0,159,160,5,26,0,0,160,161,3,4,2,0,161,162,5,27,0,0,162,247,1,0,0,0,163,
	164,5,35,0,0,164,165,3,20,10,0,165,166,5,37,0,0,166,167,3,28,14,0,167,168,
	5,26,0,0,168,169,3,4,2,0,169,170,5,27,0,0,170,247,1,0,0,0,171,172,5,26,
	0,0,172,173,3,4,2,0,173,174,5,27,0,0,174,247,1,0,0,0,175,177,3,22,11,0,
	176,175,1,0,0,0,177,180,1,0,0,0,178,176,1,0,0,0,178,179,1,0,0,0,179,181,
	1,0,0,0,180,178,1,0,0,0,181,182,5,38,0,0,182,183,3,16,8,0,183,184,3,58,
	29,0,184,247,1,0,0,0,185,187,3,22,11,0,186,185,1,0,0,0,187,190,1,0,0,0,
	188,186,1,0,0,0,188,189,1,0,0,0,189,191,1,0,0,0,190,188,1,0,0,0,191,192,
	5,39,0,0,192,193,5,38,0,0,193,194,3,84,42,0,194,195,3,58,29,0,195,247,1,
	0,0,0,196,197,5,7,0,0,197,202,3,16,8,0,198,199,5,52,0,0,199,200,3,74,37,
	0,200,201,5,53,0,0,201,203,1,0,0,0,202,198,1,0,0,0,202,203,1,0,0,0,203,
	204,1,0,0,0,204,205,3,34,17,0,205,206,5,27,0,0,206,247,1,0,0,0,207,208,
	5,6,0,0,208,214,3,84,42,0,209,211,5,52,0,0,210,212,3,28,14,0,211,210,1,
	0,0,0,211,212,1,0,0,0,212,213,1,0,0,0,213,215,5,53,0,0,214,209,1,0,0,0,
	214,215,1,0,0,0,215,247,1,0,0,0,216,217,5,39,0,0,217,220,3,8,4,0,218,219,
	5,2,0,0,219,221,3,28,14,0,220,218,1,0,0,0,220,221,1,0,0,0,221,247,1,0,0,
	0,222,223,5,39,0,0,223,224,3,8,4,0,224,225,5,37,0,0,225,226,3,44,22,0,226,
	247,1,0,0,0,227,228,5,22,0,0,228,229,3,4,2,0,229,230,5,27,0,0,230,247,1,
	0,0,0,231,232,5,9,0,0,232,233,3,4,2,0,233,238,5,10,0,0,234,236,3,84,42,
	0,235,237,5,32,0,0,236,235,1,0,0,0,236,237,1,0,0,0,237,239,1,0,0,0,238,
	234,1,0,0,0,238,239,1,0,0,0,239,240,1,0,0,0,240,241,3,4,2,0,241,242,5,27,
	0,0,242,247,1,0,0,0,243,244,5,11,0,0,244,247,3,30,15,0,245,247,3,60,30,
	0,246,104,1,0,0,0,246,105,1,0,0,0,246,109,1,0,0,0,246,111,1,0,0,0,246,114,
	1,0,0,0,246,115,1,0,0,0,246,116,1,0,0,0,246,118,1,0,0,0,246,124,1,0,0,0,
	246,129,1,0,0,0,246,149,1,0,0,0,246,163,1,0,0,0,246,171,1,0,0,0,246,178,
	1,0,0,0,246,188,1,0,0,0,246,196,1,0,0,0,246,207,1,0,0,0,246,216,1,0,0,0,
	246,222,1,0,0,0,246,227,1,0,0,0,246,231,1,0,0,0,246,243,1,0,0,0,246,245,
	1,0,0,0,247,7,1,0,0,0,248,249,3,84,42,0,249,256,3,10,5,0,250,251,5,36,0,
	0,251,252,3,84,42,0,252,253,3,10,5,0,253,255,1,0,0,0,254,250,1,0,0,0,255,
	258,1,0,0,0,256,254,1,0,0,0,256,257,1,0,0,0,257,9,1,0,0,0,258,256,1,0,0,
	0,259,260,5,40,0,0,260,261,3,84,42,0,261,262,5,41,0,0,262,264,1,0,0,0,263,
	259,1,0,0,0,263,264,1,0,0,0,264,11,1,0,0,0,265,267,5,42,0,0,266,268,3,28,
	14,0,267,266,1,0,0,0,267,268,1,0,0,0,268,272,1,0,0,0,269,272,5,24,0,0,270,
	272,5,43,0,0,271,265,1,0,0,0,271,269,1,0,0,0,271,270,1,0,0,0,272,274,1,
	0,0,0,273,275,5,1,0,0,274,273,1,0,0,0,274,275,1,0,0,0,275,13,1,0,0,0,276,
	277,5,44,0,0,277,278,3,84,42,0,278,279,5,44,0,0,279,15,1,0,0,0,280,285,
	3,84,42,0,281,282,5,48,0,0,282,284,3,84,42,0,283,281,1,0,0,0,284,287,1,
	0,0,0,285,283,1,0,0,0,285,286,1,0,0,0,286,290,1,0,0,0,287,285,1,0,0,0,288,
	289,5,60,0,0,289,291,3,84,42,0,290,288,1,0,0,0,290,291,1,0,0,0,291,17,1,
	0,0,0,292,297,3,42,21,0,293,294,5,36,0,0,294,296,3,42,21,0,295,293,1,0,
	0,0,296,299,1,0,0,0,297,295,1,0,0,0,297,298,1,0,0,0,298,19,1,0,0,0,299,
	297,1,0,0,0,300,305,3,84,42,0,301,302,5,36,0,0,302,304,3,84,42,0,303,301,
	1,0,0,0,304,307,1,0,0,0,305,303,1,0,0,0,305,306,1,0,0,0,306,21,1,0,0,0,
	307,305,1,0,0,0,308,309,5,23,0,0,309,310,3,42,21,0,310,311,3,24,12,0,311,
	23,1,0,0,0,312,314,5,52,0,0,313,315,3,28,14,0,314,313,1,0,0,0,314,315,1,
	0,0,0,315,316,1,0,0,0,316,318,5,53,0,0,317,312,1,0,0,0,317,318,1,0,0,0,
	318,25,1,0,0,0,319,320,5,3,0,0,320,321,3,46,23,0,321,27,1,0,0,0,322,327,
	3,30,15,0,323,324,5,36,0,0,324,326,3,30,15,0,325,323,1,0,0,0,326,329,1,
	0,0,0,327,325,1,0,0,0,327,328,1,0,0,0,328,29,1,0,0,0,329,327,1,0,0,0,330,
	331,6,15,-1,0,331,347,5,45,0,0,332,347,5,46,0,0,333,347,5,47,0,0,334,347,
	3,86,43,0,335,347,3,88,44,0,336,347,5,76,0,0,337,347,3,26,13,0,338,347,
	3,38,19,0,339,347,3,36,18,0,340,347,3,56,28,0,341,347,3,44,22,0,342,347,
	3,76,38,0,343,344,7,0,0,0,344,347,3,30,15,11,345,347,3,62,31,0,346,330,
	1,0,0,0,346,332,1,0,0,0,346,333,1,0,0,0,346,334,1,0,0,0,346,335,1,0,0,0,
	346,336,1,0,0,0,346,337,1,0,0,0,346,338,1,0,0,0,346,339,1,0,0,0,346,340,
	1,0,0,0,346,341,1,0,0,0,346,342,1,0,0,0,346,343,1,0,0,0,346,345,1,0,0,0,
	347,384,1,0,0,0,348,349,10,12,0,0,349,350,5,74,0,0,350,383,3,30,15,12,351,
	352,10,10,0,0,352,353,7,1,0,0,353,383,3,30,15,11,354,355,10,9,0,0,355,356,
	7,2,0,0,356,383,3,30,15,10,357,358,10,8,0,0,358,359,5,72,0,0,359,383,3,
	30,15,8,360,361,10,7,0,0,361,362,7,3,0,0,362,383,3,30,15,8,363,364,10,6,
	0,0,364,365,7,4,0,0,365,383,3,30,15,7,366,367,10,5,0,0,367,368,7,5,0,0,
	368,383,3,30,15,6,369,370,10,3,0,0,370,371,5,37,0,0,371,383,3,30,15,4,372,
	373,10,2,0,0,373,374,5,54,0,0,374,375,5,37,0,0,375,383,3,30,15,3,376,377,
	10,1,0,0,377,378,5,12,0,0,378,379,3,30,15,0,379,380,5,60,0,0,380,381,3,
	30,15,2,381,383,1,0,0,0,382,348,1,0,0,0,382,351,1,0,0,0,382,354,1,0,0,0,
	382,357,1,0,0,0,382,360,1,0,0,0,382,363,1,0,0,0,382,366,1,0,0,0,382,369,
	1,0,0,0,382,372,1,0,0,0,382,376,1,0,0,0,383,386,1,0,0,0,384,382,1,0,0,0,
	384,385,1,0,0,0,385,31,1,0,0,0,386,384,1,0,0,0,387,390,3,30,15,0,388,389,
	5,34,0,0,389,391,3,28,14,0,390,388,1,0,0,0,390,391,1,0,0,0,391,33,1,0,0,
	0,392,398,3,32,16,0,393,394,3,82,41,0,394,395,3,32,16,0,395,397,1,0,0,0,
	396,393,1,0,0,0,397,400,1,0,0,0,398,396,1,0,0,0,398,399,1,0,0,0,399,402,
	1,0,0,0,400,398,1,0,0,0,401,403,3,82,41,0,402,401,1,0,0,0,402,403,1,0,0,
	0,403,35,1,0,0,0,404,405,5,67,0,0,405,408,3,30,15,0,406,407,5,36,0,0,407,
	409,3,30,15,0,408,406,1,0,0,0,408,409,1,0,0,0,409,410,1,0,0,0,410,411,5,
	35,0,0,411,412,3,20,10,0,412,413,5,37,0,0,413,416,3,28,14,0,414,415,5,31,
	0,0,415,417,3,30,15,0,416,414,1,0,0,0,416,417,1,0,0,0,417,418,1,0,0,0,418,
	419,5,68,0,0,419,37,1,0,0,0,420,422,5,52,0,0,421,420,1,0,0,0,421,422,1,
	0,0,0,422,423,1,0,0,0,423,425,3,84,42,0,424,426,5,53,0,0,425,424,1,0,0,
	0,425,426,1,0,0,0,426,427,1,0,0,0,427,428,5,26,0,0,428,429,3,30,15,0,429,
	444,1,0,0,0,430,431,5,52,0,0,431,432,3,74,37,0,432,433,5,53,0,0,433,434,
	5,26,0,0,434,435,3,4,2,0,435,436,5,27,0,0,436,444,1,0,0,0,437,438,5,52,
	0,0,438,439,3,74,37,0,439,440,5,53,0,0,440,441,5,26,0,0,441,442,3,30,15,
	0,442,444,1,0,0,0,443,421,1,0,0,0,443,430,1,0,0,0,443,437,1,0,0,0,444,39,
	1,0,0,0,445,446,5,69,0,0,446,447,3,30,15,0,447,448,5,70,0,0,448,455,1,0,
	0,0,449,450,5,48,0,0,450,455,3,84,42,0,451,452,5,12,0,0,452,453,5,48,0,
	0,453,455,3,84,42,0,454,445,1,0,0,0,454,449,1,0,0,0,454,451,1,0,0,0,455,
	41,1,0,0,0,456,461,3,84,42,0,457,458,3,44,22,0,458,459,3,40,20,0,459,461,
	1,0,0,0,460,456,1,0,0,0,460,457,1,0,0,0,461,43,1,0,0,0,462,466,3,84,42,
	0,463,465,3,40,20,0,464,463,1,0,0,0,465,468,1,0,0,0,466,464,1,0,0,0,466,
	467,1,0,0,0,467,486,1,0,0,0,468,466,1,0,0,0,469,473,3,46,23,0,470,472,3,
	40,20,0,471,470,1,0,0,0,472,475,1,0,0,0,473,471,1,0,0,0,473,474,1,0,0,0,
	474,486,1,0,0,0,475,473,1,0,0,0,476,477,5,52,0,0,477,478,3,30,15,0,478,
	482,5,53,0,0,479,481,3,40,20,0,480,479,1,0,0,0,481,484,1,0,0,0,482,480,
	1,0,0,0,482,483,1,0,0,0,483,486,1,0,0,0,484,482,1,0,0,0,485,462,1,0,0,0,
	485,469,1,0,0,0,485,476,1,0,0,0,486,45,1,0,0,0,487,488,6,23,-1,0,488,492,
	3,84,42,0,489,491,3,40,20,0,490,489,1,0,0,0,491,494,1,0,0,0,492,490,1,0,
	0,0,492,493,1,0,0,0,493,495,1,0,0,0,494,492,1,0,0,0,495,496,3,54,27,0,496,
	533,1,0,0,0,497,498,5,52,0,0,498,499,3,30,15,0,499,503,5,53,0,0,500,502,
	3,40,20,0,501,500,1,0,0,0,502,505,1,0,0,0,503,501,1,0,0,0,503,504,1,0,0,
	0,504,506,1,0,0,0,505,503,1,0,0,0,506,507,3,54,27,0,507,533,1,0,0,0,508,
	512,3,84,42,0,509,511,3,40,20,0,510,509,1,0,0,0,511,514,1,0,0,0,512,510,
	1,0,0,0,512,513,1,0,0,0,513,515,1,0,0,0,514,512,1,0,0,0,515,516,5,60,0,
	0,516,517,3,84,42,0,517,518,3,54,27,0,518,533,1,0,0,0,519,520,5,52,0,0,
	520,521,3,30,15,0,521,525,5,53,0,0,522,524,3,40,20,0,523,522,1,0,0,0,524,
	527,1,0,0,0,525,523,1,0,0,0,525,526,1,0,0,0,526,528,1,0,0,0,527,525,1,0,
	0,0,528,529,5,60,0,0,529,530,3,84,42,0,530,531,3,54,27,0,531,533,1,0,0,
	0,532,487,1,0,0,0,532,497,1,0,0,0,532,508,1,0,0,0,532,519,1,0,0,0,533,555,
	1,0,0,0,534,538,10,5,0,0,535,537,3,40,20,0,536,535,1,0,0,0,537,540,1,0,
	0,0,538,536,1,0,0,0,538,539,1,0,0,0,539,541,1,0,0,0,540,538,1,0,0,0,541,
	554,3,54,27,0,542,546,10,2,0,0,543,545,3,40,20,0,544,543,1,0,0,0,545,548,
	1,0,0,0,546,544,1,0,0,0,546,547,1,0,0,0,547,549,1,0,0,0,548,546,1,0,0,0,
	549,550,5,60,0,0,550,551,3,84,42,0,551,552,3,54,27,0,552,554,1,0,0,0,553,
	534,1,0,0,0,553,542,1,0,0,0,554,557,1,0,0,0,555,553,1,0,0,0,555,556,1,0,
	0,0,556,47,1,0,0,0,557,555,1,0,0,0,558,559,3,42,21,0,559,560,7,6,0,0,560,
	561,3,30,15,0,561,49,1,0,0,0,562,563,3,84,42,0,563,564,5,2,0,0,564,566,
	1,0,0,0,565,562,1,0,0,0,565,566,1,0,0,0,566,567,1,0,0,0,567,568,3,30,15,
	0,568,51,1,0,0,0,569,574,3,50,25,0,570,571,5,36,0,0,571,573,3,50,25,0,572,
	570,1,0,0,0,573,576,1,0,0,0,574,572,1,0,0,0,574,575,1,0,0,0,575,53,1,0,
	0,0,576,574,1,0,0,0,577,579,5,52,0,0,578,580,3,52,26,0,579,578,1,0,0,0,
	579,580,1,0,0,0,580,581,1,0,0,0,581,585,5,53,0,0,582,585,3,76,38,0,583,
	585,3,88,44,0,584,577,1,0,0,0,584,582,1,0,0,0,584,583,1,0,0,0,585,55,1,
	0,0,0,586,587,5,38,0,0,587,588,3,58,29,0,588,57,1,0,0,0,589,590,5,52,0,
	0,590,591,3,74,37,0,591,592,5,53,0,0,592,593,3,4,2,0,593,594,5,27,0,0,594,
	59,1,0,0,0,595,597,3,22,11,0,596,595,1,0,0,0,597,600,1,0,0,0,598,596,1,
	0,0,0,598,599,1,0,0,0,599,601,1,0,0,0,600,598,1,0,0,0,601,602,5,4,0,0,602,
	605,3,84,42,0,603,604,5,5,0,0,604,606,3,84,42,0,605,603,1,0,0,0,605,606,
	1,0,0,0,606,607,1,0,0,0,607,608,3,76,38,0,608,61,1,0,0,0,609,610,3,42,21,
	0,610,611,5,8,0,0,611,612,3,42,21,0,612,63,1,0,0,0,613,616,3,84,42,0,614,
	616,5,45,0,0,615,613,1,0,0,0,615,614,1,0,0,0,616,65,1,0,0,0,617,618,5,60,
	0,0,618,623,3,64,32,0,619,620,5,73,0,0,620,622,3,64,32,0,621,619,1,0,0,
	0,622,625,1,0,0,0,623,621,1,0,0,0,623,624,1,0,0,0,624,627,1,0,0,0,625,623,
	1,0,0,0,626,617,1,0,0,0,626,627,1,0,0,0,627,67,1,0,0,0,628,629,5,2,0,0,
	629,632,3,30,15,0,630,632,1,0,0,0,631,628,1,0,0,0,631,630,1,0,0,0,632,69,
	1,0,0,0,633,634,3,84,42,0,634,635,3,66,33,0,635,636,3,68,34,0,636,71,1,
	0,0,0,637,642,3,70,35,0,638,639,5,36,0,0,639,641,3,70,35,0,640,638,1,0,
	0,0,641,644,1,0,0,0,642,640,1,0,0,0,642,643,1,0,0,0,643,73,1,0,0,0,644,
	642,1,0,0,0,645,648,3,72,36,0,646,647,5,36,0,0,647,649,5,76,0,0,648,646,
	1,0,0,0,648,649,1,0,0,0,649,653,1,0,0,0,650,653,5,76,0,0,651,653,1,0,0,
	0,652,645,1,0,0,0,652,650,1,0,0,0,652,651,1,0,0,0,653,75,1,0,0,0,654,656,
	5,67,0,0,655,657,3,78,39,0,656,655,1,0,0,0,656,657,1,0,0,0,657,658,1,0,
	0,0,658,659,5,68,0,0,659,77,1,0,0,0,660,666,3,80,40,0,661,662,3,82,41,0,
	662,663,3,80,40,0,663,665,1,0,0,0,664,661,1,0,0,0,665,668,1,0,0,0,666,664,
	1,0,0,0,666,667,1,0,0,0,667,670,1,0,0,0,668,666,1,0,0,0,669,671,3,82,41,
	0,670,669,1,0,0,0,670,671,1,0,0,0,671,79,1,0,0,0,672,674,3,22,11,0,673,
	672,1,0,0,0,674,675,1,0,0,0,675,673,1,0,0,0,675,676,1,0,0,0,676,677,1,0,
	0,0,677,678,5,69,0,0,678,679,3,30,15,0,679,680,5,70,0,0,680,681,5,2,0,0,
	681,682,3,56,28,0,682,706,1,0,0,0,683,685,3,22,11,0,684,683,1,0,0,0,685,
	686,1,0,0,0,686,684,1,0,0,0,686,687,1,0,0,0,687,688,1,0,0,0,688,689,3,84,
	42,0,689,690,5,2,0,0,690,691,3,56,28,0,691,706,1,0,0,0,692,693,5,69,0,0,
	693,694,3,30,15,0,694,695,5,70,0,0,695,696,5,2,0,0,696,697,3,30,15,0,697,
	706,1,0,0,0,698,699,5,48,0,0,699,706,3,84,42,0,700,701,3,84,42,0,701,702,
	5,2,0,0,702,703,3,30,15,0,703,706,1,0,0,0,704,706,3,30,15,0,705,673,1,0,
	0,0,705,684,1,0,0,0,705,692,1,0,0,0,705,698,1,0,0,0,705,700,1,0,0,0,705,
	704,1,0,0,0,706,81,1,0,0,0,707,708,7,7,0,0,708,83,1,0,0,0,709,710,7,8,0,
	0,710,85,1,0,0,0,711,713,5,84,0,0,712,711,1,0,0,0,713,714,1,0,0,0,714,712,
	1,0,0,0,714,715,1,0,0,0,715,720,1,0,0,0,716,720,5,85,0,0,717,720,5,86,0,
	0,718,720,5,87,0,0,719,712,1,0,0,0,719,716,1,0,0,0,719,717,1,0,0,0,719,
	718,1,0,0,0,720,87,1,0,0,0,721,722,7,9,0,0,722,89,1,0,0,0,74,98,102,111,
	140,145,157,178,188,202,211,214,220,236,238,246,256,263,267,271,274,285,
	290,297,305,314,317,327,346,382,384,390,398,402,408,416,421,425,443,454,
	460,466,473,482,485,492,503,512,525,532,538,546,553,555,565,574,579,584,
	598,605,615,623,626,631,642,648,652,656,666,670,675,686,705,714,719];

	private static __ATN: ATN;
	public static get _ATN(): ATN {
		if (!LuaParser.__ATN) {
			LuaParser.__ATN = new ATNDeserializer().deserialize(LuaParser._serializedATN);
		}

		return LuaParser.__ATN;
	}


	static DecisionsToDFA = LuaParser._ATN.decisionToState.map( (ds: DecisionState, index: number) => new DFA(ds, index) );

}

export class Start_Context extends ParserRuleContext {
	constructor(parser?: LuaParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public chunk(): ChunkContext {
		return this.getTypedRuleContext(ChunkContext, 0) as ChunkContext;
	}
	public EOF(): TerminalNode {
		return this.getToken(LuaParser.EOF, 0);
	}
    public get ruleIndex(): number {
    	return LuaParser.RULE_start_;
	}
	public enterRule(listener: LuaParserListener): void {
	    if(listener.enterStart_) {
	 		listener.enterStart_(this);
		}
	}
	public exitRule(listener: LuaParserListener): void {
	    if(listener.exitStart_) {
	 		listener.exitStart_(this);
		}
	}
}


export class ChunkContext extends ParserRuleContext {
	constructor(parser?: LuaParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public block(): BlockContext {
		return this.getTypedRuleContext(BlockContext, 0) as BlockContext;
	}
    public get ruleIndex(): number {
    	return LuaParser.RULE_chunk;
	}
	public enterRule(listener: LuaParserListener): void {
	    if(listener.enterChunk) {
	 		listener.enterChunk(this);
		}
	}
	public exitRule(listener: LuaParserListener): void {
	    if(listener.exitChunk) {
	 		listener.exitChunk(this);
		}
	}
}


export class BlockContext extends ParserRuleContext {
	constructor(parser?: LuaParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public stat_list(): StatContext[] {
		return this.getTypedRuleContexts(StatContext) as StatContext[];
	}
	public stat(i: number): StatContext {
		return this.getTypedRuleContext(StatContext, i) as StatContext;
	}
	public retstat(): RetstatContext {
		return this.getTypedRuleContext(RetstatContext, 0) as RetstatContext;
	}
    public get ruleIndex(): number {
    	return LuaParser.RULE_block;
	}
	public enterRule(listener: LuaParserListener): void {
	    if(listener.enterBlock) {
	 		listener.enterBlock(this);
		}
	}
	public exitRule(listener: LuaParserListener): void {
	    if(listener.exitBlock) {
	 		listener.exitBlock(this);
		}
	}
}


export class StatContext extends ParserRuleContext {
	constructor(parser?: LuaParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public SEMI(): TerminalNode {
		return this.getToken(LuaParser.SEMI, 0);
	}
	public varlist(): VarlistContext {
		return this.getTypedRuleContext(VarlistContext, 0) as VarlistContext;
	}
	public EQ(): TerminalNode {
		return this.getToken(LuaParser.EQ, 0);
	}
	public explist(): ExplistContext {
		return this.getTypedRuleContext(ExplistContext, 0) as ExplistContext;
	}
	public compound(): CompoundContext {
		return this.getTypedRuleContext(CompoundContext, 0) as CompoundContext;
	}
	public functioncall(): FunctioncallContext {
		return this.getTypedRuleContext(FunctioncallContext, 0) as FunctioncallContext;
	}
	public NEW(): TerminalNode {
		return this.getToken(LuaParser.NEW, 0);
	}
	public label(): LabelContext {
		return this.getTypedRuleContext(LabelContext, 0) as LabelContext;
	}
	public BREAK(): TerminalNode {
		return this.getToken(LuaParser.BREAK, 0);
	}
	public GOTO(): TerminalNode {
		return this.getToken(LuaParser.GOTO, 0);
	}
	public identifier(): IdentifierContext {
		return this.getTypedRuleContext(IdentifierContext, 0) as IdentifierContext;
	}
	public WHILE(): TerminalNode {
		return this.getToken(LuaParser.WHILE, 0);
	}
	public exp_list(): ExpContext[] {
		return this.getTypedRuleContexts(ExpContext) as ExpContext[];
	}
	public exp(i: number): ExpContext {
		return this.getTypedRuleContext(ExpContext, i) as ExpContext;
	}
	public DO(): TerminalNode {
		return this.getToken(LuaParser.DO, 0);
	}
	public block_list(): BlockContext[] {
		return this.getTypedRuleContexts(BlockContext) as BlockContext[];
	}
	public block(i: number): BlockContext {
		return this.getTypedRuleContext(BlockContext, i) as BlockContext;
	}
	public END(): TerminalNode {
		return this.getToken(LuaParser.END, 0);
	}
	public REPEAT(): TerminalNode {
		return this.getToken(LuaParser.REPEAT, 0);
	}
	public UNTIL(): TerminalNode {
		return this.getToken(LuaParser.UNTIL, 0);
	}
	public IF(): TerminalNode {
		return this.getToken(LuaParser.IF, 0);
	}
	public THEN_list(): TerminalNode[] {
	    	return this.getTokens(LuaParser.THEN);
	}
	public THEN(i: number): TerminalNode {
		return this.getToken(LuaParser.THEN, i);
	}
	public ELSEIF_list(): TerminalNode[] {
	    	return this.getTokens(LuaParser.ELSEIF);
	}
	public ELSEIF(i: number): TerminalNode {
		return this.getToken(LuaParser.ELSEIF, i);
	}
	public ELSE(): TerminalNode {
		return this.getToken(LuaParser.ELSE, 0);
	}
	public FOR(): TerminalNode {
		return this.getToken(LuaParser.FOR, 0);
	}
	public COMMA_list(): TerminalNode[] {
	    	return this.getTokens(LuaParser.COMMA);
	}
	public COMMA(i: number): TerminalNode {
		return this.getToken(LuaParser.COMMA, i);
	}
	public namelist(): NamelistContext {
		return this.getTypedRuleContext(NamelistContext, 0) as NamelistContext;
	}
	public IN(): TerminalNode {
		return this.getToken(LuaParser.IN, 0);
	}
	public FUNCTION(): TerminalNode {
		return this.getToken(LuaParser.FUNCTION, 0);
	}
	public funcname(): FuncnameContext {
		return this.getTypedRuleContext(FuncnameContext, 0) as FuncnameContext;
	}
	public funcbody(): FuncbodyContext {
		return this.getTypedRuleContext(FuncbodyContext, 0) as FuncbodyContext;
	}
	public decorator_list(): DecoratorContext[] {
		return this.getTypedRuleContexts(DecoratorContext) as DecoratorContext[];
	}
	public decorator(i: number): DecoratorContext {
		return this.getTypedRuleContext(DecoratorContext, i) as DecoratorContext;
	}
	public LOCAL(): TerminalNode {
		return this.getToken(LuaParser.LOCAL, 0);
	}
	public FILTER(): TerminalNode {
		return this.getToken(LuaParser.FILTER, 0);
	}
	public filterfieldlist(): FilterfieldlistContext {
		return this.getTypedRuleContext(FilterfieldlistContext, 0) as FilterfieldlistContext;
	}
	public OP(): TerminalNode {
		return this.getToken(LuaParser.OP, 0);
	}
	public parlist(): ParlistContext {
		return this.getTypedRuleContext(ParlistContext, 0) as ParlistContext;
	}
	public CP(): TerminalNode {
		return this.getToken(LuaParser.CP, 0);
	}
	public USING(): TerminalNode {
		return this.getToken(LuaParser.USING, 0);
	}
	public attnamelist(): AttnamelistContext {
		return this.getTypedRuleContext(AttnamelistContext, 0) as AttnamelistContext;
	}
	public prefixexp(): PrefixexpContext {
		return this.getTypedRuleContext(PrefixexpContext, 0) as PrefixexpContext;
	}
	public DEFER(): TerminalNode {
		return this.getToken(LuaParser.DEFER, 0);
	}
	public TRY(): TerminalNode {
		return this.getToken(LuaParser.TRY, 0);
	}
	public CATCH(): TerminalNode {
		return this.getToken(LuaParser.CATCH, 0);
	}
	public THROW(): TerminalNode {
		return this.getToken(LuaParser.THROW, 0);
	}
	public class_(): ClassContext {
		return this.getTypedRuleContext(ClassContext, 0) as ClassContext;
	}
    public get ruleIndex(): number {
    	return LuaParser.RULE_stat;
	}
	public enterRule(listener: LuaParserListener): void {
	    if(listener.enterStat) {
	 		listener.enterStat(this);
		}
	}
	public exitRule(listener: LuaParserListener): void {
	    if(listener.exitStat) {
	 		listener.exitStat(this);
		}
	}
}


export class AttnamelistContext extends ParserRuleContext {
	constructor(parser?: LuaParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public identifier_list(): IdentifierContext[] {
		return this.getTypedRuleContexts(IdentifierContext) as IdentifierContext[];
	}
	public identifier(i: number): IdentifierContext {
		return this.getTypedRuleContext(IdentifierContext, i) as IdentifierContext;
	}
	public attrib_list(): AttribContext[] {
		return this.getTypedRuleContexts(AttribContext) as AttribContext[];
	}
	public attrib(i: number): AttribContext {
		return this.getTypedRuleContext(AttribContext, i) as AttribContext;
	}
	public COMMA_list(): TerminalNode[] {
	    	return this.getTokens(LuaParser.COMMA);
	}
	public COMMA(i: number): TerminalNode {
		return this.getToken(LuaParser.COMMA, i);
	}
    public get ruleIndex(): number {
    	return LuaParser.RULE_attnamelist;
	}
	public enterRule(listener: LuaParserListener): void {
	    if(listener.enterAttnamelist) {
	 		listener.enterAttnamelist(this);
		}
	}
	public exitRule(listener: LuaParserListener): void {
	    if(listener.exitAttnamelist) {
	 		listener.exitAttnamelist(this);
		}
	}
}


export class AttribContext extends ParserRuleContext {
	constructor(parser?: LuaParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public LT(): TerminalNode {
		return this.getToken(LuaParser.LT, 0);
	}
	public identifier(): IdentifierContext {
		return this.getTypedRuleContext(IdentifierContext, 0) as IdentifierContext;
	}
	public GT(): TerminalNode {
		return this.getToken(LuaParser.GT, 0);
	}
    public get ruleIndex(): number {
    	return LuaParser.RULE_attrib;
	}
	public enterRule(listener: LuaParserListener): void {
	    if(listener.enterAttrib) {
	 		listener.enterAttrib(this);
		}
	}
	public exitRule(listener: LuaParserListener): void {
	    if(listener.exitAttrib) {
	 		listener.exitAttrib(this);
		}
	}
}


export class RetstatContext extends ParserRuleContext {
	constructor(parser?: LuaParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public RETURN(): TerminalNode {
		return this.getToken(LuaParser.RETURN, 0);
	}
	public BREAK(): TerminalNode {
		return this.getToken(LuaParser.BREAK, 0);
	}
	public CONTINUE(): TerminalNode {
		return this.getToken(LuaParser.CONTINUE, 0);
	}
	public SEMI(): TerminalNode {
		return this.getToken(LuaParser.SEMI, 0);
	}
	public explist(): ExplistContext {
		return this.getTypedRuleContext(ExplistContext, 0) as ExplistContext;
	}
    public get ruleIndex(): number {
    	return LuaParser.RULE_retstat;
	}
	public enterRule(listener: LuaParserListener): void {
	    if(listener.enterRetstat) {
	 		listener.enterRetstat(this);
		}
	}
	public exitRule(listener: LuaParserListener): void {
	    if(listener.exitRetstat) {
	 		listener.exitRetstat(this);
		}
	}
}


export class LabelContext extends ParserRuleContext {
	constructor(parser?: LuaParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public CC_list(): TerminalNode[] {
	    	return this.getTokens(LuaParser.CC);
	}
	public CC(i: number): TerminalNode {
		return this.getToken(LuaParser.CC, i);
	}
	public identifier(): IdentifierContext {
		return this.getTypedRuleContext(IdentifierContext, 0) as IdentifierContext;
	}
    public get ruleIndex(): number {
    	return LuaParser.RULE_label;
	}
	public enterRule(listener: LuaParserListener): void {
	    if(listener.enterLabel) {
	 		listener.enterLabel(this);
		}
	}
	public exitRule(listener: LuaParserListener): void {
	    if(listener.exitLabel) {
	 		listener.exitLabel(this);
		}
	}
}


export class FuncnameContext extends ParserRuleContext {
	constructor(parser?: LuaParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public identifier_list(): IdentifierContext[] {
		return this.getTypedRuleContexts(IdentifierContext) as IdentifierContext[];
	}
	public identifier(i: number): IdentifierContext {
		return this.getTypedRuleContext(IdentifierContext, i) as IdentifierContext;
	}
	public DOT_list(): TerminalNode[] {
	    	return this.getTokens(LuaParser.DOT);
	}
	public DOT(i: number): TerminalNode {
		return this.getToken(LuaParser.DOT, i);
	}
	public COL(): TerminalNode {
		return this.getToken(LuaParser.COL, 0);
	}
    public get ruleIndex(): number {
    	return LuaParser.RULE_funcname;
	}
	public enterRule(listener: LuaParserListener): void {
	    if(listener.enterFuncname) {
	 		listener.enterFuncname(this);
		}
	}
	public exitRule(listener: LuaParserListener): void {
	    if(listener.exitFuncname) {
	 		listener.exitFuncname(this);
		}
	}
}


export class VarlistContext extends ParserRuleContext {
	constructor(parser?: LuaParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public var__list(): VarContext[] {
		return this.getTypedRuleContexts(VarContext) as VarContext[];
	}
	public var_(i: number): VarContext {
		return this.getTypedRuleContext(VarContext, i) as VarContext;
	}
	public COMMA_list(): TerminalNode[] {
	    	return this.getTokens(LuaParser.COMMA);
	}
	public COMMA(i: number): TerminalNode {
		return this.getToken(LuaParser.COMMA, i);
	}
    public get ruleIndex(): number {
    	return LuaParser.RULE_varlist;
	}
	public enterRule(listener: LuaParserListener): void {
	    if(listener.enterVarlist) {
	 		listener.enterVarlist(this);
		}
	}
	public exitRule(listener: LuaParserListener): void {
	    if(listener.exitVarlist) {
	 		listener.exitVarlist(this);
		}
	}
}


export class NamelistContext extends ParserRuleContext {
	constructor(parser?: LuaParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public identifier_list(): IdentifierContext[] {
		return this.getTypedRuleContexts(IdentifierContext) as IdentifierContext[];
	}
	public identifier(i: number): IdentifierContext {
		return this.getTypedRuleContext(IdentifierContext, i) as IdentifierContext;
	}
	public COMMA_list(): TerminalNode[] {
	    	return this.getTokens(LuaParser.COMMA);
	}
	public COMMA(i: number): TerminalNode {
		return this.getToken(LuaParser.COMMA, i);
	}
    public get ruleIndex(): number {
    	return LuaParser.RULE_namelist;
	}
	public enterRule(listener: LuaParserListener): void {
	    if(listener.enterNamelist) {
	 		listener.enterNamelist(this);
		}
	}
	public exitRule(listener: LuaParserListener): void {
	    if(listener.exitNamelist) {
	 		listener.exitNamelist(this);
		}
	}
}


export class DecoratorContext extends ParserRuleContext {
	constructor(parser?: LuaParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public AT(): TerminalNode {
		return this.getToken(LuaParser.AT, 0);
	}
	public var_(): VarContext {
		return this.getTypedRuleContext(VarContext, 0) as VarContext;
	}
	public decoratorbody(): DecoratorbodyContext {
		return this.getTypedRuleContext(DecoratorbodyContext, 0) as DecoratorbodyContext;
	}
    public get ruleIndex(): number {
    	return LuaParser.RULE_decorator;
	}
	public enterRule(listener: LuaParserListener): void {
	    if(listener.enterDecorator) {
	 		listener.enterDecorator(this);
		}
	}
	public exitRule(listener: LuaParserListener): void {
	    if(listener.exitDecorator) {
	 		listener.exitDecorator(this);
		}
	}
}


export class DecoratorbodyContext extends ParserRuleContext {
	constructor(parser?: LuaParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public OP(): TerminalNode {
		return this.getToken(LuaParser.OP, 0);
	}
	public CP(): TerminalNode {
		return this.getToken(LuaParser.CP, 0);
	}
	public explist(): ExplistContext {
		return this.getTypedRuleContext(ExplistContext, 0) as ExplistContext;
	}
    public get ruleIndex(): number {
    	return LuaParser.RULE_decoratorbody;
	}
	public enterRule(listener: LuaParserListener): void {
	    if(listener.enterDecoratorbody) {
	 		listener.enterDecoratorbody(this);
		}
	}
	public exitRule(listener: LuaParserListener): void {
	    if(listener.exitDecoratorbody) {
	 		listener.exitDecoratorbody(this);
		}
	}
}


export class NewcallContext extends ParserRuleContext {
	constructor(parser?: LuaParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public NEW(): TerminalNode {
		return this.getToken(LuaParser.NEW, 0);
	}
	public functioncall(): FunctioncallContext {
		return this.getTypedRuleContext(FunctioncallContext, 0) as FunctioncallContext;
	}
    public get ruleIndex(): number {
    	return LuaParser.RULE_newcall;
	}
	public enterRule(listener: LuaParserListener): void {
	    if(listener.enterNewcall) {
	 		listener.enterNewcall(this);
		}
	}
	public exitRule(listener: LuaParserListener): void {
	    if(listener.exitNewcall) {
	 		listener.exitNewcall(this);
		}
	}
}


export class ExplistContext extends ParserRuleContext {
	constructor(parser?: LuaParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public exp_list(): ExpContext[] {
		return this.getTypedRuleContexts(ExpContext) as ExpContext[];
	}
	public exp(i: number): ExpContext {
		return this.getTypedRuleContext(ExpContext, i) as ExpContext;
	}
	public COMMA_list(): TerminalNode[] {
	    	return this.getTokens(LuaParser.COMMA);
	}
	public COMMA(i: number): TerminalNode {
		return this.getToken(LuaParser.COMMA, i);
	}
    public get ruleIndex(): number {
    	return LuaParser.RULE_explist;
	}
	public enterRule(listener: LuaParserListener): void {
	    if(listener.enterExplist) {
	 		listener.enterExplist(this);
		}
	}
	public exitRule(listener: LuaParserListener): void {
	    if(listener.exitExplist) {
	 		listener.exitExplist(this);
		}
	}
}


export class ExpContext extends ParserRuleContext {
	constructor(parser?: LuaParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public NIL(): TerminalNode {
		return this.getToken(LuaParser.NIL, 0);
	}
	public FALSE(): TerminalNode {
		return this.getToken(LuaParser.FALSE, 0);
	}
	public TRUE(): TerminalNode {
		return this.getToken(LuaParser.TRUE, 0);
	}
	public number_(): NumberContext {
		return this.getTypedRuleContext(NumberContext, 0) as NumberContext;
	}
	public string_(): StringContext {
		return this.getTypedRuleContext(StringContext, 0) as StringContext;
	}
	public DDD(): TerminalNode {
		return this.getToken(LuaParser.DDD, 0);
	}
	public newcall(): NewcallContext {
		return this.getTypedRuleContext(NewcallContext, 0) as NewcallContext;
	}
	public compactfunc(): CompactfuncContext {
		return this.getTypedRuleContext(CompactfuncContext, 0) as CompactfuncContext;
	}
	public tablecomprehension(): TablecomprehensionContext {
		return this.getTypedRuleContext(TablecomprehensionContext, 0) as TablecomprehensionContext;
	}
	public functiondef(): FunctiondefContext {
		return this.getTypedRuleContext(FunctiondefContext, 0) as FunctiondefContext;
	}
	public prefixexp(): PrefixexpContext {
		return this.getTypedRuleContext(PrefixexpContext, 0) as PrefixexpContext;
	}
	public tableconstructor(): TableconstructorContext {
		return this.getTypedRuleContext(TableconstructorContext, 0) as TableconstructorContext;
	}
	public exp_list(): ExpContext[] {
		return this.getTypedRuleContexts(ExpContext) as ExpContext[];
	}
	public exp(i: number): ExpContext {
		return this.getTypedRuleContext(ExpContext, i) as ExpContext;
	}
	public NOT(): TerminalNode {
		return this.getToken(LuaParser.NOT, 0);
	}
	public POUND(): TerminalNode {
		return this.getToken(LuaParser.POUND, 0);
	}
	public MINUS(): TerminalNode {
		return this.getToken(LuaParser.MINUS, 0);
	}
	public SQUIG(): TerminalNode {
		return this.getToken(LuaParser.SQUIG, 0);
	}
	public isop(): IsopContext {
		return this.getTypedRuleContext(IsopContext, 0) as IsopContext;
	}
	public CARET(): TerminalNode {
		return this.getToken(LuaParser.CARET, 0);
	}
	public STAR(): TerminalNode {
		return this.getToken(LuaParser.STAR, 0);
	}
	public SLASH(): TerminalNode {
		return this.getToken(LuaParser.SLASH, 0);
	}
	public PER(): TerminalNode {
		return this.getToken(LuaParser.PER, 0);
	}
	public SS(): TerminalNode {
		return this.getToken(LuaParser.SS, 0);
	}
	public PLUS(): TerminalNode {
		return this.getToken(LuaParser.PLUS, 0);
	}
	public DD(): TerminalNode {
		return this.getToken(LuaParser.DD, 0);
	}
	public LT(): TerminalNode {
		return this.getToken(LuaParser.LT, 0);
	}
	public GT(): TerminalNode {
		return this.getToken(LuaParser.GT, 0);
	}
	public LE(): TerminalNode {
		return this.getToken(LuaParser.LE, 0);
	}
	public GE(): TerminalNode {
		return this.getToken(LuaParser.GE, 0);
	}
	public SQEQ(): TerminalNode {
		return this.getToken(LuaParser.SQEQ, 0);
	}
	public NOTEQ_ALT(): TerminalNode {
		return this.getToken(LuaParser.NOTEQ_ALT, 0);
	}
	public EE(): TerminalNode {
		return this.getToken(LuaParser.EE, 0);
	}
	public AND(): TerminalNode {
		return this.getToken(LuaParser.AND, 0);
	}
	public OR(): TerminalNode {
		return this.getToken(LuaParser.OR, 0);
	}
	public AMP(): TerminalNode {
		return this.getToken(LuaParser.AMP, 0);
	}
	public PIPE(): TerminalNode {
		return this.getToken(LuaParser.PIPE, 0);
	}
	public LL(): TerminalNode {
		return this.getToken(LuaParser.LL, 0);
	}
	public GG(): TerminalNode {
		return this.getToken(LuaParser.GG, 0);
	}
	public IN(): TerminalNode {
		return this.getToken(LuaParser.IN, 0);
	}
	public QUESTMARK(): TerminalNode {
		return this.getToken(LuaParser.QUESTMARK, 0);
	}
	public COL(): TerminalNode {
		return this.getToken(LuaParser.COL, 0);
	}
    public get ruleIndex(): number {
    	return LuaParser.RULE_exp;
	}
	public enterRule(listener: LuaParserListener): void {
	    if(listener.enterExp) {
	 		listener.enterExp(this);
		}
	}
	public exitRule(listener: LuaParserListener): void {
	    if(listener.exitExp) {
	 		listener.exitExp(this);
		}
	}
}


export class FilterfieldContext extends ParserRuleContext {
	constructor(parser?: LuaParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public exp(): ExpContext {
		return this.getTypedRuleContext(ExpContext, 0) as ExpContext;
	}
	public ELSE(): TerminalNode {
		return this.getToken(LuaParser.ELSE, 0);
	}
	public explist(): ExplistContext {
		return this.getTypedRuleContext(ExplistContext, 0) as ExplistContext;
	}
    public get ruleIndex(): number {
    	return LuaParser.RULE_filterfield;
	}
	public enterRule(listener: LuaParserListener): void {
	    if(listener.enterFilterfield) {
	 		listener.enterFilterfield(this);
		}
	}
	public exitRule(listener: LuaParserListener): void {
	    if(listener.exitFilterfield) {
	 		listener.exitFilterfield(this);
		}
	}
}


export class FilterfieldlistContext extends ParserRuleContext {
	constructor(parser?: LuaParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public filterfield_list(): FilterfieldContext[] {
		return this.getTypedRuleContexts(FilterfieldContext) as FilterfieldContext[];
	}
	public filterfield(i: number): FilterfieldContext {
		return this.getTypedRuleContext(FilterfieldContext, i) as FilterfieldContext;
	}
	public fieldsep_list(): FieldsepContext[] {
		return this.getTypedRuleContexts(FieldsepContext) as FieldsepContext[];
	}
	public fieldsep(i: number): FieldsepContext {
		return this.getTypedRuleContext(FieldsepContext, i) as FieldsepContext;
	}
    public get ruleIndex(): number {
    	return LuaParser.RULE_filterfieldlist;
	}
	public enterRule(listener: LuaParserListener): void {
	    if(listener.enterFilterfieldlist) {
	 		listener.enterFilterfieldlist(this);
		}
	}
	public exitRule(listener: LuaParserListener): void {
	    if(listener.exitFilterfieldlist) {
	 		listener.exitFilterfieldlist(this);
		}
	}
}


export class TablecomprehensionContext extends ParserRuleContext {
	constructor(parser?: LuaParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public OCU(): TerminalNode {
		return this.getToken(LuaParser.OCU, 0);
	}
	public exp_list(): ExpContext[] {
		return this.getTypedRuleContexts(ExpContext) as ExpContext[];
	}
	public exp(i: number): ExpContext {
		return this.getTypedRuleContext(ExpContext, i) as ExpContext;
	}
	public FOR(): TerminalNode {
		return this.getToken(LuaParser.FOR, 0);
	}
	public namelist(): NamelistContext {
		return this.getTypedRuleContext(NamelistContext, 0) as NamelistContext;
	}
	public IN(): TerminalNode {
		return this.getToken(LuaParser.IN, 0);
	}
	public explist(): ExplistContext {
		return this.getTypedRuleContext(ExplistContext, 0) as ExplistContext;
	}
	public CCU(): TerminalNode {
		return this.getToken(LuaParser.CCU, 0);
	}
	public COMMA(): TerminalNode {
		return this.getToken(LuaParser.COMMA, 0);
	}
	public IF(): TerminalNode {
		return this.getToken(LuaParser.IF, 0);
	}
    public get ruleIndex(): number {
    	return LuaParser.RULE_tablecomprehension;
	}
	public enterRule(listener: LuaParserListener): void {
	    if(listener.enterTablecomprehension) {
	 		listener.enterTablecomprehension(this);
		}
	}
	public exitRule(listener: LuaParserListener): void {
	    if(listener.exitTablecomprehension) {
	 		listener.exitTablecomprehension(this);
		}
	}
}


export class CompactfuncContext extends ParserRuleContext {
	constructor(parser?: LuaParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public identifier(): IdentifierContext {
		return this.getTypedRuleContext(IdentifierContext, 0) as IdentifierContext;
	}
	public DO(): TerminalNode {
		return this.getToken(LuaParser.DO, 0);
	}
	public exp(): ExpContext {
		return this.getTypedRuleContext(ExpContext, 0) as ExpContext;
	}
	public OP(): TerminalNode {
		return this.getToken(LuaParser.OP, 0);
	}
	public CP(): TerminalNode {
		return this.getToken(LuaParser.CP, 0);
	}
	public parlist(): ParlistContext {
		return this.getTypedRuleContext(ParlistContext, 0) as ParlistContext;
	}
	public block(): BlockContext {
		return this.getTypedRuleContext(BlockContext, 0) as BlockContext;
	}
	public END(): TerminalNode {
		return this.getToken(LuaParser.END, 0);
	}
    public get ruleIndex(): number {
    	return LuaParser.RULE_compactfunc;
	}
	public enterRule(listener: LuaParserListener): void {
	    if(listener.enterCompactfunc) {
	 		listener.enterCompactfunc(this);
		}
	}
	public exitRule(listener: LuaParserListener): void {
	    if(listener.exitCompactfunc) {
	 		listener.exitCompactfunc(this);
		}
	}
}


export class Indexed_memberContext extends ParserRuleContext {
	constructor(parser?: LuaParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public OB(): TerminalNode {
		return this.getToken(LuaParser.OB, 0);
	}
	public exp(): ExpContext {
		return this.getTypedRuleContext(ExpContext, 0) as ExpContext;
	}
	public CB(): TerminalNode {
		return this.getToken(LuaParser.CB, 0);
	}
	public DOT(): TerminalNode {
		return this.getToken(LuaParser.DOT, 0);
	}
	public identifier(): IdentifierContext {
		return this.getTypedRuleContext(IdentifierContext, 0) as IdentifierContext;
	}
	public QUESTMARK(): TerminalNode {
		return this.getToken(LuaParser.QUESTMARK, 0);
	}
    public get ruleIndex(): number {
    	return LuaParser.RULE_indexed_member;
	}
	public enterRule(listener: LuaParserListener): void {
	    if(listener.enterIndexed_member) {
	 		listener.enterIndexed_member(this);
		}
	}
	public exitRule(listener: LuaParserListener): void {
	    if(listener.exitIndexed_member) {
	 		listener.exitIndexed_member(this);
		}
	}
}


export class VarContext extends ParserRuleContext {
	constructor(parser?: LuaParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public identifier(): IdentifierContext {
		return this.getTypedRuleContext(IdentifierContext, 0) as IdentifierContext;
	}
	public prefixexp(): PrefixexpContext {
		return this.getTypedRuleContext(PrefixexpContext, 0) as PrefixexpContext;
	}
	public indexed_member(): Indexed_memberContext {
		return this.getTypedRuleContext(Indexed_memberContext, 0) as Indexed_memberContext;
	}
    public get ruleIndex(): number {
    	return LuaParser.RULE_var;
	}
	public enterRule(listener: LuaParserListener): void {
	    if(listener.enterVar) {
	 		listener.enterVar(this);
		}
	}
	public exitRule(listener: LuaParserListener): void {
	    if(listener.exitVar) {
	 		listener.exitVar(this);
		}
	}
}


export class PrefixexpContext extends ParserRuleContext {
	constructor(parser?: LuaParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public identifier(): IdentifierContext {
		return this.getTypedRuleContext(IdentifierContext, 0) as IdentifierContext;
	}
	public indexed_member_list(): Indexed_memberContext[] {
		return this.getTypedRuleContexts(Indexed_memberContext) as Indexed_memberContext[];
	}
	public indexed_member(i: number): Indexed_memberContext {
		return this.getTypedRuleContext(Indexed_memberContext, i) as Indexed_memberContext;
	}
	public functioncall(): FunctioncallContext {
		return this.getTypedRuleContext(FunctioncallContext, 0) as FunctioncallContext;
	}
	public OP(): TerminalNode {
		return this.getToken(LuaParser.OP, 0);
	}
	public exp(): ExpContext {
		return this.getTypedRuleContext(ExpContext, 0) as ExpContext;
	}
	public CP(): TerminalNode {
		return this.getToken(LuaParser.CP, 0);
	}
    public get ruleIndex(): number {
    	return LuaParser.RULE_prefixexp;
	}
	public enterRule(listener: LuaParserListener): void {
	    if(listener.enterPrefixexp) {
	 		listener.enterPrefixexp(this);
		}
	}
	public exitRule(listener: LuaParserListener): void {
	    if(listener.exitPrefixexp) {
	 		listener.exitPrefixexp(this);
		}
	}
}


export class FunctioncallContext extends ParserRuleContext {
	constructor(parser?: LuaParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public identifier_list(): IdentifierContext[] {
		return this.getTypedRuleContexts(IdentifierContext) as IdentifierContext[];
	}
	public identifier(i: number): IdentifierContext {
		return this.getTypedRuleContext(IdentifierContext, i) as IdentifierContext;
	}
	public args(): ArgsContext {
		return this.getTypedRuleContext(ArgsContext, 0) as ArgsContext;
	}
	public indexed_member_list(): Indexed_memberContext[] {
		return this.getTypedRuleContexts(Indexed_memberContext) as Indexed_memberContext[];
	}
	public indexed_member(i: number): Indexed_memberContext {
		return this.getTypedRuleContext(Indexed_memberContext, i) as Indexed_memberContext;
	}
	public OP(): TerminalNode {
		return this.getToken(LuaParser.OP, 0);
	}
	public exp(): ExpContext {
		return this.getTypedRuleContext(ExpContext, 0) as ExpContext;
	}
	public CP(): TerminalNode {
		return this.getToken(LuaParser.CP, 0);
	}
	public COL(): TerminalNode {
		return this.getToken(LuaParser.COL, 0);
	}
	public functioncall(): FunctioncallContext {
		return this.getTypedRuleContext(FunctioncallContext, 0) as FunctioncallContext;
	}
    public get ruleIndex(): number {
    	return LuaParser.RULE_functioncall;
	}
	public enterRule(listener: LuaParserListener): void {
	    if(listener.enterFunctioncall) {
	 		listener.enterFunctioncall(this);
		}
	}
	public exitRule(listener: LuaParserListener): void {
	    if(listener.exitFunctioncall) {
	 		listener.exitFunctioncall(this);
		}
	}
}


export class CompoundContext extends ParserRuleContext {
	constructor(parser?: LuaParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public var_(): VarContext {
		return this.getTypedRuleContext(VarContext, 0) as VarContext;
	}
	public exp(): ExpContext {
		return this.getTypedRuleContext(ExpContext, 0) as ExpContext;
	}
	public COMPPLUS(): TerminalNode {
		return this.getToken(LuaParser.COMPPLUS, 0);
	}
	public COMPMINUS(): TerminalNode {
		return this.getToken(LuaParser.COMPMINUS, 0);
	}
	public COMPSTAR(): TerminalNode {
		return this.getToken(LuaParser.COMPSTAR, 0);
	}
	public COMPSLASH(): TerminalNode {
		return this.getToken(LuaParser.COMPSLASH, 0);
	}
	public COMPLL(): TerminalNode {
		return this.getToken(LuaParser.COMPLL, 0);
	}
	public COMPGG(): TerminalNode {
		return this.getToken(LuaParser.COMPGG, 0);
	}
	public COMPAMP(): TerminalNode {
		return this.getToken(LuaParser.COMPAMP, 0);
	}
	public COMPPIPE(): TerminalNode {
		return this.getToken(LuaParser.COMPPIPE, 0);
	}
	public COMPCARET(): TerminalNode {
		return this.getToken(LuaParser.COMPCARET, 0);
	}
    public get ruleIndex(): number {
    	return LuaParser.RULE_compound;
	}
	public enterRule(listener: LuaParserListener): void {
	    if(listener.enterCompound) {
	 		listener.enterCompound(this);
		}
	}
	public exitRule(listener: LuaParserListener): void {
	    if(listener.exitCompound) {
	 		listener.exitCompound(this);
		}
	}
}


export class ArgumentContext extends ParserRuleContext {
	constructor(parser?: LuaParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public exp(): ExpContext {
		return this.getTypedRuleContext(ExpContext, 0) as ExpContext;
	}
	public identifier(): IdentifierContext {
		return this.getTypedRuleContext(IdentifierContext, 0) as IdentifierContext;
	}
	public EQ(): TerminalNode {
		return this.getToken(LuaParser.EQ, 0);
	}
    public get ruleIndex(): number {
    	return LuaParser.RULE_argument;
	}
	public enterRule(listener: LuaParserListener): void {
	    if(listener.enterArgument) {
	 		listener.enterArgument(this);
		}
	}
	public exitRule(listener: LuaParserListener): void {
	    if(listener.exitArgument) {
	 		listener.exitArgument(this);
		}
	}
}


export class ArgumentlistContext extends ParserRuleContext {
	constructor(parser?: LuaParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public argument_list(): ArgumentContext[] {
		return this.getTypedRuleContexts(ArgumentContext) as ArgumentContext[];
	}
	public argument(i: number): ArgumentContext {
		return this.getTypedRuleContext(ArgumentContext, i) as ArgumentContext;
	}
	public COMMA_list(): TerminalNode[] {
	    	return this.getTokens(LuaParser.COMMA);
	}
	public COMMA(i: number): TerminalNode {
		return this.getToken(LuaParser.COMMA, i);
	}
    public get ruleIndex(): number {
    	return LuaParser.RULE_argumentlist;
	}
	public enterRule(listener: LuaParserListener): void {
	    if(listener.enterArgumentlist) {
	 		listener.enterArgumentlist(this);
		}
	}
	public exitRule(listener: LuaParserListener): void {
	    if(listener.exitArgumentlist) {
	 		listener.exitArgumentlist(this);
		}
	}
}


export class ArgsContext extends ParserRuleContext {
	constructor(parser?: LuaParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public OP(): TerminalNode {
		return this.getToken(LuaParser.OP, 0);
	}
	public CP(): TerminalNode {
		return this.getToken(LuaParser.CP, 0);
	}
	public argumentlist(): ArgumentlistContext {
		return this.getTypedRuleContext(ArgumentlistContext, 0) as ArgumentlistContext;
	}
	public tableconstructor(): TableconstructorContext {
		return this.getTypedRuleContext(TableconstructorContext, 0) as TableconstructorContext;
	}
	public string_(): StringContext {
		return this.getTypedRuleContext(StringContext, 0) as StringContext;
	}
    public get ruleIndex(): number {
    	return LuaParser.RULE_args;
	}
	public enterRule(listener: LuaParserListener): void {
	    if(listener.enterArgs) {
	 		listener.enterArgs(this);
		}
	}
	public exitRule(listener: LuaParserListener): void {
	    if(listener.exitArgs) {
	 		listener.exitArgs(this);
		}
	}
}


export class FunctiondefContext extends ParserRuleContext {
	constructor(parser?: LuaParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public FUNCTION(): TerminalNode {
		return this.getToken(LuaParser.FUNCTION, 0);
	}
	public funcbody(): FuncbodyContext {
		return this.getTypedRuleContext(FuncbodyContext, 0) as FuncbodyContext;
	}
    public get ruleIndex(): number {
    	return LuaParser.RULE_functiondef;
	}
	public enterRule(listener: LuaParserListener): void {
	    if(listener.enterFunctiondef) {
	 		listener.enterFunctiondef(this);
		}
	}
	public exitRule(listener: LuaParserListener): void {
	    if(listener.exitFunctiondef) {
	 		listener.exitFunctiondef(this);
		}
	}
}


export class FuncbodyContext extends ParserRuleContext {
	constructor(parser?: LuaParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public OP(): TerminalNode {
		return this.getToken(LuaParser.OP, 0);
	}
	public parlist(): ParlistContext {
		return this.getTypedRuleContext(ParlistContext, 0) as ParlistContext;
	}
	public CP(): TerminalNode {
		return this.getToken(LuaParser.CP, 0);
	}
	public block(): BlockContext {
		return this.getTypedRuleContext(BlockContext, 0) as BlockContext;
	}
	public END(): TerminalNode {
		return this.getToken(LuaParser.END, 0);
	}
    public get ruleIndex(): number {
    	return LuaParser.RULE_funcbody;
	}
	public enterRule(listener: LuaParserListener): void {
	    if(listener.enterFuncbody) {
	 		listener.enterFuncbody(this);
		}
	}
	public exitRule(listener: LuaParserListener): void {
	    if(listener.exitFuncbody) {
	 		listener.exitFuncbody(this);
		}
	}
}


export class ClassContext extends ParserRuleContext {
	constructor(parser?: LuaParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public CLASS(): TerminalNode {
		return this.getToken(LuaParser.CLASS, 0);
	}
	public identifier_list(): IdentifierContext[] {
		return this.getTypedRuleContexts(IdentifierContext) as IdentifierContext[];
	}
	public identifier(i: number): IdentifierContext {
		return this.getTypedRuleContext(IdentifierContext, i) as IdentifierContext;
	}
	public tableconstructor(): TableconstructorContext {
		return this.getTypedRuleContext(TableconstructorContext, 0) as TableconstructorContext;
	}
	public decorator_list(): DecoratorContext[] {
		return this.getTypedRuleContexts(DecoratorContext) as DecoratorContext[];
	}
	public decorator(i: number): DecoratorContext {
		return this.getTypedRuleContext(DecoratorContext, i) as DecoratorContext;
	}
	public EXTENDS(): TerminalNode {
		return this.getToken(LuaParser.EXTENDS, 0);
	}
    public get ruleIndex(): number {
    	return LuaParser.RULE_class;
	}
	public enterRule(listener: LuaParserListener): void {
	    if(listener.enterClass) {
	 		listener.enterClass(this);
		}
	}
	public exitRule(listener: LuaParserListener): void {
	    if(listener.exitClass) {
	 		listener.exitClass(this);
		}
	}
}


export class IsopContext extends ParserRuleContext {
	constructor(parser?: LuaParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public var__list(): VarContext[] {
		return this.getTypedRuleContexts(VarContext) as VarContext[];
	}
	public var_(i: number): VarContext {
		return this.getTypedRuleContext(VarContext, i) as VarContext;
	}
	public IS(): TerminalNode {
		return this.getToken(LuaParser.IS, 0);
	}
    public get ruleIndex(): number {
    	return LuaParser.RULE_isop;
	}
	public enterRule(listener: LuaParserListener): void {
	    if(listener.enterIsop) {
	 		listener.enterIsop(this);
		}
	}
	public exitRule(listener: LuaParserListener): void {
	    if(listener.exitIsop) {
	 		listener.exitIsop(this);
		}
	}
}


export class TypeContext extends ParserRuleContext {
	constructor(parser?: LuaParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public identifier(): IdentifierContext {
		return this.getTypedRuleContext(IdentifierContext, 0) as IdentifierContext;
	}
	public NIL(): TerminalNode {
		return this.getToken(LuaParser.NIL, 0);
	}
    public get ruleIndex(): number {
    	return LuaParser.RULE_type;
	}
	public enterRule(listener: LuaParserListener): void {
	    if(listener.enterType) {
	 		listener.enterType(this);
		}
	}
	public exitRule(listener: LuaParserListener): void {
	    if(listener.exitType) {
	 		listener.exitType(this);
		}
	}
}


export class PartypeContext extends ParserRuleContext {
	constructor(parser?: LuaParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public COL(): TerminalNode {
		return this.getToken(LuaParser.COL, 0);
	}
	public type__list(): TypeContext[] {
		return this.getTypedRuleContexts(TypeContext) as TypeContext[];
	}
	public type_(i: number): TypeContext {
		return this.getTypedRuleContext(TypeContext, i) as TypeContext;
	}
	public PIPE_list(): TerminalNode[] {
	    	return this.getTokens(LuaParser.PIPE);
	}
	public PIPE(i: number): TerminalNode {
		return this.getToken(LuaParser.PIPE, i);
	}
    public get ruleIndex(): number {
    	return LuaParser.RULE_partype;
	}
	public enterRule(listener: LuaParserListener): void {
	    if(listener.enterPartype) {
	 		listener.enterPartype(this);
		}
	}
	public exitRule(listener: LuaParserListener): void {
	    if(listener.exitPartype) {
	 		listener.exitPartype(this);
		}
	}
}


export class DefaultvalueContext extends ParserRuleContext {
	constructor(parser?: LuaParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public EQ(): TerminalNode {
		return this.getToken(LuaParser.EQ, 0);
	}
	public exp(): ExpContext {
		return this.getTypedRuleContext(ExpContext, 0) as ExpContext;
	}
    public get ruleIndex(): number {
    	return LuaParser.RULE_defaultvalue;
	}
	public enterRule(listener: LuaParserListener): void {
	    if(listener.enterDefaultvalue) {
	 		listener.enterDefaultvalue(this);
		}
	}
	public exitRule(listener: LuaParserListener): void {
	    if(listener.exitDefaultvalue) {
	 		listener.exitDefaultvalue(this);
		}
	}
}


export class ExtendedparContext extends ParserRuleContext {
	constructor(parser?: LuaParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public identifier(): IdentifierContext {
		return this.getTypedRuleContext(IdentifierContext, 0) as IdentifierContext;
	}
	public partype(): PartypeContext {
		return this.getTypedRuleContext(PartypeContext, 0) as PartypeContext;
	}
	public defaultvalue(): DefaultvalueContext {
		return this.getTypedRuleContext(DefaultvalueContext, 0) as DefaultvalueContext;
	}
    public get ruleIndex(): number {
    	return LuaParser.RULE_extendedpar;
	}
	public enterRule(listener: LuaParserListener): void {
	    if(listener.enterExtendedpar) {
	 		listener.enterExtendedpar(this);
		}
	}
	public exitRule(listener: LuaParserListener): void {
	    if(listener.exitExtendedpar) {
	 		listener.exitExtendedpar(this);
		}
	}
}


export class ExtendedparlistContext extends ParserRuleContext {
	constructor(parser?: LuaParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public extendedpar_list(): ExtendedparContext[] {
		return this.getTypedRuleContexts(ExtendedparContext) as ExtendedparContext[];
	}
	public extendedpar(i: number): ExtendedparContext {
		return this.getTypedRuleContext(ExtendedparContext, i) as ExtendedparContext;
	}
	public COMMA_list(): TerminalNode[] {
	    	return this.getTokens(LuaParser.COMMA);
	}
	public COMMA(i: number): TerminalNode {
		return this.getToken(LuaParser.COMMA, i);
	}
    public get ruleIndex(): number {
    	return LuaParser.RULE_extendedparlist;
	}
	public enterRule(listener: LuaParserListener): void {
	    if(listener.enterExtendedparlist) {
	 		listener.enterExtendedparlist(this);
		}
	}
	public exitRule(listener: LuaParserListener): void {
	    if(listener.exitExtendedparlist) {
	 		listener.exitExtendedparlist(this);
		}
	}
}


export class ParlistContext extends ParserRuleContext {
	constructor(parser?: LuaParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public extendedparlist(): ExtendedparlistContext {
		return this.getTypedRuleContext(ExtendedparlistContext, 0) as ExtendedparlistContext;
	}
	public COMMA(): TerminalNode {
		return this.getToken(LuaParser.COMMA, 0);
	}
	public DDD(): TerminalNode {
		return this.getToken(LuaParser.DDD, 0);
	}
    public get ruleIndex(): number {
    	return LuaParser.RULE_parlist;
	}
	public enterRule(listener: LuaParserListener): void {
	    if(listener.enterParlist) {
	 		listener.enterParlist(this);
		}
	}
	public exitRule(listener: LuaParserListener): void {
	    if(listener.exitParlist) {
	 		listener.exitParlist(this);
		}
	}
}


export class TableconstructorContext extends ParserRuleContext {
	constructor(parser?: LuaParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public OCU(): TerminalNode {
		return this.getToken(LuaParser.OCU, 0);
	}
	public CCU(): TerminalNode {
		return this.getToken(LuaParser.CCU, 0);
	}
	public fieldlist(): FieldlistContext {
		return this.getTypedRuleContext(FieldlistContext, 0) as FieldlistContext;
	}
    public get ruleIndex(): number {
    	return LuaParser.RULE_tableconstructor;
	}
	public enterRule(listener: LuaParserListener): void {
	    if(listener.enterTableconstructor) {
	 		listener.enterTableconstructor(this);
		}
	}
	public exitRule(listener: LuaParserListener): void {
	    if(listener.exitTableconstructor) {
	 		listener.exitTableconstructor(this);
		}
	}
}


export class FieldlistContext extends ParserRuleContext {
	constructor(parser?: LuaParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public field_list(): FieldContext[] {
		return this.getTypedRuleContexts(FieldContext) as FieldContext[];
	}
	public field(i: number): FieldContext {
		return this.getTypedRuleContext(FieldContext, i) as FieldContext;
	}
	public fieldsep_list(): FieldsepContext[] {
		return this.getTypedRuleContexts(FieldsepContext) as FieldsepContext[];
	}
	public fieldsep(i: number): FieldsepContext {
		return this.getTypedRuleContext(FieldsepContext, i) as FieldsepContext;
	}
    public get ruleIndex(): number {
    	return LuaParser.RULE_fieldlist;
	}
	public enterRule(listener: LuaParserListener): void {
	    if(listener.enterFieldlist) {
	 		listener.enterFieldlist(this);
		}
	}
	public exitRule(listener: LuaParserListener): void {
	    if(listener.exitFieldlist) {
	 		listener.exitFieldlist(this);
		}
	}
}


export class FieldContext extends ParserRuleContext {
	constructor(parser?: LuaParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public OB(): TerminalNode {
		return this.getToken(LuaParser.OB, 0);
	}
	public exp_list(): ExpContext[] {
		return this.getTypedRuleContexts(ExpContext) as ExpContext[];
	}
	public exp(i: number): ExpContext {
		return this.getTypedRuleContext(ExpContext, i) as ExpContext;
	}
	public CB(): TerminalNode {
		return this.getToken(LuaParser.CB, 0);
	}
	public EQ(): TerminalNode {
		return this.getToken(LuaParser.EQ, 0);
	}
	public functiondef(): FunctiondefContext {
		return this.getTypedRuleContext(FunctiondefContext, 0) as FunctiondefContext;
	}
	public decorator_list(): DecoratorContext[] {
		return this.getTypedRuleContexts(DecoratorContext) as DecoratorContext[];
	}
	public decorator(i: number): DecoratorContext {
		return this.getTypedRuleContext(DecoratorContext, i) as DecoratorContext;
	}
	public identifier(): IdentifierContext {
		return this.getTypedRuleContext(IdentifierContext, 0) as IdentifierContext;
	}
	public DOT(): TerminalNode {
		return this.getToken(LuaParser.DOT, 0);
	}
    public get ruleIndex(): number {
    	return LuaParser.RULE_field;
	}
	public enterRule(listener: LuaParserListener): void {
	    if(listener.enterField) {
	 		listener.enterField(this);
		}
	}
	public exitRule(listener: LuaParserListener): void {
	    if(listener.exitField) {
	 		listener.exitField(this);
		}
	}
}


export class FieldsepContext extends ParserRuleContext {
	constructor(parser?: LuaParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public COMMA(): TerminalNode {
		return this.getToken(LuaParser.COMMA, 0);
	}
	public SEMI(): TerminalNode {
		return this.getToken(LuaParser.SEMI, 0);
	}
    public get ruleIndex(): number {
    	return LuaParser.RULE_fieldsep;
	}
	public enterRule(listener: LuaParserListener): void {
	    if(listener.enterFieldsep) {
	 		listener.enterFieldsep(this);
		}
	}
	public exitRule(listener: LuaParserListener): void {
	    if(listener.exitFieldsep) {
	 		listener.exitFieldsep(this);
		}
	}
}


export class IdentifierContext extends ParserRuleContext {
	constructor(parser?: LuaParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public NAME(): TerminalNode {
		return this.getToken(LuaParser.NAME, 0);
	}
	public NEW(): TerminalNode {
		return this.getToken(LuaParser.NEW, 0);
	}
	public CLASS(): TerminalNode {
		return this.getToken(LuaParser.CLASS, 0);
	}
	public EXTENDS(): TerminalNode {
		return this.getToken(LuaParser.EXTENDS, 0);
	}
	public USING(): TerminalNode {
		return this.getToken(LuaParser.USING, 0);
	}
	public FILTER(): TerminalNode {
		return this.getToken(LuaParser.FILTER, 0);
	}
	public TRY(): TerminalNode {
		return this.getToken(LuaParser.TRY, 0);
	}
	public CATCH(): TerminalNode {
		return this.getToken(LuaParser.CATCH, 0);
	}
	public DEFER(): TerminalNode {
		return this.getToken(LuaParser.DEFER, 0);
	}
	public IS(): TerminalNode {
		return this.getToken(LuaParser.IS, 0);
	}
    public get ruleIndex(): number {
    	return LuaParser.RULE_identifier;
	}
	public enterRule(listener: LuaParserListener): void {
	    if(listener.enterIdentifier) {
	 		listener.enterIdentifier(this);
		}
	}
	public exitRule(listener: LuaParserListener): void {
	    if(listener.exitIdentifier) {
	 		listener.exitIdentifier(this);
		}
	}
}


export class NumberContext extends ParserRuleContext {
	constructor(parser?: LuaParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public INT_list(): TerminalNode[] {
	    	return this.getTokens(LuaParser.INT);
	}
	public INT(i: number): TerminalNode {
		return this.getToken(LuaParser.INT, i);
	}
	public HEX(): TerminalNode {
		return this.getToken(LuaParser.HEX, 0);
	}
	public FLOAT(): TerminalNode {
		return this.getToken(LuaParser.FLOAT, 0);
	}
	public HEX_FLOAT(): TerminalNode {
		return this.getToken(LuaParser.HEX_FLOAT, 0);
	}
    public get ruleIndex(): number {
    	return LuaParser.RULE_number;
	}
	public enterRule(listener: LuaParserListener): void {
	    if(listener.enterNumber) {
	 		listener.enterNumber(this);
		}
	}
	public exitRule(listener: LuaParserListener): void {
	    if(listener.exitNumber) {
	 		listener.exitNumber(this);
		}
	}
}


export class StringContext extends ParserRuleContext {
	constructor(parser?: LuaParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public NORMALSTRING(): TerminalNode {
		return this.getToken(LuaParser.NORMALSTRING, 0);
	}
	public CHARSTRING(): TerminalNode {
		return this.getToken(LuaParser.CHARSTRING, 0);
	}
	public JENKINSHASHSTRING(): TerminalNode {
		return this.getToken(LuaParser.JENKINSHASHSTRING, 0);
	}
	public LONGSTRING(): TerminalNode {
		return this.getToken(LuaParser.LONGSTRING, 0);
	}
    public get ruleIndex(): number {
    	return LuaParser.RULE_string;
	}
	public enterRule(listener: LuaParserListener): void {
	    if(listener.enterString) {
	 		listener.enterString(this);
		}
	}
	public exitRule(listener: LuaParserListener): void {
	    if(listener.exitString) {
	 		listener.exitString(this);
		}
	}
}
