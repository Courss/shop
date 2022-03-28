<template>
  <div>
   <navbar title="搜索" :showarrow="false" :menuColor="true"></navbar>
   <div class="search_form">
      <input type="search" v-model="name" name="search" class="search_input" placeholder="请输入商家或美食名称" >
      <div class="search_submit" @click="search">搜索</div>
     </div>
    <div class="all" v-for="(item,index) in lists" :key="index" @click="toShop">
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
</template>

<script>
export default {
  data(){
    return{
        list:'',
        lists:'',
        name:'',
        url:'http://localhost:3007'
    }
  },
  mounted(){
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
   search(){
     this.lists=null
        let name=this.name
          if (name) {
        this.lists = this.list.filter(function(product) {
          // 每一项数据
          console.log(product)
          return Object.keys(product).some(function(key) {
            // 每一项数据的参数名
            console.log(key)
            return (
              String(product[key])
                // toLowerCase() 方法用于把字符串转换为小写。
                .toLowerCase()
                // indexOf() 方法可返回某个指定的字符串值在字符串中首次出现的位置。
                .indexOf(name) > -1
            )
          })
        })
    }
   }
  }
}
</script> 

<style scoped>
.search_form{
    background-color: #fff;
    padding: 12px 8px;
    display: flex;
}
  input{
  height: 35px;
   padding: 0 4px;
   border-radius: 2px;
   font-weight: bold;
   outline: none;
  }
   .search_input{
    width: 79%;
    border: 4px solid #f2f2f2;
    font-size: 14px;
    color: #333;
    background-color: #f2f2f2;
   }
   .search_submit{
     width: 75px;
     font-size: 16px;
     color: #fff;
     text-align: center;
     line-height: 32px;
     margin-left: 5px;
     background-color: #76c3ec;
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
