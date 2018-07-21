<template>
    <div class="recommend">
      <!-- 轮播图 -->
        <Slide></Slide>
      <!-- 导航栏选项 -->
        <div class="tag">
          <ul class="tag-nav">
                <li @click="toSingersRank"><img src="@/assets/img/recommond.png"><span>歌手排名</span></li>
                <router-link to="/songs" tag="li">
                    <img src="@/assets/img/songlist.png"><span>热门歌单</span>
                </router-link>               
                <router-link to="/rank" tag="li">
                    <img src="@/assets/img/rank.png"><span>排行榜</span>
                </router-link>                                          
          </ul>
      </div>  
      <!-- 推荐歌单 -->
      <div class="singer-sort">
        <div class="singer-sort-title">歌手分类</div>
        <div class="singer-sort-tag">
          <span @click="toSingers(5001,'入驻歌手')">入驻歌手</span>
          <span @click="toSingers(1001,'华语男歌手')">华语男歌手</span>
          <span @click="toSingers(1002,'华语女歌手')">华语女歌手</span>
          <span @click="toSingers(1003,'华语组合/乐队')">华语组合/乐队</span>
          <span @click="toSingers(2001,'欧美男歌手')">欧美男歌手</span>
          <span @click="toSingers(2002,'欧美女歌手')">欧美女歌手</span>
          <span @click="toSingers(2003,'欧美组合/乐队')">欧美组合/乐队</span>
          <span @click="toSingers(6001,'日本男歌手')">日本男歌手</span>
          <span @click="toSingers(6002,'日本女歌手')">日本女歌手 </span>
          <span @click="toSingers(6003,'日本组合/乐队')">日本组合/乐队</span>
          <span @click="toSingers(7001,'韩国男歌手')">韩国男歌手 </span>
          <span @click="toSingers(7002,'韩国女歌手')">韩国女歌手 </span>
          <span @click="toSingers(7003,'韩国组合/乐队')">韩国组合/乐队 </span>
          <span @click="toSingers(4001,'其他男歌手')">其他男歌手</span>
          <span @click="toSingers(4002,'其他女歌手')">其他女歌手</span>
          <span @click="toSingers(4003,'其他组合/乐队')">其他组合/乐队</span>
        </div>
      </div>
    </div>
</template>
<script>
// // Slide 轮播图
import Slide from '@/base/slide/Slide'
export default {
  components: {
    Slide,
  },
  methods:{
    toSingers(cat,title){
          this.$router.push({path: '/singers-rank',query:{
              act: 'stort',
              cat: cat,
              title: title
          }})
    },
    toSingersRank(){
          this.$router.push({path: '/singers-rank',query:{
              act: 'singers-rank' 
          }})
    }
  }
}
</script>
<style>
.recommend{
  margin-top: 9rem;
  background-color: #EFEFEF;
  padding-bottom: 5rem;  
}

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
    width: 33.2%;
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

.singer-sort{
  width: 100%;
  border-top: 0.1rem #B6B6B6 solid;
  
}
.singer-sort-title{
  padding: 1rem;
  font-size: 1.5rem;
  color: red;
}
.singer-sort-tag{
  margin-top: 0.5rem;
  width: 92%;
  padding: 0 4%;
}
.singer-sort-tag span{
  padding: 0.6rem;
  display: inline-block;
  border: 0.1rem #B6B6B6 solid;
  border-radius: 0.5rem;
  margin: 0 1rem 1.5rem 0;
}
</style>



