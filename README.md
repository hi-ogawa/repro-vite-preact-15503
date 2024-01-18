preact esm/cjs dual packaging issue

investigating
- https://github.com/vitejs/vite/issues/15503

```sh
# error
node repro-dev.js
...

TypeError: Cannot read properties of undefined (reading 'context')
    at exports.useContext (/home/hiroshi/code/tmp/repro-vite-15503/node_modules/.pnpm/preact@10.19.3/node_modules/preact/hooks/dist/hooks.js:1:2820)
    at useDevice (/home/hiroshi/code/tmp/repro-vite-15503/node_modules/.pnpm/react-responsive@9.0.2_@preact+compat@17.1.2/node_modules/react-responsive/dist/react-responsive.js:1704:52)
    at Module.useMediaQuery (/home/hiroshi/code/tmp/repro-vite-15503/node_modules/.pnpm/react-responsive@9.0.2_@preact+compat@17.1.2/node_modules/react-responsive/dist/react-responsive.js:1761:26)
    at Object.Page (/home/hiroshi/code/tmp/repro-vite-15503/repro-entry.js:11:39)
    at file:///home/hiroshi/code/tmp/repro-vite-15503/node_modules/.pnpm/preact-render-to-string@5.2.6_preact@10.19.3/node_modules/preact-render-to-string/dist/index.mjs:1:6332
    at F (file:///home/hiroshi/code/tmp/repro-vite-15503/node_modules/.pnpm/preact-render-to-string@5.2.6_preact@10.19.3/node_modules/preact-render-to-string/dist/index.mjs:1:6359)
    at F (file:///home/hiroshi/code/tmp/repro-vite-15503/node_modules/.pnpm/preact-render-to-string@5.2.6_preact@10.19.3/node_modules/preact-render-to-string/dist/index.mjs:1:6434)
    at Module.S (file:///home/hiroshi/code/tmp/repro-vite-15503/node_modules/.pnpm/preact-render-to-string@5.2.6_preact@10.19.3/node_modules/preact-render-to-string/dist/index.mjs:1:4833)
    at main (/home/hiroshi/code/tmp/repro-vite-15503/repro-entry.js:17:47)
    at eval (/home/hiroshi/code/tmp/repro-vite-15503/repro-entry.js:22:1)

# same error
npm run build
node dist/repro-entry.mjs

# ok
npm run build-cjs
node dist/repro-entry.cjs
# -> { result: '<div>true</div>' }
```
