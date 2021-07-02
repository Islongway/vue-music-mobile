/*
 * @Description:
 * @Autor: islongwayzzm
 * @Date: 2021-07-02 14:18:12
 * @LastEditors: islongwayzzm
 * @LastEditTime: 2021-07-02 17:49:07
 */
import { createStore, Store } from 'vuex'
import { InjectionKey } from 'vue'
export * from './modules/user'
import type { testInterface } from './modules/test'

export interface tsStore {
  // user: userInterface,
  // test: testInterface
}

const modules = import.meta.globEager('./modules/*.ts')

const subModules = {}

Object.entries(modules).forEach(subModule => {
  const subName = subModule[0]
  const { default: subVuex } = subModule[1]
  const name = subName.substring(subName.lastIndexOf('/') + 1, subName.length - 3)
  subModules[name] = { namespaced: true, ...subVuex }
})

export const key: InjectionKey<Store<tsStore>> = Symbol()

export const store = createStore({ modules: subModules })