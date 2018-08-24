<template>
  <div class="acenter">
    <div class="wrapper" ref="wrapper">
      <div class="content">
        <div class="banner">
          <img src="../../assets/images/activitycenter/banner.png" alt="">
        </div>
        <div class="acti-list mt30">
          <div class="title">
            <h3>商品推荐</h3><router-link :to="{path: '/me'}" tag="a">历史活动</router-link>
          </div>
          <ul>
            <AcitiItem :showPop="showPop" @showPop="getChilShowPop" v-for="(item, index) in list" v-bind:key="index" :item="item" />
          </ul>
        </div>
      </div>
    </div>
    <MaskBox v-if="showPop">
      <div class="bm-pop">
        <div class="pop-content bg-f">
          <p class="title">用户须知</p>
          <ul>
            <li><span class="tit">1</span><span class="txt">本次夏令营时间为2017 年x月x日～2017年x月x日，地点：XXXX，原价：1800元</span></li>
            <li><span class="tit">2</span><span class="txt">请准确填写学生信息，并核查无误</span></li>
            <li><span class="tit">3</span><span class="txt">自助报名后，请至学校缴纳相关费用，并准备2张小朋友的1寸照片一并上交。</span></li>
            <li><span class="tit">4</span><span class="txt">请持续关注吉的堡官方公众号的推送通知。</span></li>
          </ul>
          <router-link :to="{path: '/aapply'}" class="submit">立即报名</router-link>
          <span class="close" @click="closepop"></span>
        </div>
      </div>
    </MaskBox>
  </div>
</template>
<script>
import BScroll from 'better-scroll'
import AcitiItem from '@/components/Activitylist/acitiitem'
import MaskBox from '@/components/Mask/index'
export default {
  name: 'acenter',
  data () {
    return {
      showPop: false,
      list: [
        {
          img: 'http://www.dazhao100.com/update/1505183938l563705321.jpg',
          title: '2016国际幼2016国际幼儿口语鉴定2016国际幼儿口语鉴定2016国际幼儿口幼儿口幼儿口儿口语鉴定',
          status: 2
        }, {
          img: 'http://www.dazhao100.com/update/1505183938l563705321.jpg',
          title: '2016国际幼儿口语鉴定',
          status: 3
        }, {
          img: 'http://www.dazhao100.com/update/1505183938l563705321.jpg',
          title: '2016国际幼儿口语鉴定2016国际幼儿口语鉴定2016国际幼儿口幼儿口幼儿口',
          status: 4
        }, {
          img: 'http://www.dazhao100.com/update/1505183938l563705321.jpg',
          title: '2016国际幼儿口语鉴定',
          status: 5
        }, {
          img: 'http://www.dazhao100.com/update/1505183938l563705321.jpg',
          title: '2016国际幼儿口语鉴定',
          status: 1
        }
      ]
    }
  },
  components: {
    AcitiItem,
    MaskBox
  },
  mounted () {
    this.$nextTick(() => {
      this.scroll = new BScroll(this.$refs.wrapper, {
        scrollY: {
          type: Boolean,
          default: true
        },
        bounce: {
          top: false,
          bottom: true,
          left: false,
          right: false
        },
        click: true,
        probeType: {
          type: Number,
          default: 1
        },
        pullDownRefresh: false,
        pullUpLoad: {
          threshold: -50
        }
      })
      this.scroll.on('pullingUp', () => {
        // setTimeout(() => {
        this.list = this.list.concat(this.list)
        this.scroll.refresh()
        this.scroll.finishPullUp()
        console.log('push')
        // }, 1000)
      })
    })
  },
  methods: {
    getChilShowPop (t) {
      this.showPop = t
    },
    closepop () {
      this.showPop = false
      console.log(this.showPop, '3')
    }
  },
  watch: { }
}
</script>
<style lang="less" scoped>
@import url('./index.less');
</style>
