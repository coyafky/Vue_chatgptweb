
<!--  -->


<template>
    <div>
        <el-form :rules ="rules" :model="loginform" class="loginRoot">
            <el-form-item label="用户名" prop="username">
                <el-input v-model="loginform.username" placeholder="请输入用户名"></el-input>
            </el-form-item>
            <el-form-item label="密码" prop="password">
                <el-input v-model="loginform.password" placeholder="请输入密码"></el-input>
            </el-form-item>
            <el-form-item>
                <el-button type="primary" @click="login">登录</el-button>

            </el-form-item>

        </el-form>
    </div>
</template>

<script>
    export default {
        name: "login",
        data(){
            return{
                loginform:{
                    username:"",
                    password:""
                },
                rules:{
                    username:[
                        {required:true,message:"请输入用户名",trigger:"blur"}
                    ],
                    password:[
                        {required:true,message:"请输入密码",trigger:"blur"}
                    ]
                }
            }
        },
        
        
    }


</script>


<style  scoped>
    .loginRoot{


        width: 400px;
        margin: 100px auto;
        /*border: 1px solid red;*/


    }

</style>