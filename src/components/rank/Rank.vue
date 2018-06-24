<template>
  <div class="rank">
     <!-- 官方榜 -->
     <div class="rank-offcial">
       <span class="rank-offcial-title">官方榜</span>
       <div class="rank-offcial-box">
          <!-- 飙升 -->
          <div class="rank-offcial-speedup" @click="getRankList(3)">
            <div class="speedup-left">
              <img src="@/assets/img/rank/speedup.jpg">
              <span class="speedup-left-updatetime">
                {{ updatetime }}
              </span>
            </div>
            <div class="speedup-right">
              <ul class="speedup-right-ul">
                  <li v-for="index in 3" :key="index">
                    {{index}}. 歌名 - 歌手
                  </li>
                  <!-- <li v-for="(item,index) in threeSong" :key="index">
                    {{index}}. {{item.name}} - {{item.singer}}
                  </li> -->
              </ul>
            </div>
          </div>
          <!-- 歌手 -->
          <div class="rank-offcial-speedup" @click="getSingerList()">
            <div class="speedup-left">
              <img src="@/assets/img/rank/singer.jpg">
              <span class="speedup-left-updatetime">
                {{ updatetime }}
              </span>
            </div>
            <div class="speedup-right">
              <ul class="speedup-right-ul">
                  <li v-for="index in 3" :key="index">
                    {{index}}. 歌手<img src="@/assets/img/rank/hotnum.png" class="hotnum"> 80808
                  </li>
              </ul>
            </div>
          </div>
          <!-- 新歌 -->
          <div class="rank-offcial-speedup" @click="getRankList(0)">
            <div class="speedup-left">
              <img src="@/assets/img/rank/newsong.jpg">
              <span class="speedup-left-updatetime">
                {{ updatetime }}
              </span>
            </div>
            <div class="speedup-right">
              <ul class="speedup-right-ul">
                  <li v-for="index in 3" :key="index">
                    {{index}}. 歌名 - 歌手
                  </li>
              </ul>
            </div>
          </div>
          <!-- 原创 -->
          <div class="rank-offcial-speedup" @click="getRankList(2)">
            <div class="speedup-left">
              <img src="@/assets/img/rank/origin.jpg">
              <span class="speedup-left-updatetime">
                {{ updatetime }}
              </span>
            </div>
            <div class="speedup-right">
              <ul class="speedup-right-ul">
                  <li v-for="index in 3" :key="index">
                    {{index}}. 歌名 - 歌手
                  </li>
              </ul>
            </div>
          </div>
          <!-- 热歌 -->
          <div class="rank-offcial-speedup" @click="getRankList(1)">
            <div class="speedup-left">
              <img src="@/assets/img/rank/hotsong.jpg">
              <span class="speedup-left-updatetime" >
                {{ updatetime }}
              </span>
            </div>
            <div class="speedup-right">
              <ul class="speedup-right-ul">
                  <li v-for="index in 3" :key="index">
                    {{index}}. 歌名 - 歌手
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
           <div class="electro">
             <div class="electro-img">
                <img src="../../assets/img/rank/electro.jpg">
                <span class="speedup-left-updatetime" >{{ updatetime }}</span>
             </div>
             <span class="electro-title">云音乐电音榜</span>
           </div>
           <!-- 嘻哈 -->
           <div class="electro">
             <div class="electro-img">
                <img src="../../assets/img/rank/hiphop.jpg">
                <span class="speedup-left-updatetime" >{{ updatetime }}</span>
             </div>
             <span class="electro-title">云音乐嘻哈榜</span>
           </div>
           <!-- ktv -->
           <div class="electro">
             <div class="electro-img">
                <img src="../../assets/img/rank/ktv.jpg">
                <span class="speedup-left-updatetime" >{{ updatetime }}</span>
             </div>
             <span class="electro-title">KTV唛榜</span>
           </div>
         </div>
         <div class="global-row">
           <!-- AGG -->
           <div class="electro">
             <div class="electro-img">
                <img src="../../assets/img/rank/aggmusic.jpg">
                <span class="speedup-left-updatetime" >{{ updatetime }}</span>
             </div>
             <span class="electro-title">云音乐AGG音乐榜</span>
           </div>
           <!-- 嘻哈 -->
           <div class="electro">
             <div class="electro-img">
                <img src="../../assets/img/rank/beatport.jpg">
                <span class="speedup-left-updatetime" >{{ updatetime }}</span>
             </div>
             <span class="electro-title">Beatport全球电子舞曲榜</span>
           </div>
           <!-- ktv -->
           <div class="electro">
             <div class="electro-img">
                <img src="../../assets/img/rank/uk.jpg">
                <span class="speedup-left-updatetime" >{{ updatetime }}</span>
             </div>
             <span class="electro-title">UK排行榜周榜</span>
           </div>
         </div>
         <div class="global-row">
           <!-- 美国B -->
           <div class="electro">
             <div class="electro-img">
                <img src="../../assets/img/rank/billboard.jpg">
                <span class="speedup-left-updatetime" >{{ updatetime }}</span>
             </div>
             <span class="electro-title">美国Bbillboard周榜</span>
           </div>
           <!-- 中国港台 -->
           <div class="electro">
             <div class="electro-img">
                <img src="../../assets/img/rank/chaintop.jpg">
                <span class="speedup-left-updatetime" >{{ updatetime }}</span>
             </div>
             <span class="electro-title">中国TOP排行榜（港台榜）</span>
           </div>
           <!-- 中国内地 -->
           <div class="electro">
             <div class="electro-img">
                <img src="../../assets/img/rank/chinatop1.jpg">
                <span class="speedup-left-updatetime" >{{ updatetime }}</span>
             </div>
             <span class="electro-title">中国TOP排行榜（内地榜）</span>
           </div>
         </div>
          <div class="global-row">
           <!-- hito -->
           <div class="electro">
             <div class="electro-img">
                <img src="../../assets/img/rank/hito.jpg">
                <span class="speedup-left-updatetime" >{{ updatetime }}</span>
             </div>
             <span class="electro-title">台湾Hito排行榜</span>
           </div>
           <!-- 香港 -->
           <div class="electro">
             <div class="electro-img">
                <img src="../../assets/img/rank/hongkong.jpg">
                <span class="speedup-left-updatetime" >{{ updatetime }}</span>
             </div>
             <span class="electro-title">香港电台中文歌曲龙虎榜</span>
           </div>
           <!-- 日本 -->
           <div class="electro">
             <div class="electro-img">
                <img src="../../assets/img/rank/oricon.jpg">
                <span class="speedup-left-updatetime" >{{ updatetime }}</span>
             </div>
             <span class="electro-title">日本Oricon周榜</span>
           </div>
         </div>
       </div>       
     </div> 
  </div>
