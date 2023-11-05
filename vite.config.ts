import react from '@vitejs/plugin-react';
import * as path from 'path';
import { defineConfig } from 'vite';
import { injectHtml, minifyHtml } from 'vite-plugin-html';
const resolve = (p: string) => {
  return path.resolve(__dirname, p);
};
export default defineConfig({
  resolve: {
    alias: { '@': resolve('src') },
    extensions: ['.tsx', '.js', '.ts'],
  },
  optimizeDeps: {
    include: ['@emotion/styled'],
  },
  plugins: [
    react(),
    minifyHtml(),
    injectHtml({
      data: {
        title: 'React Starter Template',
        injectScript: '',
      },
    }),
  ],
});
