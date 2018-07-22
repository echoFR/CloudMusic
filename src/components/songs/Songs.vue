<template>
  <div class="songs">
    <div class="songs-list">
      <!-- 歌单列表 -->
      <div class="songs-list-container">
          <div class="songs-list-left"  v-for="(item,index) in songslists" :key="index" @click="goSongslist(item)">                        
              <div class="songs-list-img">
                  <img v-lazy="item.coverImgUrl">
                  <span class="songs-list-hear">
                      <img src="@/assets/img/hear.png" align="absmiddle"><span>{{item.playCount}}</span>
                  </span>
                  <span class="songs-list-owner">
                      <img src="@/assets/img/owner.png" align="absmiddle"><span>{{ item.creator.nickname }}</span>
                  </span>
              </div>
              <p class="song-name">{{ item.name }}</p>
          </div>  
      </div>
      <Loading v-show="haveMore"></Loading>
      <div class="over" v-show="!haveMore">
          <span> 加载结束^8^ ~~~ </span>
      </div>
    </div>
  </div>
</template>
<script>
import axios from 'axios'
import Loading from '@/base/loading/Loading'
import height from '@/assets/js/height'
export default {
  components:{
      Loading
  },
  data(){
      return{
          songslists:[], 
          id:0,
          showNum: 6,
          haveMore: true
      }
  },
  mounted(){
      this.getSongslist();
      this.getmore();      
  },
  methods:{
      // 跳转至List
        goSongslist(songs){ // 参数歌单图片的作者图片，防止图片加载
            this.$router.push({path: '/songslist/'+songs.id,query:{
                coverImgUrl: songs.coverImgUrl,
                avatarUrl: songs.creator.avatarUrl,
                }
            });
        },
      //   获得歌单
        getSongslist(){
            axios.get('/api/top/playlist?&order=hot&limit='+this.showNum).then((res)=>{
                if(this.showNum>=108){
                    this.haveMore= false;
                    return;
                }
                this.songslists=res.data.playlists;
            }).catch(function(err){
                console.log(err);
            });
        }, 
        // 下拉加载更多  
        getmore(){
            //  滚动事件触发
            window.onscroll=()=>{
                if(height.getScrollTop() + height.getClientHeight()+1 >= height.getScrollHeight()) {
                    this.showNum+=8;
                    this.getSongslist();               
                }
            }
        }    
    }
}
</script>
<style>
@import './songs.css'
</style>

