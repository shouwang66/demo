<template>
  <div class="interest">
    <form action="">
      <div class="interest-box">
        <h3>学习</h3>
        <div class="interest-info" >
          <span class="sort" v-for='(study,index) in studys' :key="index"><input type="checkbox" class="ipt-check" ><label>{{study.text}}</label></span>
        </div>
      </div>
      <div class="interest-box">
        <h3>生活</h3>
        <div class="interest-info">
          <span class="sort" v-for='(life,index) in lifes' :key="index"><input type="checkbox" class="ipt-check" ><label>{{life.text}}</label></span>
        </div>
      </div>
      <div class="interest-box">
        <h3>益智</h3>
        <div class="interest-info">
          <span class="sort" v-for='(benefit,index) in benefits' :key="index"><input type="checkbox" class="ipt-check" ><label>{{benefit.text}}</label></span>
          <!-- <span v-on:click="isbenefit=index" v-bind:class="{cur:isbenefit==index}" v-for='(benefit,index) in benefits' :key="index">{{benefit.text}}</span> -->
        </div>
      </div>
      <div class="action">
        <button type="submit" class="btn">确认</button>
      </div>
    </form>
  </div>
</template>
<script>
export default {
  name: 'interest',
  data () {
    return {
      studys: [
        { text: '学习', id: 'study' },
        { text: '数学', id: 'math' },
        { text: '语文', id: 'language' },
        { text: '奥数', id: 'olympus' },
        { text: '阅读', id: 'read' }
      ],
      lifes: [
        { text: '游学', id: 'learn' },
        { text: '旅行', id: 'tour' }
      ],
      benefits: [
        { text: '英语', id: 'english' },
        { text: '数学', id: 'math' },
        { text: '语文', id: 'language' },
        { text: '奥数', id: 'olympus' },
        { text: '阅读', id: 'read' },
        { text: '游学', id: 'learn' },
        { text: '旅行', id: 'tour' }
      ]
    }
  },
  methods: {
  }
}
</script>
<style lang="less" scoped>
.interest {
  .interest-box {
    margin: 20px 30px 0 30px;
    h3 {
      font-size: 36px;
      color: #333;
    }
    .interest-info {
      margin: 20px 0;
      .sort{
          position: relative;
          font-size: 30px;
        .ipt-check {
          position: absolute;
          left:0;
          top:0;
          width:100%;
          height:100%;
          border-radius: 32px;
          opacity: 0;
          &:checked{
            &+ label{
              background-color: #ffd4c1;
               color: #ff6633;
            }
          }
        }
        label{
          display:inline-block;
          background-color: #f0f0f0;
          color: #666;
          height: 64px;
          line-height: 64px;
          text-align: center;
          padding: 0 30px;
          border-radius: 32px;
          margin-right: 10px;
          margin-bottom: 10px;
        }
      }
    }
  }
  .action{
    text-align: center;
    padding-top:100px;
    .btn{
      width:690px;
      height:80px;
      line-height:80px;
      margin: 0 0.4rem;
      text-align: center;
      background-color:#ff7731;
      color:#fff;
      font-size:32px;
      border-radius:8px;
    }
  }
}
</style>
