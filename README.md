# MRX Nexus Loading Screen

A modern, configurable FiveM loading screen by **MRX-GOAT — Build Different**.

## Features

- Home, rules, team, gallery and events pages
- Configurable server identity, links, colors and content
- Music player with up to three tracks
- FiveM loading progress integration
- Video background, image galleries and staff cards
- Responsive blue premium interface

## Quick installation

1. Download `mrx-nexus-loadscreen.zip` from this repository.
2. Extract it into your FiveM resources folder.
3. Rename the extracted folder to `mrx-nexus-loadscreen`.
4. Add `ensure mrx-nexus-loadscreen` to `server.cfg`.
5. Disable any other loading-screen resource.

## Edit your server information

Start with:

```text
web/assets/README_EDIT_HERE.txt
```

The main settings are in:

```text
web/assets/settings/config.js
```

Replace placeholder Discord, website, logo, music, gallery and background files before publishing the resource.

## Source code

Readable source files are available in the [`source/`](source/) folder. Large demonstration media remains in the downloadable ZIP to keep the repository easier to browse.

## Verified fixes in the source folder

- Removed an invalid `web/config.js` manifest entry.
- Escaped editable rule, team and event content before inserting it into HTML.
- Added a project `.gitignore`.
- Confirmed all JavaScript settings files pass syntax validation.

## Performance

Large video and audio files increase player loading time. For production, use compressed WebM/MP4 video, WebP/JPG images and compressed audio.

## License

See [`LICENSE`](LICENSE).
