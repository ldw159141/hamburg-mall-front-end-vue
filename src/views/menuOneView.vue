<template>
  <!-- 导航栏开始 -->
  <div>
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
    <!-- 导航栏结束 -->
    <!-- 图片和路径导航开始 -->
    <div id="menu1-page">
      <div class="container">
        <div class="row">
          <nav>
            <ol>
              <li><a href="/">HOME</a></li>
              <li class="active">Menu #1</li>
            </ol>
          </nav>
          <h2>Main Menu #1</h2>
        </div>
      </div>
    </div>
    <!-- 图片和路径导航结束 -->
    <!-- 商品列表开始   -->
    <div id="list">
      <div class="list">
        <el-tabs v-model="activeName" type="card" @tab-click="handleClick">
        <el-tab-pane v-for="item in subjectList" :key="item.name" :name="item.name">
          <template slot="label">
            <!-- 插槽 -->
            <div class="tab_item">
              <i :class="['iconfont', item.icon]"></i>
              <span>{{ item.title }}</span>
            </div>
          </template>
             
              <!-- <div class="row2" v-for="(item,i) in goodList" :key="i"> -->
               
            <!-- <div v-if="index == i"> -->
                 
              <div class="item" >
 <section id="menu2" class="menu-100-70">
      <div class="container">
        <div class="row">
          <div class="item" v-for="(item,i) in goodList" :key="i" >
            <!-- <div class="item"  v-for="(item, j) in items" :key="j">  -->
            <div class="pic">
             
                <el-image :src="baseurl+item.url" 
              ref="" 
              :preview-src-list="item.urls">
              </el-image>
              <span class="item-code">Code: {{item.code}}</span>
              <span class="item-zoom-ico">
                <i class="iconfont icon-quanping_o"></i>
              </span>
            </div>
            <div class="txt">
              <a class="collect" href=""
                ><span class="iconfont icon-changyongtubiao-fuben-68"></span
              ></a>
              <h5 class="title">{{item.title}}</h5>
              <p>{{ item.description }}</p>
              <h5 class="price">${{ item.price }}</h5>
              <a class="cart">
                <i style="font-size: 14px" class="iconfont icon-24gl-bag"></i>
                Add to Cart</a
              >
            </div>
          </div>
        </div>
      </div>
    </section>
              </div>
                 
            <!-- </div> -->
                   
          <!-- </div> -->
     
       
        </el-tab-pane>
      </el-tabs>
      </div>
    </div>
    <!-- 商品列表结束   -->
    <!-- 页脚部分开始 -->
  
      <div id="group">
    <div id="one">
       <img
            src="http://localhost:8282/image/goods/logo-01.png"
            alt=""
            srcset=""
            
          />
      <br>
      <p>bun + patty + cheese + lettuce / tomato = burger</p>
    </div>
    <div id="two">
      <h2>salmon burger</h2>
      <p>bun + patty + cheese + lettuce / tomato = burger</p>
      <br>
      <p>© LDW 作者：刘德伟</p>
      <br>
       <p class="yellow-color2">15914165802</p>

    </div>
    <div id="three">
      <h2>Quarter pounder</h2>
      <p>
        1971 You Deserve a Break Today 你今天该休息会了
1975 We Do it All for You 我们所做的全都是为了您
1975 Two all beef patties special sauce lettuce cheese pickles onions on a sesame seed bun 两块牛肉肉饼、特殊酱汁、生菜、奶酪、酱菜、洋葱和沾有芝麻的面包。
      </p>
    </div>
    <div id="four">
      <h2>Papa burger</h2>
      <ul>
           <li> <img src="http://localhost:8282/image/goods/burger-11.jpg" /></li>
           <li> <img src="http://localhost:8282/image/goods/burger-12.jpg"/></li>
           <li> <img src="http://localhost:8282/image/goods/burger-13.jpg"/></li>
           <li> <img src="http://localhost:8282/image/goods/burger-14.jpg"/></li>
           <li> <img src="http://localhost:8282/image/goods/burger-15.jpg"/></li>
           <li> <img src="http://localhost:8282/image/goods/burger-16.jpg"/></li>
      </ul>
    </div>
</div>

    
    <div><foot-view/></div>
    <!-- 页脚部分结束 -->
  </div>
</template>

