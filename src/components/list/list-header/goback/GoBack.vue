<template>
  <div class="go-back">
      <span class="go-back-left" @click="goBack()">
          <img src="@/assets/img/goback.png" align="absbottom">
      </span>
      <span class="go-back-title">
          歌单
      </span>
      <div class="go-back-right">
        <img src="@/assets/img/search.png" @click="songsSearch()">
        <img src="@/assets/img/more.png" @click="moreDo()">  
      </div>
      <transition name="select" enter-active-class="animated fadeInRight" leave-active-class="animated fadeOutRight">
        <div class="select-more" v-show="isShowSelect" >
            <ul>
                <li>选择歌单排序</li>
                <li>清空下载文件</li>
                <li>举报</li>
            </ul>
        </div>
      </transition>    
  </div>
</template>

<script>
import axios from 'axios'
import {mapGetters,mapActions} from 'vuex'
import stopBubble from '@/assets/js/stopBubble.js'
    export default{
        props:['songsArr'],
        data(){
            return{
                isShowSelect: false
            }
        },
        methods: {
            // 返回歌单
            goBack(){
                window.history.go(-1);
            },
            // 搜索歌单内歌曲
            songsSearch(){
                //  获取歌单内歌曲       
                // 跳转到搜索
                // this.$router.push({path:'/listsearch'});               
            },
            // 更多设置
            moreDo(){
                stopBubble();// 防止冒泡
                this.isShowSelect= true;
            },
            nomoreDo(){
                window.onclick=()=>{
                this.isShowSelect= false;
                }
            }
        },
        mounted(){
            // 点击其他地方隐藏
            this.nomoreDo();
        }

    }
</script>

<style>
@import './goback.css'

</style>

