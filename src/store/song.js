import axios from 'axios'
let state={
    // 点击右侧显示更多
    isShowMore: false,
    isShowList: false,
    song:{//显示更多歌曲信息
        id:0,
        name:'',
        commentCount: 0,// 评论
        singer:'',//歌手
        album:'',//专辑
        showvideo: false,
        picUrl:'',
        comments: [], //   最新20条
        hotComments: []//热评
    },
    originList: [],
    //播放歌单列表
    songList:[],
    // 播放的序号
    playerIndex: -1,
    // 播放状态  暂停/播放
    playerStatus: false,
    // 播放顺序 1 顺序 2单曲 0随机  
    playMode: 1,
    playerUrl: null,
    lyric: [], //歌词
    parsedLyric:[],//解析后的歌词
    songReady: false,//歌曲ready
    duration: 0,//时长
    currentTime: 0,//当前时长
    designTime: 0,//拖动指定的时间
    isLoadLyric: true
}
const getters={
    isShowMore:(state)=>{
        return state.isShowMore;
    },
    isShowList:(state)=>{
        return state.isShowList;
    },
    song:(state)=>{
        return state.song;
    },
    songList:(state)=>{
        return state.songList;
    },
    playerIndex:(state)=>{
        return state.playerIndex;
    },
    playerUrl:(state)=>{
        return state.playerUrl;
    },
    playerStatus:(state)=>{
        return state.playerStatus;
    },
    playMode:(state)=>{
        return state.playMode;
    },
    songReady:(state)=>{
        return state.songReady;
    },
    duration:(state)=>{
        return state.duration;
    },
    currentTime:(state)=>{
        return state.currentTime;
    },
    designTime:(state)=>{
        return state.designTime;
    },
    originList:(state)=>{
        return state.originList;
    },
    lyric:(state)=>{
        return state.lyric;
    },
    isLoadLyric:(state)=>{
        return state.isLoadLyric;
    }
}
const mutations={
    // 显示更多
    showMore(state){  
        state.isShowMore=true; 
        document.body.style.overflow='hidden';  
    },
    hideMore(state){
        state.isShowMore=false; 
        document.body.style.overflow='auto'; 
    },
    showList(state){
        state.isShowList=true;
        document.body.style.overflow='hidden';  
    },
    hideList(state){
        state.isShowList=false;
        document.body.style.overflow='auto'; 
    },
    // 歌曲
    // 过滤歌曲信息
    filterSong(state,song){
        state.song.album=song.al.name;//专辑名
        state.song.picUrl=song.al.picUrl;//图片
        state.song.name=song.name;//歌名 
        state.song.id=song.id;   //id
        state.song.singer=song.ar[0].name;                 
        if(song.ar[1]){
            state.song.singer+=' / '+song.ar[1].name
        }
    },
    // 获得评论
    getSongComment(state,obj){
        state.song.commentCount=obj.commentCount,
        state.song.comments=obj.comments,
        state.song.hotComments=obj.hotComments
    },
    // 播放相关
    // 获取的播放列表
    setSonglist(state,songList){
       state.songList=songList;
    },
    setplayerIndex(state,index){
        state.playerIndex=index;
    },
    setPlayerStatus(state,status){
        state.playerStatus=status;
    },
    setPlayMode(state,i){
        state.playMode=i;
    },
    setplayerUrl(state,url){
        state.playerUrl=url;
    },
    setSongReady(state,status){
        state.songReady=status;
    },
    setDuration(state,time){
        state.duration=time;
    },
    setCurrentTime(state,time){
        state.currentTime=time;
    },
    setDesignTime(state,time){
        state.designTime=time;
    },
    setOriginList(state,list){
        state.originList=list;
    },
    setLyric(state,text){
        let by='';
        let lines = text.split('\n');
        let pattern = /\[\d{2}:\d{2}.(\d{3}|\d{2})\]/g;
        let result = [];
        while (!pattern.test(lines[0])) {
            by= lines[0];
            lines = lines.slice(1);
        };
        lines[lines.length - 1].length === 0 && lines.pop();
        lines.forEach(function(v,i,a) {
            //这一行的 时间
            let time = v.match(pattern);
            // '' 取代正则
            let value = v.replace(pattern, '');
            time.forEach(function(v1, i1, a1) {
                var t = v1.slice(1, -1).split(':');
                if( value != "" && value != " ")
                    result.push([parseInt(t[0], 10) * 60 + parseFloat(t[1]), value]);
            });
        });
        result.sort(function(a, b) {
            return a[0] - b[0];
        });
        state.lyric=result;
    },
    hideLoadLyric(state){
        state.isLoadLyric= false;
    }
}
const actions={
    getSongComment:({commit,state},songid)=>{
        axios.get('http://localhost:3000/comment/music',{
                params: {
                    id: songid
                }
            }).then((res)=>{
                commit('getSongComment',{
                    commentCount:res.data.total,
                    comments: res.data.comments,
                    hotComments: res.data.hotComments
                });
            }).catch((err)=>{
                console.log(err);
        });
    },
    getSongUrl:({commit,state},songid)=>{
        axios.get('http://localhost:3000/music/url?id='+songid).then((res)=>{
                // 设置playerUrl
                commit('setplayerUrl',res.data.data[0].url);
            }).catch((err)=>{
                console.log(err);
                console.log('请求失败');
        }); 
    },
    getLyric:({commit,state},songid)=>{
        axios.get('http://localhost:3000/lyric?id='+songid).then((res)=>{
            let text =res.data.lrc.lyric;
            commit('setLyric',text);
            commit('hideLoadLyric');
        }).catch((err)=>{
            console.log(err);
            console.log('获取歌词失败');
        }); 
    }
}
export default{
    state,
    mutations,
    getters,
    actions
}