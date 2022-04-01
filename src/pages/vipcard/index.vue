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
                  <span>2022.04.11到期</span><span style="color:#fff" class="spec" @click="conPay">去续费</span>
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
           sec:false,
           last:'',
           list:''
        }
    },
    mounted(){
        this.requireVip()
    },
    methods:{
        topay(){
          this.sec=true
        },
        getTime(num){
            if(num){
                var date=num
            }else var date=new Date()
          var year=date.getFullYear()
          var month=date.getMonth()+1
          var day=date.getDate()
          var days = new Date(year, month, 0)  
            days = days.getDate() //获取当前日期中的月的天数  
            var year2 = year  
            var month2 = parseInt(month) + 1 
            if (month2 == 13) {  
                year2 = parseInt(year2) + 1  
                month2 = 1 
            }  
            var day2 = day 
            var days2 = new Date(year2, month2, 0)  
            days2 = days2.getDate(); 
            if (day2 > days2) {  
                day2 = days2  
            }  
            if (month2 < 10) {  
                month2 = '0' + month2  
            }  
          
            this.last = year2 + '-' + month2 + '-' + day2     
        },
        tovip(){
           this.getTime()
            if(this.$store.state.id){
                let params={
                id: this.$store.state.id,
                num: 6,
                data: this.last
            }
            this.$http.post(this.$api.addvip,params).then(data=>{
                   if(data.data){
                       this.requireVip()
                   }
            })
            }
            this.show=true
            this.sec=false
        },
        requireVip(){
          let params={
              id: this.$store.state.id
          }
          this.$http.post(this.$api.vip.params).then(data=>{
              if(data.data){
            this.list=data.data.data
              }
          })
        },
        conPay(){
           this.getTime(new Date(this.list.time))
           let params={
               num: this.list.num+6,
               data: this.last,
               id: this.$store.state.id
           }
           this.$http.post(this.$api.upVip,params).then(data=>{
               
           })
        }
    }
}
</script>

<style scoped>
@import url('./index.css');
</style>
