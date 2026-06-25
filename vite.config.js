import { defineConfig } from 'vite'
import react, { reactCompilerPreset } from '@vitejs/plugin-react'
import babel from '@rolldown/plugin-babel'

// https://vite.dev/config/
export default defineConfig({
  // GitHub Pages serves this project at /napoli-in-pizza/
  base: '/napoli-in-pizza/',
  plugins: [
    react(),
    babel({ presets: [reactCompilerPreset()] })
  ],
  server: { host: true },
})
