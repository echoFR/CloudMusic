<template>
    <div class="recommend">
      <!-- 轮播图 -->
        <Slide></Slide>
      <!-- 导航栏选项 -->
        <Tag></Tag>  
      <!-- 推荐歌单 -->
    </div>
</template>
<script>
// // Slide 轮播图
import Slide from '@/base/slide/Slide'
import Tag from '@/components/recommend/recommend-tag/Tag'
import Content from '@/components/recommend/recommend-content/Content'
export default {
  components: {
    Slide,
    Tag,
    Content
  }
}
</script>
<style>
</style>



