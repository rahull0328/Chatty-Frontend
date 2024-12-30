import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  proxy: {
    '/storage': {
      target: 'https://firebasestorage.googleapis.com',
      changeOrigin: true,
      rewrite: (path) => path.replace(/^\/storage/, '')
    }
  }
})
