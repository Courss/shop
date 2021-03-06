import Vue from 'vue'
import Router from 'vue-router'
import msite from '../pages/msite/index.vue'
import order from '../pages/order/index.vue'
import profile from '../pages/profile/index.vue'
import search from '../pages/search/index.vue'
import login from '../pages/login/index.vue'
import regist from '../pages/regist/index.vue'
import set from '../pages/set/index'
import address from '../pages/address/index'
import addList from '../pages/addList/index'


Vue.use(Router)

export default new Router({
  routes: [
      {
        path:'/msite',
        component: msite,
        meta:{
          showFooter:true
        }
      },
      {
        path:'/order',
        component: order,
        meta:{
          showFooter:true
        }
      },
      {
        path:'/profile',
        component: profile,
        meta:{
          showFooter:true
        }
      },
      {
        path:'/search',
        component: search,
        meta:{
          showFooter:true
        }
      },
        {
            path:'/',
            redirect: '/msite'
        },
        {
          path:'/login',
          component: login,
      },
      {
        path:'/regist',
        component: regist,
    },
    {
      path:'/set',
      component: set,
  },
  {
    path:'/address',
    component: address,
},
{
  path:'/addList',
  component: addList,
},
  ]
})
