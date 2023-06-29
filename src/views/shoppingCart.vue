<template>
    <div>
          <!-- 图片和路径导航开始 -->
    <div id="menu1-page">
      <div class="container">
        <div class="row">
          <nav>
            <ol>
              <li><a href="/">HOME</a></li>
              <li class="active">shoppingCart</li>
            </ol>
          </nav>
          <h2>ShoppingCart</h2>
        </div>
      </div>
    </div>
    <!-- 图片和路径导航结束 -->
<!-- <p style="font-size: 20ch; text-align:center;">这里是购物车页面</p> -->

 <!-- 用户数据表单开始 -->
 <el-table
      ref="multipleTable"
      :data="tableData"
      tooltip-effect="dark"
      style="width: 80%; margin: auto;"
      @selection-change="handleSelectionChange"
    >
      <el-table-column type="selection" width="55"> </el-table-column>

      <el-table-column prop="title" label="商品" width="160">
      </el-table-column>
      <el-table-column prop="price" label="原价" width="160">
      </el-table-column>
      <el-table-column prop="promoPrice" label="现价" width="160">
      </el-table-column>
      <el-table-column  prop="url" label="图片" width="130" align="center">
          <template slot-scope="scope">
          <el-image style="width: 100%; height: 100px" 
          :src="baseurl+scope.row.url" 
          :preview-src-list="scope.row.goodsimg" 
          :key="scope.row.id">
            <div slot="error" class="image-slot">
               <i class="el-icon-picture-outline"></i>
            </div>
          </el-image>
        </template>
                
      </el-table-column> 
       <el-table-column prop="total" label="总价" width="160">
      </el-table-column>
 
    
      <el-table-column label="操作">
        <template slot-scope="scope">
          <el-button size="mini" @click="handleEdit(scope.row)">编辑</el-button>
          <el-button size="mini" type="danger" @click="handleDelete(scope.row)"
            >删除</el-button
          >
        </template>
      </el-table-column>
    </el-table>
    <!-- 用户数据表单结束 -->
    <div>
      <el-row>
    <el-button type="primary" style="float: right;margin-right: 200px;margin-top:10px;">提交订单</el-button>
  </el-row>
  </div>
  <!-- ----------------------banner-------------- -->
  <div id="banner">
  <div class="banner">
<div class="txt">
<h4>Download mobile App and</h4><h2>save up to 20%</h2>
<p>Aliquam a augue suscipit，luctus neque purus ipsum and neque dolor primis libero
tempus,
blandit varius</p>
<div class="stores">
<img class="appstore" src="http://localhost:8282/image/goods/appstore.png">
<img class="appstore" src="http://localhost:8282/image/goods/googleplay.png">
</div>
</div>
<div class="pic">
<img src="http://localhost:8282/image/goods/e-shop.png">
</div>
</div>
</div>
 <!-- ----------------------banner-------------- -->
    </div>
</template>

<script>
import Axios from 'axios';
export default {
    data:function() {
        return {
          baseurl:'',
            tableData: [
        
        ],
        };
    },
  
    created(){
this.list()
    },
    mounted() {
        
    },

    methods: {
        list(){
            Axios.get("http://localhost:8282/goods/newHotGoodsList").then(resp=>{
               this.tableData=resp.data.data.data
               this.baseurl = 'http://localhost:8282/image/goods/'
              
               for (var k in this.tableData) {
       var tot=[]
       tot=this.tableData[k].promoPrice  *3  
        this.tableData[k]["total"]= tot
      }


            })
        }
    },
};
</script>

<style scoped>
@import url("@/assets/css/menuOne.css");

/*       banner      */

#banner{
  width: 100%;
  height: 486px;
  margin: 40px 0 o o;
background-color: #f7be27;
font-family: 'Oswald';
color: #642f21;
}

#banner .banner{
  width: 1140px;
  height: 486px;
  margin: 0 auto;
  display: flex;
}
#banner .banner >div{
  flex: 0 0 50%;
  display: flex;
flex-direction: column;
justify-content: center;
}

#banner .banner .txt h2,#banner .banner .txt h4{
  text-transform: uppercase;
  margin: 6px o;
}

#banner .banner .txt .stores img{
width: 163px;
height: 50px;
}
#banner .banner .txt h2{
font-size: 4.5rem;
font-weight: 900;
text-shadow: 1px 1px 0 #642f21 ;
-webkit-text-stroke: 2px #642f21;
margin-bottom: 10px;
}
#banner .banner .txt h4{
  font-size: 2.375rem;
}
#banner .banner .txt .store img{
float: left;
}
#banner .banner .txt p{
  font-size: 1.2em;
  padding-right: 104px;
  margin: 0 0 25px;
font-family: sans-serif;
font-weight: 100;}

#banner .banner .pic{ 
  position: relative;
}

#banner .banner .pic{position: relative;}

#banner .banner .pic img{
  position: absolute;
  bottom: 0;
  width: 100%;
}
</style>