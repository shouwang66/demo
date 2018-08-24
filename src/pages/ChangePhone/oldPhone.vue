<template>
  <div class="oldPhone">
    <p>更换手机号后，下次登录可使用新手机号登录。需先对旧手机进行身份验证。</p>
    <form action="">
      <div class="row">
          <div class="ipt">
            <input type="number" v-model.number="phone" placeholder="18655797553" />
          </div>
        </div>
        <div class="row">
          <div class="ipt">
            <input type="number" v-model="code" placeholder="请输入验证码" />
            <button class="getCode">获取验证码</button>
          </div>
        </div>
        <div class="action">
          <!-- <button type="submit" class="submit">下一步</button> -->
          <router-link :to="{path: '/verifyPhone'}" tag="button" class="submit">下一步</router-link>
        </div>
    </form>
  </div>
</template>
<script>
export default {
  name: 'oldPhone',
  data () {
    return {
      phone: undefined,
      code: undefined,
      showMask: false,
      showAnimat: false
    }
  }
}
</script>
<style lang="less" scoped>
  .oldPhone{
    p{
      color:#666;
      font-size:28px;
      margin-top:30px;
      margin-left:30px;
      margin-right:30px;
      line-height:38px;
    }
    form{
      .row{
        margin-left:30px;
        margin-right:30px;
        .ipt{
          font-size:28px;
          height:108px;
          line-height:108px;
          display:flex;
          justify-content: space-between;
          align-items: center;
          border-bottom:1px solid #E5E5E5;/*no*/
          input{
            color:#333;
            height:100%;
            flex:1;
          }
          .getCode{
            width:198px;
            height:72px;
            line-height:72px;
            text-align:center;
            font-size:28px;
            background-color:#ff7731;
            color:#fff;
            border-radius: 45px;
            margin-right:30px;
          }
        }
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
