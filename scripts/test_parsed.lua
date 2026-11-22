if not leap then leap={}end;if not leap.deserialize then leap.deserialize=function(a,b)b=b or{}if b[a]then return b[a]end;local c=_type(a)if c~="table"or not a.__type then if c=="table"then if type(a.x)=="number"and type(a.y)=="number"then if type(a.z)=="number"then if type(a.w)=="number"then return vector4(a.x,a.y,a.z,a.w)else return vector3(a.x,a.y,a.z)end else return vector2(a.x,a.y)end else local d={}b[a]=d;for e,f in pairs(a)do d[e]=leap.deserialize(f,b)end;return d end else return a end end;local g=_G[a.__type]if not g then error("Class '"..a.__type.."' not found",2)end;g.__skipNextConstructor=true;local h=g()b[a]=h;if h.deserialize then h:deserialize(a)else for e,f in pairs(a)do if e~="__type"then h[e]=leap.deserialize(f,b)end end end;return h end end;if not leap.serialize then local i={}local j={}local k={__stack=true,__parent=true,super=true}local function l(m,n,o,h)local p={}for q=n,#m do local r=m[q]p[#p+1]=r.key.."<"..type(r.obj)..">"end;p[#p+1]=o.."<"..type(h)..">"return table.concat(p,".")end;local function s(h,o)local t=i[h]if t then error("leap.serialize: circular serialization loop detected: "..l(j,t,o,h),0)end;local u=#j+1;j[u]={obj=h,key=o}i[h]=u end;local function v(h)i[h]=nil;j[#j]=nil end;local function w(a)local x=a.__ignoreList;if not x then return k end;local y=table.clone(k)for e,f in pairs(x)do y[e]=f end;return y end;leap.serialize=function(a,b,o)b=b or{}o=o or"root"local c=_type(a)if c~="table"then return a end;local z=b[a]if z then return z end;s(a,o)local A,B=pcall(function()if a.serialize then local C={}b[a]=C;local D=a.serialize(a)if D==nil then b[a]=nil;return nil end;if type(D)~="table"then error("leap.serialize: custom serialize method must return a table",2)end;for e,f in pairs(D)do C[e]=leap.serialize(f,b,e)end;C.__type=a.__type;return C end;local d=_leap_internal_deepcopy(a,b,w(a),true)b[a]=d;return d end)v(a)if not A then error(B,2)end;return B end end;if not skipSerialize then skipSerialize=function(E,x)if _type(E)~="table"then error("skipSerialize: #1 passed argument must be a class, but got "..type(E),2)end;if not rawget(E.__prototype,"__ignoreList")then local F=E.__prototype.__ignoreList;E.__prototype.__ignoreList=F and table.clone(F)or{}end;if _type(x)=="table"then for e,f in pairs(x)do E.__prototype.__ignoreList[f]=true end elseif _type(x)=="string"then E.__prototype.__ignoreList[x]=true else error("skipSerialize: #2 passed argument must be a table or a string, but got "..type(x),2)end end end;if not _leap_internal_decodesig then local G={}_leap_internal_decodesig=function(H)local I=G[H]if I then return I end;local J,K,L=H:match("^(.*)|([^|]*)|([^|]*)$")local M={}for N in K:gmatch("[^,]+")do M[#M+1]={name=N}end;I={args=M,name=J}if L=="r"then I.has_return=true end;G[H]=I;return I end end;if not leap.fsignature then leap.fsignature=function(O)if _type(O)~="function"then error("leap.fsignature: passed argument must be a function, but got ".._type(O),2)end;if not __leap__introspection then return nil end;local P=__leap__introspection[O]if _type(P)=="string"then return _leap_internal_decodesig(P)end;return P end end;if not leap.registerfunc then leap.registerfunc=function(O,P)if not __leap__introspection then __leap__introspection=setmetatable({},{__mode="k"})end;__leap__introspection[O]=P;return O end end;if not leap.minimal then leap.minimal=false end;if not table.clone then table.clone=function(Q)local d={}for e,f in pairs(Q)do d[e]=f end;return d end end;if not _leap_internal_deepcopy then local _type=_type or type;local d=table.clone;_leap_internal_deepcopy=function(Q,R,S,T)if _type(Q)~="table"then return Q end;R=R or{}if R[Q]then return R[Q]end;local U=d(Q)R[Q]=U;for e,f in next,Q do if S and S[e]then U[e]=nil else local V=_type(f)if V=="table"then if f.__type~=nil and getmetatable(f)then U[e]=leap.serialize(f,R,e)else U[e]=_leap_internal_deepcopy(f,R,S,T)end elseif V=="function"and T then U[e]=nil end end end;return U end end;if not _leap_internal_copyfield then local _type=_type or type;local d=table.clone;_leap_internal_copyfield=function(Q)if _type(Q)~="table"then return Q end;local W=true;for X,f in next,Q do if _type(f)=="table"then return _leap_internal_deepcopy(Q)end;W=false end;if W then return{}end;return d(Q)end end;if not _type then _type=type;type=function(Y)local Z=_type(Y)if Z=="table"and Y.__type then return Y.__type else return Z end end end;if not __leap_call_kargs then __leap_call_kargs=function(a,b,...)local c={...}local d=leap.fsignature(a)if not d then error("leap: "..a.." cant accept kargs as it has no metadata (probably not processed by leap)",2)end;for e,f in pairs(b)do for g,h in pairs(d.args)do if h.name==e then if c[g]then local i=string.format("leap: argument '%s' for function '%s' was provided both positionally (%s) and as a keyword (%s)",e,d.name,tostring(c[g]),tostring(f))error(i,2)end;c[g]=f;break end end end;return table.unpack(c)end end;if not _leap_internal_using_operator then _leap_internal_using_operator=function(a,b,...)local c=a;a=_G[a]if type(a)~="string"then error("using operator expects a filter, got "..type(a),2)end;local d=b.ddd;b.ddd=nil;local e={...}local f,g=pcall(function()load(a,"@"..c,"t",setmetatable(b,{__index=_G}))()(table.unpack(e),d and table.unpack(d))end)if not f then error(g,2)end end end;if not _leap_internal_in_operator then _leap_internal_in_operator=function(a,b)local c=type(b)if c=="table"then if table.type(b)=="array"then for d,e in pairs(b)do if e==a then return true end end elseif table.type(b)=="hash"then for d,e in pairs(b)do if d==a then return true end end else for d,e in pairs(b)do if e==a or d==a then return true end end end elseif c=="string"then return b:find(a)else error("in operator: unsupported type "..c)end;return false end end;if not _leap_internal_classBuilder then _leap_internal_classBuilder=function(a,b,c)b._leap_internal_decorators={}if not c then error("ExtendingNotDefined: "..a.." tried to extend a class that is not defined",2)end;if c.__prototype then b.__parent=c;setmetatable(b,{__index=c.__prototype})end;local d=b;local e={}while d do for f,g in next,d do if not e[f]then if _type(g)=="table"and f:sub(1,5)~="_leap"and f:sub(1,2)~="__"then e[f]=d end end end;if not d.__parent then break end;d=d.__parent.__prototype end;local h,i,j={},{},0;for f,k in next,e do j=j+1;h[j]=f;i[j]=k end;local l=_leap_internal_copyfield;local m=table.create;local n={__index=b,__tostring=function(self)if self.toString then return self:toString()else local o=""if not leap.minimal then for f,g in pairs(self)do if f~="super"and f:sub(1,5)~="_leap"and f:sub(1,2)~="__"then local p=_type(g)if p~="function"then local q=g;if p=="table"then if g.__type then q="<"..g.__type..":"..("%p"):format(g)..">"else q=tostring(g)end end;if p=="string"then q='"'..g..'"'end;o=o..f..": "..tostring(q)..", "end end end;o=o:sub(1,-3)end;return"<"..self.__type..":"..("%p"):format(self).."> "..o end end}local r={}for f,g in next,n do r[f]=g end;r.__gc=function(self)local s=self.destructor;if s then s(self)end end;_G[a]=setmetatable({__type=a,__prototype=b},{__index=function(self,f)local t=b[f]if type(t)=="function"then return function(u,...)if _type(u)=="table"and u.__type==self.__type then return t(nil,...)else return t(u,...)end end else return t end end,__newindex=function(self,f,g)if f:sub(1,2)=="__"then rawset(self,f,g)else error("attempt to assign class property '"..f.."' directly, please instantiate the class before assigning any properties",2)end end,__call=function(self,...)local v;if m and j>0 then v=m(0,j+1)v.__type=self.__type else v={__type=self.__type}end;for w=1,j do local x=h[w]v[x]=l(i[w][x])end;local y=b.destructor~=nil;setmetatable(v,y and r or n)local d=b;while d do if d._leap_internal_decorators then for z,A in pairs(d._leap_internal_decorators)do local B=v[A.name]local C=function(...)return B(v,...)end;leap.registerfunc(C,leap.fsignature(B))if not _G[A.decoratorName]then error("Decorator "..A.decoratorName.." does not exist",2)end;v[A.name]=_G[A.decoratorName](v,C,table.unpack(A.args))or B end end;if not d.__parent then break end;d=d.__parent.__prototype end;if not self.__skipNextConstructor then local D=v.constructor;if D then local E,F=pcall(D,v,...)if not E then error(F,2)end end end;if not y and rawget(v,"destructor")then setmetatable(v,r)end;self.__skipNextConstructor=nil;return v end})end;_leap_internal_classBuilder("Error",{constructor=function(self,G)self.message=G end,toString=function(self)return type(self)..": "..self.message end},{})end;if not _leap_internal_is_operator then _leap_internal_is_operator=function(v,H)if not v or not H then return false end;if _type(v)~="table"then return _type(v)==type(H)end;if _type(H)~="table"then error("leap.is_operator: #2 passed argument must be a class, but got ".._type(H),2)end;if v.__prototype then error("leap.is_operator: #1 passed argument must be a class instance, but got class",2)end;local I=v;while I and I.__type~=H.__type do if I.__parent or I.__prototype.__parent then I=I.__parent or I.__prototype.__parent else return false end end;return true end end;  
addNumbers = leap.registerfunc(function(numA, numB)if type(numA) ~= "number" then error('numA: must be (number) but got '..type(numA)..'', 2) end;if type(numB) ~= "number" then error('numB: must be (number) but got '..type(numB)..'', 2) end;
    return numA + numB
end, "addNumbers|numA,numB|r")

