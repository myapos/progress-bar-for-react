import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [
    react({
      jsxImportSource: '@emotion/react',
      babel: {
        plugins: ['@emotion/babel-plugin'],
        presets: ['@babel/preset-typescript'],
      },
    }),
  ],
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
