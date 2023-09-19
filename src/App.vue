<script setup>
import { RouterLink, RouterView } from 'vue-router'
import { getCurrentInstance, ref } from 'vue'
import { onMounted } from 'vue'
import Cookies from 'vue-cookies'
import { provide } from 'vue'
import { ElNotification } from 'element-plus'
import { useRouter } from 'vue-router'

const router = useRouter()

const mobile = ref(false)

const name = ref('游客')
const money = ref(0)
const gameKey = ref('xxxx')

const currentInstance = getCurrentInstance();
const { $axios } = currentInstance.appContext.config.globalProperties;

const loading = ref("not-loading")

async function getData(){
  const token = ref("")
  token.value = Cookies.get("token")
  // console.log(token)

  loading.value = "is-loading"

  await $axios.post('/get_data', {
      token: token.value
  })
  .then(function (response) {
      const resp = response.data
      // console.log(resp)
      name.value = resp.name
      money.value = resp.money
      gameKey.value = resp.game_key
  })
  .catch(function (error) {
      console.log(error);
  });

  loading.value = "not-loading";
}

const notice = () => {
    ElNotification({
        title: '弹窗广告（10s自动消失）',
        message: '更新了一堆帮助文档。',
        position: 'bottom-right',
        duration: 10000,
    })
}

const isMobile = () => {
	 let flag = navigator.userAgent.match(/(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i)
	 return flag;
}

onMounted(() => {

  getData()

  const timer = setInterval(()=>{
    getData()
  }, 60000)

  mobile.value = isMobile()

  if(!mobile.value){
    notice()
  }
  else{
    router.push('/mobile')
  }
})

provide('userData',{
  name,
  money,
  gameKey,
  getData
})

</script>

<template>
  <header v-show="!mobile">
    <RouterLink to="/">主页</RouterLink>&nbsp;&nbsp;&nbsp;&nbsp;
    <RouterLink to="/shop">商店</RouterLink>&nbsp;&nbsp;&nbsp;&nbsp;
    <RouterLink to="/account">注册/登录</RouterLink>&nbsp;&nbsp;&nbsp;&nbsp;
    <RouterLink to="/address">服务器IP</RouterLink>&nbsp;&nbsp;&nbsp;&nbsp;
    <RouterLink to="/help">帮助</RouterLink>
    
    <span class="top_Right"><el-icon :size="14" @click="getData" :class="loading"><Refresh /></el-icon>&nbsp;&nbsp;&nbsp;玩家: {{ name }}&nbsp;&nbsp;&nbsp;&nbsp;硬币: {{ money }}</span>
    
  </header>

  <RouterView style="height: calc(100% - 3.4rem);"/>
</template>

<style scoped>
  header{
    background: linear-gradient(45deg,#f55fa7,#55acf9);
    padding: 1rem;
  }

  a{
    text-decoration: none;
    color: white;
  }

  .top_Right{
    float: right;
    color: white;
  }

  .router-link-active{
    /* text-decoration: white wavy underline; */
    padding-bottom: 2px;
    border-bottom:2px solid white
  }
</style>