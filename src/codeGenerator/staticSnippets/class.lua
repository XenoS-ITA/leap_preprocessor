if not _leap_internal_classBuilder then
    _leap_internal_classBuilder = function(name, prototype, baseClass)
        -- Will always be an empty table if not extending, so we check if the baseClass its nil (not defined) this mean that it tried to pass a class but it was not defined
        if not baseClass then
            error("ExtendingNotDefined: "..name.." tried to extend a class that is not defined", 2)
        end
    
        if baseClass.__prototype then
            prototype.super = setmetatable({__type = baseClass.__type, __prototype = baseClass.__prototype}, {
                __index = baseClass.__prototype,
                __call = baseClass,
                __newindex = function(self, k) error("attempted to assign class property '"..k.."' directly, please instantiate the class before assigning any properties", 2) end,
            })
        end
    
        _G[name] = setmetatable({__type = name, __prototype = prototype}, {
            __newindex = function(self, k, v)
                if k:sub(1, 2) == "__" then -- Allow internal modfications
                    rawset(self, k, v)
                else
                    error("attempt to assign class property '"..k.."' directly, please instantiate the class before assigning any properties", 2)
                end
            end,
            __call = function(self, ...)
                -- Create new object
                local obj = setmetatable({__type = self.__type}, {
                    __index = function(_self, key)
                        if self.__prototype.super then
                            return self.__prototype[key] or self.__prototype.super.__prototype[key]
                        else
                            return self.__prototype[key]
                        end
                    end,
                    __gc = function(_self)
                        if _self.destructor then
                            _self:destructor()
                        end
                    end,
                    __tostring = function (_self)
                        if _self.toString then
                            return _self:toString()
                        else
                            return type(_self)
                        end
                    end
                })
                
                if obj._leap_internal_decorators then
                    obj:_leap_internal_decorators()
                end
                
                if not self.__skipNextConstructor then
                    if obj.constructor then
                        obj:constructor(...)
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