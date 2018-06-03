<template>
    <div class="swiper">
            <swiper :options="swiperOption">
                <swiper-slide>
                    <img src="@/assets/img/songs.jpg">
                </swiper-slide>
                <swiper-slide>
                    <img src="@/assets/img/songsbg.jpg">
                </swiper-slide>
                <swiper-slide>
                    <img src="@/assets/img/song2.png">
                </swiper-slide>
                <swiper-slide>
                    <img src="@/assets/img/songsbg.jpg">
                </swiper-slide>
                <swiper-slide>
                    <img src="@/assets/img/song2.png">
                </swiper-slide>
                <swiper-slide>
                    <img src="@/assets/img/songsbg.jpg">
                </swiper-slide>
                <!-- 小圆点 -->
                <div class="swiper-pagination"  slot="pagination"></div>
            </swiper>
    </div>
</template>
<script>
import { swiper, swiperSlide } from 'vue-awesome-swiper'
export default{
    data(){
        return{
            // Swiper 配置
            swiperOption: {
                direction: 'horizontal',   
                autoplay: { // 播放时间  
                    delay: 1000,
                    disableOnInteraction: false
                }, 
                pagination: {// 分页器 下面的小圆点
                    el: '.swiper-pagination',
                },
                loop: true, // 播放速度
                speed: 1000,
            },
        }
    },
    components:{
        swiper,
        swiperSlide
    }
}    
</script>
<style>
.swiper{
    width: 100%;
}
.swiper-container {
    width: 100%;
    height: 17rem;
}  
.swiper-slide{
    width: 100%;
    height: 17rem;
    text-align: center;
}
.swiper-slide img{
    width: 100%;  
    max-height: 100%;
    height: auto; 
    text-align: center;
}
</style>

