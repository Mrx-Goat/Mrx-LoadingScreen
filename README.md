# MRX Loading Screen v2

Professional, lightweight, and fully configurable FiveM loading screen by **MRX-GOAT**.

**Build Different.**

## What it looks like

The screen uses a dark luxury blue visual system with an animated cinematic city,
perspective grid, aurora glow, floating particles, glass panels, rotating identity
rings, server status, feature cards, rules drawer, music controls, live loading stages,
tips, and a real FiveM progress bar. The design is created with HTML/CSS, so it still
appears when no background video or remote website is available.

## Features

- Real FiveM `loadProgress` integration
- Lightweight code-native animated background
- Responsive 16:9 and smaller-screen layout
- Server name, description, tagline, slot count, Discord, colors, rules, features, tips
- Optional custom logo and local MP3/OGG music
- Copy Discord button
- Rules drawer
- Autoplay-safe music controls and volume
- Automatic shutdown after player spawn
- Smooth fade into the game
- MRX-GOAT console banner
- No framework required: works with Qbox, QBCore, ESX, or standalone servers

## Installation

1. Download the repository using **Code → Download ZIP**.
2. Extract it into your FiveM server `resources` folder.
3. Rename the extracted folder to exactly:

```text
mrx-loading-screen
```

4. Add this to `server.cfg`:

```cfg
ensure mrx-loading-screen
```

5. Restart the server or run:

```text
refresh
ensure mrx-loading-screen
```

6. Join the server to test it. A loading screen is not fully testable by opening the
HTML file alone because FiveM sends the real loading progress events.

## Customization

Edit only `web/config.js` for normal customization.

### Server information

```js
server: {
  name: 'HAITIAN RP',
  tagline: 'NOUVO MOND. NOUVO FANMI.',
  discord: 'https://discord.gg/YOURINVITE',
  website: 'https://mrxgoat.com',
  maxPlayers: 200
}
```

### Colors

Change the values inside `theme` in `web/config.js`.

### Logo

1. Create `web/assets` if it is not present.
2. Put your PNG/WebP logo inside it.
3. Set:

```js
logo: 'assets/logo.png'
```

If `logo` is empty, the built-in MRX text mark appears automatically.

### Music

1. Put an `.mp3` or `.ogg` file inside `web/assets`.
2. Edit the `music` section:

```js
music: {
  autoplay: true,
  volume: 0.22,
  file: 'assets/music.mp3',
  title: 'Song Name',
  artist: 'Artist Name'
}
```

Some players must click once before Chromium permits audio playback. The play button
always remains available.

## Troubleshooting

- **Nothing appears:** confirm `fxmanifest.lua` is directly inside the resource folder.
- **Wrong nested folder:** avoid `mrx-loading-screen/mrx-loading-screen/fxmanifest.lua`.
- **Resource not found:** run `refresh` and use the exact folder name.
- **Screen never closes:** keep `loadscreen_manual_shutdown 'yes'` and `client.lua` enabled.
- **Music does not play:** use local MP3/OGG, confirm the path and click Play once.
- **Progress stays in preview mode:** test inside FiveM, not a normal web browser.

## License

Copyright © 2026 MRX-GOAT. See [LICENSE](LICENSE).
