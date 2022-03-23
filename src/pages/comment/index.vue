<template>
  <div class="all">
      <navbar title="评价" :showarrow="true"></navbar>
      <div class="content">
          <div class="med">
              <div class="txt"><span>您对商家/菜品满意吗？</span></div>
              <div class="tra"><el-rate v-model="value" show-text></el-rate></div>
              <div class="text"><textarea rows="6" cols="50" placeholder="口味赞，包装好，推荐给大家" style="vertical-align:top"></textarea></div>
          </div>
      </div>
      <div class="bottom"><span>提交</span></div>
  </div>
</template>

<script>
export default {
     data() {
      return {
        value: null
      }
    }
}
</script>

<style scoped>
.all{
    background: #f2f2f2;
    width: 100%;
    height: 100%;
}
.content{
    width: 92%;
    margin: 0 auto;
    background: #fff;
    margin-top: 15px;
    border-radius: 10px;
    padding-bottom: 20px;
}
.med{
    width: 95%;
    margin: 0 auto;
}
.txt{
    font-size: 18px;
    padding: 15px 0;
    border-bottom: 1px solid #ebebeb;
}
.tra{
    margin: 15px 0;
}
.text textarea{
    width: 100%;
    height: 100px;
    background-color: #f2f2f2;
    border-radius: 10px;
    outline: none;
    border: solid 0px;
}
.bottom{
    width: 100px;
    height: 35px;
    text-align: center;
    line-height: 35px;
    background: #76c3ec;
    color: #fff;
    border-radius: 15px;
    margin: 15px auto;
}
</style>
