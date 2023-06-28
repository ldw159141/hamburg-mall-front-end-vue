<template>
    <div class="a">
    <div class="login-container">
        <el-form :model="ruleForm" :rules="rules"
                 status-icon
                 ref="ruleForm"
                 label-position="left"
                 label-width="0px"
                 class="demo-ruleForm login-page">
            <h3 class="title">BURGER登录</h3>
            <el-form-item prop="username">
                <el-input type="text"
                          v-model="ruleForm.username"
                          placeholder="用户名"
                ></el-input>
            </el-form-item>
            <el-form-item prop="password">
                <el-input type="password"
                          v-model="ruleForm.password"
                          placeholder="密码"
                ></el-input>
            </el-form-item>
            <el-form-item>
                <el-radio v-model="type" label="user">用  户</el-radio>
                <el-radio style="position: relative;left: 80px" v-model="type" label="storeAdmin">会  员</el-radio>
            </el-form-item>
            <el-form-item style="width:100%;">
                <el-button type="primary" style="width:100%;" @click="handleSubmit"  >登录</el-button>
            </el-form-item>
        </el-form>
    </div>
</div>
</template>

<script>
import Axios from 'axios';
    export default {
        name: "Login",
        data(){
            return{
              
                ruleForm: {
                    username: 'ldw',
                    password: 'ldw'
                },
                type: 'user',
                rules: {
                    username: [{required: true, message: '请输入用户名', trigger: 'blur'}],
                    password: [{required: true, message: '请输入密码', trigger: 'blur'}]
                }
            }
        },
        methods: {
            handleSubmit(){
                this.$refs.ruleForm.validate((valid) => {
                    if (valid) {
                       
                       if(this.type == 'user'){
                           
                           Axios.post('http://localhost:8282/login',this.ruleForm).then(res=> {
                                if (res.data.code === 200) {
                                    this.$message({
                                    message: "登录成功，正在跳转",
                                    type:"success"
                                    })
                                    let userInfo = res.data
                                    localStorage.setItem("userInfo", JSON.stringify(userInfo))
                                    localStorage.setItem("token",res.token)

                                 


                                    
                                    setTimeout(() => {
                                       // this.$router.push({ path:"/" })
                                       const curr = localStorage.getItem('preRoute')
                                         if (curr == null) {   
                                            this.$router.push({ path:"/" })    
                                         } else {
                                            localStorage.removeItem("preRoute")
                                            this.$router.push({ path: curr });
                                             }


                            },2000)    
                                }
                            })
                        }
                    } else {
                        console.log("error");
                        return false;
                    }

                })
            },
    
        }
    };
</script>

<style scoped>
    .a{
    padding: 0;
    margin: 0;
    overflow:hidden;
	z-index: 0;
    height: 100%;   
    background: url("http://localhost:8282/image/goods/slide-1.jpg");
    background-size:100%
    } 
    .login-container {
        width: 100%;
        height: 100%;
        
    }
    .login-page {
        -webkit-border-radius: 5px;
        border-radius: 5px;
        margin: 180px auto;
        width: 350px;
        padding: 35px 35px 15px;
        background: #fff;
        border: 1px solid #eaeaea;
        box-shadow: 0 0 25px #cac6c6;
    }
    label.el-checkbox.rememberme {
        margin: 0px 0px 15px;
        text-align: left;
    }
    .title{
        text-align: center;
    }
</style>