<template>
<div class="pshow" @click="swapShow()">
    <div class="pshow-top">
        <transition enter-active-class="animated fadeInRight" leave-active-class="animated fadeOutRight">
            <div class="pshow-top-song" v-show="showImg">
                <div class="pshow-top-songimg" :style='{"animation": (playerStatus?" 25s linear 0s normal none infinite rotate":"none")}'>
                    <img :src="playSong.picUrl">
                    <div class="pshow-top-border"></div>
                </div>
                <div class="pshow-top-songtag">
                    <span @click="collect()">
                        <img src="@/assets/img/shouc2.png">
                    </span>
                    <span @click="download()">
                        <img src="@/assets/img/down.png">                
                    </span>
                    <span @click="comment()">
                        <img src="@/assets/img/comment.png">
                        <span class="commentCount">{{ playSong.commentCount }}</span>
                    </span>
                    <span @click="more()">
                        <img src="@/assets/img/more.png">
                    </span>            
                </div>
            </div>
        </transition>
        <!-- 歌词 -->
        <transition enter-active-class="animated fadeInRight" leave-active-class="animated fadeOutRight">
            <div class="pshow-top-songword" v-show="!showImg">
            歌词
            </div>
        </transition>
    </div>
</div>
</template>
<script>
import {mapMutations,mapGetters} from 'vuex'
import stopBubble from '@/assets/js/stopBubble'
import axios from 'axios'
export default{
    props:['playSong'],
    data(){
        return{
            showImg: true,
        }
    },
    computed:{
        ...mapGetters([
            'playerStatus'
        ])
    },
    methods:{
        ...mapMutations([
            'setplayerUrl'
        ]),
        swapShow(){
            console.log('swap');  
        },
        collect(){
           
            console.log('shouc');
            stopBubble();
        },
        download(){
            console.log('下载');
            stopBubble();
        },
        comment(){
            console.log('评论');
            stopBubble();            
        },
        more(){
            console.log('更多');
            stopBubble();            
        }
    }
}
</script>

<style>
@import './player-show.css';
</style>

