import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { resolve } from 'path';
import dts from 'vite-plugin-dts';
import istanbul from 'vite-plugin-istanbul';

export default defineConfig({
  plugins: [
    react({
      jsxImportSource: '@emotion/react',
      babel: {
        plugins: ['@emotion/babel-plugin', 'istanbul'],
        presets: ['@babel/preset-typescript'],
      },
    }),
    dts({ rollupTypes: true }),
    istanbul({
      include: ['src/*'], // list of all directories/files you want to track coverage for
      exclude: ['node_modules'], // list of all directories/files you do not want to track coverage for
      extension: ['.js', '.ts', '.jsx', '.tsx'], // list of all file extensions you would like to track coverage for
      requireEnv: false, // if set to true, more config is needed
    }),
  ],
  build: {
    sourcemap: true,
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
