<template>
  <div class="songs">
      <!-- 歌单头部 -->
      <songsHeader></songsHeader>
      <!-- 歌单列表 -->
      <songsData></songsData>
  </div>
</template>
<script>
import songsHeader from '@/components/songs/songs-header/Sheader'
import songsData from '@/components/songs/songs-data/SData'
export default {
  components:{
      songsHeader,
      songsData,
  }
}
</script>
<style>
.songs{
  margin-top: 9rem;
}
</style>

