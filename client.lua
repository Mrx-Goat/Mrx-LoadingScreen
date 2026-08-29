local closed = false

local function closeLoadingScreen()
    if closed then return end
    closed = true
    ShutdownLoadingScreenNui()
    ShutdownLoadingScreen()

    if Config.FadeOnJoin then
        DoScreenFadeOut(0)
        Wait(500)
        DoScreenFadeIn(1200)
    end
end

if Config.AutoShutdownOnSpawn then
    AddEventHandler('playerSpawned', closeLoadingScreen)
end

RegisterNetEvent('mrx-loading-screen:client:close', closeLoadingScreen)
exports('CloseLoadingScreen', closeLoadingScreen)
