<template>
    <div class="singer">
        <Goback :title="name"></Goback>
        <img :src="picUrl" class="singer-img">
        <ListData :songsdata='hotSongs'></ListData>
        <ShowMore v-show="isShowMore"></ShowMore>
    </div>
</template>
<script>
import ListData from '@/base/list/list-data/ListData'
import ShowMore from '@/base/list/list-showmore/ShowMore'

import Goback from '@/base/goback/Goback'
import axios from 'axios'
import { mapGetters } from 'vuex';
    export default{
        name: 'singer-list',
        components:{
            Goback,
            ListData,
            ShowMore
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
                axios.get('http://localhost:3000/artists?id='+this.id).then((res)=>{
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
    margin-top: 4rem;
}
</style>

