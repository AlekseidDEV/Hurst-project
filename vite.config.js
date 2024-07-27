import {defineConfig} from 'vite'
import vue from '@vitejs/plugin-vue'
import { fileURLToPath, URL } from "url";


export default defineConfig({
  build: {
    minify: 'esbuild',
    cssMinify: 'esbuild'
  },
  plugins: [
      vue()
  ],
  resolve: {
    alias: [
      {find: '@', replacement: fileURLToPath(new URL('./src', import.meta.url))},
      {find: '@assets', replacement: fileURLToPath(new URL('./src/assets', import.meta.url))},
    ],
  }
})