<script>
import Axios from 'axios';
import footView from './footView.vue';
export default {
  components: { footView },
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
      activeName:"0",
      goodList: [ ],

      subjectList: [
        {
          name:"0",
          title: "burger",
          icon: "icon-Hamburger",
          img: "http://localhost:8282/image/goods/burger-13.jpg",
        },
        {
          name:"1",
          title: "SIDES",
          icon: "icon-fries",
          img: "http://localhost:8282/image/goods/burger-12.jpg",
        },
        {
          name:"2",
          title: "SALADS",
          icon: "icon-cola",
          img: "http://localhost:8282/image/goods/burger-15.jpg",
        },
        {
          name:"3",
          title: "cookie",
          icon: "icon-doughnut",
          img: "http://localhost:8282/image/goods/burger-14.jpg",
        },
      ],
    };
  },
  created() {
   this.handleClick(tab.index == 0)
   
  },
  
  mounted() {
    //mounted(){console.log("挂载完成");},这是第四个生命周期函数,表示内存中的模板,已经真实的挂载到了页面中, 用户已经可以看到渲染好的页面了
    //https://cn.vuejs.org/guide/essentials/lifecycle.html#lifecycle-diagram
    this.initSticky();
    // this.getScrollTop();
 
  },

  methods: {
    handleClick(tab, event) {
      console.log(tab, event);
      if (tab.index == 0) {
        this.goodList = []

        
        //网络请求1  
       //  alert(0)   
         {
      const _this = this
      Axios.get("http://localhost:8282/goods/goodsList/").then(function (resp) {
        console.log(resp)
        _this.goodList = resp.data.data.data
        _this.baseurl = 'http://localhost:8282/image/goods/'
 for (var k in _this.goodList) {
       var img=[]
        var goodsimg = _this.goodList[k].goodsimg
        for (var i in goodsimg) {
          img.push(_this.baseurl + goodsimg[i].url)
        }
        _this.goodList[k]["urls"]= img
      }

      }
  )}
      } else if (tab.index == 1) {
        //网络请求2   
        //alert(1) 
        this.goodList = []
         
      } else if(tab.index==2){
       //网络请求3
       // alert(2)
        this.goodList=[]
      } else if (tab.index == 3) {
       // alert(3)
         this.goodList=[]
        
      }
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

<style scoped>
@import url("@/assets/css/menuOne.css");
@import url("@/assets/css/index.css");
* {
  margin: 0;
  padding: 0;
}
body {
  min-width: 1140px !important;
}

#list {
     width: 100%;
    padding: 170px 0 120px 0;
}

#list .list {
  width: 1140px;
  margin: 0 auto;
}

.tab_item i {
  display: block;
  padding-bottom: 5px;
}
.iconfont {
  font-size: 36px;
}
#group{
    display: flex;
    justify-content: space-between;
    margin: 20px;
}
#one img {
	width: auto;
	height: 80px;
	/* transform: translateX(50px); */
  
}
#one p{
  margin-top: 30px;
  width: 250px;
  text-align: center;
}
#two h2 {
  text-align: center;
	font-size: 1.8rem;
	margin: 0 0 10px 0;
	line-height: 1.3;
	font-weight: bold;
	text-transform: uppercase;
	font-family: "Oswald", sans-serif;
}
#two p{

  width: 250px;
  text-align: center;
margin: 0 10px;
}
#two p.yellow-color2 {
	padding: 0 14px;
	/* float: left; */
	list-style-type: none;
	line-height: 20px;
	font-family: 'Oswald';
	font-size: 2.0rem;
	font-weight: 900;
	position: relative;
  color: #f7be27;
}

#three h2 {
  text-align: center;
	font-size: 1.8rem;
	margin: 0 0 10px 0;
	line-height: 1.3;
	font-weight: bold;
	text-transform: uppercase;
	font-family: "Oswald", sans-serif;
}
#three p{
  width: 250px;
  text-align: center;
}

#four{
  width: 400px;
  margin-bottom:20px ;
}
#four h2 {
  text-align: center;
	font-size: 1.8rem;
	margin: 0 0 10px 0;
	line-height: 1.3;
	font-weight: bold;
	text-transform: uppercase;
	font-family: "Oswald", sans-serif;
}
#four ul li{
list-style: none;
float:right;
width: 33%;
}
#four ul li img{
width: 90%;
height: 100px;
}
</style>