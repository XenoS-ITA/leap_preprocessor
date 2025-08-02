if not _leap_internal_classBuilder then
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

        -- TODO: add deepcopy also of parents to prevent cross object reference issues in child classes
        local tableKeys = {}
        local i = 1
        for k, v in next, prototype do
            if _type(v) == "table" and k:sub(1, 5) ~= "_leap" and k:sub(1, 2) ~= "__" then
                tableKeys[i] = k
                i = i + 1
            end
        end

        --#region Metatable
        local objMetatable = {
            __index = function(self, key)
                if not key then return nil end

                if key:sub(1,2) == "__" then -- Internal variables have direct access to reduce overhead
                    return rawget(prototype, key)
                end

                local cache = getmetatable(prototype).__cache -- Use the cache saved in the main prototype
                local proto = prototype

                if not cache[key] then
                    --print("Searching for var", self.__type, key)

                    -- Search for var in all hierarchy
                    while proto do
                        if rawget(proto, key) ~= nil then -- Found var
                            --print("Found var", self.__type, key)

                            -- Just store the proto where we found it, so we can access it later
                            cache[key] = proto
                            break
                        end

                        if not proto.__parent then -- No more parent and still not found, stop search and return nil
                            --print("No more parent and still not found, stop search and return nil", self.__type, key)
                            return nil
                        end

                        proto = proto.__parent.__prototype
                    end
                else
                    --print("Found var in cache", self.__type, key)
                end

                local proto = cache[key] -- Use the cached prototype and return the value from it
                return proto[key]
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

                    if not leap.minimal then
                        for k,v in pairs(self) do
                            if k ~= "super" and k:sub(1, 5) ~= "_leap" and k:sub(1, 2) ~= "__" then
                                local vtype = _type(v)
    
                                if vtype ~= "function" then
                                    local val = v
    
                                    if vtype == "table" then
                                        if v.__type then
                                            val = "<"..(v.__type)..":"..(("%p"):format(v))..">"
                                        else
                                            val = tostring(v)
                                        end
                                    end
                                    
                                    if vtype == "string" then
                                        val = '"'..v..'"'
                                    end
    
                                    info = info..k..": "..tostring(val)..", "
                                end
                            end
                        end
    
                        info = info:sub(1, -3)
                    end

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
                local obj = {__type = self.__type}

                -- deepcopy all prototype tables to prevent cross object reference issues
                for j = 1, #tableKeys do
                    local key = tableKeys[j]
                    obj[key] = _leap_internal_deepcopy(self.__prototype[key])
                end

                setmetatable(obj, objMetatable)
                --#endregion

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
                        local success, err = pcall(ctor, obj, ...)
                        if not success then
                            error(err, 2)
                        end
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
            return _type(obj) == type(_class)
        end

        if _type(_class) ~= "table" then
            error("leap.is_operator: #2 passed argument must be a class, but got ".._type(_class), 2)
        end

        if obj.__prototype then
            error("leap.is_operator: #1 passed argument must be a class instance, but got class", 2)
        end

        local _obj = obj
        while _obj and _obj.__type ~= _class.__type do
            if _obj.__parent or _obj.__prototype.__parent then
                _obj = _obj.__parent or _obj.__prototype.__parent
            else
                return false
            end
        end

        return true
    end
end