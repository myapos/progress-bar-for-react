import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { resolve } from 'path';
import dts from 'vite-plugin-dts';

export default defineConfig({
  plugins: [
    react({
      jsxImportSource: '@emotion/react',
      babel: {
        plugins: ['@emotion/babel-plugin'],
        presets: ['@babel/preset-typescript'],
      },
    }),
    dts({ rollupTypes: true }),
  ],
  build: {
    copyPublicDir: false,
    rollupOptions: {
      external: ['react', 'react/jsx-runtime', 'react-dom'],
      output: {
        globals: {
          react: 'React',
          'react-dom': 'ReactDOM',
        },
      },
    },
    lib: {
      entry: resolve(__dirname, 'src/components/ProgressBarContainer/index.ts'),
      formats: ['es'],
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
