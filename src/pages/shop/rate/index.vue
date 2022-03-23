<template>
  <div>
    <div class="top">
        <div class="left">
      <div class="rate">
        <span>{{ this.value }}</span>
      </div>
      <div class="rates">
        <div class="height"><span>高于附近61.7的商家</span></div>
        <div>
          <el-rate class="star" v-model="value" disabled score-template="{value}">
          </el-rate>
        </div>
      </div>
    </div>
        <div class="right">
          <div class="first"><span class="txt">味道</span><span class="rating">4.6</span></div>
          <div class="second"><span class="txt">包装</span><span class="rating">4.7</span></div>
          <div class="thrid"><span class="txt">配送满意度</span><span class="rating">96%</span></div>
        </div>
    </div>
    <div class="wrap">
      <div class="wrap_top">
        <div class="wrap_left"><img src="./img/tou.png" alt=""><span>用户</span></div>
        <div class="wrap_right"><span>2022-03-14</span></div>
      </div>
      <div class="nav">
        <div class="nava"><span>满意度</span></div>
        <div class="nava"> <el-rate class="star" v-model="values" disabled score-template="{values}"></el-rate></div>
       <div class="nava"><span>味道5星</span></div>
        <div class="nava"><span>包装5星</span></div>
        <div class="nava"><span>骑士超赞</span></div>
      </div>
      <div class="says">
        <span>测试测试测试测试测试测试测试测试测试测试测试测试</span>
      </div>
      <div class="aui"><img src="./img/bang.png" alt="" @click="show" v-if="flag"><img src="./img/zan.png" alt="" @click="show" v-if="!flag"><span>有用</span></div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      value: 4.7,
      values: 5.0,
      flag: true,
      list:[1,1,1,1]
    };
  },
  methods:{
    show(){
      this.flag=!this.flag
    }
  }
};
</script>

<style scoped>
@import url('./index.css');
</style>
