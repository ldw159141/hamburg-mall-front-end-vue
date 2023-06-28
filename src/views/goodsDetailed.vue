<template>
  <div>
    <!-- 导航栏开始 -->
    <!-- <div><nav-view /></div> -->
    <!-- 导航栏结束 -->
    <!-- 图片和路径导航开始 -->
    <div id="menu2-page">
      <div class="container">
        <div class="row">
          <nav>
            <ol>
              <li><a href="/">HOME</a></li>
              <li class="active">Menu/ BURGERDETAILED</li>
            </ol>
          </nav>
          <h2>BURGERDETAILED</h2>
        </div>
      </div>
    </div>
    <!-- 图片和路径导航结束 -->
    <div id="product">
                 
      <div class="product">
                       
        <div class="tabs">
                             
          <el-tabs  style="height: 200px">
                                   
            <el-tab-pane v-for="item in good.goodsimg" :key="item">
                      <img :src="item" alt="" />                     
              <template slot="label">
                                               
             <img class="tabs-img" :src="item" alt="" />                  
                     
              </template>
                                      
            </el-tab-pane>
                               
          </el-tabs>
                         
        </div>
                       
        <div class="txt">
                             
          <h2>{{good.title}}</h2>
                             
          <p class="review">4.38 (3 Customer Reviews)</p>
                             
          <h3 class="price"><span>${{good.price}}</span> ${{good.promoPrice}}</h3>
                             
          <p class="description" style="word-wrap: break-word">
             {{ good.description }}
          </p>
                             
          <div class="product-info">
                                   
            <p>Portion Size: <span>390g</span></p>
                                   
            <p>Calories: <span>680Kj</span></p>
                                   
            <p>Allergies: <span>Lactose, Gluten, Mustard</span></p>
                                   
            <p>Tags: <span>Burgers, Fast Food, Testo</span></p>
                               
          </div>
                             
          <input
            class="qty"
            type="number"
            autofocus
            min="1"
            max="20"
            value="1"
          />
                             
          <a  class="cart" v-if="admin!=null" href="/shoppingCart">
            <i class="iconfont icon-24gl-bag"></i> Add to Cart</a>
            <a  class="cart" v-if="admin==null" @click="message">
            <i class="iconfont icon-24gl-bag"></i> Add to Cart</a>

                             
          <ul class="txt-list">
                                   
            <li class="list-item">
                                         
              <p class="p-sm">We accept credit cards or cash to a courier</p>
                                     
            </li>
                                   
            <li class="list-item">
                                         
              <p class="p-sm">Shipping cost is $2 (Free from $35)</p>
                                     
            </li>
                                   
            <li class="list-item">
                                         
              <p class="p-sm">Order before noon for same day dispatch</p>
                                     
            </li>
                               
          </ul>
                         
        </div>
                       
        <div class="description">
                             
          <el-tabs v-model="activeNamePriview">
                                   
            <el-tab-pane label="DESCRIPTION" name="first">
                                         
              <div class="description-con">
                                               
                <p>
                  Donec sodales, nibh vel tristique aliquet, nisi libero
                  suscipit diam, sed tempus ante                                
                      nulla ut purus.Donec dolor magna aliquet suscipit in magna
                  dignissim, porttitor                                    
                  hendrerit. Nuncgravida ultrices a felis eget faucibus.
                  Praesent lorem purus, quis                                    
                  mollis nisilaoreet vitae consequat tortor
                </p>
                                               
                <ul>
                                                     
                  <li>
                    <span>
                      sodales sapien undo euismod purus blandit velna vitae
                      auctora congue</span
                    >
                                                            magna tempor sapien
                    eget gravida laoreet turpis urna augue, viverra aaugue eget,
                                                            dictum tempor diam
                    pulvinar consectetur purus efficitur ipsum primisin cubilia
                                                            laoreet augue donec
                  </li>
                                                     
                  <li>
                    <span>
                      Nemo ipsam egestas volute turpis dolores ut aliquamquaerat
                      sodalessapien congue</span
                    >
                                                            augue egestas
                    volutpat egestas magna suscipit egestas magna ipsumvitae    
                                                        purusefficitur ipsum
                    primis in cubilia undo pretium a purus pretium ligula
                  </li>
                                                 
                </ul>
                                               
                <p>
                  Aliqum mullam blandit tempor sapien gravida donec ipsum, at
                  porta justo. Velna                                    
                  vitaeauctor congue magnanihil impedit ligula risus. Mauris
                  donec ociis et magnis                                    
                  sapien sagittis sapien semcongue tempor gravida donec enim
                  ipsum porta justo integer                                    
                  odio velna a purusefficitur ipsum primis in cubilia laoreet
                  augue egestas luctus                                     donec
                  purus andblandit sodales mpedit ligula risus. Mauris donec
                  ociis et magnis                                     sapien
                </p>
                                           
              </div>
                                     
            </el-tab-pane>
                                   
            <el-tab-pane label="REVIEWS (3)" name="second">
                                         
              <div class="review-con">
                                               
                <div class="photo">
                                                     
                  <img
                    src="http://localhost:8282/image/goods/review-author-1.jpg"
                    alt=""
                  />
                                                 
                </div>
                                               
                <div class="review-info">
                                                     
                  <h5 class="h5-xs">Sean McMarthy</h5>
                                                     
                  <span class="grey-color">December 4, 2020</span>              
                                       
                  <p>
                    Etiam sapien sem at sagittis congue an augue massa varius
                    egestas a suscipit                                        
                    magna tempus                                         an
                    aliquet porta vitae auctor aliqum mullam blandit tempor
                    sapien gravida congue                                      
                      eros magna                                         nihil
                    impedit tempor. Semper lacus cursus porta lectus enim ipsum
                                                       
                  </p>
                                                 
                </div>
                                           
              </div>
                                         
              <div class="review-con">
                                               
                <div class="photo">
                                                     
                  <img
                    src="http://localhost:8282/image/goods/review-author-2.jpg"
                    alt=""
                  />
                                                 
                </div>
                                               
                <div class="review-info">
                                                     
                  <h5 class="h5-xs">Sean McMarthy</h5>
                                                     
                  <span class="grey-color">December 4, 2020</span>              
                                       
                  <p>
                    Etiam sapien sem at sagittis congue an augue massa varius
                    egestas a suscipit                                        
                    magna tempus                                         an
                    aliquet porta vitae auctor aliqum mullam blandit tempor
                    sapien gravida congue                                      
                      eros magna                                         nihil
                    impedit tempor. Semper lacus cursus porta lectus enim ipsum
                                                       
                  </p>
                                                 
                </div>
                                           
              </div>
                                         
              <div class="review-con">
                                               
                <div class="photo">
                                                     
                  <img
                    src="http://localhost:8282/image/goods/review-author-3.jpg"
                    alt=""
                  />
                                                 
                </div>
                                               
                <div class="review-info">
                                                     
                  <h5 class="h5-xs">Sean McMarthy</h5>
                                                     
                  <span class="grey-color">December 4, 2020</span>              
                                       
                  <p>
                    Etiam sapien sem at sagittis congue an augue massa varius
                    egestas a suscipit                                        
                    magna tempus                                         an
                    aliquet porta vitae auctor aliqum mullam blandit tempor
                    sapien gravida congue                                      
                      eros magna                                         nihil
                    impedit tempor. Semper lacus cursus porta lectus enim ipsum
                                                       
                  </p>
                                                 
                </div>
                                           
              </div>
                                     
            </el-tab-pane>
                               
          </el-tabs>
                         
        </div>
                   
      </div>
             
    </div>
    <!-- 底部页脚开始 -->
    <!-- <div><foot-view /></div> -->
    <!-- 底部页脚结束 -->
  </div>
