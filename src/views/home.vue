<template>
  <div>首页</div>
</template>
<script setup>
import * as api from '@/api/index'
import {onMounted} from 'vue'
onMounted(()=>{
  api.getHomePage().then(res=>{
    console.log(res)
  })
})
</script>
<style scoped>

</style>