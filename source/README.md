# MRX Nexus Loading Screen v1.1.0
Original premium FiveM loading screen by **MRX-GOAT — Build Different**.

This resource was designed as an original MRX product. The reference loading screen supplied during development was used only to understand the requested feature categories. Its page code and layout were not copied into this resource.

## Install
1. Rename the folder to `mrx-nexus-loadscreen`.
2. Put it in your FiveM resources folder.
3. Add `ensure mrx-nexus-loadscreen` to `server.cfg`.
4. Disable every other loading-screen resource.

## The only folder customers need to edit

```text
web/assets/
```

Start with:

```text
web/assets/README_EDIT_HERE.txt
```

All editable configuration is separated inside:

```text
web/assets/settings/config.js
web/assets/settings/rules.js
web/assets/settings/team.js
web/assets/settings/gallery.js
web/assets/settings/events.js
```

Customers should not need to touch `index.html`, `style.css`, or `script.js`.

## Music behavior
- Maximum 3 tracks.
- One track repeats automatically.
- Two or three tracks continue in order and return to track one.
- Optional shuffle mode.

## Performance
Use optimized MP4/WebM video, compressed WEBP/JPG images and compressed audio. Very large media files increase connection and loading time.
