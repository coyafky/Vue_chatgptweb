<template>
    <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" :ellipsis="false" @select="handleSelect">



    </el-menu>

    <el-menu-item index="0">
        LOGO
        <!-- 这个引入logo文件 -->
    </el-menu-item>

    <el-menu-item index="1">
        <router-link to="/">首页</router-link>
    </el-menu-item>
    <el-menu-item index="2">
        <router-link to="Login">登录</router-link>

    </el-menu-item>

    <el-menu-item index="3">

        <router-link to="History">历史问答记录</router-link>
    </el-menu-item>
    <el-menu-item index="4">
        <router-link to="Setting">设置</router-link>
        <el-submenu index="4-1">
            <template #title>
                <el-button>
                    <!-- 改变主题颜色 -->
                    <i class="el-icon-s-custom"></i>
                </el-button>
            </template>
        </el-submenu>
    </el-menu-item>



    <div class="contaimer">

    </div>


    <el-input v-model="input" placeholder="请输入内容" />
    <el-button type="primary" @click="handleClick">

        <el-i></el-i>
    </el-button>

</template>


<script setup >

    

</script>