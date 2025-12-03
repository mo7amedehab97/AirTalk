// @ts-check
import { defineConfig } from 'astro/config';

import react from '@astrojs/react';

// https://astro.build/config
export default defineConfig({
  site: 'https://www.airtalk.live',
  integrations: [react()],
  build: {
    inlineStylesheets: 'always',
    assets: '_assets',
  },
  compressHTML: true,
  vite: {
    build: {
      cssMinify: 'lightningcss',
      minify: 'terser',
      target: 'esnext',
      modulePreload: {
        polyfill: false
      },
      rollupOptions: {
        output: {
          manualChunks: undefined,
        }
      },
      terserOptions: {
        compress: {
          drop_console: true,
          drop_debugger: true,
          pure_funcs: ['console.log', 'console.info', 'console.debug'],
          passes: 2,
        },
        mangle: true,
        format: {
          comments: false,
        }
      }
    },
    ssr: {
      noExternal: ['@astrojs/react']
    }
  }
});