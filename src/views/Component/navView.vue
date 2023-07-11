<template>
  <div>
    <!-- 导航栏开始 -->
    <div class="header" ref="nav" :class="{ sticky: isSticky }">
      <div class="nav">
        <div class="logo">
          <img src="http://localhost:8282/image/goods/logo-01.png" alt="" />
        </div>
        <ul>
          <li
            v-for="(item, index) in navList"
            :key="index"
            :class="index == active ? 'active' : ''"
            @click="toPage(index, item.com)"
          >
           {{ item.compName }}<span></span>
           <div class="div" v-if="item.children">
            <p class="p" v-for="(item, index) in item.children"
            :key="index"
            :class="index == active ? 'active' : ''"
            @click="toPage(index, item.com)"
            > {{ item.compName }}
           
            </p>
           </div>
           
          </li>
          <li class="yellow-color">159-1416-5802</li>
         <router-link to="/shoppingCart"> 
          <li class="basket-ico">
            <a href="">
              <i style="font-size: 32px" class="el-icon-shopping-bag-2">   </i>
              <em class="roundpoint">3</em>
            </a>
          </li>
        </router-link>

       <li>
          <p  v-if="admin==null" >
                <router-link to="/login" style="color: #000;">请登录</router-link>  
                  </p> 
                <el-dropdown v-if="admin!=null">
                   <p class="el-icon-user-solid" >
                   {{ admin.username }}
                   <i class="el-icon-arrow-down el-icon--right home_userinfo"></i>
                  </p> 
                    <el-dropdown-menu slot="dropdown">
                        <el-dropdown-item @click.native="logout">退出登录</el-dropdown-item>
                    </el-dropdown-menu>      
                </el-dropdown>          
          </li>
        </ul>
        
      </div>
    </div>
    <!-- 导航栏结束 -->
    <!-- 路由页面开始 -->
    <div><router-view/></div>
    <!-- 路由页面结束 -->
    <!-- 页脚开始 -->
    <div><foot-view/></div>
    <!-- 页脚结束 -->
  </div>
</template>

<script>
import footView from '../Component/footView.vue';
export default {
  components: { footView },
  data: function () {
    return {
      active:null,
      isSticky: false, //是否吸顶
      navHeight: 0, // nav的高度
      conScrollTop: 0, // 容器滚动条距离顶部高度
      thatOffsetTop: 0, // 当前组件距离顶部高度
      navList: [
        {
          compName: "HOME",
          itemName: "首页",
          com: "home",
        },
        {
          compName: "MENU",
          itemName: "菜单",
          com: "",
          children:[
          {
          compName: "MenuOne",
          itemName: "菜单1",
          com: "menuOne",
        },
          ]
        },
        {
          compName: "MEGAMENU",
          itemName: "菜单介绍",
          com: "",
        },
        {
          compName: "SHOP",
          itemName: "分店介绍",
          com: "",
        },
        {
          compName: "BLOG",
          itemName: "企业文化",
          com: "",
        },
        {
          compName: "CONTACTS",
          itemName: "联系我们 ",
          com: "",
        },
      ],
      admin:null
        
         
          
      
    };
  },

  created() {
    this.active = this.$route.query.active;

    let admin = JSON.parse(window.localStorage.getItem('userInfo'))
          this.admin = admin
             // 设置一小时的有效期
             const expire = 1000 *60*60;
             setTimeout(() => {
             localStorage.setItem('userInfo', '')
             this.admin=null
             this.$router.push({ path:"/login" })
            ElementUI.Message.error("登录失效，请重新登录")
            }, expire)
  },

  mounted() {
    //mounted(){console.log("挂载完成");},这是第四个生命周期函数,表示内存中的模板,已经真实的挂载到了页面中, 用户已经可以看到渲染好的页面了
    //https://cn.vuejs.org/guide/essentials/lifecycle.html#lifecycle-diagram
    this.initSticky();
     this.getScrollTop();
  },
  methods: {
    initSticky() {
      this.navHeight = this.$refs.nav.clientHeight; //导航栏的高度
      // console.log(" this.navHeight :", this.navHeight);
      window.addEventListener("scroll", (e) => {
        this.thatOffsetTop = this.getScrollTop(); // 滚动条距离顶部高度
        // console.log(" this.thatOffsetTop :", this.thatOffsetTop);
        // 当滚动条距顶部的高度 大于 等于 banner的高度 就吸顶
        if (this.thatOffsetTop >= this.navHeight) {
          this.isSticky = true;
        } else {
          this.isSticky = false;
        }
      });
    },
    // 滚动条距离顶部高度
    getScrollTop() {
      var scrollTop = 0;
      //  console.log("document.body.scrollTop :", document.body.scrollTop);
      // console.log(" document.documentElement.scrollTop:", document.documentElement.scrollTop);
      //  console.log("document.documentElement:", document.documentElement);
      //document.documentElement 是一个会返回文档对象document的根元素的只读属性
      //获取当前页面的滚动条纵坐标位置：document.documentElement.scrollTop;
      if (document.documentElement && document.documentElement.scrollTop) {
        scrollTop = document.documentElement.scrollTop;
      } else if (document.body) {
        scrollTop = document.body.scrollTop;
      }
      return scrollTop;
    },

    toPage(index, com) {
      this.active = index;
      this.$router.push(com);
    },

    logout(){
                let _this = this;
                this.$confirm('注销登录吗?', '提示', {
                    confirmButtonText: '确定',
                    cancelButtonText: '取消',
                    type: 'warning'
                }).then(function () {
                    
                    localStorage.removeItem('userInfo')
                    window.localStorage.clear()
                    _this.admin=null
                }).catch(()=>{})
            }


  },
};
</script>

<style scoped>
@import url("@/assets/css/nav.css");


</style>