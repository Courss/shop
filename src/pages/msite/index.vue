<template>
  <div class="all">
    <div class="top">
      <div class="content">
         <div class="left" @click="goSearch"><i class="iconfont icon-sousuo"></i></div>
         <div class="medium"><span>武汉文理学院</span></div>
      <div class="right" v-if="!this.$store.state.id" @ckick="go"><span>登录|注册</span></div>
      </div>
    </div>
       <div class="miste-content-wrapper">
    <nav class="msite_nav">
      <div class="swiper-container">
        <div class="swiper-wrapper">
          <div class="swiper-slide">
            <a href="javascript:" class="link_to_food">
            <div class="food_container">
              <img src="./image/饮料.png" alt="">
            </div>
            <span>甜品饮品</span>
            </a> 
             <a href="javascript:" class="link_to_food">
            <div class="food_container">
               <img src="./image/汉堡.png" alt="">
            </div>
            <span>汉堡披萨</span>
            </a>
            <a href="javascript:" class="link_to_food">
            <div class="food_container">
               <img src="./image/面条.png" alt="">
            </div>
            <span>米粉面点</span>
            </a>
            <a href="javascript:" class="link_to_food">
            <div class="food_container">
               <img src="./image/红辣椒.png" alt="">
            </div>
            <span>川湘菜</span>
            </a>
            <a href="javascript:" class="link_to_food">
            <div class="food_container">
               <img src="./image/商店.png" alt="">
            </div>
            <span>商超便利</span>
            </a>
            <a href="javascript:" class="link_to_food">
            <div class="food_container">
              <img src="./image/准时达.png" alt="">
            </div>
            <span>准时达</span>
            </a>
            <a href="javascript:" class="link_to_food">
            <div class="food_container">
               <img src="./image/粥.png" alt="">
            </div>
            <span>早餐</span>
            </a>
            <a href="javascript:" class="link_to_food">
            <div class="food_container">
               <img src="./image/牛排.png" alt="">
            </div>
            <span>能量西餐</span>
            </a>
            </div>
            <div class="swiper-slide">
            <a href="javascript:" class="link_to_food">
            <div class="food_container">
               <img src="./image/食物烧烤.png" alt="">
            </div>
            <span>龙虾烧烤</span>
            </a>
            <a href="javascript:" class="link_to_food">
            <div class="food_container">
               <img src="./image/寿司.png" alt="">
            </div>
            <span>日料韩餐</span>
            </a>
            <a href="javascript:" class="link_to_food">
            <div class="food_container">
               <img src="./image/蔬菜区.png" alt="">
            </div>
            <span>买菜</span>
            </a>
            <a href="javascript:" class="link_to_food">
            <div class="food_container">
               <img src="./image/甜品.png" alt="">
            </div>
            <span>下午茶</span>
            </a>
            <a href="javascript:" class="link_to_food">
            <div class="food_container">
              <img src="./image/小吃.png" alt="">
            </div>
            <span>特色小吃</span>
            </a>
            <a href="javascript:" class="link_to_food">
            <div class="food_container">
               <img src="./image/医疗服务.png" alt="">
            </div>
            <span>送药上门</span>
            </a>
            <a href="javascript:" class="link_to_food">
            <div class="food_container">
               <img src="./image/炸鸡.png" alt="">
            </div>
            <span>炸鸡炸串</span>
            </a>
            <a href="javascript:" class="link_to_food">
            <div class="food_container">
               <img src="./image/柠檬.png" alt="">
            </div>
            <span>水果</span>
            </a>
          </div>
          <div class="swiper-pagination" slot="pagination"></div>
          </div>
        </div>        
    </nav>
     <div class="msite_shop_list">
       <div class="shop_header">
         <i class="iconfont icon-xuanxiang"></i>
         <span class="shop_header_title">附近商家</span>
       </div>
       <shopList/>
     </div>
  </div>
</div>
</template>
    
<script>
import shopList from './shopList/index.vue'
import Swiper from 'swiper'
import 'swiper/dist/css/swiper.min.css'
export default {
  data(){
    return{
    }
  },
  components:{
   shopList
  },
  mounted(){
  //创建一个swiper实例对象，来实现轮播
  new Swiper('.swiper-container',{
    loop: true, //可以循环轮播
    
    //如果需要分页器
    pagination:{
      el: '.swiper-pagination',
      clickable:true,
    }
  })
},
  methods:{
    goSearch(){
      this.$router.push('/search')
    },
    go(){
      console.log(111)
     this.$router.push('/login')
    },
    class(){
      this.$router.push('')
    }
  }
}
</script>

<style scoped>
 @import url('./index.css');
</style>
