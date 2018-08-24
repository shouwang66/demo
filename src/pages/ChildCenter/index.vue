<template>
  <div class="c-center">
    child center
    <Nav />
  </div>
</template>
<script>
import Nav from '@/components/Nav/index'
export default {
  name: 'ccenter',
  data () {
    return {}
  },
  components: {
    Nav
  }
}
</script>
<style lang="less" scoped>
@import url('./index.less');
</style>
