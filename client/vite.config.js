import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [
    react({
      babel: {
        plugins: ['babel-plugin-styled-components']
      }
    })
  ],
  optimizeDeps: {
    include: ['jwt-decode']
  },
  server: {
    proxy: {
      '/api': 'https://supcohort.onrender.com:8000',
    }
  }
});
