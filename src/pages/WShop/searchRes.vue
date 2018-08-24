<template>
  <div class="w-shop">
    <search-fake type="back" searchtxt="请输入商品代码"></search-fake>
    <ul>
      <goods-klass
        path="/"
        preprice="1200"
        price="900"
        :tags="['20课时', '适合5-7岁']"
        title="美国小学外教直播一对一"
        bref="外教直播四人班"
        watcher="120"
      />
      <list-end></list-end>
    </ul>
    <shop-cart :count='4'></shop-cart>
  </div>
</template>
<script>
import SearchFake from '@/components/SearchFake/index'
import shopCart from '@/components/common/shopCart'
import goodsKlass from '@/components/common/goodsKlass'
import listEnd from '@/components/common/listEnd'
export default {
  name: 'searchRes',
  components: {
    SearchFake,
    shopCart,
    goodsKlass,
    listEnd
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
