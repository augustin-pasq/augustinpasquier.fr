import { defineConfig } from "vite"
import react from "@vitejs/plugin-react"
import yaml from "@rollup/plugin-yaml"

// https://vite.dev/config/
export default defineConfig({
  build: {
    cssMinify: false
  },
  plugins: [react(), yaml()]
})
