<template>
  <img alt="Vue logo" src="./assets/logo.png" />
  <span class="test">ddd</span>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'App',
  components: {},
});
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
