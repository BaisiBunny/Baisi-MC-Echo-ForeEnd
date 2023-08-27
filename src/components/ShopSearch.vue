<template>
    <div class="mt-4">
      <el-input v-model="search_content" placeholder="请输入商品名称，留空则查找全部。" @keyup.enter.native="search">
        <template #append>
            <el-button @click="search">搜索&nbsp;&nbsp;<el-icon><Search /></el-icon></el-button>
        </template>
      </el-input>
      <p style="margin-top: 0.8rem; margin-bottom: -0.2rem;">购买时请确保<span class="important">玩家游戏内在线</span>，点击图标即可购买。</p>
    </div>
</template>
  
<script setup>
import { ref } from 'vue'
import { Search } from '@element-plus/icons-vue'
import { inject } from 'vue';

const {search_content,search_sort,search} = inject('search')

</script>

<style>
  .important{
    /* font-weight: bold; */
    color: dodgerblue;
  }
</style>
  