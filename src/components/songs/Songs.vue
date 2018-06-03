<template>
  <div class="songs">
      <!-- 歌单头部 -->
      <Sheader></Sheader>
      <!-- 歌单列表 -->
      <Songslist></Songslist>
  </div>
</template>
<script>
import Sheader from '@/components/songs/sheader/Sheader'
import Songslist from '@/components/songs/list/List'
export default {
  components:{
      Sheader,
      Songslist,
  }
}
</script>
<style>
</style>

