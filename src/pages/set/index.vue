<template>
  <div class="all">
    <navbar title="设置" :showarrow="true" :menuColor="false"></navbar>
    <div class="top">
      <div class="list">
        <span>头像</span>
        <i class="iconfont icon-jinrujiantou"></i>
      </div>
      <div class="list">
        <span>账号</span>
        <input type="text">
      </div>
      <div class="list">
        <span>昵称</span>
        <input type="text">
      </div>
      <div class="list" @click="goAddress">
        <span>收货地址</span>
        <i class="iconfont icon-jinrujiantou"></i>
      </div>
    </div>
    <el-button class="bottom">确定</el-button>
  </div>
</template>

<script>
export default {
  data(){
    return{

    }
  },
  methods:{
    goAddress(){
      this.$router.push('/address')
    }
  }
}
</script>

<style scoped>
 @import url('./index.css');
</style>