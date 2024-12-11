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
	public static readonly TRY = 6;
	public static readonly CATCH = 7;
	public static readonly THROW = 8;
	public static readonly QUESTMARK = 9;
	public static readonly COMPPLUS = 10;
	public static readonly COMPMINUS = 11;
	public static readonly COMPSTAR = 12;
	public static readonly COMPSLASH = 13;
	public static readonly COMPLL = 14;
	public static readonly COMPGG = 15;
	public static readonly COMPAMP = 16;
	public static readonly COMPPIPE = 17;
	public static readonly COMPCARET = 18;
	public static readonly DEFER = 19;
	public static readonly AT = 20;
	public static readonly BREAK = 21;
	public static readonly GOTO = 22;
	public static readonly DO = 23;
	public static readonly END = 24;
	public static readonly WHILE = 25;
	public static readonly REPEAT = 26;
	public static readonly UNTIL = 27;
	public static readonly IF = 28;
	public static readonly THEN = 29;
	public static readonly ELSEIF = 30;
	public static readonly ELSE = 31;
	public static readonly FOR = 32;
	public static readonly COMMA = 33;
	public static readonly IN = 34;
	public static readonly FUNCTION = 35;
	public static readonly LOCAL = 36;
	public static readonly LT = 37;
	public static readonly GT = 38;
	public static readonly RETURN = 39;
	public static readonly CONTINUE = 40;
	public static readonly CC = 41;
	public static readonly NIL = 42;
	public static readonly FALSE = 43;
	public static readonly TRUE = 44;
	public static readonly DOT = 45;
	public static readonly SQUIG = 46;
	public static readonly MINUS = 47;
	public static readonly POUND = 48;
	public static readonly OP = 49;
	public static readonly CP = 50;
	public static readonly NOT = 51;
	public static readonly LL = 52;
	public static readonly GG = 53;
	public static readonly AMP = 54;
	public static readonly SS = 55;
	public static readonly PER = 56;
	public static readonly COL = 57;
	public static readonly LE = 58;
	public static readonly GE = 59;
	public static readonly AND = 60;
	public static readonly OR = 61;
	public static readonly PLUS = 62;
	public static readonly STAR = 63;
	public static readonly OCU = 64;
	public static readonly CCU = 65;
	public static readonly OB = 66;
	public static readonly CB = 67;
	public static readonly EE = 68;
	public static readonly DD = 69;
	public static readonly PIPE = 70;
	public static readonly CARET = 71;
	public static readonly SLASH = 72;
	public static readonly DDD = 73;
	public static readonly SQEQ = 74;
	public static readonly NOTEQ_ALT = 75;
	public static readonly NAME = 76;
	public static readonly NORMALSTRING = 77;
	public static readonly CHARSTRING = 78;
	public static readonly JENKINSHASHSTRING = 79;
	public static readonly LONGSTRING = 80;
	public static readonly INT = 81;
	public static readonly HEX = 82;
	public static readonly FLOAT = 83;
	public static readonly HEX_FLOAT = 84;
	public static readonly COMMENT = 85;
	public static readonly C_COMMENT = 86;
	public static readonly WS = 87;
	public static readonly NL = 88;
	public static readonly SHEBANG = 89;
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
	public static readonly RULE_tablecomprehension = 16;
	public static readonly RULE_compactfunc = 17;
	public static readonly RULE_indexed_member = 18;
	public static readonly RULE_var = 19;
	public static readonly RULE_prefixexp = 20;
	public static readonly RULE_functioncall = 21;
	public static readonly RULE_compound = 22;
	public static readonly RULE_args = 23;
	public static readonly RULE_functiondef = 24;
	public static readonly RULE_funcbody = 25;
	public static readonly RULE_class = 26;
	public static readonly RULE_partype = 27;
	public static readonly RULE_defaultvalue = 28;
	public static readonly RULE_extendedpar = 29;
	public static readonly RULE_extendedparlist = 30;
	public static readonly RULE_parlist = 31;
	public static readonly RULE_tableconstructor = 32;
	public static readonly RULE_fieldlist = 33;
	public static readonly RULE_field = 34;
	public static readonly RULE_fieldsep = 35;
	public static readonly RULE_identifier = 36;
	public static readonly RULE_number = 37;
	public static readonly RULE_string = 38;
	public static readonly literalNames: (string | null)[] = [ null, "';'", 
                                                            "'='", "'new'", 
                                                            "'class'", "'extends'", 
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
		"newcall", "explist", "exp", "tablecomprehension", "compactfunc", "indexed_member", 
		"var", "prefixexp", "functioncall", "compound", "args", "functiondef", 
		"funcbody", "class", "partype", "defaultvalue", "extendedpar", "extendedparlist", 
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
			this.state = 78;
			this.chunk();
			this.state = 79;
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
			this.state = 81;
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
			this.state = 86;
			this._errHandler.sync(this);
			_alt = this._interp.adaptivePredict(this._input, 0, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 83;
					this.stat();
					}
					}
				}
				this.state = 88;
				this._errHandler.sync(this);
				_alt = this._interp.adaptivePredict(this._input, 0, this._ctx);
			}
			this.state = 90;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (((((_la - 21)) & ~0x1F) === 0 && ((1 << (_la - 21)) & 786433) !== 0)) {
				{
				this.state = 89;
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
			this.state = 207;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 8, this._ctx) ) {
			case 1:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 92;
				this.match(LuaParser.SEMI);
				}
				break;
			case 2:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 93;
				this.varlist();
				this.state = 94;
				this.match(LuaParser.EQ);
				this.state = 95;
				this.explist();
				}
				break;
			case 3:
				this.enterOuterAlt(localctx, 3);
				{
				this.state = 97;
				this.compound();
				}
				break;
			case 4:
				this.enterOuterAlt(localctx, 4);
				{
				this.state = 98;
				this.functioncall(0);
				}
				break;
			case 5:
				this.enterOuterAlt(localctx, 5);
				{
				this.state = 99;
				this.label();
				}
				break;
			case 6:
				this.enterOuterAlt(localctx, 6);
				{
				this.state = 100;
				this.match(LuaParser.BREAK);
				}
				break;
			case 7:
				this.enterOuterAlt(localctx, 7);
				{
				this.state = 101;
				this.match(LuaParser.GOTO);
				this.state = 102;
				this.identifier();
				}
				break;
			case 8:
				this.enterOuterAlt(localctx, 8);
				{
				this.state = 103;
				this.match(LuaParser.WHILE);
				this.state = 104;
				this.exp(0);
				this.state = 105;
				this.match(LuaParser.DO);
				this.state = 106;
				this.block();
				this.state = 107;
				this.match(LuaParser.END);
				}
				break;
			case 9:
				this.enterOuterAlt(localctx, 9);
				{
				this.state = 109;
				this.match(LuaParser.REPEAT);
				this.state = 110;
				this.block();
				this.state = 111;
				this.match(LuaParser.UNTIL);
				this.state = 112;
				this.exp(0);
				}
				break;
			case 10:
				this.enterOuterAlt(localctx, 10);
				{
				this.state = 114;
				this.match(LuaParser.IF);
				this.state = 115;
				this.exp(0);
				this.state = 116;
				this.match(LuaParser.THEN);
				this.state = 117;
				this.block();
				this.state = 125;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la===30) {
					{
					{
					this.state = 118;
					this.match(LuaParser.ELSEIF);
					this.state = 119;
					this.exp(0);
					this.state = 120;
					this.match(LuaParser.THEN);
					this.state = 121;
					this.block();
					}
					}
					this.state = 127;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 130;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===31) {
					{
					this.state = 128;
					this.match(LuaParser.ELSE);
					this.state = 129;
					this.block();
					}
				}

				this.state = 132;
				this.match(LuaParser.END);
				}
				break;
			case 11:
				this.enterOuterAlt(localctx, 11);
				{
				this.state = 134;
				this.match(LuaParser.FOR);
				this.state = 135;
				this.identifier();
				this.state = 136;
				this.match(LuaParser.EQ);
				this.state = 137;
				this.exp(0);
				this.state = 138;
				this.match(LuaParser.COMMA);
				this.state = 139;
				this.exp(0);
				this.state = 142;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===33) {
					{
					this.state = 140;
					this.match(LuaParser.COMMA);
					this.state = 141;
					this.exp(0);
					}
				}

				this.state = 144;
				this.match(LuaParser.DO);
				this.state = 145;
				this.block();
				this.state = 146;
				this.match(LuaParser.END);
				}
				break;
			case 12:
				this.enterOuterAlt(localctx, 12);
				{
				this.state = 148;
				this.match(LuaParser.FOR);
				this.state = 149;
				this.namelist();
				this.state = 150;
				this.match(LuaParser.IN);
				this.state = 151;
				this.explist();
				this.state = 152;
				this.match(LuaParser.DO);
				this.state = 153;
				this.block();
				this.state = 154;
				this.match(LuaParser.END);
				}
				break;
			case 13:
				this.enterOuterAlt(localctx, 13);
				{
				this.state = 156;
				this.match(LuaParser.DO);
				this.state = 157;
				this.block();
				this.state = 158;
				this.match(LuaParser.END);
				}
				break;
			case 14:
				this.enterOuterAlt(localctx, 14);
				{
				this.state = 163;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la===20) {
					{
					{
					this.state = 160;
					this.decorator();
					}
					}
					this.state = 165;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 166;
				this.match(LuaParser.FUNCTION);
				this.state = 167;
				this.funcname();
				this.state = 168;
				this.funcbody();
				}
				break;
			case 15:
				this.enterOuterAlt(localctx, 15);
				{
				this.state = 173;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la===20) {
					{
					{
					this.state = 170;
					this.decorator();
					}
					}
					this.state = 175;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 176;
				this.match(LuaParser.LOCAL);
				this.state = 177;
				this.match(LuaParser.FUNCTION);
				this.state = 178;
				this.identifier();
				this.state = 179;
				this.funcbody();
				}
				break;
			case 16:
				this.enterOuterAlt(localctx, 16);
				{
				this.state = 181;
				this.match(LuaParser.LOCAL);
				this.state = 182;
				this.attnamelist();
				this.state = 185;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===2) {
					{
					this.state = 183;
					this.match(LuaParser.EQ);
					this.state = 184;
					this.explist();
					}
				}

				}
				break;
			case 17:
				this.enterOuterAlt(localctx, 17);
				{
				this.state = 187;
				this.match(LuaParser.LOCAL);
				this.state = 188;
				this.attnamelist();
				this.state = 189;
				this.match(LuaParser.IN);
				this.state = 190;
				this.prefixexp();
				}
				break;
			case 18:
				this.enterOuterAlt(localctx, 18);
				{
				this.state = 192;
				this.match(LuaParser.DEFER);
				this.state = 193;
				this.block();
				this.state = 194;
				this.match(LuaParser.END);
				}
				break;
			case 19:
				this.enterOuterAlt(localctx, 19);
				{
				this.state = 196;
				this.match(LuaParser.TRY);
				this.state = 197;
				this.block();
				this.state = 198;
				this.match(LuaParser.CATCH);
				this.state = 199;
				this.identifier();
				this.state = 200;
				this.match(LuaParser.THEN);
				this.state = 201;
				this.block();
				this.state = 202;
				this.match(LuaParser.END);
				}
				break;
			case 20:
				this.enterOuterAlt(localctx, 20);
				{
				this.state = 204;
				this.match(LuaParser.THROW);
				this.state = 205;
				this.exp(0);
				}
				break;
			case 21:
				this.enterOuterAlt(localctx, 21);
				{
				this.state = 206;
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
			this.state = 209;
			this.identifier();
			this.state = 210;
			this.attrib();
			this.state = 217;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===33) {
				{
				{
				this.state = 211;
				this.match(LuaParser.COMMA);
				this.state = 212;
				this.identifier();
				this.state = 213;
				this.attrib();
				}
				}
				this.state = 219;
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
			this.state = 224;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===37) {
				{
				this.state = 220;
				this.match(LuaParser.LT);
				this.state = 221;
				this.identifier();
				this.state = 222;
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
			this.state = 232;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 39:
				{
				this.state = 226;
				this.match(LuaParser.RETURN);
				this.state = 228;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===3 || ((((_la - 35)) & ~0x1F) === 0 && ((1 << (_la - 35)) & 536968065) !== 0) || ((((_la - 73)) & ~0x1F) === 0 && ((1 << (_la - 73)) & 4089) !== 0)) {
					{
					this.state = 227;
					this.explist();
					}
				}

				}
				break;
			case 21:
				{
				this.state = 230;
				this.match(LuaParser.BREAK);
				}
				break;
			case 40:
				{
				this.state = 231;
				this.match(LuaParser.CONTINUE);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			this.state = 235;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===1) {
				{
				this.state = 234;
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
			this.state = 237;
			this.match(LuaParser.CC);
			this.state = 238;
			this.identifier();
			this.state = 239;
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
			this.state = 241;
			this.identifier();
			this.state = 246;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===45) {
				{
				{
				this.state = 242;
				this.match(LuaParser.DOT);
				this.state = 243;
				this.identifier();
				}
				}
				this.state = 248;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 251;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===57) {
				{
				this.state = 249;
				this.match(LuaParser.COL);
				this.state = 250;
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
			this.state = 253;
			this.var_();
			this.state = 258;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===33) {
				{
				{
				this.state = 254;
				this.match(LuaParser.COMMA);
				this.state = 255;
				this.var_();
				}
				}
				this.state = 260;
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
			this.state = 261;
			this.identifier();
			this.state = 266;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===33) {
				{
				{
				this.state = 262;
				this.match(LuaParser.COMMA);
				this.state = 263;
				this.identifier();
				}
				}
				this.state = 268;
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
			this.state = 269;
			this.match(LuaParser.AT);
			this.state = 270;
			this.var_();
			this.state = 271;
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
			this.state = 278;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===49) {
				{
				this.state = 273;
				this.match(LuaParser.OP);
				this.state = 275;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===3 || ((((_la - 35)) & ~0x1F) === 0 && ((1 << (_la - 35)) & 536968065) !== 0) || ((((_la - 73)) & ~0x1F) === 0 && ((1 << (_la - 73)) & 4089) !== 0)) {
					{
					this.state = 274;
					this.explist();
					}
				}

				this.state = 277;
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
			this.state = 280;
			this.match(LuaParser.NEW);
			this.state = 281;
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
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 283;
			this.exp(0);
			this.state = 288;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===33) {
				{
				{
				this.state = 284;
				this.match(LuaParser.COMMA);
				this.state = 285;
				this.exp(0);
				}
				}
				this.state = 290;
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
			this.state = 306;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 21, this._ctx) ) {
			case 1:
				{
				this.state = 292;
				this.match(LuaParser.NIL);
				}
				break;
			case 2:
				{
				this.state = 293;
				this.match(LuaParser.FALSE);
				}
				break;
			case 3:
				{
				this.state = 294;
				this.match(LuaParser.TRUE);
				}
				break;
			case 4:
				{
				this.state = 295;
				this.number_();
				}
				break;
			case 5:
				{
				this.state = 296;
				this.string_();
				}
				break;
			case 6:
				{
				this.state = 297;
				this.match(LuaParser.DDD);
				}
				break;
			case 7:
				{
				this.state = 298;
				this.newcall();
				}
				break;
			case 8:
				{
				this.state = 299;
				this.compactfunc();
				}
				break;
			case 9:
				{
				this.state = 300;
				this.tablecomprehension();
				}
				break;
			case 10:
				{
				this.state = 301;
				this.functiondef();
				}
				break;
			case 11:
				{
				this.state = 302;
				this.prefixexp();
				}
				break;
			case 12:
				{
				this.state = 303;
				this.tableconstructor();
				}
				break;
			case 13:
				{
				this.state = 304;
				_la = this._input.LA(1);
				if(!(((((_la - 46)) & ~0x1F) === 0 && ((1 << (_la - 46)) & 39) !== 0))) {
				this._errHandler.recoverInline(this);
				}
				else {
					this._errHandler.reportMatch(this);
				    this.consume();
				}
				this.state = 305;
				this.exp(10);
				}
				break;
			}
			this._ctx.stop = this._input.LT(-1);
			this.state = 344;
			this._errHandler.sync(this);
			_alt = this._interp.adaptivePredict(this._input, 23, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					if (this._parseListeners != null) {
						this.triggerExitRuleEvent();
					}
					_prevctx = localctx;
					{
					this.state = 342;
					this._errHandler.sync(this);
					switch ( this._interp.adaptivePredict(this._input, 22, this._ctx) ) {
					case 1:
						{
						localctx = new ExpContext(this, _parentctx, _parentState);
						this.pushNewRecursionContext(localctx, _startState, LuaParser.RULE_exp);
						this.state = 308;
						if (!(this.precpred(this._ctx, 11))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 11)");
						}
						{
						this.state = 309;
						this.match(LuaParser.CARET);
						}
						this.state = 310;
						this.exp(11);
						}
						break;
					case 2:
						{
						localctx = new ExpContext(this, _parentctx, _parentState);
						this.pushNewRecursionContext(localctx, _startState, LuaParser.RULE_exp);
						this.state = 311;
						if (!(this.precpred(this._ctx, 9))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 9)");
						}
						this.state = 312;
						_la = this._input.LA(1);
						if(!(((((_la - 55)) & ~0x1F) === 0 && ((1 << (_la - 55)) & 131331) !== 0))) {
						this._errHandler.recoverInline(this);
						}
						else {
							this._errHandler.reportMatch(this);
						    this.consume();
						}
						this.state = 313;
						this.exp(10);
						}
						break;
					case 3:
						{
						localctx = new ExpContext(this, _parentctx, _parentState);
						this.pushNewRecursionContext(localctx, _startState, LuaParser.RULE_exp);
						this.state = 314;
						if (!(this.precpred(this._ctx, 8))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 8)");
						}
						this.state = 315;
						_la = this._input.LA(1);
						if(!(_la===47 || _la===62)) {
						this._errHandler.recoverInline(this);
						}
						else {
							this._errHandler.reportMatch(this);
						    this.consume();
						}
						this.state = 316;
						this.exp(9);
						}
						break;
					case 4:
						{
						localctx = new ExpContext(this, _parentctx, _parentState);
						this.pushNewRecursionContext(localctx, _startState, LuaParser.RULE_exp);
						this.state = 317;
						if (!(this.precpred(this._ctx, 7))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 7)");
						}
						{
						this.state = 318;
						this.match(LuaParser.DD);
						}
						this.state = 319;
						this.exp(7);
						}
						break;
					case 5:
						{
						localctx = new ExpContext(this, _parentctx, _parentState);
						this.pushNewRecursionContext(localctx, _startState, LuaParser.RULE_exp);
						this.state = 320;
						if (!(this.precpred(this._ctx, 6))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 6)");
						}
						this.state = 321;
						_la = this._input.LA(1);
						if(!(((((_la - 37)) & ~0x1F) === 0 && ((1 << (_la - 37)) & 2153775107) !== 0) || _la===74 || _la===75)) {
						this._errHandler.recoverInline(this);
						}
						else {
							this._errHandler.reportMatch(this);
						    this.consume();
						}
						this.state = 322;
						this.exp(7);
						}
						break;
					case 6:
						{
						localctx = new ExpContext(this, _parentctx, _parentState);
						this.pushNewRecursionContext(localctx, _startState, LuaParser.RULE_exp);
						this.state = 323;
						if (!(this.precpred(this._ctx, 5))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 5)");
						}
						this.state = 324;
						_la = this._input.LA(1);
						if(!(_la===60 || _la===61)) {
						this._errHandler.recoverInline(this);
						}
						else {
							this._errHandler.reportMatch(this);
						    this.consume();
						}
						this.state = 325;
						this.exp(6);
						}
						break;
					case 7:
						{
						localctx = new ExpContext(this, _parentctx, _parentState);
						this.pushNewRecursionContext(localctx, _startState, LuaParser.RULE_exp);
						this.state = 326;
						if (!(this.precpred(this._ctx, 4))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 4)");
						}
						this.state = 327;
						_la = this._input.LA(1);
						if(!(((((_la - 46)) & ~0x1F) === 0 && ((1 << (_la - 46)) & 16777665) !== 0))) {
						this._errHandler.recoverInline(this);
						}
						else {
							this._errHandler.reportMatch(this);
						    this.consume();
						}
						this.state = 328;
						this.exp(5);
						}
						break;
					case 8:
						{
						localctx = new ExpContext(this, _parentctx, _parentState);
						this.pushNewRecursionContext(localctx, _startState, LuaParser.RULE_exp);
						this.state = 329;
						if (!(this.precpred(this._ctx, 3))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 3)");
						}
						this.state = 330;
						this.match(LuaParser.IN);
						this.state = 331;
						this.exp(4);
						}
						break;
					case 9:
						{
						localctx = new ExpContext(this, _parentctx, _parentState);
						this.pushNewRecursionContext(localctx, _startState, LuaParser.RULE_exp);
						this.state = 332;
						if (!(this.precpred(this._ctx, 2))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 2)");
						}
						this.state = 333;
						this.match(LuaParser.NOT);
						this.state = 334;
						this.match(LuaParser.IN);
						this.state = 335;
						this.exp(3);
						}
						break;
					case 10:
						{
						localctx = new ExpContext(this, _parentctx, _parentState);
						this.pushNewRecursionContext(localctx, _startState, LuaParser.RULE_exp);
						this.state = 336;
						if (!(this.precpred(this._ctx, 1))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 1)");
						}
						this.state = 337;
						this.match(LuaParser.QUESTMARK);
						this.state = 338;
						this.exp(0);
						this.state = 339;
						this.match(LuaParser.COL);
						this.state = 340;
						this.exp(2);
						}
						break;
					}
					}
				}
				this.state = 346;
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
			this.unrollRecursionContexts(_parentctx);
		}
		return localctx;
	}
	// @RuleVersion(0)
	public tablecomprehension(): TablecomprehensionContext {
		let localctx: TablecomprehensionContext = new TablecomprehensionContext(this, this._ctx, this.state);
		this.enterRule(localctx, 32, LuaParser.RULE_tablecomprehension);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 347;
			this.match(LuaParser.OCU);
			this.state = 348;
			this.exp(0);
			this.state = 351;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===33) {
				{
				this.state = 349;
				this.match(LuaParser.COMMA);
				this.state = 350;
				this.exp(0);
				}
			}

			this.state = 353;
			this.match(LuaParser.FOR);
			this.state = 354;
			this.namelist();
			this.state = 355;
			this.match(LuaParser.IN);
			this.state = 356;
			this.explist();
			this.state = 359;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===28) {
				{
				this.state = 357;
				this.match(LuaParser.IF);
				this.state = 358;
				this.exp(0);
				}
			}

			this.state = 361;
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
		this.enterRule(localctx, 34, LuaParser.RULE_compactfunc);
		let _la: number;
		try {
			this.state = 386;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 28, this._ctx) ) {
			case 1:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 364;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===49) {
					{
					this.state = 363;
					this.match(LuaParser.OP);
					}
				}

				this.state = 366;
				this.identifier();
				this.state = 368;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===50) {
					{
					this.state = 367;
					this.match(LuaParser.CP);
					}
				}

				this.state = 370;
				this.match(LuaParser.DO);
				this.state = 371;
				this.exp(0);
				}
				break;
			case 2:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 373;
				this.match(LuaParser.OP);
				this.state = 374;
				this.parlist();
				this.state = 375;
				this.match(LuaParser.CP);
				this.state = 376;
				this.match(LuaParser.DO);
				this.state = 377;
				this.block();
				this.state = 378;
				this.match(LuaParser.END);
				}
				break;
			case 3:
				this.enterOuterAlt(localctx, 3);
				{
				this.state = 380;
				this.match(LuaParser.OP);
				this.state = 381;
				this.parlist();
				this.state = 382;
				this.match(LuaParser.CP);
				this.state = 383;
				this.match(LuaParser.DO);
				this.state = 384;
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
		this.enterRule(localctx, 36, LuaParser.RULE_indexed_member);
		try {
			this.state = 397;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 66:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 388;
				this.match(LuaParser.OB);
				this.state = 389;
				this.exp(0);
				this.state = 390;
				this.match(LuaParser.CB);
				}
				break;
			case 45:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 392;
				this.match(LuaParser.DOT);
				this.state = 393;
				this.identifier();
				}
				break;
			case 9:
				this.enterOuterAlt(localctx, 3);
				{
				this.state = 394;
				this.match(LuaParser.QUESTMARK);
				this.state = 395;
				this.match(LuaParser.DOT);
				this.state = 396;
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
		this.enterRule(localctx, 38, LuaParser.RULE_var);
		try {
			this.state = 403;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 30, this._ctx) ) {
			case 1:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 399;
				this.identifier();
				}
				break;
			case 2:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 400;
				this.prefixexp();
				{
				this.state = 401;
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
		this.enterRule(localctx, 40, LuaParser.RULE_prefixexp);
		try {
			let _alt: number;
			this.state = 428;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 34, this._ctx) ) {
			case 1:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 405;
				this.identifier();
				this.state = 409;
				this._errHandler.sync(this);
				_alt = this._interp.adaptivePredict(this._input, 31, this._ctx);
				while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1) {
						{
						{
						this.state = 406;
						this.indexed_member();
						}
						}
					}
					this.state = 411;
					this._errHandler.sync(this);
					_alt = this._interp.adaptivePredict(this._input, 31, this._ctx);
				}
				}
				break;
			case 2:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 412;
				this.functioncall(0);
				this.state = 416;
				this._errHandler.sync(this);
				_alt = this._interp.adaptivePredict(this._input, 32, this._ctx);
				while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1) {
						{
						{
						this.state = 413;
						this.indexed_member();
						}
						}
					}
					this.state = 418;
					this._errHandler.sync(this);
					_alt = this._interp.adaptivePredict(this._input, 32, this._ctx);
				}
				}
				break;
			case 3:
				this.enterOuterAlt(localctx, 3);
				{
				this.state = 419;
				this.match(LuaParser.OP);
				this.state = 420;
				this.exp(0);
				this.state = 421;
				this.match(LuaParser.CP);
				this.state = 425;
				this._errHandler.sync(this);
				_alt = this._interp.adaptivePredict(this._input, 33, this._ctx);
				while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1) {
						{
						{
						this.state = 422;
						this.indexed_member();
						}
						}
					}
					this.state = 427;
					this._errHandler.sync(this);
					_alt = this._interp.adaptivePredict(this._input, 33, this._ctx);
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
		let _startState: number = 42;
		this.enterRecursionRule(localctx, 42, LuaParser.RULE_functioncall, _p);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 475;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 39, this._ctx) ) {
			case 1:
				{
				this.state = 431;
				this.identifier();
				this.state = 435;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la===9 || _la===45 || _la===66) {
					{
					{
					this.state = 432;
					this.indexed_member();
					}
					}
					this.state = 437;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 438;
				this.args();
				}
				break;
			case 2:
				{
				this.state = 440;
				this.match(LuaParser.OP);
				this.state = 441;
				this.exp(0);
				this.state = 442;
				this.match(LuaParser.CP);
				this.state = 446;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la===9 || _la===45 || _la===66) {
					{
					{
					this.state = 443;
					this.indexed_member();
					}
					}
					this.state = 448;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 449;
				this.args();
				}
				break;
			case 3:
				{
				this.state = 451;
				this.identifier();
				this.state = 455;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la===9 || _la===45 || _la===66) {
					{
					{
					this.state = 452;
					this.indexed_member();
					}
					}
					this.state = 457;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 458;
				this.match(LuaParser.COL);
				this.state = 459;
				this.identifier();
				this.state = 460;
				this.args();
				}
				break;
			case 4:
				{
				this.state = 462;
				this.match(LuaParser.OP);
				this.state = 463;
				this.exp(0);
				this.state = 464;
				this.match(LuaParser.CP);
				this.state = 468;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la===9 || _la===45 || _la===66) {
					{
					{
					this.state = 465;
					this.indexed_member();
					}
					}
					this.state = 470;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 471;
				this.match(LuaParser.COL);
				this.state = 472;
				this.identifier();
				this.state = 473;
				this.args();
				}
				break;
			}
			this._ctx.stop = this._input.LT(-1);
			this.state = 498;
			this._errHandler.sync(this);
			_alt = this._interp.adaptivePredict(this._input, 43, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					if (this._parseListeners != null) {
						this.triggerExitRuleEvent();
					}
					_prevctx = localctx;
					{
					this.state = 496;
					this._errHandler.sync(this);
					switch ( this._interp.adaptivePredict(this._input, 42, this._ctx) ) {
					case 1:
						{
						localctx = new FunctioncallContext(this, _parentctx, _parentState);
						this.pushNewRecursionContext(localctx, _startState, LuaParser.RULE_functioncall);
						this.state = 477;
						if (!(this.precpred(this._ctx, 5))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 5)");
						}
						this.state = 481;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
						while (_la===9 || _la===45 || _la===66) {
							{
							{
							this.state = 478;
							this.indexed_member();
							}
							}
							this.state = 483;
							this._errHandler.sync(this);
							_la = this._input.LA(1);
						}
						this.state = 484;
						this.args();
						}
						break;
					case 2:
						{
						localctx = new FunctioncallContext(this, _parentctx, _parentState);
						this.pushNewRecursionContext(localctx, _startState, LuaParser.RULE_functioncall);
						this.state = 485;
						if (!(this.precpred(this._ctx, 2))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 2)");
						}
						this.state = 489;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
						while (_la===9 || _la===45 || _la===66) {
							{
							{
							this.state = 486;
							this.indexed_member();
							}
							}
							this.state = 491;
							this._errHandler.sync(this);
							_la = this._input.LA(1);
						}
						this.state = 492;
						this.match(LuaParser.COL);
						this.state = 493;
						this.identifier();
						this.state = 494;
						this.args();
						}
						break;
					}
					}
				}
				this.state = 500;
				this._errHandler.sync(this);
				_alt = this._interp.adaptivePredict(this._input, 43, this._ctx);
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
		this.enterRule(localctx, 44, LuaParser.RULE_compound);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 501;
			this.var_();
			this.state = 502;
			_la = this._input.LA(1);
			if(!((((_la) & ~0x1F) === 0 && ((1 << _la) & 523264) !== 0))) {
			this._errHandler.recoverInline(this);
			}
			else {
				this._errHandler.reportMatch(this);
			    this.consume();
			}
			this.state = 503;
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
		this.enterRule(localctx, 46, LuaParser.RULE_args);
		let _la: number;
		try {
			this.state = 512;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 49:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 505;
				this.match(LuaParser.OP);
				this.state = 507;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===3 || ((((_la - 35)) & ~0x1F) === 0 && ((1 << (_la - 35)) & 536968065) !== 0) || ((((_la - 73)) & ~0x1F) === 0 && ((1 << (_la - 73)) & 4089) !== 0)) {
					{
					this.state = 506;
					this.explist();
					}
				}

				this.state = 509;
				this.match(LuaParser.CP);
				}
				break;
			case 64:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 510;
				this.tableconstructor();
				}
				break;
			case 77:
			case 78:
			case 79:
			case 80:
				this.enterOuterAlt(localctx, 3);
				{
				this.state = 511;
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
		this.enterRule(localctx, 48, LuaParser.RULE_functiondef);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 514;
			this.match(LuaParser.FUNCTION);
			this.state = 515;
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
		this.enterRule(localctx, 50, LuaParser.RULE_funcbody);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 517;
			this.match(LuaParser.OP);
			this.state = 518;
			this.parlist();
			this.state = 519;
			this.match(LuaParser.CP);
			this.state = 520;
			this.block();
			this.state = 521;
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
		this.enterRule(localctx, 52, LuaParser.RULE_class);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 526;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===20) {
				{
				{
				this.state = 523;
				this.decorator();
				}
				}
				this.state = 528;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 529;
			this.match(LuaParser.CLASS);
			this.state = 530;
			this.identifier();
			this.state = 533;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===5) {
				{
				this.state = 531;
				this.match(LuaParser.EXTENDS);
				this.state = 532;
				this.identifier();
				}
			}

			this.state = 535;
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
		this.enterRule(localctx, 54, LuaParser.RULE_partype);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 546;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===57) {
				{
				this.state = 537;
				this.match(LuaParser.COL);
				this.state = 538;
				this.identifier();
				this.state = 543;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la===70) {
					{
					{
					this.state = 539;
					this.match(LuaParser.PIPE);
					this.state = 540;
					this.identifier();
					}
					}
					this.state = 545;
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
		this.enterRule(localctx, 56, LuaParser.RULE_defaultvalue);
		try {
			this.state = 551;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 2:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 548;
				this.match(LuaParser.EQ);
				this.state = 549;
				this.exp(0);
				}
				break;
			case 33:
			case 50:
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
		this.enterRule(localctx, 58, LuaParser.RULE_extendedpar);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 553;
			this.identifier();
			this.state = 554;
			this.partype();
			this.state = 555;
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
		this.enterRule(localctx, 60, LuaParser.RULE_extendedparlist);
		try {
			let _alt: number;
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 557;
			this.extendedpar();
			this.state = 562;
			this._errHandler.sync(this);
			_alt = this._interp.adaptivePredict(this._input, 51, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 558;
					this.match(LuaParser.COMMA);
					this.state = 559;
					this.extendedpar();
					}
					}
				}
				this.state = 564;
				this._errHandler.sync(this);
				_alt = this._interp.adaptivePredict(this._input, 51, this._ctx);
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
		this.enterRule(localctx, 62, LuaParser.RULE_parlist);
		let _la: number;
		try {
			this.state = 572;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 3:
			case 76:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 565;
				this.extendedparlist();
				this.state = 568;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===33) {
					{
					this.state = 566;
					this.match(LuaParser.COMMA);
					this.state = 567;
					this.match(LuaParser.DDD);
					}
				}

				}
				break;
			case 73:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 570;
				this.match(LuaParser.DDD);
				}
				break;
			case 50:
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
		this.enterRule(localctx, 64, LuaParser.RULE_tableconstructor);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 574;
			this.match(LuaParser.OCU);
			this.state = 576;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===3 || _la===20 || ((((_la - 35)) & ~0x1F) === 0 && ((1 << (_la - 35)) & 2684452737) !== 0) || ((((_la - 73)) & ~0x1F) === 0 && ((1 << (_la - 73)) & 4089) !== 0)) {
				{
				this.state = 575;
				this.fieldlist();
				}
			}

			this.state = 578;
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
		this.enterRule(localctx, 66, LuaParser.RULE_fieldlist);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 580;
			this.field();
			this.state = 586;
			this._errHandler.sync(this);
			_alt = this._interp.adaptivePredict(this._input, 55, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 581;
					this.fieldsep();
					this.state = 582;
					this.field();
					}
					}
				}
				this.state = 588;
				this._errHandler.sync(this);
				_alt = this._interp.adaptivePredict(this._input, 55, this._ctx);
			}
			this.state = 590;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===1 || _la===33) {
				{
				this.state = 589;
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
		this.enterRule(localctx, 68, LuaParser.RULE_field);
		let _la: number;
		try {
			this.state = 625;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 59, this._ctx) ) {
			case 1:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 593;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				do {
					{
					{
					this.state = 592;
					this.decorator();
					}
					}
					this.state = 595;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				} while (_la===20);
				this.state = 597;
				this.match(LuaParser.OB);
				this.state = 598;
				this.exp(0);
				this.state = 599;
				this.match(LuaParser.CB);
				this.state = 600;
				this.match(LuaParser.EQ);
				this.state = 601;
				this.functiondef();
				}
				break;
			case 2:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 604;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				do {
					{
					{
					this.state = 603;
					this.decorator();
					}
					}
					this.state = 606;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				} while (_la===20);
				this.state = 608;
				this.identifier();
				this.state = 609;
				this.match(LuaParser.EQ);
				this.state = 610;
				this.functiondef();
				}
				break;
			case 3:
				this.enterOuterAlt(localctx, 3);
				{
				this.state = 612;
				this.match(LuaParser.OB);
				this.state = 613;
				this.exp(0);
				this.state = 614;
				this.match(LuaParser.CB);
				this.state = 615;
				this.match(LuaParser.EQ);
				this.state = 616;
				this.exp(0);
				}
				break;
			case 4:
				this.enterOuterAlt(localctx, 4);
				{
				this.state = 618;
				this.match(LuaParser.DOT);
				this.state = 619;
				this.identifier();
				}
				break;
			case 5:
				this.enterOuterAlt(localctx, 5);
				{
				this.state = 620;
				this.identifier();
				this.state = 621;
				this.match(LuaParser.EQ);
				this.state = 622;
				this.exp(0);
				}
				break;
			case 6:
				this.enterOuterAlt(localctx, 6);
				{
				this.state = 624;
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
		this.enterRule(localctx, 70, LuaParser.RULE_fieldsep);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 627;
			_la = this._input.LA(1);
			if(!(_la===1 || _la===33)) {
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
		this.enterRule(localctx, 72, LuaParser.RULE_identifier);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 629;
			_la = this._input.LA(1);
			if(!(_la===3 || _la===76)) {
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
		this.enterRule(localctx, 74, LuaParser.RULE_number);
		try {
			let _alt: number;
			this.state = 639;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 81:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 632;
				this._errHandler.sync(this);
				_alt = 1;
				do {
					switch (_alt) {
					case 1:
						{
						{
						this.state = 631;
						this.match(LuaParser.INT);
						}
						}
						break;
					default:
						throw new NoViableAltException(this);
					}
					this.state = 634;
					this._errHandler.sync(this);
					_alt = this._interp.adaptivePredict(this._input, 60, this._ctx);
				} while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER);
				}
				break;
			case 82:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 636;
				this.match(LuaParser.HEX);
				}
				break;
			case 83:
				this.enterOuterAlt(localctx, 3);
				{
				this.state = 637;
				this.match(LuaParser.FLOAT);
				}
				break;
			case 84:
				this.enterOuterAlt(localctx, 4);
				{
				this.state = 638;
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
		this.enterRule(localctx, 76, LuaParser.RULE_string);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 641;
			_la = this._input.LA(1);
			if(!(((((_la - 77)) & ~0x1F) === 0 && ((1 << (_la - 77)) & 15) !== 0))) {
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
		case 21:
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

	public static readonly _serializedATN: number[] = [4,1,89,644,2,0,7,0,2,
	1,7,1,2,2,7,2,2,3,7,3,2,4,7,4,2,5,7,5,2,6,7,6,2,7,7,7,2,8,7,8,2,9,7,9,2,
	10,7,10,2,11,7,11,2,12,7,12,2,13,7,13,2,14,7,14,2,15,7,15,2,16,7,16,2,17,
	7,17,2,18,7,18,2,19,7,19,2,20,7,20,2,21,7,21,2,22,7,22,2,23,7,23,2,24,7,
	24,2,25,7,25,2,26,7,26,2,27,7,27,2,28,7,28,2,29,7,29,2,30,7,30,2,31,7,31,
	2,32,7,32,2,33,7,33,2,34,7,34,2,35,7,35,2,36,7,36,2,37,7,37,2,38,7,38,1,
	0,1,0,1,0,1,1,1,1,1,2,5,2,85,8,2,10,2,12,2,88,9,2,1,2,3,2,91,8,2,1,3,1,
	3,1,3,1,3,1,3,1,3,1,3,1,3,1,3,1,3,1,3,1,3,1,3,1,3,1,3,1,3,1,3,1,3,1,3,1,
	3,1,3,1,3,1,3,1,3,1,3,1,3,1,3,1,3,1,3,1,3,1,3,5,3,124,8,3,10,3,12,3,127,
	9,3,1,3,1,3,3,3,131,8,3,1,3,1,3,1,3,1,3,1,3,1,3,1,3,1,3,1,3,1,3,3,3,143,
	8,3,1,3,1,3,1,3,1,3,1,3,1,3,1,3,1,3,1,3,1,3,1,3,1,3,1,3,1,3,1,3,1,3,1,3,
	5,3,162,8,3,10,3,12,3,165,9,3,1,3,1,3,1,3,1,3,1,3,5,3,172,8,3,10,3,12,3,
	175,9,3,1,3,1,3,1,3,1,3,1,3,1,3,1,3,1,3,1,3,3,3,186,8,3,1,3,1,3,1,3,1,3,
	1,3,1,3,1,3,1,3,1,3,1,3,1,3,1,3,1,3,1,3,1,3,1,3,1,3,1,3,1,3,1,3,3,3,208,
	8,3,1,4,1,4,1,4,1,4,1,4,1,4,5,4,216,8,4,10,4,12,4,219,9,4,1,5,1,5,1,5,1,
	5,3,5,225,8,5,1,6,1,6,3,6,229,8,6,1,6,1,6,3,6,233,8,6,1,6,3,6,236,8,6,1,
	7,1,7,1,7,1,7,1,8,1,8,1,8,5,8,245,8,8,10,8,12,8,248,9,8,1,8,1,8,3,8,252,
	8,8,1,9,1,9,1,9,5,9,257,8,9,10,9,12,9,260,9,9,1,10,1,10,1,10,5,10,265,8,
	10,10,10,12,10,268,9,10,1,11,1,11,1,11,1,11,1,12,1,12,3,12,276,8,12,1,12,
	3,12,279,8,12,1,13,1,13,1,13,1,14,1,14,1,14,5,14,287,8,14,10,14,12,14,290,
	9,14,1,15,1,15,1,15,1,15,1,15,1,15,1,15,1,15,1,15,1,15,1,15,1,15,1,15,1,
	15,1,15,3,15,307,8,15,1,15,1,15,1,15,1,15,1,15,1,15,1,15,1,15,1,15,1,15,
	1,15,1,15,1,15,1,15,1,15,1,15,1,15,1,15,1,15,1,15,1,15,1,15,1,15,1,15,1,
	15,1,15,1,15,1,15,1,15,1,15,1,15,1,15,1,15,1,15,5,15,343,8,15,10,15,12,
	15,346,9,15,1,16,1,16,1,16,1,16,3,16,352,8,16,1,16,1,16,1,16,1,16,1,16,
	1,16,3,16,360,8,16,1,16,1,16,1,17,3,17,365,8,17,1,17,1,17,3,17,369,8,17,
	1,17,1,17,1,17,1,17,1,17,1,17,1,17,1,17,1,17,1,17,1,17,1,17,1,17,1,17,1,
	17,1,17,3,17,387,8,17,1,18,1,18,1,18,1,18,1,18,1,18,1,18,1,18,1,18,3,18,
	398,8,18,1,19,1,19,1,19,1,19,3,19,404,8,19,1,20,1,20,5,20,408,8,20,10,20,
	12,20,411,9,20,1,20,1,20,5,20,415,8,20,10,20,12,20,418,9,20,1,20,1,20,1,
	20,1,20,5,20,424,8,20,10,20,12,20,427,9,20,3,20,429,8,20,1,21,1,21,1,21,
	5,21,434,8,21,10,21,12,21,437,9,21,1,21,1,21,1,21,1,21,1,21,1,21,5,21,445,
	8,21,10,21,12,21,448,9,21,1,21,1,21,1,21,1,21,5,21,454,8,21,10,21,12,21,
	457,9,21,1,21,1,21,1,21,1,21,1,21,1,21,1,21,1,21,5,21,467,8,21,10,21,12,
	21,470,9,21,1,21,1,21,1,21,1,21,3,21,476,8,21,1,21,1,21,5,21,480,8,21,10,
	21,12,21,483,9,21,1,21,1,21,1,21,5,21,488,8,21,10,21,12,21,491,9,21,1,21,
	1,21,1,21,1,21,5,21,497,8,21,10,21,12,21,500,9,21,1,22,1,22,1,22,1,22,1,
	23,1,23,3,23,508,8,23,1,23,1,23,1,23,3,23,513,8,23,1,24,1,24,1,24,1,25,
	1,25,1,25,1,25,1,25,1,25,1,26,5,26,525,8,26,10,26,12,26,528,9,26,1,26,1,
	26,1,26,1,26,3,26,534,8,26,1,26,1,26,1,27,1,27,1,27,1,27,5,27,542,8,27,
	10,27,12,27,545,9,27,3,27,547,8,27,1,28,1,28,1,28,3,28,552,8,28,1,29,1,
	29,1,29,1,29,1,30,1,30,1,30,5,30,561,8,30,10,30,12,30,564,9,30,1,31,1,31,
	1,31,3,31,569,8,31,1,31,1,31,3,31,573,8,31,1,32,1,32,3,32,577,8,32,1,32,
	1,32,1,33,1,33,1,33,1,33,5,33,585,8,33,10,33,12,33,588,9,33,1,33,3,33,591,
	8,33,1,34,4,34,594,8,34,11,34,12,34,595,1,34,1,34,1,34,1,34,1,34,1,34,1,
	34,4,34,605,8,34,11,34,12,34,606,1,34,1,34,1,34,1,34,1,34,1,34,1,34,1,34,
	1,34,1,34,1,34,1,34,1,34,1,34,1,34,1,34,1,34,3,34,626,8,34,1,35,1,35,1,
	36,1,36,1,37,4,37,633,8,37,11,37,12,37,634,1,37,1,37,1,37,3,37,640,8,37,
	1,38,1,38,1,38,0,2,30,42,39,0,2,4,6,8,10,12,14,16,18,20,22,24,26,28,30,
	32,34,36,38,40,42,44,46,48,50,52,54,56,58,60,62,64,66,68,70,72,74,76,0,
	10,2,0,46,48,51,51,3,0,55,56,63,63,72,72,2,0,47,47,62,62,4,0,37,38,58,59,
	68,68,74,75,1,0,60,61,3,0,46,46,52,54,70,70,1,0,10,18,2,0,1,1,33,33,2,0,
	3,3,76,76,1,0,77,80,718,0,78,1,0,0,0,2,81,1,0,0,0,4,86,1,0,0,0,6,207,1,
	0,0,0,8,209,1,0,0,0,10,224,1,0,0,0,12,232,1,0,0,0,14,237,1,0,0,0,16,241,
	1,0,0,0,18,253,1,0,0,0,20,261,1,0,0,0,22,269,1,0,0,0,24,278,1,0,0,0,26,
	280,1,0,0,0,28,283,1,0,0,0,30,306,1,0,0,0,32,347,1,0,0,0,34,386,1,0,0,0,
	36,397,1,0,0,0,38,403,1,0,0,0,40,428,1,0,0,0,42,475,1,0,0,0,44,501,1,0,
	0,0,46,512,1,0,0,0,48,514,1,0,0,0,50,517,1,0,0,0,52,526,1,0,0,0,54,546,
	1,0,0,0,56,551,1,0,0,0,58,553,1,0,0,0,60,557,1,0,0,0,62,572,1,0,0,0,64,
	574,1,0,0,0,66,580,1,0,0,0,68,625,1,0,0,0,70,627,1,0,0,0,72,629,1,0,0,0,
	74,639,1,0,0,0,76,641,1,0,0,0,78,79,3,2,1,0,79,80,5,0,0,1,80,1,1,0,0,0,
	81,82,3,4,2,0,82,3,1,0,0,0,83,85,3,6,3,0,84,83,1,0,0,0,85,88,1,0,0,0,86,
	84,1,0,0,0,86,87,1,0,0,0,87,90,1,0,0,0,88,86,1,0,0,0,89,91,3,12,6,0,90,
	89,1,0,0,0,90,91,1,0,0,0,91,5,1,0,0,0,92,208,5,1,0,0,93,94,3,18,9,0,94,
	95,5,2,0,0,95,96,3,28,14,0,96,208,1,0,0,0,97,208,3,44,22,0,98,208,3,42,
	21,0,99,208,3,14,7,0,100,208,5,21,0,0,101,102,5,22,0,0,102,208,3,72,36,
	0,103,104,5,25,0,0,104,105,3,30,15,0,105,106,5,23,0,0,106,107,3,4,2,0,107,
	108,5,24,0,0,108,208,1,0,0,0,109,110,5,26,0,0,110,111,3,4,2,0,111,112,5,
	27,0,0,112,113,3,30,15,0,113,208,1,0,0,0,114,115,5,28,0,0,115,116,3,30,
	15,0,116,117,5,29,0,0,117,125,3,4,2,0,118,119,5,30,0,0,119,120,3,30,15,
	0,120,121,5,29,0,0,121,122,3,4,2,0,122,124,1,0,0,0,123,118,1,0,0,0,124,
	127,1,0,0,0,125,123,1,0,0,0,125,126,1,0,0,0,126,130,1,0,0,0,127,125,1,0,
	0,0,128,129,5,31,0,0,129,131,3,4,2,0,130,128,1,0,0,0,130,131,1,0,0,0,131,
	132,1,0,0,0,132,133,5,24,0,0,133,208,1,0,0,0,134,135,5,32,0,0,135,136,3,
	72,36,0,136,137,5,2,0,0,137,138,3,30,15,0,138,139,5,33,0,0,139,142,3,30,
	15,0,140,141,5,33,0,0,141,143,3,30,15,0,142,140,1,0,0,0,142,143,1,0,0,0,
	143,144,1,0,0,0,144,145,5,23,0,0,145,146,3,4,2,0,146,147,5,24,0,0,147,208,
	1,0,0,0,148,149,5,32,0,0,149,150,3,20,10,0,150,151,5,34,0,0,151,152,3,28,
	14,0,152,153,5,23,0,0,153,154,3,4,2,0,154,155,5,24,0,0,155,208,1,0,0,0,
	156,157,5,23,0,0,157,158,3,4,2,0,158,159,5,24,0,0,159,208,1,0,0,0,160,162,
	3,22,11,0,161,160,1,0,0,0,162,165,1,0,0,0,163,161,1,0,0,0,163,164,1,0,0,
	0,164,166,1,0,0,0,165,163,1,0,0,0,166,167,5,35,0,0,167,168,3,16,8,0,168,
	169,3,50,25,0,169,208,1,0,0,0,170,172,3,22,11,0,171,170,1,0,0,0,172,175,
	1,0,0,0,173,171,1,0,0,0,173,174,1,0,0,0,174,176,1,0,0,0,175,173,1,0,0,0,
	176,177,5,36,0,0,177,178,5,35,0,0,178,179,3,72,36,0,179,180,3,50,25,0,180,
	208,1,0,0,0,181,182,5,36,0,0,182,185,3,8,4,0,183,184,5,2,0,0,184,186,3,
	28,14,0,185,183,1,0,0,0,185,186,1,0,0,0,186,208,1,0,0,0,187,188,5,36,0,
	0,188,189,3,8,4,0,189,190,5,34,0,0,190,191,3,40,20,0,191,208,1,0,0,0,192,
	193,5,19,0,0,193,194,3,4,2,0,194,195,5,24,0,0,195,208,1,0,0,0,196,197,5,
	6,0,0,197,198,3,4,2,0,198,199,5,7,0,0,199,200,3,72,36,0,200,201,5,29,0,
	0,201,202,3,4,2,0,202,203,5,24,0,0,203,208,1,0,0,0,204,205,5,8,0,0,205,
	208,3,30,15,0,206,208,3,52,26,0,207,92,1,0,0,0,207,93,1,0,0,0,207,97,1,
	0,0,0,207,98,1,0,0,0,207,99,1,0,0,0,207,100,1,0,0,0,207,101,1,0,0,0,207,
	103,1,0,0,0,207,109,1,0,0,0,207,114,1,0,0,0,207,134,1,0,0,0,207,148,1,0,
	0,0,207,156,1,0,0,0,207,163,1,0,0,0,207,173,1,0,0,0,207,181,1,0,0,0,207,
	187,1,0,0,0,207,192,1,0,0,0,207,196,1,0,0,0,207,204,1,0,0,0,207,206,1,0,
	0,0,208,7,1,0,0,0,209,210,3,72,36,0,210,217,3,10,5,0,211,212,5,33,0,0,212,
	213,3,72,36,0,213,214,3,10,5,0,214,216,1,0,0,0,215,211,1,0,0,0,216,219,
	1,0,0,0,217,215,1,0,0,0,217,218,1,0,0,0,218,9,1,0,0,0,219,217,1,0,0,0,220,
	221,5,37,0,0,221,222,3,72,36,0,222,223,5,38,0,0,223,225,1,0,0,0,224,220,
	1,0,0,0,224,225,1,0,0,0,225,11,1,0,0,0,226,228,5,39,0,0,227,229,3,28,14,
	0,228,227,1,0,0,0,228,229,1,0,0,0,229,233,1,0,0,0,230,233,5,21,0,0,231,
	233,5,40,0,0,232,226,1,0,0,0,232,230,1,0,0,0,232,231,1,0,0,0,233,235,1,
	0,0,0,234,236,5,1,0,0,235,234,1,0,0,0,235,236,1,0,0,0,236,13,1,0,0,0,237,
	238,5,41,0,0,238,239,3,72,36,0,239,240,5,41,0,0,240,15,1,0,0,0,241,246,
	3,72,36,0,242,243,5,45,0,0,243,245,3,72,36,0,244,242,1,0,0,0,245,248,1,
	0,0,0,246,244,1,0,0,0,246,247,1,0,0,0,247,251,1,0,0,0,248,246,1,0,0,0,249,
	250,5,57,0,0,250,252,3,72,36,0,251,249,1,0,0,0,251,252,1,0,0,0,252,17,1,
	0,0,0,253,258,3,38,19,0,254,255,5,33,0,0,255,257,3,38,19,0,256,254,1,0,
	0,0,257,260,1,0,0,0,258,256,1,0,0,0,258,259,1,0,0,0,259,19,1,0,0,0,260,
	258,1,0,0,0,261,266,3,72,36,0,262,263,5,33,0,0,263,265,3,72,36,0,264,262,
	1,0,0,0,265,268,1,0,0,0,266,264,1,0,0,0,266,267,1,0,0,0,267,21,1,0,0,0,
	268,266,1,0,0,0,269,270,5,20,0,0,270,271,3,38,19,0,271,272,3,24,12,0,272,
	23,1,0,0,0,273,275,5,49,0,0,274,276,3,28,14,0,275,274,1,0,0,0,275,276,1,
	0,0,0,276,277,1,0,0,0,277,279,5,50,0,0,278,273,1,0,0,0,278,279,1,0,0,0,
	279,25,1,0,0,0,280,281,5,3,0,0,281,282,3,42,21,0,282,27,1,0,0,0,283,288,
	3,30,15,0,284,285,5,33,0,0,285,287,3,30,15,0,286,284,1,0,0,0,287,290,1,
	0,0,0,288,286,1,0,0,0,288,289,1,0,0,0,289,29,1,0,0,0,290,288,1,0,0,0,291,
	292,6,15,-1,0,292,307,5,42,0,0,293,307,5,43,0,0,294,307,5,44,0,0,295,307,
	3,74,37,0,296,307,3,76,38,0,297,307,5,73,0,0,298,307,3,26,13,0,299,307,
	3,34,17,0,300,307,3,32,16,0,301,307,3,48,24,0,302,307,3,40,20,0,303,307,
	3,64,32,0,304,305,7,0,0,0,305,307,3,30,15,10,306,291,1,0,0,0,306,293,1,
	0,0,0,306,294,1,0,0,0,306,295,1,0,0,0,306,296,1,0,0,0,306,297,1,0,0,0,306,
	298,1,0,0,0,306,299,1,0,0,0,306,300,1,0,0,0,306,301,1,0,0,0,306,302,1,0,
	0,0,306,303,1,0,0,0,306,304,1,0,0,0,307,344,1,0,0,0,308,309,10,11,0,0,309,
	310,5,71,0,0,310,343,3,30,15,11,311,312,10,9,0,0,312,313,7,1,0,0,313,343,
	3,30,15,10,314,315,10,8,0,0,315,316,7,2,0,0,316,343,3,30,15,9,317,318,10,
	7,0,0,318,319,5,69,0,0,319,343,3,30,15,7,320,321,10,6,0,0,321,322,7,3,0,
	0,322,343,3,30,15,7,323,324,10,5,0,0,324,325,7,4,0,0,325,343,3,30,15,6,
	326,327,10,4,0,0,327,328,7,5,0,0,328,343,3,30,15,5,329,330,10,3,0,0,330,
	331,5,34,0,0,331,343,3,30,15,4,332,333,10,2,0,0,333,334,5,51,0,0,334,335,
	5,34,0,0,335,343,3,30,15,3,336,337,10,1,0,0,337,338,5,9,0,0,338,339,3,30,
	15,0,339,340,5,57,0,0,340,341,3,30,15,2,341,343,1,0,0,0,342,308,1,0,0,0,
	342,311,1,0,0,0,342,314,1,0,0,0,342,317,1,0,0,0,342,320,1,0,0,0,342,323,
	1,0,0,0,342,326,1,0,0,0,342,329,1,0,0,0,342,332,1,0,0,0,342,336,1,0,0,0,
	343,346,1,0,0,0,344,342,1,0,0,0,344,345,1,0,0,0,345,31,1,0,0,0,346,344,
	1,0,0,0,347,348,5,64,0,0,348,351,3,30,15,0,349,350,5,33,0,0,350,352,3,30,
	15,0,351,349,1,0,0,0,351,352,1,0,0,0,352,353,1,0,0,0,353,354,5,32,0,0,354,
	355,3,20,10,0,355,356,5,34,0,0,356,359,3,28,14,0,357,358,5,28,0,0,358,360,
	3,30,15,0,359,357,1,0,0,0,359,360,1,0,0,0,360,361,1,0,0,0,361,362,5,65,
	0,0,362,33,1,0,0,0,363,365,5,49,0,0,364,363,1,0,0,0,364,365,1,0,0,0,365,
	366,1,0,0,0,366,368,3,72,36,0,367,369,5,50,0,0,368,367,1,0,0,0,368,369,
	1,0,0,0,369,370,1,0,0,0,370,371,5,23,0,0,371,372,3,30,15,0,372,387,1,0,
	0,0,373,374,5,49,0,0,374,375,3,62,31,0,375,376,5,50,0,0,376,377,5,23,0,
	0,377,378,3,4,2,0,378,379,5,24,0,0,379,387,1,0,0,0,380,381,5,49,0,0,381,
	382,3,62,31,0,382,383,5,50,0,0,383,384,5,23,0,0,384,385,3,30,15,0,385,387,
	1,0,0,0,386,364,1,0,0,0,386,373,1,0,0,0,386,380,1,0,0,0,387,35,1,0,0,0,
	388,389,5,66,0,0,389,390,3,30,15,0,390,391,5,67,0,0,391,398,1,0,0,0,392,
	393,5,45,0,0,393,398,3,72,36,0,394,395,5,9,0,0,395,396,5,45,0,0,396,398,
	3,72,36,0,397,388,1,0,0,0,397,392,1,0,0,0,397,394,1,0,0,0,398,37,1,0,0,
	0,399,404,3,72,36,0,400,401,3,40,20,0,401,402,3,36,18,0,402,404,1,0,0,0,
	403,399,1,0,0,0,403,400,1,0,0,0,404,39,1,0,0,0,405,409,3,72,36,0,406,408,
	3,36,18,0,407,406,1,0,0,0,408,411,1,0,0,0,409,407,1,0,0,0,409,410,1,0,0,
	0,410,429,1,0,0,0,411,409,1,0,0,0,412,416,3,42,21,0,413,415,3,36,18,0,414,
	413,1,0,0,0,415,418,1,0,0,0,416,414,1,0,0,0,416,417,1,0,0,0,417,429,1,0,
	0,0,418,416,1,0,0,0,419,420,5,49,0,0,420,421,3,30,15,0,421,425,5,50,0,0,
	422,424,3,36,18,0,423,422,1,0,0,0,424,427,1,0,0,0,425,423,1,0,0,0,425,426,
	1,0,0,0,426,429,1,0,0,0,427,425,1,0,0,0,428,405,1,0,0,0,428,412,1,0,0,0,
	428,419,1,0,0,0,429,41,1,0,0,0,430,431,6,21,-1,0,431,435,3,72,36,0,432,
	434,3,36,18,0,433,432,1,0,0,0,434,437,1,0,0,0,435,433,1,0,0,0,435,436,1,
	0,0,0,436,438,1,0,0,0,437,435,1,0,0,0,438,439,3,46,23,0,439,476,1,0,0,0,
	440,441,5,49,0,0,441,442,3,30,15,0,442,446,5,50,0,0,443,445,3,36,18,0,444,
	443,1,0,0,0,445,448,1,0,0,0,446,444,1,0,0,0,446,447,1,0,0,0,447,449,1,0,
	0,0,448,446,1,0,0,0,449,450,3,46,23,0,450,476,1,0,0,0,451,455,3,72,36,0,
	452,454,3,36,18,0,453,452,1,0,0,0,454,457,1,0,0,0,455,453,1,0,0,0,455,456,
	1,0,0,0,456,458,1,0,0,0,457,455,1,0,0,0,458,459,5,57,0,0,459,460,3,72,36,
	0,460,461,3,46,23,0,461,476,1,0,0,0,462,463,5,49,0,0,463,464,3,30,15,0,
	464,468,5,50,0,0,465,467,3,36,18,0,466,465,1,0,0,0,467,470,1,0,0,0,468,
	466,1,0,0,0,468,469,1,0,0,0,469,471,1,0,0,0,470,468,1,0,0,0,471,472,5,57,
	0,0,472,473,3,72,36,0,473,474,3,46,23,0,474,476,1,0,0,0,475,430,1,0,0,0,
	475,440,1,0,0,0,475,451,1,0,0,0,475,462,1,0,0,0,476,498,1,0,0,0,477,481,
	10,5,0,0,478,480,3,36,18,0,479,478,1,0,0,0,480,483,1,0,0,0,481,479,1,0,
	0,0,481,482,1,0,0,0,482,484,1,0,0,0,483,481,1,0,0,0,484,497,3,46,23,0,485,
	489,10,2,0,0,486,488,3,36,18,0,487,486,1,0,0,0,488,491,1,0,0,0,489,487,
	1,0,0,0,489,490,1,0,0,0,490,492,1,0,0,0,491,489,1,0,0,0,492,493,5,57,0,
	0,493,494,3,72,36,0,494,495,3,46,23,0,495,497,1,0,0,0,496,477,1,0,0,0,496,
	485,1,0,0,0,497,500,1,0,0,0,498,496,1,0,0,0,498,499,1,0,0,0,499,43,1,0,
	0,0,500,498,1,0,0,0,501,502,3,38,19,0,502,503,7,6,0,0,503,504,3,30,15,0,
	504,45,1,0,0,0,505,507,5,49,0,0,506,508,3,28,14,0,507,506,1,0,0,0,507,508,
	1,0,0,0,508,509,1,0,0,0,509,513,5,50,0,0,510,513,3,64,32,0,511,513,3,76,
	38,0,512,505,1,0,0,0,512,510,1,0,0,0,512,511,1,0,0,0,513,47,1,0,0,0,514,
	515,5,35,0,0,515,516,3,50,25,0,516,49,1,0,0,0,517,518,5,49,0,0,518,519,
	3,62,31,0,519,520,5,50,0,0,520,521,3,4,2,0,521,522,5,24,0,0,522,51,1,0,
	0,0,523,525,3,22,11,0,524,523,1,0,0,0,525,528,1,0,0,0,526,524,1,0,0,0,526,
	527,1,0,0,0,527,529,1,0,0,0,528,526,1,0,0,0,529,530,5,4,0,0,530,533,3,72,
	36,0,531,532,5,5,0,0,532,534,3,72,36,0,533,531,1,0,0,0,533,534,1,0,0,0,
	534,535,1,0,0,0,535,536,3,64,32,0,536,53,1,0,0,0,537,538,5,57,0,0,538,543,
	3,72,36,0,539,540,5,70,0,0,540,542,3,72,36,0,541,539,1,0,0,0,542,545,1,
	0,0,0,543,541,1,0,0,0,543,544,1,0,0,0,544,547,1,0,0,0,545,543,1,0,0,0,546,
	537,1,0,0,0,546,547,1,0,0,0,547,55,1,0,0,0,548,549,5,2,0,0,549,552,3,30,
	15,0,550,552,1,0,0,0,551,548,1,0,0,0,551,550,1,0,0,0,552,57,1,0,0,0,553,
	554,3,72,36,0,554,555,3,54,27,0,555,556,3,56,28,0,556,59,1,0,0,0,557,562,
	3,58,29,0,558,559,5,33,0,0,559,561,3,58,29,0,560,558,1,0,0,0,561,564,1,
	0,0,0,562,560,1,0,0,0,562,563,1,0,0,0,563,61,1,0,0,0,564,562,1,0,0,0,565,
	568,3,60,30,0,566,567,5,33,0,0,567,569,5,73,0,0,568,566,1,0,0,0,568,569,
	1,0,0,0,569,573,1,0,0,0,570,573,5,73,0,0,571,573,1,0,0,0,572,565,1,0,0,
	0,572,570,1,0,0,0,572,571,1,0,0,0,573,63,1,0,0,0,574,576,5,64,0,0,575,577,
	3,66,33,0,576,575,1,0,0,0,576,577,1,0,0,0,577,578,1,0,0,0,578,579,5,65,
	0,0,579,65,1,0,0,0,580,586,3,68,34,0,581,582,3,70,35,0,582,583,3,68,34,
	0,583,585,1,0,0,0,584,581,1,0,0,0,585,588,1,0,0,0,586,584,1,0,0,0,586,587,
	1,0,0,0,587,590,1,0,0,0,588,586,1,0,0,0,589,591,3,70,35,0,590,589,1,0,0,
	0,590,591,1,0,0,0,591,67,1,0,0,0,592,594,3,22,11,0,593,592,1,0,0,0,594,
	595,1,0,0,0,595,593,1,0,0,0,595,596,1,0,0,0,596,597,1,0,0,0,597,598,5,66,
	0,0,598,599,3,30,15,0,599,600,5,67,0,0,600,601,5,2,0,0,601,602,3,48,24,
	0,602,626,1,0,0,0,603,605,3,22,11,0,604,603,1,0,0,0,605,606,1,0,0,0,606,
	604,1,0,0,0,606,607,1,0,0,0,607,608,1,0,0,0,608,609,3,72,36,0,609,610,5,
	2,0,0,610,611,3,48,24,0,611,626,1,0,0,0,612,613,5,66,0,0,613,614,3,30,15,
	0,614,615,5,67,0,0,615,616,5,2,0,0,616,617,3,30,15,0,617,626,1,0,0,0,618,
	619,5,45,0,0,619,626,3,72,36,0,620,621,3,72,36,0,621,622,5,2,0,0,622,623,
	3,30,15,0,623,626,1,0,0,0,624,626,3,30,15,0,625,593,1,0,0,0,625,604,1,0,
	0,0,625,612,1,0,0,0,625,618,1,0,0,0,625,620,1,0,0,0,625,624,1,0,0,0,626,
	69,1,0,0,0,627,628,7,7,0,0,628,71,1,0,0,0,629,630,7,8,0,0,630,73,1,0,0,
	0,631,633,5,81,0,0,632,631,1,0,0,0,633,634,1,0,0,0,634,632,1,0,0,0,634,
	635,1,0,0,0,635,640,1,0,0,0,636,640,5,82,0,0,637,640,5,83,0,0,638,640,5,
	84,0,0,639,632,1,0,0,0,639,636,1,0,0,0,639,637,1,0,0,0,639,638,1,0,0,0,
	640,75,1,0,0,0,641,642,7,9,0,0,642,77,1,0,0,0,62,86,90,125,130,142,163,
	173,185,207,217,224,228,232,235,246,251,258,266,275,278,288,306,342,344,
	351,359,364,368,386,397,403,409,416,425,428,435,446,455,468,475,481,489,
	496,498,507,512,526,533,543,546,551,562,568,572,576,586,590,595,606,625,
	634,639];

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
