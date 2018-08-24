<template>
  <div class="w-shop">
    <search-fake type="go" searchtxt="请输入商品代码"></search-fake>
    <goods-filter></goods-filter>
    <router-view></router-view>
    <shop-cart :count='4'></shop-cart>
    <Nav />
  </div>
</template>
<script>
import Nav from '@/components/Nav/index'
import SearchFake from '@/components/SearchFake/index'
import GoodsFilter from '@/components/GoodsFilter/index'
import shopCart from '@/components/common/shopCart'
export default {
  name: 'wshop',
  data () {
    return {}
  },
  components: {
    Nav,
    SearchFake,
    GoodsFilter,
    shopCart
  }
}
</script>
<style lang="less" scoped>
  .w-shop {
    padding-top: 1px;
    background: #ecf0f1;
    min-height: 100vh;
  }
</style>
