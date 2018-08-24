<template>
<p class="hot">
  <span>热度</span>
  <span class="star p1"></span>
</p>
</template>
<script>
export default {
  name: 'hot'
}
</script>
<style scoped lang="less">
.hot {
  display: flex;
  align-items: center;
  font-size: 24px;
  color: #a4a4a4;
  .star {
    width: 145px;
    height: 21px;
    margin-left: 10px;
    background-repeat: no-repeat;
    background-size: 291px 21px;
    background-image: url(../../assets/images/star.png);
    &.p5 {
      background-position: 0 0;
    }
    &.p4 {
      background-position: -29px 0;
    }
    &.p3 {
      background-position: -58px 0;
    }
    &.p2 {
      background-position: -87px 0;
    }
    &.p1 {
      background-position: -116px 0;
    }
    &.p0 {
      background-position: -145px 0;
    }
  }
}
</style>
