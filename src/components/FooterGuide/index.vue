<template>
  <div class="footer_guide">
   <span class="guide_item" :class="{on: '/msite'===$route.path}" @click="goto('/msite')">
     <span class="item_icon" >
       <i class="iconfont icon-tableware"></i>
     </span>
     <span>外卖</span>
   </span>
   <span class="guide_item" :class="{on: '/search'===$route.path}" @click="goto('/search')">
     <span class="item_icon" >
       <i class="iconfont icon-sousuo" ></i>
     </span>
     <span>搜索</span>
   </span>
   <span class="guide_item" :class="{on: '/order'===$route.path}" @click="goto('/order')">
     <span class="item_icon">
       <i class="iconfont icon-dingdan" ></i>
     </span>
     <span>订单</span>
   </span>
   <span class="guide_item" :class="{on: '/profile'===$route.path}" @click="goto('/profile')">
     <span class="item_icon" >
       <i class="iconfont icon-shouye"></i>
     </span>
     <span>我的</span>
   </span>
  </div>
</template>

<script>
export default {
  methods:{
    goto(path){
      this.$router.replace(path)
    }
  }
}
</script>


<style scoped>

 .footer_guide{
   border-top: 1px solid rgba(0, 0, 0, 0.2);
   position: fixed;
   z-index: 100;
   left: 0;
   right: 0;
   bottom: 0;
   background-color: #fff;
   width: 100%;
   height: 50px;
   display: flex;
 }
  
 .guide_item{
    display: flex;
   flex: 1;
   flex-direction: column;
   text-align: center;
   align-items: center;
   margin: 5px;
   color: #999999;
 }
  
  .on{
    color: #76c3ec;
  }
  span{
    font-size: 12px;
    margin-top: 2px;
    margin-bottom: 2px;
  }
  .iconfont{
    font-size: 22px
  }
</style>

