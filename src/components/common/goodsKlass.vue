<template>
  <router-link :to="path" class="shopgood clearfix" tag="li">
    <goods-thumb :source="source" :alter="title" class="fl"></goods-thumb>
    <div class="info fl">
      <h6 class="title elips">{{ title }}</h6>
      <p class="bref elips">{{ bref }}</p>
      <div class="tag">{{tags.join(' / ')}}</div>
      <p class="count">共有{{ watcher }}人浏览</p>
    </div>
    <div class="pricegroup">
      <div class="price">￥{{ price }}</div>
      <div class="pre">原价：￥{{ preprice }}</div>
    </div>
  </router-link>
</template>

<script>
import goodsThumb from '@/components/common/goodsThumb'
export default {
  name: 'goodsKlass',
  props: ['path', 'preprice', 'price', 'tags', 'watcher', 'source', 'title', 'bref'],
  components: {
    goodsThumb
  }
}
</script>

<style lang="less" scoped>
@title: #333;
@main: #555;
@tag: #a4a4a4;
@active: #ff7031;
.shopgood {
  background: #fff;
  padding: 30px 30px 40px 30px;
  position: relative;
  margin-bottom: 20px;
  .info {
    margin-left: 20px;
    .title {
      font-size: 32px;
      color: @title;
      margin-bottom: 20px;
      width: 510px;
    }
    .bref {
      font-size: 26px;
      color: @main;
      margin-bottom: 16px;
    }
    .tag {
      color: @tag;
      font-size: 24px;
      margin-bottom: 16px;
    }
    .count {
      color: @tag;
      font-size: 20px;
      padding-left: 40px;
      background: url('../../assets/images/eye-icon.png') no-repeat left center;
      background-size: 30px 20px;
    }
  }
  .pricegroup {
    position: absolute;
    right: 30px;
    bottom: 30px;
    text-align: right;
    .price {
      font-size: 36px;
      color: @active;
      font-weight: bold;
      margin-bottom: 8px;
    }
    .pre {
      color: @tag;
      font-size: 22px;
      text-decoration: line-through;
    }
  }
}
</style>
