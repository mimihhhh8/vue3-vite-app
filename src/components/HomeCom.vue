<template>
  <div class="homepage">
    <HomeSwiper :banner="data.banner"></HomeSwiper>
    <div class="live">
      <h1>乐享生活100+</h1>
      <div class="live-list">
        <div class="live-item" v-for="item,index in data.sports" :key="index">
          <div class="live-btn">
            <img :src="item.menuthumnail" alt="">
            <h3>很好看</h3>
          </div>
        </div>
      </div>
      <a-button type="primary" @click="router.push('/product')">立即享受生活</a-button>
    </div>
  </div>
</template>
<script setup>
import HomeSwiper from "@/components/Home/HomeSwiper.vue"
import * as api from "@/api/index"
import {reactive} from "vue"
import {useRouter} from "vue-router"
let result = await api.getHomePage()
const router = useRouter()
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
  sports:[
    {
      menuthumnail:"https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fb-ssl.duitang.com%2Fuploads%2Fitem%2F201505%2F15%2F20150515230626_3KscM.thumb.700_0.gif&refer=http%3A%2F%2Fb-ssl.duitang.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1652340991&t=71657a41be9a1ecc55142aaca4860759",
    },
    {
      menuthumnail:"https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fb-ssl.duitang.com%2Fuploads%2Fitem%2F201505%2F15%2F20150515230626_3KscM.thumb.700_0.gif&refer=http%3A%2F%2Fb-ssl.duitang.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1652340991&t=71657a41be9a1ecc55142aaca4860759",
    },
    {
      menuthumnail:"https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fb-ssl.duitang.com%2Fuploads%2Fitem%2F201505%2F15%2F20150515230626_3KscM.thumb.700_0.gif&refer=http%3A%2F%2Fb-ssl.duitang.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1652340991&t=71657a41be9a1ecc55142aaca4860759",
    },
    {
      menuthumnail:"https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fb-ssl.duitang.com%2Fuploads%2Fitem%2F201505%2F15%2F20150515230626_3KscM.thumb.700_0.gif&refer=http%3A%2F%2Fb-ssl.duitang.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1652340991&t=71657a41be9a1ecc55142aaca4860759",
    },
    {
      menuthumnail:"https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fb-ssl.duitang.com%2Fuploads%2Fitem%2F201505%2F15%2F20150515230626_3KscM.thumb.700_0.gif&refer=http%3A%2F%2Fb-ssl.duitang.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1652340991&t=71657a41be9a1ecc55142aaca4860759",
    },
    {
      menuthumnail:"https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fb-ssl.duitang.com%2Fuploads%2Fitem%2F201505%2F15%2F20150515230626_3KscM.thumb.700_0.gif&refer=http%3A%2F%2Fb-ssl.duitang.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1652340991&t=71657a41be9a1ecc55142aaca4860759",
    },
    {
      menuthumnail:"https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fb-ssl.duitang.com%2Fuploads%2Fitem%2F201505%2F15%2F20150515230626_3KscM.thumb.700_0.gif&refer=http%3A%2F%2Fb-ssl.duitang.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1652340991&t=71657a41be9a1ecc55142aaca4860759",
    },
    {
      menuthumnail:"https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fb-ssl.duitang.com%2Fuploads%2Fitem%2F201505%2F15%2F20150515230626_3KscM.thumb.700_0.gif&refer=http%3A%2F%2Fb-ssl.duitang.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1652340991&t=71657a41be9a1ecc55142aaca4860759",
    },
    {
      menuthumnail:"https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fb-ssl.duitang.com%2Fuploads%2Fitem%2F201505%2F15%2F20150515230626_3KscM.thumb.700_0.gif&refer=http%3A%2F%2Fb-ssl.duitang.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1652340991&t=71657a41be9a1ecc55142aaca4860759",
    },
    {
      menuthumnail:"https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fb-ssl.duitang.com%2Fuploads%2Fitem%2F201505%2F15%2F20150515230626_3KscM.thumb.700_0.gif&refer=http%3A%2F%2Fb-ssl.duitang.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1652340991&t=71657a41be9a1ecc55142aaca4860759",
    },
  ]
})
// console.log(result)
// const hero = reactive(result)
</script>
<style lang="less" scoped>
.homepage {
 padding-top: 46px;
 height: 575px;
 position: relative;
.live{
  width: 1200px;
  margin: 40px auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding-bottom: 40px;
  h1{
    font-size: 30px;
  }
  .live-list{
      display: flex;
      flex-wrap: wrap;
      height: 240px;
    .live-item{
      width: 240px;
      // margin: 10px;
    }
    .live-btn{
      display: flex;
      height: 72px;
      width: 200px;
      background: #fff;
      border-radius: 8px 8px 25px 8px;
      box-shadow: 5px 5px 5px #ccc;
      align-items: center;
      justify-content: center;
      position: relative;
      img{
        position: absolute;
        width:80px;
        height: 80px;
        left: -15px;
        top: -15px;
      }
      h3{
        font-size: 18px;
        color: #333;
        margin-left: 10px;
      }
    }
  }
}
}
</style>       