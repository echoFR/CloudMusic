<template>
<div class="player">
    <div class="pheader">
        <span @click="goBack()" class="pheader-goback">
            <img src="@/assets/img/goback.png">
        </span>
        <span class="pheader-song">
            <div class="pheader-title">{{ currentSong.name }}</div>
            <div class="pheader-singer">{{ currentSong.singer }}</div>
        </span>
        <span class="pheader-share">
            <img src="@/assets/img/share.png">
        </span>
    </div>
    <div class="pshow">
        <ShowMore v-show="isShowMore"></ShowMore>
        <ShowList v-show="isShowList" :songlist='songList'></ShowList>
        <div class="pshow-top" @click="swapShow()">
            <transition enter-active-class="animated fadeIn" leave-active-class="animated fadeOut">
                <div class="pshow-top-song" v-show="showImg">
                    <div class="pshow-top-songimg" :style='{"animation": (playerStatus?" 25s linear 0s normal none infinite rotate":"none")}'>
                        <img :src="currentSong.picUrl">
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
                            <span class="commentCount">{{ comment.commentCount }}</span>
                        </span>
                        <span @click.stop="more()">
                            <img src="@/assets/img/more.png">
                        </span>            
                    </div>
                </div>
            </transition>
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
            <!-- 进度 -->
            <div class="play-bottom-progress">
                <span class="progress-current">{{format(currentTime)}}</span>
                <div class="progress-box" ref="progressBox">
                    <div class="progress-box-go" ref="progressGo">
                    </div>
                    <!-- 拖动按钮 -->
                    <div class="progress-box-dot" ref="progressDot" @touchstart.prevent='touchStart' @touchmove.prevent='touchMove' @touchend='touchEnd'>
                        <div class="dot" ref="dot"></div>
                    </div>
                </div>
                <span class="progress-total">{{format(duration)}}</span>
            </div>
            <!-- 播放按钮 -->
            <div class="play-bottom-tabBox">
                <div class="play-bottom-tab">
                    <div class="tab-order" @click="playOrder()">
                        <img src="@/assets/img/onlysong.png">
                    </div>
                    <div class="upsong" @click="upSong()">
                        <img src="@/assets/img/upsong.png">
                    </div>
                    <div class="playing" @click="Playing()">
                        <img :src="playerBtn" ref="playBtn">
                    </div>
                    <div class="downsong" @click="downSong()">
                        <img src="@/assets/img/downsong.png">
                    </div>
                    <div class="playlist" @click="toshowList()">
                        <img src="@/assets/img/list.png">
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="player-mask"></div> 
    <div class="player-maskbg" :style='{backgroundImage: "url(" + currentSong.picUrl + ")"}'></div>
    <div class="player-maskbg2"></div>
</div>
</template>

