
<template>
<!-- 使用的 Vite，你可以使用 unplugin-vue-components
 来进行按需加载。但是此插件无法处理非组件模块，如 message，这种组件需要手动加载：x-->
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
