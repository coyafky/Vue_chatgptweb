import './assets/main.css'

import { createApp } from 'vue'
import ElemnetPlus from 'element-plus'
import 'element-plus/lib/theme-chalk/index.css'
import App from './App.vue'
const app = createApp(App);
app.use(ElemnetPlus)
app.use(router)
app.mount('#app')