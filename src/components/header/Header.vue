<template>
  <div id="header">
    <div class="header-top">
      <router-link to="/info" class="more"><img src="@/assets/img/more.png"></router-link>
      <router-link to="/search" class="search"><img src="@/assets/img/search.png"></router-link>      
      <div class="text">Music Echo</div>
    </div>
    <!-- 导航栏 -->
    <div class="header-bottom">
      <ul class="header-nav">  
        <router-link to="/recommend" tag="li">推荐</router-link>
        <router-link to="/songs" tag="li">歌单</router-link>
        <router-link to="/rank" tag="li">排行榜</router-link>
        <router-link to="/search" tag="li">搜索</router-link>
      </ul>
    </div>    
  </div>
</template>
<script>
  
</script>
<style scoped>
@import './header.css';
</style>

