import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig({
    root: path.resolve(__dirname, 'src/renderer'),
    plugins: [react()],
    build: {
        outDir: path.resolve(__dirname, 'dist/renderer'),
    },
    server: {
        port: 5500,
    },
});
