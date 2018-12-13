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
    width: 98%;
    padding: .1rem 1%;
    position: fixed;
    left: 0;
    top: 0;
    z-index: 100;
}
.goback{
    width: .26rem;
    height: .26rem;
}
.goback-title{
    margin-left: .0.5rem;
    color: white;
    font-size: 16px;
    position: relative;
    left: 0;
    top: -0.06rem;
}
</style>

