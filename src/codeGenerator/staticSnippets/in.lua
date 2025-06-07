if not _leap_internal_in_operator then
    _leap_internal_in_operator = function(value, tab)
        local _type = type(tab)

        if _type == "table" then
            -- Array checks if value is in the table
            if table.type(tab) == "array" then
                for k, v in pairs(tab) do
                    if v == value then
                        return true
                    end
                end

            -- Hash checks if key is in the table
            elseif table.type(tab) == "hash" then
                for k, v in pairs(tab) do
                    if k == value then
                        return true
                    end
                end
            else
                -- Otherwise check if value or key is in the table
                for k, v in pairs(tab) do
                    if v == value or k == value then
                        return true
                    end
                end
            end
        elseif _type == "string" then
            -- Check if value is a substring of the base string
            return tab:find(value)
        else
            error("in operator: unsupported type " .. _type)
        end

        return false
    end
end