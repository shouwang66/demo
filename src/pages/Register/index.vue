<template>
  <div class="login">
    <span class="l-logo"></span>
    <form action="" @submit.prevent="loginSubmit">
      <div class="row">
        <span class="icon icon-phone"></span>
        <div class="ipt br1px brb1px">
          <input type="number" v-model.number="phone" placeholder="请输入手机号" />
        </div>
      </div>
      <div class="row mt20">
        <span class="icon icon-lock"></span>
        <div class="ipt br1px brb1px">
          <input type="number" v-model="code" placeholder="请输入验证码" />
          <button class="getCode">获取验证码</button>
        </div>
      </div>
      <div class="row mt70">
        <!-- <button class="sureBtn" type="submit">下一步</button> -->
        <router-link :to="{path: '/bind'}" class="sureBtn" type="submit">下一步</router-link>
      </div>
    </form>
  </div>
</template>
<script>
export default {
  name: 'login',
  data () {
    return {
      phone: undefined,
      code: undefined
    }
  },
  methods: {
    loginSubmit () {
      console.log(this.phone)
    }
  }
}
</script>
<style scoped lang="less">
@import url('./index.less');
</style>
