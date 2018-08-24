<template>
  <div class="gold">
    <div class="gold-info">
      <div class="now-bold">
        <span class="now-bold-t">当前金币数</span>
        <span class="now-bold-m">1200</span>
        <span class="now-bold-b"><em>本月收入300</em></span>
      </div>
    </div>
    <div class="gold-detail">
      <p class="time-title">
        <span class="time">2018年8月</span><span class="calendar"></span>
      </p>
      <div class="time-list">
          <ul>
            <li>
              <span class="letter-icon"><em></em></span>
              <div class="pratice">
                <div class="e-title">英语字母练习</div>
                <div class="e-time">
                  <p class="time-detail"><span>2018-08-20</span><span>13:20</span></p>
                  <p class="gold-list"><span>金币</span><span class="gold-mount">+30</span></p>
                </div>
              </div>
            </li>
            <li>
              <span class="letter-icon"><em></em></span>
              <div class="pratice">
                <div class="e-title">英语字母练习</div>
                <div class="e-time">
                  <p class="time-detail"><span>2018-08-20</span><span>13:20</span></p>
                  <p class="gold-list"><span>金币</span><span class="gold-mount">+30</span></p>
                </div>
              </div>
            </li>
          </ul>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'gold'
}
</script>
<style lang="less" scoped>
  .gold{
    .gold-info{
      width:100%;
      height:364px;
      background: url(../../assets/images/Gold/gold.png) no-repeat;
      background-size: 100% 333px;
      span{
        display:block;
        margin-bottom:30px;
      }
      .now-bold{
        color:#fff;
        padding-left:100px;
        padding-top:50px;
        padding-bottom:50px;
        padding-right:140px;
        .now-bold-t{
          font-size:28px;
        }
        .now-bold-m{
          font-size:88px;
          font-weight: bold;
        }
        .now-bold-b{
          font-size:24px;
          em{
            display:inline-block;
            border:2px solid #fff;
            padding:10px 20px;
          }
        }
      }
    }
    .gold-detail{
      .time-title{
        background-color:#ecf0f1;
        height:64px;
        line-height:64px;
        display:flex;
        justify-content: space-between;
        align-items: center;
        padding:0 30px;
        .time{
          font-size:24px;
          color:#a4a4a4;
        }
        .calendar{
          width:38px;
          height:38px;
          margin-left:10px;
          background: url(../../assets/images/Gold/calendar.png) no-repeat;
          background-size: 38px 38px;
        }
      }
      .time-list{
        ul{
          li{
            height:146px;
            line-height:146px;
            margin:0 30px;
            border-bottom:1px solid #E5E5E5;/*no*/
            display:flex;
            align-items: center;
            .letter-icon{
              width:80px;
              height:80px;
              margin-right:20px;
              background-color:#fd7535;
              border-radius:50%;
              display: flex;
              align-items: center;
              justify-content: center;
              em{
                width:76px;
                height:76px;
                background: url(../../assets/images/Gold/letter.png) no-repeat;
                background-size: 76px 76px;
                border-radius:50%;
              }
            }
            .pratice{
              flex:1;
              display:flex;
              flex-direction: column;
              align-content: space-around;
              .e-title{
                font-size:28px;
                color:#333;
                font-weight:bold;
              }
              .e-time{
                display:flex;
                justify-content: space-between;
                align-items: center;
                padding-top:30px;
                font-size:24px;
                .time-detail{
                  color:#a4a4a4;
                  span{
                    margin-right:20px;
                  }
                }
                .gold-list{
                  display:flex;
                  align-items: center;
                  span{
                    color:#a4a4a4;
                  }
                  .gold-mount{
                    font-size:36px;
                    color:#faa952;
                    padding-left:20px;
                  }
                }
              }
            }
          }
        }
      }
    }
  }
</style>
