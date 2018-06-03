<template>
  <div id="app">
    <Header v-show="isShowHeader"></Header>
    <router-view></router-view>
  </div>
</template>

<script>
import Header from '@/components/header/Header'
import {mapActions,mapGetters} from 'vuex'
export default {
  name: 'App',
  components:{
    Header
  },
  watch:{
    // 路由   设置头部
    $route(to,from){
      if(to.name=='recommend' || to.name=='songs' || to.name=='rank'){
        this.$store.commit('showHeader');
      }else{
        this.$store.commit('hideHeader');
      }
    }
  },
  computed:{
    ...mapGetters([
      'isShowHeader',//头部显示
    ]),
  }
}
</script>

<style>
@import './assets/css/common.css'
</style>
