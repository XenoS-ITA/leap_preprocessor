if not leap then leap={}end;if not leap.deserialize then leap.deserialize=function(a)if type(a)=="table"and a.__type then local b=_G[a.__type]if b then b.__skipNextConstructor=true;local c=b()for d,e in pairs(a)do c[d]=e end;return c else error("Class '"..a.__type.."' not found",2)end end end end;if not _type then _type=type;type=function(f)local g=_type(f)if g=="table"and f.__type then return f.__type else return g end end end;if not _leap_internal_in_operator then _leap_internal_in_operator=function(a,b)local c=type(b)if c=="table"then if table.type(b)=="array"then for d,e in pairs(b)do if e==a then return true end end elseif table.type(b)=="hash"then for d,e in pairs(b)do if d==a then return true end end else for d,e in pairs(b)do if e==a or d==a then return true end end end elseif c=="string"then return b:find(a)else error("in operator: unsupported type "..c)end;return false end end;if not _leap_internal_classBuilder then _leap_internal_classBuilder=function(a,b,c)if not c then error("ExtendingNotDefined: "..a.." tried to extend a class that is not defined",2)end;if c.__prototype then b.super=setmetatable({__type=c.__type,__prototype=c.__prototype},{__index=c.__prototype,__call=c,__newindex=function(self,d)error("attempted to assign class property '"..d.."' directly, please instantiate the class before assigning any properties",2)end})end;_G[a]=setmetatable({__type=a,__prototype=b},{__newindex=function(self,d,e)if d:sub(1,2)=="__"then rawset(self,d,e)else error("attempt to assign class property '"..d.."' directly, please instantiate the class before assigning any properties",2)end end,__call=function(self,...)local f=setmetatable({__type=self.__type},{__index=function(g,h)if self.__prototype.super then return self.__prototype[h]or self.__prototype.super.__prototype[h]else return self.__prototype[h]end end,__gc=function(g)if g.destructor then g:destructor()end end,__tostring=function(g)if g.toString then return g:toString()else return type(g)end end})if not self.__skipNextConstructor then if f.constructor then f:constructor(...)end end;if f._leap_internal_decorators then f:_leap_internal_decorators()end;self.__skipNextConstructor=nil;return f end})end;_leap_internal_classBuilder("Error",{constructor=function(self,i)self.message=i end,toString=function(self)return type(self)..": "..self.message end},{})end;  
function addNumbers(numA, numB)if type(numA) ~= "number" then error('numA: must be (number) but got '..type(numA)) end;if type(numB) ~= "number" then error('numB: must be (number) but got '..type(numB)) end;
    return numA + numB
end

local result = addNumbers(1, 2)

  
function addNumbers(numA, numB)if numA == nil then numA = 1 end;if type(numA) ~= "number" then error('numA: must be (number) but got '..type(numA)) end;if numB == nil then numB = 2 end;if type(numB) ~= "number" then error('numB: must be (number) but got '..type(numB)) end;
    return numA + numB
end

local result = addNumbers()

  
if result ~= 4 then
    print("result is not 4")
end

 
_leap_internal_classBuilder("Car",{
    brand = "Example",
    velocity = 0,

    constructor = function(self, velocity)if velocity == nil then velocity = 100 end;if type(velocity) ~= "number" then error('velocity: must be (number) but got '..type(velocity)) end;
        self.velocity = velocity
    end
}, {})

_leap_internal_classBuilder("Dragster",{
    brand = "Example Dragster",

    constructor = function(self)
             
        self.super(200)
    end
}, Car)

_leap_internal_classBuilder("MyError",{
    constructor = function(self, message)if type(message) ~= "string" then error('message: must be (string) but got '..type(message)) end;
        self.message = message .. "Test"
    end,

    toString = function(self, self)
        return "Custom error message "
    end
}, Error)

  
local car = Car()
local dragster = Dragster()

print(dragster.brand, dragster.velocity)

 
function stopwatch(func)
    return function(...)
        local time = os.clock() * 1000
        local data = func(...)
        print("taken "..((os.clock() * 1000) - time).."ms to execute")
        return data
    end
end

 
function someMathIntensiveFunction(pow)if pow == nil then pow = 100 end;if type(pow) ~= "number" then error('pow: must be (number) but got '..type(pow)) end;
    for i=1, 500000 do
        math.pow(10, pow)
    end

    return math.pow(10, pow)
end;someMathIntensiveFunction = stopwatch(someMathIntensiveFunction)

someMathIntensiveFunction(100)

   
 _leap_internal_classBuilder("MyClass",
  {
    constructor = function(self)
        print("MyClass constructor")
    end
}, {});MyClass = stopwatch(MyClass)

    
_leap_internal_classBuilder("MyClass",{
    
      method = function(self)
        print("MyClass method")
    end
}, {})MyClass.__prototype._leap_internal_decorators = function(self) self.method = stopwatch(self, self.method);end

  
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