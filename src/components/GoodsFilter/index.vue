<template>
  <ul class="goodsfilter">
    <li>
      <router-link to="/wshop/klass" class="klass" :class="'klass' === this.$route.params.id? 'active': ''">
        <div class="icon"></div>
        <p>课时学费</p>
      </router-link>
    </li>
    <li>
      <router-link to="/wshop/activity" class="activity" :class="'activity' === this.$route.params.id? 'active': ''">
        <div class="icon"></div>
        <p>教学活动</p>
      </router-link>
    </li>
    <li>
      <router-link to="/wshop/book" class="book" :class="'book' === this.$route.params.id? 'active': ''">
        <div class="icon"></div>
        <p>教材中心</p>
      </router-link>
    </li>
    <li>
      <router-link to="/wshop/other" class="other" :class="'other' === this.$route.params.id? 'active': ''">
        <div class="icon"></div>
        <p>其他</p>
      </router-link>
    </li>
  </ul>
</template>

<script>
export default {
  name: 'GoodsFilter'
}
</script>

<style lang="less" scoped>
.goodsfilter {
  display: flex;
  height: 152px;
  background: #fff;
  margin-bottom: 20px;
  li {
    flex: 1;
    align-items: center;
    text-align: center;
    padding: 32px 0 22px 0;
    position: relative;
    overflow: hidden;
    &::after {
      content: '';
      position: absolute;
      height: 56px;
      width: 1px;
      background: #eee;
      top: 50px;
      right: 1px;
    }
    .icon {
      height: 53px;
      margin: 0 30px;
      margin-bottom: 6px;
      background-image: url('../../assets/images/shopfilericon.png');
      background-repeat: no-repeat;
      background-size: 632px 120px;
    }
    .klass.active .icon {
      background-position-y: bottom;
    }
    .klass .icon {
      background-position-x: 42px;
    }
    .activity .icon {
      background-position-x: (42px - 750px / 4);
    }
    .book .icon {
      background-position-x: (42px - 750px / 4 * 2 - 12px);
    }
    .other .icon {
      background-position-x: (42px - 750px / 4 * 3 - 24px);
    }
    p {
      line-height: 48px;
    }
  }
  a {
    color: #666666;
    font-size: 22px;
    &.active {
      color: #ff7031;
    }
  }
}
</style>
