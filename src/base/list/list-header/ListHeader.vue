<template>
    <div class="songslist-header">
        <GoBack :songsArr="songsdata.tracks" :style="{backgroundColor: '#758383'}"></GoBack>
        <HeaderTop :songsdata="songsdata"></HeaderTop>
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
            HeaderTop,
            HeaderBottom
        },
        props:['songsdata'],
    }
</script>
<style>
.songslist-header{
    position: relative;
    width: 100%;
    overflow: hidden;
    color: white;
    background-image: url('../../../assets/img/songsbg.jpg');
}
</style>

