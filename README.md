# Scordatura Chrome Extension

Send the current tab to the Scordatura desktop app via a `scordatura://` protocol URL.

This extension is Chrome Web Store friendly. It does not ship a native host.

## Requirements
- Scordatura must register the `scordatura://` protocol handler on Windows.

## How It Works
1. Click the extension icon.
2. A helper tab titled "Sending to Scordatura" opens in the background.
3. The helper tab triggers `scordatura://<action>?url=<encoded-url>`.
4. Both the helper tab and the protocol tab auto-close after a short delay.

## Options
- `Action path` controls the protocol action used in the URL.
- Default is `scrape`, resulting in:
  `scordatura://scrape?url=<encoded-url>`

## Load Unpacked (dev)
1. Open `chrome://extensions`.
2. Enable `Developer mode`.
3. Click `Load unpacked` and select this folder:
   `C:\AntiGravity-repos\scordatura-chrome`
4. Pin the extension and click the icon.

## Files
- `manifest.json` - Extension manifest (MV3)
- `background.js` - Service worker logic
- `options.html` - Options page UI
- `options.js` - Options storage
- `sent.html` - Helper tab (titled)
- `sent.js` - Helper tab logic
- `icon-128.png` - Extension/notification icon

## Publish
Zip the folder contents and upload to the Chrome Web Store.