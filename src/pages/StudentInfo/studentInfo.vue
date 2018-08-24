<template>
  <div class="studentInfo">
    <div class="studentInfo-bg">
      <div class="stu-icon"><img src="../../assets/images/stu-info.png" alt=""></div>
      <div class="stu-info">
        <p>
          <span class="name">张晓晓</span><span class="girl-icon"><em></em></span><span class="grade">一年级</span>
        </p>
        <p>
          <span class="stu-id-box">NO:<span class="stu-id">1156 3459 9999</span></span>
          <span class="addr"><em></em>上海</span>
        </p>
      </div>
    </div>
    <div class="set-info">
      <ul>
        <router-link :to="{path: '/'}" tag="li">
          <span class="icon icon-class"><em></em>学校班级</span>
          <span class="info"><span class="subject">暂无班级</span><em></em></span>
        </router-link>
        <router-link :to="{path: '/'}" tag="li">
          <span class="icon icon-birth"><em></em>宝贝生日</span>
          <span  class="info"><span class="subject">可能会收到祝福和惊喜哦</span><em></em></span>
        </router-link>
        <router-link :to="{path: '/interest'}" tag="li">
          <span class="icon icon-point"><em></em>兴趣特长</span>
          <span  class="info">
            <span class="subject sub">
              <span>语文</span><span>英语课</span><span>数学</span><span>化学</span><span>生物</span>
            </span>
            <em></em>
          </span>
        </router-link>
      </ul>
    </div>
  </div>
</template>
<script>
export default {
  name: 'studentInfo',
  data () {
    return {
    }
  }
}
</script>
<style lang="less" scoped>
  .studentInfo{
    position:fixed;
    width:100%;
    height:100%;
    left:0;
    right:0;
    bottom:0;
    top:0;
    background-color:#ecf0f1;
    .studentInfo-bg{
      width:100%;
      height:302px;
      background:url(../../assets/images/person-bg.png) no-repeat center center;
      background-size:100% 302px;
      display:flex;
      align-items: center;
      padding:0 30px;
      .stu-icon{
        width:120px;
        height:120px;
        img{
          width:100%;
          border-radius:50%;
        }
      }
      .stu-info{
        margin-left:30px;
        color:#fff;
        flex:1;
        p:first-child{
          margin-bottom:20px;
          display:flex;
          align-items: center;
          span{
            margin-right:10px;
          }
          .name{
            font-size:36px;
          }
          .girl-icon{
            display:inline-block;
            background-color:#fff;
            border-radius:50%;
            width:30px;
            height:30px;
            line-height:30px;
            text-align: center;
            em{
              display:inline-block;
              width:18px;
              height:18px;
              background:url(../../assets/images/girl-icon.png) no-repeat center center;
              background-size:18px 18px;
            }
          }
          .grade{
            font-size:30px;
          }
        }
        p:last-child{
          font-size:28px;
          display:flex;
          justify-content: space-between;
          align-items: center;
          .stu-id-box{
            .stu-id{}
          }
          .addr{
            em{
              display:inline-block;
              width:21px;
              height:31px;
              background:url(../../assets/images/StudentInfo/map.png) no-repeat center center;
              background-size:21px 31px;
              margin-right:10px;
              vertical-align: bottom;
            }
          }
        }
      }
    }
    .set-info{
      ul{
        margin-top:20px;
        li{
          height:190px;
          line-height:190px;
          background-color:#fff;
          margin-bottom:20px;
          padding:0 30px;
          display:flex;
          justify-content: space-between;
          align-items: center;
          .icon{
            display:flex;
            align-items: center;
            font-size:32px;
            color:#333;
              em{
                margin-right:30px;
              }
            &.icon-class{
              em{
                width:76px;
                height:70px;
                background:url(../../assets/images/StudentInfo/class.png) no-repeat center center;
                background-size:76px 70px;
              }
            }
            &.icon-birth{
              em{
                width:73px;
                height:68px;
                background:url(../../assets/images/StudentInfo/birthday.png) no-repeat center center;
                background-size:73px 68px;
              }
            }
            &.icon-point{
              em{
                width:63px;
                height:118px;
                background:url(../../assets/images/StudentInfo/point.png) no-repeat center center;
                background-size:63px 118px;
              }
            }
          }
          .info{
            font-size:26px;
            color:#666;
            display:flex;
            align-items: center;
            .subject{
              &.sub{
               width:280px;
              }
              span{
                display:inline-block;
                width:auto;
                height:40px;
                line-height:40px;
                text-align:center;
                background-color:#FFD4C1;
                padding:0 15px;
                margin-right:10px;
                margin-bottom:10px;
                border-radius:30px;
                color:#ff6633;
              }
            }
            em{
                width:17px;
                height:31px;
                background:url(../../assets/images/right-arrow.png) no-repeat center center;
                background-size:17px 31px;
                margin-left:20px;
            }
          }
        }
      }
    }
  }
</style>
