local resource = GetCurrentResourceName()

CreateThread(function()
    Wait(250)
    if not Config.PrintConsoleBanner then return end

    print('^5============================================================^7')
    print(('^4[%s]^7 READY'):format(Config.ResourceDisplayName))
    print(('^3Resource:^7 %s'):format(resource))
    print(('^3Developer:^7 %s'):format(Config.Author))
    print(('^3Discord:^7 %s'):format(Config.Discord))
    print(('^3Latest Version:^7 v%s'):format(Config.Version))
    print(('^3Brand:^7 %s'):format(Config.Branding))
    print('^5============================================================^7')
end)
