<template>
<!-- Suspense是内置组件，有两个template插槽的，第一个default代表异步请求完成后，显示的模板内容。fallback代表在加载中时，显示的模板内容。 -->
 <suspense>
   <template #fallback>
     <div class="loading"><Loading></Loading></div>
   </template>
   <template #default>
     <h1>
       <HomeAsync></HomeAsync>
     </h1>
   </template>
 </suspense>
</template>
<script setup>
import Loading from "@/components/loading.vue"
import {onMounted,defineAsyncComponent} from 'vue'
const HomeAsync = defineAsyncComponent(()=>import('@/components/HomeCom.vue'))
onMounted(()=>{
  // api.getHomePage().then(res=>{
  //   console.log(res)
  // })
})
</script>
<style scoped>

</style>