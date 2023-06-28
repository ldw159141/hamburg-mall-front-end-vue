<template>
 <!-- 页脚部分开始 -->
    <div>
      
  
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

    

<div id="FooterBox"><h2>这里是页脚部分，所有商品数据从后端接口获取</h2>© LDW <br><h4>作者：刘德伟</h4><h4>联系方式:15914165802</h4></div>
    </div>
       <!-- 页脚部分结束 -->
</template>

<script">

</script>

<style scoped>
#FooterBox {
  background-color: #fff;
  line-height: 25px;
  font-size: 13px;
  text-align: center;
  color: #333;
  padding: 20px 0px 20px 0px;
  margin-bottom: 0px;
  border: 1px #ccc solid;
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