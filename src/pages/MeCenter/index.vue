<template>
  <div class="aboutMe">
    <div class="per-center">
      <p class="parent">赵子涵的爸爸<router-link :to="{path: '/personcenter'}" tag="a"></router-link></p>
      <div class="tab">
        <div class="tab-change">
          <div class="tab-l">
            <a href="javascript:;" @click="curId=0" :class="{'cur':curId===0}" >
              赵子涵<em class="icon icon-boy"></em>
            </a>
            <a href="javascript:;" @click="curId=1" :class="{'cur':curId===1}">
              赵梦洁<em class="icon icon-girl"></em>
            </a>
          </div>
          <span class="tab-r add"><em></em>添加</span>
        </div>
        <div class="tab-info">
          <ul>
            <router-link class="img" :to="{path: '/studentInfo'}" tag="li"><img  src="../../assets/images/timg.png" ></router-link>
            <li>
              <p><span>24</span><span>课程</span></p>
            </li>
            <li>
              <p><span>12</span><router-link :to="{path: '/gold'}" tag="span">金币</router-link></p>
            </li>
            <li>
              <p><span>0</span><span>钻石</span></p>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div class="my-order">
      <div class="my-title">
        <h3>我的订单</h3>
        <router-link :to="{path: '/myOrder'}" tag="a">查看全部订单<em class="icon-sm"></em></router-link>
      </div>
      <div class="my-list">
        <ul>
          <li>
            <span class="icon icon-buy"><span>1</span></span>
            <span class="info">购物车</span>
          </li>
          <li>
            <span class="icon icon-pay"><span>1</span></span>
            <span class="info">待付款</span>
          </li>
          <li>
            <span class="icon icon-ship"><span>1</span></span>
            <span class="info">已付款</span>
          </li>
          <li>
            <span class="icon icon-sale"><span>1</span></span>
            <span class="info">退款、售后</span>
          </li>
        </ul>
      </div>
    </div>
    <div class="core-entry">
      <ul>
        <router-link :to="{path: '/'}" tag="li">
          <span>我的活动订单</span>
          <span><em></em></span>
        </router-link>
        <router-link :to="{path: '/'}" tag="li">
          <span>我的优惠券</span>
          <span><em></em></span>
        </router-link>
        <router-link :to="{path: '/collection'}" tag="li">
          <span>我的收藏</span>
          <span><em></em></span>
        </router-link>
        <router-link :to="{path: '/setting'}" tag="li">
          <span>设置</span>
          <span><em></em></span>
        </router-link>
      </ul>
    </div>
    <Nav />
  </div>
</template>
<script>
import Nav from '@/components/Nav/index'
export default {
  name: 'me',
  data () {
    return {
      curId: 0
    }
  },
  components: {
    Nav
  }
}
</script>
<style lang="less" scoped>
@import url("./index.less");
</style>
