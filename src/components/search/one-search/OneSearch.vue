<template>
    <div class="one-search">
      <div class="one-search-title">搜素 ‘你好’</div>
      <ul class="one-search-ul">
        <li>
          <div>
            <img src="@/assets/img/searchli.png">
            <span>你好不好</span>
          </div>
        </li>
      </ul>
    </div>
</template>
<style>
/* 一级搜索 */
.one-search{
    width: 96%;
    margin: 0 auto;
    background-color: white;
    margin-top: 0.3rem;
    border-radius: 0.4rem;
    box-shadow: 1rem 1rem 5rem #888888;
}
.one-search-title{
    width: 97%;
    color: #4381EB;
    height: 3.5rem;
    padding-left: 3%;
    line-height: 3.5rem;
    border-bottom: 0.01rem #eee solid;
}
.one-search-ul{
    width: 97%;
    padding-left: 3%;
}
.one-search-ul li{
    width: 100%;
    height: 3.5rem;
    line-height: 3.5rem;
    border-bottom: 0.01rem #eee solid;
}
.one-search-ul li img{
    width: 2rem;
    height: 2rem;
}
</style>

