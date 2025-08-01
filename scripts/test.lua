-- Type checking
function addNumbers(numA: number, numB: number)
    return numA + numB
end

local result = addNumbers(1, 2)

-- Default value
function addNumbers(numA: number = 1, numB: number = 2)
    return numA + numB
end

local result = addNumbers()

-- Not equal
if result != 4 then
    print("result is not 4")
end

-- Classes
class Car {
    brand = "Example",
    velocity = 0,

    constructor = function(velocity: number = 100)
        self.velocity = velocity
    end
}

class Dragster extends Car {
    brand = "Example Dragster",

    constructor = function()
        self:super(200)
    end
}

class MyError extends Error {
    constructor = function(message: string)
        self.message = message .. "Test"
    end,

    toString = function()
        return "Custom error message "
    end
}

-- New keyword
local car = new Car()
local dragster = new Dragster()

print(dragster.brand, dragster.velocity)

-- Decorator
function stopwatch(func)
    return function(...)
        local time = os.clock() * 1000
        local data = func(...)
        local name = leap.fsignature(func)?.name

        print(name .. " taken "..((os.clock() * 1000) - time).."ms to execute")
        return data
    end
end

@stopwatch
function someMathIntensiveFunction(pow: number = 100)
    for i=1, 500000 do
        math.pow(10, pow)
    end

    return math.pow(10, pow)
end

someMathIntensiveFunction(100)

-- Decorator on class
@stopwatch
class MyClass {
    constructor = function()
        print("MyClass constructor")
    end
}

-- Decorator on table/class fields
class MyClass {
    @stopwatch
    method = function()
        print("MyClass method")
    end
}

-- Compact function
local tab = {3, 10, 50, 20, 5}
table.sort(tab, (a, b) do a < b) -- Inline with multiple params

AddEventHandler('onResourceStart', name do print("Resource ${name} started!")) -- Inline with single param

AddEventHandler('playerConnecting', (name, setKickReason, deferrals) do -- Multiline with multiple params
    if name == "XenoS" then
        print("XenoS is connecting! WOW!")
    else
        print("Player ${name} is connecting!")
    end
end)

-- Table comprehension
local mult2 = {v*2 for k, v in pairs(tab)};
local mult2IfGreaterThan2 = {v*2 for k, v in pairs(tab) if v > 2};
local mult2IfGreaterThan2AndLessThan50 = {v*2 for k, v in pairs(tab) if v > 2 and v < 50};
local keyAsElement = {"element:${k}", v for k, v in pairs(tab)}
      
-- In operator and not in operator
if 3 in tab then
    print("3 in tab")
end

if 2 not in tab then
    print("2 not in tab")
end

-- String interpolation
local example1 = "100+200 = ${100+200}"
local example2 = "100+200 = ${addNumbers(100, 200)}"

-- Ternary operator
local isResultGreaterThan2 = result > 2 ? "Yes" : "No"

-- Cosmetic underscores for integers
local myBigNumber = 2_147_483_647

-- try-catch and throw keyword
try
    throw "This is an error"
catch e then
    print("Error!", e)
end

try 
    throw new MyError("This is the reason")
catch myError then
    if type(myError) == "MyError" then
        print(myError)
    end
end

-- Continue keyword
for k, v in pairs(tab) do
    if v < 5 then
        continue
    end
    if v > 50 then
        continue
    end

    for i=1, 5 do
        if i == 3 then
            continue
        end
    end

    print("${k} = ${v}")
end

-- Filter example
filter HaveRightsTo(action)
    user.role == "admin" else "User is not admin!",
    user.permissions[action] else "User dont have permission to ${action}!",
end

function editMessage(user: User) using HaveRightsTo("editMessage")
    print("Message edited!")
end

--- Hypothetical class User
class User {
    role = "user",
    permissions = {
        editMessage = false,
        deleteMessage = false
    }
}

local user = new User()
editMessage(user) -- HaveRightsTo:1: User is not admin! (Default role is user)

user.role = "admin"
editMessage(user) -- HaveRightsTo:2: User dont have permission to editMessage! (Default editMessage permission is false)

user.permissions.editMessage = true
editMessage(user) -- Message edited! (User role is admin and editMessage permission is true)

-- Keyword arguments
local sum = addNumbers(numA = 1, numB = 5)
print(sum)

local sum = addNumbers(numB = 5, numA = 1) -- Keyword arguments can be specified in any order
print(sum)

local sum = addNumbers(1, numB = 5) -- Keyword arguments can be mixed up with positional arguments (positional arguments will keep their position)
print(sum)

if not MyError is Error then
    print("MyError is derived from Error")
end

test = function(a, b)
    print("adw")
end

class Test2 {
    test = function(a, b)
        print("adw")
    end,

    @test2()
    test2 = function(a, b)
        print("adw")
    end
}