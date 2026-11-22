if not _leap_internal_classBuilder then
    _leap_internal_classBuilder = function(name, prototype, baseClass)
        prototype._leap_internal_decorators = {}

        -- Will always be an empty table if not extending, so we check if the baseClass its nil (not defined) this mean that it tried to pass a class but it was not defined
        if not baseClass then
            error("ExtendingNotDefined: "..name.." tried to extend a class that is not defined", 2)
        end

        -- Prototypes are chained (child -> parent), so inherited lookups run in C and always see later changes
        if baseClass.__prototype then
            prototype.__parent = baseClass
            setmetatable(prototype, { __index = baseClass.__prototype })
        end

        -- Save all tableKeys (also of parent classes!)
        local proto = prototype
        local tableKeys = {}

        while proto do
            for k, v in next, proto do
                if not tableKeys[k] then
                    if _type(v) == "table" and k:sub(1, 5) ~= "_leap" and k:sub(1, 2) ~= "__" then
                        tableKeys[k] = proto
                    end
                end
            end

            if not proto.__parent then
                break
            end

            proto = proto.__parent.__prototype
        end

        -- Flat arrays for the instantiation loop (the owning prototype's value is still read live at every instantiation)
        local fieldKeys, fieldProtos, fieldCount = {}, {}, 0
        for k, owner in next, tableKeys do
            fieldCount = fieldCount + 1
            fieldKeys[fieldCount] = k
            fieldProtos[fieldCount] = owner
        end

        local copyField = _leap_internal_copyfield
        local createTable = table.create

        --#region Metatable
        local objMetatable = {
            __index = prototype,
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

        -- Lua only reads __gc at setmetatable time, so instances with a destructor need their own metatable
        local gcMetatable = {}
        for k, v in next, objMetatable do
            gcMetatable[k] = v
        end

        gcMetatable.__gc = function(self)
            local destructor = self.destructor
            if destructor then
                destructor(self)
            end
        end
        --#endregion

        _G[name] = setmetatable({__type = name, __prototype = prototype}, {
            __index = function(self, k)
                local ret = prototype[k]

                -- Skip self if it is a function (also if it called as method, to prevent accessing the class itself)
                if type(ret) == "function" then
                    return function(a, ...) 
                        if _type(a) == "table" and a.__type == self.__type then 
                            return ret(nil, ...)
                        else 
                            return ret(a, ...)
                        end
                    end
                else
                    return ret
                end
            end,
            __newindex = function(self, k, v)
                if k:sub(1, 2) == "__" then -- Allow internal modfications
                    rawset(self, k, v)
                else
                    error("attempt to assign class property '"..k.."' directly, please instantiate the class before assigning any properties", 2)
                end
            end,
            __call = function(self, ...)
                --#region Object Instantiation
                local obj

                -- Presize the hash part so adding the copied fields does not rehash the object (cfx only)
                if createTable and fieldCount > 0 then
                    obj = createTable(0, fieldCount + 1)
                    obj.__type = self.__type
                else
                    obj = {__type = self.__type}
                end

                -- deepcopy all prototype tables to prevent cross object reference issues
                for i = 1, fieldCount do
                    local key = fieldKeys[i]
                    obj[key] = copyField(fieldProtos[i][key])
                end

                local hasGc = prototype.destructor ~= nil

                setmetatable(obj, hasGc and gcMetatable or objMetatable)
                --#endregion

                --#region Decorators Application
                local proto = prototype

                -- Loop all hierarchy, and apply func decorators to all functions, also decorators of parent classes defined functions!
                while proto do
                    if proto._leap_internal_decorators then
                        for _, decorator in pairs(proto._leap_internal_decorators) do
                            local original = obj[decorator.name]
                            local wrapper = function(...) return original(obj, ...) end
                            leap.registerfunc(wrapper, leap.fsignature(original))

                            if not _G[decorator.decoratorName] then
                                error("Decorator "..decorator.decoratorName.." does not exist", 2)
                            end

                            obj[decorator.name] = _G[decorator.decoratorName](obj, wrapper, table.unpack(decorator.args)) or original
                        end
                    end

                    if not proto.__parent then
                        break
                    end

                    proto = proto.__parent.__prototype
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

                -- The constructor may have assigned self.destructor
                if not hasGc and rawget(obj, "destructor") then
                    setmetatable(obj, gcMetatable)
                end

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