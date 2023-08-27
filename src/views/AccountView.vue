<template>
    <div class="total">
        <h1 style="margin-top: 0;"><br>注册/登录BaisiMC账号</h1>
        <h3>你的游戏ID</h3>
        <p>长度: 2~20 &nbsp; 仅可包含: 
            <span class="blue">A</span>~<span class="blue">Z</span>,<span class="blue">a</span>~<span class="blue">z</span>,<span class="blue">0</span>~<span class="blue">9</span>,<span class="blue">_</span>
        </p>
        <el-input v-model="input_name" placeholder="你的游戏ID，也作为登录网站的账号。" />
        <h3>密码/新密码</h3>
        <p>长度: 2~20 &nbsp; 仅可包含: 
            <span class="blue">A</span>~<span class="blue">Z</span>,<span class="blue">a</span>~<span class="blue">z</span>,<span class="blue">0</span>~<span class="blue">9</span>,<span class="blue">_</span>
        </p>
        <el-input v-model="input_password" placeholder="登录网站的密码，不用于登录游戏。" />
        <p>稍后将生成你的专属IP地址用于登录游戏。</p>
        <RegButton :account="input_name" :password="input_password"/>
        <ChangePassword :account="input_name" :password="input_password"/>
        <LoginButton :account="input_name" :password="input_password"/>
        <!-- <p><br></p> -->
    </div>
</template>

<script setup>
import { ref } from 'vue'
const input_name = ref('')
const input_password = ref('')

import RegButton from '../components/RegButton.vue'
import LoginButton from '../components/LoginButton.vue'
import ChangePassword from '../components/ChangePassword.vue';
</script>

<style scoped>
    .total{
        width: 40%;
        margin: 0 auto;
        /* overflow: scroll; */
    }
    .blue{
        color: dodgerblue;
    }
</style>