import { defineConfig } from 'vite';
import reactRefresh from '@vitejs/plugin-react-refresh';

export default defineConfig({
  plugins: [reactRefresh()],
  build: {
    rollupOptions: {
      input: {
        main: './src/index.tsx', // Specify the entry module here
      },
    },
  },
  server: {
    port: 3000,
  },
  esbuild: {
    // Add configuration for handling JSX files
    jsxInject: `import React from 'react';`,
  },
});
