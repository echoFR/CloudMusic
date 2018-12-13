<template>
    <div class="singers-rank">
        <Goback :title='title'></Goback>
        <div class="rank-list">
            <Loading v-show="isShowLoading"></Loading>
            <ul class="rank-list-ul">
                <li v-for="(item,index) in singers" :key="index" @click="goSinger(item)">
                    <div class="rank-num">{{ index+1 }}</div>
                    <div class="rank-li-img"><img v-lazy='item.picUrl'></div>
                    <div class="rank-li-text">
                        <span>{{ item.name }}</span>
                        <span>{{ item.musicSize}}首</span>
                    </div>
                </li>
            </ul>
        </div>
    </div>
</template>
<script>
import axios from 'axios'
import {api} from '@/assets/js/config'
import Goback from '@/base/goback/Goback'
import Loading from '@/base/loading/Loading'
import {mapMutations,mapGetters} from 'vuex'
export default{
    name: 'singers',
    components:{
        Goback,
        Loading
    },
    computed:{
        ...mapGetters([
            'isShowLoading'
        ])
    },
    data(){
        return{
            title:'CloudMusic 歌手榜',
            singers:[],
        }
    },
    methods:{
        goSinger(item){
            console.log(item)
            this.$router.push({path: '/singers-rank/list/'+item.id,query:{
                picUrl: item.picUrl,
                name: item.name
            }});
        }
    },
    mounted() {
        if(this.$route.query.act=='singers-rank'){
            axios.get(`${api}/toplist/artist`).then((res)=>{
                console.log(this.singers)
            }).catch((err)=>{
                console.log(err);
            });
        }
        else{
            this.title=this.$route.query.title;
            let cat= this.$route.query.cat;
            axios.get(`${api}/artist/list?cat=${cat}`).then((res)=>{
                this.singers=res.data.artists;
            }).catch((err)=>{
                console.log(err);
            });
        }
    }
}
</script>
<style>
@import 'singers-rank.css';
.singers-rank{
    width: 100%;
    padding: 0.6rem 0 0.5rem 0;
}
</style>

