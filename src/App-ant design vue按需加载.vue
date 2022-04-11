
<template>
<!-- 状态管理 （数据管理，多个组件共享的数据放在状态管理中）
1、不同组件使用相同数据
2、vuex  - v4.x-->
<a-button type="primary">点我</a-button>

 
</template>

<script setup>
import ByCar from './views/BuyCar.vue'
</script>


<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

</style>
