<template>
  <div class="audio">
      <audio :src="playerUrl" autoplay="autoplay"></audio>
  </div>
</template>
<script>
import {mapGetters,mapMutations} from 'vuex'
export default{
  computed:{
    ...mapGetters([
      'playerStatus',
      'playerUrl'
    ]),
  }
}
</script>
