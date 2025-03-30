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
	public static readonly RULE_argument = 25;
	public static readonly RULE_argumentlist = 26;
	public static readonly RULE_args = 27;
	public static readonly RULE_functiondef = 28;
	public static readonly RULE_funcbody = 29;
	public static readonly RULE_class = 30;
	public static readonly RULE_partype = 31;
	public static readonly RULE_defaultvalue = 32;
	public static readonly RULE_extendedpar = 33;
	public static readonly RULE_extendedparlist = 34;
	public static readonly RULE_parlist = 35;
	public static readonly RULE_tableconstructor = 36;
	public static readonly RULE_fieldlist = 37;
	public static readonly RULE_field = 38;
	public static readonly RULE_fieldsep = 39;
	public static readonly RULE_identifier = 40;
	public static readonly RULE_number = 41;
	public static readonly RULE_string = 42;
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
		"argument", "argumentlist", "args", "functiondef", "funcbody", "class", 
		"partype", "defaultvalue", "extendedpar", "extendedparlist", "parlist", 
		"tableconstructor", "fieldlist", "field", "fieldsep", "identifier", "number", 
		"string",
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
			this.state = 86;
			this.chunk();
			this.state = 87;
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
			this.state = 89;
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
			this.state = 94;
			this._errHandler.sync(this);
			_alt = this._interp.adaptivePredict(this._input, 0, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 91;
					this.stat();
					}
					}
				}
				this.state = 96;
				this._errHandler.sync(this);
				_alt = this._interp.adaptivePredict(this._input, 0, this._ctx);
			}
			this.state = 98;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (((((_la - 23)) & ~0x1F) === 0 && ((1 << (_la - 23)) & 786433) !== 0)) {
				{
				this.state = 97;
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
			this.state = 242;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 14, this._ctx) ) {
			case 1:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 100;
				this.match(LuaParser.SEMI);
				}
				break;
			case 2:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 101;
				this.varlist();
				this.state = 102;
				this.match(LuaParser.EQ);
				this.state = 103;
				this.explist();
				}
				break;
			case 3:
				this.enterOuterAlt(localctx, 3);
				{
				this.state = 105;
				this.compound();
				}
				break;
			case 4:
				this.enterOuterAlt(localctx, 4);
				{
				this.state = 107;
				this._errHandler.sync(this);
				switch ( this._interp.adaptivePredict(this._input, 2, this._ctx) ) {
				case 1:
					{
					this.state = 106;
					this.match(LuaParser.NEW);
					}
					break;
				}
				this.state = 109;
				this.functioncall(0);
				}
				break;
			case 5:
				this.enterOuterAlt(localctx, 5);
				{
				this.state = 110;
				this.label();
				}
				break;
			case 6:
				this.enterOuterAlt(localctx, 6);
				{
				this.state = 111;
				this.match(LuaParser.BREAK);
				}
				break;
			case 7:
				this.enterOuterAlt(localctx, 7);
				{
				this.state = 112;
				this.match(LuaParser.GOTO);
				this.state = 113;
				this.identifier();
				}
				break;
			case 8:
				this.enterOuterAlt(localctx, 8);
				{
				this.state = 114;
				this.match(LuaParser.WHILE);
				this.state = 115;
				this.exp(0);
				this.state = 116;
				this.match(LuaParser.DO);
				this.state = 117;
				this.block();
				this.state = 118;
				this.match(LuaParser.END);
				}
				break;
			case 9:
				this.enterOuterAlt(localctx, 9);
				{
				this.state = 120;
				this.match(LuaParser.REPEAT);
				this.state = 121;
				this.block();
				this.state = 122;
				this.match(LuaParser.UNTIL);
				this.state = 123;
				this.exp(0);
				}
				break;
			case 10:
				this.enterOuterAlt(localctx, 10);
				{
				this.state = 125;
				this.match(LuaParser.IF);
				this.state = 126;
				this.exp(0);
				this.state = 127;
				this.match(LuaParser.THEN);
				this.state = 128;
				this.block();
				this.state = 136;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la===32) {
					{
					{
					this.state = 129;
					this.match(LuaParser.ELSEIF);
					this.state = 130;
					this.exp(0);
					this.state = 131;
					this.match(LuaParser.THEN);
					this.state = 132;
					this.block();
					}
					}
					this.state = 138;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 141;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===33) {
					{
					this.state = 139;
					this.match(LuaParser.ELSE);
					this.state = 140;
					this.block();
					}
				}

				this.state = 143;
				this.match(LuaParser.END);
				}
				break;
			case 11:
				this.enterOuterAlt(localctx, 11);
				{
				this.state = 145;
				this.match(LuaParser.FOR);
				this.state = 146;
				this.identifier();
				this.state = 147;
				this.match(LuaParser.EQ);
				this.state = 148;
				this.exp(0);
				this.state = 149;
				this.match(LuaParser.COMMA);
				this.state = 150;
				this.exp(0);
				this.state = 153;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===35) {
					{
					this.state = 151;
					this.match(LuaParser.COMMA);
					this.state = 152;
					this.exp(0);
					}
				}

				this.state = 155;
				this.match(LuaParser.DO);
				this.state = 156;
				this.block();
				this.state = 157;
				this.match(LuaParser.END);
				}
				break;
			case 12:
				this.enterOuterAlt(localctx, 12);
				{
				this.state = 159;
				this.match(LuaParser.FOR);
				this.state = 160;
				this.namelist();
				this.state = 161;
				this.match(LuaParser.IN);
				this.state = 162;
				this.explist();
				this.state = 163;
				this.match(LuaParser.DO);
				this.state = 164;
				this.block();
				this.state = 165;
				this.match(LuaParser.END);
				}
				break;
			case 13:
				this.enterOuterAlt(localctx, 13);
				{
				this.state = 167;
				this.match(LuaParser.DO);
				this.state = 168;
				this.block();
				this.state = 169;
				this.match(LuaParser.END);
				}
				break;
			case 14:
				this.enterOuterAlt(localctx, 14);
				{
				this.state = 174;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la===22) {
					{
					{
					this.state = 171;
					this.decorator();
					}
					}
					this.state = 176;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 177;
				this.match(LuaParser.FUNCTION);
				this.state = 178;
				this.funcname();
				this.state = 179;
				this.funcbody();
				}
				break;
			case 15:
				this.enterOuterAlt(localctx, 15);
				{
				this.state = 184;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la===22) {
					{
					{
					this.state = 181;
					this.decorator();
					}
					}
					this.state = 186;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 187;
				this.match(LuaParser.LOCAL);
				this.state = 188;
				this.match(LuaParser.FUNCTION);
				this.state = 189;
				this.identifier();
				this.state = 190;
				this.funcbody();
				}
				break;
			case 16:
				this.enterOuterAlt(localctx, 16);
				{
				this.state = 192;
				this.match(LuaParser.FILTER);
				this.state = 193;
				this.funcname();
				this.state = 198;
				this._errHandler.sync(this);
				switch ( this._interp.adaptivePredict(this._input, 8, this._ctx) ) {
				case 1:
					{
					this.state = 194;
					this.match(LuaParser.OP);
					this.state = 195;
					this.parlist();
					this.state = 196;
					this.match(LuaParser.CP);
					}
					break;
				}
				this.state = 200;
				this.filterfieldlist();
				this.state = 201;
				this.match(LuaParser.END);
				}
				break;
			case 17:
				this.enterOuterAlt(localctx, 17);
				{
				this.state = 203;
				this.match(LuaParser.USING);
				this.state = 204;
				this.identifier();
				this.state = 210;
				this._errHandler.sync(this);
				switch ( this._interp.adaptivePredict(this._input, 10, this._ctx) ) {
				case 1:
					{
					this.state = 205;
					this.match(LuaParser.OP);
					this.state = 207;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					if ((((_la) & ~0x1F) === 0 && ((1 << _la) & 2098168) !== 0) || ((((_la - 37)) & ~0x1F) === 0 && ((1 << (_la - 37)) & 536968065) !== 0) || ((((_la - 75)) & ~0x1F) === 0 && ((1 << (_la - 75)) & 4089) !== 0)) {
						{
						this.state = 206;
						this.explist();
						}
					}

					this.state = 209;
					this.match(LuaParser.CP);
					}
					break;
				}
				}
				break;
			case 18:
				this.enterOuterAlt(localctx, 18);
				{
				this.state = 212;
				this.match(LuaParser.LOCAL);
				this.state = 213;
				this.attnamelist();
				this.state = 216;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===2) {
					{
					this.state = 214;
					this.match(LuaParser.EQ);
					this.state = 215;
					this.explist();
					}
				}

				}
				break;
			case 19:
				this.enterOuterAlt(localctx, 19);
				{
				this.state = 218;
				this.match(LuaParser.LOCAL);
				this.state = 219;
				this.attnamelist();
				this.state = 220;
				this.match(LuaParser.IN);
				this.state = 221;
				this.prefixexp();
				}
				break;
			case 20:
				this.enterOuterAlt(localctx, 20);
				{
				this.state = 223;
				this.match(LuaParser.DEFER);
				this.state = 224;
				this.block();
				this.state = 225;
				this.match(LuaParser.END);
				}
				break;
			case 21:
				this.enterOuterAlt(localctx, 21);
				{
				this.state = 227;
				this.match(LuaParser.TRY);
				this.state = 228;
				this.block();
				this.state = 229;
				this.match(LuaParser.CATCH);
				this.state = 234;
				this._errHandler.sync(this);
				switch ( this._interp.adaptivePredict(this._input, 13, this._ctx) ) {
				case 1:
					{
					this.state = 230;
					this.identifier();
					this.state = 232;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					if (_la===31) {
						{
						this.state = 231;
						this.match(LuaParser.THEN);
						}
					}

					}
					break;
				}
				this.state = 236;
				this.block();
				this.state = 237;
				this.match(LuaParser.END);
				}
				break;
			case 22:
				this.enterOuterAlt(localctx, 22);
				{
				this.state = 239;
				this.match(LuaParser.THROW);
				this.state = 240;
				this.exp(0);
				}
				break;
			case 23:
				this.enterOuterAlt(localctx, 23);
				{
				this.state = 241;
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
			this.state = 244;
			this.identifier();
			this.state = 245;
			this.attrib();
			this.state = 252;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===35) {
				{
				{
				this.state = 246;
				this.match(LuaParser.COMMA);
				this.state = 247;
				this.identifier();
				this.state = 248;
				this.attrib();
				}
				}
				this.state = 254;
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
			this.state = 259;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===39) {
				{
				this.state = 255;
				this.match(LuaParser.LT);
				this.state = 256;
				this.identifier();
				this.state = 257;
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
			this.state = 267;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 41:
				{
				this.state = 261;
				this.match(LuaParser.RETURN);
				this.state = 263;
				this._errHandler.sync(this);
				switch ( this._interp.adaptivePredict(this._input, 17, this._ctx) ) {
				case 1:
					{
					this.state = 262;
					this.explist();
					}
					break;
				}
				}
				break;
			case 23:
				{
				this.state = 265;
				this.match(LuaParser.BREAK);
				}
				break;
			case 42:
				{
				this.state = 266;
				this.match(LuaParser.CONTINUE);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			this.state = 270;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===1) {
				{
				this.state = 269;
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
			this.state = 272;
			this.match(LuaParser.CC);
			this.state = 273;
			this.identifier();
			this.state = 274;
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
			this.state = 276;
			this.identifier();
			this.state = 281;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===47) {
				{
				{
				this.state = 277;
				this.match(LuaParser.DOT);
				this.state = 278;
				this.identifier();
				}
				}
				this.state = 283;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 286;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===59) {
				{
				this.state = 284;
				this.match(LuaParser.COL);
				this.state = 285;
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
			this.state = 288;
			this.var_();
			this.state = 293;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===35) {
				{
				{
				this.state = 289;
				this.match(LuaParser.COMMA);
				this.state = 290;
				this.var_();
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
	public namelist(): NamelistContext {
		let localctx: NamelistContext = new NamelistContext(this, this._ctx, this.state);
		this.enterRule(localctx, 20, LuaParser.RULE_namelist);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 296;
			this.identifier();
			this.state = 301;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===35) {
				{
				{
				this.state = 297;
				this.match(LuaParser.COMMA);
				this.state = 298;
				this.identifier();
				}
				}
				this.state = 303;
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
			this.state = 304;
			this.match(LuaParser.AT);
			this.state = 305;
			this.var_();
			this.state = 306;
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
			this.state = 313;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===51) {
				{
				this.state = 308;
				this.match(LuaParser.OP);
				this.state = 310;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if ((((_la) & ~0x1F) === 0 && ((1 << _la) & 2098168) !== 0) || ((((_la - 37)) & ~0x1F) === 0 && ((1 << (_la - 37)) & 536968065) !== 0) || ((((_la - 75)) & ~0x1F) === 0 && ((1 << (_la - 75)) & 4089) !== 0)) {
					{
					this.state = 309;
					this.explist();
					}
				}

				this.state = 312;
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
			this.state = 315;
			this.match(LuaParser.NEW);
			this.state = 316;
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
			this.state = 318;
			this.exp(0);
			this.state = 323;
			this._errHandler.sync(this);
			_alt = this._interp.adaptivePredict(this._input, 26, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 319;
					this.match(LuaParser.COMMA);
					this.state = 320;
					this.exp(0);
					}
					}
				}
				this.state = 325;
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
			this.state = 341;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 27, this._ctx) ) {
			case 1:
				{
				this.state = 327;
				this.match(LuaParser.NIL);
				}
				break;
			case 2:
				{
				this.state = 328;
				this.match(LuaParser.FALSE);
				}
				break;
			case 3:
				{
				this.state = 329;
				this.match(LuaParser.TRUE);
				}
				break;
			case 4:
				{
				this.state = 330;
				this.number_();
				}
				break;
			case 5:
				{
				this.state = 331;
				this.string_();
				}
				break;
			case 6:
				{
				this.state = 332;
				this.match(LuaParser.DDD);
				}
				break;
			case 7:
				{
				this.state = 333;
				this.newcall();
				}
				break;
			case 8:
				{
				this.state = 334;
				this.compactfunc();
				}
				break;
			case 9:
				{
				this.state = 335;
				this.tablecomprehension();
				}
				break;
			case 10:
				{
				this.state = 336;
				this.functiondef();
				}
				break;
			case 11:
				{
				this.state = 337;
				this.prefixexp();
				}
				break;
			case 12:
				{
				this.state = 338;
				this.tableconstructor();
				}
				break;
			case 13:
				{
				this.state = 339;
				_la = this._input.LA(1);
				if(!(((((_la - 48)) & ~0x1F) === 0 && ((1 << (_la - 48)) & 39) !== 0))) {
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
			}
			this._ctx.stop = this._input.LT(-1);
			this.state = 379;
			this._errHandler.sync(this);
			_alt = this._interp.adaptivePredict(this._input, 29, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					if (this._parseListeners != null) {
						this.triggerExitRuleEvent();
					}
					_prevctx = localctx;
					{
					this.state = 377;
					this._errHandler.sync(this);
					switch ( this._interp.adaptivePredict(this._input, 28, this._ctx) ) {
					case 1:
						{
						localctx = new ExpContext(this, _parentctx, _parentState);
						this.pushNewRecursionContext(localctx, _startState, LuaParser.RULE_exp);
						this.state = 343;
						if (!(this.precpred(this._ctx, 11))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 11)");
						}
						{
						this.state = 344;
						this.match(LuaParser.CARET);
						}
						this.state = 345;
						this.exp(11);
						}
						break;
					case 2:
						{
						localctx = new ExpContext(this, _parentctx, _parentState);
						this.pushNewRecursionContext(localctx, _startState, LuaParser.RULE_exp);
						this.state = 346;
						if (!(this.precpred(this._ctx, 9))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 9)");
						}
						this.state = 347;
						_la = this._input.LA(1);
						if(!(((((_la - 57)) & ~0x1F) === 0 && ((1 << (_la - 57)) & 131331) !== 0))) {
						this._errHandler.recoverInline(this);
						}
						else {
							this._errHandler.reportMatch(this);
						    this.consume();
						}
						this.state = 348;
						this.exp(10);
						}
						break;
					case 3:
						{
						localctx = new ExpContext(this, _parentctx, _parentState);
						this.pushNewRecursionContext(localctx, _startState, LuaParser.RULE_exp);
						this.state = 349;
						if (!(this.precpred(this._ctx, 8))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 8)");
						}
						this.state = 350;
						_la = this._input.LA(1);
						if(!(_la===49 || _la===64)) {
						this._errHandler.recoverInline(this);
						}
						else {
							this._errHandler.reportMatch(this);
						    this.consume();
						}
						this.state = 351;
						this.exp(9);
						}
						break;
					case 4:
						{
						localctx = new ExpContext(this, _parentctx, _parentState);
						this.pushNewRecursionContext(localctx, _startState, LuaParser.RULE_exp);
						this.state = 352;
						if (!(this.precpred(this._ctx, 7))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 7)");
						}
						{
						this.state = 353;
						this.match(LuaParser.DD);
						}
						this.state = 354;
						this.exp(7);
						}
						break;
					case 5:
						{
						localctx = new ExpContext(this, _parentctx, _parentState);
						this.pushNewRecursionContext(localctx, _startState, LuaParser.RULE_exp);
						this.state = 355;
						if (!(this.precpred(this._ctx, 6))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 6)");
						}
						this.state = 356;
						_la = this._input.LA(1);
						if(!(((((_la - 39)) & ~0x1F) === 0 && ((1 << (_la - 39)) & 2153775107) !== 0) || _la===76 || _la===77)) {
						this._errHandler.recoverInline(this);
						}
						else {
							this._errHandler.reportMatch(this);
						    this.consume();
						}
						this.state = 357;
						this.exp(7);
						}
						break;
					case 6:
						{
						localctx = new ExpContext(this, _parentctx, _parentState);
						this.pushNewRecursionContext(localctx, _startState, LuaParser.RULE_exp);
						this.state = 358;
						if (!(this.precpred(this._ctx, 5))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 5)");
						}
						this.state = 359;
						_la = this._input.LA(1);
						if(!(_la===62 || _la===63)) {
						this._errHandler.recoverInline(this);
						}
						else {
							this._errHandler.reportMatch(this);
						    this.consume();
						}
						this.state = 360;
						this.exp(6);
						}
						break;
					case 7:
						{
						localctx = new ExpContext(this, _parentctx, _parentState);
						this.pushNewRecursionContext(localctx, _startState, LuaParser.RULE_exp);
						this.state = 361;
						if (!(this.precpred(this._ctx, 4))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 4)");
						}
						this.state = 362;
						_la = this._input.LA(1);
						if(!(((((_la - 48)) & ~0x1F) === 0 && ((1 << (_la - 48)) & 16777665) !== 0))) {
						this._errHandler.recoverInline(this);
						}
						else {
							this._errHandler.reportMatch(this);
						    this.consume();
						}
						this.state = 363;
						this.exp(5);
						}
						break;
					case 8:
						{
						localctx = new ExpContext(this, _parentctx, _parentState);
						this.pushNewRecursionContext(localctx, _startState, LuaParser.RULE_exp);
						this.state = 364;
						if (!(this.precpred(this._ctx, 3))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 3)");
						}
						this.state = 365;
						this.match(LuaParser.IN);
						this.state = 366;
						this.exp(4);
						}
						break;
					case 9:
						{
						localctx = new ExpContext(this, _parentctx, _parentState);
						this.pushNewRecursionContext(localctx, _startState, LuaParser.RULE_exp);
						this.state = 367;
						if (!(this.precpred(this._ctx, 2))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 2)");
						}
						this.state = 368;
						this.match(LuaParser.NOT);
						this.state = 369;
						this.match(LuaParser.IN);
						this.state = 370;
						this.exp(3);
						}
						break;
					case 10:
						{
						localctx = new ExpContext(this, _parentctx, _parentState);
						this.pushNewRecursionContext(localctx, _startState, LuaParser.RULE_exp);
						this.state = 371;
						if (!(this.precpred(this._ctx, 1))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 1)");
						}
						this.state = 372;
						this.match(LuaParser.QUESTMARK);
						this.state = 373;
						this.exp(0);
						this.state = 374;
						this.match(LuaParser.COL);
						this.state = 375;
						this.exp(2);
						}
						break;
					}
					}
				}
				this.state = 381;
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
			this.state = 382;
			this.exp(0);
			this.state = 385;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===33) {
				{
				this.state = 383;
				this.match(LuaParser.ELSE);
				this.state = 384;
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
			this.state = 387;
			this.filterfield();
			this.state = 393;
			this._errHandler.sync(this);
			_alt = this._interp.adaptivePredict(this._input, 31, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 388;
					this.fieldsep();
					this.state = 389;
					this.filterfield();
					}
					}
				}
				this.state = 395;
				this._errHandler.sync(this);
				_alt = this._interp.adaptivePredict(this._input, 31, this._ctx);
			}
			this.state = 397;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===1 || _la===35) {
				{
				this.state = 396;
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
			this.state = 399;
			this.match(LuaParser.OCU);
			this.state = 400;
			this.exp(0);
			this.state = 403;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===35) {
				{
				this.state = 401;
				this.match(LuaParser.COMMA);
				this.state = 402;
				this.exp(0);
				}
			}

			this.state = 405;
			this.match(LuaParser.FOR);
			this.state = 406;
			this.namelist();
			this.state = 407;
			this.match(LuaParser.IN);
			this.state = 408;
			this.explist();
			this.state = 411;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===30) {
				{
				this.state = 409;
				this.match(LuaParser.IF);
				this.state = 410;
				this.exp(0);
				}
			}

			this.state = 413;
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
			this.state = 438;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 37, this._ctx) ) {
			case 1:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 416;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===51) {
					{
					this.state = 415;
					this.match(LuaParser.OP);
					}
				}

				this.state = 418;
				this.identifier();
				this.state = 420;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===52) {
					{
					this.state = 419;
					this.match(LuaParser.CP);
					}
				}

				this.state = 422;
				this.match(LuaParser.DO);
				this.state = 423;
				this.exp(0);
				}
				break;
			case 2:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 425;
				this.match(LuaParser.OP);
				this.state = 426;
				this.parlist();
				this.state = 427;
				this.match(LuaParser.CP);
				this.state = 428;
				this.match(LuaParser.DO);
				this.state = 429;
				this.block();
				this.state = 430;
				this.match(LuaParser.END);
				}
				break;
			case 3:
				this.enterOuterAlt(localctx, 3);
				{
				this.state = 432;
				this.match(LuaParser.OP);
				this.state = 433;
				this.parlist();
				this.state = 434;
				this.match(LuaParser.CP);
				this.state = 435;
				this.match(LuaParser.DO);
				this.state = 436;
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
			this.state = 449;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 68:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 440;
				this.match(LuaParser.OB);
				this.state = 441;
				this.exp(0);
				this.state = 442;
				this.match(LuaParser.CB);
				}
				break;
			case 47:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 444;
				this.match(LuaParser.DOT);
				this.state = 445;
				this.identifier();
				}
				break;
			case 11:
				this.enterOuterAlt(localctx, 3);
				{
				this.state = 446;
				this.match(LuaParser.QUESTMARK);
				this.state = 447;
				this.match(LuaParser.DOT);
				this.state = 448;
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
			this.state = 455;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 39, this._ctx) ) {
			case 1:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 451;
				this.identifier();
				}
				break;
			case 2:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 452;
				this.prefixexp();
				{
				this.state = 453;
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
			this.state = 480;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 43, this._ctx) ) {
			case 1:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 457;
				this.identifier();
				this.state = 461;
				this._errHandler.sync(this);
				_alt = this._interp.adaptivePredict(this._input, 40, this._ctx);
				while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1) {
						{
						{
						this.state = 458;
						this.indexed_member();
						}
						}
					}
					this.state = 463;
					this._errHandler.sync(this);
					_alt = this._interp.adaptivePredict(this._input, 40, this._ctx);
				}
				}
				break;
			case 2:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 464;
				this.functioncall(0);
				this.state = 468;
				this._errHandler.sync(this);
				_alt = this._interp.adaptivePredict(this._input, 41, this._ctx);
				while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1) {
						{
						{
						this.state = 465;
						this.indexed_member();
						}
						}
					}
					this.state = 470;
					this._errHandler.sync(this);
					_alt = this._interp.adaptivePredict(this._input, 41, this._ctx);
				}
				}
				break;
			case 3:
				this.enterOuterAlt(localctx, 3);
				{
				this.state = 471;
				this.match(LuaParser.OP);
				this.state = 472;
				this.exp(0);
				this.state = 473;
				this.match(LuaParser.CP);
				this.state = 477;
				this._errHandler.sync(this);
				_alt = this._interp.adaptivePredict(this._input, 42, this._ctx);
				while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1) {
						{
						{
						this.state = 474;
						this.indexed_member();
						}
						}
					}
					this.state = 479;
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
			this.state = 527;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 48, this._ctx) ) {
			case 1:
				{
				this.state = 483;
				this.identifier();
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
			case 2:
				{
				this.state = 492;
				this.match(LuaParser.OP);
				this.state = 493;
				this.exp(0);
				this.state = 494;
				this.match(LuaParser.CP);
				this.state = 498;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la===11 || _la===47 || _la===68) {
					{
					{
					this.state = 495;
					this.indexed_member();
					}
					}
					this.state = 500;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 501;
				this.args();
				}
				break;
			case 3:
				{
				this.state = 503;
				this.identifier();
				this.state = 507;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la===11 || _la===47 || _la===68) {
					{
					{
					this.state = 504;
					this.indexed_member();
					}
					}
					this.state = 509;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 510;
				this.match(LuaParser.COL);
				this.state = 511;
				this.identifier();
				this.state = 512;
				this.args();
				}
				break;
			case 4:
				{
				this.state = 514;
				this.match(LuaParser.OP);
				this.state = 515;
				this.exp(0);
				this.state = 516;
				this.match(LuaParser.CP);
				this.state = 520;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la===11 || _la===47 || _la===68) {
					{
					{
					this.state = 517;
					this.indexed_member();
					}
					}
					this.state = 522;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 523;
				this.match(LuaParser.COL);
				this.state = 524;
				this.identifier();
				this.state = 525;
				this.args();
				}
				break;
			}
			this._ctx.stop = this._input.LT(-1);
			this.state = 550;
			this._errHandler.sync(this);
			_alt = this._interp.adaptivePredict(this._input, 52, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					if (this._parseListeners != null) {
						this.triggerExitRuleEvent();
					}
					_prevctx = localctx;
					{
					this.state = 548;
					this._errHandler.sync(this);
					switch ( this._interp.adaptivePredict(this._input, 51, this._ctx) ) {
					case 1:
						{
						localctx = new FunctioncallContext(this, _parentctx, _parentState);
						this.pushNewRecursionContext(localctx, _startState, LuaParser.RULE_functioncall);
						this.state = 529;
						if (!(this.precpred(this._ctx, 5))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 5)");
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
						this.args();
						}
						break;
					case 2:
						{
						localctx = new FunctioncallContext(this, _parentctx, _parentState);
						this.pushNewRecursionContext(localctx, _startState, LuaParser.RULE_functioncall);
						this.state = 537;
						if (!(this.precpred(this._ctx, 2))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 2)");
						}
						this.state = 541;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
						while (_la===11 || _la===47 || _la===68) {
							{
							{
							this.state = 538;
							this.indexed_member();
							}
							}
							this.state = 543;
							this._errHandler.sync(this);
							_la = this._input.LA(1);
						}
						this.state = 544;
						this.match(LuaParser.COL);
						this.state = 545;
						this.identifier();
						this.state = 546;
						this.args();
						}
						break;
					}
					}
				}
				this.state = 552;
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
			this.state = 553;
			this.var_();
			this.state = 554;
			_la = this._input.LA(1);
			if(!((((_la) & ~0x1F) === 0 && ((1 << _la) & 2093056) !== 0))) {
			this._errHandler.recoverInline(this);
			}
			else {
				this._errHandler.reportMatch(this);
			    this.consume();
			}
			this.state = 555;
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
			this.state = 560;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 53, this._ctx) ) {
			case 1:
				{
				this.state = 557;
				this.identifier();
				this.state = 558;
				this.match(LuaParser.EQ);
				}
				break;
			}
			this.state = 562;
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
			this.state = 564;
			this.argument();
			this.state = 569;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===35) {
				{
				{
				this.state = 565;
				this.match(LuaParser.COMMA);
				this.state = 566;
				this.argument();
				}
				}
				this.state = 571;
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
			this.state = 579;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 51:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 572;
				this.match(LuaParser.OP);
				this.state = 574;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if ((((_la) & ~0x1F) === 0 && ((1 << _la) & 2098168) !== 0) || ((((_la - 37)) & ~0x1F) === 0 && ((1 << (_la - 37)) & 536968065) !== 0) || ((((_la - 75)) & ~0x1F) === 0 && ((1 << (_la - 75)) & 4089) !== 0)) {
					{
					this.state = 573;
					this.argumentlist();
					}
				}

				this.state = 576;
				this.match(LuaParser.CP);
				}
				break;
			case 66:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 577;
				this.tableconstructor();
				}
				break;
			case 79:
			case 80:
			case 81:
			case 82:
				this.enterOuterAlt(localctx, 3);
				{
				this.state = 578;
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
			this.state = 581;
			this.match(LuaParser.FUNCTION);
			this.state = 582;
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
			this.state = 584;
			this.match(LuaParser.OP);
			this.state = 585;
			this.parlist();
			this.state = 586;
			this.match(LuaParser.CP);
			this.state = 587;
			this.block();
			this.state = 588;
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
			this.state = 593;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===22) {
				{
				{
				this.state = 590;
				this.decorator();
				}
				}
				this.state = 595;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 596;
			this.match(LuaParser.CLASS);
			this.state = 597;
			this.identifier();
			this.state = 600;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===5) {
				{
				this.state = 598;
				this.match(LuaParser.EXTENDS);
				this.state = 599;
				this.identifier();
				}
			}

			this.state = 602;
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
		this.enterRule(localctx, 62, LuaParser.RULE_partype);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 613;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===59) {
				{
				this.state = 604;
				this.match(LuaParser.COL);
				this.state = 605;
				this.identifier();
				this.state = 610;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la===72) {
					{
					{
					this.state = 606;
					this.match(LuaParser.PIPE);
					this.state = 607;
					this.identifier();
					}
					}
					this.state = 612;
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
		this.enterRule(localctx, 64, LuaParser.RULE_defaultvalue);
		try {
			this.state = 618;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 2:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 615;
				this.match(LuaParser.EQ);
				this.state = 616;
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
		this.enterRule(localctx, 66, LuaParser.RULE_extendedpar);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 620;
			this.identifier();
			this.state = 621;
			this.partype();
			this.state = 622;
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
		this.enterRule(localctx, 68, LuaParser.RULE_extendedparlist);
		try {
			let _alt: number;
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 624;
			this.extendedpar();
			this.state = 629;
			this._errHandler.sync(this);
			_alt = this._interp.adaptivePredict(this._input, 62, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 625;
					this.match(LuaParser.COMMA);
					this.state = 626;
					this.extendedpar();
					}
					}
				}
				this.state = 631;
				this._errHandler.sync(this);
				_alt = this._interp.adaptivePredict(this._input, 62, this._ctx);
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
		this.enterRule(localctx, 70, LuaParser.RULE_parlist);
		let _la: number;
		try {
			this.state = 639;
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
				this.state = 632;
				this.extendedparlist();
				this.state = 635;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===35) {
					{
					this.state = 633;
					this.match(LuaParser.COMMA);
					this.state = 634;
					this.match(LuaParser.DDD);
					}
				}

				}
				break;
			case 75:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 637;
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
		this.enterRule(localctx, 72, LuaParser.RULE_tableconstructor);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 641;
			this.match(LuaParser.OCU);
			this.state = 643;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if ((((_la) & ~0x1F) === 0 && ((1 << _la) & 6292472) !== 0) || ((((_la - 37)) & ~0x1F) === 0 && ((1 << (_la - 37)) & 2684452737) !== 0) || ((((_la - 75)) & ~0x1F) === 0 && ((1 << (_la - 75)) & 4089) !== 0)) {
				{
				this.state = 642;
				this.fieldlist();
				}
			}

			this.state = 645;
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
		this.enterRule(localctx, 74, LuaParser.RULE_fieldlist);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 647;
			this.field();
			this.state = 653;
			this._errHandler.sync(this);
			_alt = this._interp.adaptivePredict(this._input, 66, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 648;
					this.fieldsep();
					this.state = 649;
					this.field();
					}
					}
				}
				this.state = 655;
				this._errHandler.sync(this);
				_alt = this._interp.adaptivePredict(this._input, 66, this._ctx);
			}
			this.state = 657;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===1 || _la===35) {
				{
				this.state = 656;
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
		this.enterRule(localctx, 76, LuaParser.RULE_field);
		let _la: number;
		try {
			this.state = 692;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 70, this._ctx) ) {
			case 1:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 660;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				do {
					{
					{
					this.state = 659;
					this.decorator();
					}
					}
					this.state = 662;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				} while (_la===22);
				this.state = 664;
				this.match(LuaParser.OB);
				this.state = 665;
				this.exp(0);
				this.state = 666;
				this.match(LuaParser.CB);
				this.state = 667;
				this.match(LuaParser.EQ);
				this.state = 668;
				this.functiondef();
				}
				break;
			case 2:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 671;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				do {
					{
					{
					this.state = 670;
					this.decorator();
					}
					}
					this.state = 673;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				} while (_la===22);
				this.state = 675;
				this.identifier();
				this.state = 676;
				this.match(LuaParser.EQ);
				this.state = 677;
				this.functiondef();
				}
				break;
			case 3:
				this.enterOuterAlt(localctx, 3);
				{
				this.state = 679;
				this.match(LuaParser.OB);
				this.state = 680;
				this.exp(0);
				this.state = 681;
				this.match(LuaParser.CB);
				this.state = 682;
				this.match(LuaParser.EQ);
				this.state = 683;
				this.exp(0);
				}
				break;
			case 4:
				this.enterOuterAlt(localctx, 4);
				{
				this.state = 685;
				this.match(LuaParser.DOT);
				this.state = 686;
				this.identifier();
				}
				break;
			case 5:
				this.enterOuterAlt(localctx, 5);
				{
				this.state = 687;
				this.identifier();
				this.state = 688;
				this.match(LuaParser.EQ);
				this.state = 689;
				this.exp(0);
				}
				break;
			case 6:
				this.enterOuterAlt(localctx, 6);
				{
				this.state = 691;
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
		this.enterRule(localctx, 78, LuaParser.RULE_fieldsep);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 694;
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
		this.enterRule(localctx, 80, LuaParser.RULE_identifier);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 696;
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
		this.enterRule(localctx, 82, LuaParser.RULE_number);
		try {
			let _alt: number;
			this.state = 706;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 83:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 699;
				this._errHandler.sync(this);
				_alt = 1;
				do {
					switch (_alt) {
					case 1:
						{
						{
						this.state = 698;
						this.match(LuaParser.INT);
						}
						}
						break;
					default:
						throw new NoViableAltException(this);
					}
					this.state = 701;
					this._errHandler.sync(this);
					_alt = this._interp.adaptivePredict(this._input, 71, this._ctx);
				} while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER);
				}
				break;
			case 84:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 703;
				this.match(LuaParser.HEX);
				}
				break;
			case 85:
				this.enterOuterAlt(localctx, 3);
				{
				this.state = 704;
				this.match(LuaParser.FLOAT);
				}
				break;
			case 86:
				this.enterOuterAlt(localctx, 4);
				{
				this.state = 705;
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
		this.enterRule(localctx, 84, LuaParser.RULE_string);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 708;
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

	public static readonly _serializedATN: number[] = [4,1,91,711,2,0,7,0,2,
	1,7,1,2,2,7,2,2,3,7,3,2,4,7,4,2,5,7,5,2,6,7,6,2,7,7,7,2,8,7,8,2,9,7,9,2,
	10,7,10,2,11,7,11,2,12,7,12,2,13,7,13,2,14,7,14,2,15,7,15,2,16,7,16,2,17,
	7,17,2,18,7,18,2,19,7,19,2,20,7,20,2,21,7,21,2,22,7,22,2,23,7,23,2,24,7,
	24,2,25,7,25,2,26,7,26,2,27,7,27,2,28,7,28,2,29,7,29,2,30,7,30,2,31,7,31,
	2,32,7,32,2,33,7,33,2,34,7,34,2,35,7,35,2,36,7,36,2,37,7,37,2,38,7,38,2,
	39,7,39,2,40,7,40,2,41,7,41,2,42,7,42,1,0,1,0,1,0,1,1,1,1,1,2,5,2,93,8,
	2,10,2,12,2,96,9,2,1,2,3,2,99,8,2,1,3,1,3,1,3,1,3,1,3,1,3,1,3,3,3,108,8,
	3,1,3,1,3,1,3,1,3,1,3,1,3,1,3,1,3,1,3,1,3,1,3,1,3,1,3,1,3,1,3,1,3,1,3,1,
	3,1,3,1,3,1,3,1,3,1,3,1,3,1,3,5,3,135,8,3,10,3,12,3,138,9,3,1,3,1,3,3,3,
	142,8,3,1,3,1,3,1,3,1,3,1,3,1,3,1,3,1,3,1,3,1,3,3,3,154,8,3,1,3,1,3,1,3,
	1,3,1,3,1,3,1,3,1,3,1,3,1,3,1,3,1,3,1,3,1,3,1,3,1,3,1,3,5,3,173,8,3,10,
	3,12,3,176,9,3,1,3,1,3,1,3,1,3,1,3,5,3,183,8,3,10,3,12,3,186,9,3,1,3,1,
	3,1,3,1,3,1,3,1,3,1,3,1,3,1,3,1,3,1,3,3,3,199,8,3,1,3,1,3,1,3,1,3,1,3,1,
	3,1,3,3,3,208,8,3,1,3,3,3,211,8,3,1,3,1,3,1,3,1,3,3,3,217,8,3,1,3,1,3,1,
	3,1,3,1,3,1,3,1,3,1,3,1,3,1,3,1,3,1,3,1,3,1,3,3,3,233,8,3,3,3,235,8,3,1,
	3,1,3,1,3,1,3,1,3,1,3,3,3,243,8,3,1,4,1,4,1,4,1,4,1,4,1,4,5,4,251,8,4,10,
	4,12,4,254,9,4,1,5,1,5,1,5,1,5,3,5,260,8,5,1,6,1,6,3,6,264,8,6,1,6,1,6,
	3,6,268,8,6,1,6,3,6,271,8,6,1,7,1,7,1,7,1,7,1,8,1,8,1,8,5,8,280,8,8,10,
	8,12,8,283,9,8,1,8,1,8,3,8,287,8,8,1,9,1,9,1,9,5,9,292,8,9,10,9,12,9,295,
	9,9,1,10,1,10,1,10,5,10,300,8,10,10,10,12,10,303,9,10,1,11,1,11,1,11,1,
	11,1,12,1,12,3,12,311,8,12,1,12,3,12,314,8,12,1,13,1,13,1,13,1,14,1,14,
	1,14,5,14,322,8,14,10,14,12,14,325,9,14,1,15,1,15,1,15,1,15,1,15,1,15,1,
	15,1,15,1,15,1,15,1,15,1,15,1,15,1,15,1,15,3,15,342,8,15,1,15,1,15,1,15,
	1,15,1,15,1,15,1,15,1,15,1,15,1,15,1,15,1,15,1,15,1,15,1,15,1,15,1,15,1,
	15,1,15,1,15,1,15,1,15,1,15,1,15,1,15,1,15,1,15,1,15,1,15,1,15,1,15,1,15,
	1,15,1,15,5,15,378,8,15,10,15,12,15,381,9,15,1,16,1,16,1,16,3,16,386,8,
	16,1,17,1,17,1,17,1,17,5,17,392,8,17,10,17,12,17,395,9,17,1,17,3,17,398,
	8,17,1,18,1,18,1,18,1,18,3,18,404,8,18,1,18,1,18,1,18,1,18,1,18,1,18,3,
	18,412,8,18,1,18,1,18,1,19,3,19,417,8,19,1,19,1,19,3,19,421,8,19,1,19,1,
	19,1,19,1,19,1,19,1,19,1,19,1,19,1,19,1,19,1,19,1,19,1,19,1,19,1,19,1,19,
	3,19,439,8,19,1,20,1,20,1,20,1,20,1,20,1,20,1,20,1,20,1,20,3,20,450,8,20,
	1,21,1,21,1,21,1,21,3,21,456,8,21,1,22,1,22,5,22,460,8,22,10,22,12,22,463,
	9,22,1,22,1,22,5,22,467,8,22,10,22,12,22,470,9,22,1,22,1,22,1,22,1,22,5,
	22,476,8,22,10,22,12,22,479,9,22,3,22,481,8,22,1,23,1,23,1,23,5,23,486,
	8,23,10,23,12,23,489,9,23,1,23,1,23,1,23,1,23,1,23,1,23,5,23,497,8,23,10,
	23,12,23,500,9,23,1,23,1,23,1,23,1,23,5,23,506,8,23,10,23,12,23,509,9,23,
	1,23,1,23,1,23,1,23,1,23,1,23,1,23,1,23,5,23,519,8,23,10,23,12,23,522,9,
	23,1,23,1,23,1,23,1,23,3,23,528,8,23,1,23,1,23,5,23,532,8,23,10,23,12,23,
	535,9,23,1,23,1,23,1,23,5,23,540,8,23,10,23,12,23,543,9,23,1,23,1,23,1,
	23,1,23,5,23,549,8,23,10,23,12,23,552,9,23,1,24,1,24,1,24,1,24,1,25,1,25,
	1,25,3,25,561,8,25,1,25,1,25,1,26,1,26,1,26,5,26,568,8,26,10,26,12,26,571,
	9,26,1,27,1,27,3,27,575,8,27,1,27,1,27,1,27,3,27,580,8,27,1,28,1,28,1,28,
	1,29,1,29,1,29,1,29,1,29,1,29,1,30,5,30,592,8,30,10,30,12,30,595,9,30,1,
	30,1,30,1,30,1,30,3,30,601,8,30,1,30,1,30,1,31,1,31,1,31,1,31,5,31,609,
	8,31,10,31,12,31,612,9,31,3,31,614,8,31,1,32,1,32,1,32,3,32,619,8,32,1,
	33,1,33,1,33,1,33,1,34,1,34,1,34,5,34,628,8,34,10,34,12,34,631,9,34,1,35,
	1,35,1,35,3,35,636,8,35,1,35,1,35,3,35,640,8,35,1,36,1,36,3,36,644,8,36,
	1,36,1,36,1,37,1,37,1,37,1,37,5,37,652,8,37,10,37,12,37,655,9,37,1,37,3,
	37,658,8,37,1,38,4,38,661,8,38,11,38,12,38,662,1,38,1,38,1,38,1,38,1,38,
	1,38,1,38,4,38,672,8,38,11,38,12,38,673,1,38,1,38,1,38,1,38,1,38,1,38,1,
	38,1,38,1,38,1,38,1,38,1,38,1,38,1,38,1,38,1,38,1,38,3,38,693,8,38,1,39,
	1,39,1,40,1,40,1,41,4,41,700,8,41,11,41,12,41,701,1,41,1,41,1,41,3,41,707,
	8,41,1,42,1,42,1,42,0,2,30,46,43,0,2,4,6,8,10,12,14,16,18,20,22,24,26,28,
	30,32,34,36,38,40,42,44,46,48,50,52,54,56,58,60,62,64,66,68,70,72,74,76,
	78,80,82,84,0,10,2,0,48,50,53,53,3,0,57,58,65,65,74,74,2,0,49,49,64,64,
	4,0,39,40,60,61,70,70,76,77,1,0,62,63,3,0,48,48,54,56,72,72,1,0,12,20,2,
	0,1,1,35,35,3,0,3,9,21,21,78,78,1,0,79,82,794,0,86,1,0,0,0,2,89,1,0,0,0,
	4,94,1,0,0,0,6,242,1,0,0,0,8,244,1,0,0,0,10,259,1,0,0,0,12,267,1,0,0,0,
	14,272,1,0,0,0,16,276,1,0,0,0,18,288,1,0,0,0,20,296,1,0,0,0,22,304,1,0,
	0,0,24,313,1,0,0,0,26,315,1,0,0,0,28,318,1,0,0,0,30,341,1,0,0,0,32,382,
	1,0,0,0,34,387,1,0,0,0,36,399,1,0,0,0,38,438,1,0,0,0,40,449,1,0,0,0,42,
	455,1,0,0,0,44,480,1,0,0,0,46,527,1,0,0,0,48,553,1,0,0,0,50,560,1,0,0,0,
	52,564,1,0,0,0,54,579,1,0,0,0,56,581,1,0,0,0,58,584,1,0,0,0,60,593,1,0,
	0,0,62,613,1,0,0,0,64,618,1,0,0,0,66,620,1,0,0,0,68,624,1,0,0,0,70,639,
	1,0,0,0,72,641,1,0,0,0,74,647,1,0,0,0,76,692,1,0,0,0,78,694,1,0,0,0,80,
	696,1,0,0,0,82,706,1,0,0,0,84,708,1,0,0,0,86,87,3,2,1,0,87,88,5,0,0,1,88,
	1,1,0,0,0,89,90,3,4,2,0,90,3,1,0,0,0,91,93,3,6,3,0,92,91,1,0,0,0,93,96,
	1,0,0,0,94,92,1,0,0,0,94,95,1,0,0,0,95,98,1,0,0,0,96,94,1,0,0,0,97,99,3,
	12,6,0,98,97,1,0,0,0,98,99,1,0,0,0,99,5,1,0,0,0,100,243,5,1,0,0,101,102,
	3,18,9,0,102,103,5,2,0,0,103,104,3,28,14,0,104,243,1,0,0,0,105,243,3,48,
	24,0,106,108,5,3,0,0,107,106,1,0,0,0,107,108,1,0,0,0,108,109,1,0,0,0,109,
	243,3,46,23,0,110,243,3,14,7,0,111,243,5,23,0,0,112,113,5,24,0,0,113,243,
	3,80,40,0,114,115,5,27,0,0,115,116,3,30,15,0,116,117,5,25,0,0,117,118,3,
	4,2,0,118,119,5,26,0,0,119,243,1,0,0,0,120,121,5,28,0,0,121,122,3,4,2,0,
	122,123,5,29,0,0,123,124,3,30,15,0,124,243,1,0,0,0,125,126,5,30,0,0,126,
	127,3,30,15,0,127,128,5,31,0,0,128,136,3,4,2,0,129,130,5,32,0,0,130,131,
	3,30,15,0,131,132,5,31,0,0,132,133,3,4,2,0,133,135,1,0,0,0,134,129,1,0,
	0,0,135,138,1,0,0,0,136,134,1,0,0,0,136,137,1,0,0,0,137,141,1,0,0,0,138,
	136,1,0,0,0,139,140,5,33,0,0,140,142,3,4,2,0,141,139,1,0,0,0,141,142,1,
	0,0,0,142,143,1,0,0,0,143,144,5,26,0,0,144,243,1,0,0,0,145,146,5,34,0,0,
	146,147,3,80,40,0,147,148,5,2,0,0,148,149,3,30,15,0,149,150,5,35,0,0,150,
	153,3,30,15,0,151,152,5,35,0,0,152,154,3,30,15,0,153,151,1,0,0,0,153,154,
	1,0,0,0,154,155,1,0,0,0,155,156,5,25,0,0,156,157,3,4,2,0,157,158,5,26,0,
	0,158,243,1,0,0,0,159,160,5,34,0,0,160,161,3,20,10,0,161,162,5,36,0,0,162,
	163,3,28,14,0,163,164,5,25,0,0,164,165,3,4,2,0,165,166,5,26,0,0,166,243,
	1,0,0,0,167,168,5,25,0,0,168,169,3,4,2,0,169,170,5,26,0,0,170,243,1,0,0,
	0,171,173,3,22,11,0,172,171,1,0,0,0,173,176,1,0,0,0,174,172,1,0,0,0,174,
	175,1,0,0,0,175,177,1,0,0,0,176,174,1,0,0,0,177,178,5,37,0,0,178,179,3,
	16,8,0,179,180,3,58,29,0,180,243,1,0,0,0,181,183,3,22,11,0,182,181,1,0,
	0,0,183,186,1,0,0,0,184,182,1,0,0,0,184,185,1,0,0,0,185,187,1,0,0,0,186,
	184,1,0,0,0,187,188,5,38,0,0,188,189,5,37,0,0,189,190,3,80,40,0,190,191,
	3,58,29,0,191,243,1,0,0,0,192,193,5,7,0,0,193,198,3,16,8,0,194,195,5,51,
	0,0,195,196,3,70,35,0,196,197,5,52,0,0,197,199,1,0,0,0,198,194,1,0,0,0,
	198,199,1,0,0,0,199,200,1,0,0,0,200,201,3,34,17,0,201,202,5,26,0,0,202,
	243,1,0,0,0,203,204,5,6,0,0,204,210,3,80,40,0,205,207,5,51,0,0,206,208,
	3,28,14,0,207,206,1,0,0,0,207,208,1,0,0,0,208,209,1,0,0,0,209,211,5,52,
	0,0,210,205,1,0,0,0,210,211,1,0,0,0,211,243,1,0,0,0,212,213,5,38,0,0,213,
	216,3,8,4,0,214,215,5,2,0,0,215,217,3,28,14,0,216,214,1,0,0,0,216,217,1,
	0,0,0,217,243,1,0,0,0,218,219,5,38,0,0,219,220,3,8,4,0,220,221,5,36,0,0,
	221,222,3,44,22,0,222,243,1,0,0,0,223,224,5,21,0,0,224,225,3,4,2,0,225,
	226,5,26,0,0,226,243,1,0,0,0,227,228,5,8,0,0,228,229,3,4,2,0,229,234,5,
	9,0,0,230,232,3,80,40,0,231,233,5,31,0,0,232,231,1,0,0,0,232,233,1,0,0,
	0,233,235,1,0,0,0,234,230,1,0,0,0,234,235,1,0,0,0,235,236,1,0,0,0,236,237,
	3,4,2,0,237,238,5,26,0,0,238,243,1,0,0,0,239,240,5,10,0,0,240,243,3,30,
	15,0,241,243,3,60,30,0,242,100,1,0,0,0,242,101,1,0,0,0,242,105,1,0,0,0,
	242,107,1,0,0,0,242,110,1,0,0,0,242,111,1,0,0,0,242,112,1,0,0,0,242,114,
	1,0,0,0,242,120,1,0,0,0,242,125,1,0,0,0,242,145,1,0,0,0,242,159,1,0,0,0,
	242,167,1,0,0,0,242,174,1,0,0,0,242,184,1,0,0,0,242,192,1,0,0,0,242,203,
	1,0,0,0,242,212,1,0,0,0,242,218,1,0,0,0,242,223,1,0,0,0,242,227,1,0,0,0,
	242,239,1,0,0,0,242,241,1,0,0,0,243,7,1,0,0,0,244,245,3,80,40,0,245,252,
	3,10,5,0,246,247,5,35,0,0,247,248,3,80,40,0,248,249,3,10,5,0,249,251,1,
	0,0,0,250,246,1,0,0,0,251,254,1,0,0,0,252,250,1,0,0,0,252,253,1,0,0,0,253,
	9,1,0,0,0,254,252,1,0,0,0,255,256,5,39,0,0,256,257,3,80,40,0,257,258,5,
	40,0,0,258,260,1,0,0,0,259,255,1,0,0,0,259,260,1,0,0,0,260,11,1,0,0,0,261,
	263,5,41,0,0,262,264,3,28,14,0,263,262,1,0,0,0,263,264,1,0,0,0,264,268,
	1,0,0,0,265,268,5,23,0,0,266,268,5,42,0,0,267,261,1,0,0,0,267,265,1,0,0,
	0,267,266,1,0,0,0,268,270,1,0,0,0,269,271,5,1,0,0,270,269,1,0,0,0,270,271,
	1,0,0,0,271,13,1,0,0,0,272,273,5,43,0,0,273,274,3,80,40,0,274,275,5,43,
	0,0,275,15,1,0,0,0,276,281,3,80,40,0,277,278,5,47,0,0,278,280,3,80,40,0,
	279,277,1,0,0,0,280,283,1,0,0,0,281,279,1,0,0,0,281,282,1,0,0,0,282,286,
	1,0,0,0,283,281,1,0,0,0,284,285,5,59,0,0,285,287,3,80,40,0,286,284,1,0,
	0,0,286,287,1,0,0,0,287,17,1,0,0,0,288,293,3,42,21,0,289,290,5,35,0,0,290,
	292,3,42,21,0,291,289,1,0,0,0,292,295,1,0,0,0,293,291,1,0,0,0,293,294,1,
	0,0,0,294,19,1,0,0,0,295,293,1,0,0,0,296,301,3,80,40,0,297,298,5,35,0,0,
	298,300,3,80,40,0,299,297,1,0,0,0,300,303,1,0,0,0,301,299,1,0,0,0,301,302,
	1,0,0,0,302,21,1,0,0,0,303,301,1,0,0,0,304,305,5,22,0,0,305,306,3,42,21,
	0,306,307,3,24,12,0,307,23,1,0,0,0,308,310,5,51,0,0,309,311,3,28,14,0,310,
	309,1,0,0,0,310,311,1,0,0,0,311,312,1,0,0,0,312,314,5,52,0,0,313,308,1,
	0,0,0,313,314,1,0,0,0,314,25,1,0,0,0,315,316,5,3,0,0,316,317,3,46,23,0,
	317,27,1,0,0,0,318,323,3,30,15,0,319,320,5,35,0,0,320,322,3,30,15,0,321,
	319,1,0,0,0,322,325,1,0,0,0,323,321,1,0,0,0,323,324,1,0,0,0,324,29,1,0,
	0,0,325,323,1,0,0,0,326,327,6,15,-1,0,327,342,5,44,0,0,328,342,5,45,0,0,
	329,342,5,46,0,0,330,342,3,82,41,0,331,342,3,84,42,0,332,342,5,75,0,0,333,
	342,3,26,13,0,334,342,3,38,19,0,335,342,3,36,18,0,336,342,3,56,28,0,337,
	342,3,44,22,0,338,342,3,72,36,0,339,340,7,0,0,0,340,342,3,30,15,10,341,
	326,1,0,0,0,341,328,1,0,0,0,341,329,1,0,0,0,341,330,1,0,0,0,341,331,1,0,
	0,0,341,332,1,0,0,0,341,333,1,0,0,0,341,334,1,0,0,0,341,335,1,0,0,0,341,
	336,1,0,0,0,341,337,1,0,0,0,341,338,1,0,0,0,341,339,1,0,0,0,342,379,1,0,
	0,0,343,344,10,11,0,0,344,345,5,73,0,0,345,378,3,30,15,11,346,347,10,9,
	0,0,347,348,7,1,0,0,348,378,3,30,15,10,349,350,10,8,0,0,350,351,7,2,0,0,
	351,378,3,30,15,9,352,353,10,7,0,0,353,354,5,71,0,0,354,378,3,30,15,7,355,
	356,10,6,0,0,356,357,7,3,0,0,357,378,3,30,15,7,358,359,10,5,0,0,359,360,
	7,4,0,0,360,378,3,30,15,6,361,362,10,4,0,0,362,363,7,5,0,0,363,378,3,30,
	15,5,364,365,10,3,0,0,365,366,5,36,0,0,366,378,3,30,15,4,367,368,10,2,0,
	0,368,369,5,53,0,0,369,370,5,36,0,0,370,378,3,30,15,3,371,372,10,1,0,0,
	372,373,5,11,0,0,373,374,3,30,15,0,374,375,5,59,0,0,375,376,3,30,15,2,376,
	378,1,0,0,0,377,343,1,0,0,0,377,346,1,0,0,0,377,349,1,0,0,0,377,352,1,0,
	0,0,377,355,1,0,0,0,377,358,1,0,0,0,377,361,1,0,0,0,377,364,1,0,0,0,377,
	367,1,0,0,0,377,371,1,0,0,0,378,381,1,0,0,0,379,377,1,0,0,0,379,380,1,0,
	0,0,380,31,1,0,0,0,381,379,1,0,0,0,382,385,3,30,15,0,383,384,5,33,0,0,384,
	386,3,28,14,0,385,383,1,0,0,0,385,386,1,0,0,0,386,33,1,0,0,0,387,393,3,
	32,16,0,388,389,3,78,39,0,389,390,3,32,16,0,390,392,1,0,0,0,391,388,1,0,
	0,0,392,395,1,0,0,0,393,391,1,0,0,0,393,394,1,0,0,0,394,397,1,0,0,0,395,
	393,1,0,0,0,396,398,3,78,39,0,397,396,1,0,0,0,397,398,1,0,0,0,398,35,1,
	0,0,0,399,400,5,66,0,0,400,403,3,30,15,0,401,402,5,35,0,0,402,404,3,30,
	15,0,403,401,1,0,0,0,403,404,1,0,0,0,404,405,1,0,0,0,405,406,5,34,0,0,406,
	407,3,20,10,0,407,408,5,36,0,0,408,411,3,28,14,0,409,410,5,30,0,0,410,412,
	3,30,15,0,411,409,1,0,0,0,411,412,1,0,0,0,412,413,1,0,0,0,413,414,5,67,
	0,0,414,37,1,0,0,0,415,417,5,51,0,0,416,415,1,0,0,0,416,417,1,0,0,0,417,
	418,1,0,0,0,418,420,3,80,40,0,419,421,5,52,0,0,420,419,1,0,0,0,420,421,
	1,0,0,0,421,422,1,0,0,0,422,423,5,25,0,0,423,424,3,30,15,0,424,439,1,0,
	0,0,425,426,5,51,0,0,426,427,3,70,35,0,427,428,5,52,0,0,428,429,5,25,0,
	0,429,430,3,4,2,0,430,431,5,26,0,0,431,439,1,0,0,0,432,433,5,51,0,0,433,
	434,3,70,35,0,434,435,5,52,0,0,435,436,5,25,0,0,436,437,3,30,15,0,437,439,
	1,0,0,0,438,416,1,0,0,0,438,425,1,0,0,0,438,432,1,0,0,0,439,39,1,0,0,0,
	440,441,5,68,0,0,441,442,3,30,15,0,442,443,5,69,0,0,443,450,1,0,0,0,444,
	445,5,47,0,0,445,450,3,80,40,0,446,447,5,11,0,0,447,448,5,47,0,0,448,450,
	3,80,40,0,449,440,1,0,0,0,449,444,1,0,0,0,449,446,1,0,0,0,450,41,1,0,0,
	0,451,456,3,80,40,0,452,453,3,44,22,0,453,454,3,40,20,0,454,456,1,0,0,0,
	455,451,1,0,0,0,455,452,1,0,0,0,456,43,1,0,0,0,457,461,3,80,40,0,458,460,
	3,40,20,0,459,458,1,0,0,0,460,463,1,0,0,0,461,459,1,0,0,0,461,462,1,0,0,
	0,462,481,1,0,0,0,463,461,1,0,0,0,464,468,3,46,23,0,465,467,3,40,20,0,466,
	465,1,0,0,0,467,470,1,0,0,0,468,466,1,0,0,0,468,469,1,0,0,0,469,481,1,0,
	0,0,470,468,1,0,0,0,471,472,5,51,0,0,472,473,3,30,15,0,473,477,5,52,0,0,
	474,476,3,40,20,0,475,474,1,0,0,0,476,479,1,0,0,0,477,475,1,0,0,0,477,478,
	1,0,0,0,478,481,1,0,0,0,479,477,1,0,0,0,480,457,1,0,0,0,480,464,1,0,0,0,
	480,471,1,0,0,0,481,45,1,0,0,0,482,483,6,23,-1,0,483,487,3,80,40,0,484,
	486,3,40,20,0,485,484,1,0,0,0,486,489,1,0,0,0,487,485,1,0,0,0,487,488,1,
	0,0,0,488,490,1,0,0,0,489,487,1,0,0,0,490,491,3,54,27,0,491,528,1,0,0,0,
	492,493,5,51,0,0,493,494,3,30,15,0,494,498,5,52,0,0,495,497,3,40,20,0,496,
	495,1,0,0,0,497,500,1,0,0,0,498,496,1,0,0,0,498,499,1,0,0,0,499,501,1,0,
	0,0,500,498,1,0,0,0,501,502,3,54,27,0,502,528,1,0,0,0,503,507,3,80,40,0,
	504,506,3,40,20,0,505,504,1,0,0,0,506,509,1,0,0,0,507,505,1,0,0,0,507,508,
	1,0,0,0,508,510,1,0,0,0,509,507,1,0,0,0,510,511,5,59,0,0,511,512,3,80,40,
	0,512,513,3,54,27,0,513,528,1,0,0,0,514,515,5,51,0,0,515,516,3,30,15,0,
	516,520,5,52,0,0,517,519,3,40,20,0,518,517,1,0,0,0,519,522,1,0,0,0,520,
	518,1,0,0,0,520,521,1,0,0,0,521,523,1,0,0,0,522,520,1,0,0,0,523,524,5,59,
	0,0,524,525,3,80,40,0,525,526,3,54,27,0,526,528,1,0,0,0,527,482,1,0,0,0,
	527,492,1,0,0,0,527,503,1,0,0,0,527,514,1,0,0,0,528,550,1,0,0,0,529,533,
	10,5,0,0,530,532,3,40,20,0,531,530,1,0,0,0,532,535,1,0,0,0,533,531,1,0,
	0,0,533,534,1,0,0,0,534,536,1,0,0,0,535,533,1,0,0,0,536,549,3,54,27,0,537,
	541,10,2,0,0,538,540,3,40,20,0,539,538,1,0,0,0,540,543,1,0,0,0,541,539,
	1,0,0,0,541,542,1,0,0,0,542,544,1,0,0,0,543,541,1,0,0,0,544,545,5,59,0,
	0,545,546,3,80,40,0,546,547,3,54,27,0,547,549,1,0,0,0,548,529,1,0,0,0,548,
	537,1,0,0,0,549,552,1,0,0,0,550,548,1,0,0,0,550,551,1,0,0,0,551,47,1,0,
	0,0,552,550,1,0,0,0,553,554,3,42,21,0,554,555,7,6,0,0,555,556,3,30,15,0,
	556,49,1,0,0,0,557,558,3,80,40,0,558,559,5,2,0,0,559,561,1,0,0,0,560,557,
	1,0,0,0,560,561,1,0,0,0,561,562,1,0,0,0,562,563,3,30,15,0,563,51,1,0,0,
	0,564,569,3,50,25,0,565,566,5,35,0,0,566,568,3,50,25,0,567,565,1,0,0,0,
	568,571,1,0,0,0,569,567,1,0,0,0,569,570,1,0,0,0,570,53,1,0,0,0,571,569,
	1,0,0,0,572,574,5,51,0,0,573,575,3,52,26,0,574,573,1,0,0,0,574,575,1,0,
	0,0,575,576,1,0,0,0,576,580,5,52,0,0,577,580,3,72,36,0,578,580,3,84,42,
	0,579,572,1,0,0,0,579,577,1,0,0,0,579,578,1,0,0,0,580,55,1,0,0,0,581,582,
	5,37,0,0,582,583,3,58,29,0,583,57,1,0,0,0,584,585,5,51,0,0,585,586,3,70,
	35,0,586,587,5,52,0,0,587,588,3,4,2,0,588,589,5,26,0,0,589,59,1,0,0,0,590,
	592,3,22,11,0,591,590,1,0,0,0,592,595,1,0,0,0,593,591,1,0,0,0,593,594,1,
	0,0,0,594,596,1,0,0,0,595,593,1,0,0,0,596,597,5,4,0,0,597,600,3,80,40,0,
	598,599,5,5,0,0,599,601,3,80,40,0,600,598,1,0,0,0,600,601,1,0,0,0,601,602,
	1,0,0,0,602,603,3,72,36,0,603,61,1,0,0,0,604,605,5,59,0,0,605,610,3,80,
	40,0,606,607,5,72,0,0,607,609,3,80,40,0,608,606,1,0,0,0,609,612,1,0,0,0,
	610,608,1,0,0,0,610,611,1,0,0,0,611,614,1,0,0,0,612,610,1,0,0,0,613,604,
	1,0,0,0,613,614,1,0,0,0,614,63,1,0,0,0,615,616,5,2,0,0,616,619,3,30,15,
	0,617,619,1,0,0,0,618,615,1,0,0,0,618,617,1,0,0,0,619,65,1,0,0,0,620,621,
	3,80,40,0,621,622,3,62,31,0,622,623,3,64,32,0,623,67,1,0,0,0,624,629,3,
	66,33,0,625,626,5,35,0,0,626,628,3,66,33,0,627,625,1,0,0,0,628,631,1,0,
	0,0,629,627,1,0,0,0,629,630,1,0,0,0,630,69,1,0,0,0,631,629,1,0,0,0,632,
	635,3,68,34,0,633,634,5,35,0,0,634,636,5,75,0,0,635,633,1,0,0,0,635,636,
	1,0,0,0,636,640,1,0,0,0,637,640,5,75,0,0,638,640,1,0,0,0,639,632,1,0,0,
	0,639,637,1,0,0,0,639,638,1,0,0,0,640,71,1,0,0,0,641,643,5,66,0,0,642,644,
	3,74,37,0,643,642,1,0,0,0,643,644,1,0,0,0,644,645,1,0,0,0,645,646,5,67,
	0,0,646,73,1,0,0,0,647,653,3,76,38,0,648,649,3,78,39,0,649,650,3,76,38,
	0,650,652,1,0,0,0,651,648,1,0,0,0,652,655,1,0,0,0,653,651,1,0,0,0,653,654,
	1,0,0,0,654,657,1,0,0,0,655,653,1,0,0,0,656,658,3,78,39,0,657,656,1,0,0,
	0,657,658,1,0,0,0,658,75,1,0,0,0,659,661,3,22,11,0,660,659,1,0,0,0,661,
	662,1,0,0,0,662,660,1,0,0,0,662,663,1,0,0,0,663,664,1,0,0,0,664,665,5,68,
	0,0,665,666,3,30,15,0,666,667,5,69,0,0,667,668,5,2,0,0,668,669,3,56,28,
	0,669,693,1,0,0,0,670,672,3,22,11,0,671,670,1,0,0,0,672,673,1,0,0,0,673,
	671,1,0,0,0,673,674,1,0,0,0,674,675,1,0,0,0,675,676,3,80,40,0,676,677,5,
	2,0,0,677,678,3,56,28,0,678,693,1,0,0,0,679,680,5,68,0,0,680,681,3,30,15,
	0,681,682,5,69,0,0,682,683,5,2,0,0,683,684,3,30,15,0,684,693,1,0,0,0,685,
	686,5,47,0,0,686,693,3,80,40,0,687,688,3,80,40,0,688,689,5,2,0,0,689,690,
	3,30,15,0,690,693,1,0,0,0,691,693,3,30,15,0,692,660,1,0,0,0,692,671,1,0,
	0,0,692,679,1,0,0,0,692,685,1,0,0,0,692,687,1,0,0,0,692,691,1,0,0,0,693,
	77,1,0,0,0,694,695,7,7,0,0,695,79,1,0,0,0,696,697,7,8,0,0,697,81,1,0,0,
	0,698,700,5,83,0,0,699,698,1,0,0,0,700,701,1,0,0,0,701,699,1,0,0,0,701,
	702,1,0,0,0,702,707,1,0,0,0,703,707,5,84,0,0,704,707,5,85,0,0,705,707,5,
	86,0,0,706,699,1,0,0,0,706,703,1,0,0,0,706,704,1,0,0,0,706,705,1,0,0,0,
	707,83,1,0,0,0,708,709,7,9,0,0,709,85,1,0,0,0,73,94,98,107,136,141,153,
	174,184,198,207,210,216,232,234,242,252,259,263,267,270,281,286,293,301,
	310,313,323,341,377,379,385,393,397,403,411,416,420,438,449,455,461,468,
	477,480,487,498,507,520,527,533,541,548,550,560,569,574,579,593,600,610,
	613,618,629,635,639,643,653,657,662,673,692,701,706];

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
