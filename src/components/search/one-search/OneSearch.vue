<template>
    <div class="one-search">
      <div class="one-search-title">搜素 ‘{{ keyword }}’</div>
      <ul class="one-search-ul">
        <li v-for="(item,index) in List" :key="index">
          <div>
            <img src="@/assets/img/searchli.png">
            <span>{{ item.name }}</span>
          </div>
        </li>
      </ul>
    </div>
</template>
<script>
import axios from 'axios'
export default{
    props:['keyword'],
    data(){
        return{
            List:[],
            suggest:{},
            haveMore: true,
            page: 0,

        }
    },
    watch:{
        keyword(newV){
            if(newV==''){
                this.List= [];
                this.suggest= {};
                this.haveMore= false;
                return;
            }
            this.suggest = {};
            this.List = [];
            this.page = 0;
            this.haveMore = true;
            this.getList();
        }
    },
    methods:{
        getList(){
            this.getKeywordList();
        },
        getKeywordList(){
            axios.get(`http://localhost:3000/search?keywords=${this.keyword}`).then((res)=>{
                if(res.data.code==400){
                    return;
                }
                else if(!res.data.result.songs){
                    return;
                }
                this.List=res.data.result.songs;
            }).catch((err)=>{
                console.log(err);
            })
        }
    }
}
</script>




<style>
/* 一级搜索 */
.one-search{
    width: 96%;
    margin: 0 auto;
    background-color: white;
    margin-top: 0.3rem;
    border-radius: 0.4rem;
    box-shadow: 1rem 1rem 5rem #888888;
}
.one-search-title{
    width: 97%;
    color: #4381EB;
    height: 3.5rem;
    padding-left: 3%;
    line-height: 3.5rem;
    border-bottom: 0.01rem #eee solid;
}
.one-search-ul{
    width: 97%;
    padding-left: 3%;
}
.one-search-ul li{
    width: 100%;
    height: 3.5rem;
    line-height: 3.5rem;
    border-bottom: 0.01rem #eee solid;
}
.one-search-ul li img{
    width: 2rem;
    height: 2rem;
}
</style>

