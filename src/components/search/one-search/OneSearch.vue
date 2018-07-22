<template>
    <div class="one-search">
        <!-- 歌手 -->
        <span class="title" v-show="suggest.artists">歌手</span>
        <ul class="one-search-singer">
            <li v-for="(item ,index) in suggest.artists" :key="index" @click="select(item),toSinger(item)">
                <div class="one-search-singer-left">
                    <img :src="item.picUrl">
                </div>
                <div class="one-search-singer-right">
                    <span>{{ item.name }}</span>
                </div>
            </li>
        </ul>
        <!-- 歌单 -->
      <span class="title" v-show="suggest.playlists">歌单</span>
      <ul class="one-search-s">
        <li v-for="(item ,index) in suggest.playlists" :key="index" @click="toSongList(item),select(item)">
            <div class="one-search-sleft">
                <img :src="item.coverImgUrl">
            </div>
            <div class="one-search-sright">
                <span>{{ item.name }}</span>
                <span>{{ item.trackCount }}首，播放{{item.playCount}}次</span>
            </div>
        </li>
      </ul>
      <!-- 单曲 -->
      <span class="title" v-show="List">单曲</span>      
      <ul class="one-search-list">
        <li v-for="(item,index) in List" :key="index" @click="toPlayer(item),select(item)">
            <img src="@/assets/img/searchli.png">
            {{ item.name }}
        </li>
      </ul>
      <div class="loadbox">
          <Loading v-show="haveMore"></Loading>
      </div>
    </div>
</template>
<script>
import axios from 'axios'
import {mapGetters,mapMutations,mapActions} from 'vuex'
import {CheckEmptyStr} from '@/assets/js/util.js'
import Loading from '@/base/loading/Loading'
export default{
    props:['keyword'],
    data(){
        return{
            List:[],
            suggest:{},
            haveMore: true,
            page: 0,
        }
    },
    components:{
        Loading,
    },
    watch:{
        keyword(newV){
            if(newV==''){
                this.List= [];
                this.suggest= {};
                this.haveMore= false;
                return;
            }
            this.suggest = {};
            this.List = [];
            this.page = 0;
            this.haveMore = true;
            this.getList();
        }
    },
    computed:{
        ...mapGetters([
            'songList',
            'originList'
        ])
    },
    methods:{
        ...mapActions([
            'insertSong'
        ]),
        getList(){
            this.haveMore= true;
            this.getKeywordSuggest();
            this.getKeywordList();
        },
        getKeywordList(){
            if(CheckEmptyStr(this.keyword)){
                return;
            }else{
                axios.get(`/api/search?keywords=${this.keyword}&offset=${this.page}`).then((res)=>{
                    this.List=res.data.result.songs;
                    this.page+=30;
                }).catch((err)=>{
                    console.log(err);
                })
            }
        },
        getMoreList(){
            if(CheckEmptyStr(this.keyword)){
                return;
            }else{
                axios.get(`/api/search?keywords=${this.keyword}&offset=${this.page}`).then((res)=>{
                    if (!res.data.result.songs) {
                        this.haveMore = false;
                        return;
                    }
                    this.List=this.List.concat(res.data.result.songs);
                }).catch((err)=>{
                    console.log(err);
                })
            }
        },
        getKeywordSuggest(){
            if(CheckEmptyStr(this.keyword)){
                return;
            }else{
                 axios.get(`/api/search/suggest?keywords=${this.keyword}&offset=${this.page}`).then((res)=>{
                    this.suggest =res.data.result;
                }).catch((err)=>{
                    console.log(err);
                    console.log('获取搜索建议失败');
                })
            }
           
        },
        toPlayer(item){
            axios.get(`/api/song/detail?ids=${item.id}`).then((res)=>{
                return res.data.songs[0];
            }).then((song)=>{
                // 插入歌曲
                this.insertSong(song);     
            }).catch((err)=>{
                console.log(err);
                return 0;
            });
        },
        toSongList(item){
            axios.get(`/api/playlist/detail?id=${item.id}`).then((res)=>{
                return res.data.playlist;
            }).then((songs)=>{
                this.$router.push({path: '/songslist/'+songs.id,query:{
                    coverImgUrl: songs.coverImgUrl,
                    avatarUrl: songs.creator.avatarUrl,
                    }
                });
            }).catch((err)=>{
                console.log(err);
            })
        },
        toSinger(item){
            this.$router.push({path: '/singers-rank/list/'+item.id,query:{
                picUrl: item.picUrl,
                name: item.name
            }});
        },
        select(item){
            this.$emit('select',item);
        }
    }
}
</script>




<style>
/* 一级搜索 */
.one-search{
    width: 100%;
    margin-top: 5rem;
    margin-bottom: 6rem;
}
.one-search-singer,.one-search-list,.one-search-s{
    width: 100;
}
.one-search-s li,.one-search-singer li{
    overflow: hidden;
    height: 6rem;
    border-bottom: 0.01rem #eee solid;
    padding: 1rem 0;
    margin-bottom: 1rem;
}
.one-search-sleft,.one-search-singer-left{
    width: 20%;
    float: left;
    padding: 3%;
}
.one-search-sleft img,.one-search-singer img{
    width: 100%;
    height: auto;
}
.one-search-sright,.one-search-singer-right{
    width: 74%;
    float: left;
}
.one-search-sright span{
    width: 100%;
    display: block;
    height: 3rem;
    line-height: 3rem;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
}
.one-search-singer-right{
    display: block;
    height: 6rem;
    line-height: 6rem;
}
.one-search-list li{
    width: 100%;
    height: 4rem;
    line-height: 4rem;
    border-bottom: 0.01rem #DADADA solid;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
}
.one-search-list li img{
    padding-left: 3%;
}
.one-search-list li img{
    width: 2rem;
    height: 2rem;
}
.title{
    color: #d23023;
    margin-left: 3%;
    padding: 1rem 0;
    margin-bottom: 5rem;
    font-size: 1.7rem;
}
</style>

