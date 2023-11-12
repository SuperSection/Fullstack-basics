import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  // setting up proxy to connect the particular route of frontend to the backend
  server: {
    proxy: {
      '/api': 'http://localhost:3000'
    },
  },
  plugins: [react()],
})
