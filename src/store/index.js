import vue from "vue"
import vuex from "vuex"
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
vue.use(ElementUI)
vue.use(vuex);
const store=new vuex.Store({
    state:{
           token:'', 
           id:'',
           name:'',
           nickName:''
    },
    mutation:{
      
 },
})

export default store;