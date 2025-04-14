-- This file contains the code that will be injected in any leap processed files, independently from the used statements/features
-- You should always check if that function as already been declared before redeclaring it

-- Base leap "Library"
if not leap then leap = {} end

-- Function to deserialize objects (example: objects sended over the network)
if not leap.deserialize then
    leap.deserialize = function(class)
        if _type(class) == "table" and class.__type then
            local _class = _G[class.__type]

            if _class then
                _class.__skipNextConstructor = true -- Skip next constructor call
                local obj = _class()

                -- Copy all properties to the new instantiated object
                for k, v in pairs(class) do
                    obj[k] = v
                end

                return obj
            else
                error("Class '"..class.__type.."' not found", 2)
            end
        else
            error("leap.deserialize: passed argument must be a table (serialized object), but got ".._type(class), 2)
        end
    end
end

if not leap.serialize then
    leap.serialize = table.clone -- Table clone will do the job as it will perform a shallow-copy without metatable
end

if not leap.fsignature then
    leap.fsignature = function(func)
        if _type(func) ~= "function" then
            error("leap.fsignature: passed argument must be a function, but got ".._type(func), 2)
        end
        
        if not __leap__introspection then return nil end
        return __leap__introspection[func]
    end
end

if not leap.registerfunc then
    leap.registerfunc = function(func, metadata)
        if not __leap__introspection then
            __leap__introspection = {}
        end

        __leap__introspection[func] = metadata

        return func
    end
end

-- Type override (allow custom types)
if not _type then
    _type = type -- we preserve the original "type" function
    type = function(var)
        local realType = _type(var)

        if realType == "table" and var.__type then
            return var.__type
        else
            return realType
        end
    end
end