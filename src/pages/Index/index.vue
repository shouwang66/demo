<template>
  <div class="page-index">
    <div class="p-i-banner">
      <!-- xs-icon-male xs-icon-female -->
      <span class="xs-tips">张晓晓<em class="xs-icon xs-icon-female"></em> <em class="xs-bg"></em></span>
      <swiper :options="swiperOption" ref="mySwiper">
        <swiper-slide>
          <img width="100%" height="100%" src="../../assets/images/index/banner.png" alt="">
        </swiper-slide>
        <swiper-slide>
          <img width="100%" height="100%" src="../../assets/images/index/banner.png" alt="">
        </swiper-slide>
        <swiper-slide>
          <img width="100%" height="100%" src="../../assets/images/index/banner.png" alt="">
        </swiper-slide>
        <div class="swiper-pagination" slot="pagination"></div>
      </swiper>
    </div>

    <div class="p-i-nav bg-f mt20">
      <ul>
        <router-link :to="{path: '/'}" tag="li">
          <div class="item">
            <em class="icon icon-gg"></em>
            <span>集团公告</span>
          </div>
        </router-link>
        <router-link :to="{path: '/'}" tag="li">
          <div class="item">
            <em class="icon icon-ccenter"></em>
            <span>亲子中心</span>
          </div>
        </router-link>
        <router-link :to="{path: '/'}" tag="li">
          <div class="item">
            <em class="icon icon-scenter"></em>
            <span>学习中心</span>
          </div>
        </router-link>
        <router-link :to="{path: '/acenter'}" tag="li">
          <div class="item">
            <em class="icon icon-bm"></em>
            <span>活动报名</span>
          </div>
        </router-link>
        <router-link :to="{path: '/'}" tag="li">
          <div class="item">
            <em class="icon icon-wshop"></em>
            <span>微商城</span>
          </div>
        </router-link>
        <router-link :to="{path: '/'}" tag="li">
          <div class="item">
            <em class="icon icon-kc"></em>
            <span>在线课程</span>
          </div>
        </router-link>
        <router-link :to="{path: '/'}" tag="li">
          <div class="item">
            <em class="icon icon-quan"></em>
            <span>优惠券</span>
          </div>
        </router-link>
        <router-link :to="{path: '/'}" tag="li">
          <div class="item">
            <em class="icon icon-course"></em>
            <span>公开课</span>
          </div>
        </router-link>
      </ul>
    </div>

    <div class="container bg-f mt20">
      <div class="title">
        <h3>活动推荐</h3><router-link :to="{path: '/'}" tag="a">查看更多</router-link>
      </div>
      <div class="hd-list">
        <ul>
          <router-link :to="{path: '/'}"  tag="li" class="hd-item">
            <img src="../../assets/images/index/hd-l-item.png" alt="">
            <strong>幼儿园团建</strong>
          </router-link>
          <router-link :to="{path: '/'}"  tag="li" class="building-tips hd-item">
            <em class="building-icon"></em>
            <span class="b-txt-tips">更多内容敬请期待</span>
            <em></em>
          </router-link>
        </ul>
      </div>
    </div>

    <div class="container bg-f mt20">
      <div class="title">
        <h3>活动推荐</h3><router-link :to="{path: '/'}" tag="a">查看更多</router-link>
      </div>
      <div class="hd-list">
        <swiper :options="swiperOptionHD" ref="mySwiper1">
          <swiper-slide class="hd-item">
            <router-link :to="{path:'/me'}">
              <img width="100%" height="100%" src="../../assets/images/index/hd-l-item.png" alt="">
              <strong>幼儿园团建1</strong>
            </router-link>
          </swiper-slide>
          <swiper-slide class="hd-item pl20">
            <router-link :to="{path:'/me'}">
              <img width="100%" height="100%" src="../../assets/images/index/hd-l-item.png" alt="">
              <strong>幼儿园团建2</strong>
            </router-link>
          </swiper-slide>
          <swiper-slide class="hd-item pl20">
            <router-link :to="{path:'/me'}">
              <img width="100%" height="100%" src="../../assets/images/index/hd-l-item.png" alt="">
              <strong>幼儿园团建3</strong>
            </router-link>
          </swiper-slide>
          <swiper-slide class="hd-item pl20">
            <router-link :to="{path:'/me'}">
              <img width="100%" height="100%" src="../../assets/images/index/hd-l-item.png" alt="">
              <strong>幼儿园团建4</strong>
            </router-link>
          </swiper-slide>
        </swiper>
      </div>
    </div>

    <div class="container bg-f mt20">
      <div class="title">
        <h3>商品推荐</h3><router-link :to="{path: '/me'}" tag="a">查看更多</router-link>
      </div>
      <div class="commodity-list">
        <ul>
          <li class="br1px brb1px">
            <router-link :to="{path: '/me'}" class="imgs" tag="div">
              <img width="100%" height="100%" src="../../assets/images/index/hd-item.png" alt="">
            </router-link>
            <div class="conts">
              <router-link :to="{path: '/me'}" tag="a">
                <h3>25天学25本经典英语绘本25天学25本经典英语绘本</h3>
                <p class="intro">英语 | 1-6年级 | 第一期</p>
              </router-link>
              <p class="buy">
                <span class="buy-infor">
                  <span class="price">
                    <em>原价：1200</em>
                    <i>￥900</i>
                  </span>
                  <span class="view">
                    <i class="icon view-icon"></i>
                    <em>3112人浏览过</em>
                  </span>
                </span>
                <router-link class="buy-btn" :to="{path: '/me'}" tag="a">立即下单</router-link>
              </p>
            </div>
          </li>
          <li>
            <router-link :to="{path: '/me'}" class="imgs" tag="div">
              <img width="100%" height="100%" src="../../assets/images/index/hd-item.png" alt="">
            </router-link>
            <div class="conts">
              <router-link :to="{path: '/me'}" tag="a">
                <h3>25天学25本经典英语绘本25天学25本经典英语绘本25天学25本经典英语绘本25天学25本经典英语绘本</h3>
                <p class="intro">英语 | 1-6年级 | 第一期</p>
              </router-link>
              <p class="buy">
                <span class="buy-infor">
                  <span class="price">
                    <em>原价：1200</em>
                    <i>￥900</i>
                  </span>
                  <span class="view">
                    <i class="icon view-icon"></i>
                    <em>3112人浏览过</em>
                  </span>
                </span>
                <router-link class="buy-btn" :to="{path: '/me'}" tag="a">立即下单</router-link>
              </p>
            </div>
          </li>
        </ul>
      </div>
    </div>

    <div class="container bg-f mt20">
      <div class="title">
        <h3>亲子中心</h3>
      </div>
      <div class="commodity-list ccenter-list">
        <ul>
          <li class="br1px brb1px">
            <router-link :to="{path: '/me'}" class="imgs" tag="div">
              <img width="100%" height="100%" src="../../assets/images/index/hd-item.png" alt="">
            </router-link>
            <div class="conts">
              <router-link :to="{path: '/me'}" tag="a">
                <h3>25天学25本经典英语绘本25天学25本经典英语绘本25天学25本经典英语绘本25天学25本经典英语绘本</h3>
              </router-link>
              <p class="notice">
                <em>家长帮幼教</em>
                <em>5分钟前</em>
              </p>
            </div>
          </li>
          <li>
            <router-link :to="{path: '/me'}" class="imgs" tag="div">
              <img width="100%" height="100%" src="../../assets/images/index/hd-item.png" alt="">
            </router-link>
            <div class="conts">
              <router-link :to="{path: '/me'}" tag="a">
                <h3>25天学25本经典英语绘本</h3>
              </router-link>
              <p class="notice">
                <em>家长帮幼教</em>
                <em>5分钟前</em>
              </p>
            </div>
          </li>
        </ul>
      </div>
    </div>
    <Nav/>
  </div>
</template>
<script>
import 'swiper/dist/css/swiper.css'
import Nav from '@/components/Nav/index'
import { swiper, swiperSlide } from 'vue-awesome-swiper'
export default {
  name: 'index',
  data () {
    return {
      swiperOption: {
        autoplay: {
          delay: 3000,
          disableOnInteraction: false
        },
        loop: true,
        touchRatio: 0.5,
        pagination: {
          el: '.swiper-pagination',
          type: 'bullets'
        }
      },
      swiperOptionHD: {
        slidesPerView: 1.5,
        freeMode: true,
        touchRatio: 1
      }
    }
  },
  components: {
    Nav,
    swiper,
    swiperSlide
  }
}
</script>
<style lang="less" scoped>
@import url('./index.less');
</style>
