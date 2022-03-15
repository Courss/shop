<template>
  <div class="all">
      <navbar title="新增收货地址" :showarrow="true" :menuColor="false"></navbar>
      <div class="top">
          <div class="content">
              <div class="locat">
                  <i class="iconfont icon-dizhiguanli"></i>
                  <span >{{this.priAdd}}</span><span v-if="!this.priAdd">定位中...</span>
              </div>
             <div class="detail">
                 <span>地址</span>
                 <input type="text" v-model="priAdd" placeholder="选择收货地址">
             </div>
             <div class="detail"> 
                 <span>详细地址</span>
                 <input type="text" placeholder="填写详细地址，例:1层101" v-model="detAdd">
             </div>
             <div class="detail">
                 <span>收货人</span>
                 <input type="text" placeholder="姓名" v-model="name">
             </div>
             <div class="detail">
                 <span>手机号</span>
                 <input type="text" placeholder="手机号码" v-model="phone">
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
        priAdd:'',
        detAdd:'',
        name:'',
        phone:''
      }
  },
  mounted(){
      this.getLocation()
  },
  methods:{
       getLocation() {
      let geolocation = location.initMap("map-container"); //定位
      AMap.event.addListener(geolocation, "complete", result => {
         this.priAdd=result.addressComponent.province+result.addressComponent.province+result.addressComponent.district
      });
    },
    save(){
        console.log(this.priAdd,this.detAdd,this.name,this.phone)
        if(!this.priAdd||!this.detAdd||!this.name||!this.phone){
            this.$message({
                message:'请填写完整信息',
                type: 'warning'
            })
        }
        let params={
             priAdd: this.priAdd,
             detAdd: this.detAdd,
             name: this.name,
             phone: this.phone,
             num: this.$store.state.id
        }
        this.$http.post(this.$api.addList,params).then(data=>{
            if(data.data.status===0){
                this.$router.push('/address')
            }
        })
    }
  }
}
</script>

<style scoped>
 @import url('./index.css');
</style>