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
      sub_title:"子标题",
      imgsrc:"https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fseopic.699pic.com%2Fphoto%2F50078%2F5746.jpg_wh1200.jpg&refer=http%3A%2F%2Fseopic.699pic.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1652336722&t=29f3b6044318491e066e6909b7377fed"
    },
    {
      bg_color:"pink",
       sub_title:"子标题",
      imgsrc:"https://img2.baidu.com/it/u=2354391895,2531488514&fm=253&fmt=auto&app=138&f=JPEG?w=875&h=500"
    },
    {
      bg_color:"green",
       sub_title:"子标题",
      imgsrc:"https://img2.baidu.com/it/u=307190613,1569217473&fm=253&fmt=auto?w=500&h=333"
    },
    {
      bg_color:"orange",
       sub_title:"子标题",
      imgsrc:"https://img2.baidu.com/it/u=850371382,1805426565&fm=26&fmt=auto"
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