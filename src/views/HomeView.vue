<template>
  <div>
    <!-- 导航栏开始 -->
    <!-- <div><nav-view /></div> -->
    <!-- 导航栏结束 -->
    <!-- 轮播图开始 -->
    <div class="block" id="rotation">
      <el-carousel trigger="click" height="700px">
        <el-carousel-item v-for="item in slideList" :key="item.index">
          <div
            class="small"
            :style="{ 'background-image': `url(${baseurl + item.url})` }"
          >
            <!-- <div><img :src="item.url" width="100%" height="100%" alt=""> -->
            <div class="rowindex">
              <p v-html="'<h2>' + item.title + '</h2>'">    </p>
              <p
                v-html="
                  '<h3>Only' +
                  '<span class=' +
                  'yellow' +
                  '>$' +
                  item.price +
                  '</span>' +
                  '<h3>'
                "
              ></p>

              <!-- <p>{{ item.tit1 }}</p>
            <p>{{ item.tit2 }}</p>//这样写直接出标签  -->
            </div>
          </div>
        </el-carousel-item>
      </el-carousel>
    </div>
<!-- 轮播图结束 -->
   <div><goods-view></goods-view></div>
   <div><hot-goods></hot-goods></div>
  <!-- <div><router-view/></div> -->
  </div>
</template>

<script>
import Axios from "axios";
import goodsView from '../views/Component/goodsView';

import HotGoods from '../views/Component/HotGoods';




export default {
  components: { goodsView, HotGoods },
  
  name: "index",
  data: function () {
    return {
      baseurl: "",
      slideList: [
       
      ],
    };
  },

  created() {
    this.getSlideList();
  },

  mounted() {},

  methods: {
    getSlideList() {
      const _this = this;
      Axios.get("http://localhost:8282/goods/findSlide/").then(function (resp) {
        //console.log(resp);
        _this.slideList = resp.data.data.data;
        _this.baseurl = "http://localhost:8282/image/goods/";
       // console.log(_this.slideList);
      });

      //    requestUtil({url: "/goods/findSlide/"}).then(
      // function(result){
      //   const baseurl = getBaseUrl();
      //        _this.slideList = result.data.data;
      //   console.log(result.data)
      //    _this.baseurl=baseurl+'/image/goods/'
      // })
    },
  },
};
</script>
 <!-- 第一种会导致引入不带scoped标签全局样式污染 -->
<style scoped>
@import url("@/assets/css/silde.css");

@import url("@/assets/css/nav.css");
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

