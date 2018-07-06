<template>
    <div class="ranklist-header" :style="{backgroundImage: 'url(' + songsdata.coverImgUrl + ')'}">
        <GoBack :songsArr="songsdata.tracks" :style="{backgroundImage: 'url(' + songsdata.coverImgUrl + ')'}"></GoBack>
        <HeaderBottom :songsdata="songsdata"></HeaderBottom>
    </div>
</template>
<script>
import GoBack from '@/base/list/list-header/goback/GoBack'
import HeaderTop from '@/base/list/list-header/headertop/HeaderTop'
import HeaderBottom from '@/base/list/list-header/headerbottom/HeaderBottom'
    export default{
        components:{
            GoBack,
            HeaderBottom
        },
        props:['songsdata'],
    }
</script>
<style>
.ranklist-header{
    position: relative;
    width: 100%;
    overflow: hidden;
    color: white;
    background-size: 100% 100%;
    padding-top: 11.7rem;
}
</style>