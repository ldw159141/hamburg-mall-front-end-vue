import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/goods',
    name: '商品',
    component:()=>import('../views/goodsView.vue')
  },
    {
    path: '/hotGoods',
    name: '热卖商品',
    component:()=>import('../views/HotGoods.vue')
  },
       {
    path: '/footView',
    name: '页脚',
    component:()=>import('../views/footView.vue')
  },
           {
    path: '/menuone',
    name: '菜单1',
    component:()=>import('../views/menuOneView.vue')
  },
       


  // {
  //   path: '/about',
  //   name: 'about',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  // }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
