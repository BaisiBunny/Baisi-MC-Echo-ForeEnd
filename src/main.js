import { createApp } from 'vue'

import App from './App.vue'
import router from './router'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'

import axios from 'axios'

import * as ElementPlusIconsVue from '@element-plus/icons-vue'

// import VueCookies from 'vue-cookies'

const app = createApp(App)

app.use(router)
app.use(ElementPlus)

axios.defaults.baseURL="https://backend.mc.baisi.tech"
app.config.globalProperties.$axios = axios

for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
    app.component(key, component)
  }

// app.config.globalProperties.$cookies = VueCookies

app.mount('#app')
