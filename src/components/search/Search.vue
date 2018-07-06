<template>
  <div class="search">
    <SearchBox @watchKeyword='KeywordChange' ref="searchBox"></SearchBox>
    <!-- 一级搜索 -->
    <OneSearch v-show="upkeyword" :keyword='keyword' ref="oneSearch" @select='addHistory'></OneSearch>
    <!-- 热门搜索 -->
    <div class="hot-search" v-show="!upkeyword">
      <span class="hot-search-title">热门搜索</span>
      <div class="hot-search-tip">
        <span class="hot-tip" v-for="(item,index) in HotList" :key="index" @click="changeSearch(item.first)">
          {{item.first}}
        </span>
      </div>
    </div>
    <!-- 历史记录 -->
    <div class="history" v-show="!upkeyword && searchHistory.length">
      <div class="history-title">
        <span>历史记录</span>
        <img src="@/assets/img/remove.png" @click="clearHistory">
      </div>
      <SearchList :list='searchHistory' @delect='delectHistory' @select="changeSearch"></SearchList>
    </div>
    <!-- <div class="mask"> -->
      <!-- <div class="confirm">

      </div> -->
    <!-- </div> -->
  </div>
</template>

<script>

import {debounce} from '@/assets/js/util.js'
import height from '@/assets/js/height.js'
import axios from 'axios'
import OneSearch from '@/components/search/one-search/OneSearch'
import SearchList from '@/base/search-list/SearchList'
import {CheckEmptyStr} from '@/assets/js/util.js'
import SearchBox from '@/base/search-box/SearchBox'
import {mapGetters,mapMutations} from 'vuex'
  export default{
    components:{
      SearchBox,
      OneSearch,
      SearchList,
    },
    data(){
      return{
        HotList:[],
        keyword:'',
      }
    },
    computed:{
      upkeyword(){
        return !CheckEmptyStr(this.keyword);
      },
      ...mapGetters([
        'searchHistory'
      ])
    },
    methods:{
      ...mapMutations([
        'setSearchHistory'
      ]),
      getHotList(){
        axios.get('http://localhost:3000/search/hot').then((res)=>{
          this.HotList= res.data.result.hots;
        }).catch((err)=>{
          console.log(err);
          console.log('获取热门搜索失败');
        });
      },
      KeywordChange(newKeyword){
        this.keyword=newKeyword;
      },
      changeSearch(item){
        this.$refs.searchBox.setKeyword(item);
      },
      Scroll(){
          window.onscroll=()=>{
                if(height.getScrollTop() + height.getClientHeight()+1 >= height.getScrollHeight()) {
                  this.$refs.oneSearch.getMoreList();
                }
            }
      },
      addHistory(item){
        this.setSearchHistory(item.name);
      },
      delectHistory(item){
        console.log('从历史记录里面删除');
      },
      clearHistory(){
        console.log('清除历史记录');
      }
    },
    mounted(){
      this.getHotList();
      this.Scroll();   
    }
  }
</script>

<style>
@import './search.css';
</style>

