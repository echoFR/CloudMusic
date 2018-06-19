<template>
<div class="pshow">
    <ShowMore v-show="isShowMore"></ShowMore>
    <ShowList v-show="isShowList" :songlist='songList'></ShowList>
    <div class="pshow-top" @click="swapShow()">
        <transition enter-active-class="animated fadeIn" leave-active-class="animated fadeOut">
            <div class="pshow-top-song" v-show="showImg">
                <div class="pshow-top-songimg" :style='{"animation": (playerStatus?" 25s linear 0s normal none infinite rotate":"none")}'>
                    <img :src="playSong.picUrl">
                    <div class="pshow-top-border"></div>
                </div>
                <div class="pshow-top-songtag">
                    <span @click.stop="stop()">
                        <img src="@/assets/img/shouc2.png">
                    </span>
                    <span @click.stop="stop()">
                        <img src="@/assets/img/down.png">                
                    </span>
                    <span @click.stop="stop()">
                        <img src="@/assets/img/comment.png">
                        <span class="commentCount">{{ playSong.commentCount }}</span>
                    </span>
                    <span @click.stop="more()">
                        <img src="@/assets/img/more.png">
                    </span>            
                </div>
            </div>
        </transition>
        <!-- 歌词 -->
        <transition enter-active-class="animated fadeIn" leave-active-class="animated fadeOut">
            <div class="pshow-top-songword" v-show="!showImg">
                <div class="songword-box">
                    <ul>                          
                        <li>bbbb</li>                        
                        <li>bbbb</li>                                                
                    </ul>
                </div>
            </div>
        </transition>
    </div>
    <div class="play-bottom">
        <!-- 进度条 -->
        <div class="play-bottom-progress">
            <span class="progress-current">02:42</span>
            <div class="progress-box">
                <div class="progress-box-go">
                </div>
                <div class="progress-box-dot">
                    <div class="dot"></div>
                </div>
            </div>
            <span class="progress-total">04:10</span>
        
        </div>
        <!-- 歌曲操作 -->
        <div class="play-bottom-tabBox">
            <div class="play-bottom-tab">
                <!-- 播放顺序 -->
                <div class="tab-order" @click="playOrder()">
                    <img src="@/assets/img/onlysong.png">
                </div>
                <!-- 上一首 -->
                <div class="upsong" @click="upSong()">
                    <img src="@/assets/img/upsong.png">
                </div>
                <!-- 播放/暂停 -->
                <div class="playing" @click="Playing()">
                    <img :src="this.playerStatus?stopBtn:playingBtn" ref="playBtn">
                </div>
                <!-- 下一首 -->
                <div class="downsong" @click="downSong()">
                    <img src="@/assets/img/downsong.png">
                </div>
                <!-- 播放列表 -->
                <div class="playlist" @click="toshowList()">
                    <img src="@/assets/img/list.png">
                </div>
            </div>
        </div>
    </div>
</div>
</template>
<script>
import ShowMore from '@/base/list/list-showmore/ShowMore'
import ShowList from '@/base/showlist/ShowList'
import {mapMutations,mapGetters,mapActions} from 'vuex'
import axios from 'axios'
export default{
    props:['playSong'],
    components:{
        ShowMore,
        ShowList
    },
    data(){
        return{
            showImg: true,
            stopBtn: require('@/assets/img/stop.png'),
            playingBtn: require('@/assets/img/playing.png')
        }
    },
    computed:{
        ...mapGetters([
            'isShowMore',//显示更多
            'isShowList',//显示列表
            'songList',//播放歌曲的歌单列表
            'playerList',//播放顺序的歌单
            'playerIndex',//播放的序号
            'playerStatus',//播放/暂停
            'playorder',// 播放顺序 1 顺序 2单曲 3随机
            'playerUrl',//歌曲url
        ]),
    },
    methods:{
        ...mapMutations([
            'showMore',
            'showList',
            'setplayerUrl',
            'setplayerIndex',
            'setSonglist',
            'setPlayerStatus',
        ]),
        ...mapActions([
            'getSongUrl'
        ]),
        swapShow(){
            this.showImg=!this.showImg;  
        },
        stop(){
            console.log('操作');
        },
        more(){            
            this.showMore();          
        },
        // 播放顺序
        playOrder(){
            console.log('order');
        },
        // 上一首
        upSong(){
            console.log('up');    
        },
        // 下一首
        downSong(){
            console.log(this.playerIndex);
            this.setplayerIndex(parseInt(this.playerIndex)+1);
            console.log(this.playerIndex);           
            console.log('down');  
        },
        // 播放暂停
        Playing(){
            this.setPlayerStatus();
            if(this.playerStatus == true){                    
                this.$refs.playBtn.src= this.stopBtn;                
            }
            else{              
                this.$refs.playBtn.src= this.playingBtn;
            }           
             
        }, 
        // 显示歌单
        toshowList(){
            this.showList();                        
        }
    },
}
</script>

<style>
@import './player-show.css';
.animated {animation-duration: 0.2s;}
</style>

