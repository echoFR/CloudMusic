<template>
  <div class="go-back" ref="goback">
      <span class="go-back-left" @click="goBack()">
          <img src="@/assets/img/goback.png" align="absbottom">
      </span>
      <span class="go-back-title">
          歌单
      </span>
      <div class="go-back-right">
        <img src="@/assets/img/search.png" @click="songsSearch()">
        <img src="@/assets/img/more.png" @click.stop>  
      </div>  
  </div>
</template>

<script>
    export default{
        props:['songsArr'],
        methods: {
            // 返回歌单
            goBack(){
                window.history.go(-1);
            },
            // 搜索歌单内歌曲
            songsSearch(){
                //  获取歌单内歌曲       
                // 跳转到搜索
                // this.$router.push({path:'/listsearch'});               
            },
        },
    }
</script>

<style>
.go-back{
    width: 100%;
    font-size: 1.7rem;
    position: fixed;
    left: 0;
    top: 0;
    z-index: 200;
}
.go-back img{
    width: 2.6rem;
    height: 2.6rem;
}
.go-back-left{
    display: inline-block;
    margin-left: 1rem;
}
.go-back-title{
    height: 4rem;
    line-height: 4rem;
    display: inline-block;
}
.go-back-right{
    position: absolute;
    right: 0;
    top: 0.5rem;
}
.go-back-right img{
    margin-right: 1.5rem;
}

</style>

