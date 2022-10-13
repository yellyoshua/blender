import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { VitePWA } from 'vite-plugin-pwa';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    // eslint-disable-next-line new-cap
    VitePWA({
      includeAssets: ['favicon.ico'],
      manifest: {
        name: 'Weblend',
        short_name: 'Weblend',
        start_url: '/',
        display: 'standalone',
        orientation: 'portrait',
        scope: '/',
        background_color: 'white',
        theme_color: '#473D5F',
        description: 'Blending cultures',
        icons: [
          {
            src: 'assets/icons/logo-72x72.png',
            sizes: '72x72',
            type: 'image/png'
          },
          {
            src: 'assets/icons/logo-96x96.png',
            sizes: '96x96',
            type: 'image/png'
          },
          {
            src: 'assets/icons/logo-128x128.png',
            sizes: '128x128',
            type: 'image/png'
          },
          {
            src: 'assets/icons/logo-144x144.png',
            sizes: '144x144',
            type: 'image/png'
          },
          {
            src: 'assets/icons/logo-152x152.png',
            sizes: '152x152',
            type: 'image/png'
          },
          {
            src: 'assets/icons/logo-192x192.png',
            sizes: '192x192',
            type: 'image/png'
          },
          {
            src: 'assets/icons/logo-384x384.png',
            sizes: '384x384',
            type: 'image/png'
          },
          {
            src: 'assets/icons/logo-512x512.png',
            sizes: '512x512',
            type: 'image/png'
          }
        ]
      },
      devOptions: {
        enabled: false
      },
      manifestFilename: 'manifest.json',
      filename: 'service-worker.js',
      registerType: 'autoUpdate',
      injectRegister: 'inline',
      workbox: {
        globPatterns: ['**/*.{js,css,html,ico,png,svg}'],
        cleanupOutdatedCaches: true,
        sourcemap: true
      },
      srcDir: 'public'
    })
  ]
});
