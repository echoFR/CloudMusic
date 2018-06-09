<template>
  <div class="tag">
      <ul class="tag-nav">
            <router-link to="/private" tag="li">
                <img src="@/assets/img/fm.png"><span>私人FM</span>
            </router-link>
            <router-link to="/everday" tag="li">
                <img src="@/assets/img/recommond.png"><span>每日推荐</span>
            </router-link>               
            <router-link to="/songs" tag="li">
                <img src="@/assets/img/songlist.png"><span>歌单</span>
            </router-link>               
            <router-link to="/rank" tag="li">
                <img src="@/assets/img/rank.png"><span>排行榜</span>
            </router-link>                                          
      </ul>
  </div>
</template>
<style>
.tag{
    padding: 1rem 0;
    width: 100%;
    border-bottom: 0.05rem solid #eee;
}
.tag-nav{
    width: 100%;
    overflow: hidden;
}
.tag-nav li{
    float: left;
    width: 25%;
    text-align: center;
}
.tag-nav li img{
    width: 3rem;
    height: 3rem;
}
.tag-nav li span{
    display: block;
    width: 100%;
    text-align: center;
    font-size: 1.1rem;
}
</style>

