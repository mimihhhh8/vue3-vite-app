
<template>

 <ListItem :num="item.num" :title="item.title" v-for="(item,index) in articleList" :key="index"  @finishRead="changTitle(index,$event)"></ListItem>

 <h1>列表循环</h1>
</template>

<script setup>
// 写一个自定义事件，子元素告诉父元素修改数据
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

function changTitle(index,$event){
  // 告诉父元素添加已经阅读的消息
   if(articleList[index].title.indexOf($event)==-1){
    articleList[index].title += $event
   }
    
}
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
