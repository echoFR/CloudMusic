<template>
    <div class="loading" v-show="isShowLoading && haveMore" :style="{marginTop: top}">
        <img src="./loading.gif" align="absmiddle">{{loadText}}
    </div>
</template>
<script>
import {mapGetters} from 'vuex'
    export default{
        props:{
            loadText:{
                type: String,
                default: '努力加载中...'
            },
            haveMore:{
                type: Boolean,
                default: true
            },
            top:{
                type: String,
                default: '15rem'   
            }
        },
        computed:{
            ...mapGetters([
                'isShowLoading'
            ])
        }
    }
</script>
<style>
/* 加载更多 */
.loading{
    width: 100%;
    background-color: #EFEFEF;
    text-align: center;
    padding: .1rem 0;
    font-size: .15rem;
}
.loading img{
    margin-right: .15rem;
    width: .35rem;
    height: .35rem;
}
</style>

