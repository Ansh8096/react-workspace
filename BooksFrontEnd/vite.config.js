import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  server: {
    // here we fool the server thinking that the request is coming from mentioned server,
    // It is used to aboid CORS issue...
    proxy: {
      '/api':  'http://localhost:8080'   
    }
  },
  plugins: [react()],
})
