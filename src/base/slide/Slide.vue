<template>
    <div class="swiper">
            <swiper :options="swiperOption">
                <Loading :top='top'></Loading>
                <swiper-slide v-for="(item,index) in banners" :key="index">
                    <img :src="item.picUrl">
                </swiper-slide>
                <!-- 小圆点 -->
                <div class="swiper-pagination"  slot="pagination"></div>
            </swiper>
    </div>
</template>
<script>
import Loading from '@/base/loading/Loading'
import axios from 'axios'
import { swiper, swiperSlide } from 'vue-awesome-swiper'
import {api} from '@/assets/js/config'
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
                loop: true, 
                speed: 1000,
            },
            banners:[],
            top:'5rem'
        }
    },
    components:{
        swiper,
        swiperSlide,
        Loading
    },
    mounted(){
        axios.get(`${api}/banner`).then((res)=>{
            this.banners=res.data.banners;
        }).catch((err)=>{
            console.log(err);
        })
    },
}    
</script>
<style>
.swiper{
    width: 100%;
}
.swiper-container {
    width: 100%;
    height: 1.5rem;
}  
.swiper-slide{
    width: 100%;
    height: 1.5rem;
    text-align: center;
}
.swiper-slide img{
    width: 100%;  
    max-height: 100%;
    height: auto; 
    text-align: center;
}
</style>

