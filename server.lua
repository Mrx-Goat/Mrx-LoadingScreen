local resource = GetCurrentResourceName()

CreateThread(function()
    Wait(250)
    if not Config.PrintConsoleBanner then return end

    print("^3 __  __ ____  __  __   _                    _ _               ____                           ^7")
    print("^3|  \\/  |  _ \\ \\ \\/ /  | |    ___   __ _  __| (_)_ __   __ _ / ___|  ___ _ __ ___  ___ _ __  ^7")
    print("^3| |\\/| | |_) | \\  /   | |   / _ \\ / _' |/ _' | | '_ \\ / _' \\___ \\ / __| '__/ _ \\/ _ \\ '_ \\ ^7")
    print("^3| |  | |  _ <  /  \\   | |__| (_) | (_| | (_| | | | | | (_| |___) | (__| | |  __/  __/ | | |^7")
    print("^3|_|  |_|_| \\_\\/_/\\_\\  |_____\\___/ \\__,_|\\__,_|_|_| |_|\\__, |____/ \\___|_|  \\___|\\___|_| |_|^7")
    print("^3                                                       |___/                                  ^7")
    print("^4                         MRX Loading Screen v1.1.0^7")
    print("^1                              BUILD DIFFERENT^7")
end)
