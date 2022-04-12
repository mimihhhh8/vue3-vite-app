<template>
  <div class="homepage">
    <HomeSwiper :banner="data.banner"></HomeSwiper>
  </div>
</template>
<script setup>
import HomeSwiper from "@/components/Home/HomeSwiper.vue"
import * as api from "@/api/index"
import {reactive} from "vue"

let result = await api.getHomePage()
const data = reactive({
  banner:[
    {
      bg_color:"#364d79",
    },
    {
      bg_color:"pink",
    },
    {
      bg_color:"green",
    },
    {
      bg_color:"orange",
    },
  ],
})
console.log(result)
const hero = reactive(result)
</script>
<style lang="less" scoped>
.homepage {
 padding-top: 46px;
 height: 575px;
 position: relative;

}
</style>