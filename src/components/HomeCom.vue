<template>
  <!-- <h1>首页</h1> -->
  <div></div>
</template>
<script setup>
import * as api from "@/api/index"
import {reactive} from "vue"

let result = await api.getHomePage()

const hero = reactive(result)
</script>
<style scoped>

</style>