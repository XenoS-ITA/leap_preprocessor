if not _leap_internal_classBuilder then
    local getCurrentClass = function(obj)
        return obj.__stack[#obj.__stack]
    end

    local getCurrentPrototype = function(obj)
        local class = getCurrentClass(obj)

        --print("Current level", #obj.__stack, class?.__type)
        return class and class.__prototype
    end

    local getCurrentType = function(obj)
        local class = getCurrentClass(obj)
        return class and class.__type
    end

    local pushParentOfPrototype = function(obj, proto)
        if not proto.__parent then
            --print("Adding nil parent")
            table.insert(obj.__stack, {})
        else
            --print("Adding parent", proto.__parent.__type)
            table.insert(obj.__stack, proto.__parent)
        end
    end

    local popParent = function(obj)
        local parent = table.remove(obj.__stack)
        --print("Popping parent", parent and parent.__type)
    end

    local deepcopy = function(orig, seen)
        if type(orig) ~= "table" then return orig end
        if seen and seen[orig] then return seen[orig] end

        local copy = {}
        seen = seen or {}
        seen[orig] = copy

        for k, v in next, orig do
            local kcopy = type(k) == "table" and deepcopy(k, seen) or k
            local vcopy = type(v) == "table" and deepcopy(v, seen) or v

            copy[kcopy] = vcopy
        end

        return copy
    end

    local mt_super = {
        __index = function(self, key)
            if key == "__type" then
                return getCurrentType(self.obj)
            else
                local proto = getCurrentPrototype(self.obj)
    
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
            -- Keep track of the stack of parent classes also when doing metatable chaining!
            setmetatable(prototype, {
                __index = function(_, key)
                    local val = baseClass.__prototype[key]
                    
                    if type(val) == "function" then
                        return function(self, ...)
                            local prototype = getCurrentPrototype(self)

                            -- If a method is called from a subclass dont push the parent, only if called from outside the class hierarchy (outside main or subclasses)
                            local insideSubclass = #self.__stack > 1

                            if insideSubclass or (not prototype or next(prototype) == nil) then
                                return val(self, ...)
                            else -- If it has a parent and this function has not been called from the class hierarchy then push the parent
                                pushParentOfPrototype(self, prototype)
                                    local ret = val(self, ...)
                                popParent(self)

                                return ret
                            end
                        end
                    else
                        return val
                    end
                end
            })
            prototype.__parent = baseClass
        end 

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
            __index = prototype,
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
                    pushParentOfPrototype(obj, self.__prototype)
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
                    if obj.constructor then
                        obj:constructor(...)
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