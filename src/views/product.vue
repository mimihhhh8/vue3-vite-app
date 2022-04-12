<template>
  <div class="loading" v-show="data.isLoading">
    <Loading />
  </div>
  <div class="product" v-show="!data.isLoading">
    <div class="prod-list" :class="{hidden:store.state.isFullScreen}">
      <h1><SketchOutlined></SketchOutlined> 产品推荐</h1>
    </div>
    <div class="scene-list" :class="{hidden:store.state.isFullScreen}">
      <h3><RadarChartOutlined></RadarChartOutlined> 切换使用场景</h3>
    </div>
  </div>
</template>
<script setup>
import Loading from "@/components/Loading.vue"
import * as api from "@/api/index.js"
import {SketchOutlined,RadarChartOutlined} from '@ant-design/icons-vue'
import { onMounted,reactive } from 'vue'
import {useStore} from "vuex"
const store = useStore()
const data = reactive({
  products:[],
  isLoading:true,
})
onMounted(async ()=>{
  let result = await api.getProducts()
  console.log(result, 'result')
  data.isLoading = false
})

// 监听滚动事件
window.addEventListener('mousewheel',(e)=>{
  console.log(e.deltaY, 'e.deltaY')
  if(e.deltaY>0){
   store.commit('setFullScreen',true)
  }
  if(e.deltaY<0){
   store.commit('setFullScreen',false)
  }
})


</script>
<style scoped lang="less">
.prod-list{
  width:300px;
  height: 100vh;
  padding: 60px 0 0;
  position: fixed;
  z-index: 100000;
  transition: all 0.5s;//渐变的过程
  background-color: rgba(95, 217, 238, 0.8);
  left: 0;
  top:0;
}
.prod-list.hidden{
 transform: translate(-100%,0);
}
.scene-list{
  width:300px;
  height: 100vh;
  padding: 60px 0 0;
  position: fixed;
  z-index: 100000;
  transition: all 0.5s;//渐变的过程
  background-color: rgba(86, 190, 239, 0.8);
  right: 0;
  top:0;
}
.scene-list.hidden{
 transform: translate(100%,0);
}
</style>