import { defineConfig } from 'vite';
import * as path from 'path';
import copy from 'rollup-plugin-copy';

export default defineConfig({
  build: {
    lib: {
      entry: path.resolve(__dirname, 'src/content.ts'),
      name: 'WordlePlugin',
      formats: ['iife']
    },
    emptyOutDir: false,
  },
  plugins: [
    copy({
      targets: [
        { src: './src/manifest.json', dest: 'dist/' },
        { src: './src/logos/**/*.*', dest: 'dist/logos' },
      ],
      hook: 'writeBundle'
    }),
  ],
});