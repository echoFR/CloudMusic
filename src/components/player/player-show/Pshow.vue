<template>
<div class="pshow">
    <ShowMore v-show="isShowMore"></ShowMore>
    <div class="pshow-top" @click="swapShow()">
        <transition enter-active-class="animated fadeInRight" leave-active-class="animated fadeOutRight">
            <div class="pshow-top-song" v-show="showImg">
                <div class="pshow-top-songimg" :style='{"animation": (playerStatus?" 25s linear 0s normal none infinite rotate":"none")}'>
                    <img :src="playSong.picUrl">
                    <div class="pshow-top-border"></div>
                </div>
                <div class="pshow-top-songtag">
                    <span @click="getstopBubble()">
                        <img src="@/assets/img/shouc2.png">
                    </span>
                    <span @click="getstopBubble()">
                        <img src="@/assets/img/down.png">                
                    </span>
                    <span @click="getstopBubble()">
                        <img src="@/assets/img/comment.png">
                        <span class="commentCount">{{ playSong.commentCount }}</span>
                    </span>
                    <span @click="getstopBubble(),more()">
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
import ShowMore from '@/base/list/list-showmore/ShowMore'
import {mapMutations,mapGetters} from 'vuex'
import stopBubble from '@/assets/js/stopBubble'
import axios from 'axios'
export default{
    props:['playSong'],
    components:{
        ShowMore
    },
    data(){
        return{
            showImg: true,
        }
    },
    computed:{
        ...mapGetters([
            'playerStatus',
            'isShowMore'
        ])
    },
    methods:{
        ...mapMutations([
            'showMore',
            'setplayerUrl'
        ]),
        swapShow(){
            console.log('swap');  
        },
        getstopBubble(){
            stopBubble();
        },
        more(){            
            this.showMore();          
        }
    },
}
</script>

<style>
@import './player-show.css';
</style>

