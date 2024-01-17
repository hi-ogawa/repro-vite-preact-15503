import path from 'path';
import { defineConfig } from 'vite';
import preact from '@vitejs/plugin-react';
export default defineConfig({
    plugins: [
        preact()
    ],
    esbuild: {
        jsxFactory: 'h',
        jsxFragment: 'Fragment',
    },
    publicDir: 'web/min/assets',
    ssr: {
        target: 'node',
        format: 'esm',
    },
    build: {
        target: 'es2015',
        outDir: path.resolve(__dirname, 'web/min/'),
        manifest: true,
        emptyOutDir: false,
        sourcemap: true,
        chunkSizeWarningLimit: 600,
    },
    resolve: {
        alias: {
            'react-dom': path.resolve(__dirname, './node_modules/preact/compat'),
            react: path.resolve(__dirname, './node_modules/preact/compat'),
        },
    },
});