</template>
<script>
import Axios from 'axios';
import ElementUI from 'element-ui';

export default {

  data: function () {
    return {
      admin:null,
      good: [
        // {
        //   code: "0201",
        //   title: "CRISPY CHICKEN",
        //   description:
        //     "Chicken breast, chilli sauce, tomatoes, pickles, coleslaw",
        //   price: 11.9,
        //   promoPrice: 9.9,
        //   viewer: {
        //     url: [
        //       "http://localhost:8282/image/goods/burger-11.jpg",
        //       "http://localhost:8282/image/goods/burger-12.jpg",
        //       "http://localhost:8282/image/goods/burger-13.jpg",
        //     ],
         
        //   },
        // },
      ],
    };
  },

  created() {
          this.getGoods()
          let admin = JSON.parse(window.localStorage.getItem('userInfo'))
          this.admin = admin
            
        },
        methods: {
        getGoods(){
            const _this=this
            Axios.get('http://localhost:8282/goodsimg/selectByGoodsId/'+this.$route.query.id).then(function (resp) {
              
              _this.good = resp.data.data
              _this.baseurl = 'http://localhost:8282/image/goods/'
          })
          },


        message(){
          ElementUI.Message.error("请先登录")
        }
        },


};
</script>
<style scoped>
/*奇怪了这里按理说不引入也会被其他引入页面的污染，但是更新之后没有污染，需要引入*/
@import url("@/assets/css/menuTwo.css");
@import url("@/assets/css/goodsDetailed.css");
</style>