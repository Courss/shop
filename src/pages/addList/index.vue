<template>
  <div class="all">
      <navbar title="新增收货地址" :showarrow="true" :menuColor="false"></navbar>
      <div v-if="this.add"><img @click="del" style="width:20px;height:20px;position:absolute;right:10px;top:15px" src="./img/删除.png" alt=""></div>
      <div class="top">
          <div class="content">
              <div class="locat" v-if="!this.add">
                  <i class="iconfont icon-dizhiguanli"></i>
                  <span >{{this.priAdd}}</span><span v-if="!this.priAdd">定位中...</span>
              </div>
             <div class="detail">
                 <span>地址</span>
                 <input type="text" v-model="priAdd" placeholder="选择收货地址">
             </div>
             <div class="detail"> 
                 <span>详细地址</span>
                 <input type="text" placeholder="填写详细地址，例:xx街xx小区" v-model="detAdd">
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
      <div class="pop" v-if="show">
          <div class="pop_t"><span>确认删除吗</span></div>
          <div class="pop_b">
              <div class="pop_l" @click="can"><span>取消</span></div>
              <div class="pop_r" @click="dele"><span>确定</span></div>
          </div>
      </div>
  </div>
</template>

<script>
import  {location}  from "../../common/location";
export default {
  data(){
      return{
        priAdd:'',
        detAdd:'',
        name:'',
        phone:'',
        show: false,
        add:'',
        id:''
      }
  },
  created(){
     if(this.$route.query.id){
         this.add=this.$route.query.id
          this.priAdd=this.add.priAdd
          this.detAdd=this.add.detAdd
          this.name=this.add.name
          this.phone=this.add.phone
          this.id=this.add.id
     }
  },
  mounted(){
      this.getLocation();
  },
  methods:{
       getLocation() {
      let _that = this;
      let geolocation = location.initMap("map-container"); //定位
      AMap.event.addListener(geolocation, "complete", result => {
        this.priAdd=result.addressComponent.province+result.addressComponent.city+result.addressComponent.district
      });
    },
    save(){
        if(!this.priAdd||!this.detAdd||!this.name||!this.phone){
            this.$message({
                message:'请填写完整信息',
                type: 'warning'
            })
        }
        if(this.add){
            let params={
             priAdd: this.priAdd,
             detAdd: this.detAdd,
             name: this.name,
             phone: this.phone,
             nums: this.$store.state.id,
             id: this.id
        }
        this.$http.post(this.$api.cadd,params).then(data=>{
            if(data.data.status===0){
                this.$router.push('/address')
            }
        })
        return
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
    },
    can(){
       this.show=false
    },
    del(){
        this.show=true
    },
    dele(){
        this.show=false
        let params={
            id: this.id
        }
        this.$http.post(this.$api.del,params).then(data=>{
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