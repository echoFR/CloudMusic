import Vue from 'vue'
import Router from 'vue-router'
import Recommend from '@/components/recommend/Recommend'
import Songs from '@/components/songs/Songs'
import Rank from '@/components/rank/Rank'
import Search from '@/components/search/Search'
import List from '@/base/list/List'
import Player from '@/components/player/Player'
import Info from '@/components/info/Info'
import singersRank from '@/base/singers-rank/singersRank'
import RankList from '@/base/singers-rank/List'
Vue.use(Router)
export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/recommend',
    },
    {
      path: '/recommend',
      name: 'recommend',
      component: Recommend
    },
    {
      path: '/songs',
      name: 'songs',
      component: Songs
    },
    {
      path: '/songslist/:id',
      component: List,
      name:'songslist',
    },
    {
      path: '/rank',
      name: 'rank',
      component: Rank
    },
    {
      path: '/player/:id',
      component: Player,
      name: 'player',
    },
    {
      path: '/search',
      component: Search,
      name: 'search',
    },
    {
      path: '/info',
      component: Info,
      name: 'info'
    },
    {
      path: '/singers-rank',
      component: singersRank,
    },
    {
      path: '/singers-rank/list/:id',
      component: RankList,
    }
  ],
  mode:'history',
  scrollBehavior: () => ({ y: 0 }), // 滚动条滚动的行为，不加这个默认就会记忆原来滚动条的位置
})
