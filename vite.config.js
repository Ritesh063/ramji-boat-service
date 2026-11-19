import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  base: './',
  plugins: [react()],
  resolve: {
    preserveSymlinks: true,
  },
  server: {
    port: 3000,
    host: true,
    strictPort: false,
    open: true,
  },
  preview: {
    port: 3000,
    host: true,
    strictPort: false,
    open: true,
  }
});
