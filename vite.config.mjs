import { fileURLToPath, URL } from 'node:url'
import { defineConfig } from 'vite'
export default defineConfig(() => ({
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
  build: {
    rollupOptions: {
      input: {
        main: '/main.js',
        'early-investment': '/early-investment.html',
      },
    },
  },
}))
