<template>
<!-- 使用全局状态管理文件 -->
  购物车
  <h1>商品数量{{store.state.count}}</h1>
  <button @click="addGoods">添加商品数量</button>
  <h1>
    商品总价格{{store.getters.totalPrice}}
  </h1>
  <button @click="addGoodsAsync">异步添加商品数量</button>
</template>
<script setup>
import {useStore} from 'vuex'
let store  = useStore()

function addGoods(){
  //同步用commit
  store.commit('increment',2)

}
// 异步添加
function addGoodsAsync(){
  // 异步用dispatch
  // setTimeout(()=>{
    store.dispatch('asyncAdd',10)
  // },1000)
}
</script>
