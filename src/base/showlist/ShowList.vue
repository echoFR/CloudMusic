<template>
    <transition name="showlist" enter-active-class="animated fadeInUp" leave-active-class="animated fadeOutDown">
        <div class="mask" @click="hideList">
            <div class="show-list" id="showListMore" @click.stop>
                <div class="list-top">
                    <div class="list-top-title">
                        <span class="songs-name">{{playModeWord}}（{{originList.length}}）</span>
                    </div>
                    <div class="select">
                        <img src="@/assets/img/shoucj.png" align="absmiddle">
                        <span class="select-text">收藏全部</span>
                    </div>
                    <span class="remove">
                        <img src="@/assets/img/remove.png">    
                    </span>                    
                </div>
                <div class="list-bottom">
                    <ul class="list-bottom-ul" ref="listUl">
                        <li v-for="(item,index) in songlist" @click="toPlay(index)" :key="index" :class="{colorRed: ((index==inOriginIndex)?true:false)}">
                            <div class="list-bottom-text" >
                                <span class="list-bottom-index">{{index+1}}-</span>
                                <span>{{item.name}}</span>
                                <span class="list-bottom-singer">- {{ item.ar[0].name + ((item.ar[1] && item.ar[1].name)?' / '+item.ar[1].name : '')}} </span>
                            </div>
                            <img src="@/assets/img/closeblack.png">
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </transition>
</template>
<script>
import {mapGetters,mapActions, mapMutations} from 'vuex'
import {ModeConfig} from '@/assets/js/config.js'
export default{
    props:['songlist'],
    computed:{
        ...mapGetters([
            'playerIndex',
            'playerStatus',
            'songList',
            'originList',
            'playMode',
            'lyric'
        ]),
        // 当前播放歌曲在初始列表的位置index
        inOriginIndex(){
            let currentSong= this.songList[this.playerIndex];
            let index=this.originList.findIndex((item)=>{
                return item.id=== currentSong.id;
            });
            return index; 
        },
        playModeWord(){
            if(this.playMode===ModeConfig.inOrder){
                return '列表循环';
            }
            else if(this.playMode===ModeConfig.inSingle){
                return '单曲循环';
            }
            else if(this.playMode===ModeConfig.inRandom){
                return '随机播放';
            }
        }
    },
    methods:{
        ...mapMutations([
            'setplayerIndex',
            'hideList',
            'setPlayerStatus',
            'ParseLyric'
        ]),
        ...mapActions([
            'getSongUrl',
            'getLyric'
        ]),
        toPlay(index){
            let toPlaySong= this.originList[index];
            let toIndex= this.songList.findIndex((item)=>{
                return item.id=== toPlaySong.id;
            })
            localStorage.setItem('songindex',toIndex);                                            
            this.setplayerIndex(toIndex);
            this.setPlayerStatus(true);
            this.getSongUrl(this.songList[this.playerIndex].id); 
            this.getLyric(this.songList[this.playerIndex].id);
        }
    },
}
</script>
<style>
@import './showlist.css';
.animated {animation-duration: 0.3s;}
.colorRed{
    color: red;
}
</style>