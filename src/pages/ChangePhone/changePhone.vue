<template>
  <div class="changePhone">
    <div class="about-info">
      <em></em>
    </div>
    <p class="bing-phone">绑定手机号：183******12</p>
    <p class="new-phone">*更换后，下次需要用新的手机号登录</p>
    <div class="action">
      <!-- <button type="submit" class="submit">更换手机号</button> -->
      <router-link :to="{path: '/oldPhone'}" tag="a" class="submit">更换手机号</router-link>
    </div>
  </div>
</template>
<script>
export default {
  name: 'changePhone'
}
</script>
<style lang="less" scoped>
  .changePhone{
    .about-info{
      height: 400px;
      line-height: 400px;
      margin: 0 auto;
      text-align: center;
      em{
        display: inline-block;
        width: 189px;
        height: 184px;
        vertical-align: middle;
        background: url(../../assets/images/changePhone/regist-phone.png) no-repeat center center;background-size: 189px 184px;
      }
    }
    p{
      text-align:center;
      &.bing-phone{
        color:#333;
        font-size:28px;
        margin-bottom:30px;
      }
      &.new-phone{
        color:#a4a4a4;
        font-size:24px;
      }
    }
    .action{
      text-align: center;
      padding-top:100px;
      background-color:#fff;
      .submit{
        display:block;
        width:690px;
        height:80px;
        line-height:80px;
        margin: 0 0.4rem;
        text-align: center;
        background-color:#ff7731;
        color:#fff;
        font-size:32px;
        border-radius:8px;
      }
    }
  }
</style>
