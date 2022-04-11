
<template>
  <img alt="Vue logo" src="./assets/logo.png" />
  <h1>{{reMsg}}</h1>
  <h1>{{reMsg}}</h1>
  <h1>{{reMsg}}</h1>
  <button @click="setReMsg">修改计算属性</button>
</template>

<script setup>
import { ref ,computed} from '@vue/reactivity'
let msg = ref("你好呀")


// const reMsg = computed(function(){
//   return msg.value.split("").reverse().join("")
// })

//模板中有三个h1标签，在computed中只走一次，会获取缓存的内容
const reMsg = computed({
  get(){
    return msg.value.split("").reverse().join("")
  },
  set(val){
    msg.value = val.split("").reverse().join("")
  } 
}) 

function setReMsg(){
  msg.value = "王老"
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
</style>
