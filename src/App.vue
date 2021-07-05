<!--
 * @Description: 
 * @Autor: islongwayzzm
 * @Date: 2021-06-30 14:29:35
 * @LastEditors: islongwayzzm
 * @LastEditTime: 2021-07-05 16:06:55
-->
<template>
  <img
    alt="Vue logo"
    src="./assets/logo.png"
  />
  <span class="test">name:{{Id}}{{getLoading}}</span>
  <HelloWorld msg="llll" />
</template>

<script lang="ts">
import { computed, defineComponent, onMounted } from 'vue'
import HelloWorld from '@/components/HelloWorld.vue'
import axios from 'axios'
import { useTestStroe } from '@/store/modules/test'

export default defineComponent({
  name: 'App',
  components: { HelloWorld },
  setup() {
    // const { state as userInterface, getters } = useStore()
    const TestStore = useTestStroe()
    // setInterval(() => {
    //   TestStore.SETID(2222)
    //   console.log('dd', TestStore.Id)
    // }, 2000)
    return {
      Id: computed(() => TestStore.Id),
      getLoading: TestStore.getLoading,
    }
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
