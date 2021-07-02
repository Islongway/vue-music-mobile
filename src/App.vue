<!--
 * @Description: 
 * @Autor: islongwayzzm
 * @Date: 2021-06-30 14:29:35
 * @LastEditors: islongwayzzm
 * @LastEditTime: 2021-07-02 11:39:51
-->
<template>
  <img alt="Vue logo" src="./assets/logo.png" />
  <span class="test">ddd</span>
  <HelloWorld />
</template>

<script lang="ts">
import { defineComponent, onMounted } from 'vue'
import HelloWorld from '@/components/HelloWorld.vue'
import axios from 'axios'

export default defineComponent({
  name: 'App',
  components: { HelloWorld },
  setup() {
    onMounted(() => {
      axios.post('/api/account/getAccountInfo').then((res) => {
        console.log('res', res)
      })
    })
  },
})
</script>
<style lang="less" scoped>
.test {
  font-size: 44px;
  .flexCenter();
}
</style>
<style lang="less">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
