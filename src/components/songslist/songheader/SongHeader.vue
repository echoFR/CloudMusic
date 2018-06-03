<template>
    <div class="songslist-header">
        <GoBack :songsArr="songsdata.tracks"></GoBack>
        <HeaderTop :songsdata="songsdata"></HeaderTop>
        <HeaderBottom :songsdata="songsdata"></HeaderBottom>
    </div>
</template>
<script>
import GoBack from '@/components/songslist/songheader/goback/GoBack'
import HeaderTop from '@/components/songslist/songheader/headertop/HeaderTop'
import HeaderBottom from '@/components/songslist/songheader/headerbottom/HeaderBottom'
    export default{
        components:{
            GoBack,
            HeaderTop,
            HeaderBottom
        },
        props:['songsdata']
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

