<template>
  <div class="thumb">
    <img :src="source" :alt="alter">
  </div>
</template>

<script>
export default {
  name: 'goodsThumb',
  props: ['source', 'alter']
}
</script>

<style lang="less" scoped>
  .thumb {
    width: 160px;
    height: 160px;
    overflow: hidden;
    border-radius: 8px;
    img {
      width: 100%;
      position: relative;
      top: 50%;
      transform: translateY(-50%);
    }
  }
</style>
