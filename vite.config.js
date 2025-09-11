// vite.config.js

import { resolve } from 'path';
import { defineConfig } from 'vite';

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        imageTracking: resolve(__dirname, 'imageTracking.html'),
        // 在這裡加入你所有需要打包的 HTML 檔案
        planeTrackingAndroid: resolve(__dirname, 'PlaneTracking_Android.html'),
        planeTrackingIos: resolve(__dirname, 'PlaneTracking_ios.html'),
        test: resolve(__dirname, 'test.html'),
      },
    },
  },
});