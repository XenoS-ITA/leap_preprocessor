if not _leap_internal_using_operator then
    _leap_internal_using_operator = function(_filter, ctx, ...)
        local filtername = _filter
        _filter = _G[_filter]

        if type(_filter) ~= "string" then
            error("using operator expects a filter, got "..type(_filter), 2)
        end

        local ddd = ctx.ddd
        ctx.ddd = nil

        local args = {...}
        local status, _error = pcall(function()
            load(_filter, "@"..filtername, "t", setmetatable(ctx, {__index = _G}))()(table.unpack(args), ddd and table.unpack(ddd))
        end)

        if not status then
            error(_error, 2) 
        end
    end
end