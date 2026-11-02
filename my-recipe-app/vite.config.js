import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// https://vite.dev/config/
export default defineConfig({
  // GitHub Pages serves the site from /<repo-name>/; keep / for local dev.
  base: process.env.GITHUB_ACTIONS ? '/the-recipe-box/' : '/',
  plugins: [react()],
})
