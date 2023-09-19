<template>
  <div style="padding: 0 5%;margin: 0 auto; height: 100%; overflow: scroll;" >
    <p class="first_item" id="top"><br></p>
    <h1 class="the_title">BaisiMC在线商店<span style="font-size: 1rem; font-weight: normal;">（硬币仅可通过游戏内获取，不支持 充值/捐赠 获取硬币。）</span></h1>
    <ShopSearch />
    <ShopSort />
    <ShopItems />
    <Pagination />
    <p></p>
  </div>
</template>

<style>
.first_item{
  margin: 0;
}

.the_title{
  margin-top: 0;
  margin-bottom: 0.5rem;
}

</style>

<script setup>
import ShopSearch from '../components/ShopSearch.vue';
import ShopSort from '../components/ShopSort.vue';
import Pagination from '../components/Pagination.vue';
import ShopItems from '../components/ShopItems.vue';
import { ref, provide } from 'vue'
import { getCurrentInstance } from 'vue'
import { onMounted } from 'vue';

const currentInstance = getCurrentInstance();
const { $axios } = currentInstance.appContext.config.globalProperties;

const search_content = ref('')
const search_sort = ref('all')

const pageSize = ref(40)
const currentPage = ref(1)
const totalAmount = ref(1)

const itemsContent = ref({})
const waiting = ref(true)

async function getItems(){
await $axios.post('/get_items', {
    searchContent: search_content.value,
    sort: search_sort.value,
    currentPage: currentPage.value
})
.then(function (response) {
    itemsContent.value = response.data
    // console.log(itemsContent)
    totalAmount.value = itemsContent.value.totalAmount
    currentPage.value = itemsContent.value.currentPage
    // console.log(itemsContent.value.items[0].name)
    // console.log("0"+itemsContent.currentPage)
})
.catch(function (error) {
    console.log(error);
});
waiting.value = false
}

function search(){
  getItems()
  // console.log(itemsContent.value.items.length)
}

provide('search',{search_content,search_sort,search})

provide('pagination',{pageSize,currentPage,totalAmount})

provide('items',{itemsContent,waiting,getItems})

onMounted(()=>{
getItems()
})

const top = document.getElementById('top')

function scrollToTop(){
  const top = document.getElementById('top')
  top.scrollIntoView()
}

provide('toTop',{top,scrollToTop})

</script>
