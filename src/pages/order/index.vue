<template>
  <div class="all">
     <navbar title="订单" :showarrow="false" :menuColor="true"></navbar>
     <div class="nav">
       <div class="content"> 
         <div class="top">
           <div class="top_left">
           <img src="./image/1.jpg">
           <span>派乐汉堡(文理学院店)</span>
           <i class="iconfont icon-jinrujiantou"></i>
           </div>
          <div class="top_right">
            <span>已送达</span>
          </div>
         </div>
         <div class="medium" @click="toDetail">
           <div class="medium_left">
             <img src="./image/slide1.1.jpg" alt="">
           </div>
           <div class="medium_right">
             <div class="price"><span>￥13.96</span></div>
             <div class="num"><span>共8件</span></div>
             </div>
         </div>
         <div class="bottom">
           <div class="comment">去评价</div>
           <div class="again">删除订单</div>
         </div>
       </div>
     </div>
     <div class="order_no_login" v-if="show">
        <img src="./image/person.png" alt="">
        <h3>登录后查看外卖订单</h3>
        <button @click="gologin">立即登录</button>
      </div>
  </div>
</template>

<script>
export default {
  data(){
    return{
        show:false,
        list:[1,1,1,1,1],
        lists:[1,1,1,1,1,1,1,1,1,1,11,1,1]
    }
  },
  methods:{
    gologin(){
      this.$router.push('login')
    },
    toDetail(){
      this.$router.push('/orderDetail')
    }
  }
}
</script>

<style scoped>
  @import url('./index.css');
</style>
