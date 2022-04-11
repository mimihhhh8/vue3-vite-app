
<template>
 <ListItem :num="article.num" :title="article.title"></ListItem>
 <!-- prop=>property 属性 -->
 <ListItem :num="item.num" :title="item.title" v-for="(item,index) in articleList" :key="index"></ListItem>
 <ListItem :article="item" v-for="(item,index) in articleList" :key="index"></ListItem>
 <h1>列表循环</h1>
</template>

<script setup>
import { reactive } from 'vue'
import ListItem from './components/ListItem.vue'

let article = reactive({
  title: '天气不错(父组件的值)',
  num: 1
})

let articleList = reactive([
  {
    title: '天气不错(父组件的值)',
    num: 1
  },
  {
    title: '天气不错(父组件的值)',
    num: 2
  },
  {
    title: '天气不错(父组件的值)',
    num: 3
  }
])
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
.box{
  width: 200px;
  height: 200px;
  background: pink;
}
</style>
