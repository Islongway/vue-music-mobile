/*
 * @Description: vite配置
 * @Autor: islongwayzzm
 * @Date: 2021-06-30 14:29:35
 * @LastEditors: islongwayzzm
 * @LastEditTime: 2021-06-30 15:38:33
 */
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path';

function pathResolve(dir) {
  return resolve(process.cwd(), '.', dir);
}

export default defineConfig({
    resolve: {
    alias: [
      {
        find: /\@\//,
        replacement: pathResolve('src') + '/',
      },
    ],
  },
  css: {
    preprocessorOptions: {
      less: {
        additionalData: '@import "./src/styles/mixin.less";'
      }
    }
  },
  plugins: [vue()]
})
