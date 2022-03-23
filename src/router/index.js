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
import shop from '../pages/shop/index'
import payorder from '../pages/payorder/index'
import orderDetail from '../pages/orderDetail/index'
import collection from '../pages/collection/index'
import vipcard from '../pages/vipcard/index'
import comment from '../pages/comment/index'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/msite',
      component: msite,
      meta: {
        showFooter: true
      }
    },
    {
      path: '/order',
      component: order,
      meta: {
        showFooter: true
      }
    },
    {
      path: '/profile',
      component: profile,
      meta: {
        showFooter: true
      }
    },
    {
      path: '/search',
      component: search,
      meta: {
        showFooter: true
      }
    },
    {
      path: '/',
      redirect: '/msite'
    },
    {
      path: '/login',
      component: login,
    },
    {
      path: '/regist',
      component: regist,
    },
    {
      path: '/set',
      component: set,
    },
    {
      path: '/address',
      component: address,
    },
    {
      path: '/addList',
      component: addList,
    },
    {
      path: '/shop',
      component: shop,
    },
     {
      path: '/payorder',
      component: payorder,
    },
    {
      path: '/orderDetail',
      component: orderDetail,
    },
    {
      path: '/collection',
      component: collection,
    },
    {
      path: '/vipcard',
      component: vipcard,
    },
    {
      path: '/comment',
      component: comment,
    },
  ]
})
