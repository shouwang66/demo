<template>
    <div class="detail">
      <div class="poster">
        <img :src="source" :alt="title">
      </div>
      <div class="info">
        <h1 class="title">{{ dtitle }}</h1>
        <p class="bref">{{ bref }}</p>
        <p class="tags">{{ tags.join(' / ') }}</p>
        <p class="date">{{ date.join('至') }}</p>
      </div>
      <div class="pricegroup">
        <div class="price">￥{{ price }}</div>
        <div class="pre">原价：￥{{ preprice }}</div>
      </div>
    </div>
</template>

<script>
export default {
  name: 'detail',
  props: ['date', 'tags', 'bref', 'dtitle', 'price', 'preprice', 'source', 'title']
}
</script>

<style lang="less" scoped>

</style>
