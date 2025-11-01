import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Tailwind should be loaded via PostCSS (postcss.config.js / index.css),
// not as a Vite plugin. Keep only the React plugin here.
// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
})
