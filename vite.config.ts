/*
 * @Description: vite配置
 * @Autor: islongwayzzm
 * @Date: 2021-06-30 14:29:35
 * @LastEditors: islongwayzzm
 * @LastEditTime: 2021-07-02 11:39:34
 */
import { UserConfig, ConfigEnv } from 'vite'
import { createVitePlugins } from './build/vite/plugin/index';
import { loadEnv } from 'vite';
import { resolve } from 'path';
import { wrapperEnv } from './build/utils';

function pathResolve(dir: string) {
  return resolve(process.cwd(), '.', dir);
}

export default ({ command, mode }: ConfigEnv): UserConfig => {
  const root = process.cwd();
  const env = loadEnv(mode, root);
  const viteEnv = wrapperEnv(env);
  const { VITE_PORT, VITE_PUBLIC_PATH, VITE_PROXY, VITE_DROP_CONSOLE } = viteEnv;
  const isBuild = command === 'build';
  return {
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
    plugins: createVitePlugins(viteEnv, isBuild),
    server: {
      proxy: {
        '/api': {
          target: 'http://localhost:3000/basic-api',
          changeOrigin: true,
          configure: (proxy, options) => {
            // proxy 是 'http-proxy' 的实例
          }
        }
      }
    }

  }
}

