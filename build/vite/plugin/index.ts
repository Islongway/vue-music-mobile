import type { Plugin } from 'vite';
import vue from '@vitejs/plugin-vue';
import { configMockPlugin } from './mock';

export function createVitePlugins(viteEnv: ViteEnv, isBuild: boolean) {
    const {
    VITE_USE_IMAGEMIN,
    VITE_USE_MOCK,
    VITE_LEGACY,
    VITE_BUILD_COMPRESS,
    VITE_BUILD_COMPRESS_DELETE_ORIGIN_FILE,
  } = viteEnv;

    const vitePlugins: (Plugin | Plugin[])[] = [
    // have to
    vue(),
    // have to
  ];
    VITE_USE_MOCK && vitePlugins.push(configMockPlugin(isBuild));
      return vitePlugins;
}