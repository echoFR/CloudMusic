<template>
    <div class="songs-header" @click="toGood()">
        <router-link to=""></router-link>
          <div class="songs-header-left">
              <img src="@/assets/img/song2.png" alt="">
          </div>
          <div class="songs-header-ringht">
              <div class="right-title">
                <img src="@/assets/img/perfect.png" class="perfect">
                <span class="title"> 精品歌单</span>
                <span class="to-rignt"><img src="@/assets/img/toringht.png"></span>
              </div>
              <div class="right-test">
                <p class="right-test-title">曾经是否有被一句歌词打动</p>
                <span class="right-test-descri">一个故事一首成歌唱了出来生强烈的你曾经</span>
              </div>
          </div>
    </div> 
</template>
<script>
    export default{
        methods:{
            toGood(){
                console.log('精品歌单');
            }
        }
    }
</script>
<style>
@import './sheader.css'
</style>


