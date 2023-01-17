import { defineNuxtConfig } from 'nuxt'

import { fileURLToPath, URL } from 'url'

import type { Plugin } from 'vue'

import { NodeGlobalsPolyfillPlugin } from '@esbuild-plugins/node-globals-polyfill'
import nodePolyfills from 'rollup-plugin-node-polyfills'
export default defineNuxtConfig({
  server: {
    port: 3000
  },
  ssr: false,
  css: ['~/assets/css/style.scss'],
  build: {
    postcss: {
      postcssOptions: {
        plugins: {
          tailwindcss: {},
          autoprefixer: {},
        },
      },
    },
  },

  vite: {
    optimizeDeps: {
      esbuildOptions: {
        // Fix global is not defined error
        define: {
          global: 'globalThis',
        },
        plugins: [
          // Without this, npm run dev will output Buffer or process is not defined error
          NodeGlobalsPolyfillPlugin({
            buffer: true,
          }),
        ],
      },
    },
    build: {
      rollupOptions: {
        plugins: [nodePolyfills() as Plugin],
      },
      commonjsOptions: {
        transformMixedEsModules: true,
      },
    },
    // Lomonoshka vite config for vue3
    // plugins: [vue()],
    define: {
      'process.env': {},
    },
    resolve: {
      alias: {
        '@': fileURLToPath(new URL('./src', import.meta.url)),
        '@contracts': fileURLToPath(new URL('./contracts/', import.meta.url)),
      },
    },
  },
  buildModules: [['@pinia/nuxt', { disableVuex: true }]],
})
