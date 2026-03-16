# Scordatura Chrome Extension

Minimal Chrome (MV3) extension that sends the current tab to Scordatura by opening:

`scordatura://scrape?url=<encoded-tab-url>`

## Requirements
- Scordatura must register the `scordatura://` protocol handler on Windows.

## Load Unpacked (dev)
1. Open Chrome and navigate to `chrome://extensions`.
2. Enable `Developer mode`.
3. Click `Load unpacked` and select this folder: `C:\AntiGravity-repos\scordatura-chrome`.
4. Pin the extension in the toolbar.
5. Click the extension icon to send the active tab to Scordatura.

## Behavior
- The extension opens a titled helper tab and triggers the `scordatura://` URL in the background.
- Both tabs auto-close after a short delay.
- If Scordatura is installed and registered as handler, it will launch and receive the URL.

## Files
- `manifest.json` - Extension manifest (MV3)
- `background.js` - Service worker that sends the URL
- `options.html` - Options page
- `options.js` - Options logic
- `sent.html` - Helper tab with a title
- `sent.js` - Helper logic that triggers the protocol URL

## Packaging
To publish to the Chrome Web Store, zip the folder contents and upload.
