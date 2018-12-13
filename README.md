# fr-music
# 项目简介
> 一款基于Vue-cli实现的移动端音乐播放器项目，接口来自[NeteaseCloudMusicApi](https://github.com/Binaryify/NeteaseCloudMusicApi)

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```

# 技术栈
- Html、Css、Css3、Html5
- Js、ES6
- Vue、Vue-router、Vuex、Vue-cli
- axios

# 用到的插件
- vue-lazyload：用于图片和组件的懒加载
- animate.css
- fastclick：处理移动端click事件300毫秒延迟
- vue-awesome-swiper：首页轮播图
# 实现功能
- 首页推荐
- [x] 轮播图
- [x] 歌手分类推荐和入口
- 歌单
- [x] 歌单列表（上拉加载更多、下拉 刷新）
- [x] 歌单详情
- 排行榜
- 歌曲播放器
- [x] 播放/暂停
- [x] 播放模式（单曲循环、顺序播放、随机播放）
- [x] 歌曲切换（上一首、下一首、播放列表中选择）
- [x]  歌曲拖动进度条
- [x]  歌词播放
- 底部小播放器
- 搜索
- [x] 热门搜索
- [x] 历史记录
# 组件划分
## 1. 公用组件
- Confirm：确认取消遮罩层
- Goback：返回上一页
- Loading：加载中
- Slide：轮播图
- List：歌单中歌曲列表
- Search-box：搜索顶部input框
- Search-list：搜索列表
- Singers-rank：歌手排行列表
## 2. 应用组件
- Header：首页顶部导航栏
- Info：用户信息
- Player：播放器
- Audio：底部小播放器
- Rank：歌曲类型排行页
- Recommend：推荐页面
- Serach：搜索页面
- Songs：热门歌单页面

# 项目过程解决的问题
1. audio的位置
> audio是歌曲实际播放的DOM控制元素，并且在任何路由下，歌曲都可以播放。切换路由并不会影响歌曲的播放，所以把它放到App.vue下面
2. 移动端audio不支持自动播放
> 在移动端,流量是很珍贵的，作为用户,可能不希望歌曲是自动播放的。考虑到用户体验,所以有些手机浏览器把自动播放的功能给禁掉了。利用一个比较奇特的做法：因为用户进入页面，都会不小心碰到屏幕，给html添加一个运行一次处理的事件

```
$('html').one('touchstart',function(){ 
audio.play(); 
}); 
```

3. Vuex    
[vuex的学习笔记](https://github.com/echoFR/VueJs/blob/master/vuex/Vuex.md)
- 关联的数据
> 初始歌单列表、当前播放歌单列表、播放歌曲的序号、播放的状态（暂停|播放）、播放的模式（单曲|随机| 顺序）
- 异步的处理：在action里面异步执行
```
actions: {
  incrementAsync ({ commit }) {
    setTimeout(() => {
      commit('increment')
    }, 1000)
  }
}
```

4. localStorage
> localStorage只支持对象，当需要存储数组时，可以利用JSON.stringify序列化数组后存储、JSON.parse解析后读取
5. 歌曲播放
- 获取歌曲总时长
> 监听了canplay事件，当歌曲准备到可以被播放时，才进行获取duration和buffered等相关数据获取操作
6. 移动端fastclick的支持
> 移动端300ms的延迟是因为浏览器会等待来确定你是否要执行双击事件
7. 上拉加载
- 高度的判断条件
```
滚动高度 + 可视高度 >= 文档高度
```
- 节流的处理
> window的scroll事件触发频率非常高，
应当使用节流机制限制事件处理函数的执行频率

```
window.addEventListener('scroll',throttle(getmore, 2000), false);
```
8. 搜索输入框防抖的处理
> 监听v-model对应data的变化

```
this.$watch('keyword',debounce((newKeyword)=>{
        this.$emit('watchKeyword',newKeyword);
    },300)
);
```

9. 利用axios的拦截器处理Loading的显示

```
//添加请求拦截器
axios.interceptors.request.use(config => {
  //在发送请求之前做某事，比如说 设置loading动画显示
  return config
}, error => {
  //请求错误时做些事
  return Promise.reject(error)
})

//添加响应拦截器
axios.interceptors.response.use(response => {
  //对响应数据做些事，比如说把loading动画关掉
  return response
}, error => {
  //请求错误时做些事
  return Promise.reject(error)
})
```
10. 歌曲初始播放列表和选择随机播放后的列表都需要记录
11. 处理html的font-size实现rem

```
export function changeFont(){
    const desW= 375,
    winW= document.documentElement.clientWidth,
    ratio= winW / desW;
    const mainW = document.getElementById('app-box');
    if(winW > desW){
      mainW.style.width= desW+ 'px';
      mainW.style.margin= '0 auto';
      return
    }
    document.documentElement.style.fontSize = ratio * 100 +'px';
}
```
12. 播放器进度条拖动的功能
- touchstart：获取第一次点击的横坐标和已播放的进度条长度，并用该位置减去进度条走过的的width
- touchmove: 获取进度条移动后的横坐标，计算比例
- touchend：改变当前播放时间

[Vue学习的一些笔记](https://github.com/echoFR/VueJs)

