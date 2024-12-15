if not _leap_internal_using_operator then
    _leap_internal_using_operator = function(_filter, ...)
        local filtername = _filter
        _filter = _G[_filter]

        if type(_filter) ~= "string" then
            error("using operator expects a filter, got "..type(_filter), 2)
        end

        local args = {...}
        local locals = {}
        local i = 1
        while true do
            local name, value = debug.getlocal(2, i)
            if not name then break end
    
            locals[name] = value
            i = i + 1
        end
    
        local status, _error = pcall(function()
            load(_filter, "@"..filtername, "t", setmetatable(locals, {__index = _G}))()(table.unpack(args))
        end)

        if not status then
            error(_error, 2) 
        end
    end
end