<script>
import ShowMore from '@/base/list/list-showmore/ShowMore'
import ShowList from '@/base/showlist/ShowList'
import axios from 'axios'
import {mapMutations,mapGetters,mapActions} from 'vuex'
export default{
    name: 'player',
    data(){
        return{
            showImg: true,
            stopBtn: require('@/assets/img/stop.png'),
            playingBtn: require('@/assets/img/playing.png'),
            comment:{
                commentCount: 0,
                comments:[],
                hotComments: []
            },
            percent: 0,

        }
    },
    components:{
        ShowMore,
        ShowList
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
            'playerWord',
            'songReady',
            'duration',
            'currentTime'            
        ]),
        upsongList(){
            //刷新后 歌单没有数据
            if(this.songList.length==0){
                let songlist=JSON.parse(localStorage.getItem('songlist'));
                this.setSonglist(songlist);
            }
            return this.songList;
        },
        upplayerIndex(){
            if(this.playerIndex==-1){
                this.setplayerIndex(localStorage.getItem('songindex'));
            }
            return this.playerIndex;
        },
        currentSong(){
            let currentSong={
                album: '',
                picUrl: '',
                name: '',
                id: -1,
                singer: '',
                commentCount: 0,
                comments: [],
                hotComments: []
            };
            currentSong.album=this.upsongList[this.upplayerIndex].al.name;//专辑名
            currentSong.picUrl=this.upsongList[this.upplayerIndex].al.picUrl;//图片
            currentSong.name=this.upsongList[this.upplayerIndex].name;//歌名 
            currentSong.id=this.upsongList[this.upplayerIndex].id;   //id
            currentSong.singer=this.upsongList[this.upplayerIndex].ar[0].name;                 
            if(this.upsongList[this.upplayerIndex].ar[1]){
                currentSong.singer+=' / '+this.upsongList[this.upplayerIndex].ar[1].name
            }
            axios.get('http://localhost:3000/comment/music',{
                    params: {
                        id: currentSong.id
                    }
                }).then((res)=>{

                    this.comment.commentCount=res.data.total;
                    this.comment.comments=res.data.comments;
                    this.comment.hotComments=res.data.hotComments; 
                }).catch((err)=>{
                    console.log(err);
                    console.log('请求失败');
                    
            });
            return currentSong;
        },
        playerBtn(){
            return this.playerStatus? this.stopBtn: this.playingBtn;
        },    
    },
    methods:{
        ...mapMutations([
            'filterSong',
            'showMore',
            'showList',
            'setplayerUrl',
            'setplayerIndex',
            'setSonglist',
            'setPlayerStatus',
            'setSongReady'
        ]),
        ...mapActions([
            'getSongUrl',
            'getSongComment',
            'getPlayerWord'
        ]),
        // 返回歌单
        goBack(){            
            this.$router.go(-1);
        },
        // 显示歌单
        toshowList(){
            this.showList();                        
        },
        swapShow(){
            this.showImg=!this.showImg;  
        },
        stop(){
            console.log('操作');
        },
        more(){ 
            this.filterSong(this.upsongList[this.upplayerIndex]);
            this.$store.dispatch('getSongComment',this.upsongList[this.upplayerIndex].id);
            this.showMore();          
        },
        // 播放顺序
        playOrder(){
            console.log('order');
        },
        // 上一首
        upSong(){
            if(!this.songReady){
                return;
            }
            if( this.upplayerIndex != -1 && this.upsongList.length > 1  ) {
                if ( this.upplayerIndex > 0 ) {
                    localStorage.setItem('songindex',parseInt(this.upplayerIndex)-1);                        
                    this.setplayerIndex(parseInt(this.upplayerIndex)-1);                        
                    this.$router.replace({path: '/player/' + this.upsongList[this.upplayerIndex].id});
                    this.toPlay();                        
                } else {
                    localStorage.setItem('songindex',parseInt(this.upsongList.length)-1);                                            
                    this.setplayerIndex(parseInt(this.upsongList.length)-1);                        
                    this.$router.replace({path: '/player/' + this.upsongList[this.upplayerIndex].id}); 
                    this.toPlay();                                                                   
                }
            }
            this.setSongReady(false);                                                  
        },
        downSong(){
            if(!this.songReady){
                return;
            } 
            if( this.upplayerIndex != -1 && this.upsongList.length > 1  ) {
                if ( this.upplayerIndex < (this.upsongList.length-1) ) {
                    localStorage.setItem('songindex',parseInt(this.upplayerIndex)+1);
                    this.setplayerIndex(parseInt(this.upplayerIndex)+1);
                    this.$router.replace({path: '/player/' + this.upsongList[this.upplayerIndex].id});
                    this.toPlay();
                } else {
                    localStorage.setItem('songindex',0);                    
                    this.setplayerIndex(0);
                    this.$router.replace({path: '/player/' + this.upsongList[this.upplayerIndex].id});
                    this.toPlay();                    
                }
            }
            this.setSongReady(false);                                 
        },
        toPlay(){
            this.setPlayerStatus(true);                                
            this.getSongUrl(this.upsongList[this.upplayerIndex].id);
            // this.getPlayerWord(this.upsongList[this.upplayerIndex].id); 
            // console.log(this.playerWord);
        },
        // 播放暂停
        Playing(){
            if(this.playerStatus == true){  
                this.setPlayerStatus(false);            
            }
            else{    
                this.setPlayerStatus(true);                          
            }              
        },
        format(interval) {
            interval = interval | 0
            let minute = interval / 60 | 0
            if(minute < 10){
                minute = '0' + minute;
            }
            let second = interval % 60
            if (second < 10) {
                second = '0' + second;
            }
            return minute + ':' + second
        },
        touchStart(){
            console.log('start');
        },
        touchMove(){
            console.log('move');
        },
        touchEnd(){
            console.log('end');
        }   
        
    },
    watch:{
        currentTime(newV,oldV){
            this.percent= newV / this.duration;
        },
        // 歌曲播放
        percent(newV,oldV){
            if(newV >= 0){
                 // 总长
                const boxWidth=(this.$refs.progressBox.clientWidth) -(this.$refs.dot.offsetWidth);
                let offsetWidth= newV * boxWidth;
                // 设置进度条走过的width和按钮的偏移
                this.$refs.progressGo.style.width= `${offsetWidth/10}rem`;
                this.$refs.progressDot.style["transform"] = `translate3d(${offsetWidth/10}rem, 0, 0)`;

            }
        }
    },
    mounted(){
        this.toPlay();
    },
}
</script>

<style>
@import './player.css'
</style>
