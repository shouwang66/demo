<template>
  <div class="about-us">
    <div class="about-info">
      <em></em>
    </div>
    <div class="g-introduce">
      <h3>集团简介</h3>
      <p>1986年，吉的堡在台北开设了第一家少儿英语培训学校；1990年，「吉的堡」品牌成立；2001年9月在上海成立了吉的堡大陆总部，六年来，吉的堡在北京、上海、天津、广州、青岛、西安、大连等20多个大中城市成立了50余所双语幼儿园以及100余所少儿英语进修学校，现品牌在大陆覆盖达24个省、自治区及直辖市，覆盖城市已超过47个。</p>
    </div>
    <div class="contact">
      <h3>联系方式</h3>
      <p>
        地址：<span class="addr">上海市嘉定区江桥万达广场11楼</span>
      </p>
      <p>
        官方电话：<span class="phone">400-3432-43</span>
      </p>
    </div>
  </div>
</template>
<script>
export default {
  name: 'about-us'
}
</script>
<style lang="less" scoped>
.about-us {
  .about-info {
    height: 400px;
    line-height: 400px;
    margin: 0 auto;
    text-align: center;
    em {
      display: inline-block;
      width: 251px;
      height: 265px;
      vertical-align: middle;
      background: url(../../../assets/images/ab-bg.png) no-repeat;
      background-size: 100% 100%;
    }
  }
  .g-introduce {
    padding-left: 30px;
    h3 {
      padding-left: 12px;
      margin: 20px 0;
      font-size: 32px;
      font-weight: bold;
      color: #333;
      border-left: 5px solid #ff6633;
    }
    p {
      font-size: 28px;
      color: #a4a4a4;
      line-height: 38px;
    }
  }
  .contact {
    padding-left: 30px;
    h3 {
      padding-left: 12px;
      margin: 20px 0;
      font-size: 32px;
      font-weight: bold;
      color: #333;
      border-left: 5px solid #ff6633;
    }
    p {
      color: #a4a4a4;
      font-size: 28px;
      margin-bottom: 30px;
      .addr {
        color: #333;
      }
      .phone {
        color: #333;
        font-weight: bold;
      }
    }
  }
}
</style>
