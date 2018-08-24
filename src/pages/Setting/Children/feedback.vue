<template>
  <div class="feedback">
    <form action="">
      <div class="row">
       <textarea name="" id="" placeholder="请输入遇到的问题和建议"></textarea>
      </div>
      <div class="row">
        <label>联系电话</label>
         <input type="text" placeholder="选填，以便我们能够快速联系您">
      </div>
     <div class="action">
      <button type="submit" class="btn">确认</button>
    </div>
    </form>
  </div>
</template>
<script>
export default {
  name: 'feedback'
}
</script>
<style lang="less" scoped>
.feedback{
    position:fixed;
    width:100%;
    height:100%;
    top:0;
    left:0;
    right:0;
    bottom:0;
    background-color:#ecf0f1;
  form{
    .row{
      display:flex;
      align-items: center;
      color: #333;
      background-color:#fff;
      margin-bottom:20px;
      textarea{
        width:100%;
        height:348px;
        padding-left:30px;
        padding-top:50px;
        color:#a4a4a4;
        font-size:28px;
      }
      label{
        padding-left:30px;
        font-size:28px;
      }
      input{
        flex:1;
        height:80px;
        line-height:80px;
        padding-left:30px;
        background-color:#fff;
        color:#a4a4a4;
        font-size:28px;
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
}
</style>
