<template>
  <div class="all">
      <navbar title="收货地址" :showarrow="true" :menuColor="false"/>
      <div class="top">
         <div class="content">
          <div class="left">
              <div class="title">
                <span>光谷软件园</span>
              </div>
              <div class="name">
                  <span>张文婷(女士)</span>
                  <span>159****9034</span>
              </div>
          </div>
          <div class="right">
              <i class="el-icon-edit-outline"></i>
          </div>
      </div>  
    </div>
    <div class="bottom" @click="goAddress">
        <i class="el-icon-circle-plus-outline"></i>
        <span>新增标签</span>
    </div>
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
        this.$router.push('/addList')
    }
}
}
</script>

<style scoped>
 @import url('./index.css');
</style>