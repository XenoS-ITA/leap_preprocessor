import { ParserRuleContext, TerminalNode } from 'antlr4';
import { CompactfuncContext, ArgsContext, AttnamelistContext, AttribContext, BlockContext, ChunkContext, ClassContext, CompoundContext, DecoratorbodyContext, DecoratorContext, DefaultvalueContext, ExpContext, ExplistContext, ExtendedparContext, ExtendedparlistContext, FieldContext, FieldlistContext, FieldsepContext, FuncbodyContext, FuncnameContext, FunctioncallContext, FunctiondefContext, IdentifierContext, Indexed_memberContext, LabelContext, NamelistContext, NewcallContext, NumberContext, ParlistContext, PartypeContext, PrefixexpContext, RetstatContext, Start_Context, StatContext, StringContext, TablecomprehensionContext, TableconstructorContext, VarContext, VarlistContext, FilterfieldContext, FilterfieldlistContext, ArgumentlistContext, ArgumentContext, TypeContext, IsopContext } from '../grammar/LuaParser.js';
import LuaListener from '../grammar/LuaParserListener.js';
import Utils from './utils.js';
import CodeManager from './manager.js';
import LuaLexer from '../grammar/LuaLexer.js';
import { Injecter } from './injecter.js';
import CodeSnippets from './codeSnippets.js';

// Patch the code manager with the "inject" feature
class Code extends CodeManager {
    constructor(gen?: CodeGenerator) {
        super();

        if (gen) {
            gen.injecter.injectIfNeeded(this);
        }
    }
}

class CodeGenerator extends LuaListener {
    firstStat: boolean = true
    injecter: Injecter
    currentFunctionParList: ParlistContext
    insideClass: string;
    insideTryCatch: boolean;
    
    assignment: boolean;
    functionsName: Array<string | Array<string>>;
    
    functionReturn: boolean;
    kargsTable: { [key: number]: string };

    forDepth: number = 0

    classBuildInjected: boolean = false

    constructor() {
        super();
        this.injecter = new Injecter()
        this.kargsTable = {}
        this.functionsName = []
    }

    convert = (tree: Start_Context) => {
        this.firstStat = true

        // Wrapp the string in a object so that can be passed as reference
        let code = {code: this.enterStart_(tree)}
        
        this.injecter.injectGlobalFeatures(code)

        return code.code
    }

    //#region Parser rules conversion (Orded like the parser rules)
    enterStart_ = (ctx: Start_Context): string => {
        return this.enterChunk(ctx.chunk());
    };

	enterChunk = (ctx: ChunkContext): string => {
        return this.enterBlock(ctx.block());
    };

    enterBlock = (ctx: BlockContext): string => {
        let code = new Code(this);

        const funcname = this.getFunctionName();

        ctx.stat_list().forEach(stat => {
            // If there'are some comments before the first statement preserve the lines
            if (this.firstStat) {
                // If start index is not 0 (theres something before) add space until the first statement
                if (stat.start.start > 0) {
                    code.code += Utils.getSpacesUntilToken(stat.start);
                }
                
                this.firstStat = false;
            }

            code.add(stat, this.enterStat);
        })

        if (ctx.retstat()) {
            if (funcname && ctx.retstat().RETURN() && ctx.retstat().explist()) {
                this.functionReturn = true
            }
            code.add(ctx.retstat(), this.enterRetstat);
        }

        return code.get();
    }

	enterStat = (ctx: StatContext): string => {
        if (ctx.SEMI()) {
            return ';';
        } else if (ctx.varlist()) {
            return this.convertAssignment(ctx);
        } else if (ctx.compound()) {
            return this.enterCompound(ctx.compound());
        } else if (ctx.functioncall()) {
            return this.enterFunctioncall(ctx.functioncall());
        } else if (ctx.label()) {
            return this.enterLabel(ctx.label());
        } else if (ctx.BREAK()) {
            return 'break';
        } else if (ctx.GOTO()) {
            return this.convertGoto(ctx);
        } else if (ctx.WHILE()) {
            return this.convertWhile(ctx);
        } else if (ctx.REPEAT()) {
            return this.convertRepeat(ctx);
        } else if (ctx.IF()) {
            return this.convertIf(ctx);
        } else if (ctx.FOR()) {
            if (ctx.IN()) {
                return this.convertGenericFor(ctx);
            } else {
                return this.convertNumericFor(ctx);
            }
        } else if (ctx.DO()) { // Moved after since there'are other DO's (while, for do, etc.)
            return this.convertDo(ctx);
        } else if (ctx.DEFER()) {
            return this.convertDefer(ctx);
        } else if (ctx.TRY()) {
            return this.convertTry(ctx);
        } else if (ctx.THROW()) {
            return this.convertThrow(ctx);

        } else if (ctx.class_()) {
            return this.enterClass(ctx.class_());
        } else if (ctx.FUNCTION()) {
            if (ctx.LOCAL()) {
                return this.convertLocalFunction(ctx);
            } else {
                return this.convertFunction(ctx);
            }
        } else if (ctx.FILTER()) {
            return this.convertFilter(ctx);
        } else if (ctx.USING()) {
            return this.convertUsing(ctx);
        } else if (ctx.LOCAL()) {
            return this.convertLocal(ctx);
        }
    };

