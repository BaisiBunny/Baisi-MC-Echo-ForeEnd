<template>
    <el-button type="success" @click="register" >{{ buttonIndex }}</el-button>
</template>

<script setup>
import { ElMessage } from 'element-plus'
import { getCurrentInstance, ref } from 'vue'
import Cookies from 'vue-cookies'
import { useRouter } from 'vue-router'

const props = defineProps(['account','password'])

const buttonIndex = ref("登录")

const router = useRouter()

const currentInstance = getCurrentInstance();
const { $axios } = currentInstance.appContext.config.globalProperties;

const register = () => {
    buttonIndex.value = "正在登录，请稍等。"

    $axios.post('/login', {
        name: props.account,
        password: props.password,
    })
    .then(function (response) {
        const resp = response.data
        // console.log(resp)
        if(String(resp).includes("token")){
            // console.log(resp.substr(6,32))
            Cookies.set("token",resp.substr(6,32),40000000)
            ElMessage.success('登录成功！')
            //跳转
            router.push('/')
        }
        if(String(resp).includes("illegal_name")){
            ElMessage.error('玩家ID不符合标准。')
        }
        if(String(resp).includes("illegal_password")){
            ElMessage.error('密码不符合标准。')
        }
        if(String(resp).includes("user_not_exist")){
            ElMessage.error('该用户不存在。')
        }
        if(String(resp).includes("wrong_password")){
            ElMessage.error('密码错误。')
        }
        if(String(resp).includes("wrong_name_case")){
            ElMessage.error('账号大小写错误。')
        }

    })
    .catch(function (error) {
        console.log(error);
    });

    buttonIndex.value = "登录"
}

</script>
  