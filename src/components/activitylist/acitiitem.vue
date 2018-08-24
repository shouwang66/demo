<template>
  <li class="aciti-item">
    <div class="imgs">
      <img :src="litem.img" alt="">
    </div>
    <div class="conts">
      <strong class="title">
        {{ litem.title }}
      </strong>
      <div class="b-intro">
          <p class="hot">热度 <span class="star" v-bind:class="'p' + litem.status"></span></p>
          <span class="link" @click="togglePopShow">
            立即报名
          </span>
      </div>
    </div>
  </li>
</template>
<script>
export default {
  name: 'aciti-item',
  data () {
    return {
      litem: { }
    }
  },
  props: ['item', 'showPop'],
  created () {
    this.litem = this.item
    this.show = this.showPop
  },
  watch: {
    showPop (v) {
      this.show = v
    }
  },
  methods: {
    togglePopShow () {
      this.show = !this.show
      this.$emit('showPop', this.show)
    }
  }
}
</script>
<style lang="less" scoped>
.aciti-item {
  display: flex;
  margin-top: 20px;
  padding: 25px 30px;
  background-color: #fff;
  &:first-child {
    margin-top: 0;
  }
  .imgs {
    width: 200px;
    height: 200px;
    position: relative;
    img {
      position: absolute;
      left: 0;
      top: 50%;
      width: 100%;
      transform: translateY(-50%);
      border-radius: 5px;
    }
  }
  .conts {
    flex: 1;
    display: flex;
    padding: 18px 0 20px 20px;
    flex-direction: column;
    justify-content: space-between;
    strong {
      max-height: 72px;
      font-size: 32px;
      line-height: 36px;
      color: #333;
      overflow: hidden;
      text-overflow: ellipsis;
      display: -webkit-box;
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;
    }
    .b-intro {
      display: flex;
      align-items: center;
      justify-content: space-between;
    }
    .hot {
      display: flex;
      align-items: center;
      font-size: 24px;
      color: #a4a4a4;
    }
    .star {
      width: 145px;
      height: 21px;
      margin-left: 10px;
      background-repeat: no-repeat;
      background-size: 291px 21px;
      background-image: url(../../assets/images/star.png);
      &.p5 {
        background-position: 0 0;
      }
      &.p4 {
        background-position: -29px 0;
      }
      &.p3 {
        background-position: -58px 0;
      }
      &.p2 {
        background-position: -87px 0;
      }
      &.p1 {
        background-position: -116px 0;
      }
      &.p0 {
        background-position: -145px 0;
      }
    }
    .link {
      width: 150px;
      height: 50px;
      line-height: 50px;;
      text-align: center;
      color: #fff;
      font-size: 22px;
      border-radius: 25px;
      background-color: #ff7031;
    }
  }
}
</style>