    enterAttnamelist = (ctx: AttnamelistContext): string => {
        const code = new Code();

        ctx.identifier_list().forEach((name, i) => {
            if (i > 0) code.add(",")

            code.add(name)
            code.add(ctx.attrib(i), this.enterAttrib);
        })

        return code.get();
    }

    enterAttrib = (ctx: AttribContext): string => {
        if (ctx.identifier()) {
            return ctx.LT() + ctx.identifier().getText() + ctx.GT();
        }

        return ""
    }

    enterRetstat = (ctx: RetstatContext): string => {
        const code = new Code();

        if (ctx.RETURN()) {
            code.add(ctx.RETURN())

            if (ctx.explist()) {
                code.add(ctx.explist(), this.enterExplist);
            }
        } else if (ctx.BREAK()) {
            code.add(ctx.BREAK());
        } else if (ctx.CONTINUE()) {
            code.add(this.convertContinue(ctx.CONTINUE()));
        }

        if (ctx.SEMI()) {
            code.add(ctx.SEMI());
        }

        return code.get();
    }

    enterLabel = (ctx: LabelContext): string => {
        return '::' + ctx.identifier().getText() + '::';
    }

    enterFuncname = (ctx: FuncnameContext): string => {
        const code = new Code();
        const nameList = ctx.identifier_list();
        const dotList = ctx.DOT_list();
        
        code.add(ctx.identifier(0))

        for (let i=0; i < dotList.length; i++) {
            code.add(dotList[i]);

            // Skip first name since it's already added
            code.add(nameList[i+1]);
        }

        if (ctx.COL()) {
            code.add(ctx.COL());
            code.add(nameList[nameList.length-1]);
        }

        return code.get();
    }

    enterVarlist = (ctx: VarlistContext): string => {
        return Utils.convertNodes(ctx.var__list(), this.enterVar);
    }

    enterNamelist = (ctx: NamelistContext): string => {
        const code = new Code();
        code.add(ctx.identifier_list(), Utils.convertNodes)
        return code.get();
    }

    enterDecoratorbody = (ctx: DecoratorbodyContext): string => {
        const code = new Code();

        if (ctx.explist()) {
            code.add(ctx.explist(), this.enterExplist);
        }

        return code.get()
    };

    enterNewcall = (ctx: NewcallContext): string => {
        const code = new Code();
        
        code.add(ctx.functioncall(), this.enterFunctioncall)

        return code.get();
    }

    enterExplist = (ctx: ExplistContext): string => {
        return Utils.convertNodes(ctx.exp_list(), this.enterExp);
    }

    enterExp = (ctx: ExpContext): string => {
        if (ctx.NIL()) {
            return 'nil';
        } else if (ctx.FALSE()) {
            return 'false';
        } else if (ctx.TRUE()) {
            return 'true';
        } else if (ctx.number_()) {
            return this.enterNumber(ctx.number_());
        } else if (ctx.string_()) {
            return this.enterString(ctx.string_());
        } else if (ctx.DDD()) {
            return '...';
        
        // LEAP
        } else if (ctx.newcall()) {
            return this.enterNewcall(ctx.newcall());
        } else if (ctx.QUESTMARK()) {
            return this.convertTernary(ctx);
        } else if (ctx.isop()) {
            return this.enterIsop(ctx.isop());

        } else if (ctx.functiondef()) {
            if (this.assignment) {
                return this.enterFunctiondef(ctx.functiondef());
            } else {
                const id = this.addFunctionName("", true)
                const func = this.enterFunctiondef(ctx.functiondef());
                this.removeFunctionName(id)
                return func;
            }
            
        } else if (ctx.prefixexp()) {
            return this.enterPrefixexp(ctx.prefixexp());

        } else if (ctx.compactfunc()) {
            return this.enterCompactfunc(ctx.compactfunc());
        } else if (ctx.tablecomprehension()) {
            return this.enterTablecomprehension(ctx.tablecomprehension());

        } else if (ctx.tableconstructor()) {
            return this.enterTableconstructor(ctx.tableconstructor());
        } else if (ctx.exp(0)) {
            return this.handleOperators(ctx);
        }
    }

    enterFilterfield = (ctx: FilterfieldContext) => {
        const code = new Code();

        code.add("assert(")
        code.add(ctx.exp(), this.enterExp);

        if (ctx.ELSE()) {
            code.add(", ")
            code.add(ctx.explist(), this.enterExplist);
        }

        code.add(")");

        return code.get();
    };

    enterFilterfieldlist = (ctx: FilterfieldlistContext): string => {
        const code = new Code();
        const fieldList = ctx.filterfield_list();
        const fieldsepList = ctx.fieldsep_list();

        code.add(fieldList[0], this.enterFilterfield);

        for (let i = 1; i < fieldList.length; i++) {
            // -1 since field sep is between fields and dont exist 100% initially
            code.add(fieldList[i], this.enterFilterfield);
        }

        return code.get();
    }

