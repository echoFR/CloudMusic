<template>
    <div class="mask" @click="hideMore()">
         <div class="show-listmore" id="showListMore" @click="stopBubble">
            <div class="list-more-top">
                <div class="list-more-top-title">
                    <span class="songs-name">歌曲：{{song.name}}</span>
                    <span style="color:#666">该歌曲开通会员即可畅享</span>
                </div>
                <span class="tovip">开通VIP</span>
            </div>
            <div class="list-more-bottom">
                <ul class="list-more-bottom-ul">
                    <li><img src="@/assets/img/play2.png" align="absmiddle">下一首播放</li>
                    <li><img src="@/assets/img/shouc.png" align="absmiddle">收藏到歌单</li>
                    <li> <img src="@/assets/img/down2.png" align="absmiddle">下载</li>
                    <li><img src="@/assets/img/pingl.png" align="absmiddle">评论 ({{ song.commentCount }}) </li>
                    <li><img src="@/assets/img/share2.png" align="absmiddle">分享</li>
                    <li><img src="@/assets/img/singer.png" align="absmiddle">歌手：{{ song.singer }}</li>
                    <li><img src="@/assets/img/zhuanj.png" align="absmiddle">专辑：{{ song.album }}</li>
                </ul>
            </div>
        </div>
    </div>
</template>
<script>
import stopBubble from '@/assets/js/stopBubble'
import {mapGetters,mapActions} from 'vuex'
export default{
    methods:{
        // 隐藏遮罩
        hideMore(){  
            this.$store.commit('hideMore');
        },
        // 防止冒泡
        stopBubble(){
            stopBubble();
        }
    },
    computed:{
        ...mapGetters([
            'song'
        ]),
    }
}
</script>
<style>
@import './showmore.css'
</style>


