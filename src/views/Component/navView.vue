<template>

  <div>
    <!-- 导航栏开始 -->
        <div class="header" ref="nav" :class="{ sticky: isSticky }">
      <div class="nav">
        <div class="logo">
          <img src="http://localhost:8282/image/goods/logo-01.png" alt=""  />
        </div>
        <ul>
        
          <li v-for="(item,index) in navList" :key="index" :class="index == active?'active':''" @mousemove="active = index" @mouseout="active = null"
        @click="toPage(index)">{{ item.name }} 
            {{ item.compName }}<span></span>
          </li>
        <li>
          <router-link to="/menuOne">菜单1</router-link>
            <router-link to="/goodsDetailed">详情</router-link>
        </li>
          <li class="yellow-color">159-1416-5802</li>
          <li class="basket-ico">
            <a href="">
              <i style="font-size: 32px" class="el-icon-shopping-bag-2"></i>
              <em class="roundpoint">2</em>
            </a>
          </li>
        </ul>
      </div>
    </div>
    <!-- 导航栏结束 -->
    </div>
</template>

<script>
export default {
    data: function () {
    return {
               isSticky: false, //是否吸顶
      navHeight: 0, // nav的高度
      conScrollTop: 0, // 容器滚动条距离顶部高度
      thatOffsetTop: 0, // 当前组件距离顶部高度
             navList: [
        {
          compName: "ABOUT",
          itemName: "关于我们",
        },
        {
          compName: "MENU ONE",
          itemName: "菜单1",
        },
        {
          compName: "MEGAMENU",
          itemName: "菜单介绍",
        },
        {
          compName: "SHOP",
          itemName: "分店介绍",
        },
        {
          compName: "BLOG",
          itemName: "企业文化",
        },
        {
          compName: "CONTACTS",
          itemName: "联系我们 ",
        },
      ],
        }
        
  },

 created () {
    this.active = this.$route.query.active
  },

     mounted() {
    //mounted(){console.log("挂载完成");},这是第四个生命周期函数,表示内存中的模板,已经真实的挂载到了页面中, 用户已经可以看到渲染好的页面了
    //https://cn.vuejs.org/guide/essentials/lifecycle.html#lifecycle-diagram
    this.initSticky();
    // this.getScrollTop();
 
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


      toPage (e) {
      console.log(e, 'e')
      switch (e) {
        case 0:
          this.$router.push({ path: '/', query: { active: this.active } })
          break
        case 1:
          this.$router.push({ path: '/menuOne', query: { active: this.active } })
          break
        case 2:
          this.$router.push({ path: '/goodsDetailed', query: { active: this.active } })
          break
        case 3:
          this.$router.push({ path: '/', query: { active: this.active } })
          break
        case 4:
          this.$router.push({ path: '/' })
          break

      }
    }

    }
  
}

</script>

<style scoped>
@import url("@/assets/css/nav.css");
</style>