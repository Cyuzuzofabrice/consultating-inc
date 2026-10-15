import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
// Three.js stays inside the lazily imported HeroScene chunk, so it never blocks first paint.
export default defineConfig({ plugins: [react()], build: { chunkSizeWarningLimit: 900 } });
