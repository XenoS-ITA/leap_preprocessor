-- This file contains the code that will be injected in any leap processed files, independently from the used statements/features
-- You should always check if that function as already been declared before redeclaring it

-- Base leap "Library"
if not leap then leap = {} end

-- Function to deserialize objects (example: objects sended over the network)
if not leap.deserialize then
    leap.deserialize = function(data, visited)
        visited = visited or {}
        
        if visited[data] then
            return visited[data]
        end

        local dataType = _type(data)
        if dataType ~= "table" or not data.__type then
            if dataType == "table" then -- tables can still contains leap serialized objects
                local clone = {}
                visited[data] = clone

                for k, v in pairs(data) do
                    clone[k] = leap.deserialize(v, visited)
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
        visited[data] = obj

        if obj.deserialize then
            obj:deserialize(data)
        else
            for k, v in pairs(data) do
                if k ~= "__type" then
                    obj[k] = leap.deserialize(v, visited)
                end
            end
        end

        return obj
    end
end


if not leap.serialize then
    leap.serialize = function(data, visited)
        visited = visited or {}

        local dataType = _type(data)
        if dataType ~= "table" then -- primitive
            return data
        end

        if visited[data] then
            return visited[data]
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

            visited[data] = serialized

            -- serialized data can still contains objects to serialize
            for k, v in pairs(serialized) do
                serialized[k] = leap.serialize(v, visited)
            end

            serialized.__type = data.__type
            return serialized
        end

        local filterSet = {
            __stack = true,
            __parent = true,
            super = true
        }

        if data.__ignoreList then
            for k, v in pairs(data.__ignoreList) do
                filterSet[v] = true
            end
        end

        local clone = _leap_internal_deepcopy(data, visited, filterSet, true)
        visited[data] = clone

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

-- If we are outside FiveM and don't have a clone function, make one (this will be slower than the native one)
if not table.clone then
    table.clone = function(orig)
        local clone = {}

        for k, v in pairs(orig) do
            clone[k] = v
        end

        return clone
    end
end

-- Uses table.clone for fast shallow copying (memcpy)
-- Handles circular references via seen table
-- Significantly faster (~50%) than doing actual deepcopy for flat or lightly-nested structures

if not _leap_internal_deepcopy then
    _leap_internal_deepcopy = function(orig, seen, _filter, skipFunctions)
        if _type(orig) ~= "table" then return orig end
        seen = seen or {}
        if seen[orig] then return seen[orig] end

        local copy = table.clone(orig)
        seen[orig] = copy

        for k, v in next, orig do
            if _filter and _filter[k] then
                copy[k] = nil -- skip filtered keys
            else
                local t = _type(v)

                if t == "function" and skipFunctions then
                    copy[k] = nil
                else
                    if t == "table" then
                        if v.__type ~= nil then
                            copy[k] = leap.serialize(v, seen)
                        else
                            copy[k] = _leap_internal_deepcopy(v, seen, _filter, skipFunctions)
                        end
                    else
                        copy[k] = v
                    end
                end

            end
        end

        return copy
    end
end

-- Currently not used since there's still to much garbage in the stack trace and class functions are wrapped and so they lose the correct name, still finding a way to do it
-- This is a stack trace function inspired by fivem stack traceback
--[[ if not _leap_internal_errorWithStack then
    _leap_internal_errorWithStack = function(msg, stacklvl, lvl)
        if type(msg) ~= "string" then error("errorWithStack: #1 passed argument must be a string, but got "..type(msg), 2) end
        if type(stacklvl) ~= "number" then error("errorWithStack: #2 passed argument must be a number, but got "..type(stacklvl), 2) end
        if type(lvl) ~= "number" then error("errorWithStack: #3 passed argument must be a number, but got "..type(lvl), 2) end

        local err = debug.traceback(msg, stacklvl+1)
        -- Use hex for 0-255 since js luaminifier try to parse it in strange way 
        err = err:match("stack traceback:([%z\x01-\xFF]-)citizen:")
        local ferr = ""

        for file, line, varName in err:gmatch("(@.-):(%d+):%s*.-%s*'([^']+)'") do
            if file and line and varName then
                -- double \ in \\n since when writing to preprocessed file will be converted to a single \
                ferr = ferr .. string.format("\\n^3> %s^7 (^5%s^7:%s)", varName, file, line)
            end
        end

        error(msg .. ferr, lvl+1)
    end
end ]]

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