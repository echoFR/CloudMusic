<template>
    <div class="play-all-header">
        <span class="play-all-left">
            <img src="@/assets/img/play.png" align="absmiddle">
            播放全部（共{{songsdata.number}}首）
        </span>
        <span class="play-all-right">收藏（{{songsdata.subscribedCount}}人）</span>
    </div>
</template>
<script>
    export default{
        props: ['songsdata'],
    }
</script>

<style>
.play-all-header{
    width: 100%;
    overflow: hidden;
    font-size: 1.4rem;
    height: 4rem;
    line-height: 4rem;
}
.play-all-left{
    float: left;
    width: 70%;
    border-bottom: 0.1rem solid #eee;
}
.play-all-right{
    width: 30%;
    float: right;
    background-color: #F9520F;
    height: 3.8rem;
    text-align: center;
}
.play-all-left img{
    width: 2rem;
    height: 2rem;
}
</style>

