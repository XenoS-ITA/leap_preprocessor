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
			this.state = 231;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 11, this._ctx) ) {
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
				this.state = 102;
				this.functioncall(0);
				}
				break;
			case 5:
				this.enterOuterAlt(localctx, 5);
				{
				this.state = 103;
				this.label();
				}
				break;
			case 6:
				this.enterOuterAlt(localctx, 6);
				{
				this.state = 104;
				this.match(LuaParser.BREAK);
				}
				break;
			case 7:
				this.enterOuterAlt(localctx, 7);
				{
				this.state = 105;
				this.match(LuaParser.GOTO);
				this.state = 106;
				this.identifier();
				}
				break;
			case 8:
				this.enterOuterAlt(localctx, 8);
				{
				this.state = 107;
				this.match(LuaParser.WHILE);
				this.state = 108;
				this.exp(0);
				this.state = 109;
				this.match(LuaParser.DO);
				this.state = 110;
				this.block();
				this.state = 111;
				this.match(LuaParser.END);
				}
				break;
			case 9:
				this.enterOuterAlt(localctx, 9);
				{
				this.state = 113;
				this.match(LuaParser.REPEAT);
				this.state = 114;
				this.block();
				this.state = 115;
				this.match(LuaParser.UNTIL);
				this.state = 116;
				this.exp(0);
				}
				break;
			case 10:
				this.enterOuterAlt(localctx, 10);
				{
				this.state = 118;
				this.match(LuaParser.IF);
				this.state = 119;
				this.exp(0);
				this.state = 120;
				this.match(LuaParser.THEN);
				this.state = 121;
				this.block();
				this.state = 129;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la===32) {
					{
					{
					this.state = 122;
					this.match(LuaParser.ELSEIF);
					this.state = 123;
					this.exp(0);
					this.state = 124;
					this.match(LuaParser.THEN);
					this.state = 125;
					this.block();
					}
					}
					this.state = 131;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 134;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===33) {
					{
					this.state = 132;
					this.match(LuaParser.ELSE);
					this.state = 133;
					this.block();
					}
				}

				this.state = 136;
				this.match(LuaParser.END);
				}
				break;
			case 11:
				this.enterOuterAlt(localctx, 11);
				{
				this.state = 138;
				this.match(LuaParser.FOR);
				this.state = 139;
				this.identifier();
				this.state = 140;
				this.match(LuaParser.EQ);
				this.state = 141;
				this.exp(0);
				this.state = 142;
				this.match(LuaParser.COMMA);
				this.state = 143;
				this.exp(0);
				this.state = 146;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===35) {
					{
					this.state = 144;
					this.match(LuaParser.COMMA);
					this.state = 145;
					this.exp(0);
					}
				}

				this.state = 148;
				this.match(LuaParser.DO);
				this.state = 149;
				this.block();
				this.state = 150;
				this.match(LuaParser.END);
				}
				break;
			case 12:
				this.enterOuterAlt(localctx, 12);
				{
				this.state = 152;
				this.match(LuaParser.FOR);
				this.state = 153;
				this.namelist();
				this.state = 154;
				this.match(LuaParser.IN);
				this.state = 155;
				this.explist();
				this.state = 156;
				this.match(LuaParser.DO);
				this.state = 157;
				this.block();
				this.state = 158;
				this.match(LuaParser.END);
				}
				break;
			case 13:
				this.enterOuterAlt(localctx, 13);
				{
				this.state = 160;
				this.match(LuaParser.DO);
				this.state = 161;
				this.block();
				this.state = 162;
				this.match(LuaParser.END);
				}
				break;
			case 14:
				this.enterOuterAlt(localctx, 14);
				{
				this.state = 167;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la===22) {
					{
					{
					this.state = 164;
					this.decorator();
					}
					}
					this.state = 169;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 170;
				this.match(LuaParser.FUNCTION);
				this.state = 171;
				this.funcname();
				this.state = 172;
				this.funcbody();
				}
				break;
			case 15:
				this.enterOuterAlt(localctx, 15);
				{
				this.state = 177;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la===22) {
					{
					{
					this.state = 174;
					this.decorator();
					}
					}
					this.state = 179;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 180;
				this.match(LuaParser.LOCAL);
				this.state = 181;
				this.match(LuaParser.FUNCTION);
				this.state = 182;
				this.identifier();
				this.state = 183;
				this.funcbody();
				}
				break;
			case 16:
				this.enterOuterAlt(localctx, 16);
				{
				this.state = 185;
				this.match(LuaParser.FILTER);
				this.state = 186;
				this.funcname();
				this.state = 191;
				this._errHandler.sync(this);
				switch ( this._interp.adaptivePredict(this._input, 7, this._ctx) ) {
				case 1:
					{
					this.state = 187;
					this.match(LuaParser.OP);
					this.state = 188;
					this.parlist();
					this.state = 189;
					this.match(LuaParser.CP);
					}
					break;
				}
				this.state = 193;
				this.filterfieldlist();
				this.state = 194;
				this.match(LuaParser.END);
				}
				break;
			case 17:
				this.enterOuterAlt(localctx, 17);
				{
				this.state = 196;
				this.match(LuaParser.USING);
				this.state = 197;
				this.identifier();
				this.state = 203;
				this._errHandler.sync(this);
				switch ( this._interp.adaptivePredict(this._input, 9, this._ctx) ) {
				case 1:
					{
					this.state = 198;
					this.match(LuaParser.OP);
					this.state = 200;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					if (_la===3 || ((((_la - 37)) & ~0x1F) === 0 && ((1 << (_la - 37)) & 536968065) !== 0) || ((((_la - 75)) & ~0x1F) === 0 && ((1 << (_la - 75)) & 4089) !== 0)) {
						{
						this.state = 199;
						this.explist();
						}
					}

					this.state = 202;
					this.match(LuaParser.CP);
					}
					break;
				}
				}
				break;
			case 18:
				this.enterOuterAlt(localctx, 18);
				{
				this.state = 205;
				this.match(LuaParser.LOCAL);
				this.state = 206;
				this.attnamelist();
				this.state = 209;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===2) {
					{
					this.state = 207;
					this.match(LuaParser.EQ);
					this.state = 208;
					this.explist();
					}
				}

				}
				break;
			case 19:
				this.enterOuterAlt(localctx, 19);
				{
				this.state = 211;
				this.match(LuaParser.LOCAL);
				this.state = 212;
				this.attnamelist();
				this.state = 213;
				this.match(LuaParser.IN);
				this.state = 214;
				this.prefixexp();
				}
				break;
			case 20:
				this.enterOuterAlt(localctx, 20);
				{
				this.state = 216;
				this.match(LuaParser.DEFER);
				this.state = 217;
				this.block();
				this.state = 218;
				this.match(LuaParser.END);
				}
				break;
			case 21:
				this.enterOuterAlt(localctx, 21);
				{
				this.state = 220;
				this.match(LuaParser.TRY);
				this.state = 221;
				this.block();
				this.state = 222;
				this.match(LuaParser.CATCH);
				this.state = 223;
				this.identifier();
				this.state = 224;
				this.match(LuaParser.THEN);
				this.state = 225;
				this.block();
				this.state = 226;
				this.match(LuaParser.END);
				}
				break;
			case 22:
				this.enterOuterAlt(localctx, 22);
				{
				this.state = 228;
				this.match(LuaParser.THROW);
				this.state = 229;
				this.exp(0);
				}
				break;
			case 23:
				this.enterOuterAlt(localctx, 23);
				{
				this.state = 230;
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
			this.state = 233;
			this.identifier();
			this.state = 234;
			this.attrib();
			this.state = 241;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===35) {
				{
				{
				this.state = 235;
				this.match(LuaParser.COMMA);
				this.state = 236;
				this.identifier();
				this.state = 237;
				this.attrib();
				}
				}
				this.state = 243;
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
			this.state = 248;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===39) {
				{
				this.state = 244;
				this.match(LuaParser.LT);
				this.state = 245;
				this.identifier();
				this.state = 246;
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
			this.state = 256;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 41:
				{
				this.state = 250;
				this.match(LuaParser.RETURN);
				this.state = 252;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===3 || ((((_la - 37)) & ~0x1F) === 0 && ((1 << (_la - 37)) & 536968065) !== 0) || ((((_la - 75)) & ~0x1F) === 0 && ((1 << (_la - 75)) & 4089) !== 0)) {
					{
					this.state = 251;
					this.explist();
					}
				}

				}
				break;
			case 23:
				{
				this.state = 254;
				this.match(LuaParser.BREAK);
				}
				break;
			case 42:
				{
				this.state = 255;
				this.match(LuaParser.CONTINUE);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			this.state = 259;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===1) {
				{
				this.state = 258;
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
			this.state = 261;
			this.match(LuaParser.CC);
			this.state = 262;
			this.identifier();
			this.state = 263;
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
			this.state = 265;
			this.identifier();
			this.state = 270;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===47) {
				{
				{
				this.state = 266;
				this.match(LuaParser.DOT);
				this.state = 267;
				this.identifier();
				}
				}
				this.state = 272;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 275;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===59) {
				{
				this.state = 273;
				this.match(LuaParser.COL);
				this.state = 274;
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
			this.state = 277;
			this.var_();
			this.state = 282;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===35) {
				{
				{
				this.state = 278;
				this.match(LuaParser.COMMA);
				this.state = 279;
				this.var_();
				}
				}
				this.state = 284;
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
			this.state = 285;
			this.identifier();
			this.state = 290;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===35) {
				{
				{
				this.state = 286;
				this.match(LuaParser.COMMA);
				this.state = 287;
				this.identifier();
				}
				}
				this.state = 292;
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
			this.state = 293;
			this.match(LuaParser.AT);
			this.state = 294;
			this.var_();
			this.state = 295;
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
			this.state = 302;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===51) {
				{
				this.state = 297;
				this.match(LuaParser.OP);
				this.state = 299;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===3 || ((((_la - 37)) & ~0x1F) === 0 && ((1 << (_la - 37)) & 536968065) !== 0) || ((((_la - 75)) & ~0x1F) === 0 && ((1 << (_la - 75)) & 4089) !== 0)) {
					{
					this.state = 298;
					this.explist();
					}
				}

				this.state = 301;
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
			this.state = 304;
			this.match(LuaParser.NEW);
			this.state = 305;
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
			this.state = 307;
			this.exp(0);
			this.state = 312;
			this._errHandler.sync(this);
			_alt = this._interp.adaptivePredict(this._input, 23, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 308;
					this.match(LuaParser.COMMA);
					this.state = 309;
					this.exp(0);
					}
					}
				}
				this.state = 314;
				this._errHandler.sync(this);
				_alt = this._interp.adaptivePredict(this._input, 23, this._ctx);
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
			this.state = 330;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 24, this._ctx) ) {
			case 1:
				{
				this.state = 316;
				this.match(LuaParser.NIL);
				}
				break;
			case 2:
				{
				this.state = 317;
				this.match(LuaParser.FALSE);
				}
				break;
			case 3:
				{
				this.state = 318;
				this.match(LuaParser.TRUE);
				}
				break;
			case 4:
				{
				this.state = 319;
				this.number_();
				}
				break;
			case 5:
				{
				this.state = 320;
				this.string_();
				}
				break;
			case 6:
				{
				this.state = 321;
				this.match(LuaParser.DDD);
				}
				break;
			case 7:
				{
				this.state = 322;
				this.newcall();
				}
				break;
			case 8:
				{
				this.state = 323;
				this.compactfunc();
				}
				break;
			case 9:
				{
				this.state = 324;
				this.tablecomprehension();
				}
				break;
			case 10:
				{
				this.state = 325;
				this.functiondef();
				}
				break;
			case 11:
				{
				this.state = 326;
				this.prefixexp();
				}
				break;
			case 12:
				{
				this.state = 327;
				this.tableconstructor();
				}
				break;
			case 13:
				{
				this.state = 328;
				_la = this._input.LA(1);
				if(!(((((_la - 48)) & ~0x1F) === 0 && ((1 << (_la - 48)) & 39) !== 0))) {
				this._errHandler.recoverInline(this);
				}
				else {
					this._errHandler.reportMatch(this);
				    this.consume();
				}
				this.state = 329;
				this.exp(10);
				}
				break;
			}
			this._ctx.stop = this._input.LT(-1);
			this.state = 368;
			this._errHandler.sync(this);
			_alt = this._interp.adaptivePredict(this._input, 26, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					if (this._parseListeners != null) {
						this.triggerExitRuleEvent();
					}
					_prevctx = localctx;
					{
					this.state = 366;
					this._errHandler.sync(this);
					switch ( this._interp.adaptivePredict(this._input, 25, this._ctx) ) {
					case 1:
						{
						localctx = new ExpContext(this, _parentctx, _parentState);
						this.pushNewRecursionContext(localctx, _startState, LuaParser.RULE_exp);
						this.state = 332;
						if (!(this.precpred(this._ctx, 11))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 11)");
						}
						{
						this.state = 333;
						this.match(LuaParser.CARET);
						}
						this.state = 334;
						this.exp(11);
						}
						break;
					case 2:
						{
						localctx = new ExpContext(this, _parentctx, _parentState);
						this.pushNewRecursionContext(localctx, _startState, LuaParser.RULE_exp);
						this.state = 335;
						if (!(this.precpred(this._ctx, 9))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 9)");
						}
						this.state = 336;
						_la = this._input.LA(1);
						if(!(((((_la - 57)) & ~0x1F) === 0 && ((1 << (_la - 57)) & 131331) !== 0))) {
						this._errHandler.recoverInline(this);
						}
						else {
							this._errHandler.reportMatch(this);
						    this.consume();
						}
						this.state = 337;
						this.exp(10);
						}
						break;
					case 3:
						{
						localctx = new ExpContext(this, _parentctx, _parentState);
						this.pushNewRecursionContext(localctx, _startState, LuaParser.RULE_exp);
						this.state = 338;
						if (!(this.precpred(this._ctx, 8))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 8)");
						}
						this.state = 339;
						_la = this._input.LA(1);
						if(!(_la===49 || _la===64)) {
						this._errHandler.recoverInline(this);
						}
						else {
							this._errHandler.reportMatch(this);
						    this.consume();
						}
						this.state = 340;
						this.exp(9);
						}
						break;
					case 4:
						{
						localctx = new ExpContext(this, _parentctx, _parentState);
						this.pushNewRecursionContext(localctx, _startState, LuaParser.RULE_exp);
						this.state = 341;
						if (!(this.precpred(this._ctx, 7))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 7)");
						}
						{
						this.state = 342;
						this.match(LuaParser.DD);
						}
						this.state = 343;
						this.exp(7);
						}
						break;
					case 5:
						{
						localctx = new ExpContext(this, _parentctx, _parentState);
						this.pushNewRecursionContext(localctx, _startState, LuaParser.RULE_exp);
						this.state = 344;
						if (!(this.precpred(this._ctx, 6))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 6)");
						}
						this.state = 345;
						_la = this._input.LA(1);
						if(!(((((_la - 39)) & ~0x1F) === 0 && ((1 << (_la - 39)) & 2153775107) !== 0) || _la===76 || _la===77)) {
						this._errHandler.recoverInline(this);
						}
						else {
							this._errHandler.reportMatch(this);
						    this.consume();
						}
						this.state = 346;
						this.exp(7);
						}
						break;
					case 6:
						{
						localctx = new ExpContext(this, _parentctx, _parentState);
						this.pushNewRecursionContext(localctx, _startState, LuaParser.RULE_exp);
						this.state = 347;
						if (!(this.precpred(this._ctx, 5))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 5)");
						}
						this.state = 348;
						_la = this._input.LA(1);
						if(!(_la===62 || _la===63)) {
						this._errHandler.recoverInline(this);
						}
						else {
							this._errHandler.reportMatch(this);
						    this.consume();
						}
						this.state = 349;
						this.exp(6);
						}
						break;
					case 7:
						{
						localctx = new ExpContext(this, _parentctx, _parentState);
						this.pushNewRecursionContext(localctx, _startState, LuaParser.RULE_exp);
						this.state = 350;
						if (!(this.precpred(this._ctx, 4))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 4)");
						}
						this.state = 351;
						_la = this._input.LA(1);
						if(!(((((_la - 48)) & ~0x1F) === 0 && ((1 << (_la - 48)) & 16777665) !== 0))) {
						this._errHandler.recoverInline(this);
						}
						else {
							this._errHandler.reportMatch(this);
						    this.consume();
						}
						this.state = 352;
						this.exp(5);
						}
						break;
					case 8:
						{
						localctx = new ExpContext(this, _parentctx, _parentState);
						this.pushNewRecursionContext(localctx, _startState, LuaParser.RULE_exp);
						this.state = 353;
						if (!(this.precpred(this._ctx, 3))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 3)");
						}
						this.state = 354;
						this.match(LuaParser.IN);
						this.state = 355;
						this.exp(4);
						}
						break;
					case 9:
						{
						localctx = new ExpContext(this, _parentctx, _parentState);
						this.pushNewRecursionContext(localctx, _startState, LuaParser.RULE_exp);
						this.state = 356;
						if (!(this.precpred(this._ctx, 2))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 2)");
						}
						this.state = 357;
						this.match(LuaParser.NOT);
						this.state = 358;
						this.match(LuaParser.IN);
						this.state = 359;
						this.exp(3);
						}
						break;
					case 10:
						{
						localctx = new ExpContext(this, _parentctx, _parentState);
						this.pushNewRecursionContext(localctx, _startState, LuaParser.RULE_exp);
						this.state = 360;
						if (!(this.precpred(this._ctx, 1))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 1)");
						}
						this.state = 361;
						this.match(LuaParser.QUESTMARK);
						this.state = 362;
						this.exp(0);
						this.state = 363;
						this.match(LuaParser.COL);
						this.state = 364;
						this.exp(2);
						}
						break;
					}
					}
				}
				this.state = 370;
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
			this.state = 371;
			this.exp(0);
			this.state = 374;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===33) {
				{
				this.state = 372;
				this.match(LuaParser.ELSE);
				this.state = 373;
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
			this.state = 376;
			this.filterfield();
			this.state = 382;
			this._errHandler.sync(this);
			_alt = this._interp.adaptivePredict(this._input, 28, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 377;
					this.fieldsep();
					this.state = 378;
					this.filterfield();
					}
					}
				}
				this.state = 384;
				this._errHandler.sync(this);
				_alt = this._interp.adaptivePredict(this._input, 28, this._ctx);
			}
			this.state = 386;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===1 || _la===35) {
				{
				this.state = 385;
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
			this.state = 388;
			this.match(LuaParser.OCU);
			this.state = 389;
			this.exp(0);
			this.state = 392;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===35) {
				{
				this.state = 390;
				this.match(LuaParser.COMMA);
				this.state = 391;
				this.exp(0);
				}
			}

			this.state = 394;
			this.match(LuaParser.FOR);
			this.state = 395;
			this.namelist();
			this.state = 396;
			this.match(LuaParser.IN);
			this.state = 397;
			this.explist();
			this.state = 400;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===30) {
				{
				this.state = 398;
				this.match(LuaParser.IF);
				this.state = 399;
				this.exp(0);
				}
			}

			this.state = 402;
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
			this.state = 427;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 34, this._ctx) ) {
			case 1:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 405;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===51) {
					{
					this.state = 404;
					this.match(LuaParser.OP);
					}
				}

				this.state = 407;
				this.identifier();
				this.state = 409;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===52) {
					{
					this.state = 408;
					this.match(LuaParser.CP);
					}
				}

				this.state = 411;
				this.match(LuaParser.DO);
				this.state = 412;
				this.exp(0);
				}
				break;
			case 2:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 414;
				this.match(LuaParser.OP);
				this.state = 415;
				this.parlist();
				this.state = 416;
				this.match(LuaParser.CP);
				this.state = 417;
				this.match(LuaParser.DO);
				this.state = 418;
				this.block();
				this.state = 419;
				this.match(LuaParser.END);
				}
				break;
			case 3:
				this.enterOuterAlt(localctx, 3);
				{
				this.state = 421;
				this.match(LuaParser.OP);
				this.state = 422;
				this.parlist();
				this.state = 423;
				this.match(LuaParser.CP);
				this.state = 424;
				this.match(LuaParser.DO);
				this.state = 425;
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
			this.state = 438;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 68:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 429;
				this.match(LuaParser.OB);
				this.state = 430;
				this.exp(0);
				this.state = 431;
				this.match(LuaParser.CB);
				}
				break;
			case 47:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 433;
				this.match(LuaParser.DOT);
				this.state = 434;
				this.identifier();
				}
				break;
			case 11:
				this.enterOuterAlt(localctx, 3);
				{
				this.state = 435;
				this.match(LuaParser.QUESTMARK);
				this.state = 436;
				this.match(LuaParser.DOT);
				this.state = 437;
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
			this.state = 444;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 36, this._ctx) ) {
			case 1:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 440;
				this.identifier();
				}
				break;
			case 2:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 441;
				this.prefixexp();
				{
				this.state = 442;
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
			this.state = 469;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 40, this._ctx) ) {
			case 1:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 446;
				this.identifier();
				this.state = 450;
				this._errHandler.sync(this);
				_alt = this._interp.adaptivePredict(this._input, 37, this._ctx);
				while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1) {
						{
						{
						this.state = 447;
						this.indexed_member();
						}
						}
					}
					this.state = 452;
					this._errHandler.sync(this);
					_alt = this._interp.adaptivePredict(this._input, 37, this._ctx);
				}
				}
				break;
			case 2:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 453;
				this.functioncall(0);
				this.state = 457;
				this._errHandler.sync(this);
				_alt = this._interp.adaptivePredict(this._input, 38, this._ctx);
				while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1) {
						{
						{
						this.state = 454;
						this.indexed_member();
						}
						}
					}
					this.state = 459;
					this._errHandler.sync(this);
					_alt = this._interp.adaptivePredict(this._input, 38, this._ctx);
				}
				}
				break;
			case 3:
				this.enterOuterAlt(localctx, 3);
				{
				this.state = 460;
				this.match(LuaParser.OP);
				this.state = 461;
				this.exp(0);
				this.state = 462;
				this.match(LuaParser.CP);
				this.state = 466;
				this._errHandler.sync(this);
				_alt = this._interp.adaptivePredict(this._input, 39, this._ctx);
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
					_alt = this._interp.adaptivePredict(this._input, 39, this._ctx);
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
			this.state = 516;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 45, this._ctx) ) {
			case 1:
				{
				this.state = 472;
				this.identifier();
				this.state = 476;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la===11 || _la===47 || _la===68) {
					{
					{
					this.state = 473;
					this.indexed_member();
					}
					}
					this.state = 478;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 479;
				this.args();
				}
				break;
			case 2:
				{
				this.state = 481;
				this.match(LuaParser.OP);
				this.state = 482;
				this.exp(0);
				this.state = 483;
				this.match(LuaParser.CP);
				this.state = 487;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la===11 || _la===47 || _la===68) {
					{
					{
					this.state = 484;
					this.indexed_member();
					}
					}
					this.state = 489;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 490;
				this.args();
				}
				break;
			case 3:
				{
				this.state = 492;
				this.identifier();
				this.state = 496;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la===11 || _la===47 || _la===68) {
					{
					{
					this.state = 493;
					this.indexed_member();
					}
					}
					this.state = 498;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 499;
				this.match(LuaParser.COL);
				this.state = 500;
				this.identifier();
				this.state = 501;
				this.args();
				}
				break;
			case 4:
				{
				this.state = 503;
				this.match(LuaParser.OP);
				this.state = 504;
				this.exp(0);
				this.state = 505;
				this.match(LuaParser.CP);
				this.state = 509;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la===11 || _la===47 || _la===68) {
					{
					{
					this.state = 506;
					this.indexed_member();
					}
					}
					this.state = 511;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 512;
				this.match(LuaParser.COL);
				this.state = 513;
				this.identifier();
				this.state = 514;
				this.args();
				}
				break;
			}
			this._ctx.stop = this._input.LT(-1);
			this.state = 539;
			this._errHandler.sync(this);
			_alt = this._interp.adaptivePredict(this._input, 49, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					if (this._parseListeners != null) {
						this.triggerExitRuleEvent();
					}
					_prevctx = localctx;
					{
					this.state = 537;
					this._errHandler.sync(this);
					switch ( this._interp.adaptivePredict(this._input, 48, this._ctx) ) {
					case 1:
						{
						localctx = new FunctioncallContext(this, _parentctx, _parentState);
						this.pushNewRecursionContext(localctx, _startState, LuaParser.RULE_functioncall);
						this.state = 518;
						if (!(this.precpred(this._ctx, 5))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 5)");
						}
						this.state = 522;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
						while (_la===11 || _la===47 || _la===68) {
							{
							{
							this.state = 519;
							this.indexed_member();
							}
							}
							this.state = 524;
							this._errHandler.sync(this);
							_la = this._input.LA(1);
						}
						this.state = 525;
						this.args();
						}
						break;
					case 2:
						{
						localctx = new FunctioncallContext(this, _parentctx, _parentState);
						this.pushNewRecursionContext(localctx, _startState, LuaParser.RULE_functioncall);
						this.state = 526;
						if (!(this.precpred(this._ctx, 2))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 2)");
						}
						this.state = 530;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
						while (_la===11 || _la===47 || _la===68) {
							{
							{
							this.state = 527;
							this.indexed_member();
							}
							}
							this.state = 532;
							this._errHandler.sync(this);
							_la = this._input.LA(1);
						}
						this.state = 533;
						this.match(LuaParser.COL);
						this.state = 534;
						this.identifier();
						this.state = 535;
						this.args();
						}
						break;
					}
					}
				}
				this.state = 541;
				this._errHandler.sync(this);
				_alt = this._interp.adaptivePredict(this._input, 49, this._ctx);
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
			this.state = 542;
			this.var_();
			this.state = 543;
			_la = this._input.LA(1);
			if(!((((_la) & ~0x1F) === 0 && ((1 << _la) & 2093056) !== 0))) {
			this._errHandler.recoverInline(this);
			}
			else {
				this._errHandler.reportMatch(this);
			    this.consume();
			}
			this.state = 544;
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
			this.state = 553;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 51:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 546;
				this.match(LuaParser.OP);
				this.state = 548;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===3 || ((((_la - 37)) & ~0x1F) === 0 && ((1 << (_la - 37)) & 536968065) !== 0) || ((((_la - 75)) & ~0x1F) === 0 && ((1 << (_la - 75)) & 4089) !== 0)) {
					{
					this.state = 547;
					this.explist();
					}
				}

				this.state = 550;
				this.match(LuaParser.CP);
				}
				break;
			case 66:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 551;
				this.tableconstructor();
				}
				break;
			case 79:
			case 80:
			case 81:
			case 82:
				this.enterOuterAlt(localctx, 3);
				{
				this.state = 552;
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
			this.state = 555;
			this.match(LuaParser.FUNCTION);
			this.state = 556;
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
			this.state = 558;
			this.match(LuaParser.OP);
			this.state = 559;
			this.parlist();
			this.state = 560;
			this.match(LuaParser.CP);
			this.state = 561;
			this.block();
			this.state = 562;
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
			this.state = 567;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===22) {
				{
				{
				this.state = 564;
				this.decorator();
				}
				}
				this.state = 569;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 570;
			this.match(LuaParser.CLASS);
			this.state = 571;
			this.identifier();
			this.state = 574;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===5) {
				{
				this.state = 572;
				this.match(LuaParser.EXTENDS);
				this.state = 573;
				this.identifier();
				}
			}

			this.state = 576;
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
			this.state = 587;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===59) {
				{
				this.state = 578;
				this.match(LuaParser.COL);
				this.state = 579;
				this.identifier();
				this.state = 584;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la===72) {
					{
					{
					this.state = 580;
					this.match(LuaParser.PIPE);
					this.state = 581;
					this.identifier();
					}
					}
					this.state = 586;
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
			this.state = 592;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 2:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 589;
				this.match(LuaParser.EQ);
				this.state = 590;
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
			this.state = 594;
			this.identifier();
			this.state = 595;
			this.partype();
			this.state = 596;
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
			this.state = 598;
			this.extendedpar();
			this.state = 603;
			this._errHandler.sync(this);
			_alt = this._interp.adaptivePredict(this._input, 57, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 599;
					this.match(LuaParser.COMMA);
					this.state = 600;
					this.extendedpar();
					}
					}
				}
				this.state = 605;
				this._errHandler.sync(this);
				_alt = this._interp.adaptivePredict(this._input, 57, this._ctx);
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
			this.state = 613;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 3:
			case 78:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 606;
				this.extendedparlist();
				this.state = 609;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===35) {
					{
					this.state = 607;
					this.match(LuaParser.COMMA);
					this.state = 608;
					this.match(LuaParser.DDD);
					}
				}

				}
				break;
			case 75:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 611;
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
			this.state = 615;
			this.match(LuaParser.OCU);
			this.state = 617;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===3 || _la===22 || ((((_la - 37)) & ~0x1F) === 0 && ((1 << (_la - 37)) & 2684452737) !== 0) || ((((_la - 75)) & ~0x1F) === 0 && ((1 << (_la - 75)) & 4089) !== 0)) {
				{
				this.state = 616;
				this.fieldlist();
				}
			}

			this.state = 619;
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
			this.state = 621;
			this.field();
			this.state = 627;
			this._errHandler.sync(this);
			_alt = this._interp.adaptivePredict(this._input, 61, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 622;
					this.fieldsep();
					this.state = 623;
					this.field();
					}
					}
				}
				this.state = 629;
				this._errHandler.sync(this);
				_alt = this._interp.adaptivePredict(this._input, 61, this._ctx);
			}
			this.state = 631;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===1 || _la===35) {
				{
				this.state = 630;
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
			this.state = 666;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 65, this._ctx) ) {
			case 1:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 634;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				do {
					{
					{
					this.state = 633;
					this.decorator();
					}
					}
					this.state = 636;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				} while (_la===22);
				this.state = 638;
				this.match(LuaParser.OB);
				this.state = 639;
				this.exp(0);
				this.state = 640;
				this.match(LuaParser.CB);
				this.state = 641;
				this.match(LuaParser.EQ);
				this.state = 642;
				this.functiondef();
				}
				break;
			case 2:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 645;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				do {
					{
					{
					this.state = 644;
					this.decorator();
					}
					}
					this.state = 647;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				} while (_la===22);
				this.state = 649;
				this.identifier();
				this.state = 650;
				this.match(LuaParser.EQ);
				this.state = 651;
				this.functiondef();
				}
				break;
			case 3:
				this.enterOuterAlt(localctx, 3);
				{
				this.state = 653;
				this.match(LuaParser.OB);
				this.state = 654;
				this.exp(0);
				this.state = 655;
				this.match(LuaParser.CB);
				this.state = 656;
				this.match(LuaParser.EQ);
				this.state = 657;
				this.exp(0);
				}
				break;
			case 4:
				this.enterOuterAlt(localctx, 4);
				{
				this.state = 659;
				this.match(LuaParser.DOT);
				this.state = 660;
				this.identifier();
				}
				break;
			case 5:
				this.enterOuterAlt(localctx, 5);
				{
				this.state = 661;
				this.identifier();
				this.state = 662;
				this.match(LuaParser.EQ);
				this.state = 663;
				this.exp(0);
				}
				break;
			case 6:
				this.enterOuterAlt(localctx, 6);
				{
				this.state = 665;
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
			this.state = 668;
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
			this.state = 670;
			_la = this._input.LA(1);
			if(!(_la===3 || _la===78)) {
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
			this.state = 680;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 83:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 673;
				this._errHandler.sync(this);
				_alt = 1;
				do {
					switch (_alt) {
					case 1:
						{
						{
						this.state = 672;
						this.match(LuaParser.INT);
						}
						}
						break;
					default:
						throw new NoViableAltException(this);
					}
					this.state = 675;
					this._errHandler.sync(this);
					_alt = this._interp.adaptivePredict(this._input, 66, this._ctx);
				} while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER);
				}
				break;
			case 84:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 677;
				this.match(LuaParser.HEX);
				}
				break;
			case 85:
				this.enterOuterAlt(localctx, 3);
				{
				this.state = 678;
				this.match(LuaParser.FLOAT);
				}
				break;
			case 86:
				this.enterOuterAlt(localctx, 4);
				{
				this.state = 679;
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
			this.state = 682;
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

	public static readonly _serializedATN: number[] = [4,1,91,685,2,0,7,0,2,
	1,7,1,2,2,7,2,2,3,7,3,2,4,7,4,2,5,7,5,2,6,7,6,2,7,7,7,2,8,7,8,2,9,7,9,2,
	10,7,10,2,11,7,11,2,12,7,12,2,13,7,13,2,14,7,14,2,15,7,15,2,16,7,16,2,17,
	7,17,2,18,7,18,2,19,7,19,2,20,7,20,2,21,7,21,2,22,7,22,2,23,7,23,2,24,7,
	24,2,25,7,25,2,26,7,26,2,27,7,27,2,28,7,28,2,29,7,29,2,30,7,30,2,31,7,31,
	2,32,7,32,2,33,7,33,2,34,7,34,2,35,7,35,2,36,7,36,2,37,7,37,2,38,7,38,2,
	39,7,39,2,40,7,40,1,0,1,0,1,0,1,1,1,1,1,2,5,2,89,8,2,10,2,12,2,92,9,2,1,
	2,3,2,95,8,2,1,3,1,3,1,3,1,3,1,3,1,3,1,3,1,3,1,3,1,3,1,3,1,3,1,3,1,3,1,
	3,1,3,1,3,1,3,1,3,1,3,1,3,1,3,1,3,1,3,1,3,1,3,1,3,1,3,1,3,1,3,1,3,5,3,128,
	8,3,10,3,12,3,131,9,3,1,3,1,3,3,3,135,8,3,1,3,1,3,1,3,1,3,1,3,1,3,1,3,1,
	3,1,3,1,3,3,3,147,8,3,1,3,1,3,1,3,1,3,1,3,1,3,1,3,1,3,1,3,1,3,1,3,1,3,1,
	3,1,3,1,3,1,3,1,3,5,3,166,8,3,10,3,12,3,169,9,3,1,3,1,3,1,3,1,3,1,3,5,3,
	176,8,3,10,3,12,3,179,9,3,1,3,1,3,1,3,1,3,1,3,1,3,1,3,1,3,1,3,1,3,1,3,3,
	3,192,8,3,1,3,1,3,1,3,1,3,1,3,1,3,1,3,3,3,201,8,3,1,3,3,3,204,8,3,1,3,1,
	3,1,3,1,3,3,3,210,8,3,1,3,1,3,1,3,1,3,1,3,1,3,1,3,1,3,1,3,1,3,1,3,1,3,1,
	3,1,3,1,3,1,3,1,3,1,3,1,3,1,3,3,3,232,8,3,1,4,1,4,1,4,1,4,1,4,1,4,5,4,240,
	8,4,10,4,12,4,243,9,4,1,5,1,5,1,5,1,5,3,5,249,8,5,1,6,1,6,3,6,253,8,6,1,
	6,1,6,3,6,257,8,6,1,6,3,6,260,8,6,1,7,1,7,1,7,1,7,1,8,1,8,1,8,5,8,269,8,
	8,10,8,12,8,272,9,8,1,8,1,8,3,8,276,8,8,1,9,1,9,1,9,5,9,281,8,9,10,9,12,
	9,284,9,9,1,10,1,10,1,10,5,10,289,8,10,10,10,12,10,292,9,10,1,11,1,11,1,
	11,1,11,1,12,1,12,3,12,300,8,12,1,12,3,12,303,8,12,1,13,1,13,1,13,1,14,
	1,14,1,14,5,14,311,8,14,10,14,12,14,314,9,14,1,15,1,15,1,15,1,15,1,15,1,
	15,1,15,1,15,1,15,1,15,1,15,1,15,1,15,1,15,1,15,3,15,331,8,15,1,15,1,15,
	1,15,1,15,1,15,1,15,1,15,1,15,1,15,1,15,1,15,1,15,1,15,1,15,1,15,1,15,1,
	15,1,15,1,15,1,15,1,15,1,15,1,15,1,15,1,15,1,15,1,15,1,15,1,15,1,15,1,15,
	1,15,1,15,1,15,5,15,367,8,15,10,15,12,15,370,9,15,1,16,1,16,1,16,3,16,375,
	8,16,1,17,1,17,1,17,1,17,5,17,381,8,17,10,17,12,17,384,9,17,1,17,3,17,387,
	8,17,1,18,1,18,1,18,1,18,3,18,393,8,18,1,18,1,18,1,18,1,18,1,18,1,18,3,
	18,401,8,18,1,18,1,18,1,19,3,19,406,8,19,1,19,1,19,3,19,410,8,19,1,19,1,
	19,1,19,1,19,1,19,1,19,1,19,1,19,1,19,1,19,1,19,1,19,1,19,1,19,1,19,1,19,
	3,19,428,8,19,1,20,1,20,1,20,1,20,1,20,1,20,1,20,1,20,1,20,3,20,439,8,20,
	1,21,1,21,1,21,1,21,3,21,445,8,21,1,22,1,22,5,22,449,8,22,10,22,12,22,452,
	9,22,1,22,1,22,5,22,456,8,22,10,22,12,22,459,9,22,1,22,1,22,1,22,1,22,5,
	22,465,8,22,10,22,12,22,468,9,22,3,22,470,8,22,1,23,1,23,1,23,5,23,475,
	8,23,10,23,12,23,478,9,23,1,23,1,23,1,23,1,23,1,23,1,23,5,23,486,8,23,10,
	23,12,23,489,9,23,1,23,1,23,1,23,1,23,5,23,495,8,23,10,23,12,23,498,9,23,
	1,23,1,23,1,23,1,23,1,23,1,23,1,23,1,23,5,23,508,8,23,10,23,12,23,511,9,
	23,1,23,1,23,1,23,1,23,3,23,517,8,23,1,23,1,23,5,23,521,8,23,10,23,12,23,
	524,9,23,1,23,1,23,1,23,5,23,529,8,23,10,23,12,23,532,9,23,1,23,1,23,1,
	23,1,23,5,23,538,8,23,10,23,12,23,541,9,23,1,24,1,24,1,24,1,24,1,25,1,25,
	3,25,549,8,25,1,25,1,25,1,25,3,25,554,8,25,1,26,1,26,1,26,1,27,1,27,1,27,
	1,27,1,27,1,27,1,28,5,28,566,8,28,10,28,12,28,569,9,28,1,28,1,28,1,28,1,
	28,3,28,575,8,28,1,28,1,28,1,29,1,29,1,29,1,29,5,29,583,8,29,10,29,12,29,
	586,9,29,3,29,588,8,29,1,30,1,30,1,30,3,30,593,8,30,1,31,1,31,1,31,1,31,
	1,32,1,32,1,32,5,32,602,8,32,10,32,12,32,605,9,32,1,33,1,33,1,33,3,33,610,
	8,33,1,33,1,33,3,33,614,8,33,1,34,1,34,3,34,618,8,34,1,34,1,34,1,35,1,35,
	1,35,1,35,5,35,626,8,35,10,35,12,35,629,9,35,1,35,3,35,632,8,35,1,36,4,
	36,635,8,36,11,36,12,36,636,1,36,1,36,1,36,1,36,1,36,1,36,1,36,4,36,646,
	8,36,11,36,12,36,647,1,36,1,36,1,36,1,36,1,36,1,36,1,36,1,36,1,36,1,36,
	1,36,1,36,1,36,1,36,1,36,1,36,1,36,3,36,667,8,36,1,37,1,37,1,38,1,38,1,
	39,4,39,674,8,39,11,39,12,39,675,1,39,1,39,1,39,3,39,681,8,39,1,40,1,40,
	1,40,0,2,30,46,41,0,2,4,6,8,10,12,14,16,18,20,22,24,26,28,30,32,34,36,38,
	40,42,44,46,48,50,52,54,56,58,60,62,64,66,68,70,72,74,76,78,80,0,10,2,0,
	48,50,53,53,3,0,57,58,65,65,74,74,2,0,49,49,64,64,4,0,39,40,60,61,70,70,
	76,77,1,0,62,63,3,0,48,48,54,56,72,72,1,0,12,20,2,0,1,1,35,35,2,0,3,3,78,
	78,1,0,79,82,765,0,82,1,0,0,0,2,85,1,0,0,0,4,90,1,0,0,0,6,231,1,0,0,0,8,
	233,1,0,0,0,10,248,1,0,0,0,12,256,1,0,0,0,14,261,1,0,0,0,16,265,1,0,0,0,
	18,277,1,0,0,0,20,285,1,0,0,0,22,293,1,0,0,0,24,302,1,0,0,0,26,304,1,0,
	0,0,28,307,1,0,0,0,30,330,1,0,0,0,32,371,1,0,0,0,34,376,1,0,0,0,36,388,
	1,0,0,0,38,427,1,0,0,0,40,438,1,0,0,0,42,444,1,0,0,0,44,469,1,0,0,0,46,
	516,1,0,0,0,48,542,1,0,0,0,50,553,1,0,0,0,52,555,1,0,0,0,54,558,1,0,0,0,
	56,567,1,0,0,0,58,587,1,0,0,0,60,592,1,0,0,0,62,594,1,0,0,0,64,598,1,0,
	0,0,66,613,1,0,0,0,68,615,1,0,0,0,70,621,1,0,0,0,72,666,1,0,0,0,74,668,
	1,0,0,0,76,670,1,0,0,0,78,680,1,0,0,0,80,682,1,0,0,0,82,83,3,2,1,0,83,84,
	5,0,0,1,84,1,1,0,0,0,85,86,3,4,2,0,86,3,1,0,0,0,87,89,3,6,3,0,88,87,1,0,
	0,0,89,92,1,0,0,0,90,88,1,0,0,0,90,91,1,0,0,0,91,94,1,0,0,0,92,90,1,0,0,
	0,93,95,3,12,6,0,94,93,1,0,0,0,94,95,1,0,0,0,95,5,1,0,0,0,96,232,5,1,0,
	0,97,98,3,18,9,0,98,99,5,2,0,0,99,100,3,28,14,0,100,232,1,0,0,0,101,232,
	3,48,24,0,102,232,3,46,23,0,103,232,3,14,7,0,104,232,5,23,0,0,105,106,5,
	24,0,0,106,232,3,76,38,0,107,108,5,27,0,0,108,109,3,30,15,0,109,110,5,25,
	0,0,110,111,3,4,2,0,111,112,5,26,0,0,112,232,1,0,0,0,113,114,5,28,0,0,114,
	115,3,4,2,0,115,116,5,29,0,0,116,117,3,30,15,0,117,232,1,0,0,0,118,119,
	5,30,0,0,119,120,3,30,15,0,120,121,5,31,0,0,121,129,3,4,2,0,122,123,5,32,
	0,0,123,124,3,30,15,0,124,125,5,31,0,0,125,126,3,4,2,0,126,128,1,0,0,0,
	127,122,1,0,0,0,128,131,1,0,0,0,129,127,1,0,0,0,129,130,1,0,0,0,130,134,
	1,0,0,0,131,129,1,0,0,0,132,133,5,33,0,0,133,135,3,4,2,0,134,132,1,0,0,
	0,134,135,1,0,0,0,135,136,1,0,0,0,136,137,5,26,0,0,137,232,1,0,0,0,138,
	139,5,34,0,0,139,140,3,76,38,0,140,141,5,2,0,0,141,142,3,30,15,0,142,143,
	5,35,0,0,143,146,3,30,15,0,144,145,5,35,0,0,145,147,3,30,15,0,146,144,1,
	0,0,0,146,147,1,0,0,0,147,148,1,0,0,0,148,149,5,25,0,0,149,150,3,4,2,0,
	150,151,5,26,0,0,151,232,1,0,0,0,152,153,5,34,0,0,153,154,3,20,10,0,154,
	155,5,36,0,0,155,156,3,28,14,0,156,157,5,25,0,0,157,158,3,4,2,0,158,159,
	5,26,0,0,159,232,1,0,0,0,160,161,5,25,0,0,161,162,3,4,2,0,162,163,5,26,
	0,0,163,232,1,0,0,0,164,166,3,22,11,0,165,164,1,0,0,0,166,169,1,0,0,0,167,
	165,1,0,0,0,167,168,1,0,0,0,168,170,1,0,0,0,169,167,1,0,0,0,170,171,5,37,
	0,0,171,172,3,16,8,0,172,173,3,54,27,0,173,232,1,0,0,0,174,176,3,22,11,
	0,175,174,1,0,0,0,176,179,1,0,0,0,177,175,1,0,0,0,177,178,1,0,0,0,178,180,
	1,0,0,0,179,177,1,0,0,0,180,181,5,38,0,0,181,182,5,37,0,0,182,183,3,76,
	38,0,183,184,3,54,27,0,184,232,1,0,0,0,185,186,5,7,0,0,186,191,3,16,8,0,
	187,188,5,51,0,0,188,189,3,66,33,0,189,190,5,52,0,0,190,192,1,0,0,0,191,
	187,1,0,0,0,191,192,1,0,0,0,192,193,1,0,0,0,193,194,3,34,17,0,194,195,5,
	26,0,0,195,232,1,0,0,0,196,197,5,6,0,0,197,203,3,76,38,0,198,200,5,51,0,
	0,199,201,3,28,14,0,200,199,1,0,0,0,200,201,1,0,0,0,201,202,1,0,0,0,202,
	204,5,52,0,0,203,198,1,0,0,0,203,204,1,0,0,0,204,232,1,0,0,0,205,206,5,
	38,0,0,206,209,3,8,4,0,207,208,5,2,0,0,208,210,3,28,14,0,209,207,1,0,0,
	0,209,210,1,0,0,0,210,232,1,0,0,0,211,212,5,38,0,0,212,213,3,8,4,0,213,
	214,5,36,0,0,214,215,3,44,22,0,215,232,1,0,0,0,216,217,5,21,0,0,217,218,
	3,4,2,0,218,219,5,26,0,0,219,232,1,0,0,0,220,221,5,8,0,0,221,222,3,4,2,
	0,222,223,5,9,0,0,223,224,3,76,38,0,224,225,5,31,0,0,225,226,3,4,2,0,226,
	227,5,26,0,0,227,232,1,0,0,0,228,229,5,10,0,0,229,232,3,30,15,0,230,232,
	3,56,28,0,231,96,1,0,0,0,231,97,1,0,0,0,231,101,1,0,0,0,231,102,1,0,0,0,
	231,103,1,0,0,0,231,104,1,0,0,0,231,105,1,0,0,0,231,107,1,0,0,0,231,113,
	1,0,0,0,231,118,1,0,0,0,231,138,1,0,0,0,231,152,1,0,0,0,231,160,1,0,0,0,
	231,167,1,0,0,0,231,177,1,0,0,0,231,185,1,0,0,0,231,196,1,0,0,0,231,205,
	1,0,0,0,231,211,1,0,0,0,231,216,1,0,0,0,231,220,1,0,0,0,231,228,1,0,0,0,
	231,230,1,0,0,0,232,7,1,0,0,0,233,234,3,76,38,0,234,241,3,10,5,0,235,236,
	5,35,0,0,236,237,3,76,38,0,237,238,3,10,5,0,238,240,1,0,0,0,239,235,1,0,
	0,0,240,243,1,0,0,0,241,239,1,0,0,0,241,242,1,0,0,0,242,9,1,0,0,0,243,241,
	1,0,0,0,244,245,5,39,0,0,245,246,3,76,38,0,246,247,5,40,0,0,247,249,1,0,
	0,0,248,244,1,0,0,0,248,249,1,0,0,0,249,11,1,0,0,0,250,252,5,41,0,0,251,
	253,3,28,14,0,252,251,1,0,0,0,252,253,1,0,0,0,253,257,1,0,0,0,254,257,5,
	23,0,0,255,257,5,42,0,0,256,250,1,0,0,0,256,254,1,0,0,0,256,255,1,0,0,0,
	257,259,1,0,0,0,258,260,5,1,0,0,259,258,1,0,0,0,259,260,1,0,0,0,260,13,
	1,0,0,0,261,262,5,43,0,0,262,263,3,76,38,0,263,264,5,43,0,0,264,15,1,0,
	0,0,265,270,3,76,38,0,266,267,5,47,0,0,267,269,3,76,38,0,268,266,1,0,0,
	0,269,272,1,0,0,0,270,268,1,0,0,0,270,271,1,0,0,0,271,275,1,0,0,0,272,270,
	1,0,0,0,273,274,5,59,0,0,274,276,3,76,38,0,275,273,1,0,0,0,275,276,1,0,
	0,0,276,17,1,0,0,0,277,282,3,42,21,0,278,279,5,35,0,0,279,281,3,42,21,0,
	280,278,1,0,0,0,281,284,1,0,0,0,282,280,1,0,0,0,282,283,1,0,0,0,283,19,
	1,0,0,0,284,282,1,0,0,0,285,290,3,76,38,0,286,287,5,35,0,0,287,289,3,76,
	38,0,288,286,1,0,0,0,289,292,1,0,0,0,290,288,1,0,0,0,290,291,1,0,0,0,291,
	21,1,0,0,0,292,290,1,0,0,0,293,294,5,22,0,0,294,295,3,42,21,0,295,296,3,
	24,12,0,296,23,1,0,0,0,297,299,5,51,0,0,298,300,3,28,14,0,299,298,1,0,0,
	0,299,300,1,0,0,0,300,301,1,0,0,0,301,303,5,52,0,0,302,297,1,0,0,0,302,
	303,1,0,0,0,303,25,1,0,0,0,304,305,5,3,0,0,305,306,3,46,23,0,306,27,1,0,
	0,0,307,312,3,30,15,0,308,309,5,35,0,0,309,311,3,30,15,0,310,308,1,0,0,
	0,311,314,1,0,0,0,312,310,1,0,0,0,312,313,1,0,0,0,313,29,1,0,0,0,314,312,
	1,0,0,0,315,316,6,15,-1,0,316,331,5,44,0,0,317,331,5,45,0,0,318,331,5,46,
	0,0,319,331,3,78,39,0,320,331,3,80,40,0,321,331,5,75,0,0,322,331,3,26,13,
	0,323,331,3,38,19,0,324,331,3,36,18,0,325,331,3,52,26,0,326,331,3,44,22,
	0,327,331,3,68,34,0,328,329,7,0,0,0,329,331,3,30,15,10,330,315,1,0,0,0,
	330,317,1,0,0,0,330,318,1,0,0,0,330,319,1,0,0,0,330,320,1,0,0,0,330,321,
	1,0,0,0,330,322,1,0,0,0,330,323,1,0,0,0,330,324,1,0,0,0,330,325,1,0,0,0,
	330,326,1,0,0,0,330,327,1,0,0,0,330,328,1,0,0,0,331,368,1,0,0,0,332,333,
	10,11,0,0,333,334,5,73,0,0,334,367,3,30,15,11,335,336,10,9,0,0,336,337,
	7,1,0,0,337,367,3,30,15,10,338,339,10,8,0,0,339,340,7,2,0,0,340,367,3,30,
	15,9,341,342,10,7,0,0,342,343,5,71,0,0,343,367,3,30,15,7,344,345,10,6,0,
	0,345,346,7,3,0,0,346,367,3,30,15,7,347,348,10,5,0,0,348,349,7,4,0,0,349,
	367,3,30,15,6,350,351,10,4,0,0,351,352,7,5,0,0,352,367,3,30,15,5,353,354,
	10,3,0,0,354,355,5,36,0,0,355,367,3,30,15,4,356,357,10,2,0,0,357,358,5,
	53,0,0,358,359,5,36,0,0,359,367,3,30,15,3,360,361,10,1,0,0,361,362,5,11,
	0,0,362,363,3,30,15,0,363,364,5,59,0,0,364,365,3,30,15,2,365,367,1,0,0,
	0,366,332,1,0,0,0,366,335,1,0,0,0,366,338,1,0,0,0,366,341,1,0,0,0,366,344,
	1,0,0,0,366,347,1,0,0,0,366,350,1,0,0,0,366,353,1,0,0,0,366,356,1,0,0,0,
	366,360,1,0,0,0,367,370,1,0,0,0,368,366,1,0,0,0,368,369,1,0,0,0,369,31,
	1,0,0,0,370,368,1,0,0,0,371,374,3,30,15,0,372,373,5,33,0,0,373,375,3,28,
	14,0,374,372,1,0,0,0,374,375,1,0,0,0,375,33,1,0,0,0,376,382,3,32,16,0,377,
	378,3,74,37,0,378,379,3,32,16,0,379,381,1,0,0,0,380,377,1,0,0,0,381,384,
	1,0,0,0,382,380,1,0,0,0,382,383,1,0,0,0,383,386,1,0,0,0,384,382,1,0,0,0,
	385,387,3,74,37,0,386,385,1,0,0,0,386,387,1,0,0,0,387,35,1,0,0,0,388,389,
	5,66,0,0,389,392,3,30,15,0,390,391,5,35,0,0,391,393,3,30,15,0,392,390,1,
	0,0,0,392,393,1,0,0,0,393,394,1,0,0,0,394,395,5,34,0,0,395,396,3,20,10,
	0,396,397,5,36,0,0,397,400,3,28,14,0,398,399,5,30,0,0,399,401,3,30,15,0,
	400,398,1,0,0,0,400,401,1,0,0,0,401,402,1,0,0,0,402,403,5,67,0,0,403,37,
	1,0,0,0,404,406,5,51,0,0,405,404,1,0,0,0,405,406,1,0,0,0,406,407,1,0,0,
	0,407,409,3,76,38,0,408,410,5,52,0,0,409,408,1,0,0,0,409,410,1,0,0,0,410,
	411,1,0,0,0,411,412,5,25,0,0,412,413,3,30,15,0,413,428,1,0,0,0,414,415,
	5,51,0,0,415,416,3,66,33,0,416,417,5,52,0,0,417,418,5,25,0,0,418,419,3,
	4,2,0,419,420,5,26,0,0,420,428,1,0,0,0,421,422,5,51,0,0,422,423,3,66,33,
	0,423,424,5,52,0,0,424,425,5,25,0,0,425,426,3,30,15,0,426,428,1,0,0,0,427,
	405,1,0,0,0,427,414,1,0,0,0,427,421,1,0,0,0,428,39,1,0,0,0,429,430,5,68,
	0,0,430,431,3,30,15,0,431,432,5,69,0,0,432,439,1,0,0,0,433,434,5,47,0,0,
	434,439,3,76,38,0,435,436,5,11,0,0,436,437,5,47,0,0,437,439,3,76,38,0,438,
	429,1,0,0,0,438,433,1,0,0,0,438,435,1,0,0,0,439,41,1,0,0,0,440,445,3,76,
	38,0,441,442,3,44,22,0,442,443,3,40,20,0,443,445,1,0,0,0,444,440,1,0,0,
	0,444,441,1,0,0,0,445,43,1,0,0,0,446,450,3,76,38,0,447,449,3,40,20,0,448,
	447,1,0,0,0,449,452,1,0,0,0,450,448,1,0,0,0,450,451,1,0,0,0,451,470,1,0,
	0,0,452,450,1,0,0,0,453,457,3,46,23,0,454,456,3,40,20,0,455,454,1,0,0,0,
	456,459,1,0,0,0,457,455,1,0,0,0,457,458,1,0,0,0,458,470,1,0,0,0,459,457,
	1,0,0,0,460,461,5,51,0,0,461,462,3,30,15,0,462,466,5,52,0,0,463,465,3,40,
	20,0,464,463,1,0,0,0,465,468,1,0,0,0,466,464,1,0,0,0,466,467,1,0,0,0,467,
	470,1,0,0,0,468,466,1,0,0,0,469,446,1,0,0,0,469,453,1,0,0,0,469,460,1,0,
	0,0,470,45,1,0,0,0,471,472,6,23,-1,0,472,476,3,76,38,0,473,475,3,40,20,
	0,474,473,1,0,0,0,475,478,1,0,0,0,476,474,1,0,0,0,476,477,1,0,0,0,477,479,
	1,0,0,0,478,476,1,0,0,0,479,480,3,50,25,0,480,517,1,0,0,0,481,482,5,51,
	0,0,482,483,3,30,15,0,483,487,5,52,0,0,484,486,3,40,20,0,485,484,1,0,0,
	0,486,489,1,0,0,0,487,485,1,0,0,0,487,488,1,0,0,0,488,490,1,0,0,0,489,487,
	1,0,0,0,490,491,3,50,25,0,491,517,1,0,0,0,492,496,3,76,38,0,493,495,3,40,
	20,0,494,493,1,0,0,0,495,498,1,0,0,0,496,494,1,0,0,0,496,497,1,0,0,0,497,
	499,1,0,0,0,498,496,1,0,0,0,499,500,5,59,0,0,500,501,3,76,38,0,501,502,
	3,50,25,0,502,517,1,0,0,0,503,504,5,51,0,0,504,505,3,30,15,0,505,509,5,
	52,0,0,506,508,3,40,20,0,507,506,1,0,0,0,508,511,1,0,0,0,509,507,1,0,0,
	0,509,510,1,0,0,0,510,512,1,0,0,0,511,509,1,0,0,0,512,513,5,59,0,0,513,
	514,3,76,38,0,514,515,3,50,25,0,515,517,1,0,0,0,516,471,1,0,0,0,516,481,
	1,0,0,0,516,492,1,0,0,0,516,503,1,0,0,0,517,539,1,0,0,0,518,522,10,5,0,
	0,519,521,3,40,20,0,520,519,1,0,0,0,521,524,1,0,0,0,522,520,1,0,0,0,522,
	523,1,0,0,0,523,525,1,0,0,0,524,522,1,0,0,0,525,538,3,50,25,0,526,530,10,
	2,0,0,527,529,3,40,20,0,528,527,1,0,0,0,529,532,1,0,0,0,530,528,1,0,0,0,
	530,531,1,0,0,0,531,533,1,0,0,0,532,530,1,0,0,0,533,534,5,59,0,0,534,535,
	3,76,38,0,535,536,3,50,25,0,536,538,1,0,0,0,537,518,1,0,0,0,537,526,1,0,
	0,0,538,541,1,0,0,0,539,537,1,0,0,0,539,540,1,0,0,0,540,47,1,0,0,0,541,
	539,1,0,0,0,542,543,3,42,21,0,543,544,7,6,0,0,544,545,3,30,15,0,545,49,
	1,0,0,0,546,548,5,51,0,0,547,549,3,28,14,0,548,547,1,0,0,0,548,549,1,0,
	0,0,549,550,1,0,0,0,550,554,5,52,0,0,551,554,3,68,34,0,552,554,3,80,40,
	0,553,546,1,0,0,0,553,551,1,0,0,0,553,552,1,0,0,0,554,51,1,0,0,0,555,556,
	5,37,0,0,556,557,3,54,27,0,557,53,1,0,0,0,558,559,5,51,0,0,559,560,3,66,
	33,0,560,561,5,52,0,0,561,562,3,4,2,0,562,563,5,26,0,0,563,55,1,0,0,0,564,
	566,3,22,11,0,565,564,1,0,0,0,566,569,1,0,0,0,567,565,1,0,0,0,567,568,1,
	0,0,0,568,570,1,0,0,0,569,567,1,0,0,0,570,571,5,4,0,0,571,574,3,76,38,0,
	572,573,5,5,0,0,573,575,3,76,38,0,574,572,1,0,0,0,574,575,1,0,0,0,575,576,
	1,0,0,0,576,577,3,68,34,0,577,57,1,0,0,0,578,579,5,59,0,0,579,584,3,76,
	38,0,580,581,5,72,0,0,581,583,3,76,38,0,582,580,1,0,0,0,583,586,1,0,0,0,
	584,582,1,0,0,0,584,585,1,0,0,0,585,588,1,0,0,0,586,584,1,0,0,0,587,578,
	1,0,0,0,587,588,1,0,0,0,588,59,1,0,0,0,589,590,5,2,0,0,590,593,3,30,15,
	0,591,593,1,0,0,0,592,589,1,0,0,0,592,591,1,0,0,0,593,61,1,0,0,0,594,595,
	3,76,38,0,595,596,3,58,29,0,596,597,3,60,30,0,597,63,1,0,0,0,598,603,3,
	62,31,0,599,600,5,35,0,0,600,602,3,62,31,0,601,599,1,0,0,0,602,605,1,0,
	0,0,603,601,1,0,0,0,603,604,1,0,0,0,604,65,1,0,0,0,605,603,1,0,0,0,606,
	609,3,64,32,0,607,608,5,35,0,0,608,610,5,75,0,0,609,607,1,0,0,0,609,610,
	1,0,0,0,610,614,1,0,0,0,611,614,5,75,0,0,612,614,1,0,0,0,613,606,1,0,0,
	0,613,611,1,0,0,0,613,612,1,0,0,0,614,67,1,0,0,0,615,617,5,66,0,0,616,618,
	3,70,35,0,617,616,1,0,0,0,617,618,1,0,0,0,618,619,1,0,0,0,619,620,5,67,
	0,0,620,69,1,0,0,0,621,627,3,72,36,0,622,623,3,74,37,0,623,624,3,72,36,
	0,624,626,1,0,0,0,625,622,1,0,0,0,626,629,1,0,0,0,627,625,1,0,0,0,627,628,
	1,0,0,0,628,631,1,0,0,0,629,627,1,0,0,0,630,632,3,74,37,0,631,630,1,0,0,
	0,631,632,1,0,0,0,632,71,1,0,0,0,633,635,3,22,11,0,634,633,1,0,0,0,635,
	636,1,0,0,0,636,634,1,0,0,0,636,637,1,0,0,0,637,638,1,0,0,0,638,639,5,68,
	0,0,639,640,3,30,15,0,640,641,5,69,0,0,641,642,5,2,0,0,642,643,3,52,26,
	0,643,667,1,0,0,0,644,646,3,22,11,0,645,644,1,0,0,0,646,647,1,0,0,0,647,
	645,1,0,0,0,647,648,1,0,0,0,648,649,1,0,0,0,649,650,3,76,38,0,650,651,5,
	2,0,0,651,652,3,52,26,0,652,667,1,0,0,0,653,654,5,68,0,0,654,655,3,30,15,
	0,655,656,5,69,0,0,656,657,5,2,0,0,657,658,3,30,15,0,658,667,1,0,0,0,659,
	660,5,47,0,0,660,667,3,76,38,0,661,662,3,76,38,0,662,663,5,2,0,0,663,664,
	3,30,15,0,664,667,1,0,0,0,665,667,3,30,15,0,666,634,1,0,0,0,666,645,1,0,
	0,0,666,653,1,0,0,0,666,659,1,0,0,0,666,661,1,0,0,0,666,665,1,0,0,0,667,
	73,1,0,0,0,668,669,7,7,0,0,669,75,1,0,0,0,670,671,7,8,0,0,671,77,1,0,0,
	0,672,674,5,83,0,0,673,672,1,0,0,0,674,675,1,0,0,0,675,673,1,0,0,0,675,
	676,1,0,0,0,676,681,1,0,0,0,677,681,5,84,0,0,678,681,5,85,0,0,679,681,5,
	86,0,0,680,673,1,0,0,0,680,677,1,0,0,0,680,678,1,0,0,0,680,679,1,0,0,0,
	681,79,1,0,0,0,682,683,7,9,0,0,683,81,1,0,0,0,68,90,94,129,134,146,167,
	177,191,200,203,209,231,241,248,252,256,259,270,275,282,290,299,302,312,
	330,366,368,374,382,386,392,400,405,409,427,438,444,450,457,466,469,476,
	487,496,509,516,522,530,537,539,548,553,567,574,584,587,592,603,609,613,
	617,627,631,636,647,666,675,680];

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
