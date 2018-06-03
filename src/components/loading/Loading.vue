<template>
    <div class="loading">
        <img src="@/assets/img/getmore3.gif" align="absmiddle">{{loadData}}
    </div>
</template>
<script>
import {mapActions,mapGetters} from 'vuex'
    export default{
        data(){
            return{
                loadData: '努力加载更多...',
            }
        },
        computed:{
            ...mapGetters([
                'isShowLoading'//显示load
            ]),
        }
    }
</script>
<style>
/* 加载更多 */
.loading{
    width: 100%;
    text-align: center;
    font-size: 1.5rem;
    margin-top: 3rem;
}
.loading img{
    margin-right: 3rem;
    width: 3rem;
    height: 3rem;
}
</style>

