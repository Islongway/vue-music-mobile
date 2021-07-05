/*
 * @Description:
 * @Autor: islongwayzzm
 * @Date: 2021-06-30 14:29:35
 * @LastEditors: islongwayzzm
 * @LastEditTime: 2021-07-05 15:45:49
 */
import { createApp } from 'vue';
import App from './App.vue';
import { setupStore } from '@/store';
const app = createApp(App);

setupStore(app);
app.mount('#app');
