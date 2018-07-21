<template>
  <div class="search">
    <SearchBox @watchKeyword='KeywordChange' ref="searchBox"></SearchBox>
    <OneSearch v-show="upkeyword" :keyword='keyword' ref="oneSearch" @select='addHistory'></OneSearch>
    <div class="hot-search" v-show="!upkeyword">
      <span class="hot-search-title">热门搜索</span>
      <div class="hot-search-tip">
        <span class="hot-tip" v-for="(item,index) in HotList" :key="index" @click="changeSearch(item.first)">
          {{item.first}}
        </span>
      </div>
    </div>
    <div class="history" v-if="!upkeyword && !(searchHistory==undefined) && searchHistory.length">
      <div class="history-title">
        <span>历史记录</span>
        <img src="@/assets/img/remove.png" @click="displayConfirm">
      </div>
      <SearchList :list='searchHistory' @delect='delectHistory' @select="changeSearch"></SearchList>
    </div>
    <Confirm :showConfirm='showConfirm' :text='text' @noSelect="hideConfirm" @select='clear'></Confirm>
  </div>
</template>

<script>
import {debounce} from '@/assets/js/util.js'
import height from '@/assets/js/height.js'
import axios from 'axios'
import OneSearch from '@/components/search/one-search/OneSearch'
import SearchList from '@/base/search-list/SearchList'
import Confirm from '@/base/confirm/Confirm'
import {CheckEmptyStr} from '@/assets/js/util.js'
import SearchBox from '@/base/search-box/SearchBox'
import {mapGetters,mapMutations} from 'vuex'
  export default{
    components:{
      SearchBox,
      OneSearch,
      SearchList,
      Confirm,
    },
    data(){
      return{
        HotList:[],
        keyword:'',
        showConfirm: false,
        text:'确定将所有历史记录清空吗？'
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
        'setSearchHistory',
        'clearHistory',
        'delectHistory'
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
      displayConfirm(){
        this.showConfirm=true;
      },
      hideConfirm(){
        this.showConfirm=false;        
      },
      clear(){
        this.clearHistory();
        this.showConfirm=false;                
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

