<template>
    <div class="loading">
        <img src="./loading.gif" align="absmiddle">{{loadText}}
    </div>
</template>
<script>
    export default{
        props:{
            loadText:{
                type: String,
                default: '努力加载中...'
            }
        }
    }
</script>
<style>
/* 加载更多 */
.loading{
    width: 100%;
    background-color: #EFEFEF;
    text-align: center;
    padding: 1rem 0;
    font-size: 1.5rem;
}
.loading img{
    margin-right: 1.5rem;
    width: 3.5rem;
    height: 3.5rem;
}
</style>

