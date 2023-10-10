import {createRouter, createWebHistory} from 'vue-router'

// 引入 vue 的 home 界面 和 login 页面

import Home from '../views/Home.vue'
import Login from '../views/Login.vue'

// 建立路由表

const routes = [
    {
        path:'',
        component:Home,

    },

    {

    }
]

const router = createRouter({
    history:createWebHistory(),
    routes
})

export default router 