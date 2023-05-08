<template>
  <div class="block" id="rotation">
    <el-carousel trigger="click" height="700px">
      <el-carousel-item v-for="item in slideList" :key="item.index">
        <div class="small" :style="{ 'background-image': `url(${baseurl+item.url})` }">
          <!-- <div><img :src="item.url" width="100%" height="100%" alt=""> -->
          <div class="rowindex">
            <p v-html="'<h2>'+item.title+'</h2>'"></p>
            <p v-html="'<h3>Only'+'<span class='+'yellow'+'>$'+item.price+'</span>'+'<h3>'"></p>
          
            <!-- <p>{{ item.tit1 }}</p>
            <p>{{ item.tit2 }}</p>//这样写直接出标签  -->
          </div>
        </div>
      </el-carousel-item>
    </el-carousel>

    <div class="header" ref="nav" :class="{ sticky: isSticky }">
      <div class="nav">
        <div class="logo">
          <img src="http://localhost:8282/image/goods/logo-01.png" alt="" />
        </div>
        <ul>
          <li v-for="item in navList" :key="item.index">
            {{ item.compName }}<span></span>
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
    <div><goods-view></goods-view></div>
    <div><hot-goods/></div>
    <div><foot-view/></div>

  </div>

</template>

<script>
import Axios from 'axios';
import goodsView from "./goodsView.vue";
import HotGoods from './HotGoods.vue';
import FootView from './footView.vue';
import  { getBaseUrl,requestUtil,getRespBaseUrl } from '@/util/requestUtil'; 
export default {
  components: { goodsView, HotGoods, FootView },
  name: "index",
  data: function (){
    return {
      isSticky: false, //是否吸顶
      navHeight: 0, // nav的高度
      conScrollTop: 0, // 容器滚动条距离顶部高度
      thatOffsetTop: 0, // 当前组件距离顶部高度
      baseurl:'',
      slideList: [
        // {
        //   url: require("../assets/images/slide-4.jpg"),
        //   tit1: "<h2>CHICKEN FINGERS1</h2>",
        //   tit2: "<h3>Only<span class='yellow'>￥6.99 </span></h3>",
        // },
        // {
        //   url: require("../assets/images/slide-5.jpg"),
        //   tit1: "<h2>CHICKEN FINGERS2</h2>",
        //   tit2: "<h3>Only <span class='yellow'>￥7.99</span></h3>",
        // },
        // {
        //   url: require("../assets/images/slide-6.jpg"),
        //   tit1: "<h2>CHICKEN FINGERS3</h2>",
        //   tit2: "<h3>Only <span class='yellow'>￥8.99</span></h3>",
        // },
      ],
      navList: [
        {
          compName: "ABOUT",
          itemName: "关于我们",
        },
        {
          compName: "OUR MENU",
          itemName: "菜单介绍",
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
    };
  },



   created() {
     this.getSlideList()
   
  },


  mounted() {
    //mounted(){console.log("挂载完成");},这是第四个生命周期函数,表示内存中的模板,已经真实的挂载到了页面中, 用户已经可以看到渲染好的页面了
    //https://cn.vuejs.org/guide/essentials/lifecycle.html#lifecycle-diagram
    this.initSticky();
    // this.getScrollTop();
 
  },

  methods: {
       getSlideList() {
      const _this = this
      Axios.get("http://localhost:8282/goods/findSlide/").then(function (resp) {
        console.log(resp)
        _this.slideList = resp.data.data
        _this.baseurl = 'http://localhost:8282/image/goods/'
        console.log(_this.slideList)

      })
      
        //    requestUtil({url: "/goods/findSlide/"}).then(
        // function(result){
        //   const baseurl = getBaseUrl();
        //        _this.slideList = result.data.data;
        //   console.log(result.data)
        //    _this.baseurl=baseurl+'/image/goods/'
        // })

    },
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
  
  },
};
</script>
 <!-- 第一种会导致引入不带scoped标签全局样式污染 -->
<style scoped>
@import url("@/assets/css/silde.css");




@import url("@/assets/css/index.css");


</style>

<!-- 第二种会导致部分样式消失 -->
<!-- <style src="../assets/css/silde.css"  scoped>
</style>
<style src="../assets/css/index.css"  scoped>
</style> -->

<!-- 第三种和第一种效果一样 -->
<!-- <style src="../assets/css/silde.css"  scoped>
</style>
<style src="../assets/css/index.css"  scoped>
</style> -->

