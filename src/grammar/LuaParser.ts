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
	public static readonly TRY = 8;
	public static readonly CATCH = 9;
	public static readonly THROW = 10;
	public static readonly QUESTMARK = 11;
	public static readonly COMPPLUS = 12;
	public static readonly COMPMINUS = 13;
	public static readonly COMPSTAR = 14;
	public static readonly COMPSLASH = 15;
	public static readonly COMPLL = 16;
	public static readonly COMPGG = 17;
	public static readonly COMPAMP = 18;
	public static readonly COMPPIPE = 19;
	public static readonly COMPCARET = 20;
	public static readonly DEFER = 21;
	public static readonly AT = 22;
	public static readonly BREAK = 23;
	public static readonly GOTO = 24;
	public static readonly DO = 25;
	public static readonly END = 26;
	public static readonly WHILE = 27;
	public static readonly REPEAT = 28;
	public static readonly UNTIL = 29;
	public static readonly IF = 30;
	public static readonly THEN = 31;
	public static readonly ELSEIF = 32;
	public static readonly ELSE = 33;
	public static readonly FOR = 34;
	public static readonly COMMA = 35;
	public static readonly IN = 36;
	public static readonly FUNCTION = 37;
	public static readonly LOCAL = 38;
	public static readonly LT = 39;
	public static readonly GT = 40;
	public static readonly RETURN = 41;
	public static readonly CONTINUE = 42;
	public static readonly CC = 43;
	public static readonly NIL = 44;
	public static readonly FALSE = 45;
	public static readonly TRUE = 46;
	public static readonly DOT = 47;
	public static readonly SQUIG = 48;
	public static readonly MINUS = 49;
	public static readonly POUND = 50;
	public static readonly OP = 51;
	public static readonly CP = 52;
	public static readonly NOT = 53;
	public static readonly LL = 54;
	public static readonly GG = 55;
	public static readonly AMP = 56;
	public static readonly SS = 57;
	public static readonly PER = 58;
	public static readonly COL = 59;
	public static readonly LE = 60;
	public static readonly GE = 61;
	public static readonly AND = 62;
	public static readonly OR = 63;
	public static readonly PLUS = 64;
	public static readonly STAR = 65;
	public static readonly OCU = 66;
	public static readonly CCU = 67;
	public static readonly OB = 68;
	public static readonly CB = 69;
	public static readonly EE = 70;
	public static readonly DD = 71;
	public static readonly PIPE = 72;
	public static readonly CARET = 73;
	public static readonly SLASH = 74;
	public static readonly DDD = 75;
	public static readonly SQEQ = 76;
	public static readonly NOTEQ_ALT = 77;
	public static readonly NAME = 78;
	public static readonly NORMALSTRING = 79;
	public static readonly CHARSTRING = 80;
	public static readonly JENKINSHASHSTRING = 81;
	public static readonly LONGSTRING = 82;
	public static readonly INT = 83;
	public static readonly HEX = 84;
	public static readonly FLOAT = 85;
	public static readonly HEX_FLOAT = 86;
	public static readonly COMMENT = 87;
	public static readonly C_COMMENT = 88;
	public static readonly WS = 89;
	public static readonly NL = 90;
	public static readonly SHEBANG = 91;
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
	public static readonly RULE_args = 25;
	public static readonly RULE_functiondef = 26;
	public static readonly RULE_funcbody = 27;
	public static readonly RULE_class = 28;
	public static readonly RULE_partype = 29;
	public static readonly RULE_defaultvalue = 30;
	public static readonly RULE_extendedpar = 31;
	public static readonly RULE_extendedparlist = 32;
	public static readonly RULE_parlist = 33;
	public static readonly RULE_tableconstructor = 34;
	public static readonly RULE_fieldlist = 35;
	public static readonly RULE_field = 36;
	public static readonly RULE_fieldsep = 37;
	public static readonly RULE_identifier = 38;
	public static readonly RULE_number = 39;
	public static readonly RULE_string = 40;
	public static readonly literalNames: (string | null)[] = [ null, "';'", 
                                                            "'='", "'new'", 
                                                            "'class'", "'extends'", 
                                                            "'using'", "'filter'", 
                                                            "'try'", "'catch'", 
                                                            "'throw'", "'?'", 
                                                            "'+='", "'-='", 
                                                            "'*='", "'/='", 
                                                            "'<<='", "'>>='", 
                                                            "'&='", "'|='", 
                                                            "'^='", "'defer'", 
                                                            "'@'", "'break'", 
                                                            "'goto'", "'do'", 
                                                            "'end'", "'while'", 
                                                            "'repeat'", 
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
                                                             "TRY", "CATCH", 
                                                             "THROW", "QUESTMARK", 
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
		"args", "functiondef", "funcbody", "class", "partype", "defaultvalue", 
		"extendedpar", "extendedparlist", "parlist", "tableconstructor", "fieldlist", 
		"field", "fieldsep", "identifier", "number", "string",
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
			this.state = 82;
			this.chunk();
			this.state = 83;
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
			this.state = 85;
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
			this.state = 90;
			this._errHandler.sync(this);
			_alt = this._interp.adaptivePredict(this._input, 0, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 87;
					this.stat();
					}
					}
				}
				this.state = 92;
				this._errHandler.sync(this);
				_alt = this._interp.adaptivePredict(this._input, 0, this._ctx);
			}
			this.state = 94;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (((((_la - 23)) & ~0x1F) === 0 && ((1 << (_la - 23)) & 786433) !== 0)) {
				{
				this.state = 93;
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
			this.state = 234;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 12, this._ctx) ) {
			case 1:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 96;
				this.match(LuaParser.SEMI);
				}
				break;
			case 2:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 97;
				this.varlist();
				this.state = 98;
				this.match(LuaParser.EQ);
				this.state = 99;
				this.explist();
				}
				break;
			case 3:
				this.enterOuterAlt(localctx, 3);
				{
				this.state = 101;
				this.compound();
				}
				break;
			case 4:
				this.enterOuterAlt(localctx, 4);
				{
				this.state = 103;
				this._errHandler.sync(this);
				switch ( this._interp.adaptivePredict(this._input, 2, this._ctx) ) {
				case 1:
					{
					this.state = 102;
					this.match(LuaParser.NEW);
					}
					break;
				}
				this.state = 105;
				this.functioncall(0);
				}
				break;
			case 5:
				this.enterOuterAlt(localctx, 5);
				{
				this.state = 106;
				this.label();
				}
				break;
			case 6:
				this.enterOuterAlt(localctx, 6);
				{
				this.state = 107;
				this.match(LuaParser.BREAK);
				}
				break;
			case 7:
				this.enterOuterAlt(localctx, 7);
				{
				this.state = 108;
				this.match(LuaParser.GOTO);
				this.state = 109;
				this.identifier();
				}
				break;
			case 8:
				this.enterOuterAlt(localctx, 8);
				{
				this.state = 110;
				this.match(LuaParser.WHILE);
				this.state = 111;
				this.exp(0);
				this.state = 112;
				this.match(LuaParser.DO);
				this.state = 113;
				this.block();
				this.state = 114;
				this.match(LuaParser.END);
				}
				break;
			case 9:
				this.enterOuterAlt(localctx, 9);
				{
				this.state = 116;
				this.match(LuaParser.REPEAT);
				this.state = 117;
				this.block();
				this.state = 118;
				this.match(LuaParser.UNTIL);
				this.state = 119;
				this.exp(0);
				}
				break;
			case 10:
				this.enterOuterAlt(localctx, 10);
				{
				this.state = 121;
				this.match(LuaParser.IF);
				this.state = 122;
				this.exp(0);
				this.state = 123;
				this.match(LuaParser.THEN);
				this.state = 124;
				this.block();
				this.state = 132;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la===32) {
					{
					{
					this.state = 125;
					this.match(LuaParser.ELSEIF);
					this.state = 126;
					this.exp(0);
					this.state = 127;
					this.match(LuaParser.THEN);
					this.state = 128;
					this.block();
					}
					}
					this.state = 134;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 137;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===33) {
					{
					this.state = 135;
					this.match(LuaParser.ELSE);
					this.state = 136;
					this.block();
					}
				}

				this.state = 139;
				this.match(LuaParser.END);
				}
				break;
			case 11:
				this.enterOuterAlt(localctx, 11);
				{
				this.state = 141;
				this.match(LuaParser.FOR);
				this.state = 142;
				this.identifier();
				this.state = 143;
				this.match(LuaParser.EQ);
				this.state = 144;
				this.exp(0);
				this.state = 145;
				this.match(LuaParser.COMMA);
				this.state = 146;
				this.exp(0);
				this.state = 149;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===35) {
					{
					this.state = 147;
					this.match(LuaParser.COMMA);
					this.state = 148;
					this.exp(0);
					}
				}

				this.state = 151;
				this.match(LuaParser.DO);
				this.state = 152;
				this.block();
				this.state = 153;
				this.match(LuaParser.END);
				}
				break;
			case 12:
				this.enterOuterAlt(localctx, 12);
				{
				this.state = 155;
				this.match(LuaParser.FOR);
				this.state = 156;
				this.namelist();
				this.state = 157;
				this.match(LuaParser.IN);
				this.state = 158;
				this.explist();
				this.state = 159;
				this.match(LuaParser.DO);
				this.state = 160;
				this.block();
				this.state = 161;
				this.match(LuaParser.END);
				}
				break;
			case 13:
				this.enterOuterAlt(localctx, 13);
				{
				this.state = 163;
				this.match(LuaParser.DO);
				this.state = 164;
				this.block();
				this.state = 165;
				this.match(LuaParser.END);
				}
				break;
			case 14:
				this.enterOuterAlt(localctx, 14);
				{
				this.state = 170;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la===22) {
					{
					{
					this.state = 167;
					this.decorator();
					}
					}
					this.state = 172;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 173;
				this.match(LuaParser.FUNCTION);
				this.state = 174;
				this.funcname();
				this.state = 175;
				this.funcbody();
				}
				break;
			case 15:
				this.enterOuterAlt(localctx, 15);
				{
				this.state = 180;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la===22) {
					{
					{
					this.state = 177;
					this.decorator();
					}
					}
					this.state = 182;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 183;
				this.match(LuaParser.LOCAL);
				this.state = 184;
				this.match(LuaParser.FUNCTION);
				this.state = 185;
				this.identifier();
				this.state = 186;
				this.funcbody();
				}
				break;
			case 16:
				this.enterOuterAlt(localctx, 16);
				{
				this.state = 188;
				this.match(LuaParser.FILTER);
				this.state = 189;
				this.funcname();
				this.state = 194;
				this._errHandler.sync(this);
				switch ( this._interp.adaptivePredict(this._input, 8, this._ctx) ) {
				case 1:
					{
					this.state = 190;
					this.match(LuaParser.OP);
					this.state = 191;
					this.parlist();
					this.state = 192;
					this.match(LuaParser.CP);
					}
					break;
				}
				this.state = 196;
				this.filterfieldlist();
				this.state = 197;
				this.match(LuaParser.END);
				}
				break;
			case 17:
				this.enterOuterAlt(localctx, 17);
				{
				this.state = 199;
				this.match(LuaParser.USING);
				this.state = 200;
				this.identifier();
				this.state = 206;
				this._errHandler.sync(this);
				switch ( this._interp.adaptivePredict(this._input, 10, this._ctx) ) {
				case 1:
					{
					this.state = 201;
					this.match(LuaParser.OP);
					this.state = 203;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					if ((((_la) & ~0x1F) === 0 && ((1 << _la) & 2098168) !== 0) || ((((_la - 37)) & ~0x1F) === 0 && ((1 << (_la - 37)) & 536968065) !== 0) || ((((_la - 75)) & ~0x1F) === 0 && ((1 << (_la - 75)) & 4089) !== 0)) {
						{
						this.state = 202;
						this.explist();
						}
					}

					this.state = 205;
					this.match(LuaParser.CP);
					}
					break;
				}
				}
				break;
			case 18:
				this.enterOuterAlt(localctx, 18);
				{
				this.state = 208;
				this.match(LuaParser.LOCAL);
				this.state = 209;
				this.attnamelist();
				this.state = 212;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===2) {
					{
					this.state = 210;
					this.match(LuaParser.EQ);
					this.state = 211;
					this.explist();
					}
				}

				}
				break;
			case 19:
				this.enterOuterAlt(localctx, 19);
				{
				this.state = 214;
				this.match(LuaParser.LOCAL);
				this.state = 215;
				this.attnamelist();
				this.state = 216;
				this.match(LuaParser.IN);
				this.state = 217;
				this.prefixexp();
				}
				break;
			case 20:
				this.enterOuterAlt(localctx, 20);
				{
				this.state = 219;
				this.match(LuaParser.DEFER);
				this.state = 220;
				this.block();
				this.state = 221;
				this.match(LuaParser.END);
				}
				break;
			case 21:
				this.enterOuterAlt(localctx, 21);
				{
				this.state = 223;
				this.match(LuaParser.TRY);
				this.state = 224;
				this.block();
				this.state = 225;
				this.match(LuaParser.CATCH);
				this.state = 226;
				this.identifier();
				this.state = 227;
				this.match(LuaParser.THEN);
				this.state = 228;
				this.block();
				this.state = 229;
				this.match(LuaParser.END);
				}
				break;
			case 22:
				this.enterOuterAlt(localctx, 22);
				{
				this.state = 231;
				this.match(LuaParser.THROW);
				this.state = 232;
				this.exp(0);
				}
				break;
			case 23:
				this.enterOuterAlt(localctx, 23);
				{
				this.state = 233;
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
			this.state = 236;
			this.identifier();
			this.state = 237;
			this.attrib();
			this.state = 244;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===35) {
				{
				{
				this.state = 238;
				this.match(LuaParser.COMMA);
				this.state = 239;
				this.identifier();
				this.state = 240;
				this.attrib();
				}
				}
				this.state = 246;
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
			this.state = 251;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===39) {
				{
				this.state = 247;
				this.match(LuaParser.LT);
				this.state = 248;
				this.identifier();
				this.state = 249;
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
			this.state = 259;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 41:
				{
				this.state = 253;
				this.match(LuaParser.RETURN);
				this.state = 255;
				this._errHandler.sync(this);
				switch ( this._interp.adaptivePredict(this._input, 15, this._ctx) ) {
				case 1:
					{
					this.state = 254;
					this.explist();
					}
					break;
				}
				}
				break;
			case 23:
				{
				this.state = 257;
				this.match(LuaParser.BREAK);
				}
				break;
			case 42:
				{
				this.state = 258;
				this.match(LuaParser.CONTINUE);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			this.state = 262;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===1) {
				{
				this.state = 261;
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
			this.state = 264;
			this.match(LuaParser.CC);
			this.state = 265;
			this.identifier();
			this.state = 266;
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
			this.state = 268;
			this.identifier();
			this.state = 273;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===47) {
				{
				{
				this.state = 269;
				this.match(LuaParser.DOT);
				this.state = 270;
				this.identifier();
				}
				}
				this.state = 275;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 278;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===59) {
				{
				this.state = 276;
				this.match(LuaParser.COL);
				this.state = 277;
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
			this.state = 280;
			this.var_();
			this.state = 285;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===35) {
				{
				{
				this.state = 281;
				this.match(LuaParser.COMMA);
				this.state = 282;
				this.var_();
				}
				}
				this.state = 287;
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
			this.state = 288;
			this.identifier();
			this.state = 293;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===35) {
				{
				{
				this.state = 289;
				this.match(LuaParser.COMMA);
				this.state = 290;
				this.identifier();
				}
				}
				this.state = 295;
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
			this.state = 296;
			this.match(LuaParser.AT);
			this.state = 297;
			this.var_();
			this.state = 298;
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
			this.state = 305;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===51) {
				{
				this.state = 300;
				this.match(LuaParser.OP);
				this.state = 302;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if ((((_la) & ~0x1F) === 0 && ((1 << _la) & 2098168) !== 0) || ((((_la - 37)) & ~0x1F) === 0 && ((1 << (_la - 37)) & 536968065) !== 0) || ((((_la - 75)) & ~0x1F) === 0 && ((1 << (_la - 75)) & 4089) !== 0)) {
					{
					this.state = 301;
					this.explist();
					}
				}

				this.state = 304;
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
			this.state = 307;
			this.match(LuaParser.NEW);
			this.state = 308;
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
			this.state = 310;
			this.exp(0);
			this.state = 315;
			this._errHandler.sync(this);
			_alt = this._interp.adaptivePredict(this._input, 24, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 311;
					this.match(LuaParser.COMMA);
					this.state = 312;
					this.exp(0);
					}
					}
				}
				this.state = 317;
				this._errHandler.sync(this);
				_alt = this._interp.adaptivePredict(this._input, 24, this._ctx);
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
			this.state = 333;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 25, this._ctx) ) {
			case 1:
				{
				this.state = 319;
				this.match(LuaParser.NIL);
				}
				break;
			case 2:
				{
				this.state = 320;
				this.match(LuaParser.FALSE);
				}
				break;
			case 3:
				{
				this.state = 321;
				this.match(LuaParser.TRUE);
				}
				break;
			case 4:
				{
				this.state = 322;
				this.number_();
				}
				break;
			case 5:
				{
				this.state = 323;
				this.string_();
				}
				break;
			case 6:
				{
				this.state = 324;
				this.match(LuaParser.DDD);
				}
				break;
			case 7:
				{
				this.state = 325;
				this.newcall();
				}
				break;
			case 8:
				{
				this.state = 326;
				this.compactfunc();
				}
				break;
			case 9:
				{
				this.state = 327;
				this.tablecomprehension();
				}
				break;
			case 10:
				{
				this.state = 328;
				this.functiondef();
				}
				break;
			case 11:
				{
				this.state = 329;
				this.prefixexp();
				}
				break;
			case 12:
				{
				this.state = 330;
				this.tableconstructor();
				}
				break;
			case 13:
				{
				this.state = 331;
				_la = this._input.LA(1);
				if(!(((((_la - 48)) & ~0x1F) === 0 && ((1 << (_la - 48)) & 39) !== 0))) {
				this._errHandler.recoverInline(this);
				}
				else {
					this._errHandler.reportMatch(this);
				    this.consume();
				}
				this.state = 332;
				this.exp(10);
				}
				break;
			}
			this._ctx.stop = this._input.LT(-1);
			this.state = 371;
			this._errHandler.sync(this);
			_alt = this._interp.adaptivePredict(this._input, 27, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					if (this._parseListeners != null) {
						this.triggerExitRuleEvent();
					}
					_prevctx = localctx;
					{
					this.state = 369;
					this._errHandler.sync(this);
					switch ( this._interp.adaptivePredict(this._input, 26, this._ctx) ) {
					case 1:
						{
						localctx = new ExpContext(this, _parentctx, _parentState);
						this.pushNewRecursionContext(localctx, _startState, LuaParser.RULE_exp);
						this.state = 335;
						if (!(this.precpred(this._ctx, 11))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 11)");
						}
						{
						this.state = 336;
						this.match(LuaParser.CARET);
						}
						this.state = 337;
						this.exp(11);
						}
						break;
					case 2:
						{
						localctx = new ExpContext(this, _parentctx, _parentState);
						this.pushNewRecursionContext(localctx, _startState, LuaParser.RULE_exp);
						this.state = 338;
						if (!(this.precpred(this._ctx, 9))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 9)");
						}
						this.state = 339;
						_la = this._input.LA(1);
						if(!(((((_la - 57)) & ~0x1F) === 0 && ((1 << (_la - 57)) & 131331) !== 0))) {
						this._errHandler.recoverInline(this);
						}
						else {
							this._errHandler.reportMatch(this);
						    this.consume();
						}
						this.state = 340;
						this.exp(10);
						}
						break;
					case 3:
						{
						localctx = new ExpContext(this, _parentctx, _parentState);
						this.pushNewRecursionContext(localctx, _startState, LuaParser.RULE_exp);
						this.state = 341;
						if (!(this.precpred(this._ctx, 8))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 8)");
						}
						this.state = 342;
						_la = this._input.LA(1);
						if(!(_la===49 || _la===64)) {
						this._errHandler.recoverInline(this);
						}
						else {
							this._errHandler.reportMatch(this);
						    this.consume();
						}
						this.state = 343;
						this.exp(9);
						}
						break;
					case 4:
						{
						localctx = new ExpContext(this, _parentctx, _parentState);
						this.pushNewRecursionContext(localctx, _startState, LuaParser.RULE_exp);
						this.state = 344;
						if (!(this.precpred(this._ctx, 7))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 7)");
						}
						{
						this.state = 345;
						this.match(LuaParser.DD);
						}
						this.state = 346;
						this.exp(7);
						}
						break;
					case 5:
						{
						localctx = new ExpContext(this, _parentctx, _parentState);
						this.pushNewRecursionContext(localctx, _startState, LuaParser.RULE_exp);
						this.state = 347;
						if (!(this.precpred(this._ctx, 6))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 6)");
						}
						this.state = 348;
						_la = this._input.LA(1);
						if(!(((((_la - 39)) & ~0x1F) === 0 && ((1 << (_la - 39)) & 2153775107) !== 0) || _la===76 || _la===77)) {
						this._errHandler.recoverInline(this);
						}
						else {
							this._errHandler.reportMatch(this);
						    this.consume();
						}
						this.state = 349;
						this.exp(7);
						}
						break;
					case 6:
						{
						localctx = new ExpContext(this, _parentctx, _parentState);
						this.pushNewRecursionContext(localctx, _startState, LuaParser.RULE_exp);
						this.state = 350;
						if (!(this.precpred(this._ctx, 5))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 5)");
						}
						this.state = 351;
						_la = this._input.LA(1);
						if(!(_la===62 || _la===63)) {
						this._errHandler.recoverInline(this);
						}
						else {
							this._errHandler.reportMatch(this);
						    this.consume();
						}
						this.state = 352;
						this.exp(6);
						}
						break;
					case 7:
						{
						localctx = new ExpContext(this, _parentctx, _parentState);
						this.pushNewRecursionContext(localctx, _startState, LuaParser.RULE_exp);
						this.state = 353;
						if (!(this.precpred(this._ctx, 4))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 4)");
						}
						this.state = 354;
						_la = this._input.LA(1);
						if(!(((((_la - 48)) & ~0x1F) === 0 && ((1 << (_la - 48)) & 16777665) !== 0))) {
						this._errHandler.recoverInline(this);
						}
						else {
							this._errHandler.reportMatch(this);
						    this.consume();
						}
						this.state = 355;
						this.exp(5);
						}
						break;
					case 8:
						{
						localctx = new ExpContext(this, _parentctx, _parentState);
						this.pushNewRecursionContext(localctx, _startState, LuaParser.RULE_exp);
						this.state = 356;
						if (!(this.precpred(this._ctx, 3))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 3)");
						}
						this.state = 357;
						this.match(LuaParser.IN);
						this.state = 358;
						this.exp(4);
						}
						break;
					case 9:
						{
						localctx = new ExpContext(this, _parentctx, _parentState);
						this.pushNewRecursionContext(localctx, _startState, LuaParser.RULE_exp);
						this.state = 359;
						if (!(this.precpred(this._ctx, 2))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 2)");
						}
						this.state = 360;
						this.match(LuaParser.NOT);
						this.state = 361;
						this.match(LuaParser.IN);
						this.state = 362;
						this.exp(3);
						}
						break;
					case 10:
						{
						localctx = new ExpContext(this, _parentctx, _parentState);
						this.pushNewRecursionContext(localctx, _startState, LuaParser.RULE_exp);
						this.state = 363;
						if (!(this.precpred(this._ctx, 1))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 1)");
						}
						this.state = 364;
						this.match(LuaParser.QUESTMARK);
						this.state = 365;
						this.exp(0);
						this.state = 366;
						this.match(LuaParser.COL);
						this.state = 367;
						this.exp(2);
						}
						break;
					}
					}
				}
				this.state = 373;
				this._errHandler.sync(this);
				_alt = this._interp.adaptivePredict(this._input, 27, this._ctx);
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
			this.state = 374;
			this.exp(0);
			this.state = 377;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===33) {
				{
				this.state = 375;
				this.match(LuaParser.ELSE);
				this.state = 376;
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
			this.state = 379;
			this.filterfield();
			this.state = 385;
			this._errHandler.sync(this);
			_alt = this._interp.adaptivePredict(this._input, 29, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 380;
					this.fieldsep();
					this.state = 381;
					this.filterfield();
					}
					}
				}
				this.state = 387;
				this._errHandler.sync(this);
				_alt = this._interp.adaptivePredict(this._input, 29, this._ctx);
			}
			this.state = 389;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===1 || _la===35) {
				{
				this.state = 388;
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
			this.state = 391;
			this.match(LuaParser.OCU);
			this.state = 392;
			this.exp(0);
			this.state = 395;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===35) {
				{
				this.state = 393;
				this.match(LuaParser.COMMA);
				this.state = 394;
				this.exp(0);
				}
			}

			this.state = 397;
			this.match(LuaParser.FOR);
			this.state = 398;
			this.namelist();
			this.state = 399;
			this.match(LuaParser.IN);
			this.state = 400;
			this.explist();
			this.state = 403;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===30) {
				{
				this.state = 401;
				this.match(LuaParser.IF);
				this.state = 402;
				this.exp(0);
				}
			}

			this.state = 405;
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
			this.state = 430;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 35, this._ctx) ) {
			case 1:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 408;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===51) {
					{
					this.state = 407;
					this.match(LuaParser.OP);
					}
				}

				this.state = 410;
				this.identifier();
				this.state = 412;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===52) {
					{
					this.state = 411;
					this.match(LuaParser.CP);
					}
				}

				this.state = 414;
				this.match(LuaParser.DO);
				this.state = 415;
				this.exp(0);
				}
				break;
			case 2:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 417;
				this.match(LuaParser.OP);
				this.state = 418;
				this.parlist();
				this.state = 419;
				this.match(LuaParser.CP);
				this.state = 420;
				this.match(LuaParser.DO);
				this.state = 421;
				this.block();
				this.state = 422;
				this.match(LuaParser.END);
				}
				break;
			case 3:
				this.enterOuterAlt(localctx, 3);
				{
				this.state = 424;
				this.match(LuaParser.OP);
				this.state = 425;
				this.parlist();
				this.state = 426;
				this.match(LuaParser.CP);
				this.state = 427;
				this.match(LuaParser.DO);
				this.state = 428;
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
			this.state = 441;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 68:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 432;
				this.match(LuaParser.OB);
				this.state = 433;
				this.exp(0);
				this.state = 434;
				this.match(LuaParser.CB);
				}
				break;
			case 47:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 436;
				this.match(LuaParser.DOT);
				this.state = 437;
				this.identifier();
				}
				break;
			case 11:
				this.enterOuterAlt(localctx, 3);
				{
				this.state = 438;
				this.match(LuaParser.QUESTMARK);
				this.state = 439;
				this.match(LuaParser.DOT);
				this.state = 440;
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
			this.state = 447;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 37, this._ctx) ) {
			case 1:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 443;
				this.identifier();
				}
				break;
			case 2:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 444;
				this.prefixexp();
				{
				this.state = 445;
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
			this.state = 472;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 41, this._ctx) ) {
			case 1:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 449;
				this.identifier();
				this.state = 453;
				this._errHandler.sync(this);
				_alt = this._interp.adaptivePredict(this._input, 38, this._ctx);
				while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1) {
						{
						{
						this.state = 450;
						this.indexed_member();
						}
						}
					}
					this.state = 455;
					this._errHandler.sync(this);
					_alt = this._interp.adaptivePredict(this._input, 38, this._ctx);
				}
				}
				break;
			case 2:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 456;
				this.functioncall(0);
				this.state = 460;
				this._errHandler.sync(this);
				_alt = this._interp.adaptivePredict(this._input, 39, this._ctx);
				while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1) {
						{
						{
						this.state = 457;
						this.indexed_member();
						}
						}
					}
					this.state = 462;
					this._errHandler.sync(this);
					_alt = this._interp.adaptivePredict(this._input, 39, this._ctx);
				}
				}
				break;
			case 3:
				this.enterOuterAlt(localctx, 3);
				{
				this.state = 463;
				this.match(LuaParser.OP);
				this.state = 464;
				this.exp(0);
				this.state = 465;
				this.match(LuaParser.CP);
				this.state = 469;
				this._errHandler.sync(this);
				_alt = this._interp.adaptivePredict(this._input, 40, this._ctx);
				while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1) {
						{
						{
						this.state = 466;
						this.indexed_member();
						}
						}
					}
					this.state = 471;
					this._errHandler.sync(this);
					_alt = this._interp.adaptivePredict(this._input, 40, this._ctx);
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
			this.state = 519;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 46, this._ctx) ) {
			case 1:
				{
				this.state = 475;
				this.identifier();
				this.state = 479;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la===11 || _la===47 || _la===68) {
					{
					{
					this.state = 476;
					this.indexed_member();
					}
					}
					this.state = 481;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 482;
				this.args();
				}
				break;
			case 2:
				{
				this.state = 484;
				this.match(LuaParser.OP);
				this.state = 485;
				this.exp(0);
				this.state = 486;
				this.match(LuaParser.CP);
				this.state = 490;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la===11 || _la===47 || _la===68) {
					{
					{
					this.state = 487;
					this.indexed_member();
					}
					}
					this.state = 492;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 493;
				this.args();
				}
				break;
			case 3:
				{
				this.state = 495;
				this.identifier();
				this.state = 499;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la===11 || _la===47 || _la===68) {
					{
					{
					this.state = 496;
					this.indexed_member();
					}
					}
					this.state = 501;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 502;
				this.match(LuaParser.COL);
				this.state = 503;
				this.identifier();
				this.state = 504;
				this.args();
				}
				break;
			case 4:
				{
				this.state = 506;
				this.match(LuaParser.OP);
				this.state = 507;
				this.exp(0);
				this.state = 508;
				this.match(LuaParser.CP);
				this.state = 512;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la===11 || _la===47 || _la===68) {
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
			}
			this._ctx.stop = this._input.LT(-1);
			this.state = 542;
			this._errHandler.sync(this);
			_alt = this._interp.adaptivePredict(this._input, 50, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					if (this._parseListeners != null) {
						this.triggerExitRuleEvent();
					}
					_prevctx = localctx;
					{
					this.state = 540;
					this._errHandler.sync(this);
					switch ( this._interp.adaptivePredict(this._input, 49, this._ctx) ) {
					case 1:
						{
						localctx = new FunctioncallContext(this, _parentctx, _parentState);
						this.pushNewRecursionContext(localctx, _startState, LuaParser.RULE_functioncall);
						this.state = 521;
						if (!(this.precpred(this._ctx, 5))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 5)");
						}
						this.state = 525;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
						while (_la===11 || _la===47 || _la===68) {
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
						this.args();
						}
						break;
					case 2:
						{
						localctx = new FunctioncallContext(this, _parentctx, _parentState);
						this.pushNewRecursionContext(localctx, _startState, LuaParser.RULE_functioncall);
						this.state = 529;
						if (!(this.precpred(this._ctx, 2))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 2)");
						}
						this.state = 533;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
						while (_la===11 || _la===47 || _la===68) {
							{
							{
							this.state = 530;
							this.indexed_member();
							}
							}
							this.state = 535;
							this._errHandler.sync(this);
							_la = this._input.LA(1);
						}
						this.state = 536;
						this.match(LuaParser.COL);
						this.state = 537;
						this.identifier();
						this.state = 538;
						this.args();
						}
						break;
					}
					}
				}
				this.state = 544;
				this._errHandler.sync(this);
				_alt = this._interp.adaptivePredict(this._input, 50, this._ctx);
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
			this.state = 545;
			this.var_();
			this.state = 546;
			_la = this._input.LA(1);
			if(!((((_la) & ~0x1F) === 0 && ((1 << _la) & 2093056) !== 0))) {
			this._errHandler.recoverInline(this);
			}
			else {
				this._errHandler.reportMatch(this);
			    this.consume();
			}
			this.state = 547;
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
	public args(): ArgsContext {
		let localctx: ArgsContext = new ArgsContext(this, this._ctx, this.state);
		this.enterRule(localctx, 50, LuaParser.RULE_args);
		let _la: number;
		try {
			this.state = 556;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 51:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 549;
				this.match(LuaParser.OP);
				this.state = 551;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if ((((_la) & ~0x1F) === 0 && ((1 << _la) & 2098168) !== 0) || ((((_la - 37)) & ~0x1F) === 0 && ((1 << (_la - 37)) & 536968065) !== 0) || ((((_la - 75)) & ~0x1F) === 0 && ((1 << (_la - 75)) & 4089) !== 0)) {
					{
					this.state = 550;
					this.explist();
					}
				}

				this.state = 553;
				this.match(LuaParser.CP);
				}
				break;
			case 66:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 554;
				this.tableconstructor();
				}
				break;
			case 79:
			case 80:
			case 81:
			case 82:
				this.enterOuterAlt(localctx, 3);
				{
				this.state = 555;
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
		this.enterRule(localctx, 52, LuaParser.RULE_functiondef);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 558;
			this.match(LuaParser.FUNCTION);
			this.state = 559;
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
		this.enterRule(localctx, 54, LuaParser.RULE_funcbody);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 561;
			this.match(LuaParser.OP);
			this.state = 562;
			this.parlist();
			this.state = 563;
			this.match(LuaParser.CP);
			this.state = 564;
			this.block();
			this.state = 565;
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
		this.enterRule(localctx, 56, LuaParser.RULE_class);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 570;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===22) {
				{
				{
				this.state = 567;
				this.decorator();
				}
				}
				this.state = 572;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 573;
			this.match(LuaParser.CLASS);
			this.state = 574;
			this.identifier();
			this.state = 577;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===5) {
				{
				this.state = 575;
				this.match(LuaParser.EXTENDS);
				this.state = 576;
				this.identifier();
				}
			}

			this.state = 579;
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
	public partype(): PartypeContext {
		let localctx: PartypeContext = new PartypeContext(this, this._ctx, this.state);
		this.enterRule(localctx, 58, LuaParser.RULE_partype);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 590;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===59) {
				{
				this.state = 581;
				this.match(LuaParser.COL);
				this.state = 582;
				this.identifier();
				this.state = 587;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la===72) {
					{
					{
					this.state = 583;
					this.match(LuaParser.PIPE);
					this.state = 584;
					this.identifier();
					}
					}
					this.state = 589;
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
		this.enterRule(localctx, 60, LuaParser.RULE_defaultvalue);
		try {
			this.state = 595;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 2:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 592;
				this.match(LuaParser.EQ);
				this.state = 593;
				this.exp(0);
				}
				break;
			case 35:
			case 52:
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
		this.enterRule(localctx, 62, LuaParser.RULE_extendedpar);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 597;
			this.identifier();
			this.state = 598;
			this.partype();
			this.state = 599;
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
		this.enterRule(localctx, 64, LuaParser.RULE_extendedparlist);
		try {
			let _alt: number;
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 601;
			this.extendedpar();
			this.state = 606;
			this._errHandler.sync(this);
			_alt = this._interp.adaptivePredict(this._input, 58, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 602;
					this.match(LuaParser.COMMA);
					this.state = 603;
					this.extendedpar();
					}
					}
				}
				this.state = 608;
				this._errHandler.sync(this);
				_alt = this._interp.adaptivePredict(this._input, 58, this._ctx);
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
		this.enterRule(localctx, 66, LuaParser.RULE_parlist);
		let _la: number;
		try {
			this.state = 616;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 3:
			case 4:
			case 5:
			case 6:
			case 7:
			case 8:
			case 9:
			case 21:
			case 78:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 609;
				this.extendedparlist();
				this.state = 612;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===35) {
					{
					this.state = 610;
					this.match(LuaParser.COMMA);
					this.state = 611;
					this.match(LuaParser.DDD);
					}
				}

				}
				break;
			case 75:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 614;
				this.match(LuaParser.DDD);
				}
				break;
			case 52:
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
		this.enterRule(localctx, 68, LuaParser.RULE_tableconstructor);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 618;
			this.match(LuaParser.OCU);
			this.state = 620;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if ((((_la) & ~0x1F) === 0 && ((1 << _la) & 6292472) !== 0) || ((((_la - 37)) & ~0x1F) === 0 && ((1 << (_la - 37)) & 2684452737) !== 0) || ((((_la - 75)) & ~0x1F) === 0 && ((1 << (_la - 75)) & 4089) !== 0)) {
				{
				this.state = 619;
				this.fieldlist();
				}
			}

			this.state = 622;
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
		this.enterRule(localctx, 70, LuaParser.RULE_fieldlist);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 624;
			this.field();
			this.state = 630;
			this._errHandler.sync(this);
			_alt = this._interp.adaptivePredict(this._input, 62, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 625;
					this.fieldsep();
					this.state = 626;
					this.field();
					}
					}
				}
				this.state = 632;
				this._errHandler.sync(this);
				_alt = this._interp.adaptivePredict(this._input, 62, this._ctx);
			}
			this.state = 634;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===1 || _la===35) {
				{
				this.state = 633;
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
		this.enterRule(localctx, 72, LuaParser.RULE_field);
		let _la: number;
		try {
			this.state = 669;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 66, this._ctx) ) {
			case 1:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 637;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				do {
					{
					{
					this.state = 636;
					this.decorator();
					}
					}
					this.state = 639;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				} while (_la===22);
				this.state = 641;
				this.match(LuaParser.OB);
				this.state = 642;
				this.exp(0);
				this.state = 643;
				this.match(LuaParser.CB);
				this.state = 644;
				this.match(LuaParser.EQ);
				this.state = 645;
				this.functiondef();
				}
				break;
			case 2:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 648;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				do {
					{
					{
					this.state = 647;
					this.decorator();
					}
					}
					this.state = 650;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				} while (_la===22);
				this.state = 652;
				this.identifier();
				this.state = 653;
				this.match(LuaParser.EQ);
				this.state = 654;
				this.functiondef();
				}
				break;
			case 3:
				this.enterOuterAlt(localctx, 3);
				{
				this.state = 656;
				this.match(LuaParser.OB);
				this.state = 657;
				this.exp(0);
				this.state = 658;
				this.match(LuaParser.CB);
				this.state = 659;
				this.match(LuaParser.EQ);
				this.state = 660;
				this.exp(0);
				}
				break;
			case 4:
				this.enterOuterAlt(localctx, 4);
				{
				this.state = 662;
				this.match(LuaParser.DOT);
				this.state = 663;
				this.identifier();
				}
				break;
			case 5:
				this.enterOuterAlt(localctx, 5);
				{
				this.state = 664;
				this.identifier();
				this.state = 665;
				this.match(LuaParser.EQ);
				this.state = 666;
				this.exp(0);
				}
				break;
			case 6:
				this.enterOuterAlt(localctx, 6);
				{
				this.state = 668;
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
		this.enterRule(localctx, 74, LuaParser.RULE_fieldsep);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 671;
			_la = this._input.LA(1);
			if(!(_la===1 || _la===35)) {
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
		this.enterRule(localctx, 76, LuaParser.RULE_identifier);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 673;
			_la = this._input.LA(1);
			if(!((((_la) & ~0x1F) === 0 && ((1 << _la) & 2098168) !== 0) || _la===78)) {
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
		this.enterRule(localctx, 78, LuaParser.RULE_number);
		try {
			let _alt: number;
			this.state = 683;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 83:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 676;
				this._errHandler.sync(this);
				_alt = 1;
				do {
					switch (_alt) {
					case 1:
						{
						{
						this.state = 675;
						this.match(LuaParser.INT);
						}
						}
						break;
					default:
						throw new NoViableAltException(this);
					}
					this.state = 678;
					this._errHandler.sync(this);
					_alt = this._interp.adaptivePredict(this._input, 67, this._ctx);
				} while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER);
				}
				break;
			case 84:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 680;
				this.match(LuaParser.HEX);
				}
				break;
			case 85:
				this.enterOuterAlt(localctx, 3);
				{
				this.state = 681;
				this.match(LuaParser.FLOAT);
				}
				break;
			case 86:
				this.enterOuterAlt(localctx, 4);
				{
				this.state = 682;
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
		this.enterRule(localctx, 80, LuaParser.RULE_string);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 685;
			_la = this._input.LA(1);
			if(!(((((_la - 79)) & ~0x1F) === 0 && ((1 << (_la - 79)) & 15) !== 0))) {
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
			return this.precpred(this._ctx, 11);
		case 1:
			return this.precpred(this._ctx, 9);
		case 2:
			return this.precpred(this._ctx, 8);
		case 3:
			return this.precpred(this._ctx, 7);
		case 4:
			return this.precpred(this._ctx, 6);
		case 5:
			return this.precpred(this._ctx, 5);
		case 6:
			return this.precpred(this._ctx, 4);
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

	public static readonly _serializedATN: number[] = [4,1,91,688,2,0,7,0,2,
	1,7,1,2,2,7,2,2,3,7,3,2,4,7,4,2,5,7,5,2,6,7,6,2,7,7,7,2,8,7,8,2,9,7,9,2,
	10,7,10,2,11,7,11,2,12,7,12,2,13,7,13,2,14,7,14,2,15,7,15,2,16,7,16,2,17,
	7,17,2,18,7,18,2,19,7,19,2,20,7,20,2,21,7,21,2,22,7,22,2,23,7,23,2,24,7,
	24,2,25,7,25,2,26,7,26,2,27,7,27,2,28,7,28,2,29,7,29,2,30,7,30,2,31,7,31,
	2,32,7,32,2,33,7,33,2,34,7,34,2,35,7,35,2,36,7,36,2,37,7,37,2,38,7,38,2,
	39,7,39,2,40,7,40,1,0,1,0,1,0,1,1,1,1,1,2,5,2,89,8,2,10,2,12,2,92,9,2,1,
	2,3,2,95,8,2,1,3,1,3,1,3,1,3,1,3,1,3,1,3,3,3,104,8,3,1,3,1,3,1,3,1,3,1,
	3,1,3,1,3,1,3,1,3,1,3,1,3,1,3,1,3,1,3,1,3,1,3,1,3,1,3,1,3,1,3,1,3,1,3,1,
	3,1,3,1,3,5,3,131,8,3,10,3,12,3,134,9,3,1,3,1,3,3,3,138,8,3,1,3,1,3,1,3,
	1,3,1,3,1,3,1,3,1,3,1,3,1,3,3,3,150,8,3,1,3,1,3,1,3,1,3,1,3,1,3,1,3,1,3,
	1,3,1,3,1,3,1,3,1,3,1,3,1,3,1,3,1,3,5,3,169,8,3,10,3,12,3,172,9,3,1,3,1,
	3,1,3,1,3,1,3,5,3,179,8,3,10,3,12,3,182,9,3,1,3,1,3,1,3,1,3,1,3,1,3,1,3,
	1,3,1,3,1,3,1,3,3,3,195,8,3,1,3,1,3,1,3,1,3,1,3,1,3,1,3,3,3,204,8,3,1,3,
	3,3,207,8,3,1,3,1,3,1,3,1,3,3,3,213,8,3,1,3,1,3,1,3,1,3,1,3,1,3,1,3,1,3,
	1,3,1,3,1,3,1,3,1,3,1,3,1,3,1,3,1,3,1,3,1,3,1,3,3,3,235,8,3,1,4,1,4,1,4,
	1,4,1,4,1,4,5,4,243,8,4,10,4,12,4,246,9,4,1,5,1,5,1,5,1,5,3,5,252,8,5,1,
	6,1,6,3,6,256,8,6,1,6,1,6,3,6,260,8,6,1,6,3,6,263,8,6,1,7,1,7,1,7,1,7,1,
	8,1,8,1,8,5,8,272,8,8,10,8,12,8,275,9,8,1,8,1,8,3,8,279,8,8,1,9,1,9,1,9,
	5,9,284,8,9,10,9,12,9,287,9,9,1,10,1,10,1,10,5,10,292,8,10,10,10,12,10,
	295,9,10,1,11,1,11,1,11,1,11,1,12,1,12,3,12,303,8,12,1,12,3,12,306,8,12,
	1,13,1,13,1,13,1,14,1,14,1,14,5,14,314,8,14,10,14,12,14,317,9,14,1,15,1,
	15,1,15,1,15,1,15,1,15,1,15,1,15,1,15,1,15,1,15,1,15,1,15,1,15,1,15,3,15,
	334,8,15,1,15,1,15,1,15,1,15,1,15,1,15,1,15,1,15,1,15,1,15,1,15,1,15,1,
	15,1,15,1,15,1,15,1,15,1,15,1,15,1,15,1,15,1,15,1,15,1,15,1,15,1,15,1,15,
	1,15,1,15,1,15,1,15,1,15,1,15,1,15,5,15,370,8,15,10,15,12,15,373,9,15,1,
	16,1,16,1,16,3,16,378,8,16,1,17,1,17,1,17,1,17,5,17,384,8,17,10,17,12,17,
	387,9,17,1,17,3,17,390,8,17,1,18,1,18,1,18,1,18,3,18,396,8,18,1,18,1,18,
	1,18,1,18,1,18,1,18,3,18,404,8,18,1,18,1,18,1,19,3,19,409,8,19,1,19,1,19,
	3,19,413,8,19,1,19,1,19,1,19,1,19,1,19,1,19,1,19,1,19,1,19,1,19,1,19,1,
	19,1,19,1,19,1,19,1,19,3,19,431,8,19,1,20,1,20,1,20,1,20,1,20,1,20,1,20,
	1,20,1,20,3,20,442,8,20,1,21,1,21,1,21,1,21,3,21,448,8,21,1,22,1,22,5,22,
	452,8,22,10,22,12,22,455,9,22,1,22,1,22,5,22,459,8,22,10,22,12,22,462,9,
	22,1,22,1,22,1,22,1,22,5,22,468,8,22,10,22,12,22,471,9,22,3,22,473,8,22,
	1,23,1,23,1,23,5,23,478,8,23,10,23,12,23,481,9,23,1,23,1,23,1,23,1,23,1,
	23,1,23,5,23,489,8,23,10,23,12,23,492,9,23,1,23,1,23,1,23,1,23,5,23,498,
	8,23,10,23,12,23,501,9,23,1,23,1,23,1,23,1,23,1,23,1,23,1,23,1,23,5,23,
	511,8,23,10,23,12,23,514,9,23,1,23,1,23,1,23,1,23,3,23,520,8,23,1,23,1,
	23,5,23,524,8,23,10,23,12,23,527,9,23,1,23,1,23,1,23,5,23,532,8,23,10,23,
	12,23,535,9,23,1,23,1,23,1,23,1,23,5,23,541,8,23,10,23,12,23,544,9,23,1,
	24,1,24,1,24,1,24,1,25,1,25,3,25,552,8,25,1,25,1,25,1,25,3,25,557,8,25,
	1,26,1,26,1,26,1,27,1,27,1,27,1,27,1,27,1,27,1,28,5,28,569,8,28,10,28,12,
	28,572,9,28,1,28,1,28,1,28,1,28,3,28,578,8,28,1,28,1,28,1,29,1,29,1,29,
	1,29,5,29,586,8,29,10,29,12,29,589,9,29,3,29,591,8,29,1,30,1,30,1,30,3,
	30,596,8,30,1,31,1,31,1,31,1,31,1,32,1,32,1,32,5,32,605,8,32,10,32,12,32,
	608,9,32,1,33,1,33,1,33,3,33,613,8,33,1,33,1,33,3,33,617,8,33,1,34,1,34,
	3,34,621,8,34,1,34,1,34,1,35,1,35,1,35,1,35,5,35,629,8,35,10,35,12,35,632,
	9,35,1,35,3,35,635,8,35,1,36,4,36,638,8,36,11,36,12,36,639,1,36,1,36,1,
	36,1,36,1,36,1,36,1,36,4,36,649,8,36,11,36,12,36,650,1,36,1,36,1,36,1,36,
	1,36,1,36,1,36,1,36,1,36,1,36,1,36,1,36,1,36,1,36,1,36,1,36,1,36,3,36,670,
	8,36,1,37,1,37,1,38,1,38,1,39,4,39,677,8,39,11,39,12,39,678,1,39,1,39,1,
	39,3,39,684,8,39,1,40,1,40,1,40,0,2,30,46,41,0,2,4,6,8,10,12,14,16,18,20,
	22,24,26,28,30,32,34,36,38,40,42,44,46,48,50,52,54,56,58,60,62,64,66,68,
	70,72,74,76,78,80,0,10,2,0,48,50,53,53,3,0,57,58,65,65,74,74,2,0,49,49,
	64,64,4,0,39,40,60,61,70,70,76,77,1,0,62,63,3,0,48,48,54,56,72,72,1,0,12,
	20,2,0,1,1,35,35,3,0,3,9,21,21,78,78,1,0,79,82,769,0,82,1,0,0,0,2,85,1,
	0,0,0,4,90,1,0,0,0,6,234,1,0,0,0,8,236,1,0,0,0,10,251,1,0,0,0,12,259,1,
	0,0,0,14,264,1,0,0,0,16,268,1,0,0,0,18,280,1,0,0,0,20,288,1,0,0,0,22,296,
	1,0,0,0,24,305,1,0,0,0,26,307,1,0,0,0,28,310,1,0,0,0,30,333,1,0,0,0,32,
	374,1,0,0,0,34,379,1,0,0,0,36,391,1,0,0,0,38,430,1,0,0,0,40,441,1,0,0,0,
	42,447,1,0,0,0,44,472,1,0,0,0,46,519,1,0,0,0,48,545,1,0,0,0,50,556,1,0,
	0,0,52,558,1,0,0,0,54,561,1,0,0,0,56,570,1,0,0,0,58,590,1,0,0,0,60,595,
	1,0,0,0,62,597,1,0,0,0,64,601,1,0,0,0,66,616,1,0,0,0,68,618,1,0,0,0,70,
	624,1,0,0,0,72,669,1,0,0,0,74,671,1,0,0,0,76,673,1,0,0,0,78,683,1,0,0,0,
	80,685,1,0,0,0,82,83,3,2,1,0,83,84,5,0,0,1,84,1,1,0,0,0,85,86,3,4,2,0,86,
	3,1,0,0,0,87,89,3,6,3,0,88,87,1,0,0,0,89,92,1,0,0,0,90,88,1,0,0,0,90,91,
	1,0,0,0,91,94,1,0,0,0,92,90,1,0,0,0,93,95,3,12,6,0,94,93,1,0,0,0,94,95,
	1,0,0,0,95,5,1,0,0,0,96,235,5,1,0,0,97,98,3,18,9,0,98,99,5,2,0,0,99,100,
	3,28,14,0,100,235,1,0,0,0,101,235,3,48,24,0,102,104,5,3,0,0,103,102,1,0,
	0,0,103,104,1,0,0,0,104,105,1,0,0,0,105,235,3,46,23,0,106,235,3,14,7,0,
	107,235,5,23,0,0,108,109,5,24,0,0,109,235,3,76,38,0,110,111,5,27,0,0,111,
	112,3,30,15,0,112,113,5,25,0,0,113,114,3,4,2,0,114,115,5,26,0,0,115,235,
	1,0,0,0,116,117,5,28,0,0,117,118,3,4,2,0,118,119,5,29,0,0,119,120,3,30,
	15,0,120,235,1,0,0,0,121,122,5,30,0,0,122,123,3,30,15,0,123,124,5,31,0,
	0,124,132,3,4,2,0,125,126,5,32,0,0,126,127,3,30,15,0,127,128,5,31,0,0,128,
	129,3,4,2,0,129,131,1,0,0,0,130,125,1,0,0,0,131,134,1,0,0,0,132,130,1,0,
	0,0,132,133,1,0,0,0,133,137,1,0,0,0,134,132,1,0,0,0,135,136,5,33,0,0,136,
	138,3,4,2,0,137,135,1,0,0,0,137,138,1,0,0,0,138,139,1,0,0,0,139,140,5,26,
	0,0,140,235,1,0,0,0,141,142,5,34,0,0,142,143,3,76,38,0,143,144,5,2,0,0,
	144,145,3,30,15,0,145,146,5,35,0,0,146,149,3,30,15,0,147,148,5,35,0,0,148,
	150,3,30,15,0,149,147,1,0,0,0,149,150,1,0,0,0,150,151,1,0,0,0,151,152,5,
	25,0,0,152,153,3,4,2,0,153,154,5,26,0,0,154,235,1,0,0,0,155,156,5,34,0,
	0,156,157,3,20,10,0,157,158,5,36,0,0,158,159,3,28,14,0,159,160,5,25,0,0,
	160,161,3,4,2,0,161,162,5,26,0,0,162,235,1,0,0,0,163,164,5,25,0,0,164,165,
	3,4,2,0,165,166,5,26,0,0,166,235,1,0,0,0,167,169,3,22,11,0,168,167,1,0,
	0,0,169,172,1,0,0,0,170,168,1,0,0,0,170,171,1,0,0,0,171,173,1,0,0,0,172,
	170,1,0,0,0,173,174,5,37,0,0,174,175,3,16,8,0,175,176,3,54,27,0,176,235,
	1,0,0,0,177,179,3,22,11,0,178,177,1,0,0,0,179,182,1,0,0,0,180,178,1,0,0,
	0,180,181,1,0,0,0,181,183,1,0,0,0,182,180,1,0,0,0,183,184,5,38,0,0,184,
	185,5,37,0,0,185,186,3,76,38,0,186,187,3,54,27,0,187,235,1,0,0,0,188,189,
	5,7,0,0,189,194,3,16,8,0,190,191,5,51,0,0,191,192,3,66,33,0,192,193,5,52,
	0,0,193,195,1,0,0,0,194,190,1,0,0,0,194,195,1,0,0,0,195,196,1,0,0,0,196,
	197,3,34,17,0,197,198,5,26,0,0,198,235,1,0,0,0,199,200,5,6,0,0,200,206,
	3,76,38,0,201,203,5,51,0,0,202,204,3,28,14,0,203,202,1,0,0,0,203,204,1,
	0,0,0,204,205,1,0,0,0,205,207,5,52,0,0,206,201,1,0,0,0,206,207,1,0,0,0,
	207,235,1,0,0,0,208,209,5,38,0,0,209,212,3,8,4,0,210,211,5,2,0,0,211,213,
	3,28,14,0,212,210,1,0,0,0,212,213,1,0,0,0,213,235,1,0,0,0,214,215,5,38,
	0,0,215,216,3,8,4,0,216,217,5,36,0,0,217,218,3,44,22,0,218,235,1,0,0,0,
	219,220,5,21,0,0,220,221,3,4,2,0,221,222,5,26,0,0,222,235,1,0,0,0,223,224,
	5,8,0,0,224,225,3,4,2,0,225,226,5,9,0,0,226,227,3,76,38,0,227,228,5,31,
	0,0,228,229,3,4,2,0,229,230,5,26,0,0,230,235,1,0,0,0,231,232,5,10,0,0,232,
	235,3,30,15,0,233,235,3,56,28,0,234,96,1,0,0,0,234,97,1,0,0,0,234,101,1,
	0,0,0,234,103,1,0,0,0,234,106,1,0,0,0,234,107,1,0,0,0,234,108,1,0,0,0,234,
	110,1,0,0,0,234,116,1,0,0,0,234,121,1,0,0,0,234,141,1,0,0,0,234,155,1,0,
	0,0,234,163,1,0,0,0,234,170,1,0,0,0,234,180,1,0,0,0,234,188,1,0,0,0,234,
	199,1,0,0,0,234,208,1,0,0,0,234,214,1,0,0,0,234,219,1,0,0,0,234,223,1,0,
	0,0,234,231,1,0,0,0,234,233,1,0,0,0,235,7,1,0,0,0,236,237,3,76,38,0,237,
	244,3,10,5,0,238,239,5,35,0,0,239,240,3,76,38,0,240,241,3,10,5,0,241,243,
	1,0,0,0,242,238,1,0,0,0,243,246,1,0,0,0,244,242,1,0,0,0,244,245,1,0,0,0,
	245,9,1,0,0,0,246,244,1,0,0,0,247,248,5,39,0,0,248,249,3,76,38,0,249,250,
	5,40,0,0,250,252,1,0,0,0,251,247,1,0,0,0,251,252,1,0,0,0,252,11,1,0,0,0,
	253,255,5,41,0,0,254,256,3,28,14,0,255,254,1,0,0,0,255,256,1,0,0,0,256,
	260,1,0,0,0,257,260,5,23,0,0,258,260,5,42,0,0,259,253,1,0,0,0,259,257,1,
	0,0,0,259,258,1,0,0,0,260,262,1,0,0,0,261,263,5,1,0,0,262,261,1,0,0,0,262,
	263,1,0,0,0,263,13,1,0,0,0,264,265,5,43,0,0,265,266,3,76,38,0,266,267,5,
	43,0,0,267,15,1,0,0,0,268,273,3,76,38,0,269,270,5,47,0,0,270,272,3,76,38,
	0,271,269,1,0,0,0,272,275,1,0,0,0,273,271,1,0,0,0,273,274,1,0,0,0,274,278,
	1,0,0,0,275,273,1,0,0,0,276,277,5,59,0,0,277,279,3,76,38,0,278,276,1,0,
	0,0,278,279,1,0,0,0,279,17,1,0,0,0,280,285,3,42,21,0,281,282,5,35,0,0,282,
	284,3,42,21,0,283,281,1,0,0,0,284,287,1,0,0,0,285,283,1,0,0,0,285,286,1,
	0,0,0,286,19,1,0,0,0,287,285,1,0,0,0,288,293,3,76,38,0,289,290,5,35,0,0,
	290,292,3,76,38,0,291,289,1,0,0,0,292,295,1,0,0,0,293,291,1,0,0,0,293,294,
	1,0,0,0,294,21,1,0,0,0,295,293,1,0,0,0,296,297,5,22,0,0,297,298,3,42,21,
	0,298,299,3,24,12,0,299,23,1,0,0,0,300,302,5,51,0,0,301,303,3,28,14,0,302,
	301,1,0,0,0,302,303,1,0,0,0,303,304,1,0,0,0,304,306,5,52,0,0,305,300,1,
	0,0,0,305,306,1,0,0,0,306,25,1,0,0,0,307,308,5,3,0,0,308,309,3,46,23,0,
	309,27,1,0,0,0,310,315,3,30,15,0,311,312,5,35,0,0,312,314,3,30,15,0,313,
	311,1,0,0,0,314,317,1,0,0,0,315,313,1,0,0,0,315,316,1,0,0,0,316,29,1,0,
	0,0,317,315,1,0,0,0,318,319,6,15,-1,0,319,334,5,44,0,0,320,334,5,45,0,0,
	321,334,5,46,0,0,322,334,3,78,39,0,323,334,3,80,40,0,324,334,5,75,0,0,325,
	334,3,26,13,0,326,334,3,38,19,0,327,334,3,36,18,0,328,334,3,52,26,0,329,
	334,3,44,22,0,330,334,3,68,34,0,331,332,7,0,0,0,332,334,3,30,15,10,333,
	318,1,0,0,0,333,320,1,0,0,0,333,321,1,0,0,0,333,322,1,0,0,0,333,323,1,0,
	0,0,333,324,1,0,0,0,333,325,1,0,0,0,333,326,1,0,0,0,333,327,1,0,0,0,333,
	328,1,0,0,0,333,329,1,0,0,0,333,330,1,0,0,0,333,331,1,0,0,0,334,371,1,0,
	0,0,335,336,10,11,0,0,336,337,5,73,0,0,337,370,3,30,15,11,338,339,10,9,
	0,0,339,340,7,1,0,0,340,370,3,30,15,10,341,342,10,8,0,0,342,343,7,2,0,0,
	343,370,3,30,15,9,344,345,10,7,0,0,345,346,5,71,0,0,346,370,3,30,15,7,347,
	348,10,6,0,0,348,349,7,3,0,0,349,370,3,30,15,7,350,351,10,5,0,0,351,352,
	7,4,0,0,352,370,3,30,15,6,353,354,10,4,0,0,354,355,7,5,0,0,355,370,3,30,
	15,5,356,357,10,3,0,0,357,358,5,36,0,0,358,370,3,30,15,4,359,360,10,2,0,
	0,360,361,5,53,0,0,361,362,5,36,0,0,362,370,3,30,15,3,363,364,10,1,0,0,
	364,365,5,11,0,0,365,366,3,30,15,0,366,367,5,59,0,0,367,368,3,30,15,2,368,
	370,1,0,0,0,369,335,1,0,0,0,369,338,1,0,0,0,369,341,1,0,0,0,369,344,1,0,
	0,0,369,347,1,0,0,0,369,350,1,0,0,0,369,353,1,0,0,0,369,356,1,0,0,0,369,
	359,1,0,0,0,369,363,1,0,0,0,370,373,1,0,0,0,371,369,1,0,0,0,371,372,1,0,
	0,0,372,31,1,0,0,0,373,371,1,0,0,0,374,377,3,30,15,0,375,376,5,33,0,0,376,
	378,3,28,14,0,377,375,1,0,0,0,377,378,1,0,0,0,378,33,1,0,0,0,379,385,3,
	32,16,0,380,381,3,74,37,0,381,382,3,32,16,0,382,384,1,0,0,0,383,380,1,0,
	0,0,384,387,1,0,0,0,385,383,1,0,0,0,385,386,1,0,0,0,386,389,1,0,0,0,387,
	385,1,0,0,0,388,390,3,74,37,0,389,388,1,0,0,0,389,390,1,0,0,0,390,35,1,
	0,0,0,391,392,5,66,0,0,392,395,3,30,15,0,393,394,5,35,0,0,394,396,3,30,
	15,0,395,393,1,0,0,0,395,396,1,0,0,0,396,397,1,0,0,0,397,398,5,34,0,0,398,
	399,3,20,10,0,399,400,5,36,0,0,400,403,3,28,14,0,401,402,5,30,0,0,402,404,
	3,30,15,0,403,401,1,0,0,0,403,404,1,0,0,0,404,405,1,0,0,0,405,406,5,67,
	0,0,406,37,1,0,0,0,407,409,5,51,0,0,408,407,1,0,0,0,408,409,1,0,0,0,409,
	410,1,0,0,0,410,412,3,76,38,0,411,413,5,52,0,0,412,411,1,0,0,0,412,413,
	1,0,0,0,413,414,1,0,0,0,414,415,5,25,0,0,415,416,3,30,15,0,416,431,1,0,
	0,0,417,418,5,51,0,0,418,419,3,66,33,0,419,420,5,52,0,0,420,421,5,25,0,
	0,421,422,3,4,2,0,422,423,5,26,0,0,423,431,1,0,0,0,424,425,5,51,0,0,425,
	426,3,66,33,0,426,427,5,52,0,0,427,428,5,25,0,0,428,429,3,30,15,0,429,431,
	1,0,0,0,430,408,1,0,0,0,430,417,1,0,0,0,430,424,1,0,0,0,431,39,1,0,0,0,
	432,433,5,68,0,0,433,434,3,30,15,0,434,435,5,69,0,0,435,442,1,0,0,0,436,
	437,5,47,0,0,437,442,3,76,38,0,438,439,5,11,0,0,439,440,5,47,0,0,440,442,
	3,76,38,0,441,432,1,0,0,0,441,436,1,0,0,0,441,438,1,0,0,0,442,41,1,0,0,
	0,443,448,3,76,38,0,444,445,3,44,22,0,445,446,3,40,20,0,446,448,1,0,0,0,
	447,443,1,0,0,0,447,444,1,0,0,0,448,43,1,0,0,0,449,453,3,76,38,0,450,452,
	3,40,20,0,451,450,1,0,0,0,452,455,1,0,0,0,453,451,1,0,0,0,453,454,1,0,0,
	0,454,473,1,0,0,0,455,453,1,0,0,0,456,460,3,46,23,0,457,459,3,40,20,0,458,
	457,1,0,0,0,459,462,1,0,0,0,460,458,1,0,0,0,460,461,1,0,0,0,461,473,1,0,
	0,0,462,460,1,0,0,0,463,464,5,51,0,0,464,465,3,30,15,0,465,469,5,52,0,0,
	466,468,3,40,20,0,467,466,1,0,0,0,468,471,1,0,0,0,469,467,1,0,0,0,469,470,
	1,0,0,0,470,473,1,0,0,0,471,469,1,0,0,0,472,449,1,0,0,0,472,456,1,0,0,0,
	472,463,1,0,0,0,473,45,1,0,0,0,474,475,6,23,-1,0,475,479,3,76,38,0,476,
	478,3,40,20,0,477,476,1,0,0,0,478,481,1,0,0,0,479,477,1,0,0,0,479,480,1,
	0,0,0,480,482,1,0,0,0,481,479,1,0,0,0,482,483,3,50,25,0,483,520,1,0,0,0,
	484,485,5,51,0,0,485,486,3,30,15,0,486,490,5,52,0,0,487,489,3,40,20,0,488,
	487,1,0,0,0,489,492,1,0,0,0,490,488,1,0,0,0,490,491,1,0,0,0,491,493,1,0,
	0,0,492,490,1,0,0,0,493,494,3,50,25,0,494,520,1,0,0,0,495,499,3,76,38,0,
	496,498,3,40,20,0,497,496,1,0,0,0,498,501,1,0,0,0,499,497,1,0,0,0,499,500,
	1,0,0,0,500,502,1,0,0,0,501,499,1,0,0,0,502,503,5,59,0,0,503,504,3,76,38,
	0,504,505,3,50,25,0,505,520,1,0,0,0,506,507,5,51,0,0,507,508,3,30,15,0,
	508,512,5,52,0,0,509,511,3,40,20,0,510,509,1,0,0,0,511,514,1,0,0,0,512,
	510,1,0,0,0,512,513,1,0,0,0,513,515,1,0,0,0,514,512,1,0,0,0,515,516,5,59,
	0,0,516,517,3,76,38,0,517,518,3,50,25,0,518,520,1,0,0,0,519,474,1,0,0,0,
	519,484,1,0,0,0,519,495,1,0,0,0,519,506,1,0,0,0,520,542,1,0,0,0,521,525,
	10,5,0,0,522,524,3,40,20,0,523,522,1,0,0,0,524,527,1,0,0,0,525,523,1,0,
	0,0,525,526,1,0,0,0,526,528,1,0,0,0,527,525,1,0,0,0,528,541,3,50,25,0,529,
	533,10,2,0,0,530,532,3,40,20,0,531,530,1,0,0,0,532,535,1,0,0,0,533,531,
	1,0,0,0,533,534,1,0,0,0,534,536,1,0,0,0,535,533,1,0,0,0,536,537,5,59,0,
	0,537,538,3,76,38,0,538,539,3,50,25,0,539,541,1,0,0,0,540,521,1,0,0,0,540,
	529,1,0,0,0,541,544,1,0,0,0,542,540,1,0,0,0,542,543,1,0,0,0,543,47,1,0,
	0,0,544,542,1,0,0,0,545,546,3,42,21,0,546,547,7,6,0,0,547,548,3,30,15,0,
	548,49,1,0,0,0,549,551,5,51,0,0,550,552,3,28,14,0,551,550,1,0,0,0,551,552,
	1,0,0,0,552,553,1,0,0,0,553,557,5,52,0,0,554,557,3,68,34,0,555,557,3,80,
	40,0,556,549,1,0,0,0,556,554,1,0,0,0,556,555,1,0,0,0,557,51,1,0,0,0,558,
	559,5,37,0,0,559,560,3,54,27,0,560,53,1,0,0,0,561,562,5,51,0,0,562,563,
	3,66,33,0,563,564,5,52,0,0,564,565,3,4,2,0,565,566,5,26,0,0,566,55,1,0,
	0,0,567,569,3,22,11,0,568,567,1,0,0,0,569,572,1,0,0,0,570,568,1,0,0,0,570,
	571,1,0,0,0,571,573,1,0,0,0,572,570,1,0,0,0,573,574,5,4,0,0,574,577,3,76,
	38,0,575,576,5,5,0,0,576,578,3,76,38,0,577,575,1,0,0,0,577,578,1,0,0,0,
	578,579,1,0,0,0,579,580,3,68,34,0,580,57,1,0,0,0,581,582,5,59,0,0,582,587,
	3,76,38,0,583,584,5,72,0,0,584,586,3,76,38,0,585,583,1,0,0,0,586,589,1,
	0,0,0,587,585,1,0,0,0,587,588,1,0,0,0,588,591,1,0,0,0,589,587,1,0,0,0,590,
	581,1,0,0,0,590,591,1,0,0,0,591,59,1,0,0,0,592,593,5,2,0,0,593,596,3,30,
	15,0,594,596,1,0,0,0,595,592,1,0,0,0,595,594,1,0,0,0,596,61,1,0,0,0,597,
	598,3,76,38,0,598,599,3,58,29,0,599,600,3,60,30,0,600,63,1,0,0,0,601,606,
	3,62,31,0,602,603,5,35,0,0,603,605,3,62,31,0,604,602,1,0,0,0,605,608,1,
	0,0,0,606,604,1,0,0,0,606,607,1,0,0,0,607,65,1,0,0,0,608,606,1,0,0,0,609,
	612,3,64,32,0,610,611,5,35,0,0,611,613,5,75,0,0,612,610,1,0,0,0,612,613,
	1,0,0,0,613,617,1,0,0,0,614,617,5,75,0,0,615,617,1,0,0,0,616,609,1,0,0,
	0,616,614,1,0,0,0,616,615,1,0,0,0,617,67,1,0,0,0,618,620,5,66,0,0,619,621,
	3,70,35,0,620,619,1,0,0,0,620,621,1,0,0,0,621,622,1,0,0,0,622,623,5,67,
	0,0,623,69,1,0,0,0,624,630,3,72,36,0,625,626,3,74,37,0,626,627,3,72,36,
	0,627,629,1,0,0,0,628,625,1,0,0,0,629,632,1,0,0,0,630,628,1,0,0,0,630,631,
	1,0,0,0,631,634,1,0,0,0,632,630,1,0,0,0,633,635,3,74,37,0,634,633,1,0,0,
	0,634,635,1,0,0,0,635,71,1,0,0,0,636,638,3,22,11,0,637,636,1,0,0,0,638,
	639,1,0,0,0,639,637,1,0,0,0,639,640,1,0,0,0,640,641,1,0,0,0,641,642,5,68,
	0,0,642,643,3,30,15,0,643,644,5,69,0,0,644,645,5,2,0,0,645,646,3,52,26,
	0,646,670,1,0,0,0,647,649,3,22,11,0,648,647,1,0,0,0,649,650,1,0,0,0,650,
	648,1,0,0,0,650,651,1,0,0,0,651,652,1,0,0,0,652,653,3,76,38,0,653,654,5,
	2,0,0,654,655,3,52,26,0,655,670,1,0,0,0,656,657,5,68,0,0,657,658,3,30,15,
	0,658,659,5,69,0,0,659,660,5,2,0,0,660,661,3,30,15,0,661,670,1,0,0,0,662,
	663,5,47,0,0,663,670,3,76,38,0,664,665,3,76,38,0,665,666,5,2,0,0,666,667,
	3,30,15,0,667,670,1,0,0,0,668,670,3,30,15,0,669,637,1,0,0,0,669,648,1,0,
	0,0,669,656,1,0,0,0,669,662,1,0,0,0,669,664,1,0,0,0,669,668,1,0,0,0,670,
	73,1,0,0,0,671,672,7,7,0,0,672,75,1,0,0,0,673,674,7,8,0,0,674,77,1,0,0,
	0,675,677,5,83,0,0,676,675,1,0,0,0,677,678,1,0,0,0,678,676,1,0,0,0,678,
	679,1,0,0,0,679,684,1,0,0,0,680,684,5,84,0,0,681,684,5,85,0,0,682,684,5,
	86,0,0,683,676,1,0,0,0,683,680,1,0,0,0,683,681,1,0,0,0,683,682,1,0,0,0,
	684,79,1,0,0,0,685,686,7,9,0,0,686,81,1,0,0,0,69,90,94,103,132,137,149,
	170,180,194,203,206,212,234,244,251,255,259,262,273,278,285,293,302,305,
	315,333,369,371,377,385,389,395,403,408,412,430,441,447,453,460,469,472,
	479,490,499,512,519,525,533,540,542,551,556,570,577,587,590,595,606,612,
	616,620,630,634,639,650,669,678,683];

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
	public explist(): ExplistContext {
		return this.getTypedRuleContext(ExplistContext, 0) as ExplistContext;
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


export class PartypeContext extends ParserRuleContext {
	constructor(parser?: LuaParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public COL(): TerminalNode {
		return this.getToken(LuaParser.COL, 0);
	}
	public identifier_list(): IdentifierContext[] {
		return this.getTypedRuleContexts(IdentifierContext) as IdentifierContext[];
	}
	public identifier(i: number): IdentifierContext {
		return this.getTypedRuleContext(IdentifierContext, i) as IdentifierContext;
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
