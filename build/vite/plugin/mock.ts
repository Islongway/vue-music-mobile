/*
 * @Description: 模拟接口
 * @Autor: islongwayzzm
 * @Date: 2021-07-01 16:59:17
 * @LastEditors: islongwayzzm
 * @LastEditTime: 2021-07-01 17:08:32
 */
import { viteMockServe } from 'vite-plugin-mock';

export function configMockPlugin(isBuild: boolean) {
  return viteMockServe({
    ignore: /^\_/,
    mockPath: 'mock',
    localEnabled: !isBuild,
    prodEnabled: isBuild,
    injectCode: `
      import { setupProdMockServer } from '../mock/_createProductionServer';

      setupProdMockServer();
      `,
  });
}
