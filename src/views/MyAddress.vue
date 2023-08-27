<template>
  <div class="total">
    <p style="margin-top: 0;"><br><br></p>
    <p class="title">你的专属服务器地址</p>
    <p class="title mc_font" v-if="!gameKey.includes('xxxx')">{{ gameKey }}.mc.baisi.tech</p>
    <p class="title mc_font" v-else>请注册/登录账号<br>来获取你的专属IP</p>
    <p class="subtitle"><br><br><br>⬆︎ 请勿泄漏此IP，更改密码将刷新此IP</p>
  </div>
</template>

<style scoped>
  .total{
    /* width: 40%; */
    padding: 0% 30%;
    margin: 0 auto;
    background-image: url("src/assets/dirt_background.png");
    background-size: 5rem;
    image-rendering: pixelated;
  }

  .title{
    font-size: 1.2rem;
    /* text-align: center; */
    margin: 0.3rem;
    color: white;
  }

  @font-face {
    font-family: 'McFontRegular';
    src: url('../assets/minecraft_font_regular.otf');
    font-display: auto;
  }
  .mc_font{
    font-family: 'McFontRegular',Arial, Helvetica, sans-serif;
    font-size: 1.5rem;
    background-color: black;
    padding: 0.6rem;
    border-style: solid;
    border-width: 0.2rem;
    border-color: rgb(255, 255, 255);
  }

  .subtitle{
    font-size: 1rem;
    margin: 0.3rem;
    /* text-align: center; */
    color: white;
  }
</style>

<script setup>

import { inject } from 'vue'

const {name,money,gameKey,getData} = inject('userData')

</script>
  