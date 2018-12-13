<template>
  <div class="songs" id='songs'>
      <div ref='reload' id='reload' v-show="reload">
        <img src='./loading.gif'>
      </div>
      <div class="songs-list-container">
          <div class="songs-list-item" v-for="(item,index) in songslists" :key="index" @click="goSongslist(item)">                        
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
      <div class="over" v-show='haveMore'>
            {{haveData}}
            <img src='./loading.gif'>
      </div> 
  </div>
</template>
<script>
import axios from 'axios'
import {api} from '@/assets/js/config'
import Loading from '@/base/loading/Loading'
import {throttle} from '@/assets/js/util'
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
          haveMore: false,
          haveData: '加载更多',
          top:'0rem',
          start: 0,
          end: 0,
          reload: false
      }
  },
  mounted(){
    this.getSongslist();
    this.getmore();    
    window.addEventListener('touchstart', this.touchstart, false);
    window.addEventListener('touchmove', this.touchMove, false); 
    window.addEventListener('touchend', throttle(this.touchEnd,2000) ,false);            
    window.addEventListener('scroll', throttle(this.getmore,2000), false);
  },
  methods:{
        touchstart(e){
            let event= event || e;            
            var touch = event.targetTouches[0];
            this.start = touch.pageY; 
        },
        touchMove(e){
            let event= event || e;
            var touch = event.targetTouches[0]; 
            this.end = ( touch.pageY - this.start);
            if(this.end> 100){
                this.reload= true
            }
        },
        touchEnd(){
            if(this.end> 100 && this.end-this.start>20 ){
                this.reload= false
                this.getSongslist()         
            }        
        },
        goSongslist(songs){ 
            this.$router.push({path: '/songslist/'+songs.id,query:{
                coverImgUrl: songs.coverImgUrl,
                avatarUrl: songs.creator.avatarUrl,
                }
            });
        },
        getSongslist(){
            axios.get(`${api}/top/playlist?&order=hot&limit=${this.showNum}`).then((res)=>{
                if(this.showNum>=108){
                    this.haveMore= false;
                    this.haveData= 'ヽ(*^ｰ^) 没有更多数据，我是有底线的 (^ｰ^*)ノ'
                }else{
                    this.haveMore= true
                }
                this.songslists=res.data.playlists;
            }).catch(function(err){
                console.log(err);
            });
        }, 
        getmore(){
            if(this.haveMore===false){return;}
            if(height.getScrollTop() + height.getClientHeight() +1 >= height.getScrollHeight()) {
                this.showNum+=6;
                this.getSongslist()
            }
        }   
    }
}
</script>
<style>
@import './songs.css'
</style>

