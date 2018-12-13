<template>
    <div class="singer">
        <Goback :title="name"></Goback>
        <img :src="picUrl" class="singer-img">
        <Loading></Loading>
        <ListData :songsdata='hotSongs'></ListData>
        <ShowMore v-show="isShowMore"></ShowMore>
    </div>
</template>
<script>
import ListData from '@/base/list/list-data/ListData'
import ShowMore from '@/base/list/list-showmore/ShowMore'
import Loading from '@/base/loading/Loading'

import Goback from '@/base/goback/Goback'
import axios from 'axios'
import {api} from '@/assets/js/config'
import { mapGetters } from 'vuex';
    export default{
        name: 'singer-list',
        components:{
            Goback,
            ListData,
            ShowMore,
            Loading
        },
        computed:{
            ...mapGetters(['isShowMore'])
        },
        data(){
            return{
                picUrl: '',
                id: 0,
                name: '歌手',
                hotSongs: {
                    tracks: [],
                },
            }
        },
        methods:{
            getList(){
                this.picUrl= this.$route.query.picUrl;
                this.id= this.$route.params.id;
                this.name= this.$route.query.name;
                axios.get(`${api}/artists?id=${this.id}`).then((res)=>{
                    this.hotSongs.tracks=res.data.hotSongs;
                }).catch((err)=>{
                    console.log(err);
                })
            },
        },
        mounted() {
            this.getList();
        },
    }
</script>
<style>
.singer{
    width: 100%;
}
.singer-img{
    width: 100%;
    height: auto;
    margin-top: .4rem;
}
</style>

