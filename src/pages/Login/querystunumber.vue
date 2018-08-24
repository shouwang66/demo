<template>
  <div class="query">
    <form action="">
      <div class="q-form">
        <div class="row br1px brb1px">
          <span class="tit">选择城市</span>
          <div class="ipt">
            <select name="" id="">
              <option value="1">1</option>
              <option value="2">2</option>
            </select>
          </div>
        </div>
        <div class="row br1px brb1px">
          <span class="tit">手机号</span>
          <div class="ipt">
            <input type="text" placeholder="请输入您注册的手机号">
          </div>
        </div>
        <div class="row br1px brb1px">
          <span class="tit">验证码</span>
          <div class="ipt code-ipt">
            <input type="text" placeholder="请输入验证码">
            <button type="button" class="getCode">获取验证码</button>
          </div>
        </div>
        <div class="row">
          <!-- <button type="submit" class="sureBtn">开始查询</button> -->
          <router-link :to="{path:'/qresult'}" class="sureBtn">开始查询</router-link>
        </div>
      </div>
    </form>
  </div>
</template>
<script>
export default {
  name: 'query'
}
</script>
<style lang="less" scoped>
.query {
  padding-top: 35px;
  .q-form {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .row {
    display: flex;
    width: 600px;
    margin-top: 40px;
    align-items: center;
    &:first-child {
      margin-top: 0;
    }
    &:last-child {
      margin-top: 100px;
    }
    .tit {
      width: 180px;
      font-size: 30px;
      color: #333;
    }
    .ipt {
      flex: 1;
      display: flex;
      align-items: center;
      height: 85px;
      position: relative;
      input {
        height: 50px;
        line-height: 50px;
      }
      select {
        height: 100%;
      }
      input,select {
        flex: 1;
        font-size: 30px;
        color: #a4a4a4;
      }
    }
    .getCode {
      position: absolute;
      right: 0;
      height: 50px;
      padding: 0 20px;
      font-size: 26px;
      color: #fe7737;
      border-radius: 25px;
      border: 1px solid #fe7737;/*no*/
      background-color: #fff;
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
}
</style>
