<template>
  <div class="i-center">
    <form action="">
      <div class="banner">
        <p class="infor">吉的堡幼儿英语/嘉定校区/小班</p>
        <div class="upload-box">
          <input type="file" class="upload-ipt" />
          <img src="../../assets/images/inforcenter/mz-pic.png" width="100%" height="100%" alt="">
          <span class="c-mask"><em class="creame-icon"></em></span>
        </div>
        <!-- female-icon male-icon -->
        <p class="stu-info">张晓晓<em class="sex-icon male-icon"></em></p>
      </div>
    </form>
    <div class="p-i-nav bg-f">
      <ul>
        <li @click="jump(1)" v-bind:class="{'active':page==1}">
          <div class="item">
            <em class="icon icon-gg"></em>
            <span>校园通知</span>
          </div>
        </li>
        <li @click="jump(2)" v-bind:class="{'active':page==2}">
          <div class="item">
            <em class="icon icon-ccenter"></em>
            <span>课程提醒</span>
          </div>
        </li>
        <li @click="jump(3)" v-bind:class="{'active':page==3}">
          <div class="item">
            <em class="icon icon-scenter"></em>
            <span>订单通知</span>
          </div>
        </li>
        <li @click="jump(4)" v-bind:class="{'active':page==4}">
          <div class="item">
            <em class="icon icon-bm"></em>
            <span>任务处理</span>
          </div>
        </li>
      </ul>
    </div>
    <div class="i-c-cont mt20">
      <h4 class="title">最新动态<em class="link-icon icon1"></em><em class="link-icon icon2"></em></h4>
      <div class="row mt30">
        <span class="icon kctx-icon"></span>
        <div class="cont">
          <p>
            <span class="tit">课程提醒</span>
            <span class="time">5分钟前</span>
          </p>
          <p>您的孩子明天有语法课程，请不要迟到哦</p>
        </div>
      </div>
      <div class="row mt20">
        <span class="icon xytz-icon"></span>
        <div class="cont">
          <p>
            <span class="tit">校园通知<em class="warnning">紧急</em></span>
            <span class="time">5分钟前</span>
          </p>
          <p>因台风影响，明天暂停课程</p>
        </div>
      </div>
      <div class="row mt20">
        <span class="icon ddtz-icon"></span>
        <div class="cont">
          <p><span class="tit">订单通知</span><span class="time">5分钟前</span></p>
          <p>您的订单已下单成功，有问题请及时联系各负责老师,请保持您的手机流畅，及时和我校老师取得沟通沟通沟通</p>
        </div>
      </div>
      <div class="row mt20">
        <span class="icon rwcl-icon"></span>
        <div class="cont">
          <p><span class="tit">任务处理</span><span class="time">5分钟前</span></p>
          <p>您的孩子需完成绘画小任务，请家长监督哦</p>
        </div>
      </div>
    </div>
    <Nav />
  </div>
</template>
<script>
import Nav from '@/components/Nav/index'
export default {
  name: 'icenter',
  data () {
    return {
      page: 1
    }
  },
  components: {
    Nav
  },
  methods: {
    jump (p) {
      if (this.page !== p) {
        this.page = p
        console.log(this.page)
      }
    }
  }
}
</script>
<style lang="less" scoped>
@import url('./index.less');
</style>
