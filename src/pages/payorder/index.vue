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
      <div class="pop" v-if="sec">
          <div class="pop_t"><span>确认支付吗</span></div>
          <div class="pop_b">
              <div class="pop_l"><span>取消</span></div>
              <div class="pop_r" @click="pay"><span>确定</span></div>
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
      sec:false
    }
  },
  components:{
    top,
    order,
    msg
  },
  methods:{
    topay(){
       this.sec=true
    },
    pay(){
      this.sec=false
    }
  }
}
</script>

<style scoped>
@import url('./index.css');
</style>