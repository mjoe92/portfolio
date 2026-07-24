import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { PageFragment } from "./src/router/page-fragment";

export default defineConfig({
  plugins: [react()],
  base: `/${PageFragment.BASE}/`,
  build: {
    outDir: 'build',
  },
})
