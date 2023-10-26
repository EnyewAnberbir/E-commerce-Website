import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig({
  server:{
    proxy:{
      // "/api/auth/signup" : "https://localhost:3000",
      "/api" :{
        target: "http://localhost:3000",
        secure: false,
        changeOrigin: true,
      }
    }},
  plugins: [react()],
});
