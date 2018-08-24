<template>
<div class="bind">
  <form action="" @submit.prevent="submitBind">
    <div class="choose-box">
      <div class="row">
        <div class="sex-choose">
          <div class="item">
            <span class="img img-male"></span>
            <label for="sex-male" class="txt-male">我是男生</label>
            <span class="che-box male-che-box">
              <input type="radio" id="sex-male" name="sex" value="1" v-model="sex">
              <em></em>
            </span>
          </div>
          <div class="item">
            <span class="img img-female"></span>
            <label for="sex-female" class="txt-female">我是女生</label>
            <span class="che-box female-che-box">
              <input type="radio" id="sex-female" name="sex" value="0" v-model="sex">
              <em></em>
            </span>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="ipt">
          <input type="text" placeholder="请输入孩子学号" v-model="xh">
        </div>
      </div>
      <div class="row">
        <div class="ipt">
          <input type="text" placeholder="请输入孩子姓名" v-model="xm">
        </div>
      </div>
      <div class="row">
        <div class="ipt disableChoose">
          <input type="text" disabled v-model="sf" placeholder="选择您的家长身份">
        </div>
      </div>
      <div class="row">
        <!-- <button type="submit" class="sureBtn">完成</button> -->
        <router-link :to="{path: '/choose'}" type="submit" class="sureBtn">完成</router-link>
      </div>
    </div>
  </form>
</div>
</template>
<script>
export default {
  name: 'bind',
  data () {
    return {
      sex: '1',
      xh: '1111',
      xm: 'test',
      sf: ''
    }
  },
  methods: {
    submitBind () {
      console.log(this.sex)
    }
  }
}
</script>
<style lang="less" scoped>
.bind {
  padding-top: 50px;
  .choose-box {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .row {
    display: flex;
    width: 600px;
    margin-top: 30px;
    &:first-child {
      margin-top: 0;
    }
    &:nth-child(2) {
      margin-top: 80px;
    }
    &:last-child {
      margin-top: 54px;
    }
    .ipt {
      flex: 1;
      height: 90px;
      display: flex;
      padding: 0 30px;
      align-items: center;
      border: 1px solid #e0e0e0;/*no*/
      border-radius: 45px;
      input,inputp[disabled] {
        flex: 1;
        height: 50px;
        line-height: 50px ;
        font-size: 26px;
        color: #a4a4a4;
      }
    }
    .disableChoose {
      position: relative;
      &:after {
        content: '';
        position: absolute;
        right: 30px;
        top: 50%;
        width: 0;
        height: 0;
        transform: translateY(-35%);
        border: 10px solid transparent;
        border-top-color: #a9a9a9;
      }
    }
  }
  .sex-choose {
    flex: 1;
    display: flex;
    .item {
      // flex: 1;
      width: 50%;
      display: flex;
      flex-direction: column;
      align-items: center;
    }
    .img {
      width: 172px;
      height: 172px;
      background-repeat: no-repeat;
      background-position: center center;
      background-size: cover;
    }
    .img-male {
      background-image: url(../../assets/images/sex-male.png);
    }
    .img-female {
      background-image: url(../../assets/images/sex-female.png);
    }
    label {
      padding: 15px 0;
      font-size: 30px;
    }
    .txt-male {
      color:#318ff0;
    }
    .txt-female {
      color:#fd715f;
    }
    .che-box {
      position: relative;
      input[type=radio] {
        position: absolute;
        width: 100%;
        height: 100%;
        top: 0;
        left: 0;
        opacity: 0;
        z-index: 1;
      }
      em {
        display: block;
        width:40px;
        height: 40px;
        border-radius: 50%;
        border: 1px solid #e0e0e0;/*no*/
        background: url(../../assets/images/unsel-icon.png) center center no-repeat;
        background-size: 25px 25px;
      }
    }
    .male-che-box {
      input[type=radio] {
        &:checked + em {
          background-image:  url(../../assets/images/sel-icon-1.png);
          border-color: #318ff0;
        }
      }
    }
    .female-che-box {
      input[type=radio] {
        &:checked + em {
          background-image:  url(../../assets/images/sel-icon-2.png);
          border-color: #ff7031;
        }
      }
    }
  }
  .sureBtn {
    width: 100%;
    height: 90px;
    line-height: 90px;
    border-radius: 45px;
    text-align: center;
    font-size: 36px;
    color: #fff;
    background-color: #ff7031;
  }
}
</style>
