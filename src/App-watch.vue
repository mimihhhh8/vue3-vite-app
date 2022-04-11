
<template>
  <img alt="Vue logo" src="./assets/logo.png" />
  <h1>{{reMsg}}</h1>
  <h1>{{reMsg}}</h1>
  <h1>{{reMsg}}</h1>
  <button @click="setReMsg">修改计算属性</button>
  <button @click="setName">修改名字</button>
</template>

<script setup>
import { ref ,computed,watch, reactive} from 'vue'
let msg = ref("你好呀")

let user = reactive({
  name: "王老",
  age: 18
})


function setReMsg(){
  msg.value = "王老"
}

// 变量变化的监听
watch(msg,function(newVal,oldVal){
  console.log(newVal)
})

// 监听响应式对象的某个属性
watch(()=>user.name,(newVal,oldVal)=>{
  console.log(newVal)
})

function setName(){
  user.name = "小黑"
  msg.value = "小白"
}

// 既要监听msg，又要监听name
watch([msg,()=>user.name],(newVal,oldVal)=>{
  console.log(newVal,oldVal)
})
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
