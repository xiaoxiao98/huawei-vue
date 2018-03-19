import Vue from 'vue'
import Router from 'vue-router'
// 首页
import index from '@/components/index'
// 分类
import type from '@/components/type'
// 购物车
import cart from '@/components/cart'
// 登录
import login from '@/components/login'
// 我的
import me from '@/components/me'
// 商品详情
import shops from '@/components/shops'
// 注册
import reg from '@/components/reg'
// 注册上一步
import regBack from '@/components/regBack' 
// 瀑布流
import json from '@/components/json' 



Vue.use(Router)
export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: index
    },
    {
      path: '/type',
      name: 'type',
      component: type
    },
    {
      path: '/cart',
      name: 'cart',
      component: cart
    },
    {
      path: '/login',
      name: 'login',
      component: login
    },
    {
      path: '/me',
      name: 'me',
      component: me,
    },
    {
      path: '/shops',
      name: 'shops',
      component: shops,
    },
    {
      path: '/reg',
      name: 'reg',
      component: reg,
    },
    {
      path: '/regBack',
      name: 'regBack',
      component: regBack,
    },
    {
      path: '/json',
      name: 'json',
      component: json,
    }

  ]
})
