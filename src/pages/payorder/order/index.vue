<template>
  <div class="nav">
      <div class="content">
          <div class="top"><span>派乐汉堡</span></div>
          <div class="msg">
              <div class="left">
                  <img src="./slide1.1.jpg" alt="">
                  <div class="left_t">
                      <div class="left_f"><span>辣味沙拉双拼炸鸡</span></div>
                      <div class="left_s"><span>甜辣味/孜然味</span></div>
                      <div class="left_o"><span>× 1</span></div>
                  </div>
                </div>
                <div class="right">
                    <span class="right_f">￥</span><span>20.8</span>
                </div>
          </div>
          <div class="first">
              <div class="first_o"><span>包装费</span></div>
              <div ><span  class="right_f">￥</span><span class="first_s">2</span></div>
          </div>
          <div class="first">
              <div class="first_o"><span>配送费</span></div>
              <div><span  class="right_f">￥</span><span class="first_s">0</span></div>
          </div>
          <div class="first">
              <div class="redbag">
                <img src="./bug.png" alt="">  
                <span>红包</span>
              </div>
              <div class="nobag"><span>无可选红包</span><i class="iconfont icon-jinrujiantou"></i></div>
          </div>
          <div class="price">
              <span>小计</span><span>￥</span><span class="price_s">22.8</span>
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

}
</script>

<style scoped>
 @import url('./index.css');
</style>