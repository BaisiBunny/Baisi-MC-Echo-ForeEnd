<script setup>
import { RouterLink, RouterView } from 'vue-router'

</script>

<template>
  <header>
    <RouterLink to="/">主页</RouterLink>&nbsp;&nbsp;&nbsp;&nbsp;
    <RouterLink to="/shop">商店</RouterLink>&nbsp;&nbsp;&nbsp;&nbsp;
    <RouterLink to="/login">登录</RouterLink>&nbsp;&nbsp;&nbsp;&nbsp;
    <RouterLink to="/register">注册</RouterLink>
    <span class="top_Right">dd</span>
  </header>

  <RouterView style="height: calc(100% - 3.4rem);"/>
</template>

<style scoped>
  header{
    background: linear-gradient(45deg,#f55fa7,#55acf9);
    padding: 1rem;
    /* overflow: hidden;
    z-index: 9999;
    position: fixed;
    width: 100%; */
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
