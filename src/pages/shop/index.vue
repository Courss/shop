<template>
  <div class="all">
    <div class="top">
      <div class="top-mask"></div>
      <div class="top-icon">
        <img src="./img/left.png" class="top-back" @click="back" />
        <div class="first" v-if="show">
          <img src="./img/follow.png" @click="showheart" alt="" /><span
            >关注</span
          >
        </div>
        <div class="first" v-if="!show">
          <img src="./img/follows.png" @click="showheart" alt="" /><span
            >已关注</span
          >
        </div>
      </div>
    </div>
    <div class="nav">
      <div class="content">
        <div class="left">
          <div class="txt">
            <span>派乐汉堡</span>
          </div>
          <div class="seconde">
            <div class="btn"><span>蓝骑士专送</span></div>
            <div class="btm">
              <span>约35分钟 ·</span><span> 月售4772 ·</span
              ><span> 可自取</span>
            </div>
          </div>
          <div class="thrid">
            <svg
              t="1636796725373"
              class="icon"
              viewBox="0 0 1024 1024"
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              p-id="11884"
              width="200"
              height="200"
            >
              <path
                d="M816.49 909H211.21c-1.1 0-2-0.9-2-2v-68.18c0-1.1 0.9-2 2-2h605.28c1.1 0 2 0.9 2 2V907c0 1.1-0.9 2-2 2z"
                fill="#efb336"
                p-id="11885"
              ></path>
              <path
                d="M910.24 316.23c-27.11 0-49.1 22.52-49.1 50.31 0 7.28 1.58 14.16 4.3 20.4l-176.13 80.21-147.2-258.57c14.56-8.73 24.46-24.74 24.46-43.28 0-27.79-21.98-50.31-49.1-50.31s-49.1 22.52-49.1 50.31c0 17.99 9.29 33.66 23.15 42.55l-158.16 259.3-176.13-80.21c2.71-6.25 4.3-13.12 4.3-20.4 0-27.78-21.98-50.31-49.1-50.31s-49.1 22.52-49.1 50.31c0 27.78 21.98 50.31 49.1 50.31 3.99 0 7.82-0.62 11.53-1.54l86.65 366.28h601.43l86.65-366.28c3.71 0.92 7.54 1.54 11.53 1.54 27.12 0 49.1-22.52 49.1-50.31 0.01-27.78-21.97-50.31-49.08-50.31z"
                fill="#efb336"
                p-id="11886"
              ></path>
            </svg>
            <span>5元无门槛</span>
          </div>
        </div>
        <div class="right">
          <img src="./img/1.jpg" alt="" />
        </div>
      </div>
    </div>
    <div class="wrap">
      <el-tabs v-model="activeName" @tab-click="handleClick" class="tabs">
        <el-tab-pane label="点餐" name="first" class="tab"
          ><goods></goods
        ></el-tab-pane>
        <el-tab-pane label="评价" name="second" class="tab"
          ><rate></rate
        ></el-tab-pane>
        <el-tab-pane label="商家" name="third" class="tab"
          ><info></info
        ></el-tab-pane>
      </el-tabs>
    </div>
  </div>
</template>

<script>
import goods from "./goods/index.vue";
import rate from "./rate/index.vue";
import info from "./info/index.vue";
export default {
  data() {
    return {
      show: true,
      activeName: "first"
    };
  },
  components: {
    goods,
    rate,
    info,
  },
  methods: {
    showheart() {
      this.show = !this.show;
    },
    handleClick(tab) {
      this.activeName = tab.name;
    },
    back(){
      this.$router.go(-1)
    }
  },
};
</script>

<style scoped>
@import url("./index.css");
</style>
