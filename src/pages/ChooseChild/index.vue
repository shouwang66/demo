<template>
  <div class="choose">
    <div class="c-content">
      <p class="title">您当前绑定的孩子有：</p>
      <div class="c-list">
        <router-link :to="{path: '/me'}" tag="div" class="item">
          <div class="img">
            <img src="../../assets/images/sex-male.png" alt="">
          </div>
          <div class="name">
            <p class="cn-name">陈晓 <em class="icon male-icon"></em></p>
            <p class="en-name">Lina</p>
          </div>
        </router-link>
        <router-link :to="{path: '/me'}" tag="div" class="item">
          <div class="img">
            <img src="../../assets/images/sex-female.png" alt="">
          </div>
          <div class="name">
            <p class="cn-name">陈晓 <em class="icon female-icon"></em></p>
            <p class="en-name">Lina</p>
          </div>
        </router-link>
        <router-link :to="{path: '/me'}" tag="div" class="item">
          <div class="img">
            <img src="../../assets/images/sex-female.png" alt="">
          </div>
          <div class="name">
            <p class="cn-name">陈晓 <em class="icon female-icon"></em></p>
            <p class="en-name">Lina</p>
          </div>
        </router-link>
        <router-link :to="{path: '/me'}" tag="div" class="item">
          <div class="img">
            <img src="../../assets/images/sex-female.png" alt="">
          </div>
          <div class="name">
            <p class="cn-name">陈晓 <em class="icon female-icon"></em></p>
            <p class="en-name">Lina</p>
          </div>
        </router-link>
        <router-link :to="{path: '/me'}" tag="div" class="item">
          <div class="img">
            <img src="../../assets/images/sex-female.png" alt="">
          </div>
          <div class="name">
            <p class="cn-name">陈晓 <em class="icon female-icon"></em></p>
            <p class="en-name">Lina</p>
          </div>
        </router-link>
      </div>
      <router-link :to="{ path: '/bind'}" tag="span" class="link-bind"></router-link>
      <p class="add-tips">继续添加宝宝</p>
    </div>
  </div>
</template>
<script>
export default {
  name: 'choose'
}
</script>
<style lang="less" scoped>
@import url('./index.less');
</style>
