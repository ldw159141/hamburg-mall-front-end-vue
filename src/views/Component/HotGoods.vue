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
                <span class="item-zoom-ico">
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

                </el-image>
                <span class="item-code">{{item.coder}}</span>
                <!-- <span class="item-zoom-ico" @click="onPreview"> -->
                  <span class="item-zoom-ico" >
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
import Axios from 'axios';
export default {
  name: "hotgoods",
  data: function () {
    return {

     
      hotslist: []
      
        

        
        
      
    };
  },

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


        
    }
  
  }
};
</script>

<style scoped>
@import url("@/assets/css/hotgoods.css");
</style>
