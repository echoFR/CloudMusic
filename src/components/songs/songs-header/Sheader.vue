<template>
    <div class="songs-header">
        <router-link to=""></router-link>
          <div class="songs-header-left">
              <img src="@/assets/img/song2.png" alt="">
          </div>
          <div class="songs-header-ringht">
              <div class="right-title">
                <img src="@/assets/img/perfect.png" class="perfect">
                <span class="title"> 精品歌单</span>
                <span class="to-rignt"><img src="@/assets/img/toringht.png"></span>
              </div>
              <div class="right-test">
                <p class="right-test-title">曾经是否有被一句歌词打动</p>
                <span class="right-test-descri">一个故事一首成歌唱了出来生强烈的你曾经</span>
              </div>
          </div>
    </div> 
</template>
<script>
</script>
<style>
.songs-header{
    width: 100%;
    padding: 1.5rem 0;
    overflow: hidden;
    color: white;
    background-image: url('../../../assets/img/songsbg.jpg');
}
.songs-header-left{
    width: 30%;
    margin-left: 1rem;
    float: left;
}
.songs-header-ringht{
    width: 60%;
    float: left;
    margin-left: 2rem;
}
.songs-header-left img{
    width: 11rem;
    height: 11rem;
}
.right-title{
    font-size: 1.6rem;
    position: relative;
    margin-bottom: 1rem;
}
.perfect{
    width: 2.2rem;
    height: auto;
    vertical-align: middle;
}
.to-rignt{
    width: 3.5rem;
    height: 3.5rem;
    display: inline-block;
    cursor: pointer;
}
.to-rignt img{
    width: 2rem;
    height: auto;
    position: relative;
    left: 0;
    top: 0.4rem;
}
.right-test-title{
    font-size: 1.3rem;
}
.right-test-descri{
    font-size: 1rem;
    display: inline-block;
    margin-top: 1rem;
    color: azure;
}
</style>


