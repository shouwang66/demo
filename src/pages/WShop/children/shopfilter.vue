<template>
  <ul class="shoplist">
    <goods-klass
      path="/detail/0"
      preprice="1200"
      price="900"
      :tags="['20课时', '适合5-7岁']"
      title="美国小学外教直播一对一"
      bref="外教直播四人班"
      watcher="120"
    />
    <goods-klass
      path="/detail/1"
      preprice="1200"
      source=""
      price="900"
      :tags="['20课时', '适合5-7岁']"
      title="美国小学外教直播一对一"
      bref="外教直播四人班"
      watcher="120"
    />
    <list-end message="更多课程敬请期待"></list-end>
  </ul>
</template>

<script>
import goodsKlass from '@/components/common/goodsKlass'
import listEnd from '@/components/common/listEnd'
export default {
  name: 'shopfilter',
  components: {
    goodsKlass,
    listEnd
  }
}
</script>

<style lang="less" scoped></style>
