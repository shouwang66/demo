<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
import Nav from '@/components/Nav/index'
export default {
  name: 'App',
  components: {
    Nav
  },
  created () {

  }
}
</script>

<style lang="less">
@import url('assets/less/reset.less');
@import url('assets/less/common.less');
#app {
  min-height: 100vh;
}
</style>
