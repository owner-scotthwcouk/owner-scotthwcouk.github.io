import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

export default defineConfig({
  plugins: [react()],
  base: '/', // or '/your-repo-name/' if publishing at a sub-path
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './')
    }
  }
})
