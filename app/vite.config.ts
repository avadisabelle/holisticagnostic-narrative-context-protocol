import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: true, // Listen on all addresses (0.0.0.0) for Docker
    port: 5177,
    strictPort: true,
    watch: {
      usePolling: true, // Needed for Docker on some systems
    },
  },
  preview: {
    host: true,
    port: 5177,
    strictPort: true,
  },
})
