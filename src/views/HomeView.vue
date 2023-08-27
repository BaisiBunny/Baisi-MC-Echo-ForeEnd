<script setup>
import { inject } from 'vue'
import { onMounted } from 'vue'

const { name,money,gameKey,getData } = inject('userData')

onMounted(() => {
  getData()
})

</script>

<template>
  <div class="total">
    <p class="theTitle"><br>欢迎来到 <span class="mc_font">BaisiMC</span> !</p>
    <p class="theTitle mc_font">{{ name }}</p>
  </div>
</template>

<style scoped>
  .total{
    background: url("/src/assets/minecraft_home.webp") no-repeat center center;
    background-size: cover;
    background-attachment: fixed;
  }
  .theTitle{
    font-size: 5rem;
    margin: 0;
    text-align: center;
    color: white;
  }

  @font-face {
    font-family: 'McFontRegular';
    src: url('../assets/minecraft_font_regular.otf');
    font-display: auto;
  }
  .mc_font{
    font-family: 'McFontRegular',Arial, Helvetica, sans-serif;
  }
</style>
