import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  server:{
    proxy:{
        '/api':{
            target: process.env.VITE_API_URL,
            ws: true,
            changeOrigin: true,
            rewrite: (path) => path.replace(/^\/api/, '')
        }
    }
  },
  define:{
    'process.env':process.env
  }
})
