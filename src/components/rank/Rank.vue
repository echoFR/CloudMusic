<template>
  <div class="rank">
     <Loading :top='top'></Loading>
     <div v-show="isLoaded">
       <!-- 官方榜 -->
      <div class="rank-offcial">
        <span class="rank-offcial-title">官方榜</span>
        <div class="rank-offcial-box">
            <!-- 飙升 -->
            <div class="rank-offcial-speedup" @click="goSongList(speedup)">
              <div class="speedup-left">
                <img :src="speedup.coverImg">
                <span class="speedup-left-updatetime">
                  {{ speedup.updatetime }}
                </span>
              </div>
              <div class="speedup-right">
                <ul class="speedup-right-ul">
                    <li v-for="(item,index) in speedup.threeSong" :key="index">
                      {{index+1}}. {{item.name}} - {{item.singer}}
                    </li>
                </ul>
              </div>
            </div>
            <!-- 新歌 -->
            <div class="rank-offcial-speedup" @click="goSongList(newsong)">
              <div class="speedup-left">
                <img :src="newsong.coverImg">
                <span class="speedup-left-updatetime">
                  {{ newsong.updatetime }}
                </span>
              </div>
              <div class="speedup-right">
                <ul class="speedup-right-ul">
                    <li v-for="(item,index) in newsong.threeSong" :key="index">
                      {{index+1}}. {{item.name}} - {{item.singer}}
                    </li>
                </ul>
              </div>
            </div>
            <!-- 原创 -->
            <div class="rank-offcial-speedup" @click="goSongList(origin)">
              <div class="speedup-left">
                <img :src="origin.coverImg">
                <span class="speedup-left-updatetime">
                  {{ origin.updatetime }}
                </span>
              </div>
              <div class="speedup-right">
                <ul class="speedup-right-ul">
                    <li v-for="(item,index) in origin.threeSong" :key="index">
                      {{index+1}}. {{item.name}} - {{item.singer}}
                    </li>
                </ul>
              </div>
            </div>
            <!-- 热歌 -->
            <div class="rank-offcial-speedup" @click="goSongList(hotsong)">
              <div class="speedup-left">
                <img :src="hotsong.coverImg">
                <span class="speedup-left-updatetime" >
                  {{ hotsong.updatetime }}
                </span>
              </div>
              <div class="speedup-right">
                <ul class="speedup-right-ul">
                    <li v-for="(item,index) in hotsong.threeSong" :key="index">
                      {{index+1}}. {{item.name}} - {{item.singer}}
                    </li>
                </ul>
              </div>
            </div>
        </div>       
      </div>
      <!-- 全球榜 -->
      <div class="rank-global">
        <span class="rank-global-title">全球榜</span>
        <div class="rank-global-box">
          <div class="global-row">
            <!-- 电音 -->
            <div class="electro" @click="goSongList(electro)">
              <div class="electro-img">
                  <img :src="electro.coverImg">
                  <span class="speedup-left-updatetime" >{{ electro.updatetime }}</span>
              </div>
              <span class="electro-title">{{ electro.name }}</span>
            </div>
            <!-- 嘻哈 -->
            <div class="electro" @click="goSongList(hiphop)">
              <div class="electro-img">
                  <img :src="hiphop.coverImg">
                  <span class="speedup-left-updatetime" >{{ hiphop.updatetime }}</span>
              </div>
              <span class="electro-title">{{ hiphop.name }}</span>
            </div>
            <!-- douMusic -->
            <div class="electro" @click="goSongList(douMusic)">
              <div class="electro-img">
                  <img :src="douMusic.coverImg">
                  <span class="speedup-left-updatetime" >{{ douMusic.updatetime }}</span>
              </div>
              <span class="electro-title">{{ douMusic.name }}</span>
            </div>
          </div>
          <div class="global-row">
            <div class="electro" @click="goSongList(game)">
              <div class="electro-img">
                  <img :src="game.coverImg">
                  <span class="speedup-left-updatetime" >{{ game.updatetime }}</span>
              </div>
              <span class="electro-title">{{ game.name }}</span>
            </div>
            <div class="electro" @click="goSongList(newElectro)">
              <div class="electro-img">
                  <img :src="newElectro.coverImg">
                  <span class="speedup-left-updatetime" >{{ newElectro.updatetime }}</span>
              </div>
              <span class="electro-title">{{ newElectro.name }}</span>
            </div>
            <div class="electro" @click="goSongList(classical)">
              <div class="electro-img">
                  <img :src="classical.coverImg">
                  <span class="speedup-left-updatetime" >{{ classical.updatetime }}</span>
              </div>
              <span class="electro-title">{{ classical.name }}</span>
            </div>
          </div>
          <div class="global-row">
            <div class="electro" @click="goSongList(ktv)">
              <div class="electro-img">
                  <img :src="ktv.coverImg">
                  <span class="speedup-left-updatetime" >{{ ktv.updatetime }}</span>
              </div>
              <span class="electro-title">{{ ktv.name }}</span>
            </div>
          </div>
        </div>       
      </div>  
     </div>
  </div>
