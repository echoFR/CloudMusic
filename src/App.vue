<template>
  <div class="app" ref="appbox">
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
  },
  methods:{
    ...mapMutations([
      'showHeader',
      'hideHeader',
      'hideMiniPlay',
      'showMiniPlay'
    ]),
  },
  computed:{
    ...mapGetters([
      'isShowHeader',//头部显示
    ]), 
  },
  mounted(){
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
  }
}
</script>
<style>
.app{
    vertical-align: baseline;
    background-color: #EFEFEF;
}
</style>
