<template>
  <div class="nav">
    <div class="placeholder"></div>
    <ul class="br1px brt1px">
      <router-link :to="{path: '/ccenter'}" tag="li">
        <em class="icon c-icon"></em>
        <span>亲子中心</span>
      </router-link>
      <router-link :to="{path: '/wshop'}" tag="li">
        <em class="icon w-icon"></em>
        <span>微商城</span>
      </router-link>
      <router-link :to="{path: '/'}" tag="li">
        <span class="i-nav"><i></i></span>
        <em class="icon"></em>
        <span>首页</span>
      </router-link>
      <router-link :to="{path: '/icenter'}" tag="li">
        <em class="icon i-icon"></em>
        <span>信息中心</span>
      </router-link>
      <router-link :to="{path: '/me'}" tag="li">
        <em class="icon m-icon"></em>
        <span>个人中心</span>
      </router-link>
    </ul>
  </div>
</template>
<script>
export default {
  name: 'bNav'
}
</script>
<style lang="less" scoped>
@import url('./index.less');
</style>
