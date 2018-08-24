<template>
<div class="b-nav">
  <div class="b-n-box br1px brt1px">
    <p class="summary">
      <span class="tit">合计</span>
      <span class="money">
        <em class="icon">￥</em> {{ paySummary }}
      </span>
    </p>
    <button class="b-sure" type="submit">{{ payTxt }}</button>
  </div>
</div>
</template>
<script>
export default {
  name: 'pay',
  props: ['paySummary', 'payTxt']
}
</script>
<style lang="less" scoped>
.b-nav {
  height: 98px;
  .b-n-box {
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 98px;
    display: flex;
    background-color: #fff;
    .summary {
      flex: 3;
      display: flex;
      align-items: center;
      justify-content: center;
      .tit {
        font-size: 28px;
        color: #a4a4a4;
      }
      .money {
        display: flex;
        align-items: center;
        font-size: 32px;
        font-weight: bold;
        color: #ff7031;
        .icon {
          margin: 0 15px;
        }
      }
    }
    .b-sure {
      flex: 4;
      display: flex;
      justify-content: center;
      align-items: center;
      font-size: 32px;
      color: #fff;
      background-color: #ff7031;
    }
  }
}
@media only screen and (device-width: 375px) and (device-height: 812px) and (-webkit-device-pixel-ratio: 3) {
  .b-nav {
    height: 128px;
    .b-n-box {
      height: 128px;
      .summary,
      .b-sure {
        padding-bottom: 30px;
      }
    }
  }
}
</style>
