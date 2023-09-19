<template>
    <el-button type="warning" @click="register" :disabled="!readed">{{ buttonIndex }}</el-button>
</template>

<script setup>
import { ElMessage } from 'element-plus'
import { getCurrentInstance, ref } from 'vue'
import Cookies from 'vue-cookies'
import { useRouter } from 'vue-router'
import { inject } from 'vue'

const props = defineProps(['account','password','readed'])

const buttonIndex = ref("修改密码")

const router = useRouter()

const currentInstance = getCurrentInstance();
const { $axios } = currentInstance.appContext.config.globalProperties;

const {name,money,gameKey,getData} = inject('userData')

const register = async () => {
    buttonIndex.value = "正在修改密码，请稍等。"

    const token = ref("")
    token.value = Cookies.get('token')
    // console.log(token)

    await $axios.post('/change_password', {
        name: props.account,
        newPassword: props.password,
        token: token.value
    })
    .then(function (response) {
        const resp = response.data
        // console.log(resp)
        if(String(resp).includes("token:")){
            // console.log(resp.substr(6,32))
            Cookies.set("token",resp.substr(6,32),40000000)
            ElMessage.success('修改密码成功！')
            //跳转
            router.push('/')
        }
        if(String(resp).includes("token_error")){
            ElMessage.error('令牌错误。')
        }
        if(String(resp).includes("illegal_password")){
            ElMessage.error('密码不符合标准。')
        }
        if(String(resp).includes("wrong_name")){
            ElMessage.error('请正确输入你的游戏ID。')
        }

    })
    .catch(function (error) {
        console.log(error);
    });

    buttonIndex.value = "修改密码"

    getData()
}

</script>
  