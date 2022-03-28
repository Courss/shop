<template>
  <div class="all">
     <navbar title="订单" :showarrow="false" :menuColor="true"></navbar>
     <!-- <div class="nav">
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
           <div class="comment" @click="tocom">去评价</div>
           <div class="again" @click="delet">删除订单</div>
         </div>
       </div>
     </div> -->
     <div class="order_no_login" v-if="show">
        <img src="./image/person.png" alt="">
        <h3>登录后查看外卖订单</h3>
        <button @click="gologin">立即登录</button>
      </div>
       <div class="pop" v-if="sec">
          <div class="pop_t"><span>确认删除订单吗</span></div>
          <div class="pop_b">
              <div class="pop_l"><span>取消</span></div>
              <div class="pop_r" @click="todel"><span>确定</span></div>
          </div>
      </div>
  </div>
</template>

<script>
export default {
  data(){
    return{
        show:true,
        list:[1,1,1,1,1],
        lists:[1,1,1,1,1,1,1,1,1,1,11,1,1],
        sec:false
    }
  },
  mounted(){
    if(this.$store.state.id){
        this.getorder()
        this.show=false
    }
  },
  methods:{
    getorder(){
         let params={
           num: this.$store.state.id
         }
         this.$http.post(this.$api.getorder,params).then(data=>{

         })
    },
    gologin(){
      this.$router.push('login')
    },
    toDetail(){
      this.$router.push('/orderDetail')
    },
    tocom(){
      this.$router.push('/comment')
    },
    delet(){
      this.sec=true
    },
    todel(){
      this.sec=false

    }
  }
}
</script>

<style scoped>
  @import url('./index.css');
</style>
