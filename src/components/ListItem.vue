<template>
  <h1 @click="sendRead">
    <span>{{props.num}}</span>
    <span>-------</span>
    <span>{{props.title}}</span><br>
    <span>{{props.article&&props.article.num}}</span>
    <span>---------------------</span>
    <span>{{props.article&&props.article.title}}</span>
  </h1>
</template>
<script setup>
// let num = 1
// let  title = '天气不错' 

// 定义接收属性
import { defineProps ,defineEmits} from 'vue'
const props = defineProps({
  num: Number,
  title: String,
  article:Object
})

// 自定义事件，子组件触发父组件的事件
const emit = defineEmits(['finishRead','reading'])
function sendRead(){
  // 子组件传递之（第二个参数）
  emit('finishRead',"已经阅读")
}
</script>