    enterTablecomprehension = (ctx: TablecomprehensionContext) => {
        const code = new Code();
        const explist = ctx.exp_list();

        // Function start
        code.add('(function()local _t = {};');

        // For start
        code.add(ctx.FOR());
        code.add(ctx.namelist(), this.enterNamelist);
        code.add(ctx.IN());
        code.add(ctx.explist(), this.enterExplist);
        code.add(" do ");

        // If start
        if (ctx.IF()) {
            code.add(ctx.IF());

            // If there are more than 1 exp before the for, the if exp is the last
            if (ctx.COMMA()) {
                code.add(explist[2], this.enterExp);
            } else { // Otherwise is always the second
                code.add(explist[1], this.enterExp);
            }

            code.add(" then ");   
        }

        // Comma = 2 exps = (_t[k] = v)
        if (ctx.COMMA()) {
            code.add("_t[");
            code.add(explist[0], this.enterExp);
            code.add("]");
            code.add(" = ");
            code.add(explist[1], this.enterExp);
        } else { // Only 1 exp = (table.insert(_t, exp))
            code.add("table.insert(_t, ");
            code.add(explist[0], this.enterExp);
            code.add(")");
        }

        code.add(";");
        
        // If end
        if (ctx.IF()) {
            code.add("end;");
        }

        // For end
        code.add("end;")

        // Function end
        code.add("return _t;");
        code.add("end)()")

        return code.get();
    };

    enterCompactfunc = (ctx: CompactfuncContext): string => {
        const code = new Code();

        code.add("function")

        // Default for functions without parentesis (1 parameter)
        if (ctx.OP()) {
            code.add(ctx.OP())
        } else {
            code.add("(")
        }

        if (ctx.parlist()) {
            code.add(ctx.parlist(), this.enterParlist)
        } else if (ctx.identifier()) {
            code.add(ctx.identifier(), this.enterIdentifier)
        }

        if (ctx.OP()) {
            code.add(ctx.CP()) 
        } else {
            code.add(")")
        }

        if (ctx.block()) {
            code.add(ctx.block(), this.enterBlock);
            code.add(ctx.END());
        } else if (ctx.exp()) {
            code.add("return ");
            code.add(ctx.exp(), this.enterExp)
            code.add(";")
            code.add("end")
        }


        return code.get();
    };

    enterIndexed_member = (ctx: Indexed_memberContext): string => {
        if (ctx.OB()) {
            return ctx.OB() + this.enterExp(ctx.exp()) + ctx.CB();
        } else if (ctx.DOT()) {
            if (ctx.QUESTMARK()) {
                return ctx.QUESTMARK().getText() + ctx.DOT().getText() + ctx.identifier().getText();   
            } else {
                return ctx.DOT() + ctx.identifier().getText();
            }
        }
    };

    enterVar = (ctx: VarContext): string => {
        if (ctx.identifier()) {
            return ctx.identifier().getText();
        } else if (ctx.indexed_member()) {
            return this.enterPrefixexp(ctx.prefixexp()) + this.enterIndexed_member(ctx.indexed_member());
        }
    }

    /*
        : 'nil'
        | 'false'
        | 'true'
        | number
        | string
        | '...'
        | new
        | functiondef
        | prefixexp
        | tableconstructor
        | <assoc = right> exp ('^') exp
        | ('not' | '#' | '-' | '~') exp
        | exp ('*' | '/' | '%' | '//') exp
        | exp ('+=' | '-=' | '*=' | '/=' | '<<=' | '>>=' | '&=' | '|=' | '^=' ) exp // cfxlua, compound operators
        | exp ('+' | '-') exp
        | <assoc = right> exp ('..') exp
        | exp ('<' | '>' | '<=' | '>=' | '~=' | '==') exp
        | exp ('and') exp
        | exp ('or') exp
        | exp ('&' | '|' | '~' | '<<' | '>>') exp
    */
    enterPrefixexp = (ctx: PrefixexpContext | FunctioncallContext): string => {
        let code = new Code();

        if (ctx.functioncall()) {
            code.add(ctx.functioncall(), this.enterFunctioncall);
        } else if (ctx.exp()) {
            code.add("(");
            code.add(ctx.exp(), this.enterExp);
            code.add(")");
        } else {
            code.add(ctx.identifier(0));
        }

        code.add(ctx.indexed_member_list(), nodes => Utils.convertNodes(nodes as ParserRuleContext[], this.enterIndexed_member, null) );

        return code.get()
    };

    enterFunctioncall = (ctx: FunctioncallContext): string => {
        let code = new Code()

        code.add(ctx, this.enterPrefixexp)

        if (ctx.COL()) {
            code.add(ctx.COL())

            const nameList = ctx.identifier_list()
            code.add(nameList[nameList.length-1])
        }

        const id = this.addFunctionName(code.get())
        code.add(ctx.args(), this.enterArgs)
        this.removeFunctionName(id)

        return code.get()
    }

    // ('+=' | '-=' | '*=' | '/=' | '<<=' | '>>=' | '&=' | '|=' | '^=' )
    enterCompound = (ctx: CompoundContext): string => {
        const code = new Code();
        const child = ctx.getChild(1) as TerminalNode

        code.add(ctx.var_(), this.enterVar);
        code.add(child);
        code.add(ctx.exp(), this.enterExp);

        return code.get()
    }

    //@ts-expect-error
    enterArgument = (ctx: ArgumentContext, id: number): string => {
        const code = new Code();
        const identifier = ctx.identifier()
        
        if (identifier != null && ctx.exp()) {
            this.injecter.enableGlobalFeature("kargs")
            this.kargsTable[id] += `${this.enterIdentifier(identifier)} = ${this.enterExp(ctx.exp())},`

            return `nil` // Skip this argument (but preserve identation and positional arguments!)
        } else {
            code.add(ctx.exp(), this.enterExp)
        }

        return code.get()
    };

