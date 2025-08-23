// import { defineConfig } from 'vite';
// import react from '@vitejs/plugin-react';

// export default defineConfig({
//   plugins: [
//     react({
//       babel: {
//         plugins: ['babel-plugin-styled-components']
//       }
//     })
//   ],
//   optimizeDeps: {
//     include: ['jwt-decode']
//   },
//   server: {
//     proxy: {
//       '/api': 'https://supcohort.onrender.com:8000',
//     }
//   }
// });







// vite.config.js
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [
    react({
      babel: {
        plugins: ['babel-plugin-styled-components'], 
      },
    }),
  ],

  optimizeDeps: {
    include: ['jwt-decode'],
  },

  server: {
    proxy: {
      '/api': {
        target: 'https://supcohort.onrender.com:8000',
        changeOrigin: true,
        secure: false,
      },
    },
  },

  build: {
    chunkSizeWarningLimit: 1000,

    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes('node_modules')) {
            if (id.includes('react')) return 'react-vendor';
            if (id.includes('axios')) return 'axios-vendor';
            return 'vendor';
          }
        },
      },
    },
  },
});
