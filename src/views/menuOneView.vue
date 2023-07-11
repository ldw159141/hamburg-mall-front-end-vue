<template>
  
  
  <div>
    <!-- 导航栏开始 -->
    <!-- <nav-view></nav-view> -->
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
            <div class="pic" v-if="item.urls.length>1">
             
                <el-image  :src="baseurl+item.url" 
              ref="" 
              :preview-src-list="item.urls"> 
              </el-image>
              <span class="item-code">Code: {{item.coder}}</span>
              <span class="item-zoom-ico">
                <i class="iconfont icon-quanping_o"></i>
              </span>
            </div>
            <div class="pic" v-if="item.goodsimg==null || item.goodsimg == '' || item.goodsimg ==[]">
             
              <el-image  :src="baseurl+item.url" 
              ref="" 
              :preview-src-list="[baseurl+item.url]">
              </el-image>
           <span class="item-code">Code: {{item.coder}}</span>
           <span class="item-zoom-ico">
             <i class="iconfont icon-quanping_o"></i>
           </span>
         </div>
            <div class="txt" @click="select(item)">
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
   <!-- <div><foot-view/></div> -->
  </div>
</template>

<script>
import '../assets/fonts/fontpisa/iconfont'
import Axios from 'axios';
export default {
  data: function () {
    return {
      activeName:"0",
      goodList: [ ],

      subjectList: [
        {
          name:"0",
          title: "burger",
          icon: "icon-Hamburger",
        //  img: "http://localhost:8282/image/goods/burger-13.jpg",
        },
        {
          name:"1",
          title: "PIZZA",
          icon: "icon-pisa1",
        //  img: "http://localhost:8282/image/goods/burger-12.jpg",
        },
        {
          name:"2",
          title: "SALADS",
          icon: "icon-cola",
       //   img: "http://localhost:8282/image/goods/burger-15.jpg",
        },
        {
          name:"3",
          title: "cookie",
          icon: "icon-doughnut",
        //  img: "http://localhost:8282/image/goods/burger-14.jpg",
        },
      ],
    };
  },
  created() {
   this.handleClick(tab.index == 0)
 
   
  },
  
  mounted() {
   
 
  },

  methods: {
    handleClick(tab, event) {
      console.log(tab, event);
      if (tab.index == 0) {
        this.goodList = []
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
        this.goodList = []
        {
      const _this = this
      Axios.get("http://localhost:8282/goods/pizzaList/").then(function (resp) {
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
      } else if(tab.index==2){
       //网络请求3
       // alert(2)
        this.goodList=[]
      } else if (tab.index == 3) {
       // alert(3)
         this.goodList=[]
        
      }
    },

    select(item){
                this.$router.push('/goodsDetailed?id='+item.id)
            },
  

  },


};
</script>

<style scoped>
@import url("../assets/fonts/fontpisa/iconfont.css");
@import url("@/assets/css/menuOne.css");
@import url("@/assets/css/nav.css");
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

</style>