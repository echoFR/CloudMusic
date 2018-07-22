<template>
    <div class="search-box">
        <div class="search-box-left">
            <img src="@/assets/img/goback.png" @click="goBack()" class="goback">
        </div>
        <div class="search-box-right">
            <input type="text" v-model="keyword" class="search-input" :placeholder="placeholder" ref="searchBox">
            <img src="@/assets/img/close.png" class="close" v-show="keyword" @click="clearKeyword">
        </div>
    </div>
</template>
<script>
import {debounce} from '@/assets/js/util.js'
export default{
    props:{
        placeholder:{
            type: String,
            default: '搜索'
        }
    },
    data(){
        return{
            keyword:'',
        }
    },
    methods:{
        goBack(){
            this.$router.go(-1);
            this.clearKeyword();
        },
        clearKeyword(){
            this.keyword='';
            this.$refs.searchBox.focus();
        },
        setKeyword(newKeyword){
            this.keyword=newKeyword;
        },
    },
    created() {
        this.$watch('keyword',debounce((newKeyword)=>{
                this.$emit('watchKeyword',newKeyword);
            },300)
        );
    }
}
</script>
<style>
@import './search-box.css'

</style>

