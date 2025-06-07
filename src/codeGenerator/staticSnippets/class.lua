if not _leap_internal_classBuilder then
    local function deepcopy(orig, seen)
        seen = seen or {}

        if type(orig) ~= "table" then return orig end
        if seen[orig] then return seen[orig] end

        local copy = {}
        seen[orig] = copy
        
        for k, v in pairs(orig) do
            copy[deepcopy(k, seen)] = deepcopy(v, seen)
        end
        
        return copy
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
        end 

        local tableKeys = {}
        for k,v in pairs(prototype) do
            if _type(v) == "table" and k:sub(1, 5) ~= "_leap" then
                table.insert(tableKeys, k)
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
                for _,k in pairs(tableKeys) do
                    obj[k] = deepcopy(proto[k])
                end

                setmetatable(obj, objMetatable)

                for _, decorator in pairs(obj._leap_internal_decorators) do
                    local original = obj[decorator.name]
                    local wrapper = function(...) return original(obj, ...) end
                    leap.registerfunc(wrapper, leap.fsignature(original))

                    obj[decorator.name] = _G[decorator.decoratorName](obj, wrapper, table.unpack(decorator.args)) or original
                end
                
                obj.super = setmetatable({}, {
                    __index = function(_, key)
                        local baseFunc = baseProto[key]
                        if type(baseFunc) == "function" then
                            return function(...)
                                return baseFunc(obj, ...)
                            end
                        else
                            return baseFunc
                        end
                    end,

                    __call = function(_, ...)
                        if baseProto.constructor then
                            return baseProto.constructor(obj, ...)
                        end
                    end,

                    __newindex = function(_, k)
                        error("attempted to assign class property '"..k.."' directly, please instantiate the class before assigning any properties", 2)
                    end
                })

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

        local _obj = obj
        while _obj and _obj.__type ~= _class.__type do
            if _obj.super then
                _obj = _obj.super
            else
                return false
            end
        end

        return true
    end
end