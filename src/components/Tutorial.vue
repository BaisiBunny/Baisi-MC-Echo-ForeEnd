<template>
    <div>
        <p style="text-align: center; font-size: 2rem; color: white;">
            <br>
            <el-button type="primary" plain size="large" @click="jumpToAccount">注册/登录</el-button>
            &nbsp;&nbsp;➜&nbsp;
            <el-button type="primary" plain size="large" @click="jumpToAddress">查看你的专属服务器IP</el-button>
            &nbsp;&nbsp;➜&nbsp;
            <el-button type="primary" plain size="large" @click="jumpToAddress">进入游戏!</el-button>
        </p>
    </div>
</template>

<script setup>

import { useRouter } from 'vue-router'

const router = useRouter()

function jumpToAccount(){
    router.push('/account')
}

function jumpToAddress(){
    router.push('/address')
}

</script>

<style scoped>

</style>