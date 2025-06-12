if not _leap_internal_classBuilder then
    local getCurrentPrototype = function(obj)
        local class = obj.__stack[#obj.__stack] -- getCurrentClass

        --print("Current level", #obj.__stack, class?.__type)
        return class and class.__prototype
    end

    local getCurrentType = function(obj)
        local class = obj.__stack[#obj.__stack] -- getCurrentClass
        return class and class.__type
    end

    local NIL_PARENT = {}
    local pushParentOfPrototype = function(obj, proto)
        if not proto.__parent then
            --print("Adding nil parent")
            table.insert(obj.__stack, NIL_PARENT)
        else
            --print("Adding parent", proto.__parent.__type)
            table.insert(obj.__stack, proto.__parent)
        end
    end

    local popParent = function(obj)
        local parent = table.remove(obj.__stack)
        --print("Popping parent", parent and parent.__type)
    end

    --[[ local debugStack = function(obj)
        print("STACK:")
        for i = 1, #obj.__stack do
            print(i, obj.__stack[i].__type)
        end
        print("")
    end ]]

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
    local deepcopy = function(orig, seen)
        if type(orig) ~= "table" then return orig end
        seen = seen or {}
        if seen[orig] then return seen[orig] end

        local copy = table.clone(orig)
        seen[orig] = copy

        for k, v in next, orig do
            if type(v) == "table" then
                copy[k] = deepcopy(v, seen)
            end
        end

        return copy
    end

    local mt_super = {
        __index = function(self, key)
            if key == "__type" then
                return getCurrentType(self.obj)
            else
                local proto = getCurrentPrototype(self.obj)
                --print("Super searching for", key, "in", getCurrentClass(self.obj))
    
                -- No parent
                if not proto or next(proto) == nil then
                    return nil
                end
    
                local member = proto[key]
                
                if type(member) == "function" then
                    return function(_, ...)
                        pushParentOfPrototype(self.obj, proto)
                            local ret = member(self.obj, ...)
                        popParent(self.obj)

                        return ret
                    end
                else
                    return member
                end
            end
        end,
        __call = function(self, ...)
            local constructor = self.constructor

            if constructor then
                return constructor(...)
            end
        end
    }

    function _leap_internal_class_makeSuper(obj)
        return setmetatable({obj = obj}, mt_super)
    end

    _leap_internal_classBuilder = function(name, prototype, baseClass)
        prototype._leap_internal_decorators = {}

        -- Will always be an empty table if not extending, so we check if the baseClass its nil (not defined) this mean that it tried to pass a class but it was not defined
        if not baseClass then
            error("ExtendingNotDefined: "..name.." tried to extend a class that is not defined", 2)
        end

        if baseClass.__prototype then
            prototype.__parent = baseClass
        end 

        --#region Prototype metatable to handle cache
        local mt_proto = {
            __cache = {},
            __newindex = function (t, k, v)
                rawset(t, k, v)
                getmetatable(t).__cache[k] = nil -- Clear cache
            end
        }
        setmetatable(prototype, mt_proto)
        --#endregion

        local tableKeys = {}
        local i = 1
        for k, v in next, prototype do
            if _type(v) == "table" and k:sub(1, 5) ~= "_leap" then
                tableKeys[i] = k
                i = i + 1
            end
        end

        --#region Metatable
        local objMetatable = {
            __index = function(self, key)
                local cache = getmetatable(prototype).__cache -- Use the cache saved in the main prototype
                local proto = prototype
                local var = proto[key]

                if not cache[key] then
                    --print("Searching for var", self.__type, key)

                    -- Search for var in all hierarchy
                    while proto do
                        if proto[key] ~= nil then -- Found var
                            --print("Found var", self.__type, key)
                            var = proto[key]
                            break
                        end

                        if not proto.__parent then -- No more parent and still not found, stop search and return nil
                            --print("No more parent and still not found, stop search and return nil", self.__type, key)
                            return nil
                        end

                        proto = proto.__parent.__prototype
                    end
                    
                    if type(var) == "function" then
                        -- Wrap the function with stack management
                        cache[key] = function(_, ...)
                            if not _ then error("leap: You need to pass self when calling a class method", 2) end

                            pushParentOfPrototype(_, proto)
                                local ret = var(_, ...)
                            popParent(_)

                            return ret
                        end
                    else
                        -- Just store the proto where we found it, so we can access it later
                        cache[key] = {
                            proto = proto
                        }
                    end
                else
                    --print("Found var in cache", self.__type, key)
                end

                -- If cached reuturn that
                if type(cache[key]) == "function" then
                    return cache[key]
                else
                    local proto = cache[key].proto
                    return proto[key]
                end
            end,
            __gc = function(self)
                if self.destructor then
                    self:destructor()
                end
            end,
            __tostring = function(self)
                if self.toString then
                    return self:toString()
                else
                    local info = ""
                    for k,v in pairs(self) do
                        if k ~= "super" and k:sub(1, 5) ~= "_leap" and k:sub(1, 2) ~= "__" then
                            if _type(v) == "table" then
                                if getmetatable(v) then
                                    v = tostring(v)
                                else
                                    v = json.encode(v)
                                end
                            end
                            
                            info = info..k..": "..tostring(v)..", "
                        end
                    end

                    info = info:sub(1, -3)

                    return "<"..self.__type..":"..(("%p"):format(self)).."> "..info
                end
            end
        }
        --#endregion

        _G[name] = setmetatable({__type = name, __prototype = prototype}, {
            __newindex = function(self, k, v)
                if k:sub(1, 2) == "__" then -- Allow internal modfications
                    rawset(self, k, v)
                else
                    error("attempt to assign class property '"..k.."' directly, please instantiate the class before assigning any properties", 2)
                end
            end,
            __call = function(self, ...)
                --#region Object Instantiation
                local obj = {__type = self.__type, __stack = {}}

                -- deepcopy all prototype tables to prevent cross object reference issues
                for j = 1, #tableKeys do
                    local key = tableKeys[j]
                    obj[key] = deepcopy(self.__prototype[key])
                end

                setmetatable(obj, objMetatable)
                --#endregion

                local parentclass = self.__prototype.__parent
                if parentclass then
                    obj.super = _leap_internal_class_makeSuper(obj)
                end

                --#region Decorators Application
                for _, decorator in pairs(obj._leap_internal_decorators) do
                    local original = obj[decorator.name]
                    local wrapper = function(...) return original(obj, ...) end
                    leap.registerfunc(wrapper, leap.fsignature(original))

                    obj[decorator.name] = _G[decorator.decoratorName](obj, wrapper, table.unpack(decorator.args)) or original
                end
                --#endregion
                
                -- #region Constructor Call
                if not self.__skipNextConstructor then
                    local ctor = obj.constructor
                    if ctor then
                        ctor(obj, ...)
                    end
                end
                -- #endregion

                self.__skipNextConstructor = nil
                return obj
            end
        })
    end

    _leap_internal_classBuilder("Error", {
        constructor = function(self, message)
            self.message = message
        end,

        toString = function(self)
            return type(self)..": "..self.message
        end
    }, {})
end

if not _leap_internal_is_operator then
    _leap_internal_is_operator = function(obj, _class)
        if not obj or not _class then
            return false
        end

        if _type(obj) ~= "table" then
            error("leap.is_operator: #1 passed argument must be a class instance, but got ".._type(obj), 2)
        end

        if _type(_class) ~= "table" then
            error("leap.is_operator: #2 passed argument must be a class, but got ".._type(_class), 2)
        end

        if obj.__prototype then
            error("leap.is_operator: #1 passed argument must be a class instance, but got class", 2)
        end

        local _obj = obj
        while _obj and _obj.__type ~= _class.__type do
            if _obj.super then
                _obj = _obj.super.parent -- Extract parent info
            else
                return false
            end
        end

        return true
    end
end