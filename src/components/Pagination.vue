<template>
    <div>
        <el-pagination 
            layout="prev, pager, next" 
            :page-size="pageSize" 
            :total="totalAmount" 
            v-model:current-page="currentPage" 
            :hide-on-single-page="true"
            style="justify-content: center;"
            background
        />
    </div>
</template>

<style scoped>

</style>

<script setup>
import { ref } from 'vue'
import { watch } from 'vue';
import { inject } from 'vue';


const {pageSize,currentPage,totalAmount} = inject('pagination')
const {top,scrollToTop} = inject('toTop')
const {itemsContent,getItems} = inject('items')

watch(currentPage,async (newPage,oldPage)=>{
    // console.log(currentPage.value)
    getItems()
    scrollToTop()
})

</script>
  