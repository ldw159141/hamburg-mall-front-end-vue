<template>
    <div>
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
<p style="font-size: 20ch; text-align:center;">这里是购物车页面</p>

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
</style>