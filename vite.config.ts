import { defineConfig } from 'vite';

export default defineConfig({
    build: {
        ssr: "/repro-entry.js",
    },
});
