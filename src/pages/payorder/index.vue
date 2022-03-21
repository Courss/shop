<template>
  <div class="all">
      <navbar title="确认订单" :showarrow="true"></navbar>
      <div class="top">
        <img src="./喇叭.png" alt="">
        <span>温馨提示：请适量点餐、避免浪费</span>
      </div>
      <top></top>
      <order></order>
      <msg></msg>
      <div class="btn">
        <div class="btm">
          <span class="btv">合计:</span><span class="bts">￥</span><span class="btb">22.8</span>
          <div class="btc" @click="topay">提交订单</div>
        </div>
      </div>
  </div>
</template>

<script>
import top from './top/index.vue'
import order from './order/index.vue'
import msg from './msg/index.vue'
export default {
  data(){
    return{

    }
  },
  components:{
    top,
    order,
    msg
  },
  methods:{
    topay(){
      this.$alert('这是一段内容', '标题名称', {
          confirmButtonText: '确定',
          callback: action => {
            this.$message({
              type: 'info',
              message: `action: ${ action }`
            });
          }
        })
    }
  }
}
</script>

<style scoped>
@import url('./index.css');
</style>