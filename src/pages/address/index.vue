<template>
  <div class="all">
      <navbar title="收货地址" :showarrow="true" :menuColor="false"/>
      <div class="top" v-for="item in list">
         <div class="content">
          <div class="left">
              <div class="title">
                <span>{{item.detAdd}}</span>
              </div>
              <div class="name">
                  <span>{{item.name}}</span>
                  <span>{{item.phone}}</span>
              </div>
          </div>
          <div class="right" @click="">
              <i class="el-icon-edit-outline"></i>
          </div>
      </div>  
    </div>
    <div class="bottom" @click="goAddress">
        <i class="el-icon-circle-plus-outline"></i>
        <span>新增地址</span>
    </div>
  </div>
</template>

<script>
export default {
data(){
    return{
         list:''
    }
},
mounted(){
  this.showAdd()
},
methods:{
    goAddress(){
        if(!this.$store.state.id){
            this.$router.push('/login')
            return
        }
        this.$router.push('/addList')
    },
    showAdd(){
        let params={
            num: this.$store.state.id
        }
        this.$http.post(this.$api.getAdd,params).then(data=>{
            if(data.data.status===0){
               this.list=data.data.data
            }
        })
    }
}
}
</script>

<style scoped>
 @import url('./index.css');
</style>