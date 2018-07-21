<template>
    <div class="goback-box" :style="{backgroundColor: '#d23023'}">
            <img src="@/assets/img/goback.png" @click="goback" class="goback">
            <span class="goback-title">{{ title }}</span>
    </div>
</template>
<script>
    export default{
        props:{
            title:{
                type: String,
                default: 'CloudMusic'
            }
        },
        methods:{
            goback(){
                this.$router.go(-1);
            }
        },
    }
</script>
<style>
.goback-box{
    width: 100%;
    padding: 1rem 0;
    position: fixed;
    left: 0;
    top: 0;
    z-index: 100;
}
.goback{
    width: 2.6rem;
    height: 2.6rem;
}
.goback-title{
    margin-left: 1rem;
    color: white;
    font-size: 1.6rem;
    position: relative;
    left: 0;
    top: -0.6rem;
}
</style>

