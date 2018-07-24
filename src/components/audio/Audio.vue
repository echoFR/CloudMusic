<template>
  <div class="audio">
    <!-- autoplay loop -->
      <audio id="music-audio"  :src="playerUrl" ref="audio" @ended='playEnd' @canplay="startPlay" @error="error" @timeupdate="timeUpdate" autoplay></audio>

      <!-- mini Player -->
      <div class="mini" v-show="miniPlay" @click="toPlayer()" v-if='upsongList.length'>
        <div class="mini-left">
          <img :src="nowSong.picUrl">
          <div class="mini-left-text">
            <span class="text-name">
              <span class="text-name-con">{{ nowSong.name }}</span>
            </span>
            <span class="text-singer">{{ nowSong.singer }}</span>
          </div>
        </div>
        <div class="mini-right">
          <img :src="playerBtn" @click.stop="Playing()" ref="miniplay">
          <img src="@/assets/img/more1.png" @click.stop="Morelist()">          
        </div>
      </div>
      <!-- 列表 -->
      <ShowList v-show="isShowList" :songlist='uporiginList' v-if="uporiginList.length"></ShowList>
  </div>
</template>
<script>
import {mapGetters,mapMutations, mapActions} from 'vuex'
import ShowList from '@/base/showlist/ShowList'
import {ModeConfig} from '@/assets/js/config.js'

export default{
  data(){
    return{
      stopBtn: require('@/assets/img/stop1.png'),
      playingBtn: require('@/assets/img/play1.png'),
    }
  },
  components:{
    ShowList
  },
  computed:{
    ...mapGetters([
      'playerStatus',
      'playerUrl',
      'songList',//播放歌曲的歌单列表
      'playerList',//播放顺序的歌单
      'originList',
      'playerIndex',//播放的序号
      'playerStatus',//播放/暂停
      'playMode',
      'playerUrl',//歌曲url
      'miniPlay',
      'isShowList',
      'songReady',
      'duration',
      'currentTime',
      'designTime',
    ]),
    upsongList(){
        //刷新后 歌单没有数据
        if(this.songList.length==0){
            let songlist=JSON.parse(localStorage.getItem('songlist'));
            if(songlist!=null){
              this.setSonglist(songlist);
            }else{
              this.setSonglist([]);
            }
        }
        return this.songList;        
    },
    upplayerIndex(){
        if(this.playerIndex==-1){
          let playerIndex= localStorage.getItem('songindex');
            if(playerIndex!=null){
              this.setplayerIndex(playerIndex);              
            }else{
              this.setplayerIndex(-1);
            }
            return this.playerIndex;
        }
        return this.playerIndex;        
    },
    uporiginList(){
      //刷新后 歌单没有数据
      if(this.originList.length==0){
          let originlist=JSON.parse(localStorage.getItem('originlist'));
          if(originlist!=null){
            this.setOriginList(originlist);
          }else{
            this.setOriginList([]);
          }
      }
      return this.originList;
    },
    nowSong(){
      if(this.upsongList.length==0 || this.upplayerIndex==-1){
        return {};
      }
      let song=this.upsongList[this.upplayerIndex];
      let nowSong={};
        nowSong.picUrl=song.al.picUrl;//图片
        nowSong.name=song.name;//歌名 
        nowSong.id=song.id;   //id
        nowSong.singer=song.ar[0].name;                 
        if(song.ar[1]){
            nowSong.singer+=' / '+song.ar[1].name
        }
      return nowSong;
    },
    playerBtn(){
      return this.playerStatus? this.stopBtn: this.playingBtn
    },
  },
  methods:{
    ...mapMutations([
      'setSonglist',
      'setOriginList',
      'setplayerIndex',
      'setPlayerStatus',
      'showList',
      'setSongReady',
      'setDuration',
      'setCurrentTime'
    ]),
    ...mapActions([
      'getSongUrl',
      'getLyric'
    ]),
    // mini Player 播放暂停
    Playing(){
      this.$nextTick(()=>{
        if(this.playerStatus==true){
          this.setPlayerStatus(false);
        }else{
          this.setPlayerStatus(true);
          this.getSongUrl(this.upsongList[this.upplayerIndex].id);                          
        }
      });
    },
    // 跳到player
    toPlayer(song,index){  
        this.$router.push({path:'/player/'+this.nowSong.id});
    },
    Morelist(){
      this.showList();                        
    },
    startPlay(){
      this.setSongReady(true);
      // 获取歌曲总时间
      this.setDuration(this.$refs.audio.duration);
    },
    error(){
      this.setSongReady(true);      
    },
    timeUpdate(event){
      this.setCurrentTime(event.target.currentTime);
    },
    playEnd(){
      if(this.playMode===ModeConfig.inSingle){
        // 单曲循环
        this.singleLoop();
      }else{
        //随机  顺序 自动播放下一首
        this.downSong();
      }
    },
    downSong(){
      if(!this.songReady){
          return;
      } 
      if( this.upplayerIndex != -1 && this.upsongList.length > 1  ) {
          if ( this.upplayerIndex < (this.upsongList.length-1) ) {
              localStorage.setItem('songindex',parseInt(this.upplayerIndex)+1);
              this.setplayerIndex(parseInt(this.upplayerIndex)+1);
              this.toPlay();
          } else {
              localStorage.setItem('songindex',0);                    
              this.setplayerIndex(0);
              this.toPlay();                    
          }
      }
      this.setSongReady(false);                                 
    },
    toPlay(){
      this.setPlayerStatus(true);                                
      this.getSongUrl(this.upsongList[this.upplayerIndex].id);
      this.getLyric(this.upsongList[this.upplayerIndex].id);
    },
    singleLoop(){
      this.setCurrentTime(0);
      this.$refs.audio.play();
    }
  },
  watch:{
    playerStatus(newV,oldV){
      this.$nextTick(()=>{
          if(newV == false){//暂停
            this.$refs.audio.pause();
          }
          else{
            this.$refs.audio.play();        
          }
      });    
    },
    designTime(newV,oldV){
      this.$refs.audio.currentTime=newV;
    },
    nowSong(newV){
      this.toPlay();
    }
  },
}
</script>
<style>
.mini{
  width: 100%;
  position: fixed;
  bottom: 0;
  left: 0;
  background-color: white;
  height: 5rem;
  z-index: 100;
  color: black;
  padding: 0.5rem;
  overflow: hidden;
  font-size: 1.4rem;
}
.mini-left{
  float: left;
  width: 70%;
}
.mini-left img{
  width: 22%;
  height: auto;
  float: left;
  margin-right: 2%;
}
.mini-left-text{
  float: left;
  height: 5rem;
  width: 76%;
  overflow: hidden;
}
.mini-left-text span{
  width: 100%;
  display: block;
  height: 2.5rem;
  line-height: 2.5rem;
  text-overflow:ellipsis;
  white-space: nowrap;
  overflow: hidden;
}
.text-name{
  width: 100%;
  overflow: hidden;
}
.text-singer{
  font-size: 1.2rem;
}
.mini-right img{
  width: 35%;
  height: auto;
  margin: 0.9rem 10% 0.9rem 0;
  float: left;
}
.mini-right{
  float: right;
  width: 30%;
  overflow: hidden;
}
</style>

