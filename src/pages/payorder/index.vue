<template>
  <div class="all">
      <navbar title="确认订单" :showarrow="true"></navbar>
      <div class="top">
        <img src="./喇叭.png" alt="">
        <span>温馨提示：请适量点餐、避免浪费</span>
      </div>
      <top></top>
      <order></order>
  </div>
</template>

<script>
import top from './top/index.vue'
import order from './order/index.vue'
export default {
  data(){
    return{

    }
  },
  components:{
    top,
    order
  }
}
</script>

<style scoped>
.all{
  width: 100%;
  height: 100%;
  background: #f2f2f2;
}
.top{
  width: 95%;
  margin: 0 auto;
  background: #fef3c6;
  font-size: 11px;
  display: flex;
  align-items: center;
  padding: 8px 0;
  border-radius: 10px;
  color: #ec9a3d;
}
.top img{
  width: 14px;
  height: 14px;
  margin-left: 10px;
  margin-top: 2px;
}
.top span{
  margin-left: 5px;
}
</style>