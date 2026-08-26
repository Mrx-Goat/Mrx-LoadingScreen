fx_version 'cerulean'
game 'gta5'

name 'mrx-nexus-loadscreen'
author 'MRX-GOAT'
description 'Premium editable FiveM loading screen - Build Different'
version '1.1.0'

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
    'web/script.js',
    'web/assets/**/*'
}
