<template>
  <div class="all">
      <navbar title="会员" :showarrow="true"></navbar>
      <div class="order" v-if="show">
         <div class="nav">
          <div class="card">
              <div class="top">
                  <div class="first"><span>可用红包</span></div>
                  <div class="second"><span>6</span></div>
                  <div class="third"><span>续费每月得六张</span></div>
              </div>
              <div class="fouth">
                  <span>2022.04.11到期</span><span style="color:#fff" class="spec">去续费</span>
              </div>
          </div>
      </div>
      <div class="content">
          <div class="txt"><span>会员专属权益</span></div>
          <div class="coup">
              <div class="dev">
                  <img src="./img/5.jpg" style="height: 55px;">
                  <span>无门槛红包</span>
                  <span class="devc">×6张</span>
              </div>
              <div class="dev">
                  <img src="./img/6.jpg" alt="">
                  <span>兑换商家红包</span>
                  <span class="devc">立省更多</span>
              </div>
              <div class="dev">
                  <img src="./img/4.jpg" style="height: 48px;padding-top: 7px;">
                  <span>加量包</span>
                  <span class="devc">优惠买红包</span>
              </div>
              <div class="dev">
                  <img src="./img/3.jpg" style="height: 52px;width: 80px;padding-top: 4px;">
                  <span>免配红包</span>
                  <span class="devc">最高减10元</span>
              </div>
          </div>
      </div> 
      </div>
      <div class="order" v-if="!show">
        <div class="mav">
            <div class="kre">
                <span>开通超级吃货卡享六张无门槛优惠劵</span>
            </div>
        </div>
        <div class="spc">
                <div class="left">
                    <img src="./img/7.jpg" alt="">
                    <span>每月得6张无门槛红包</span>
                </div>
                <div class="right" @click="topay"><span>￥10开通</span></div>
            </div>
      </div>
      <div class="pop" v-if="sec">
          <div class="pop_t"><span>是否支付吗</span></div>
          <div class="pop_b">
              <div class="pop_l"><span>取消</span></div>
              <div class="pop_r" @click="tovip"><span>确定</span></div>
          </div>
      </div>
  </div>
</template>

<script>
export default {
    data(){
        return{
           show:false,
           sec:false
        }
    },
    methods:{
        topay(){
          this.sec=true
        },
        tovip(){
            this.show=true
            this.sec=false
        },
    }
}
</script>

<style scoped>
@import url('./index.css');
</style>
