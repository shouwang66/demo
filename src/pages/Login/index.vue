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
        <button class="sureBtn" type="submit">登录</button>
      </div>
      <div class="row">
        <em class="link-ques" @click="showTips">登录遇到问题</em>
        <router-link :to="{path: '/register'}" tag="a" class="link-register">立即注册</router-link>
      </div>
    </form>

    <div class="mask" v-bind:class="{block: showMask}" @click="showTips">
      <div class="m-content" v-bind:class="{active: showAnimat}">
        <span class="close" @click.stop="showTips"></span>
        <div class="list">
          <router-link :to="{path: '/query'}" tag="span" class="l-span">查看学生编号</router-link>
          <a href="tel:1" class="l-span">拨打客服电话</a>
          <span class="l-span reset" @click.stop="showTips">取消</span>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'login',
  data () {
    return {
      phone: undefined,
      code: undefined,
      showMask: false,
      showAnimat: false
    }
  },
  methods: {
    loginSubmit () {
      console.log(this.phone)
    },
    showTips () {
      this.showMask = !this.showMask
      setTimeout(() => {
        this.showAnimat = !this.showAnimat
      }, 10)
    }
  }
}
</script>
<style scoped lang="less">
@import url('./index.less');
</style>
