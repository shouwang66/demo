<template>
  <div class="phoneSuccesss">
    <div class="about-info">
      <em></em>
    </div>
    <p>您的手机号已更换成功！下次需要用新的手机号登录</p>
  </div>
</template>
<script>
export default {
  name: 'phoneSuccesss'
}
</script>
<style lang="less" scoped>
  .phoneSuccesss{
      .about-info{
        margin: 190px auto 0;
        text-align: center;
        em{
          display: inline-block;
          width: 243px;
          height: 243px;
          vertical-align: middle;
          background: url(../../assets/images/changePhone/sucss-phone.png) no-repeat center center;background-size: 243px 243px;
        }
      }
      p{
        font-size:28px;
        color:#333;
        text-align:center;
        margin-top:100px;
      }
  }
</style>
