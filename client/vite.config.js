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
        name: 'Blender',
        short_name: 'Blender',
        description: 'Blending cultures',
        theme_color: '#473D5F',
        icons: []
      },
      devOptions: {
        enabled: false
      }
    })
  ]
});
