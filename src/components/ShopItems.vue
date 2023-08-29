<template>
    <div class="container">
        <!-- <button @click="bgetItems">bt</button> -->
        <div class="item" v-for="item in itemsContent.items" v-show="!itemsContent.isEmpty" @click="buy(item.id)">
            <img :src="'/items/'+item.picture" class="pic">
            <p class="itemText">{{item.name}}<span class="gray">×</span>{{ item.amount }}</p>
            <p class="itemText">{{ item.price }} 硬币</p>
        </div>
        <div v-show="itemsContent.isEmpty">
            <h2>没有符合搜索条件的商品。</h2>
        </div>
    </div>
</template>

<script setup>
import { inject, ref, onMounted, onBeforeMount } from 'vue';
import { getCurrentInstance } from 'vue'
import Cookies from 'vue-cookies'
import { ElMessage } from 'element-plus'

const {itemsContent,getItems} = inject('items')
const {name,money,gameKey,getData} = inject('userData')

const currentInstance = getCurrentInstance();
const { $axios } = currentInstance.appContext.config.globalProperties;

async function buy(id){
    const token = Cookies.get("token")
    // console.log(id)
    await $axios.post('/buy', {
        token: token,
        id: id
    })
    .then(function (response) {
        // console.log(response)
        const resp = response.data
        if(String(resp).includes("token_error")){
            ElMessage.error('请先登录')
        }
        if(String(resp).includes("not_enough_money")){
            ElMessage.error('硬币好像不是很够')
        }
        if(String(resp).includes("success")){
            ElMessage.success('已在游戏内发货')
        }
    })
    .catch(function (error) {
        console.log(error);
    });
    getData()
}


// const picture = ref('stone.webp')

// onBeforeMount(async ()=>{
//     await getItems()
//     console.log(itemsContent.value.isEmpty)
// })

// const tmp = ref([
//     {
//     name: 'da',
//     ki: 'dad'
//     },
//     {
//     name: 'da1',
//     ki: 'dad1'
//     }
// ])

// function bgetItems(){
//     console.log(itemsContent.value.items)
//     console.log(tmp.value)
// }


</script>

<style scoped>
    .container{
        /* background-color: bisque; */
        display: flex;
        width: 100%;
        flex-wrap: wrap;
        margin-top: 0.1rem;
    }

    .item{
        padding: 1.25%;
        width: 10%;
        /* min-width: 16%; */
        /* background-color: #7fffd4; */
        border-radius: 1.5rem;
        transition: .4s;
        /* image-rendering: pixelated; */
    }
    .item:hover{
        background-color: #efefef;
        transition: .4s;
    }
    .item:active{
        background-color: #d5d5d5;
        transition: .1s;
    }

    .pic{
        width: 100%;
        margin: 1.25% 0%;
    }

    .itemText{
        text-align: center;
        margin: 0;
    }

    .gray{
        color: #b2b2b2;
    }

</style>