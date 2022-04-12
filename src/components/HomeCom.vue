<template>
  <div class="homepage">
    <HomeSwiper></HomeSwiper>
  </div>
</template>
<script setup>
import HomeSwiper from "@/components/Home/HomeSwiper.vue"
import * as api from "@/api/index"
import {reactive} from "vue"

let result = await api.getHomePage()

const hero = reactive(result)
</script>
<style lang="less" scoped>
.homepage {
 padding-top: 46px;
 height: 575px;
 position: relative;

}
</style>