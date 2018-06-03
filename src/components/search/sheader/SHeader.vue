<template>
    <!-- 搜素输入框 -->
    <div class="all-search">
        <!-- 搜索头部 -->
        <div class="all-search-header">
        <span class="all-search-gohome">
            <img src="@/assets/img/goback.png" class="gohome" @click="gohome()"> 
        </span>
        <input type="text" @keyup="getAllSearch($event)" @blur="showText()" @focus="hideText()" v-model="keycodes" id="sInput">
        <img src="@/assets/img/close.png" class="close" @click="Auto()">
        </div>

        <!-- 选择搜索类型 -->
        <div class="search-select">
            <ul class="search-select-ul">
                <router-link to="/search/song" tag="li">单曲</router-link>
                <router-link to="/search/singer" tag="li">歌手</router-link>
                <router-link to="/search/songslist" tag="li">歌单</router-link>
                <router-link to="/search/album" tag="li">专辑</router-link>
                <router-link to="/search/user" tag="li">用户</router-link>                
            </ul>
        </div>
    </div>
</template>
<script>
import axios from 'axios'
export default{
    data(){
        return{
            keycodes:'搜索',
            searchSong:[],
        }
    },
    methods:{
        // 返回
        gohome(){
            window.history.go(-1);
        },
        // 默认input
        showText(){
            this.keycodes="搜索";
        },
        hideText(){
            this.keycodes="";                             
        },
        Auto(){
            document.getElementById("sInput").focus();
            this.keycodes="";
        },
        // 搜索
        getAllSearch(event){
            if(this.keycodes!=""){
                // 单曲
                axios.get('http://localhost:3000/search?keywords='+this.keycodes).then((res)=>{
                    console.log(res.data.result.songs[3].artists);
                    this.searchSong=res.data.result.songs;
                    // console.log(this.searchSong);
                }).catch((err)=>{  
                    console.log(err);
                    console.log("请求失败");
                });
                // 专辑 type=10 歌手 100 歌单1002 用户1002 MV1004 歌词1006
            }
        }

    }   
}
</script>

</script>
<style>
@import './sheader.css'
</style>


