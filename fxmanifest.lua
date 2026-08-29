fx_version 'cerulean'
game 'gta5'

name 'mrx-loading-screen'
author 'MRX-GOAT'
description 'Professional configurable FiveM loading screen — Build Different'
version '2.0.0'

lua54 'yes'

loadscreen 'web/index.html'
loadscreen_cursor 'yes'
loadscreen_manual_shutdown 'yes'

shared_script 'config.lua'
client_script 'client.lua'
server_script 'server.lua'

files {
    'web/index.html',
    'web/style.css',
    'web/config.js',
    'web/app.js',
    'web/assets/**/*'
}
