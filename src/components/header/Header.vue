<template>
  <div class="header">
    <div class="header-top">
      <router-link to="/info" class="more"><img src="@/assets/img/more.png"></router-link>
      <router-link to="/search" class="searchbtn"><img src="@/assets/img/search.png"></router-link>      
      <div class="text">Music Echo</div>
    </div>
    <div class="header-bottom">
      <ul class="header-nav">  
        <router-link to="/recommend" tag="li">推荐</router-link>
        <router-link to="/songs" tag="li">歌单</router-link>
        <router-link to="/rank" tag="li">排行榜</router-link>
      </ul>
    </div>    
  </div>
</template>
<script>
  
</script>
<style scoped>
.header{
    width: 100%;
    font-size: 1.4rem;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 100;
}
.header-top{
    width: 100%;
    position: relative;
    padding: 1rem 0;
    height: 3rem;
    line-height: 3rem;
    text-align: center;
    color: aliceblue;
    background-color: #d23023;
    font-size: 1.9rem;
}
.more,.searchbtn{
    width: 4rem;
    height: 4rem;
    position: absolute;
    top: 1rem;
}
.more{
    left: 0;    
}
.searchbtn{
    right: 0;
} 
.more img,.searchbtn img{
    width: 3rem;
    height: 3rem;
}


.header-bottom{
    width: 100%;
    background-color: white;
}
.header-nav{
    width: 100%;
    height: 4rem;
    line-height: 4rem;
    overflow: hidden;
}
.header-nav li{
    float: left;
    text-align: center;
    width: 33.3%;
}
.router-link-active{
    color: red;
}
</style>

