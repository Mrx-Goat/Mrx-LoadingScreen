local resource = GetCurrentResourceName()

CreateThread(function()
    Wait(250)
    if not Config.PrintConsoleBanner then return end

    print('^3 __  __ ____  __  __   ____  _            _              _   _     ^7')
    print('^3|  \\/  |  _ \\ \\ \\/ /  | __ )| |_   _  ___| |_ ___   ___ | |_| |__  ^7')
    print('^3| |\\/| | |_) | \\  /   |  _ \\| | | | |/ _ \\ __/ _ \\ / _ \\| __| `_ \\ ^7')
    print('^3| |  | |  _ <  /  \\   | |_) | | |_| |  __/ || (_) | (_) | |_| | |^7')
    print('^3|_|  |_|_| \\_\\/_/\\_\\  |____/|_|\\__,_|\\___|\\__\\___/ \\___/ \\__|_| |_|^7')
    print('^4                    MRX Loading Screen v1.1.0^7')
    print('^1                       BUILD DIFFERENT^7')
end)
