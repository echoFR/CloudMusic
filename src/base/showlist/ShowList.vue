<template>
    <transition name="showlist" enter-active-class="animated fadeInUp" leave-active-class="animated fadeOutDown">
        <div class="mask" @click="hideList()">
            <div class="show-list" id="showListMore" @click="stopBubble">
                <div class="list-top">
                    <div class="list-top-title">
                        <span class="songs-name">单曲循环</span>
                    </div>
                    <div class="select">
                        <img src="@/assets/img/shoucj.png" align="absmiddle">
                        <span class="select-text">收藏全部</span>
                    </div>
                    <span class="remove" @click="remove()">
                        <img src="@/assets/img/remove.png">    
                    </span>                    
                </div>
                <div class="list-bottom">
                    <ul class="list-bottom-ul">
                        <li v-for="(item,index) in songlist" :key="index" ref="list">
                            <div class="list-bottom-text">
                                <span>{{item.name}}</span>
                                <span class="list-bottom-singer">- {{ item.ar[0].name + ((item.ar[1] && item.ar[1].name)?' / '+item.ar[1].name : '')}} </span>
                            </div>
                            <img src="@/assets/img/closeblack.png">
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </transition>
</template>
<script>
import stopBubble from '@/assets/js/stopBubble'
import {mapGetters,mapActions} from 'vuex'
export default{
    props:['songlist'],
    methods:{
        // 隐藏list
        hideList(){  
            this.$store.commit('hideList');
        },
        // 防止冒泡
        stopBubble(){
            stopBubble();
        },
        remove(){
            console.log(this.playerIndex);          
        }
    },
    computed:{
        ...mapGetters([
            'playerIndex'
        ])
    },
    mounted(){
        // 播放字体颜色
        this.$refs.list[this.playerIndex].style.color='red';     
    }
}
</script>
<style>
@import './showlist.css';
.animated {animation-duration: 0.3s;}
</style>