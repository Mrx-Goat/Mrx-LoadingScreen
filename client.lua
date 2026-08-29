local closed = false

local function closeLoadingScreen()
    if closed then return end
    closed = true

    ShutdownLoadingScreenNui()
    ShutdownLoadingScreen()

    if Config.FadeOnJoin then
        DoScreenFadeOut(0)
        Wait(800)
        DoScreenFadeIn(1800)
    end
end

if Config.AutoShutdownOnSpawn then
    AddEventHandler('playerSpawned', closeLoadingScreen)
end

RegisterNetEvent('mrx-nexus-loadscreen:client:close', closeLoadingScreen)
