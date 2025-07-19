if not leap then leap={}end;if not leap.deserialize then leap.deserialize=function(a,b)b=b or{}if b[a]then return b[a]end;local c=_type(a)if c~="table"or not a.__type then if c=="table"then local d={}b[a]=d;for e,f in pairs(a)do d[e]=leap.deserialize(f,b)end;return d else return a end end;local g=_G[a.__type]if not g then error("Class '"..a.__type.."' not found",2)end;g.__skipNextConstructor=true;local h=g()b[a]=h;if h.deserialize then h:deserialize(a)else for e,f in pairs(a)do if e~="__type"then h[e]=leap.deserialize(f,b)end end end;return h end end;if not leap.serialize then leap.serialize=function(a,b)b=b or{}local c=_type(a)if c~="table"then return a end;if b[a]then return b[a]end;if a.serialize then local i=a:serialize()if not i then return nil end;if type(i)~="table"then error("leap.serialize: custom serialize method must return a table",2)end;b[a]=i;for e,f in pairs(i)do i[e]=leap.serialize(f,b)end;i.__type=a.__type;return i end;local j={__stack=true,__parent=true,super=true}if a.__ignoreList then for e,f in pairs(a.__ignoreList)do j[f]=true end end;local d=_leap_internal_deepcopy(a,b,j,true)b[a]=d;return d end end;if not skipSerialize then skipSerialize=function(k,l)if _type(k)~="table"then error("skipSerialize: #1 passed argument must be a class, but got "..type(k),2)end;k.__prototype.__ignoreList=l end end;if not leap.fsignature then leap.fsignature=function(m)if _type(m)~="function"then error("leap.fsignature: passed argument must be a function, but got ".._type(m),2)end;if not __leap__introspection then return nil end;return __leap__introspection[m]end end;if not leap.registerfunc then leap.registerfunc=function(m,n)if not __leap__introspection then __leap__introspection=setmetatable({},{__mode="k"})end;__leap__introspection[m]=n;return m end end;if not leap.minimal then leap.minimal=false end;if not table.clone then table.clone=function(o)local d={}for e,f in pairs(o)do d[e]=f end;return d end end;if not _leap_internal_deepcopy then _leap_internal_deepcopy=function(o,p,q,r)if _type(o)~="table"then return o end;p=p or{}if p[o]then return p[o]end;local s=table.clone(o)p[o]=s;for e,f in next,o do if q and q[e]then s[e]=nil else local t=_type(f)if t=="function"and r then s[e]=nil else if t=="table"then if f.__type~=nil then s[e]=leap.serialize(f,p)else s[e]=_leap_internal_deepcopy(f,p,q,r)end else s[e]=f end end end end;return s end end;if not _type then _type=type;type=function(u)local v=_type(u)if v=="table"and u.__type then return u.__type else return v end end end;if not __leap_call_kargs then __leap_call_kargs=function(a,b,...)local c={...}local d=leap.fsignature(a)if not d then error("leap: "..a.." cant accept kargs as it has no metadata (probably not processed by leap)",2)end;for e,f in pairs(b)do for g,h in pairs(d.args)do if h.name==e then if c[g]then local i=string.format("leap: argument '%s' for function '%s' was provided both positionally (%s) and as a keyword (%s)",e,d.name,tostring(c[g]),tostring(f))error(i,2)end;c[g]=f;break end end end;return table.unpack(c)end end;if not _leap_internal_using_operator then _leap_internal_using_operator=function(a,b,...)local c=a;a=_G[a]if type(a)~="string"then error("using operator expects a filter, got "..type(a),2)end;local d=b.ddd;b.ddd=nil;local e={...}local f,g=pcall(function()load(a,"@"..c,"t",setmetatable(b,{__index=_G}))()(table.unpack(e),d and table.unpack(d))end)if not f then error(g,2)end end end;if not _leap_internal_in_operator then _leap_internal_in_operator=function(a,b)local c=type(b)if c=="table"then if table.type(b)=="array"then for d,e in pairs(b)do if e==a then return true end end elseif table.type(b)=="hash"then for d,e in pairs(b)do if d==a then return true end end else for d,e in pairs(b)do if e==a or d==a then return true end end end elseif c=="string"then return b:find(a)else error("in operator: unsupported type "..c)end;return false end end;if not _leap_internal_classBuilder then local a=function(b)local c=b.__stack[#b.__stack]return c and c.__prototype end;local d=function(b)local c=b.__stack[#b.__stack]return c and c.__type end;local e={}local f=function(b,g)if not g.__parent then table.insert(b.__stack,e)else table.insert(b.__stack,g.__parent)end end;local h=function(b)local i=table.remove(b.__stack)end;local j={__index=function(self,k)if k=="__type"then return d(self.obj)else local g=a(self.obj)if not g or next(g)==nil then return nil end;local l=g[k]if type(l)=="function"then local m=leap.fsignature(l)return leap.registerfunc(function(n,...)f(self.obj,g)local o=table.pack(pcall(l,self.obj,...))h(self.obj)if not o[1]then local p=tostring(o[2])if p:sub(1,1)=="@"then error(p,0)else error(p,2)end end;return table.unpack(o,2,o.n)end,m)else return l end end end,__call=function(self,...)local q=self.constructor;if q then return q(...)end end}function _leap_internal_class_makeSuper(b)return setmetatable({obj=b},j)end;_leap_internal_classBuilder=function(r,s,t)s._leap_internal_decorators={}if not t then error("ExtendingNotDefined: "..r.." tried to extend a class that is not defined",2)end;if t.__prototype then s.__parent=t end;local u={__cache={},__newindex=function(v,w,x)rawset(v,w,x)getmetatable(v).__cache[w]=nil end}setmetatable(s,u)local y={}local z=1;for w,x in next,s do if _type(x)=="table"and w:sub(1,5)~="_leap"then y[z]=w;z=z+1 end end;local A={__index=function(self,k)local B=getmetatable(s).__cache;local g=s;local l=g[k]if not B[k]then while g do if g[k]~=nil then l=g[k]break end;if not g.__parent then return nil end;g=g.__parent.__prototype end;if type(l)=="function"then local m=leap.fsignature(l)B[k]=leap.registerfunc(function(n,...)if not n then error("leap: You need to pass self when calling a class method",2)end;f(n,g)local o=table.pack(pcall(l,n,...))h(n)if not o[1]then local p=tostring(o[2])if p:sub(1,1)=="@"then error(p,0)else error(p,2)end end;return table.unpack(o,2,o.n)end,m)else B[k]={proto=g}end else end;if type(B[k])=="function"then return B[k]else local g=B[k].proto;return g[k]end end,__gc=function(self)if self.destructor then self:destructor()end end,__tostring=function(self)if self.toString then return self:toString()else local C=""if not leap.minimal then for w,x in pairs(self)do if w~="super"and w:sub(1,5)~="_leap"and w:sub(1,2)~="__"then local D=_type(x)if D~="function"then local E=x;if D=="table"then if x.__type then E="<"..x.__type..":"..("%p"):format(x)..">"else E=tostring(x)end end;if D=="string"then E='"'..x..'"'end;C=C..w..": "..tostring(E)..", "end end end;C=C:sub(1,-3)end;return"<"..self.__type..":"..("%p"):format(self).."> "..C end end}_G[r]=setmetatable({__type=r,__prototype=s},{__newindex=function(self,w,x)if w:sub(1,2)=="__"then rawset(self,w,x)else error("attempt to assign class property '"..w.."' directly, please instantiate the class before assigning any properties",2)end end,__call=function(self,...)local b={__type=self.__type,__stack={}}for F=1,#y do local k=y[F]b[k]=_leap_internal_deepcopy(self.__prototype[k])end;setmetatable(b,A)local G=self.__prototype.__parent;if G then b.super=_leap_internal_class_makeSuper(b)end;for n,H in pairs(b._leap_internal_decorators)do local I=b[H.name]local J=function(...)return I(b,...)end;leap.registerfunc(J,leap.fsignature(I))b[H.name]=_G[H.decoratorName](b,J,table.unpack(H.args))or I end;if not self.__skipNextConstructor then local K=b.constructor;if K then K(b,...)end end;self.__skipNextConstructor=nil;return b end})end;_leap_internal_classBuilder("Error",{constructor=function(self,L)self.message=L end,toString=function(self)return type(self)..": "..self.message end},{})end;if not _leap_internal_is_operator then _leap_internal_is_operator=function(b,M)if not b or not M then return false end;if _type(b)~="table"then error("leap.is_operator: #1 passed argument must be a class instance, but got ".._type(b),2)end;if _type(M)~="table"then error("leap.is_operator: #2 passed argument must be a class, but got ".._type(M),2)end;if b.__prototype then error("leap.is_operator: #1 passed argument must be a class instance, but got class",2)end;local N=b;while N and N.__type~=M.__type do if N.__parent or N.__prototype.__parent then N=N.__parent or N.__prototype.__parent else return false end end;return true end end;  
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