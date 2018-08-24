<template>
  <div class="searchfake"
    @click.prevent="handleRedirect">
    {{ searchtxt }}
  </div>
</template>

<script>
export default {
  name: 'searchFake',
  props: ['type', 'searchtxt'],
  methods: {
    handleRedirect () {
      if (this.type === 'go') {
        this.$router.push('/search')
      }
      if (this.type === 'back') {
        this.$router.go('-1')
      }
    }
  }
}
</script>

<style lang="less" scoped>
.searchfake {
  display: block;
  margin: 20px 30px;
  padding-left: 60px;
  height: 70px;
  line-height: 70px;
  background: url('../../assets/images/search-f-bg.png') no-repeat;
  background-size: 100% 100%;
  font-size: 32px;
  color: #888888;
}
</style>
