<template>
  <div class="search">
      <SHeader></SHeader>
      <!-- 搜索数据 -->
      <router-view></router-view>
  </div>
</template>
<script>
import SHeader from '@/components/search/sheader/SHeader'
export default{
  components:{
    SHeader,
  }
}
</script>
