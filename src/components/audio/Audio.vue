<template>
  <div class="audio">
    <!-- autoplay loop -->
      <audio :src="playerUrl" ref="audio" @canplay="startPlay" @error="error" @timeupdate="timeUpdate" autoplay></audio>

      <!-- mini Player -->
      <div class="mini" v-show="miniPlay" @click="toPlayer()">
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
      <ShowList v-show="isShowList" :songlist='songList'></ShowList>
  </div>
</template>
<script>
import {mapGetters,mapMutations, mapActions} from 'vuex'
import ShowList from '@/base/showlist/ShowList'
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
      'playerIndex',//播放的序号
      'playerStatus',//播放/暂停
      'playorder',// 播放顺序 1 顺序 2单曲 3随机
      'playerUrl',//歌曲url
      'miniPlay',
      'isShowList',
      'songReady',
      'duration'
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
    nowSong(){
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
      'setplayerIndex',
      'setPlayerStatus',
      'showList',
      'setSongReady',
      'setDuration',
      'setCurrentTime'
    ]),
    ...mapActions([
      'getSongUrl'
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
    playerUrl(newV,oldV){
      // let stop = setInterval(() => {
      //   this.duration = this.$refs.audio.duration
      //   console.log(this.format(this.duration));
      //   if (this.duration) {
      //     clearInterval(stop)
      //   }
      // }, 150)
      
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
  overflow: hidden;
}
.mini-left img{
  width: 5rem;
  height: 5rem;
  float: left;
  margin-right: 0.5rem;
}
.mini-left-text{
  float: left;
  height: 5rem;
}
.mini-left-text span{
  display: block;
  height: 2.5rem;
  line-height: 2.5rem;
}
.text-name{
  width: 20rem;
  overflow: hidden;
}
.text-singer{
  font-size: 1.2rem;
}
.mini-right img{
  width: 3.2rem;
  height: 3.2rem;
  margin: 0.9rem 1rem 0.9rem 0;
}
.mini-right{
  float: right;
}
</style>

