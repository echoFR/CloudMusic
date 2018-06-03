<template>
    <!-- 搜索列表 -->
    <div class="all-search-data">
        <ul class="all-search-dataul">
            <!-- <li v-for="(item,index) in searchSong" :key="index">
                <span class="search-singer">{{item.name}}</span>
                <span>{{item.artists[0].name+ (item.artists[1]?' / '+item.artists[1].name:'')}} - {{item.album.name}}</span>
                <img src="@/assets/img/allsearch.png" class="all-search-img">
            </li> -->
            <li>
                <span class="search-singer">歌名</span>
                <span>歌手-专辑</span>
                <img src="@/assets/img/allsearch.png" class="all-search-img">
            </li>
        </ul>
    </div>
</template>
<style>
@import './stype.css'
</style>

