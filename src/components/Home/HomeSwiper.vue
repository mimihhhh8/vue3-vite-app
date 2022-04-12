<template>
  <!-- 轮播倾斜的背景样式 -->
  <div class="homeswiper">
    <div class="swiperBg" :style="{background:data.bgColor}">
     
    </div>
  </div>
   <a-carousel arrows autoplay :beforeChange="changeFn">
        <template #prevArrow>
          <div class="custom-slick-arrow" style="left: 10px; z-index: 1">
            <left-circle-outlined />
          </div>
        </template>
        <template #nextArrow>
          <div class="custom-slick-arrow" style="right: 10px">
            <right-circle-outlined />
          </div>
        </template>
        <div class="swiper-item" v-for="item,i in props.banner" :key="i">
          <div class="swiper-box">
            <div class="swiper-left">
              <h3>{{item.sub_title}}</h3>
            </div>
              <div class="banner-right">
            <img :src="item.imgsrc" alt="">
          </div>
          </div>
        
        </div>
       
      </a-carousel>
</template>
<script setup>
import { LeftCircleOutlined, RightCircleOutlined } from '@ant-design/icons-vue';
import {reactive,defineProps} from 'vue'
  const props = defineProps({banner:Array})
  const data = reactive({
    bgColor:props.banner[0].bg_color,
  })
  function changeFn(from, to) {
    console.log(from, to);
    data.bgColor = props.banner[to].bg_color
  }
</script>

<style scoped lang="less">
/* For demo */
 .swiperBg {
   position: absolute;
   display: block;
   width: 100%;
   height: 575px;
   background-color: orangered;
   transform-origin: 0 0;//设置倾斜的原点
   transform: skew(0,-8deg);//水平轴不需要倾斜，y轴倾斜-8度 ,按照中间倾斜，应该按照左上角倾斜m
   transition: all 0.5s;
 }

 .swiper-item{
   height: 575px;
   .swiper-box{
     display: flex;
     min-width: 1200px;
     justify-content: center;
     .swiper-left{
       width: 340px;
       padding-right: 100px;
       display: flex;
       flex-direction: column;
       align-items: flex-start;
       margin-top: 100px;
        }
      h3{
        font-size: 30px;
        font-weight:900;
        margin: 0;
      }
      h1{
        font-size: 60px;
        font-weight:900;
        margin: 0;
      }

      .banner-right{
        width: 600px;
        height: 400px;
        margin-top: 45px;
        transform-origin: 0 100%;
        transform: skew(0,-8deg);
        transition: all 0.5s;
        overflow: hidden;
        border-radius: 20px;
        border-bottom-right-radius: 80px;
        img{
            width: 600px;
        height: 400px;
          transform-origin: 0 100%;
          transform: skew(0,8deg);
          border-radius: 20px;
        }
      }
   }
 }
.ant-carousel :deep(.slick-slide) {
  text-align: center;
  height: 575px;
  // height: 160px;
  line-height: 160px;
  // background: #364d79;
  overflow: hidden;
}

.ant-carousel :deep(.slick-arrow.custom-slick-arrow) {
  width: 25px;
  height: 25px;
  font-size: 25px;
  color: #fff;
  background-color: rgba(31, 45, 61, 0.11);
  opacity: 0.3;
  z-index: 1;
}
.ant-carousel :deep(.custom-slick-arrow:before) {
  display: none;
}
.ant-carousel :deep(.custom-slick-arrow:hover) {
  opacity: 0.5;
}

.ant-carousel :deep(.slick-slide h3) {
  color: #fff;
}


</style>