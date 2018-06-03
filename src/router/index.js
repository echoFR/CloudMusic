import Vue from 'vue'
import Router from 'vue-router'
import Recommend from '@/components/recommend/Recommend'
import Songs from '@/components/songs/Songs'
import Rank from '@/components/rank/Rank'
import Songslist from '@/components/songslist/Songslist'
import Player from '@/components/player/Player'
import Info from '@/components/info/Info'
import Search from '@/components/search/Search'
import SType from '@/components/search/stype/SType'
import ListSearch from '@/components/songslist/listsearch/ListSearch'
Vue.use(Router)
export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/recommend'
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
      path: '/rank',
      name: 'rank',
      component: Rank
    },
    {
      path: '/songslist/:id',
      component: Songslist,
      name:'songslist'
    },
    {
      path: '/player/:id',
      component: Player,
      name: 'player'
    },
    {
      path: '/info',
      component: Info,
      name: 'info'
    },
    {
      path: '/search',
      component: Search,
      name: 'search',
      children:[
        {
          path:'song',
          component:SType,
        },
        {
          path: 'singer',
          component:SType,          
        },
        {
          path: 'songslist',
          component:SType,          
        },
        {
          path: 'album',
          component:SType,          
        },
        {
          path: 'user',
          component:SType,          
        },
      ]
    },
    {
      path: '/listsearch', //歌单内查找歌曲
      component: ListSearch,
      name: 'listsearch'
    }
  ],
  mode:'history',
})
