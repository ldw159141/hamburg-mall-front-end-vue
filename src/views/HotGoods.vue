<template>
  <div>
    <section id="hot">
      <div class="hotcontainer">
        <div class="row">
          <h2>热卖商品</h2>
          <p>
            食物之美好，不能简单地用价格贵贱来衡量，包含在这些美好当中的回忆和生活，
            对一个人来说，是更加宝贵的人生财富。
          </p>
        </div>
        <div class="row">
          <div class="item" v-for="(item, index) in hotslist" :key="index">
            <div v-if="(index + 1) % 2 != 0">
              <div class="pic">
                <el-image
                  :src="baseurl+item.url"
                  ref="previewImg"
                  :preview-src-list="item.urls"  
                >
                </el-image>
                <span class="item-code">{{ item.coder }}</span>
                <span class="item-zoom-ico" @click="onPreview">
                  <i class="iconfont icon-quanping_o"></i>
                </span>
              </div>
              <div class="txt">
                <a class="collect" href=""
                  ><span class="iconfont icon-changyongtubiao-fuben-68"></span
                ></a>
                <h5 class="title">{{item.title}}</h5>
                <p>{{item.description}}</p>
                <h5 class="price">${{item.price}}</h5>
                <h5 class="promo-price">${{item.promoPrice}}</h5>
                <a class="cart">
                  <i style="font-size: 14px" class="iconfont icon-24gl-bag"></i>
                  Add to Cart</a
                >
              </div>
            </div>
            <div v-else>
              <div class="txt">
                <a class="collect" href=""
                  ><span class="iconfont icon-changyongtubiao-fuben-68"></span
                ></a>
                <h5 class="title">{{item.title}}</h5>
                <p>{{item.description}}</p>
                <h5 class="price">${{item.price}}</h5>
                <h5 class="promo-price">${{item.promoPrice}}</h5>
                <a class="cart">
                  <i style="font-size: 14px" class="iconfont icon-24gl-bag"></i>
                  Add to Cart</a
                >
              </div>
              <div class="pic">
                <el-image
                  :src="baseurl+item.url"
                  ref="previewImg"
                  :preview-src-list="item.urls" 
                >
                <!-- 这样写的最大缺点是如果有任何一个数据中的img不是2个，就会显示报错 -->
                </el-image>
                <span class="item-code">{{item.coder}}</span>
                <span class="item-zoom-ico" @click="onPreview">
                  <i class="iconfont icon-quanping_o"></i>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script >
import  { getBaseUrl,requestUtil,getRespBaseUrl } from '@/util/requestUtil'; 
import Axios from 'axios';
export default {
  name: "hotgoods",
  data: function () {
    return {
      baseurl: '',
     
      hotslist: {
      }
        
        
        // {
        //   id:'',
        //   coder: '',
        //   title: '',
        //   description: '',
        //   price: '',
        //   promoPrice: '',
        //   stock:'',
        //       viewer: {
        //     url: '',
        //     srcList: [
        //       require("../assets/images/burger-12.jpg"),
        //       require("../assets/images/burger-13.jpg"),
        //     ],
        //   },
        //   typeId:''
        // },
        // {
        //   code: "0201",
        //   title: "CRISPY CHICKEN",
        //   description:
        //     "Chicken breast, chilli sauce, tomatoes, pickles, coleslaw",
        //   price: 11.9,
        //   promoPrice: 9.9,
        //   viewer: {
        //     url: require("../assets/images/burger-11.jpg"),
        //     srcList: [
        //       require("../assets/images/burger-12.jpg"),
        //       require("../assets/images/burger-13.jpg"),
        //     ],
        //   },
        //     },
        
        
      
    };
  },
// http://localhost:8282/image/goods/burger-11.jpg

   created() {
     this.getHotGoodsList()
   
  },
  methods: {
    
    getHotGoodsList() {

     const _this = this;
    Axios.get("http://localhost:8282/goods/hotGoodsList/").then(function (resp) {
      console.log(resp)
      _this.hotslist = resp.data.data.data
      _this.baseurl = 'http://localhost:8282/image/goods/'
      for (var k in _this.hotslist) {
       var img=[]
        var goodsimg = _this.hotslist[k].goodsimg
        for (var i in goodsimg) {
          img.push(_this.baseurl + goodsimg[i].url)
        }
        _this.hotslist[k]["urls"]= img
      }

      console.log(_this.hotslist)
    });


//requestUtil使用promiss回调函数没操作成功，直接使用axios复杂了会导致回调地狱
      // requestUtil({url: "/goods/findGoods/"}).then(
      //   result=>{
      //     const baseurl = getBaseUrl();
      //     _this.hotslist = result.data;
      //      _this.baseurl=baseurl+'/image/goods/'
      //   })

        
    }
  
  }
};
</script>

<style scoped>
@import url("@/assets/css/hotgoods.css");
</style>
