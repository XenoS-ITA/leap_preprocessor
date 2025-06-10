if not leap then leap={}end;if not leap.deserialize then leap.deserialize=function(a)local b=_type(a)if b~="table"or not a.__type then if b=="table"then local c={}for d,e in pairs(a)do c[d]=leap.deserialize(e)end;return c else return a end end;local f=_G[a.__type]if not f then error("Class '"..a.__type.."' not found",2)end;f.__skipNextConstructor=true;local g=f()if g.deserialize then g:deserialize(a)else for d,e in pairs(a)do if d~="__type"then g[d]=leap.deserialize(e)end end end;return g end end;if not leap.serialize then leap.serialize=function(a)local b=_type(a)if b~="table"then return a end;if type(a)=="table"then local h={}for d,e in pairs(a)do h[d]=leap.serialize(e)end;return h end;if a.serialize then local i=a:serialize()if not i then return nil end;if type(i)~="table"then error("leap.serialize: custom serialize method must return a table",2)end;for d,e in pairs(i)do i[d]=leap.serialize(e)end;i.__type=a.__type;return i end;local c={}for d,e in pairs(a)do if d~="__stack"then local j=false;if a.__ignoreList then for k,l in pairs(a.__ignoreList)do if d==l then j=true;break end end end;if not j then c[d]=leap.serialize(e)end end end;return c end end;if not skipSerialize then skipSerialize=function(m,n)if _type(m)~="table"then error("skipSerialize: #1 passed argument must be a class, but got "..type(m),2)end;m.__prototype.__ignoreList=n end end;if not leap.fsignature then leap.fsignature=function(o)if _type(o)~="function"then error("leap.fsignature: passed argument must be a function, but got ".._type(o),2)end;if not __leap__introspection then return nil end;return __leap__introspection[o]end end;if not leap.registerfunc then leap.registerfunc=function(o,p)if not __leap__introspection then __leap__introspection=setmetatable({},{__mode="k"})end;__leap__introspection[o]=p;return o end end;if not _type then _type=type;type=function(q)local r=_type(q)if r=="table"and q.__type then return q.__type else return r end end end;if not __leap_call_kargs then __leap_call_kargs=function(a,b,...)local c={...}local d=leap.fsignature(a)if not d then error("leap: "..a.." cant accept kargs as it has no metadata (probably not processed by leap)",2)end;for e,f in pairs(b)do for g,h in pairs(d.args)do if h.name==e then if c[g]then local i=string.format("leap: argument '%s' for function '%s' was provided both positionally (%s) and as a keyword (%s)",e,d.name,tostring(c[g]),tostring(f))error(i,2)end;c[g]=f;break end end end;return table.unpack(c)end end;if not _leap_internal_using_operator then _leap_internal_using_operator=function(a,b,...)local c=a;a=_G[a]if type(a)~="string"then error("using operator expects a filter, got "..type(a),2)end;local d=b.ddd;b.ddd=nil;local e={...}local f,g=pcall(function()load(a,"@"..c,"t",setmetatable(b,{__index=_G}))()(table.unpack(e),d and table.unpack(d))end)if not f then error(g,2)end end end;if not _leap_internal_in_operator then _leap_internal_in_operator=function(a,b)local c=type(b)if c=="table"then if table.type(b)=="array"then for d,e in pairs(b)do if e==a then return true end end elseif table.type(b)=="hash"then for d,e in pairs(b)do if d==a then return true end end else for d,e in pairs(b)do if e==a or d==a then return true end end end elseif c=="string"then return b:find(a)else error("in operator: unsupported type "..c)end;return false end end;if not _leap_internal_classBuilder then local a=function(b)local c=b.__stack[#b.__stack]return c and c.__prototype end;local d=function(b)local c=b.__stack[#b.__stack]return c and c.__type end;local e={}local f=function(b,g)if not g.__parent then table.insert(b.__stack,e)else table.insert(b.__stack,g.__parent)end end;local h=function(b)local i=table.remove(b.__stack)end;if not table.clone then table.clone=function(j)local k={}for l,m in pairs(j)do k[l]=m end;return k end end;local deepcopy=function(j,n)if type(j)~="table"then return j end;n=n or{}if n[j]then return n[j]end;local o=table.clone(j)n[j]=o;for l,m in next,j do if type(m)=="table"then o[l]=deepcopy(m,n)end end;return o end;local p={__index=function(self,q)if q=="__type"then return d(self.obj)else local g=a(self.obj)if not g or next(g)==nil then return nil end;local r=g[q]if type(r)=="function"then return function(s,...)f(self.obj,g)local t=r(self.obj,...)h(self.obj)return t end else return r end end end,__call=function(self,...)local u=self.constructor;if u then return u(...)end end}function _leap_internal_class_makeSuper(b)return setmetatable({obj=b},p)end;_leap_internal_classBuilder=function(v,w,x)w._leap_internal_decorators={}if not x then error("ExtendingNotDefined: "..v.." tried to extend a class that is not defined",2)end;if x.__prototype then w.__parent=x end;local y={__cache={},__newindex=function(z,l,m)rawset(z,l,m)getmetatable(z).__cache[l]=nil end}setmetatable(w,y)local A={}local B=1;for l,m in next,w do if _type(m)=="table"and l:sub(1,5)~="_leap"then A[B]=l;B=B+1 end end;local C={__index=function(self,q)local D=getmetatable(w).__cache;local g=w;local E=g[q]if not D[q]then while g do if g[q]~=nil then E=g[q]break end;if not g.__parent then return nil end;g=g.__parent.__prototype end;if type(E)=="function"then D[q]=function(s,...)f(self,g)local t=E(self,...)h(self)return t end else D[q]={proto=g}end else end;if type(D[q])=="function"then return D[q]else local g=D[q].proto;return g[q]end end,__gc=function(self)if self.destructor then self:destructor()end end,__tostring=function(self)if self.toString then return self:toString()else local F=""for l,m in pairs(self)do if l~="super"and l:sub(1,5)~="_leap"and l:sub(1,2)~="__"then if _type(m)=="table"then if getmetatable(m)then m=tostring(m)else m=json.encode(m)end end;F=F..l..": "..tostring(m)..", "end end;F=F:sub(1,-3)return"<"..self.__type..":"..("%p"):format(self).."> "..F end end}_G[v]=setmetatable({__type=v,__prototype=w},{__newindex=function(self,l,m)if l:sub(1,2)=="__"then rawset(self,l,m)else error("attempt to assign class property '"..l.."' directly, please instantiate the class before assigning any properties",2)end end,__call=function(self,...)local b={__type=self.__type,__stack={}}for G=1,#A do local q=A[G]b[q]=deepcopy(self.__prototype[q])end;setmetatable(b,C)local H=self.__prototype.__parent;if H then b.super=_leap_internal_class_makeSuper(b)end;for s,I in pairs(b._leap_internal_decorators)do local J=b[I.name]local K=function(...)return J(b,...)end;leap.registerfunc(K,leap.fsignature(J))b[I.name]=_G[I.decoratorName](b,K,table.unpack(I.args))or J end;if not self.__skipNextConstructor then local L=b.constructor;if L then L(b,...)end end;self.__skipNextConstructor=nil;return b end})end;_leap_internal_classBuilder("Error",{constructor=function(self,M)self.message=M end,toString=function(self)return type(self)..": "..self.message end},{})end;if not _leap_internal_is_operator then _leap_internal_is_operator=function(b,N)if not b or not N then return false end;if _type(b)~="table"then error("leap.is_operator: #1 passed argument must be a class instance, but got ".._type(b),2)end;if _type(N)~="table"then error("leap.is_operator: #2 passed argument must be a class, but got ".._type(N),2)end;if b.__prototype then error("leap.is_operator: #1 passed argument must be a class instance, but got class",2)end;local O=b;while O and O.__type~=N.__type do if O.super then O=O.super.parent else return false end end;return true end end;  
addNumbers = leap.registerfunc(function(numA, numB)if type(numA) ~= "number" then error('numA: must be (number) but got '..type(numA)..'', 2) end;if type(numB) ~= "number" then error('numB: must be (number) but got '..type(numB)..'', 2) end;
    return numA + numB
end, {args={{name = "numA"},{name = "numB"},},name="addNumbers",has_return=true,})

local result = addNumbers(1, 2)

  
addNumbers = leap.registerfunc(function(numA, numB)if numA == nil then numA = 1 end;if type(numA) ~= "number" then error('numA: must be (number) but got '..type(numA)..'', 2) end;if numB == nil then numB = 2 end;if type(numB) ~= "number" then error('numB: must be (number) but got '..type(numB)..'', 2) end;
    return numA + numB
end, {args={{name = "numA"},{name = "numB"},},name="addNumbers",has_return=true,})

local result = addNumbers()

  
if result ~= 4 then
    print("result is not 4")
end

 
_leap_internal_classBuilder("Car",{
    brand = "Example",
    velocity = 0,

    constructor = leap.registerfunc(function(self, velocity)if velocity == nil then velocity = 100 end;if type(velocity) ~= "number" then error('velocity: must be (number) but got '..type(velocity)..'', 2) end;
        self.velocity = velocity
    end, {args={{name = "velocity"},},name="constructor",})
}, {})

_leap_internal_classBuilder("Dragster",{
    brand = "Example Dragster",

    constructor = leap.registerfunc(function(self)
        self:super(200)
    end, {args={},name="constructor",})
}, Car)

_leap_internal_classBuilder("MyError",{
    constructor = leap.registerfunc(function(self, message)if type(message) ~= "string" then error('message: must be (string) but got '..type(message)..'', 2) end;
        self.message = message .. "Test"
    end, {args={{name = "message"},},name="constructor",}),

    toString = leap.registerfunc(function(self)
        return "Custom error message "
    end, {args={},name="toString",has_return=true,})
}, Error)

  
local car = Car()
local dragster = Dragster()

print(dragster.brand, dragster.velocity)

 
stopwatch = leap.registerfunc(function(func)
    return function(...)
        local time = os.clock() * 1000
        local data = func(...)
        local name = leap.fsignature(func)?.name

        print(name .. " taken "..((os.clock() * 1000) - time).."ms to execute")
        return data
    end
end, {args={{name = "func"},},name="stopwatch",has_return=true,})

 
 someMathIntensiveFunction = leap.registerfunc(function(pow)if pow == nil then pow = 100 end;if type(pow) ~= "number" then error('pow: must be (number) but got '..type(pow)..'', 2) end;
    for i=1, 500000 do
        math.pow(10, pow)
    end

    return math.pow(10, pow)
end, {args={{name = "pow"},},name="someMathIntensiveFunction",has_return=true,});someMathIntensiveFunction = stopwatch(someMathIntensiveFunction) or someMathIntensiveFunction;

someMathIntensiveFunction(100)

   
 _leap_internal_classBuilder("MyClass",
  {
    constructor = leap.registerfunc(function(self)
        print("MyClass constructor")
    end, {args={},name="constructor",})
}, {});MyClass = stopwatch(MyClass) or MyClass;

    
_leap_internal_classBuilder("MyClass",{
    
      method = leap.registerfunc(function(self)
        print("MyClass method")
    end, {args={},name="method",})
}, {})table.insert(MyClass.__prototype._leap_internal_decorators, {name = "method", decoratorName = "stopwatch", args = {}});

  
local tab = {3, 10, 50, 20, 5}
table.sort(tab, function(a, b)return   a < b;end)     

AddEventHandler('onResourceStart', function(name)return   print("Resource "..(name).." started!");end)     

AddEventHandler('playerConnecting', function(name, setKickReason, deferrals)      
    if name == "XenoS" then
        print("XenoS is connecting! WOW!")
    else
        print("Player "..(name).." is connecting!")
    end
end)

  
local mult2 = (function()local _t = {};for k, v in pairs(tab) do table.insert(_t, v*2);end;return _t;end)();
local mult2IfGreaterThan2 = (function()local _t = {};for k, v in pairs(tab) do  if v > 2 then table.insert(_t, v*2);end;end;return _t;end)();
local mult2IfGreaterThan2AndLessThan50 = (function()local _t = {};for k, v in pairs(tab) do  if v > 2 and v < 50 then table.insert(_t, v*2);end;end;return _t;end)();
local keyAsElement = (function()local _t = {};for k, v in pairs(tab) do _t["element:"..(k)..""] =  v;end;return _t;end)()
      
      
if _leap_internal_in_operator(3,  tab) then
    print("3 in tab")
end

if not _leap_internal_in_operator(2,   tab) then
    print("2 not in tab")
end

  
local example1 = "100+200 = "..(100+200)..""
local example2 = "100+200 = "..(addNumbers(100, 200))..""

  
local isResultGreaterThan2 = (function()if result > 2 then return  "Yes" else return  "No" end;end)()

    
local myBigNumber = 2147483647

    
local _leap_internal_status, _leap_internal_result = pcall(function()
    error("This is an error")
end) if not _leap_internal_status then local  e = _leap_internal_result; 
    print("Error!", e)
 elseif _leap_internal_result ~= nil then return _leap_internal_result end;

local _leap_internal_status, _leap_internal_result = pcall(function() 
    error(MyError("This is the reason"))
end) if not _leap_internal_status then local  myError = _leap_internal_result; 
    if type(myError) == "MyError" then
        print(myError)
    end
 elseif _leap_internal_result ~= nil then return _leap_internal_result end;

  
for k, v in pairs(tab) do
    if v < 5 then
        goto continue_1
    end

    print(""..(k).." = "..(v).."") ::continue_1::
end

  
HaveRightsTo = [[
    return function(action, ...) assert(user.role == "admin",   "User is not admin!")
    assert(user.permissions[action],   "User dont have permission to "..(action).."!")
end]]

editMessage = leap.registerfunc(function(user)if _type(user) ~= "table" and not _leap_internal_is_operator(user, User) then error('user: must be (User) or a derived class but got '..type(user)..'', 2) end; _leap_internal_using_operator("HaveRightsTo",{self = self,user = user},"editMessage")
    print("Message edited!")
end, {args={{name = "user"},},name="editMessage",})

   
_leap_internal_classBuilder("User",{
    role = "user",
    permissions = {
        editMessage = false,
        deleteMessage = false
    }
}, {})

local user = User()
editMessage(user)          

user.role = "admin"
editMessage(user)             

user.permissions.editMessage = true
editMessage(user)            

  
local sum = addNumbers(__leap_call_kargs(addNumbers, {numA = 1,numB = 5,},nil, nil))
print(sum)

local sum = addNumbers(__leap_call_kargs(addNumbers, {numB = 5,numA = 1,},nil, nil))         
print(sum)

local sum = addNumbers(__leap_call_kargs(addNumbers, {numB = 5,},1, nil))                
print(sum)

if not _leap_internal_is_operator(MyError,  Error) then
    print("MyError is derived from Error")
end

test = leap.registerfunc(function(a, b)
    print("adw")
end, {args={{name = "a"},{name = "b"},},name="test",})

_leap_internal_classBuilder("Test2",{
    test = leap.registerfunc(function(self, a, b)
        print("adw")
    end, {args={{name = "a"},{name = "b"},},name="test",}),

    
      test2 = leap.registerfunc(function(self, a, b)
        print("adw")
    end, {args={{name = "a"},{name = "b"},},name="test2",})
}, {})table.insert(Test2.__prototype._leap_internal_decorators, {name = "test2", decoratorName = "test2", args = {}});