<template>
  <div class="hot-search">
    <!-- 搜索头部 -->
    <div class="hot-search-header">
      <div class="hot-search-header-left">
        <img src="@/assets/img/goback.png" @click="goBack()" class="goback">
      </div>
      <div class="hot-search-header-right">
        <input type="text" class="search-input">
        <img src="@/assets/img/close.png" class="close" v-show="false">
      </div>
    </div>
    <!-- 热门搜索 -->
    <div class="popular-search">
      <span class="popular-search-title">热门搜索</span>
      <div class="popular-search-tip">
        <span class="popular-tip" v-for="(item,index) in popularList" :key="index" @click="searchPopular(item.first)">
          {{item.first}}
        </span>
        
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
  export default{
    data(){
      return{
        popularList:[],
      }
    },
    methods:{
      goBack(){
        this.$router.go(-1);
      },
      getPopularList(){
        axios.get('http://localhost:3000/search/hot').then((res)=>{
          this.popularList= res.data.result.hots;
        }).catch((err)=>{
          console.log(err);
          console.log('获取热门搜索失败');
        })
      },
      searchPopular(keyword){
        console.log(keyword);
      }
    },
    mounted(){
      this.getPopularList();
    }
  }
</script>

<style>
@import './search.css';
.hot-search{
  background-color: #EFEFEF;
  font-size: 1.5rem;
  margin-bottom: 5rem;  
}
</style>

