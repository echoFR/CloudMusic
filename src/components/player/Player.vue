<template>
  <div class="player">
      <PHeader :playSong='song'></PHeader>
      <PShow :playSong='song'></PShow>
      
      <div class="player-mask"></div>
      <div class="player-maskbg" :style='{backgroundImage: "url(" + song.picUrl + ")"}'></div>
      <div class="player-maskbg2"></div>
  </div>
</template>
<script>
import axios from 'axios'
import PHeader from '@/components/player/player-header/PHeader'
import PShow from '@/components/player/player-show/PShow'
import {mapActions,mapGetters, mapMutations} from 'vuex'
export default{
    name: 'player',
    data(){
        return{
            playSong:{}
        }
    },
    components:{
        PHeader,
        PShow
    },
    computed:{
        ...mapGetters([
            'song',
            'songList',
            'playerIndex',
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
        }     
    },
    methods:{
        ...mapMutations([
            'filterSong',
            'setplayerUrl',
            'setSonglist',
            'setplayerIndex'
        ]),
        ...mapActions([
            'getSongComment',
            'getSongUrl'
        ])
    },
    mounted(){ 
        //  当前播放列表 和歌曲序号
        this.playSong=this.upsongList[this.upplayerIndex] 
        this.filterSong(this.playSong);
        this.getSongComment(this.playSong.id);
        // 歌曲url
        this.getSongUrl(this.playSong.id);
    }
}
</script>
<style>
.player{
    position: fixed;
    width: 100%;
    height: 100%;
    background-size: 100% 100%;
    background-repeat: no-repeat;
    font-size: 1.6rem;
    color: #eee;
    padding-top: 6.4rem;
}
.player-mask{
    z-index: -1;
    position: fixed;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    background: rgba(0,0,0,0.2);
}
.player-maskbg{
    z-index: -3;
    position: fixed;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    background-position: center top;
    background-size: cover;
    background-attachment: fixed;
    -webkit-filter: blur(2rem);
    -moz-filter: blur(2rem);
    -ms-filter: blur(2rem);
    -o-filter: blur(2rem);
    filter: blur(2rem);
}
.player-maskbg2{
    width: 100%;
    height: 100%;
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background: rgba(0,0,0,0.2);
    z-index: -2;
}
</style>


