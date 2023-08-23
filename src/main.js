import { createApp } from 'vue'

import App from './App.vue'
import router from './router'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'

import axios from 'axios'

// import VueCookies from 'vue-cookies'

const app = createApp(App)

app.use(router)
app.use(ElementPlus)

axios.defaults.baseURL="http://localhost:8080"
app.config.globalProperties.$axios = axios

// app.config.globalProperties.$cookies = VueCookies

app.mount('#app')
