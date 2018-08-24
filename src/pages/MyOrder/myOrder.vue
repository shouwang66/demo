<template>
  <div class="myOrder">
    <div class="myOrder-type">
      <div class="type order-type">
        <select name="" id="">
          <option value="">订单类型</option>
        </select>
      </div>
      <div class="type type-status">
        <select name="" id="">
          <option value="">订单状态</option>
          <option value="">全部</option>
          <option value="">待付款</option>
          <option value="">已付款</option>
          <option value="">已取消</option>
        </select>
      </div>
      <div class="type type-record">
        <span>退款记录</span>
      </div>
    </div>
    <div class="order-box">
      <div class="order-info">
        <p class="title">
          <span class="order-num">订单编号:<span>1247622012</span></span><span class="pay pend-pay">待付款</span>
        </p>
        <div class="list">
          <div class="img"><img src="../../assets/images/order-img.png" alt=""></div>
          <div class="item">
            <p><span class="item-title">美国外教小学直播1对1</span><span class="money">￥8000</span></p>
            <p><span class="time">2018-09-10 <span>10:00 —  11:00</span></span><span>×1</span></p>
          </div>
        </div>
        <p class="sum">合计：<span>￥8000</span></p>
        <div class="action">
          <button type="submit" class='btn apply-invoice'>申请发票</button>
          <button type="submit" class='btn cancel-order'>取消订单</button>
          <button type="submit" class='btn payment'>付款</button>
        </div>
      </div>
      <div class="order-info">
        <p class="title">
          <span class="order-num">订单编号:<span>1247622012</span></span><span class="pay pend-pay">已付款</span>
        </p>
        <div class="list">
          <div class="img"><img src="../../assets/images/order-img.png" alt=""></div>
          <div class="item">
            <p><span class="item-title">Englishi幼儿启蒙英语名师在线授课Englishi幼儿启蒙英语名师在线授课</span><span class="money">￥3600</span></p>
            <p><span class="time">2018-09-10 <span>10:00 —  11:00</span></span><span>×1</span></p>
          </div>
        </div>
          <p class="sum">合计：<span>￥3420</span>(<span class="coupon">优惠券-￥180</span>)</p>
        <div class="action">
          <button type="submit" class='btn apply-invoice'>申请发票</button>
          <button type="submit" class='btn request-refund'>申请退款</button>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'myOrder',
  data () {
    return {}
  }
}
</script>
<style lang="less" scoped>
  .myOrder{
    position:fixed;
    width:100%;
    height:100%;
    top:0;
    left:0;
    right:0;
    bottom:0;
    background-color:#ecf0f1;
    .myOrder-type{
      display:flex;
      align-items: center;
      padding:0 30px;
      height:70px;
      line-height:70px;
      background-color:#fff;
      font-size:30px;
      color:#666666;
      .type{
        flex:1;
        border-right:1px solid #E5E5E5;/*no*/
        &:last-child{
          border-right:none;
        }
        select{
          color:#666666;
          option{
          }
        }
        span{}
        &.order-type{
          text-align:left;
        }
        &.type-status{
          text-align:center;
        }
        &.type-record{
          text-align: right;
        }
      }
    }
    .order-box{
      .order-info{
        .title{
          display:flex;
          justify-content: space-between;
          align-items: center;
          height:80px;
          line-height:80px;
          font-size:24px;
          background-color:#fff;
           padding:0 30px;
           margin-top:20px;
          .order-num{
            color:#a4a4a4;
            span{}
          }
          .pay{
            color:#ff7031;
          }
        }
        .list{
          display:flex;
          // align-items: center;
          padding:30px;
          .img{
              position: relative;
              width:200px;
              height:200px;
              overflow: hidden;
              margin-right:30px;
            img{
              width: 100%;
              min-height: 200px;
              position: absolute;
              left: 50%;
              top: 50%;
              -webkit-transform: translate(-50%,-50%);
              transform: translate(-50%,-50%);
              border-radius:12px;
            }
          }
          .item{
            flex:1;
            p{
              display:flex;
              justify-content: space-between;
              span{
                line-height: 32px;
              }
              &:first-child{
                margin-top:10px;
                span{
                  font-size:28px;
                  &.money{
                    font-size:32px;
                    color:#f77301;
                    font-weight:bold;
                  }
                  &.item-title{
                    max-height:100px;
                    flex:1;
                    overflow: hidden;
                    text-overflow:ellipsis;
                    display: -webkit-box;
                    -webkit-line-clamp: 3;
                    -webkit-box-orient: vertical;
                  }
                }
              }
              &:last-child{
                margin-top:30px;
                span{
                  font-size:24px;
                  color:#a4a4a4;
                  &.time{
                    span{
                      padding-left:10px;
                    }
                  }
                }
              }
            }
          }
        }
        .sum{
          height:70px;
          line-height:70px;
          color:#333;
          font-size:28px;
          background-color: #fff;
          text-align: right;
          padding:0 30px;
          border-bottom:1px solid #E5E5E5;/*no*/
          span{
            &.coupon{
              color:#f77301;
            }
          }
        }
        .action{
          background-color:#fff;
          height:110px;
          line-height:110px;
          text-align: right;
          padding:0 30px;
          .btn{
            height:60px;
            line-height:60px;
            padding:0 30px;
            text-align: center;
            background-color:#fff;
            border-radius:32px;
            font-size:28px;
            color:#a4a4a4;
            border:1px solid #a4a4a4;/*no*/
            &.payment{
              color:#f77301;
              border:1px solid #f77301;/*no*/
            }
          }
        }
      }
    }
  }
</style>
