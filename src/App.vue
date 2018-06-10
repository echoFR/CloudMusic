<template>
  <div class="app" ref="appbox">
    <MyAudio></MyAudio>
    <Header v-show="isShowHeader"></Header>
    <keep-alive exclude="list,player">
      <router-view></router-view>
    </keep-alive>
  </div>
</template>

<script>
import Header from '@/components/header/Header'
import MyAudio from '@/components/audio/Audio'

import {mapActions,mapGetters} from 'vuex'

export default {
  name: 'App',
  components:{
    Header,
    MyAudio
  },
  watch:{
    // 路由   设置头部
    $route(to,from){
      if(to.name=='recommend' || to.name=='songs' || to.name=='rank'){
        // this.$refs.appbox.style.paddingTop=9+'rem';
        this.$store.commit('showHeader');
      }else{
        this.$store.commit('hideHeader');
        // this.$refs.appbox.style.paddingTop=0;        
      }
    },
  },
  computed:{
    ...mapGetters([
      'isShowHeader',//头部显示
    ]), 
  }
}
</script>

<style>
.app{
    vertical-align: baseline;
}
</style>
