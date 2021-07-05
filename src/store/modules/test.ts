/*
 * @Description:
 * @Autor: islongwayzzm
 * @Date: 2021-07-02 14:18:12
 * @LastEditors: islongwayzzm
 * @LastEditTime: 2021-07-05 16:00:20
 */
import { defineStore } from 'pinia';
import { store } from '@/store';
interface TestState {
  name: string;
  Id: number;
}

export const useTestStroe = defineStore({
  id: 'test',
  state: (): TestState => ({
    name: 'tst',
    Id: 11222,
  }),
  getters: {
    getLoading(): Boolean {
      return this.Id === 2222;
    },
  },
  actions: {
    SETID(id: number): void {
      this.Id = id;
      console.log('ddfff', this.Id, id);
    },
  },
});

export function useTestStoreOut() {
  return useTestStroe(store);
}
