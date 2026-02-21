import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from "@tailwindcss/vite"

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  base: "/Portfolio/",
   optimizeDeps: {
    include: ['@react-three/fiber', 'three']},
    exclude: ['react-three-drei']
  
})