    //@ts-expect-error
    enterArgumentlist = (ctx: ArgumentlistContext, id: number): string => {
        const func = (ctx: any) => {
            return this.enterArgument(ctx, id)
        }

        return Utils.convertNodes(ctx.argument_list(), func);
    }

    enterArgs = (ctx: ArgsContext): string => {
        if (ctx.string_()) {
            return this.enterString(ctx.string_());
        } else if (ctx.tableconstructor()) {
            return this.enterTableconstructor(ctx.tableconstructor());
        } else if (ctx.OP()) {
            const code = new Code();
            const argslist = ctx.argumentlist()
            code.add(ctx.OP())

            if (argslist) {
                const id = argslist.start.start // We use the tokenIndex as id
                this.kargsTable[id] = "" // Distinguish kargs for each args parsing to avoid mixing kargs of sub calls.

                const argslistconv = this.enterArgumentlist(argslist, id)
                code.addSpaces(code.lastNode, argslist);

                code.lastNode = argslist
                
                //console.log("kargs with id ", id, "is", this.kargsTable[id])
                if (this.kargsTable[id].length > 0) {
                    // Add call for kargs before arguments
                    code.add(`__leap_call_kargs(${this.getFunctionName(null, true)}, {${this.kargsTable[id]}}`)

                    if (argslistconv.length > 0) {
                        code.add(",")
                    }
                }

                // Lets add the rest of the arguments
                code.add(argslistconv);
                
                // Close kargs call
                if (this.kargsTable[id].length > 0) {
                    code.add(")");
                }

                delete this.kargsTable[id]
            }

            code.add(ctx.CP());

            return code.get();
        }
    }
    
    enterFunctiondef = (ctx: FunctiondefContext): string => {
        const code = new Code();
        const functionName = this.getFunctionName()

        if (!functionName) {
            code.add(ctx.FUNCTION())
            code.add(ctx.funcbody(), this.enterFuncbody);
        } else {
            let actualFuncname: string

            if (typeof functionName == "string") {
                actualFuncname = functionName
            } else {
                actualFuncname = functionName[functionName.length - 1]
            }

            const injectBody = (code) => {
                code.add(ctx.funcbody(), this.enterFuncbody);

                if (Array.isArray(functionName)) functionName.shift();
            }

            const injectArgs = (code) => {
                this.injecter.injectIfNeeded(code, "enterFunctiondef");
            }

            const functionReturn = () => {
                const ret = this.functionReturn

                if (this.functionReturn) {
                    this.functionReturn = false
                }
             
                return ret
            }

            const introspection = CodeSnippets.functionIntrospection(actualFuncname, injectBody, injectArgs, functionReturn)
            code.add(introspection)
        }

        return code.get();
    }

    enterFuncbody = (ctx: FuncbodyContext): string => {
        const code = new Code();
        
        code.add(ctx.OP())

        if (ctx.parlist()) {
            code.add(ctx.parlist(), this.enterParlist);
        }
        
        code.add(ctx.CP())

        this.injecter.injectIfNeeded(code);

        const savedInsideClass = this.insideClass;
        if (savedInsideClass) this.insideClass = null;

        this.currentFunctionParList = ctx.parlist()

        code.add(ctx.block(), this.enterBlock)
        code.add(ctx.END())

        this.currentFunctionParList = null
        if (savedInsideClass) this.insideClass = savedInsideClass;

        return code.get();
    }

    enterClass = (ctx: ClassContext):string => {
        const code = new Code();
        const decorList = ctx.decorator_list()
        const name = this.enterIdentifier(ctx.identifier(0));

        this.convertDecoratorList(decorList, code, name, "enterClass");

        this.classBuildInjected = true
        this.injecter.enableGlobalFeature("classBuilder");

        code.add("_leap_internal_classBuilder(")
        code.add("\"")
        code.add(ctx.identifier(0), this.enterIdentifier, true)
        code.add("\"")

        code.add(",")

        this.insideClass = name;
        code.add(ctx.tableconstructor(), this.enterTableconstructor)
        this.insideClass = null;

        if (ctx.EXTENDS()) {
            code.add(", ")
            code.add(ctx.identifier(1), this.enterIdentifier)
        } else {
            code.add(", {}")
        }

        code.add(")")

        this.injecter.injectIfNeeded(code);

        return code.get();
    };

    enterIsop = (ctx: IsopContext): string => {
        const code = new Code();

        code.add("_leap_internal_is_operator(")
        code.add(ctx.var_(0), this.enterVar);
        code.add(",")
        code.add(ctx.var_(1), this.enterVar);
        code.add(")")

        return code.get();
    }

    enterType = (ctx: TypeContext): string => {
        if (ctx.identifier()) {
            return this.enterIdentifier(ctx.identifier());
        } else if (ctx.NIL()) {
            return ctx.NIL().getText();
        }
    }

