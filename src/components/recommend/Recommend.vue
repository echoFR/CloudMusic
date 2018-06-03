<template>
    <div id="recommend">
      <!-- 轮播图 -->
        <Slide></Slide>
      <!-- 导航栏选项 -->
        <Tag></Tag>  
      <!-- 推荐歌单 -->
        <RecoSongs></RecoSongs>
    </div>
</template>
<script>
// Slide 轮播图
import Slide from '@/components/recommend/slide/Slide'
import Tag from '@/components/recommend/tag/Tag'
import RecoSongs from './recosongs/Recosongs'
export default {
  components: {
    Slide,
    Tag,
    RecoSongs
  }
}
</script>


