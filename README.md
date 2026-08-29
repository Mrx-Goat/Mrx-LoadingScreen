# MRX Nexus Loading Screen

A premium, fully editable FiveM loading screen by **MRX-GOAT**.

**Build Different.**

## Preview and design

MRX Nexus uses a luxury dark-blue glass interface over a cinematic WebM background.
It includes animated lighting, particles, server branding, real FiveM loading progress,
music controls, rotating tips, rules, staff profiles, a gallery, and upcoming events.
The full original asset pack is included in this repository.

## Features

- Cinematic WebM background video
- Custom logo and server branding
- Home, Rules, Team, Gallery, and Events pages
- Real FiveM loading progress and loading stages
- Two included music tracks with covers and player controls
- Four included staff avatar placeholders
- Three gallery images and two event posters
- Configurable server information, Discord, website, colors, and tips
- Automatic shutdown after the player spawns
- Responsive layout
- Qbox, QBCore, ESX, and standalone compatible
- No framework dependency

## Installation

1. Select **Code → Download ZIP** on this GitHub repository.
2. Extract the archive.
3. Rename the extracted folder to exactly `mrx-nexus-loadscreen`.
4. Move it into your FiveM server `resources` folder.
5. Add this line to `server.cfg`:

```cfg
ensure mrx-nexus-loadscreen
```

6. Restart the server, or run:

```text
refresh
ensure mrx-nexus-loadscreen
```

7. Join the server to test the real loading progress.

Correct structure:

```text
resources/
└── mrx-nexus-loadscreen/
    ├── fxmanifest.lua
    ├── config.lua
    ├── client.lua
    ├── server.lua
    └── web/
```

Do not leave a second nested folder between `mrx-nexus-loadscreen` and
`fxmanifest.lua`. Disable every other loading-screen resource.

## Customization

Start with `web/assets/README_EDIT_HERE.txt`.

Main server settings:

```text
web/assets/settings/config.js
```

This controls the server name, tagline, description, Discord, website, player count,
colors, background, music playlist, navigation, and rotating tips.

Replace the logo and background while keeping the same filenames:

```text
web/assets/logo.png
web/assets/background.webm
```

WebM/VP8 is recommended because FiveM CEF may not reliably play H.264 MP4 video.

Edit the content pages here:

```text
web/assets/settings/rules.js
web/assets/settings/team.js
web/assets/settings/gallery.js
web/assets/settings/events.js
```

Replace their images inside:

```text
web/assets/avatars/
web/assets/gallery/
web/assets/events/
web/assets/music/
```

Customers normally do not need to edit `index.html`, `style.css`, or `script.js`.

## Music behavior

- Maximum three configured tracks
- One track repeats automatically
- Multiple tracks continue in order and return to track one
- Optional shuffle mode
- Play, pause, previous, next, seek, mute, and volume controls

## Troubleshooting

- **Nothing appears:** confirm `fxmanifest.lua` is directly inside the resource folder.
- **Resource not found:** run `refresh` and verify the exact folder name.
- **Black background:** keep the video as WebM/VP8 and verify its path in `config.js`.
- **Music does not autoplay:** click once; Chromium may block autoplay.
- **Screen does not close:** do not remove `client.lua` or manual shutdown settings.
- **Missing images:** asset paths are case-sensitive.
- **Browser preview:** real loading progress only appears inside FiveM.

## Performance

Use optimized WebM video, compressed WebP/JPG/PNG images, and compressed audio. Large
media files increase download time for new players.

## Version

**v1.1.0 — Original full asset edition**

## License

Released under the [MIT License](LICENSE).
