<template>
    <transition name="showlist" enter-active-class="animated fadeInUp" leave-active-class="animated fadeOutDown">
        <div class="mask" @click="hideList()">
            <div class="show-listmore" id="showListMore" @click="stopBubble">
                <div class="list-more-top">
                    <div class="list-more-top-title">
                        <span class="songs-name">歌曲：</span>
                        <span style="color:#666">该歌曲开通会员即可畅享</span>
                    </div>
                    <span class="tovip">开通VIP</span>
                </div>
                <div class="list-more-bottom">
                    <ul class="list-more-bottom-ul">
                        <li>
                            歌名-歌手
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </transition>
</template>
<script>
import stopBubble from '@/assets/js/stopBubble'
import {mapGetters,mapActions} from 'vuex'
export default{
    methods:{
        // 隐藏list
        hideList(){  
            this.$store.commit('hideList');
        },
        // 防止冒泡
        stopBubble(){
            stopBubble();
        }
    }
}
</script>
<style>
@import './showlist.css';
.animated {animation-duration: 0.3s;}
</style>