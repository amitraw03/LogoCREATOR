import path from "path"
import react from "@vitejs/plugin-react"
import { defineConfig } from "vite"

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  
  // adding proxy config for getting imgIcons in downloaded too
  server: {
    proxy: {
      '/png': {
        target: 'https://logoexpress.tubeguruji.com',
        changeOrigin: true,
        secure: false,
        // Optionally add rewrite if needed
        // rewrite: (path) => path.replace(/^\/png/, '/png')
      }
    }
  }

})
