<template>
    <div class="songslist-con">
        <ul class="songslist-con-ul">
            <li v-for="(item,index) in songsdata.tracks" :key="index">  
                <div class="songslist-con-box"  @click="toPlayer(item)">
                    <span class="songslist-title">{{ item.name }}</span>
                    <span>
                        {{ item.ar[0].name + ((item.ar[1] && item.ar[1].name)?' / '+item.ar[1].name : '') + (item.al?' - '+item.al.name:"") }}
                    </span>
                </div>
                <span class="songslist-num">{{ index+1 }}</span>
                <span class="songslist-more" @click="showMore(item)">
                    <img src="../../../assets/img/more2.png" alt="">
                </span>                
            </li>
        </ul>
    </div>
</template>
<script>
import axios from 'axios'
import {mapGetters,mapActions} from 'vuex'
export default{
    props: ['songsdata'],
    methods:{
        // 跳到播放器
        toPlayer(song){
            console.log('播放器');
            // this.$router.push({path:'/player/'+song.id})
            // this.getSongDetail(song.id);
            // this.getSongComment(song.id);
        },
        // 点击右侧获取更多
        showMore(song){
            // 每一首歌信息
            this.$store.commit('getSongData',song);
            // 获取歌的评论
            this.$store.dispatch('getSongComment',song.id);
            // 显示遮罩
            this.$store.commit('showMore');       
        }
    }
}

</script>
<style>
@import './list.css';
.animated {animation-duration: 0.3s;}
</style>

