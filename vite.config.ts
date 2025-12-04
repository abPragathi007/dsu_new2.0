import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: "/dsu_new2.0/",   // <-- VERY IMPORTANT
  plugins: [react()],
})
