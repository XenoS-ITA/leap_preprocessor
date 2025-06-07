/*

Author: XenoS.exe
Based on previous work of: Kazunori Sakamoto, Alexander Alexeev, Ken Domino

*/

// $antlr-format alignTrailingComments true, columnLimit 150, minEmptyLines 1, maxEmptyLinesToKeep 1, reflowComments false, useTab false
// $antlr-format allowShortRulesOnASingleLine false, allowShortBlocksOnASingleLine true, alignSemicolons hanging, alignColons hanging

parser grammar LuaParser;

options {
    tokenVocab = LuaLexer;
}

start_
    : chunk EOF
    ;

chunk
    : block
    ;

block
    : stat* retstat?
    ;

stat
    : ';'
    | varlist '=' explist
    | compound // cfxlua
    | functioncall
    | label
    | 'break'
    | 'goto' NAME
    | 'while' exp 'do' block 'end'
    | 'repeat' block 'until' exp
    | 'if' exp 'then' block ('elseif' exp 'then' block)* ('else' block)? 'end'
    | 'for' NAME '=' exp ',' exp (',' exp)? 'do' block 'end'
    | 'for' namelist 'in' explist 'do' block 'end'
    | 'do' block 'end'
    | 'function' funcname funcbody
    | 'local' 'function' NAME funcbody
    | 'local' attnamelist ('=' explist)?
    | 'local' attnamelist 'in' prefixexp // cfxlua
    | 'defer' block 'end' // cfxlua
    // | class
    ;

attnamelist
    : NAME attrib (',' NAME attrib)*
    ;

attrib
    : ('<' NAME '>')?
    ;

retstat
    : ('return' explist? | 'break' | 'continue') ';'?
    ;

label
    : '::' NAME '::'
    ;

funcname
    : NAME ('.' NAME)* (':' NAME)?
    ;

varlist
    : var (',' var)*
    ;

namelist
    : NAME (',' NAME)*
    ;

newdef
    : 'new' functioncall
    ;

explist
    : exp (',' exp)*
    ;

exp
    : 'nil'
    | 'false'
    | 'true'
    | number
    | string
    | '...'
    | newdef
    | functiondef
    | prefixexp
    | tableconstructor
    | <assoc = right> exp ('^') exp
    | ('not' | '#' | '-' | '~') exp
    | exp ('*' | '/' | '%' | '//') exp
    | exp ('+' | '-') exp
    | <assoc = right> exp ('..') exp
    | exp ('<' | '>' | '<=' | '>=' | '~=' | '==') exp
    | exp ('and') exp
    | exp ('or') exp
    | exp ('&' | '|' | '~' | '<<' | '>>') exp
    ;

indexed_member
    : '[' exp ']'
    | '.' NAME
    | '?''.' NAME
    ; 

// var ::=  Name | prefixexp '[' exp ']' | prefixexp '.' Name 
var
    : NAME
    | prefixexp (indexed_member)
    ;

// prefixexp ::= var | functioncall | '(' exp ')'
prefixexp
    : NAME (indexed_member)*
    | functioncall (indexed_member)*
    | '(' exp ')' (indexed_member)*
    ;

// functioncall ::=  prefixexp args | prefixexp ':' Name args;
functioncall
    : NAME (indexed_member)* args
    | functioncall (indexed_member)* args
    | '(' exp ')' (indexed_member)* args
    | NAME (indexed_member)* ':' NAME args
    | functioncall (indexed_member)* ':' NAME args
    | '(' exp ')' (indexed_member)* ':' NAME args
    ;

compound
    : var ('+=' | '-=' | '*=' | '/=' | '<<=' | '>>=' | '&=' | '|=' | '^=' ) exp
    ;

args
    : '(' explist? ')'
    | tableconstructor
    | string
    ;

functiondef
    : 'function' funcbody
    ;

funcbody
    : '(' parlist ')' block 'end'
    ;

/* class
    : 'class' NAME ('extends' NAME)? tableconstructor
    ; */

/* lparser.c says "is 'parlist' not empty?"
 * That code does so by checking la(1) == ')'.
 * This means that parlist can derive empty.
 */
parlist
    : namelist (',' '...')?
    | '...'
    |
    ;

tableconstructor
    : '{' fieldlist? '}'
    ;

fieldlist
    : field (fieldsep field)* fieldsep?
    ;

field
    : '[' exp ']' '=' exp
    | '.' NAME // cfxlua (setconstructor)
    | NAME '=' exp
    | exp
    ;

fieldsep
    : ','
    | ';'
    ;

number
    : INT
    | HEX
    | FLOAT
    | HEX_FLOAT
    ;

string
    : NORMALSTRING
    | CHARSTRING
    | JENKINSHASHSTRING
    | LONGSTRING
    ;