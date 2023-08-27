<template>
    <div style="margin-top: 10px">
      <el-radio-group v-model="search_sort"  @change="search">
        <el-radio label="all">全部</el-radio>
        <el-radio label="stone">石头</el-radio>
        <el-radio label="colorful">彩色</el-radio>
        <el-radio label="redstone">红石</el-radio>
      </el-radio-group>
    </div>
</template>
  
<script setup>
import { ref } from 'vue'
import { inject } from 'vue';

const {search_content,search_sort,search} = inject('search')
</script>
  