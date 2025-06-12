-- This file contains the code that will be injected in any leap processed files, independently from the used statements/features
-- You should always check if that function as already been declared before redeclaring it

-- Base leap "Library"
if not leap then leap = {} end

-- Function to deserialize objects (example: objects sended over the network)
if not leap.deserialize then
    leap.deserialize = function(data)
        local dataType = _type(data)

        if dataType ~= "table" or not data.__type then
            if dataType == "table" then -- tables can still contains leap serialized objects
                local clone = {}
                for k, v in pairs(data) do
                    clone[k] = leap.deserialize(v)
                end
                return clone
            else -- primitive
                return data
            end
        end

        -- get class
        local _class = _G[data.__type]
        if not _class then
            error("Class '" .. data.__type .. "' not found", 2)
        end

        _class.__skipNextConstructor = true
        local obj = _class()

        if obj.deserialize then
            obj:deserialize(data)
        else
            for k, v in pairs(data) do
                if k ~= "__type" then
                    obj[k] = leap.deserialize(v)
                end
            end
        end

        return obj
    end
end


if not leap.serialize then
    leap.serialize = function(data)
        local dataType = _type(data)

        if dataType ~= "table" then -- primitive
            return data
        end

        -- If the actual type is a normal table (no class) then serialize each element
        if type(data) == "table" then
            local ret = {}
            for k, v in pairs(data) do
                ret[k] = leap.serialize(v)
            end

            return ret
        end

        -- custom serialize method
        if data.serialize then
            local serialized = data:serialize()
            if not serialized then
                return nil
            end

            if type(serialized) ~= "table" then
                error("leap.serialize: custom serialize method must return a table", 2)
            end

            -- serialized data can still contains objects to serialize
            for k, v in pairs(serialized) do
                serialized[k] = leap.serialize(v)
            end

            serialized.__type = data.__type
            return serialized
        end

        -- normal serialization, table deep clone
        local clone = {}
        for k, v in pairs(data) do
            if k ~= "__stack" then -- ignore internal variables
                local skip = false
                
                if data.__ignoreList then
                    for _k,_v in pairs(data.__ignoreList) do
                        if k == _v then
                            skip = true
                            break
                        end
                    end
                end
                
                if not skip then
                    clone[k] = leap.serialize(v)
                end
            end
        end

        return clone
    end
end

if not skipSerialize then
    skipSerialize = function(class, ignoreList)
        if _type(class) ~= "table" then error("skipSerialize: #1 passed argument must be a class, but got "..type(class), 2) end

        class.__prototype.__ignoreList = ignoreList
    end
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
            __leap__introspection = setmetatable({}, { __mode = "k" }) -- weak keys
        end

        __leap__introspection[func] = metadata

        return func
    end
end

if not leap.minimal then
    leap.minimal = false
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