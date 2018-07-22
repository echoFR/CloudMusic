import Vue from 'vue'
import Router from 'vue-router'
// import RankList from '@/base/singers-rank/List'

const Recommend= (resolve)=>{
  import('@/components/recommend/Recommend').then((module)=>{
    resolve(module)
  })
}
const Songs= (resolve)=>{
  import('@/components/songs/Songs').then((module)=>{
    resolve(module)
  })
}
const Rank= (resolve)=>{
  import('@/components/rank/Rank').then((module)=>{
    resolve(module)
  })
}
const Search= (resolve)=>{
  import('@/components/search/Search').then((module)=>{
    resolve(module)
  })
}
const List= (resolve)=>{
  import('@/base/list/List').then((module)=>{
    resolve(module)
  })
}
const Player= (resolve)=>{
  import('@/components/player/Player').then((module)=>{
    resolve(module)
  })
}
const Info= (resolve)=>{
  import('@/components/info/Info').then((module)=>{
    resolve(module)
  })
}
const singersRank= (resolve)=>{
  import('@/base/singers-rank/singersRank').then((module)=>{
    resolve(module)
  })
}
const RankList= (resolve)=>{
  import('@/base/singers-rank/List').then((module)=>{
    resolve(module)
  })
}
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
