import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      external: ['@stripe/stripe-js'], // ✅ Tells Vite to ignore this during build
    },
  },
})