</template>
<script>
import axios from 'axios'
export default{
  data(){
    return{
      updatetime: '每天更新',
      rankList: [],
      threeSong: [],
    }
  },
  methods:{
    getSongDetail(list){
      this.threeSong=[];
      for (let i = 0; i < 3; i++) {
        axios.get('http://localhost:3000/song/detail?ids='+list[i].id).then((res)=>{
          let song={};
          song.name=res.data.songs[0].name;//歌名 
          song.id=res.data.songs[0].id;   //id
          song.singer=res.data.songs[0].ar[0].name;                 
          if(res.data.songs[0].ar[1]){
              song.singer+=' / '+res.data.songs[0].ar[1].name
          }
          this.threeSong.push(song);          
        }).catch((err)=>{
          console.log(err);
        })
      }
      console.log(this.threeSong);
    },
    getRankList(idx){
      axios.get('http://localhost:3000/top/list?idx='+idx).then((res)=>{
        let rankDetail= res.data.playlist;
        this.rankList= res.data.privileges;
        // this.getSongDetail(this.rankList);
        this.$router.push({path: '/songslist/'+rankDetail.id,query:{
          coverImgUrl: rankDetail.coverImgUrl,
          }
        });
      }).catch((err)=>{
        console.log(err);
        console.log('获取排行榜列表失败');
      });
    },
    // 获取歌手列表
    getSingerList(){
      console.log('获取歌手列表');
    }
  },
  mounted(){
  }
}
</script>
<style>
@import './rank.css';
.rank{
  width: 100%;
  margin-top: 9rem;
  margin-bottom: 5rem;
  background-color: #EFEFEF;
  padding-bottom: 1.5rem;  
}
</style>
