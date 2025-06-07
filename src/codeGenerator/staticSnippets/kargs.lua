if not __leap_call_kargs then 
    __leap_call_kargs = function(func, kargs, ...)
        local args = {...}
        local sig = leap.fsignature(func)

        if not sig then
            error("leap: "..func.." cant accept kargs as it has no metadata (probably not processed by leap)",2)
        end

        for kargname,value in pairs(kargs) do 
            for i,farg in pairs(sig.args) do
                if farg.name == kargname then
                    if args[i] then
                        local msg = string.format("leap: argument '%s' for function '%s' was provided both positionally (%s) and as a keyword (%s)",
                            kargname,
                            sig.name,
                            tostring(args[i]),
                            tostring(value)
                        )

                        error(msg, 2)
                    end

                    args[i] = value
                    break
                end
            end
        end

        return table.unpack(args)
    end
end