<template>
<div class="mask">
  <slot></slot>
</div>
</template>
<script>
export default {
  name: 'mask-box'
}
</script>
<style lang="less" scoped>
.mask {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0,0,0,.6);
  z-index: 200;
}
</style>
