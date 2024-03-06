import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@components': '/src/components',
      '@desktopComponents': '/src/components/desktop',
      '@mobileComponents': '/src/components/mobile',
      '@assets': '/src/assets',
      '@hooks': '/src/hooks',
      '@pages': '/src/pages/',
      '@desktopPages': '/src/pages/desktop',
      '@mobilePages': '/src/pages/mobile',
      '@routes': '/src/routes',
      '@services': '/src/services',
      '@enum': '/src/enum',
      '@utils': '/src/utils'
    }
  }
})
