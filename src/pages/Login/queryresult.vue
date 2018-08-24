<template>
  <div class="result">
    <p class="r-tips">该手机号码18512199999查询结果如下：</p>
    <div class="r-content">
      <div class="r-title">
        <span>学员编号<i>18402159999</i></span>
        <span>已绑定手机号</span>
      </div>
      <div class="r-list">
        <div class="row">
          <span class="icon phone-icon"></span>
          <div class="ipt">
            <p><i>登录手机号</i><em>18512199999</em></p>
          </div>
        </div>
        <div class="row muti-row">
          <span class="icon tel-icon"></span>
          <div class="ipt">
            <p><i>母亲电话</i><em>18512199999</em></p>
            <p><i>父亲电话</i><em>18512199999</em></p>
            <p><i>家庭电话</i><em>无</em></p>
          </div>
        </div>
        <div class="row">
          <span class="icon cclass-icon"></span>
          <div class="ipt">
            <p><i>在读班级</i><em>小班</em></p>
          </div>
        </div>
        <div class="row">
          <span class="icon rclass-icon"></span>
          <div class="ipt">
            <p><i>最近报班</i><em>无</em></p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'qresult'
}
</script>
<style lang="less" scoped>
.result {
  padding: 0 30px;
  .r-tips {
    padding: 37px 0 30px;
    font-size: 26px;
    color: #666;
  }
  .r-content {
    .r-title {
      display: flex;
      padding: 22px 10px 22px 20px;
      align-items: center;
      justify-content: space-between;
      font-size: 30px;
      color: #fff;
      background-color: #ff7031;
      border-radius: 10px 10px 0 0;
    }
    .r-list {
      padding: 26px 0 63px 20px;
      border: 1px solid #e8e8e8;/*no*/
      border-top: none;
      border-radius: 0 0 10px 10px;
      .row {
        display: flex;
        margin-top: 38px;
        align-items: center;
        &:first-child {
          margin-top: 0;
        }
        .icon {
          width: 50px;
          height: 36px;
          background-repeat: no-repeat;
          background-position: left center;
        }
        .phone-icon {
          background-image: url(../../assets/images/phone-icon.png);
          background-size: 23px 36px;
        }
        .tel-icon {
          background-image: url(../../assets/images/tel-icon.png);
          background-size: 24px 35px;
        }
        .cclass-icon {
          background-image: url(../../assets/images/cclass-icon.png);
          background-size: 32px 28px;
        }
        .rclass-icon {
          background-image: url(../../assets/images/rclass-icon.png);
          background-size: 33px 23px;
        }
        p,em {
          font-size: 26px;
        }
        p {
          display: flex;
          color: #666;
        }
        i {
          width: 150px;
        }
        em {
          margin-left: 48px;
          color: #333;
        }
        p{
          margin-top: 18px;
          &:first-child {
            margin-top: 0;
          }
        }
      }
      .muti-row {
        align-items: flex-start;
      }
    }
  }
}
</style>
