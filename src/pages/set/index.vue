<template>
  <div class="all">
    <navbar title="设置" :showarrow="true" :menuColor="false"></navbar>
    <div class="top">
      <div class="list">
        <span>账号</span>
        <input type="text" v-model="username">
      </div>
      <div class="list">
        <span>昵称</span>
        <input type="text" v-model="nickname">
      </div>
      <div class="list" @click="goAddress">
        <span>收货地址</span>
        <i class="iconfont icon-jinrujiantou"></i>
      </div>
    </div>
    <el-button class="bottom" @click="updata">确定</el-button>
  </div>
</template>

<script>
export default {
  data(){
    return{
      username:'',
      nickname:''
    }
  },
  methods:{
    goAddress(){
      this.$router.push('/address')
    },
    updata(){
      if(!this.$store.state.id){
        this.$router.push('/login')
        return 
      }
      let params={
        id: this.$store.state.id,
        username: this.username,
        nickname: this.nickname

      }
      this.$http.post(this.$api.updatamsg,params).then(data=>{
          if(data.data.status===0){
            this.$router.push('/profile')
          }
      })
    }
  }
}
</script>

<style scoped>
 @import url('./index.css');
</style>