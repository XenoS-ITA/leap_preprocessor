if not leap then leap={}end;if not leap.deserialize then leap.deserialize=function(a)if _type(a)=="table"and a.__type then local b=_G[a.__type]if b then b.__skipNextConstructor=true;local c=b()for d,e in pairs(a)do c[d]=e end;return c else error("Class '"..a.__type.."' not found",2)end else error("leap.deserialize: passed argument must be a table (serialized object), but got ".._type(a),2)end end end;if not leap.serialize then leap.serialize=table.clone end;if not leap.fsignature then leap.fsignature=function(f)if _type(f)~="function"then error("leap.fsignature: passed argument must be a function, but got ".._type(f),2)end;if not __leap__introspection then return nil end;return __leap__introspection[f]end end;leap.registerfunc=function(f,g)if not __leap__introspection then __leap__introspection={}end;__leap__introspection[f]=g;return f end;if not _type then _type=type;type=function(h)local i=_type(h)if i=="table"and h.__type then return h.__type else return i end end end;if not __leap_call_kargs then __leap_call_kargs=function(a,b,...)local c={...}local d=leap.fsignature(a)if not d then error("leap: "..a.." cant accept kargs as it has no metadata (probably not processed by leap)",2)end;for e,f in pairs(b)do for g,h in pairs(d.args)do if h.name==e then if c[g]then local i=string.format("leap: argument '%s' for function '%s' was provided both positionally (%s) and as a keyword (%s)",e,d.name,tostring(c[g]),tostring(f))error(i,2)end;c[g]=f;break end end end;return table.unpack(c)end end;if not _leap_internal_using_operator then _leap_internal_using_operator=function(a,b,...)local c=a;a=_G[a]if type(a)~="string"then error("using operator expects a filter, got "..type(a),2)end;local d=b.ddd;b.ddd=nil;local e={...}local f,g=pcall(function()load(a,"@"..c,"t",setmetatable(b,{__index=_G}))()(table.unpack(e),d and table.unpack(d))end)if not f then error(g,2)end end end;if not _leap_internal_in_operator then _leap_internal_in_operator=function(a,b)local c=type(b)if c=="table"then if table.type(b)=="array"then for d,e in pairs(b)do if e==a then return true end end elseif table.type(b)=="hash"then for d,e in pairs(b)do if d==a then return true end end else for d,e in pairs(b)do if e==a or d==a then return true end end end elseif c=="string"then return b:find(a)else error("in operator: unsupported type "..c)end;return false end end;if not _leap_internal_classBuilder then _leap_internal_classBuilder=function(a,b,c)b._leap_internal_decorators={}if not c then error("ExtendingNotDefined: "..a.." tried to extend a class that is not defined",2)end;if c.__prototype then b.super=setmetatable({__type=c.__type,__prototype=c.__prototype},{__index=function(d,e)if c.__prototype.super then return c.__prototype[e]or c.__prototype.super[e]else return c.__prototype[e]end end,__call=function(d,...)if not c.__prototype.constructor then return end;return c.__prototype.constructor(...)end,__newindex=function(self,f)error("attempted to assign class property '"..f.."' directly, please instantiate the class before assigning any properties",2)end})end;_G[a]=setmetatable({__type=a,__prototype=b},{__newindex=function(self,f,g)if f:sub(1,2)=="__"then rawset(self,f,g)else error("attempt to assign class property '"..f.."' directly, please instantiate the class before assigning any properties",2)end end,__call=function(self,...)local h=setmetatable({__type=self.__type},{__index=function(d,e)if self.__prototype.super then return self.__prototype[e]or self.__prototype.super[e]else return self.__prototype[e]end end,__gc=function(d)if d.destructor then d:destructor()end end,__tostring=function(d)if d.toString then return d:toString()else return type(d)end end})if next(h._leap_internal_decorators)then for i,j in pairs(h._leap_internal_decorators)do local k=_G[j.decoratorName](h,_G[j.decoratorName],table.unpack(j.args))h[j.name]=k and k.og or h[j.name]end end;if not self.__skipNextConstructor then if h.constructor then h:constructor(...)elseif c.__prototype then c(...)end end;self.__skipNextConstructor=nil;return h end})end;_leap_internal_classBuilder("Error",{constructor=function(self,l)self.message=l end,toString=function(self)return type(self)..": "..self.message end},{})end;  
addNumbers = leap.registerfunc(function(numA, numB)if type(numA) ~= "number" then error('numA: must be (number) but got '..type(numA), 2) end;if type(numB) ~= "number" then error('numB: must be (number) but got '..type(numB), 2) end;
    return numA + numB
end, {args={{name = "numA"},{name = "numB"},},name="addNumbers",has_return=true,})

local result = addNumbers(1, 2)

  
addNumbers = leap.registerfunc(function(numA, numB)if numA == nil then numA = 1 end;if type(numA) ~= "number" then error('numA: must be (number) but got '..type(numA), 2) end;if numB == nil then numB = 2 end;if type(numB) ~= "number" then error('numB: must be (number) but got '..type(numB), 2) end;
    return numA + numB
end, {args={{name = "numA"},{name = "numB"},},name="addNumbers",has_return=true,})

local result = addNumbers()

  
if result ~= 4 then
    print("result is not 4")
end

 
_leap_internal_classBuilder("Car",{
    brand = "Example",
    velocity = 0,

    constructor = leap.registerfunc(function(self, velocity)if velocity == nil then velocity = 100 end;if type(velocity) ~= "number" then error('velocity: must be (number) but got '..type(velocity), 2) end;
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
    constructor = leap.registerfunc(function(self, message)if type(message) ~= "string" then error('message: must be (string) but got '..type(message), 2) end;
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

 
 someMathIntensiveFunction = leap.registerfunc(function(pow)if pow == nil then pow = 100 end;if type(pow) ~= "number" then error('pow: must be (number) but got '..type(pow), 2) end;
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
    
      method = function(self)
        print("MyClass method")
    end
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

editMessage = leap.registerfunc(function(user)if type(user) ~= "User" then error('user: must be (User) but got '..type(user), 2) end; _leap_internal_using_operator("HaveRightsTo",{self = self,user = user},"editMessage")
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