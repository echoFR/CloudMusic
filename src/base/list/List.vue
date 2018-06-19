<template>
  <div class="songslist">
      <LHeader :songsdata="songs"></LHeader>
      <LTag :songsdata="songs"></LTag>
      <ListData :songsdata="songs"></ListData>
      <ShowMore v-show="isShowMore"></ShowMore>
  </div>
</template>
<script>
import {HOST} from '@/assets/js/config.js'
import LHeader from '@/base/list/list-header/ListHeader'
import LTag from '@/base/list/list-tag/LTag'
import ListData from '@/base/list/list-data/ListData'
import ShowMore from '@/base/list/list-showmore/ShowMore'
import axios from 'axios'
import {mapGetters,mapActions} from 'vuex'
export default{
    name: 'list',
    components:{
        LHeader,
        LTag,
        ListData,
        ShowMore
    },
    data(){
       return{
            songs:{//歌单信息
                    id:0,
                    subscribedCount: 0,//收藏数
                    playCount: 0,//收听数
                    commentCount: 0,// 评论
                    name: '',// 标题
                    coverImgUrl: '',// 歌单图片
                    avatarUrl: '',// 作者图片
                    nickname: '',//作者
                    tracks: [],//歌
                    number: 0,//个数
                    comments: [],//歌单评论
                    hotComments: [],//热评
                    shareCount:0,//分享
                    description: '',//描述
                    tags: [],//类型
                }
       }
    },
    computed:{
        ...mapGetters([
            'isShowMore'
        ])
    },
    methods: {
        // 获得歌单详细信息
        getSongsDetail(songsid){
            axios.get(HOST+'/playlist/detail',{
                    params: {
                        id: songsid
                    }
                }).then((res)=>{  
                    this.songs.commentCount=res.data.playlist.commentCount;
                    this.songs.shareCount=res.data.playlist.shareCount;
                    this.songs.name=res.data.playlist.name;
                    this.songs.nickname=res.data.playlist.creator.nickname;
                    this.songs.tracks=res.data.playlist.tracks;
                    this.songs.playCount=res.data.playlist.playCount;
                    this.songs.subscribedCount=res.data.playlist.subscribedCount;
                    this.songs.description=res.data.playlist.description;  
                    this.songs.tags=res.data.playlist.tags;
                    this.songs.number=res.data.playlist.trackCount;                   
                }).catch(function(err){
                    console.log(err);
                });
        },
        // 获取歌单评论
        getSongsComment(songsid){
            axios.get(HOST+'/comment/playlist',{
                    params: {
                        id: songsid
                    }
                }).then((res)=>{
                this.songs.comments=res.data.comments;
                this.songs.hotComments=res.data.hotComments;
                this.songs.commentCount=res.data.total;                   
                }).catch(function(err){
                    console.log(err);
            });
        }
    },
    mounted(){
      // 歌单id
        this.songs.id= this.$route.params.id;
        //  设置歌单图片  作者图片
        this.songs.coverImgUrl=this.$route.query.coverImgUrl;
        this.songs.avatarUrl=this.$route.query.avatarUrl;  

        this.getSongsDetail(this.songs.id);
        this.getSongsComment(this.songs.id);  
              
    }
}
</script>
<style>
.songslist{
    background-color: #EFEFEF;    
}
</style>




