local resource = GetCurrentResourceName()

CreateThread(function()
    Wait(250)
    if not Config.PrintConsoleBanner then return end

    print('^3+--------------------------------+^7')
    print('^3|^4       MRX LOADING SCREEN       ^3|^7')
    print('^3|^7             v1.1.0             ^3|^7')
    print('^3|^1        BUILD DIFFERENT         ^3|^7')
    print('^3+--------------------------------+^7')
end)