</template>
<script>
import axios from 'axios'
import {api} from '@/assets/js/config'
import Loading from '@/base/loading/Loading'
import {mapGetters} from 'vuex'
export default{
  components:{
    Loading
  },
  data(){
    return{
      top: '20rem',
      isLoaded: false,
      speedup:{
        id: null,
        threeSong:[],
        updatetime: '',
        coverImg: '',
      },
      newsong:{
        id: null,
        threeSong:[],
        updatetime: '',
        coverImg: '',                
      },
      origin:{
        id: null,
        threeSong:[],
        updatetime: '',
        coverImg: '',                
      },
      hotsong:{
        id: null,
        threeSong:[],
        updatetime: '',
        coverImg: '', 
      },
      electro:{
        id: null,
        threeSong:[],
        updatetime: '',
        coverImg: '',
        name:'' 
      },
      hiphop:{
        id: null,
        threeSong:[],
        updatetime: '',
        coverImg: '',
        name:''          
      },
      douMusic:{
        id: null,
        threeSong:[],
        updatetime: '',
        coverImg: '',
        name:'' 
      },
      game:{
        id: null,
        threeSong:[],
        updatetime: '',
        coverImg: '',
        name:''  
      },
      newElectro:{
        id: null,
        threeSong:[],
        updatetime: '',
        coverImg: '',
        name:''  
      },
      classical:{
        id: null,
        threeSong:[],
        updatetime: '',
        coverImg: '',
        name: '', 
      },
      ktv:{
        id: null,
        threeSong:[],
        updatetime: '',
        coverImg: '',
        name: '',          
      }
    }
  },
  methods:{
    getRankList(){
      axios.get(`${api}/toplist`).then((res)=>{
        // 官方
        this.getRankShow(this.speedup,res.data.list[0]);
        this.getRankShow(this.newsong,res.data.list[1]);
        this.getRankShow(this.origin,res.data.list[2]);
        this.getRankShow(this.hotsong,res.data.list[3]);
        // 全球 
        this.getRankShow(this.electro,res.data.list[4]);
        this.getRankShow(this.hiphop,res.data.list[5]);
        this.getRankShow(this.douMusic,res.data.list[6]);
        this.getRankShow(this.game,res.data.list[8]);
        this.getRankShow(this.newElectro,res.data.list[9]);        
        this.getRankShow(this.classical,res.data.list[11]);
        this.getRankShow(this.ktv,res.data.list[16]);
        
        this.getThreeSong(this.speedup,res.data.list[0].id);
        this.getThreeSong(this.newsong,res.data.list[1].id);
        this.getThreeSong(this.origin,res.data.list[2].id);
        this.getThreeSong(this.hotsong,res.data.list[3].id);

        this.getThreeSong(this.electro,res.data.list[4].id);
        this.getThreeSong(this.hiphop,res.data.list[5].id);
        this.getThreeSong(this.douMusic,res.data.list[6]);
        this.getThreeSong(this.game,res.data.list[8]);
        this.getThreeSong(this.newElectro,res.data.list[9].id);
        this.getThreeSong(this.classical,res.data.list[11].id);
        this.getThreeSong(this.ktv,res.data.list[16].id);
      }).catch((err)=>{
        console.log(err);
        console.log('获取排行榜列表失败');
      });
    },
    getRankShow(rankSongs,resList){
      rankSongs.id=resList.id;
      rankSongs.updatetime=resList.updateFrequency;
      rankSongs.coverImg=resList.coverImgUrl;
      if(rankSongs.name==''){
        rankSongs.name=resList.name;
      } 
    },
    filterSong(song){
      let filteredSong={};
      console.log(song)
        filteredSong.name=song.name;//歌名 
        filteredSong.id=song.id;   //id
        filteredSong.singer=song.ar[0].name;                 
        if(song.ar[1]){
            filteredSong.singer+=' / '+song.ar[1].name
        }
        return filteredSong;
    },
    getThreeSong(obj,id){
      axios.get(`${api}/playlist/detail`,{
        params: {
          id: id
        }
      }).then((res)=>{
        if( res.data && res.data.playlist && res.data.playlist.tracks ) {
            for(let i = 0; i<3; i++){
              obj.threeSong.push(this.filterSong(res.data.playlist.tracks[i]));
            }
        }
        this.isLoaded=true;
      }).catch((err)=>{
        console.log(err);
      });
    },
    // 跳转到歌单列表
    goSongList(songs){ // 参数歌单图片的作者图片，防止图片加载
      this.$router.push({path: '/songslist/'+songs.id,
          query:{
            coverImgUrl: songs.coverImg,
          }
      });
    },
  },
  mounted(){
    this.getRankList();
  }
}
</script>
<style>
@import './rank.css';
.rank{
  width: 100%;
  margin-top: 0.9rem;
  margin-bottom: 0.5rem;
  background-color: #EFEFEF;
  padding-bottom: 0.15rem;  
}
</style>
