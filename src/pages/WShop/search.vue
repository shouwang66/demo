<template>
  <div class="searchof">
    <form class="search" @submit.prevent="handleSubmit">
      <input type="text"
        v-model="searchtext"
        placeholder="请输入商品代码" />
      <a class="cleartxt" @click.prevent="handleClear"></a>
      <button type="submit"></button>
    </form>
    <h6>热搜</h6>
    <p>
      <span class="active">数学</span>
    </p>
    <h6>最近搜索<a class="clearhis" @click.prevent="handleClearHis"></a></h6>
    <p>
      <span>游学</span>
    </p>
  </div>
</template>

<script>
export default {
  name: 'search',
  data () {
    return {
      searchtext: ''
    }
  },
  methods: {
    handleSubmit () {
      this.$router.push('/searchres')
    },
    handleClear () {
      this.searchtext = ''
    },
    handleClearHis () {}
  }
}
</script>

<style lang="less" scoped>
.searchof {
  min-height: 100vh;
  background: #fff;
  padding: 0 30px;
  padding-top: 1px;
}
.search {
  position: relative;
  margin-top: 34px;
  margin-bottom: 10px;
  height: 70px;
  background: url('../../assets/images/search-bg.png') no-repeat;
  background-size: 100% 100%;
  font-size: 32px;
  padding-left: 64px;
  button {
    position: absolute;
    width: 60px;
    height: 70px;
    left: 0;
    top: 0;
    background: none;
  }
  input {
    line-height: 70px;
    color: #888;
    font-size: 32px;
    background: none;
    width: 540px;
  }
  .cleartxt {
    width: 32px;
    height: 32px;
    position: absolute;
    right: 20px;
    top: 19px;
    background: url('../../assets/images/search-clear.png') no-repeat;
    background-size: 100% 100%;
  }
}
h6 {
  line-height: 80px;
  font-size: 36px;
  font-weight: bold;
  position: relative;
  .clearhis {
    position: absolute;
    width: 32px;
    height: 37px;
    background: url('../../assets/images/del-syb.png') no-repeat;
    background-size: 100%;
    right: 30px;
    top: 27px;
  }
}
p {
  margin-right: -15px;
  margin-bottom: 20px;
}
span {
  margin-right: 15px;
  display: inline-block;
  line-height: 60px;
  border-radius: 30px;
  padding: 0 24px;
  background: #f0f0f0;
  color: #666;
  font-size: 30px;
  &.active {
    color: #ff7031;
    background: #ffd4c1;
  }
}
</style>