    enterExtendedpar = (ctx: ExtendedparContext) => {
        const code = new Code();
        let codeToInject: string = "";

        code.add(ctx.identifier(), this.enterIdentifier)
        const pctx = ctx.partype() as PartypeContext;
        const typelist = pctx.type__list();

        // Default value before type checking
        if (ctx.defaultvalue().getChildCount() > 0) {
            codeToInject += CodeSnippets.defaultValue(ctx.identifier(), this.enterDefaultvalue(ctx.defaultvalue()))
        }

        if (typelist.length > 0) {
            const typeliststr = typelist.map((v) => this.enterType(v))

            codeToInject += CodeSnippets.typeCheck(typeliststr, ctx.identifier())
        }

        if (codeToInject != "") {
            this.injecter.inNext("enterFuncbody", codeToInject)
        }

        return code.get();
    };

    enterExtendedparlist = (ctx: ExtendedparlistContext): string => {
        const code = new Code();

        // cfxlua (class)
        if (this.insideClass) {
            code.add("self, ")
        }

        const extendedparlist = ctx.extendedpar_list();

        extendedparlist.forEach((extendedpar, i) => {
            if (i > 0) code.add(",")
            code.add(extendedpar, this.enterExtendedpar)
        })

        // Already convert parlist to strings
        const parliststr = extendedparlist.map((v) => '{name = "'+this.enterIdentifier(v.identifier())+'"},')

        /// Save the parlist in the function metatable
        this.injecter.cleanInjects("enterFunctiondef")
        this.injecter.inNext("enterFunctiondef", parliststr.join(""))

        return code.get();
    };

    enterDefaultvalue = (ctx: DefaultvalueContext) => {
        return this.enterExp(ctx.exp())
    };

    enterParlist = (ctx: ParlistContext): string => {
        const code = new Code();

        if (ctx.extendedparlist()) {
            code.add(ctx.extendedparlist(), this.enterExtendedparlist);

            if (ctx.COMMA() && ctx.DDD()) {
                code.add(ctx.COMMA());
                code.add(ctx.DDD())
            }
        } else if (ctx.DDD()) {
            code.add(ctx.DDD())
        } else {
            // cfxlua (class)
            if (this.insideClass) {
                code.add("self")
            }
        }

        /* if (ctx.namelist()) {
            code.add(ctx.namelist(), this.enterNamelist);

            if (ctx.COMMA() && ctx.DDD()) {
                code.add(ctx.COMMA());
                code.add(ctx.DDD())
            }
        } else if (ctx.DDD()) {
            code.add(ctx.DDD())
        } // Parlist can be empty */

        return code.get();
    }

    enterTableconstructor = (ctx: TableconstructorContext): string => {
        const code = new Code();

        code.add(ctx.OCU())

        if (ctx.fieldlist()) {
            code.add(ctx.fieldlist(), this.enterFieldlist);
        }

        code.add(ctx.CCU())

        return code.get();
    }

    enterFieldlist = (ctx: FieldlistContext): string => {
        const code = new Code();
        const fieldList = ctx.field_list();
        const fieldsepList = ctx.fieldsep_list();

        code.add(fieldList[0], this.enterField);

        for (let i = 1; i < fieldList.length; i++) {
            // -1 since field sep is between fields and dont exist 100% initially
            code.add(fieldsepList[i-1], this.enterFieldsep);
            code.add(fieldList[i], this.enterField);
        }

        // If fieldsep is equal to fieldlist then there's a last fieldsep that need to be added
        if (fieldsepList.length == fieldList.length) {
            code.add(fieldsepList[fieldsepList.length-1], this.enterFieldsep);
        }

        return code.get();
    }

    enterField = (ctx: FieldContext): string => {
        const code = new Code();
        const decorator_list = ctx.decorator_list();

        if (decorator_list.length > 0) {
            let funcName = "";

            // Preserve decorators spaces
            code.addSpaces(ctx.decorator_list()[0], ctx.functiondef());

            if (ctx.OB()) {
                funcName = this.enterExp(ctx.exp(0))

                code.add(ctx.OB())
                code.add(ctx.exp(0), this.enterExp);
                code.add(ctx.CB())
    
                code.add(ctx.EQ())

            } else if (ctx.identifier()) {
                funcName = this.enterIdentifier(ctx.identifier())

                code.add(ctx.identifier())
                code.add(ctx.EQ())
            }

            decorator_list.forEach(decorator => {
                const name = this.enterVar(decorator.var_())
                const body = this.enterDecoratorbody(decorator.decoratorbody())

                this.injecter.inNext("enterClass", CodeSnippets.classDecorator(this.insideClass, funcName, name, body))
            })

            //this.injecter.inNext("enterClass", "end")

            code.add(ctx.functiondef(), this.enterFunctiondef);

        } else if (ctx.OB()) {
            const isfunc = ctx.exp(1).functiondef()
            let id = null

            if (isfunc) id = this.addFunctionName(this.enterExp(ctx.exp(0)))

            code.add(ctx.OB())
            code.add(ctx.exp(0), this.enterExp);
            code.add(ctx.CB())

            this.assignment = true
            code.add(ctx.EQ())
            code.add(ctx.exp(1), this.enterExp);
            this.assignment = false

            if (isfunc) this.removeFunctionName(id)
        
        } else if (ctx.DOT()) { // cfxlua (setconstructor)
            code.add(ctx.DOT())
            code.add(ctx.identifier())
        } else if (ctx.identifier()) {
            const isfunc = ctx.exp(0).functiondef()
            let id = null

            if (isfunc) id = this.addFunctionName(this.enterIdentifier(ctx.identifier()))

            code.add(ctx.identifier())

            this.assignment = true
            code.add(ctx.EQ())
            code.add(ctx.exp(0), this.enterExp);
            this.assignment = false

            if (isfunc) this.removeFunctionName(id)
        } else {
            code.add(ctx.exp(0), this.enterExp);
        }

        return code.get();
    }

