<template>
  <div class="songs-list">
    <div class="songs-list-header">
        <span class="songs-list-select">
            全部歌单
            <img src="@/assets/img/goringht.png" class="go-ringht">
        </span>
        <ul class="songs-list-tag">
            <li>华语</li>
            <li>民谣</li>
            <li>乡村</li>
        </ul>
    </div>
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
            <p>{{ item.name }}</p>
        </div>  
    </div>
    <Loading></Loading>
  </div>
</template>
<script>
import {HOST} from '@/assets/js/config.js'
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
          showNum: 8
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
            axios.get(HOST+'/top/playlist?&order=hot&limit='+this.showNum).then((res)=>{
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
                    this.showNum+=this.showNum;
                    this.getSongslist();               
                }
            }
            // const isBottom=()=>{
            //     if((height.getScrollTop()+ height.getClientHeight()+1)>=(height.getScrollHeight()-50)){                    
            //         axios.get(HOST+'/top/playlist?limit=8&order=hot').then((res)=>{
            //             this.songslists = this.songslists.concat( res.data.playlists );
            //         }).catch(function(err){
            //             console.log(err);
            //         }); 
            //     }
            // }
            // window.addEventListener("scroll",throttle(isBottom,1000));
        }    
    }
}
</script>
<style>
@import './sdata.css'
</style>