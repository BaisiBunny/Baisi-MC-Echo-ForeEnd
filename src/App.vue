<script setup>
import { RouterLink, RouterView } from 'vue-router'
import { getCurrentInstance, ref } from 'vue'
import { onMounted } from 'vue'
import Cookies from 'vue-cookies'
import { provide } from 'vue'

const name = ref('游客')
const money = ref(0)
const gameKey = ref('xxxx')

const currentInstance = getCurrentInstance();
const { $axios } = currentInstance.appContext.config.globalProperties;

function getData(){
  const token = Cookies.get("token")
  // console.log(token)

  $axios.post('/get_data', {
      token: token
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
}

onMounted(() => {
  getData()
})

provide('userData',{
  name,
  money,
  gameKey,
  getData
})

</script>

<template>
  <header>
    <RouterLink to="/">主页</RouterLink>&nbsp;&nbsp;&nbsp;&nbsp;
    <RouterLink to="/shop">商店</RouterLink>&nbsp;&nbsp;&nbsp;&nbsp;
    <RouterLink to="/account">注册/登录</RouterLink>
    
    <span class="top_Right">玩家: {{ name }}&nbsp;&nbsp;&nbsp;&nbsp;硬币: {{ money }}</span>
    
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
