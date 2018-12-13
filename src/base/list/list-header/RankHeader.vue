<template>
    <div class="ranklist-header" :style="{backgroundImage: 'url(' + songsdata.coverImgUrl + ')',height: 0.8+'rem'}">
        <GoBack :songsArr="songsdata.tracks" :style="{backgroundImage: 'url(' + songsdata.coverImgUrl + ')'}"></GoBack>
    </div>
</template>
<script>
import GoBack from '@/base/list/list-header/GoBack'
    export default{
        components:{
            GoBack,
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
    padding-top: 1.17rem;
}
</style>