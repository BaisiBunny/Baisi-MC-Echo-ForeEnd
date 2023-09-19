<script setup>
import { inject } from 'vue'
import { onMounted } from 'vue'
import Tutorial from '../components/Tutorial.vue';

const { name,money,gameKey,getData } = inject('userData')

onMounted(() => {
  getData()
})

</script>

<template>
  <div class="total">
    <p class="theTitle subtitle"><br><br>有问题/聊天 请加QQ群：864206168（无需审核）<br><br></p>
    <p class="theTitle">欢迎来到 <span class="mc_font">BaisiMC</span> !</p>
    <p class="theTitle mc_font">{{ name }}</p>
    <Tutorial />
  </div>
</template>

<style scoped>
  .total{
    background: url("/background/minecraft_home.webp") no-repeat center center;
    background-size: cover;
    background-attachment: fixed;
  }
  .theTitle{
    font-size: 5rem;
    margin: 0;
    text-align: center;
    color: white;
  }

  .subtitle{
    font-size: 1.5rem;
  }

  @font-face {
    font-family: 'McFontRegular';
    src: url('/webFiles/minecraft_font_regular.otf');
    font-display: auto;
  }
  .mc_font{
    font-family: 'McFontRegular',Arial, Helvetica, sans-serif;
  }
</style>
