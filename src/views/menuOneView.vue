<template>
    <div>
    <div class="header" ref="nav" :class="{ sticky: isSticky }">
 <div class="nav">
 <div class="logo">
 <img src="http://localhost:8282/image/goods/logo-01.png" alt="" srcset="">
 </div>
 <ul>
 <li v-for="(item,index) in navList" :key="index">{{item.compName}}<span></span></li>
 <li class="yellow-color">789-654-3210</li>
 <li class="basket-ico">
 <a href="">
 <i style="font-size:32px" class="iconfont icon-24gl-bag"></i> <em class="roundpoint">2</em>
 </a>
 </li>
 </ul>
</div>
</div>
 <div id="menu-page">
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
    </div>
</template>

<script>
export default {
    data: function () {
        return {
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
                            compName: 'SHOP',
                            itemName: "分店介绍",
                        },
                        {
                            compName: 'BLOG',
                            itemName: "企业文化",
                        },
                        {
                            compName: 'CONTACTS',
                            itemName: "联系我们 ",
                        },
                    ] 
        }
    },
    methods: {
         
    }
   
}
</script>

<style scoped>
*{margin: 0;padding: 0;}
body{
 min-width: 1140px!important;
}
#menu-page{
 width: 100%;
 background: url('http://localhost:8282/image/goods/menu-page.jpg');
 background-repeat: no-repeat;
 background-position: center center;
 background-size: cover;
 background-attachment: scroll!important;
}
#menu-page .container{
 width: 1140px;
 padding: 170px 0 120px 0;
 margin: 0 auto;
}
#menu-page .container .row{
 display: flex;
 flex-direction: column;
 text-align: center;
 font-family: 'Oswald';
 color: #fff;
 text-transform: uppercase;
}
#menu-page .container .row h2{
 font-size: 4rem;
}
#menu-page .container .row nav ol{
 display: flex;
 flex-direction: row;
 justify-content: center;
 list-style: none;
}
#menu-page .container .row nav ol li.active,#menu-page .container .row  nav ol li a {
 color: #fff;
 font-size: 0.925rem;
 font-weight: 700;
 text-transform: uppercase;
 float: left;
}
#menu-page .container .row nav ol li.active{
 padding-left: 12px;
}

#menu-page .container .row nav ol li.active::before{
 font-size: 0.925rem;
 display: inline-block;
 padding-right: 10px;
 color: #fff;
 content: "/";
}
</style>