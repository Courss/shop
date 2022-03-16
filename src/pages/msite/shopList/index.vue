<template>
<div>
<div class="nav">
     <div class="all" v-for="(item,index) in list" :key="index" @click="toShop">
      <div class="content">
         <div class="left"><img :src="url+item.pic"></div>
      <div class="right">
        <div class="top"><span>{{item.name}}</span></div>
        <div class="seconde">
          <div class="seconde_l"><span style="color: #FF4D4F;">{{item.rating}} </span><span>{{item.grades}}</span></div>
          <div class="seconde_r"><span>{{item.time}} </span><span>{{item.juli}}</span></div>
        </div>
        <div class="thrid"><span>{{item.qisong}} </span><span :style="{color: (item.price===''? '#e16531':'#333')}">{{item.price}}</span></div>
        <div class="fouth"><span>{{item.comment}}</span></div>
        <div class="five"><svg t="1636796725373" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="11884" width="200" height="200"><path d="M816.49 909H211.21c-1.1 0-2-0.9-2-2v-68.18c0-1.1 0.9-2 2-2h605.28c1.1 0 2 0.9 2 2V907c0 1.1-0.9 2-2 2z" fill="#efb336" p-id="11885"></path><path d="M910.24 316.23c-27.11 0-49.1 22.52-49.1 50.31 0 7.28 1.58 14.16 4.3 20.4l-176.13 80.21-147.2-258.57c14.56-8.73 24.46-24.74 24.46-43.28 0-27.79-21.98-50.31-49.1-50.31s-49.1 22.52-49.1 50.31c0 17.99 9.29 33.66 23.15 42.55l-158.16 259.3-176.13-80.21c2.71-6.25 4.3-13.12 4.3-20.4 0-27.78-21.98-50.31-49.1-50.31s-49.1 22.52-49.1 50.31c0 27.78 21.98 50.31 49.1 50.31 3.99 0 7.82-0.62 11.53-1.54l86.65 366.28h601.43l86.65-366.28c3.71 0.92 7.54 1.54 11.53 1.54 27.12 0 49.1-22.52 49.1-50.31 0.01-27.78-21.97-50.31-49.08-50.31z" fill="#efb336" p-id="11886"></path></svg>
        <span>{{item.redbag}}</span></div>
      </div>
      </div>
    </div>
  </div>    
</div>
  
</template>

<script>
export default {
  data(){
    return{
      list:'',
      url:''
    }
  },
  mounted(){
    this.url='http://localhost:3007'
   this.getOrderList()
  },
  methods:{
   getOrderList(){
      this.$http.post(this.$api.orders).then(data=>{
        if(data.data){
          this.list=data.data.data
        }
      })
   },
   toShop(){
    this.$router.push('/shop')
   }
  }
}
</script>

<style scoped>
.nav{
    background: #f2f2f2;
    width: 100%;
    padding-bottom: 50px;
  }
   .all{
    width: 93%;
    background: #ffffff;
    margin: 0 auto;
    border-radius: 10px;
    margin-top: 10px;
   }
   .content{
    width: 90%;
    margin: 0 auto;
    padding: 15px 0;
    display: flex;
   }
   .left img{
     width: 120px;
     height: 110px;
     border-radius: 10px;
   }
   .right{
       margin-left: 10px;
   }
   .top{
       font-size: 18px;
       font-weight: 700;
       color: #333;
   }
   .seconde{
       font-size: 13px;
       width: 190px;
       display: flex;
       margin-top: 8px;
       justify-content: space-between;
       color: #555;
   }
   .thrid{
       font-size: 12px;
       margin-top: 8px;
       color: #555;
   }
   .fouth{
       display: inline-block;
       font-size: 13px;
       margin-top: 8px;
       background-color: #fae8c7;
       color: #e16531;
       padding: 3px;
       border-radius: 5px;
   }
   .five{
       font-size: 12px;
       margin-top: 8px;
       color: #efb336;
       border: 1px solid #efb336;
       width: 90px;
       border-radius: 5px;
       text-align: center;
       padding: 1px;
   }
   .icon{
       width: 14px;
       height: 14px;
   }
</style>
