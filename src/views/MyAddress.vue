<template>
  <div class="total">
    <p style="margin-top: 0;"><br><br></p>
    <p class="title">你的专属服务器地址：<br>任选其一，延迟过高请更换其他线路。</p>
    <p class="title mc_font" v-if="!gameKey.includes('xxxx')">{{ gameKey }}.mc.line1.baisi.tech:35963</p>
    <p class="title mc_font" v-if="!gameKey.includes('xxxx')">{{ gameKey }}.mc.line2.baisi.tech:11080</p>
    <p class="title mc_font" v-else>请先 注册/登录</p>
    <p class="subtitle"><br><br>⬆ 请勿泄漏此IP，修改密码将刷新此IP<br>服务器未开启正版验证，此IP作为验证玩家身份的唯一凭证。</p>
  </div>
</template>

<style scoped>
  .total{
    /* width: 40%; */
    padding: 0% 30%;
    margin: 0 auto;
    background-image: url("/background/dirt_background.png");
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
    src: url('/webFiles/minecraft_font_regular.otf');
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
  