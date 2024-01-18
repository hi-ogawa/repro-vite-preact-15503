import { defineConfig } from 'vite';

export default defineConfig({
    build: {
        ssr: "/repro-entry.js",
    },
    optimizeDeps: {
        force: true
    },
    ssr: {
        noExternal: true,
        optimizeDeps: {
            include: ["preact", "preact-render-to-string", "react-responsive"],
            disabled: "build",
        }
    }
});
