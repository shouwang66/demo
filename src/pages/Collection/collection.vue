<template>
  <div class="collection">
    <form action="">
      <div class="my-collect">
        <h3>我的收藏</h3>
        <span class="manage" @click="toggle()"><em></em>管理</span>
      </div>
      <div class="collect-list">
        <ul>
          <li>
            <input type="checkbox" class="ipt-check" v-show='isShow'>
            <router-link :to="{path: '/'}" tag="div" class="collect-box">
              <div class="collect-icon"><img src="../../assets/images/order-img.png" alt=""></div>
              <div class="list">
                <div class="title">
                  <p>暑期心算速成</p>
                  <p><span>数学</span><span>1-6年级</span><span>第一期</span></p>
                </div>
                <div class="title">
                  <p>6月25日开课</p>
                  <p><span>75880名学生已完成学习</span></p>
                </div>
              </div>
            </router-link>
          </li>
          <li>
            <input type="checkbox" class="ipt-check" v-show='isShow'>
            <router-link :to="{path: '/'}" tag="div" class="collect-box">
              <div class="collect-icon"><img src="../../assets/images/order-img.png" alt=""></div>
              <div class="list">
                <div class="title">
                  <p>暑期心算速成</p>
                  <p><span>数学</span><span>1-6年级</span><span>第一期</span></p>
                </div>
                <div class="title">
                  <p>6月25日开课</p>
                  <p><span>75880名学生已完成学习</span></p>
                </div>
              </div>
            </router-link>
          </li>
        </ul>
      </div>
      <div class="operate" v-show='isShow'>
        <div class="all-choose">
          <input type="checkbox" class="ipt-check">
          <label>全选</label>
        </div>
        <a href="javascript:;" class="delete">删除收藏</a>
      </div>
    </form>
  </div>
</template>
<script>
export default {
  name: 'collection',
  data () {
    return {
      curId: 0,
      isShow: false
    }
  },
  methods: {
    toggle: function () {
      this.isShow = !this.isShow
    }
  }
}
</script>
<style lang="less" scoped>
  .collection{
    //复选框
    .ipt-check{
      width:40px;
      height:40px;
      border:2px solid #a4a4a4;
      border-radius:50%;
      margin-right:20px;
      &:checked{
        background-color:#ff7031;
        border:2px solid #ff7031;
        display:flex;
        align-items: center;
        justify-content: center;
        &:after{
          content: '';
          display:block;
          width:20px;
          height:20px;
          background: url(../../assets/images/check-corret.png) no-repeat;
          background-size: 20px 20px;
        }
      }
    }
    .my-collect{
      padding:0 30px;
      display:flex;
      justify-content: space-between;
      align-items: center;
      height:80px;
      line-height:80px;
      border-bottom:1px solid #E5E5E5;/*no*/
      h3{
        padding-left: 12px;
        font-size: 32px;
        font-weight: bold;
        color: #333;
        border-left: 5px solid #ff6633;
      }
      .manage{
        font-size:28px;
        color:#a4a4a4;
        display:flex;
        align-items: center;
        em{
          width:32px;
          height:32px;
          margin-right:10px;
          background: url(../../assets/images/manage.png) no-repeat;
          background-size: 32px 32px;
        }
      }
    }
    .collect-list{
      ul{
        li{
          display:flex;
          align-items: center;
          padding:20px 30px;
          border-bottom:1px solid #E5E5E5;/*no*/
          .collect-box{
            display:flex;
            align-items: center;
            flex:1;
            .collect-icon{
              width:200px;
              height:200px;
              border-radius:12px;
              background-color:#ccc;
              margin-right:20px;
              img{
                width:100%;
                height:100%;
                border-radius:12px;
              }
            }
            .list{
              .title{
                p{
                  padding:10px 0;
                  &:first-child{
                    font-size:32px;
                    color:#333;
                  }
                  &:last-child{
                    font-size:22px;
                    color:#a4a4a4;
                    span{
                      display:inline-block;
                      padding:0 10px;
                      border-right:2px solid #a4a4a4;
                      &:first-child{
                        padding-left:0;
                      }
                      &:last-child{
                        border-right:none;
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
    .operate{
      width:100%;
      height:100px;
      position:fixed;
      bottom:0;
      left:0;
      box-shadow: 2px 1px 3px 2px #D5D7DC;
      padding:0 30px;
      font-size:28px;
      color:#a4a4a4;
      display:flex;
      justify-content: space-between;
      align-items: center;
      .all-choose{
        display:flex;
        align-items: center;
      }
      .delete{
        color:#a4a4a4;
        width:170px;
        height:70px;
        line-height:70px;
        text-align: center;
        border:1px solid #a4a4a4;/*no*/
        border-radius:34px;
      }
    }
  }
</style>
