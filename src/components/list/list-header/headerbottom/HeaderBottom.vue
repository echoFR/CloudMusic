<template>
   <div class="songslist-header-bottom">
        <ul class="songslist-header-bottom-nav">
            <li>
                <img src="@/assets/img/comment.png">
                <span>{{songsdata.commentCount}}</span> 
            </li>
            <li>
                <img src="@/assets/img/share.png">
                <span>{{songsdata.shareCount}}</span>                      
            </li>
            <li>
                <img src="@/assets/img/down.png">
                <span>下载</span>                      
            </li>
            <li>
                <img src="@/assets/img/bigselect.png">
                <span>多选</span>                      
            </li>                  
        </ul>
    </div>
</template>
<script>
    export default{
        props:['songsdata']
    }
</script>
<style>
@import './headerbottom.css'
</style>

