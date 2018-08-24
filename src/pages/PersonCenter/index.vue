<template>
  <div class="person-center">
    <form action="">
        <div class="parent-info">
          <div class="upload-box">
            <input type="file" class="upload-ipt" />
            <img src="../../assets/images/personCenter/person.png" width="100%" height="100%" alt="">
            <span class="c-mask"><em class="creame-icon"></em></span>
          </div>
          <p>爸爸</p>
      </div>
    </form>
    <div class="core-entry">
      <ul>
        <router-link :to="{path: '/changePhone'}" tag="li">
          <span>注册手机</span>
          <span class="phone">18696797553<em></em></span>
        </router-link>
        <router-link :to="{path: '/'}" tag="li">
          <span>职业</span>
          <span>未添加职业信息<em></em></span>
        </router-link>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'person-center'

}
</script>

<style lang="less">
@import url('./index.less');
</style>
