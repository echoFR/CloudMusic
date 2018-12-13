<template>
    <div class="songslist-header">
        <GoBack :songsArr="songsdata.tracks" :style="{backgroundColor: '#758383'}"></GoBack>
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
.songslist-header{
    position: relative;
    width: 100%;
    overflow: hidden;
    color: white;
    background-image: url('../../../assets/img/songsbg.jpg');
}
.songslist-header-top{
    width: 100%;
    overflow: hidden;
    margin-bottom: 0.05rem;
    margin-top: .6rem;
}
.songslist-header-left{
    float: left;
    position: relative;
    margin: 0 .1rem 0 .1rem;
}
.songslist-hear{
    position: absolute;
    right: 0rem;
    top: 0rem;
}
.songslist-header-left span img{
    width: .15rem;
    height: .15rem;
}
.songslist-header-left img{
    width: 1.1rem;
    height: 1.1rem;
}
.songslist-more{
    position: absolute;
    bottom: 0;
    right: 0;
}
/* 右侧标题 */
.songslist-header-ringht{
    float: left;
    width: 50%;
}
.right-title{
    font-size: .14rem;
    margin-bottom: .2rem;
}
.right-text{
    width: 100%;
    margin-left: .1rem;
}
.right-auto img{
    width: .3rem;
    height: .3rem;
    border-radius: .15rem;
    margin-right: 0.05rem;
}
</style>

