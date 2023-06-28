import Vue from 'vue'
import './plugins/axios'
import App from './App.vue'
import router from './router'
import store from './store'
import './plugins/element.js'
import './assets/css/font.css'
import './assets/js/iconfont'
import './assets/css/iconfontcss.css'
import './assets/css/iconfont.css'
Vue.config.productionTip = false
 

router.beforeEach((to, from, next) => {
  if (to.path == '/login') {
    //保存当前路由
      localStorage.setItem("preRoute", router.currentRoute.fullPath)
  }
  next()
})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
