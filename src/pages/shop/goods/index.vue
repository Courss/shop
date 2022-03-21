<template>
  <div class="way">
      <div class="nav"><img src="../img/nav.jpg" alt=""></div>
      <div class="all">
        <div class="left">
        <div class="left_c">
          <div class="left_f">
            <span>单人折扣套餐</span>
          </div>
        </div>
        <div class="left_g">
            <div class="left_r">
              <span>多人折扣套餐</span>
            </div>
          </div>
      </div>
      <div class="right">
        <div class="right_c">
          <div class="right_top"><span>单人折扣套餐</span></div>
          <div class="right_y">
            <div class="right_l">
              <img src="../img/slide1.1.jpg" alt="">
            </div>
            <div class="right_r">
              <div class="right_f"><span>热销单人餐</span></div>
              <div class="right_t"><span>本店好评第4名</span></div>
              <div class="right_e"><span>鸡腿堡+鸡肉卷+可乐+薯条</span></div>
              <div class="right_u"><span>￥19.9</span></div>
            </div>
             <div class="add">
            <img src="./img/减.png" alt="" v-if="showadd" @click="toshow">
            <span v-if="showadd">1</span>
            <img src="./img/加.png" alt="" @click="toshow">
          </div>
          </div>
           <div class="right_y">
            <div class="right_l">
              <img src="../img/slide1.2.jpg" alt="">
            </div>
            <div class="right_r">
              <div class="right_f"><span>独享四件套</span></div>
              <div class="right_t"><span>本店好评第3名</span></div>
              <div class="right_e"><span>鸡腿堡+鸡肉卷+可乐+辣翅</span></div>
              <div class="right_u"><span>￥22.9</span></div>
            </div>
             <div class="add">
            <img src="./img/减.png" alt="" v-if="showdd">
            <span v-if="showdd">1</span>
            <img src="./img/加.png" alt="">
          </div>
          </div>
           <div class="right_y">
            <div class="right_l">
              <img src="../img/slide1.3.jpg" alt="">
            </div>
            <div class="right_r">
              <div class="right_f"><span>精选四件套</span></div>
              <div class="right_t"><span>本店好评第2名</span></div>
              <div class="right_e"><span>鸡腿堡+薯条+可乐+半只烤鸡</span></div>
              <div class="right_u"><span>￥23.9</span></div>
            </div>
             <div class="add">
            <img src="./img/减.png" alt="" v-if="showdd">
            <span v-if="showdd">1</span>
            <img src="./img/加.png" alt="">
          </div>
          </div>
        </div>
      </div>
      </div>
      <div class="bottom">
        <div class="bottom_c">
          <div class="bottom_d">
            <img src="./img/add.png" alt="" v-if="!showadd">
            <img src="./img/adds.png" alt="" v-if="showadd">
            <div class="num" v-if="showadd"><span>1</span></div>
            <div class="bottom_r"><span style="font-size: 12px;font-weight: bold;">￥<span style="font-size: 18px;font-weight: bold;" v-if="!showadd">0</span><span v-if="showadd" style="font-size: 18px;font-weight: bold;">22.9</span></span><span style="font-size: 12px;color: #999999;">预估加配送费￥1</span></div>
          </div>
          <div @click="toPay" class="bottom_t" :style="{background: (this.showadd? '#e50112':'#8a8a8a')}"><span v-if="!showadd">￥15元起送</span><span v-if="showadd">去结算</span></div>
        </div>
        <div></div>
      </div>
  </div>
</template>

<script>
export default {
  data(){
    return{
      list:[1,1,1,1,1,1],
      showadd: false
    }
  },
  methods:{
    toshow(){
      this.showadd=!this.showadd
    },
    toPay(){
      this.$router.push('/payorder')
    }
  }
}
</script>

<style scoped>
@import url('./index.css');
</style>