    enterFieldsep = (ctx: FieldsepContext): string => {
        if (ctx.COMMA()) {
            return ctx.COMMA().getText();
        } else if (ctx.SEMI()) {
            return ctx.SEMI().getText();
        }
    }

    enterIdentifier = (ctx: IdentifierContext): string => {
        return ctx.getText();
    }

    enterNumber = (ctx: NumberContext): string => {
        if (ctx.INT_list().length > 0) {
            let ret = "";

            ctx.INT_list().map((int) => {
                ret += int.getText().replace("_", "");
            })

            return ret;
        } else {
            return ctx.getText();
        }
    }

    enterString = (ctx: StringContext): string => {
        let text = ctx.getText();
        const normalstring = ctx.NORMALSTRING()
        const charstring = ctx.CHARSTRING()

        if (normalstring || charstring) {
            // Doing it with regex, not found any better way to do it with ANTLR
            const regex = /\$\{([^}]*)\}/g;
            const matches = text.matchAll(regex)
            const stringInit = charstring ? "'" : "\""

            for (const match of matches) {
                text = text.replace(match[0], `${stringInit}..(${match[1]})..${stringInit}`)
            }            
        }
        
        return text;
    }
    //#endregion

    //#region Other
    handleOperators = (ctx: ExpContext): string => {
        const code = new Code();
        const explist = ctx.exp_list();

        if (explist.length == 1) { // ('not' | '#' | '-' | '~')
            code.add(ctx.getChild(0) as TerminalNode);
            code.add(explist[0], this.enterExp);
        } else {
            let child = ctx.getChild(1) as TerminalNode;

            // Handle "not" in the "not in" operator
            if (child.symbol.type == LuaLexer.NOT) {
                code.add("not ")
                child = ctx.getChild(2) as TerminalNode // Skip to next token
            }
            
            // In operator custom handling
            if (child.symbol.type == LuaLexer.IN) {
                this.injecter.enableGlobalFeature("inOperator")

                code.add("_leap_internal_in_operator(")
                code.add(explist[0], this.enterExp);
                code.add(",");
                code.add(explist[1], this.enterExp);
                code.add(")")
            } else {
                // Convert != to ~= (leap > lua)
                if (ctx.NOTEQ_ALT()) {
                    Utils.convertToken(child.symbol, LuaLexer.SQEQ);
                }
    
                code.add(explist[0], this.enterExp);
                code.add(child);
                code.add(explist[1], this.enterExp);
            }
        }

        return code.get();
    }
    //#endregion

    //#region Converters (similar to parser rules but without a specific rule or context)
    convertGoto = (ctx: StatContext): string => {
        return 'goto ' + ctx.identifier().getText();
    }

    convertDecoratorList = (decorList: DecoratorContext[], code: Code, funcName: string, injectAfter: string) => {
        if (decorList) {
            const decoratorWithFuncName = (node: DecoratorContext) => this.convertDecorator(funcName, node, injectAfter);

            // We need to consume the decorators lines
            decorList.forEach(decorator => {
                code.add(decorator, decoratorWithFuncName);
            })
        }
    }
    
    convertDo = (ctx: StatContext): string => {
        const code = new Code();

        code.add(ctx.DO());
        code.add(ctx.block(0), this.enterBlock);
        code.add(ctx.END());

        return code.get();
    }

    convertDefer = (ctx: StatContext): string => {
        const code = new Code();

        code.add(ctx.DEFER());
        code.add(ctx.block(0), this.enterBlock);
        code.add(ctx.END());

        return code.get();
    }

    convertTry = (ctx: StatContext): string => {
        const code = new Code();

        code.add("local _leap_internal_status, _leap_internal_result = pcall(function()")

        this.insideTryCatch = true;

            // Manually handle spaces since we discard the TRY and CATCH tokens
            code.addSpaces(ctx.TRY(), ctx.block(0)); // TRY > BLOCK
            code.add(ctx.block(0), this.enterBlock);
            code.addSpaces(ctx.block(0), ctx.CATCH()); // BLOCK > CATCH

            // Set last node as CATCH (so that the identifier spaces will be handled correctly)
            code.lastNode = ctx.CATCH();

        this.insideTryCatch = false;

        code.add(`end) if not _leap_internal_status then `);

        if (ctx.identifier()) {
            code.add("local ");
            code.add(ctx.identifier(), this.enterIdentifier);
            code.add(` = _leap_internal_result;`);
        }

        // Parse catch block
        code.add(ctx.block(1), this.enterBlock);

        // Manually handle spaces since we discard the END token
        code.addSpaces(ctx.block(1), ctx.END());
        code.add(` elseif _leap_internal_result ~= nil then return _leap_internal_result end;`);

        return code.get();
    }

    convertThrow = (ctx: StatContext): string => { 
        if (this.insideTryCatch) {
            return `error(${this.enterExp(ctx.exp(0))})`
        } else {
            return `error(tostring(${this.enterExp(ctx.exp(0))}))`
        }
    }

    convertTernary = (ctx: ExpContext): string => {
        const code = new Code();

        code.add("(function()")
            code.add("if ")
            code.add(ctx.exp(0), this.enterExp);
            code.add(" then ")
                code.add("return"); code.add(ctx.exp(1), this.enterExp);
            code.add(" else ")
                code.add("return"); code.add(ctx.exp(2), this.enterExp);
            code.add(" end;");
        code.add("end"); // end of function
        code.add(")()");

        return code.get();
    }

    convertWhile = (ctx: StatContext): string => {
        const code = new Code();

        code.add(ctx.WHILE());
        code.add(ctx.exp(0), this.enterExp);

        code.add(ctx.DO());
        code.add(ctx.block(0), this.enterBlock);
        code.add(ctx.END());

        return code.get();
    }

    convertRepeat = (ctx: StatContext): string => {
        const code = new Code();

        code.add(ctx.REPEAT());
        code.add(ctx.block(0), this.enterBlock);
        code.add(ctx.UNTIL());
        code.add(ctx.exp(0), this.enterExp);

        return code.get();
    }

    convertIf = (ctx: StatContext): string => {
        const code = new Code();
        const blockList = ctx.block_list();

        code.add(ctx.IF());
        code.add(ctx.exp(0), this.enterExp);
        code.add(ctx.THEN(0));
        code.add(blockList[0], this.enterBlock);

        if (ctx.ELSEIF_list()) {
            ctx.ELSEIF_list().forEach((elseif, i) => {
                code.add(elseif)

                // Need to skip first exp
                code.add(ctx.exp(i+1), this.enterExp)
                code.add(ctx.THEN(i+1))
                code.add(blockList[i+1], this.enterBlock)
            })
        }

        if (ctx.ELSE()) {
            code.add(ctx.ELSE())
            code.add(blockList[blockList.length-1], this.enterBlock)
        }

        code.add(ctx.END());

        return code.get();
    }

    convertNumericFor = (ctx: StatContext): string => {
        const code = new Code();
        const expList = ctx.exp_list();

        this.forDepth++

        code.add(ctx.FOR());
        code.add(ctx.identifier());
        code.add(ctx.EQ());
        code.add(expList[0], this.enterExp);
        code.add(ctx.COMMA(0));
        code.add(expList[1], this.enterExp);

        if (ctx.COMMA(1)) {
            code.add(ctx.COMMA(1));
            code.add(expList[2]);
        }

        code.add(ctx.DO());
        code.add(ctx.block(0), this.enterBlock);

        // Inject only current depth code
        this.injecter.injectIfNeeded(code, "convertFor_"+this.forDepth);

        code.add(ctx.END());

        this.forDepth--

        return code.get();
    }

    convertGenericFor = (ctx: StatContext): string => {
        const code = new Code();
        this.forDepth++

        code.add(ctx.FOR());
        code.add(ctx.namelist(), this.enterNamelist)
        code.add(ctx.IN());
        code.add(ctx.explist(), this.enterExplist);
        code.add(ctx.DO());
        code.add(ctx.block(0), this.enterBlock);

        this.injecter.injectIfNeeded(code, "convertFor_"+this.forDepth);

        code.add(ctx.END());

        this.forDepth--

        return code.get();
    }

    convertDecorator = (funcName: string, ctx: DecoratorContext, injectAfter?: string): string => {
        const decoratorName = this.enterVar(ctx.var_())
        const decBody = this.enterDecoratorbody(ctx.decoratorbody())

        this.injecter.inNext(injectAfter, CodeSnippets.decorator(funcName, decoratorName, decBody))

        return " "
    }

    convertFunction = (ctx: StatContext): string => {
        const code = new Code();
        const decorList = ctx.decorator_list()
        const name = this.enterFuncname(ctx.funcname());

        this.convertDecoratorList(decorList, code, name, "convertFunction");
        
        if (ctx.funcname().COL()) {
            this.insideClass = "true" // Inject self in the function parameters
            
            // Replace colons with dots
            code.add(ctx.funcname(), (node: any) => {
                return this.enterFuncname(node).replace(":", ".")
            });

            code.add(" = ")
        } else {
            code.add(ctx.funcname(), this.enterFuncname);
            code.add(" = ")
        }

        // Use only last identifier as function name
        const nameList = ctx.funcname().identifier_list()
        const funcname = this.enterIdentifier(nameList[nameList.length-1]);

        const id = this.addFunctionName(funcname)
        code.add(this.enterFunctiondef(ctx));
        this.removeFunctionName(id)

        // If we where in the "true" class, reset it 
        if (this.insideClass == "true") {
            this.insideClass = null
        }


        this.injecter.injectIfNeeded(code);

        return code.get();
    }

    convertFilter = (ctx: StatContext): string => {
        const code = new Code();
        const filterfieldlist = ctx.filterfieldlist()
        const filterfield_list = filterfieldlist.filterfield_list()

        code.add(ctx.funcname(), this.enterFuncname);
        code.add(" = ");
        code.add("[[");
        code.addSpaces(ctx.funcname(), filterfield_list.at(0)) // Add space after return (this ensures that the error message line is correct)
        code.add("return function(");
        
        if (ctx.parlist()) {
            code.add(ctx.parlist(), this.enterParlist);
            code.add(", ...) ");
        } else {
            code.add("...) ");
        }

        code.add(this.enterFilterfieldlist(filterfieldlist));

        code.addSpaces(filterfield_list.at(-1), ctx.END());
        code.add("end]]");
        
        return code.get();
    }
    
    convertUsing = (ctx: StatContext): string => {
        const code = new Code();

        this.injecter.enableGlobalFeature("usingOperator")

        code.add("_leap_internal_using_operator(\"")
        code.add(ctx.identifier(), this.enterIdentifier);
        code.add("\"")

        code.add(",")
        code.add("{");

        // Self is always passed
        code.add("self = self,");

        // DDD is passed if exists
        if (this.currentFunctionParList.DDD()) {
            code.add("ddd = {...},")
        }

        // Pass all parameters
        const parctx = this.currentFunctionParList.extendedparlist()
        if (parctx) {
            const extendedparlist = parctx.extendedpar_list();
    
            extendedparlist.forEach((extendedpar, i) => {
                code.add(this.enterIdentifier(extendedpar.identifier()))
                code.add(" = ")
                code.add(this.enterIdentifier(extendedpar.identifier()))
    
                if (i != extendedparlist.length-1)
                    code.add(",")
            })
        }

        code.add("}")
        
        if (ctx.explist()) {
            code.add(",");
            code.add(ctx.explist(), this.enterExplist);
        }

        if (ctx.CP()) {
            code.add(ctx.CP())
        } else {
            code.add(")")
        }

        return code.get();
    }

    convertLocalFunction = (ctx: StatContext): string => {
        const code = new Code();

        code.add(ctx.LOCAL());
        code.add(ctx.identifier(), this.enterIdentifier);
        code.add(" = ");
        
        const id = this.addFunctionName(this.enterIdentifier(ctx.identifier()))
        code.add(this.enterFunctiondef(ctx));
        this.removeFunctionName(id)

        return code.get();
    }

    convertLocal = (ctx: StatContext): string => {
        const code = new Code();

        // Save functions names in an array (every function will shift() is name)
        const funcs = ctx.explist()?.exp_list()
        const identifiers = ctx.attnamelist().identifier_list()
        const id = funcs ? this.addFunctionName(this.getFunctionNames(funcs, identifiers)) : null

        code.add(ctx.LOCAL());
        code.add(ctx.attnamelist(), this.enterAttnamelist);

        if (ctx.prefixexp()) {
            code.add(ctx.IN());
            code.add(ctx.prefixexp(), this.enterPrefixexp);
        } else if (ctx.EQ()) {
            code.add(ctx.EQ());

            this.assignment = true
            code.add(ctx.explist(), this.enterExplist);
            this.assignment = false
        }

        if (id) {
            this.removeFunctionName(id)
        }

        return code.get();
    }

    convertContinue = (node: TerminalNode): string => {
        // Inject the continue label at the end of the current for type
        this.injecter.inNext(`convertFor_${this.forDepth}`, ` ::continue_${this.forDepth}::`)

        return `goto continue_${this.forDepth}`;
    }

    convertAssignment = (ctx: StatContext): string => {
        const funcs = ctx.explist().exp_list()
        const identifiers = ctx.varlist().var__list()

        const id = this.addFunctionName(this.getFunctionNames(funcs, identifiers))

        const varlist = this.enterVarlist(ctx.varlist());
        const eq = ctx.EQ().getText();

        this.assignment = true
        const explist = this.enterExplist(ctx.explist());
        this.assignment = false

        this.removeFunctionName(id)

        return `${varlist} ${eq} ${explist}`;
    }
    //#endregion

    getFunctionNames = (funcs: ExpContext[], identifiers: IdentifierContext[] | VarContext[]) => {
        let functionNames = [];

        for (const [i, func] of Object.entries(funcs)) {
            const identifier = identifiers[i]

            if (func.functiondef() && identifier) {
                const member = identifier.indexed_member && identifier.indexed_member()
                let funcname: string;

                if (identifier instanceof IdentifierContext) {
                    funcname = this.enterIdentifier(identifier)
                } else if (identifier instanceof VarContext) {

                    if (member) { // Capture only the actual function name
                        if (member.identifier()) {
                            funcname = this.enterIdentifier(member.identifier())
                        } else {
                            funcname = this.enterExp(member.exp())
                        }
                    } else {
                        funcname = this.enterIdentifier(identifier.identifier())
                    }
                }

                if (!member?.exp()) {
                    funcname = '"'+funcname+'"'
                }

                functionNames.push(funcname)
            }
        }

        return functionNames
    }

    addFunctionName = (funcName: string | Array<string>, raw: boolean = false): number => {
        funcName = (raw || Array.isArray(funcName)) ? funcName : '"'+funcName+'"'

        return this.functionsName.push(funcName)-1
    }

    removeFunctionName = (index?: number) => {
        this.functionsName.splice(index || this.functionsName.length-1, 1)
    }

    getFunctionName = (index?: number, raw: boolean = false) => {
        const funcname = this.functionsName[index || this.functionsName.length-1]

        if (funcname?.length > 0) {
            if (raw) {
                if (typeof funcname === "string") {
                    return funcname.replace(/"/g, "")
                } else {
                    throw new Error("getFunctioName: raw is set to true, but the function name is not a string")
                }
            }

            return funcname
        }
    }
}

export { CodeGenerator }