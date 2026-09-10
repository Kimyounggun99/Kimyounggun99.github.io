// Hugo 0.162 cannot resolve pnpm's Windows wrapper when NODE_PATH comes first.
// Keep the real CLI entry point first; no package source is modified.
const fs = require('node:fs');
if (process.platform === 'win32') {
  fs.writeFileSync('node_modules/.bin/tailwindcss.cmd', '@node "%~dp0\\..\\@tailwindcss\\cli\\dist\\index.mjs" %*\r\n');
}
