import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from "path-browserify"

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  define: {
    "process.env": process.env,
    ENV_KEY: process.env.ENV_KEY,
  },
  resolve: {
    alias: {
      path: "path-browserify",
    },
  },
})
