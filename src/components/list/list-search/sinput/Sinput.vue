<template>
  <div class="list-search">
      <!-- 搜素输入框 -->
      <div class="search-header">
        <span class="goback-box">
            <img src="@/assets/img/goback.png" class="goback" @click="goBack()"> 
        </span>
        <input type="text" @blur="showText()" @focus="hideText()" v-model="searchData">
      </div>
  </div>
</template>
<script>
export default{
    data(){
        return{
            songsArr:[],
            searchData:'搜索歌单内歌曲',
            filterArr:[],
            searchedArr:[]
        }
    },
    methods:{
        // 返回
        goBack(){
            window.history.go(-1);
        },
        // 默认input
        showText(){
            this.searchData="搜索歌单内歌曲";
        },
        hideText(){
            this.searchData="";                             
        },
    },
    // mounted(){
    // //  获取歌单内歌曲
    //     this.songsArr=this.$store.state.mutations.songsArr;
    //     for(let item in this.songsArr){
    //         this.filterArr.push({
    //             id: (this.songsArr[item]).id,
    //             album: (this.songsArr[item]).al.name,
    //             name: (this.songsArr[item]).name,
    //             singer: (this.songsArr[item]).ar[0].name+((this.songsArr[item]).ar[1]?' / '+(this.songsArr[item]).ar[1].name:'')
    //         });
    //     }
    //     // 过滤后的歌曲
    //     for(let key in this.filterArr){ 
    //         if((this.filterArr[key].album).includes('我')||(this.filterArr[key].name).includes("我")||(this.filterArr[key].singer).includes("我")){
    //             this.searchedArr.push(this.filterArr[key]);
    //         }
    //     }        
    //     // console.log(this.searchedArr); 
    // },     
}
</script>

</script>
<style>
@import './sipnut.css'
</style>

