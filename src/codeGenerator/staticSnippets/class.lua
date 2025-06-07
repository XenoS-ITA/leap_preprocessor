if not _leap_internal_classBuilder then
    local mt_super = {
        __index = function(self, key)
            local val = self.parent.__prototype[key]

            if type(val) == "function" then
                local cached = self.cache[key]

                if not cached then
                    cached = function(_, ...)
                        return val(_.obj, ...)
                    end

                    self.cache[key] = cached
                end

                return cached
            else
                return val
            end
        end,

        __call = function(self, ...)
            if self.parent.__prototype.constructor then
                local old = self.obj.super
                -- When calling parent constructor we need to set the super class to the parent of the parent (obj > parent (super) > parent (super.super))
                self.obj.super = _leap_internal_class_makeSuper(self.obj, self.parent.__prototype.__parent)

                local ret = self.parent.__prototype.constructor(self.obj, ...)

                -- Reset the super class to this parent
                self.obj.super = old
                return ret
            else
                error("leap: super class has no constructor", 2)
            end
        end,

        __newindex = function()
            error("cannot assign to super", 2)
        end,
    }

    local function deepcopy(orig, seen)
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

    function _leap_internal_class_makeSuper(obj, parent)
        return setmetatable({cache = {}, parent = parent, obj = obj}, mt_super)
    end

    _leap_internal_classBuilder = function(name, prototype, baseClass)
        prototype._leap_internal_decorators = {}

        -- Will always be an empty table if not extending, so we check if the baseClass its nil (not defined) this mean that it tried to pass a class but it was not defined
        if not baseClass then
            error("ExtendingNotDefined: "..name.." tried to extend a class that is not defined", 2)
        end

        local baseProto = baseClass.__prototype
        if baseProto then
            -- metatable chaining (if not found in prototype lookup in baseProto)
            setmetatable(prototype, {__index = baseProto})
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
                        if k ~= "__type" and k ~= "super" and k:sub(1, 5) ~= "_leap" then
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

        _G[name] = setmetatable({__type = name, __prototype = prototype}, {
            __newindex = function(self, k, v)
                if k:sub(1, 2) == "__" then -- Allow internal modfications
                    rawset(self, k, v)
                else
                    error("attempt to assign class property '"..k.."' directly, please instantiate the class before assigning any properties", 2)
                end
            end,
            __call = function(self, ...)
                local proto = self.__prototype
                local obj = {__type = self.__type}

                -- deepcopy all prototype tables to prevent cross object reference issues
                for j = 1, #tableKeys do
                    local key = tableKeys[j]
                    obj[key] = deepcopy(proto[key])
                end

                setmetatable(obj, objMetatable)
                obj.super = _leap_internal_class_makeSuper(obj, prototype.__parent)

                for _, decorator in pairs(obj._leap_internal_decorators) do
                    local original = obj[decorator.name]
                    local wrapper = function(...) return original(obj, ...) end
                    leap.registerfunc(wrapper, leap.fsignature(original))

                    obj[decorator.name] = _G[decorator.decoratorName](obj, wrapper, table.unpack(decorator.args)) or original
                end
                

                if not self.__skipNextConstructor then
                    if obj.constructor then
                        obj:constructor(...)
                    elseif baseProto then
                        baseClass(...)
                    end
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