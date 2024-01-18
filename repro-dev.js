// node repro-dev.js

const vite = require("vite");

async function main() {
  const server = await vite.createServer({
    appType: 'custom',
    server: { middlewareMode: true },
  });
  await server.ssrLoadModule("/repro-entry.js")
}

main();
