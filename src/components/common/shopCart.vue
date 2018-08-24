<template>
  <div class="shopcart">
    <span>{{count}}</span>
  </div>
</template>

<script>
export default {
  name: 'shopCart',
  props: ['count']
}
</script>

<style lang="less" scoped>
.shopcart {
  position: fixed;
  background: url('../../assets/images/shopcart.png') no-repeat;
  background-size: 100% 100%;
  width: 123px;
  height: 123px;
  right: 10px;
  top: 60%;
  span {
    position: absolute;
    width: 36px;
    line-height: 36px;
    color: #fff;
    background: #f54c25;
    text-align: center;
    font-size: 24px;
    border-radius: 50%;
    right: 14px;
    top: 4px;
  }
}
</style>
