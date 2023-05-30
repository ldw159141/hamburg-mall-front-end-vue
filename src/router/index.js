import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "导航栏",
    component: () => import("../views/Component/navView.vue"),
    redirect: "/home",
    children: [
      {
        path: "/home",
        name: "home",
        component: () => import("../views/HomeView.vue"),
        // children:[
        //   {
        //     path: "",
        //     name: "商品",
        //     component: () => import("../views/goodsView.vue"),
        //     children:[
        //       {
        //         path: "",
        //         name: '热卖商品',
        //         component:()=>import('../views/HotGoods.vue')
        //       },
        //     ]
        //   },     
         
        // ]
      },
      {
        path: "menuone",
        name: "菜单1",
        component: () => import("../views/menuOneView.vue"),
      },
      {
        path: "goodsDetailed",
        name: "商品详细",
        component: () => import("../views/goodsDetailed.vue"),
      },
     
     
    ],
  },
  {
    path: "/footView",
    name: "页脚",
    component: () => import("../views/Component/footView.vue"),
  },
  // {
  //   path: '/goodsDetailed',
  //   name: '商品详细',
  //   component:()=>import('../views/goodsDetailed.vue')
  // },
  // {
  //   path: '/',
  //   name: 'home',
  //   component:()=>import('../views/HomeView.vue')
  // },
  // {
  //   path: '/goods',
  //   name: '商品',
  //   component:()=>import('../views/goodsView.vue')
  // },
  //   {
  //   path: '/hotGoods',
  //   name: '热卖商品',
  //   component:()=>import('../views/HotGoods.vue')
  // },

  //          {
  //   path: '/menuone',
  //   name: '菜单1',
  //   component:()=>import('../views/menuOneView.vue')
  // },

  // {
  //   path: '/about',
  //   name: 'about',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  // }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
