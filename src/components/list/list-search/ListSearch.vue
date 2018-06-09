<template>
<div class="s-search">
    <Sinput></Sinput>
    <Sdata></Sdata>
</div>
</template>
<script>
    import Sinput from '@/components/list/list-search/sinput/Sinput.vue'
    import Sdata from '@/components/list/list-search/sdata/Sdata.vue'    
    export default{
        components:{
            Sinput,
            Sdata
        }
    }
</script>
<style>
.s-search{
    width: 100%;
}
</style>
