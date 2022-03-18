<template>
   <div class="all">
      <div class="top">
          <img @click="back" src="/static/close.png">
      </div>
      <div class="title">注册</div>
      <div class="content">
        <input type="text" placeholder="手机/用户名" v-model="name">
         <input :type="type" placeholder="密码" v-model="word">
        <div class="three"><input :type="type" placeholder="再次输入密码" v-model="words">
        <i class="el-icon-view" @click="toShow"></i></div>
      </div>
      <el-form ref="form" :model="form">
      <el-form-item label="验证" prop="isLock" class="verify">
        <slider-verify-code v-model="form.isLock" @change="handlerLock"></slider-verify-code>
      </el-form-item>
      </el-form>
      <el-button :plain="true" class="login" @click="loginTo" :style="{background: (this.name&&this.word&&this.words? '#409EFF':'#e8e8e8'),color: (this.name&&this.word&&this.words? '#ffffff':'#333333')}">注册</el-button>
      <div class="bottom">
        <el-radio v-model="radio" label="1">
          <span>已阅读并同意</span><span style="color: #409EFF">《用户服务协议》、《隐私政策》</span>  
            </el-radio>  
      </div>
  </div>
</template>

<script>
import slide from '../../components/slide-verify/index.vue'
export default {
   data(){
      const checkStatus = (value) => {
      if (!value) {
        this.$message({  message: '请拖动滑块完成验证',type: 'warning'})
        return 0
      }
    };
       return{
          form:{},
          radio: '1',
          name:'',
          word:'',
          words:'',
          show: false,
          type: 'password',
           isLock: [
          {validator: checkStatus, trigger: 'blur'},
            ],
       }
   },
    components:{
     'slider-verify-code': slide
    },
   methods:{
       loginTo(){
           if(!this.name&&!this.word&&!this.words){
               this.$message({
                  message: '请输入用户名或密码',
                   type: 'warning'
                })
                return
           }
           if(this.word!=this.words){
                this.$message({
                  message: '密码不一致',
                   type: 'error'
                })
                return
           }
           if(this.word.length<6){
                this.$message({
                  message: '密码长度不得低于六位',
                   type: 'warning'
                })
                return
           }
             if(!this.flag){
             this.$message({  message: '请拖动滑块完成验证',type: 'warning'})
             return
           }
          let params={
              username:this.name,
              password:this.word
          }
          this.$http.post(this.$api.regist,params).then(data=> {
                let res=data.data
                if(res.status===0){
                   this.$store.state.id=res.id
                  window.localStorage["token"] = JSON.stringify(res.token);
                 this.$router.push('/profile')
              }else{
                  this.$message({
                  message: res.message,
                   type: 'error'
                })
              }
          })
       },
        handlerLock(data){
         if (data) {
           this.flag=data
        this.$refs.form.validateField('isLock');
      }
       },
       toShow(){
          this.type='text'
       },
         back(){
          this.$router.go(-1)
        },
   }
}
</script>

<style scoped>
 @import './index.css'
</style>
