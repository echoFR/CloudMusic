<template>
  <div class="songslist">
      <LHeader :songsdata="songs" v-show="isSongList"></LHeader>
      <RHeader :songsdata="songs" v-show="!isSongList"></RHeader>
      <LTag :songsdata="songs"></LTag>
      <div class="loading" v-show="load" style="marginTop: 10rem">
        <img src="@/base/loading/loading.gif" align="absmiddle">努力加载中...
      </div>
      <ListData :songsdata="songs"></ListData>
      <ShowMore v-show="isShowMore"></ShowMore>
  </div>
</template>
<script>
import LHeader from '@/base/list/list-header/ListHeader'
import RHeader from '@/base/list/list-header/RankHeader'
import LTag from '@/base/list/list-tag/LTag'
import ListData from '@/base/list/list-data/ListData'
import ShowMore from '@/base/list/list-showmore/ShowMore'
import axios from 'axios'
import {api} from '@/assets/js/config'
import {mapGetters,mapActions} from 'vuex'
export default{
    name: 'list',
    components:{
        LHeader,
        RHeader,
        LTag,
        ListData,
        ShowMore,
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
                },
            isSongList: false,
            load: true
       }
    },
    computed:{
        ...mapGetters([
            'isShowMore',
        ])
    },
    methods: {
        // 获得歌单详细信息
        getSongsDetail(songsid){
            axios.get(`${api}/playlist/detail`,{
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
                    this.load=false;
                }).catch(function(err){
                    console.log(err);
                });
        },
        // 获取歌单评论
        getSongsComment(songsid){
            axios.get(`${api}/comment/playlist`,{
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
        this.isSongList= this.$route.query.hasOwnProperty('avatarUrl');
        this.$route.query.hasOwnProperty('avatarUrl')?this.songs.avatarUrl=this.$route.query.avatarUrl:null;
        this.getSongsDetail(this.songs.id);
        this.getSongsComment(this.songs.id);  
    }
}
</script>
<style>
.songslist{
    background-color: #EFEFEF;   
    margin-bottom: .5rem; 
}
.loading{
    width: 100%;
    background-color: #EFEFEF;
    text-align: center;
    padding: .1rem 0;
    font-size: .15rem;
}
.loading img{
    margin-right: .15rem;
    width: .35rem;
    height: .35rem;
}
</style>




