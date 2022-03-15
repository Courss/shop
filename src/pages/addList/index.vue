<template>
  <div class="all">
      <navbar title="新增收货地址" :showarrow="true" :menuColor="false"></navbar>
      <div class="top">
          <div class="content">
              <div class="locat">
                  <i class="iconfont icon-dizhiguanli"></i>
                  <span >{{this.location}}</span><span v-if="!this.location">定位中...</span>
              </div>
             <div class="detail">
                 <span>地址</span>
                 <input type="text" :value="this.location" placeholder="选择收货地址">
             </div>
             <div class="detail"> 
                 <span>详细地址</span>
                 <input type="text" placeholder="填写详细地址，例:1层101">
             </div>
             <div class="detail">
                 <span>收货人</span>
                 <input type="text" placeholder="姓名">
             </div>
             <div class="detail">
                 <span>手机号</span>
                 <input type="text" placeholder="手机号码">
             </div>
          </div>
          <div class="bottom" @click="save">保存地址</div>
      </div>
  </div>
</template>

<script>
import { location } from "../../common/location.js"
export default {
  data(){
      return{
        location:''
      }
  },
  mounted(){
      this.getLocation()
  },
  methods:{
       getLocation() {
      let geolocation = location.initMap("map-container"); //定位
      AMap.event.addListener(geolocation, "complete", result => {
         this.location=result.formattedAddress
      });
    },
    save(){
        if(this.$store.state.id){
            this.$router.push('/login')
        }

    }
  }
}
</script>

<style scoped>
 @import url('./index.css');
</style>