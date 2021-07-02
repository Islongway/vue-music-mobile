/*
 * @Description: 
 * @Autor: islongwayzzm
 * @Date: 2021-06-30 14:29:35
 * @LastEditors: islongwayzzm
 * @LastEditTime: 2021-07-02 17:28:16
 */
import { createApp } from 'vue'
import App from './App.vue'
import { store, key } from '@/store'


const { use, mount } = createApp(App)

use(store, key)

mount('#app')


