<template>
  <div class="help">
    <div class="help-info">
      <ul>
        <li>
          <span>常见问题</span>
        </li>
        <li>
          <router-link :to="{path: '/'}" tag="a">1、如何切换孩子账户</router-link>
        </li>
        <li>
          <router-link :to="{path: '/'}" tag="a">2、如何在线购买老师给孩子安排的课程？</router-link>
        </li>
        <li>
          <router-link :to="{path: '/'}" tag="a">3、为什么我的商品订单不能退款？</router-link>
        </li>
      </ul>
    </div>
    <div class="help-assort">
      <h3>问题分类</h3>
      <div class="problem">
        <ul>
          <router-link :to="{path: '/'}" tag="li">
            <div class="item">
              <em class="icon icon-proc"></em>
              <span>下单流程</span>
            </div>
          </router-link>
          <router-link :to="{path: '/'}" tag="li">
            <div class="item">
              <em class="icon icon-mg"></em>
              <span>退款问题</span>
            </div>
          </router-link>
          <router-link :to="{path: '/'}" tag="li">
            <div class="item">
              <em class="icon icon-pw"></em>
              <span>账户密码</span>
            </div>
          </router-link>
        </ul>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'help'
}
</script>
<style lang="less" scoped>
.help{
  position:fixed;
  width:100%;
  height:100%;
  top:0;
  left:0;
  right:0;
  bottom: 0;
  background-color:#ecf0f1;
  .help-info{
    display:inline-block;
    width:750px;
    height:567px;
    vertical-align: middle;
    background:url(../../../assets/images/help/help-bg.png) no-repeat center center;
    background-size: 100% 100%;
    ul{
      li{
        margin:0 30px;
        height:130px;
        line-height:130px;
        border-bottom:1px solid #fff;
        &:last-child{
          border-bottom:none;
        }
        span{
          display:inline-block;
          font-size:32px;
          color:#fff;
          border-left: 0.066667rem solid #fff;
          padding-left: 12px;
        }
        a{
          display:block;
          height:130px;
          line-height:130px;
          font-size:28px;
          color:#fff;
        }
      }
    }
  }
  .help-assort{
    margin:0px 30px;
    h3{
      padding-left: 12px;
      margin:20px 0;
      font-size: 32px;
      font-weight: bold;
      color: #333;
      border-left: 5px solid #ff6633;
    }
    .problem{
      ul{
        display:flex;
        justify-content: space-between;
        li{
          .item{
            em{
              &.icon{
                width: 100px;
                height: 100px;
                display: flex;
                justify-content: center;
                align-items: center;
                margin: 20px 0;
                border-radius: 50%;
                &:after{
                  content: '';
                  width:50px;
                  height:50px;
                }
              }
              &.icon-proc{
                background-color:#ff7031;
                &:after{
                  background:url(../../../assets/images/help/help-quit.png) no-repeat center center;
                  background-size:50px 50px;
                }
              }
              &.icon-mg{
                background-color:#0cca85;
                &:after{
                  background:url(../../../assets/images/help/help-quit.png) no-repeat center center;
                  background-size:50px 50px;
                }
              }
              &.icon-pw{
                background-color:#febf10;
                &:after{
                  background:url(../../../assets/images/help/help-manage.png) no-repeat center center;
                  background-size:50px 50px;
                }
              }
            }
            span{
              display:inline-block;
              font-size:28px;
              color:#333;
            }
          }
        }
      }
    }
  }
}
</style>
