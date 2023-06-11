<template>
  <div>
    <section id="promo" class="promo-100">
      <div class="container">
        <div class="left">
          <h4>Get Your Free</h4>
          <h4>Cheese Fries</h4>
          <a href="#" class="btn btn-red tra-red-hover">Learn More</a>
        </div>
        <div class="right">
          <h4>Crispy Chicken</h4>
          <h4>Burger Is Back!</h4>
          <a href="#" class="btn btn-red tra-red-hover">Learn More</a>
        </div>
      </div>
    </section>
    <section id="menu" class="menu-100-70">
      <div class="container">
        <div class="row">
          <div class="item" v-for="(item, index) in goodList" :key="index" >
            <div class="pic">
             
              <el-image :src="baseurl+item.url" 
              ref="" 
              :preview-src-list="item.urls">
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
</template>

<script>
import Axios from 'axios';



export default {

  name: "goods",
  data: function () {
    return {
        goodList: [
        ],
      
    }

  },
  created() {
     this.getGoodsList()
  
  },
  methods: {
    getGoodsList() {
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
  )},
  select(item){
                this.$router.push('/goodsDetailed?id='+item.id)
            },
  
  }
  
};
</script>

<style scoped>
@import url("@/assets/css/promo.css");
/* 最外层容器 100% */


</style>

<!-- <style src="../assets/css/promo.css" >
</style> -->