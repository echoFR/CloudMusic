<template>
    <transition name="showlist" enter-active-class="animated fadeInUp" leave-active-class="animated fadeOutDown">
        <div class="mask" @click="hide()">
            
            <div class="show-list" id="showListMore" @click="stopBubble">
                <div class="list-top">
                    <div class="list-top-title">
                        <span class="songs-name">单曲循环{{playerIndex}}</span>
                    </div>
                    <div class="select">
                        <img src="@/assets/img/shoucj.png" align="absmiddle">
                        <span class="select-text">收藏全部{{inOriginIndex}}</span>
                    </div>
                    <span class="remove">
                        <img src="@/assets/img/remove.png">    
                    </span>                    
                </div>
                <div class="list-bottom">
                    <ul class="list-bottom-ul">
                        <li v-for="(item,index) in songlist" @click="toPlay(index)" :key="index" ref="list" :class="{colorRed: ((index==inOriginIndex)?true:false)}">
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
import stopBubble from '@/assets/js/stopBubble'
import {mapGetters,mapActions, mapMutations} from 'vuex'
export default{
    props:['songlist'],
    computed:{
        ...mapGetters([
            'playerIndex',
            'playerStatus',
            'songList',
            'originList'
        ]),
        // 当前播放歌曲在初始列表的位置index
        inOriginIndex(){
            let currentSong= this.songList[this.playerIndex];
            let index=this.originList.findIndex((item)=>{
                return item.id=== currentSong.id;
            });
            return index; 
        },
    },
    methods:{
        ...mapMutations([
            'setplayerIndex',
            'hideList',
            'setPlayerStatus'
        ]),
        ...mapActions([
            'getSongUrl'
        ]),
        hide(){  
            this.hideList();
        },
        // 防止冒泡
        stopBubble(){
            stopBubble();
        },
        toPlay(index){
            localStorage.setItem('songindex',index);                                            
            this.setplayerIndex(index); 
            this.hide();
            this.getSongUrl(this.songList[this.playerIndex].id);                     
            this.$router.replace({path: '/player/' + this.songList[this.playerIndex].id});
        }
    },
    mounted(){
        console.log(this.originList[2].name);
        console.log(this.songList[2].name);
    }
}
</script>
<style>
@import './showlist.css';
.animated {animation-duration: 0.3s;}
.colorRed{
    color: red;
}
</style>