<template>
  <div class="setting">
    <div class="set-info">
      <ul>
        <router-link :to="{path: 'help'}" tag="li">
          <span>帮助中心</span>
          <span><em></em></span>
        </router-link>
        <li>
          <span>客服电话</span>
          <span class="mobie">400-2365484</span>
        </li>
        <router-link :to="{path: 'aboutus'}" tag="li">
          <span>关于我们</span>
          <span><em></em></span>
        </router-link>
        <router-link :to="{path: 'feedback'}" tag="li">
          <span>意见反馈</span>
          <span><em></em></span>
        </router-link>
      </ul>
    </div>
    <div class="action">
      <router-link :to="{path: '/'}" tag="button" class="submit">退出登录</router-link>
    </div>
  </div>
</template>
<script>
export default {
  name: 'setting'
}
</script>
<style lang="less" scoped>
.setting{
  // position: absolute;
  width: 100%;
  height: 100%;
  background-color: #fff;
  .set-info{
    ul{
      li{
          display:flex;
          justify-content: space-between;
          align-items: center;
          margin:0 30px;
          height:130px;
          line-height:130px;
          border-bottom:1px solid #E5E5E5;
        span{
          display:inline-block;
          line-height:130px;
        }
        span:first-child{
          color:#333333;
          font-size:28px;
        }
        span:last-child{
          &.mobie{
            font-weight: bold;
          }
          em{
            display:inline-block;
            width:23px;
            height:41px;
            vertical-align: middle;
            background:url(../../assets/images/setting/right-arrow.png) no-repeat;
            background-size: 100% 100%;
          }
        }
      }
    }
  }
  .action{
    text-align: center;
    padding-top:100px;
    background-color:#fff;
    .submit{
      width:690px;
      height:80px;
      line-height:80px;
      margin: 0 0.4rem;
      text-align: center;
      background-color:#ff7731;
      color:#fff;
      font-size:32px;
      border-radius:8px;
    }
  }
}
</style>
