<template>
  <div class="all">
      <navbar title="新增收货地址" :showarrow="true" :menuColor="false"></navbar>
      <div class="top">
          <div class="content">
             <div class="detail">
                 <span>地址</span>
                 <input type="text">
                 <i class="iconfont icon-jinrujiantou"></i>
             </div>
             <div class="detail"> 
                 <span>详细地址</span>
                 <input type="text">
             </div>
             <div class="detail">
                 <span>收货人</span>
                 <input type="text">
             </div>
             <div class="detail">
                 <span>手机号</span>
                 <input type="text">
             </div>
          </div>
          <el-button class="bottom">确定</el-button>
      </div>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
 @import url('./index.css');
</style>