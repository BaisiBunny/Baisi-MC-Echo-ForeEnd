<template>
    <el-button type="primary" @click="register" >注册</el-button>
</template>

<script setup>
import { ElMessage } from 'element-plus'

// const open1 = () => {
// ElMessage('this is a message.')
// }
// const open2 = () => {
// ElMessage({
//     message: 'Congrats, this is a success message.',
//     type: 'success',
// })
// }
// const open3 = () => {
// ElMessage({
//     message: 'Warning, this is a warning message.',
//     type: 'warning',
// })
// }
// const open4 = () => {
// ElMessage.error('Oops, this is a error message.')
// }

const props = defineProps(['account','password'])

const register = () => {
    console.log(props.account)
    console.log(props.password)

    ElMessage({
    message: 'Congrats, this is a success message.',
    type: 'success',
    })
}

</script>
  