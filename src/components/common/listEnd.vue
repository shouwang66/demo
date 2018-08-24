<template>
  <li class="listend">{{ message ? message : '没有更多了' }}</li>
</template>

<script>
export default {
  name: 'listEnd',
  props: ['message']
}
</script>

<style lang="less" scoped>
.listend {
  color: #a7a7a7;
  font-size: 24px;
  text-align: center;
  position: relative;
  line-height: 64px;
  margin-bottom: 30px;
  &::after, &::before {
    content: ' ';
    width: 208px;
    height: 1px; /* no */
    position: absolute;
    top: 50%;
    background: #e0e0e0;
  }
  &::after {
    right: 30px;
  }
  &::before {
    left: 30px;
  }
}
</style>
