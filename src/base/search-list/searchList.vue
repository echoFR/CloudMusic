<template>
    <div class="search-list">
        <ul class="search-list-ul">
            <li v-for="(item,index) in list" :key="index" @click="select(item)">
                <span>{{ item }}</span>
                <img src="@/assets/img/closeblack.png" @click.stop="delect(item)">          
            </li>
        </ul>
    </div>
</template>
<script>
    export default{
        props:{
            list:{
                type: Array,
                default: []
            }
        },
        methods:{
            select(item){
                this.$emit('select',item);
            },
            delect(item){
                this.$emit('delect',item);
            }
        }
    }
</script>
<style>
.search-list-ul{
    margin-top: 1rem;
    width: 100%;
    font-size: 1.4rem;
}
.search-list li{
    width: 100%;
    height: 4rem;
    line-height: 4rem;
    border-bottom: 0.01rem #DADADA solid;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    position: relative;
}
.search-list li span{
    padding-left: 3%;
}
.history-title{
    position: relative;
    margin-bottom: 1rem;
}
.search-list-ul li img,.history-title img{
    position: absolute;
    right: 1rem;
    top: 1rem;
}
.search-list-ul li img{
    width: 2rem;
    height: 2rem;
}
</style>


