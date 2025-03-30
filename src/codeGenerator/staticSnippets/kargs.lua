-- We dont use a parameter directly in the function since we will polute the function parameters 
-- and other environments without leap loaded will dont provide the parameter 

if not __leap_call_kargs then 
    __leap_call_kargs = function(kargs, ...)
        __leap_KARGS = kargs -- Register __leap_KARGS global variable (this will be checked by the function)
        return ...
    end
end