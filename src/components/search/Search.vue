<template>
  <div class="search">
    <SearchBox @watchKeyword='KeywordChange' ref="searchBox"></SearchBox>
    <!-- 一级搜索 -->
    <OneSearch v-show="keyword" :keyword='keyword'></OneSearch>
    <!-- 热门搜索 -->
    <div class="hot-search" v-show="!keyword">
      <span class="hot-search-title">热门搜索</span>
      <div class="hot-search-tip">
        <span class="hot-tip" v-for="(item,index) in HotList" :key="index" @click="searchHot(item.first)">
          {{item.first}}
        </span>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import OneSearch from '@/components/search/one-search/OneSearch'

import SearchBox from '@/base/search-box/SearchBox'
  export default{
    components:{
      SearchBox,
      OneSearch,
    },
    data(){
      return{
        HotList:[],
        keyword:'',
      }
    },
    methods:{
      getHotList(){
        axios.get('http://localhost:3000/search/hot').then((res)=>{
          this.HotList= res.data.result.hots;
        }).catch((err)=>{
          console.log(err);
          console.log('获取热门搜索失败');
        })
      },
      KeywordChange(newKeyword){
        this.keyword=newKeyword;
      },
      searchHot(hotKeyword){
        this.$refs.searchBox.setKeyword(hotKeyword);
      }
    },
    mounted(){
      this.getHotList();
    }
  }
</script>

<style>
@import './search.css';
</style>

