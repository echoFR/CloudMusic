<template>
  <div class="app" ref="appbox" id="app-box">
    <MyAudio></MyAudio>
    <Header v-show="isShowHeader"></Header>
    <keep-alive exclude="list,player,singers,singer-list">
      <router-view></router-view>
    </keep-alive>
  </div>
</template>

<script>
import Header from '@/components/header/Header'
import MyAudio from '@/components/audio/Audio'
import {mapActions,mapGetters, mapMutations} from 'vuex'
export default {
  name: 'App',
  data(){
    return {
      stop: false
    }
  },
  components:{
    Header,
    MyAudio,
  },
  watch:{
    // 路由   设置头部
    $route(to,from){
      if(to.name=='recommend' || to.name=='songs' || to.name=='rank'){
        this.showHeader();
      }else{
        this.hideHeader();
      }
      if(to.name=='player'){
        this.hideMiniPlay();
      }
      else{
        this.showMiniPlay();
      }  
    },
    stop () {
      let app = document.querySelector('#app-box')
      app.removeEventListener('touchend', this.firstPlay)
    }
  },
  methods:{
    ...mapMutations([
      'showHeader',
      'hideHeader',
      'hideMiniPlay',
      'showMiniPlay'
    ]),
    firstPlay () {
      let music = document.querySelector('#music-audio')
      music.play()
      if (music.src !== '') {
        this.stop = true
      }
    }
  },
  computed:{
    ...mapGetters([
      'isShowHeader',//头部显示
    ]), 
  },
  mounted(){
    let app = document.querySelector('#app-box')
    app.addEventListener('touchend', this.firstPlay)
    if(this.$route.name=='recommend' || this.$route.name=='songs' || this.$route.name=='rank'){
        this.$store.commit('showHeader');      
    }
    else{
        this.$store.commit('hideHeader');              
    }
    if(this.$route.name=='player'){
      this.hideMiniPlay();
    }
    else{
      this.showMiniPlay();
    } 
  },
}
</script>
<style>
.app{
    vertical-align: baseline;
    background-color: #EFEFEF;
}
</style>
