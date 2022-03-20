<template>
  <div class="all">
      <navbar title="订单已送达" :showarrow="true"></navbar>
      <div class="nav">
          <div class="content">
              <div class="top">
                  <span>感谢信任，期待再次光临</span> 
              </div>
            <div class="bottom">
                <div class="first">
                <img src="./img/关闭.png" alt=""> 
                <span>删除订单</span>
                </div>
                <div class="first">
                    <img src="./img/评价.png" alt="">
                    <span>去评价</span>
                </div>
                <div class="first">
                    <img src="./img/联系.png" alt="">
                    <span>联系商家</span>
                </div>
                <div class="first">
                    <img src="./img/联系.png" alt="">
                    <span>联系骑士</span>
                </div>
            </div> 
          </div>         
      </div>
    <detail></detail>
  </div>
</template>

<script>
import detail from './detail/index.vue'
export default {
    data(){
        return{

        }
    },
    components:{
        detail
    }
}

</script>

<style scoped>
.all{
    background: #f2f2f2;
    width: 100%;
    height: 100%;
}
.nav{
    width: 95%;
    margin: 0 auto;
    background: #fff;
    padding: 10px 0;
    border-radius: 5px;
    margin-top: 10px;
}
.content{
    width: 92%;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
}
.top{
    border-bottom: 1px solid #ebebeb;
    padding: 15px 0;
}
.content img{
    width: 15px;
    height: 15px;
    margin: 0 auto;
    margin-bottom: 10px;
}
.bottom{
    display: flex;
    justify-content: space-between;
    font-size: 14px;
    padding: 10px 0;
    width: 90%;
    margin: 0 auto;
}
.first{
    display: flex;
    flex-direction: column;
}
</style>
