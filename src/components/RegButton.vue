<template>
    <el-button type="primary" @click="register" :disabled="!readed">{{ buttonIndex }}</el-button>
</template>

<script setup>
import { ElMessage } from 'element-plus'
import { getCurrentInstance, ref } from 'vue'
import Cookies from 'vue-cookies'
import { useRouter } from 'vue-router'

const props = defineProps(['account','password','readed'])

const buttonIndex = ref("注册")

const currentInstance = getCurrentInstance();
const { $axios } = currentInstance.appContext.config.globalProperties;
const ipaddress = ref('no_ip')

const router = useRouter()

const register = async () => {
    buttonIndex.value = "正在注册，请稍等。"

    await $axios.get('https://api.ipify.org?format=json').then(response => {
      ipaddress.value = response.data.ip;
    })

    $axios.post('/register_account', {
        name: props.account,
        password: props.password,
        reg_ip: ipaddress.value
    })
    .then(function (response) {
        const resp = response.data
        // console.log(resp)
        if(String(resp).includes("token")){
            // console.log(resp.substr(6,32))
            Cookies.set("token",resp.substr(6,32),40000000)
            ElMessage.success('注册成功！')
            //跳转
            router.push('/')
        }
        if(String(resp).includes("wrong_request")){
            ElMessage.error('网页异常，请在QQ群中反馈。')
        }
        if(String(resp).includes("illegal_name")){
            ElMessage.error('玩家ID不符合标准。')
        }
        if(String(resp).includes("name_exists")){
            ElMessage.error('玩家ID已被注册。')
        }
        if(String(resp).includes("illegal_password")){
            ElMessage.error('密码不符合标准。')
        }
        if(String(resp).includes("please_wait")){
            ElMessage.error('请稍后再试。')
        }

    })
    .catch(function (error) {
        console.log(error);
    });

    buttonIndex.value = "注册"
}

</script>
  