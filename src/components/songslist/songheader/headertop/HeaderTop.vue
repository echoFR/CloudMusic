<template>
  <div class="songslist-header-top">
    <div class="songslist-header-left">
        <span class="songslist-hear"><img src="@/assets/img/hear.png" align="absbottom">
            {{songsdata.playCount}}      
        </span>
        <span class="songslist-more"><img src="@/assets/img/deta.png"></span>
        <img :src="songsdata.coverImgUrl">
    </div>
    <div class="songslist-header-ringht">
        <div class="right-title">
            <span>{{songsdata.name}}</span>
        </div>
        <div class="right-text">
            <span class="right-auto">
            <img :src="songsdata.avatarUrl" align="absmiddle">{{songsdata.nickname}}
            </span>
        </div>
    </div>
  </div>
</template>
<script>
    export default{
        props:['songsdata']
    }
</script>

<style>
@import './headertop.css'
</style>

