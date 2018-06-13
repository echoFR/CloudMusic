<template>
  <div class="pheader">
      <span @click="goBack()" class="pheader-goback">
          <img src="@/assets/img/goback.png">
      </span>
      <span class="pheader-song">
          <div class="pheader-title">{{ playSong.name }}</div>
          <div class="pheader-singer">{{ playSong.singer }}</div>
      </span>
      <span class="pheader-share">
          <img src="@/assets/img/share.png">
      </span>
  </div>
</template>

<script>
export default{
   props:['playSong'],
    methods:{
        goBack(){            
            this.$router.go(-1);
        },
    },
}
</script>

<style>
.pheader{
    width: 100%;
    padding: 1rem 0;
    position: fixed;
    z-index: 100;
    height: 4.4rem;
    top: 0;
    left: 0;
}
.pheader span img{
    width: 2.6rem;
    height: 2.6rem;
}
.pheader-song{
    display: inline-block;
    width: 100%;
    position: relative;
    height: 4rem;
}
.pheader-title{
    display: block;
    position: absolute;
    margin: 0 4.2rem;
    height: 2.3rem;
    left: 0;
    top: 0;
    overflow: hidden;
    color: white;
}
.pheader-singer{
    position: absolute;
    top: 2.3rem;
    left: 0;
    margin-left: 4.2rem;
    color: #fff;
}
.pheader-goback,.pheader-share{
    position: absolute;
    top: 1.5rem;
    z-index: 1;
}
.pheader-goback{
    left: 0;
    margin-left: 1rem;
}
.pheader-share{
    right: 1rem;
}
.pheader-singer{
    font-size: 1.3rem;
}
</style>