local result = addNumbers(1, 2)

  
addNumbers = leap.registerfunc(function(numA, numB)if numA == nil then numA = 1 end;if type(numA) ~= "number" then error('numA: must be (number) but got '..type(numA)..'', 2) end;if numB == nil then numB = 2 end;if type(numB) ~= "number" then error('numB: must be (number) but got '..type(numB)..'', 2) end;
    return numA + numB
end, "addNumbers|numA,numB|r")

local result = addNumbers()

  
if result ~= 4 then
    print("result is not 4")
end

 
_leap_internal_classBuilder("Car",{
    brand = "Example",
    velocity = 0,

    constructor = leap.registerfunc(function(self, velocity)if velocity == nil then velocity = 100 end;if type(velocity) ~= "number" then error('velocity: must be (number) but got '..type(velocity)..'', 2) end;
        self.velocity = velocity
    end, "constructor|velocity|")
}, {})

_leap_internal_classBuilder("Dragster",{
    brand = "Example Dragster",

    constructor = leap.registerfunc(function(self)
        Car.__prototype.constructor(self,200)
    end, "constructor||")
}, Car)

_leap_internal_classBuilder("MyError",{
    constructor = leap.registerfunc(function(self, message)if type(message) ~= "string" then error('message: must be (string) but got '..type(message)..'', 2) end;
        self.message = message .. "Test"
    end, "constructor|message|"),

    toString = leap.registerfunc(function(self)
        return "Custom error message "
    end, "toString||r")
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
end, "stopwatch|func|r")

 
 someMathIntensiveFunction = leap.registerfunc(function(pow)if pow == nil then pow = 100 end;if type(pow) ~= "number" then error('pow: must be (number) but got '..type(pow)..'', 2) end;
    for i=1, 500000 do
        math.pow(10, pow)
    end

    return math.pow(10, pow)
end, "someMathIntensiveFunction|pow|r");someMathIntensiveFunction = stopwatch(someMathIntensiveFunction) or someMathIntensiveFunction;

someMathIntensiveFunction(100)

   
 _leap_internal_classBuilder("MyClass",
  {
    constructor = leap.registerfunc(function(self)
        print("MyClass constructor")
    end, "constructor||")
}, {});MyClass = stopwatch(MyClass) or MyClass;

    
_leap_internal_classBuilder("MyClass",{
    
      method = leap.registerfunc(function(self)
        print("MyClass method")
    end, "method||")
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
    if v > 50 then
        goto continue_1
    end

    for i=1, 5 do
        if i == 3 then
            goto continue_2
        end ::continue_2::
    end

    print(""..(k).." = "..(v).."") ::continue_1::
end

  
HaveRightsTo = [[
    return function(action, ...) assert(user.role == "admin",   "User is not admin!")
    assert(user.permissions[action],   "User dont have permission to "..(action).."!")
end]]

editMessage = leap.registerfunc(function(user)if _type(user) ~= "table" and not _leap_internal_is_operator(user, User) then error('user: must be (User) or a derived class but got '..type(user)..'', 2) end; _leap_internal_using_operator("HaveRightsTo",{self = self,user = user},"editMessage")
    print("Message edited!")
end, "editMessage|user|")

   
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
end, "test|a,b|")

_leap_internal_classBuilder("Test2",{
    test = leap.registerfunc(function(self, a, b)
        print("adw")
    end, "test|a,b|"),

    
      test2 = leap.registerfunc(function(self, a, b)
        print("adw")
    end, "test2|a,b|")
}, {})table.insert(Test2.__prototype._leap_internal_decorators, {name = "test2", decoratorName = "test2", args = {}});


  

local MAX_DEPTH = 8

local  enterDepth = leap.registerfunc(function(self)
    self._depth = (self._depth or 0) + 1
    return self._depth <= MAX_DEPTH
end, "enterDepth|self|r")

local  exitDepth = leap.registerfunc(function(self)
    self._depth = self._depth - 1
end, "exitDepth|self|")

_leap_internal_classBuilder("A",{
    constructor = leap.registerfunc(function(self)
        self.log = {}
    end, "constructor||"),

    step = leap.registerfunc(function(self)
        print("A: step")
        table.insert(self.log, "A:step")
    end, "step||"),

    run = leap.registerfunc(function(self)
        print("A: run")
        table.insert(self.log, "A:run")
        self:step()
    end, "run||"),
}, {})

_leap_internal_classBuilder("B",{
    step = leap.registerfunc(function(self)
        print("B: step (before super)")
        table.insert(self.log, "B:step:start")
        A.__prototype.step(self)
        print("B: step (after super)")
        table.insert(self.log, "B:step:end")
    end, "step||"),

    run = leap.registerfunc(function(self)
        print("B: run")
        table.insert(self.log, "B:run")
        if math.random() > 0.2 then
            A.__prototype.run(self)
        end
    end, "run||"),
}, A)

_leap_internal_classBuilder("C",{
    step = leap.registerfunc(function(self)
        print("C: step")
        table.insert(self.log, "C:step")
        if math.random() > 0.4 and enterDepth(self) then
            print("C: also calling super:run")
            B.__prototype.run(self)
            exitDepth(self)
        end
        B.__prototype.step(self)
    end, "step||"),

    run = leap.registerfunc(function(self)
        print("C: run")
        table.insert(self.log, "C:run")
        self:step()
        if math.random() > 0.6 then
            B.__prototype.step(self)
        end
        table.insert(self.log, "C:run:end")
    end, "run||"),
}, B)

_leap_internal_classBuilder("D",{
    step = leap.registerfunc(function(self)
        print("D: step (start)")
        table.insert(self.log, "D:step:start")
        if math.random() > 0.5 and enterDepth(self) then
            print("D: step calls self:run")
            self:run()
            exitDepth(self)
        end
        C.__prototype.step(self)
        print("D: step (end)")
        table.insert(self.log, "D:step:end")
    end, "step||"),

    run = leap.registerfunc(function(self)
        print("D: run")
        table.insert(self.log, "D:run")
        C.__prototype.run(self)
        if math.random() > 0.7 and enterDepth(self) then
            self:step()
            exitDepth(self)
        end
        table.insert(self.log, "D:run:end")
    end, "run||"),
}, C)

_leap_internal_classBuilder("E",{
    step = leap.registerfunc(function(self)
        print("E: step")
        table.insert(self.log, "E:step")
        if math.random() > 0.3 then
            D.__prototype.step(self)
        end
    end, "step||"),

    run = leap.registerfunc(function(self)
        print("E: run (start)")
        table.insert(self.log, "E:run:start")
        self:step()
        D.__prototype.run(self)
        print("E: run (end)")
        table.insert(self.log, "E:run:end")
    end, "run||"),
}, D)

_leap_internal_classBuilder("F",{
    step = leap.registerfunc(function(self)
        print("F: step")
        table.insert(self.log, "F:step")
        if math.random() > 0.1 then
            E.__prototype.step(self)
        end
        if math.random() > 0.8 and enterDepth(self) then
            self:run()
            exitDepth(self)
        end
    end, "step||"),

    run = leap.registerfunc(function(self)
        print("F: run")
        table.insert(self.log, "F:run")
        if math.random() > 0.2 then
            E.__prototype.run(self)
        end
        self:step()
        if math.random() > 0.7 then
            E.__prototype.step(self)
        end
        print("F: run (end)")
        table.insert(self.log, "F:run:end")
    end, "run||"),
}, E)



math.randomseed(99)      

local f = F()
f:run()

print("\nLog:")
for i, entry in ipairs(f.log) do
    print(i, entry)
end