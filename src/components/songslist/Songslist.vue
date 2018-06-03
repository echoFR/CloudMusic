<template>
  <div class="songslist">
      <SongHeader :songsdata="songs"></SongHeader>
      <PlayTag :songsdata="songs"></PlayTag>
      <Loading v-show="isShowLoading"></Loading>
      <!-- 歌单列表 -->
      <list :songsdata="songs"></list>
      <!-- 点击右侧显示更多 -->
      <ShowMore v-show="isShowMore"></ShowMore>
  </div>
</template>
<script>
import {mapGetters,mapActions} from 'vuex'
import Loading from '@/components/loading/Loading'
import SongHeader from '@/components/songslist/songheader/SongHeader'
import PlayTag from '@/components/songslist/playtag/PlayTag'
import List from '@/components/songslist/list/List'
import ShowMore from '@/components/songslist/showmore/ShowMore'
import axios from 'axios'
export default{
    components:{
        SongHeader,
        PlayTag,
        List,
        Loading,
        ShowMore,
    },
    data(){
       return{
            Api:this.$store.state.mutations.Api,
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
                }
       }
    },
    computed:{
        ...mapGetters([
            'isShowLoading',
            'isShowMore'
        ])
    },
    methods: {
        // 获得歌单详细信息
        getSongsDetail(songsid){
            axios.get(this.Api+'/playlist/detail',{
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
                    this.songs.number=res.data.playlist.tracks.length;  
                   
                }).catch(function(err){
                    console.log(err);
                });
        },
        // 获取歌单评论
        getSongsComment(songsid){
            axios.get(this.Api+'/comment/playlist',{
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
</style>




