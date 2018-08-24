<template>
<div class="activity-apply">
  <div class="banner bg-f">
    <div class="imgs">
      <img width="100%" height="100%" src="../../assets/images/activityapply/banner.png" alt="">
    </div>
    <div class="infor">
      <p><strong class="title elips">2017第三届吉的堡星光大道美语演讲比赛</strong></p>
      <Hot/>
      <p class="time"><span>报名时间</span><span>2016年11月01日 —11月30日</span></p>
    </div>
  </div>
  <form action="" @submit.prevent>
    <div class="apply-content">
      <div class="a-c-row mt20 bg-f">
        <p class="title"><em>学生信息</em></p>
        <div class="row mt20 br1px brb1px">
          <span class="tit">学生姓名</span>
          <div class="ipt">
            <input class="h75 tr" type="text" disabled v-model="name">
          </div>
        </div>
        <div class="row">
          <span class="tit spacing"><em>性</em><em>别</em></span>
          <div class="ipt">
            <input class="h75 tr" type="text" disabled v-model="sex">
          </div>
        </div>
      </div>

      <div class="a-c-row mt20 bg-f">
        <p class="title"><em>报考信息</em></p>
        <div class="r-box br1px brb1px">
          <div class="row mt20">
            <span class="tit">选择校点</span>
            <div class="ipt sel-ipt">
              <select name="" class="h75">
                <option value="">上海圆桌巨峰路校</option>
                <option value="">上海圆桌巨峰路校</option>
                <option value="">上海圆桌巨峰路校</option>
              </select>
            </div>
          </div>
          <div class="row">
            <span class="tit">报名场次</span>
            <div class="ipt sel-ipt">
              <select name="" class="h75">
                <option value="">幼儿初级口语（适用于K1-2）</option>
                <option value="">幼儿初级口语（适用于K1-2）</option>
                <option value="">幼儿初级口语（适用于K1-2）</option>
              </select>
            </div>
          </div>
        </div>
        <div class="r-box br1px brb1px">
          <div class="row mt20">
            <span class="tit spacing"><em>数</em><em>量</em></span>
            <div class="ipt">
              <Counter :counter="counter" @getCounter="getChildCounter"/>
            </div>
          </div>
          <div class="row muti-row">
            <span class="tit">多选样式</span>
            <div class="ipt">
              <p class="chk-item">
                <span class="chk-box"><input id="test1" type="checkbox" name="chk"><em class="chk-bg"></em></span>
                <label class="txt" for="test1">幼儿初级口语（适用于K1-2）</label>
              </p>
              <p class="chk-item">
                <span class="chk-box"><input id="test2" type="checkbox" name="chk"><em class="chk-bg"></em></span>
                <label class="txt" for="test2">幼儿进阶口语（适用于K3）</label>
              </p>
              <p class="chk-item">
                <span class="chk-box"><input id="test3" type="checkbox" name="chk"><em class="chk-bg"></em></span>
                <label class="txt" for="test3">少儿初级口语（适用于J1）</label>
              </p>
              <p class="chk-item">
                <span class="chk-box"><input id="test4" type="checkbox" name="chk"><em class="chk-bg"></em></span>
                <label class="txt" for="test4">少儿精修口语</label>
              </p>
            </div>
          </div>
        </div>
        <div class="r-box">
          <div class="row mt20">
            <span class="tit">单行输入</span>
            <div class="ipt">
              <input type="text" class="h75">
            </div>
          </div>
          <div class="row muti-row">
            <span class="tit">多行输入</span>
            <div class="ipt">
              <textarea name=""></textarea>
            </div>
          </div>
        </div>
      </div>
      <BottomPay :paySummary="paySummary" payTxt="确认报名" />
    </div>
  </form>
</div>
</template>
<script>
import Hot from '@/components/Hot/index'
import Counter from '@/components/Counter/index'
import BottomPay from '@/components/BFixedPay/index'

export default {
  name: 'activi-apply',
  data () {
    return {
      counter: 1,
      paySummary: 0,
      name: 'test',
      sex: '男'
    }
  },
  methods: {
    getChildCounter (t) {
      this.counter = t
      console.log(this.counter)
    }
  },
  components: {
    Hot,
    Counter,
    BottomPay
  }
}
</script>
<style lang="less" scoped>
@import url('./index.less');
</style>
