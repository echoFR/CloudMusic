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
    //播放歌曲的歌单列表
    songList:[],
    // 播放的歌单
    playerList:[],
    // 播放的序号
    playerIndex: -1,
    // 播放状态  暂停/播放
    playerStatus: false,
    // 播放顺序 1 顺序 2单曲 3随机  
    playorder: 1,
    playerUrl: null,
    playerWord: '',//歌词
    songReady: false,//歌曲ready
    duration: 0,//时长
    currentTime: 0,//当前时长
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
    playerList:(state)=>{
        return state.playerList;
    },
    playerStatus:(state)=>{
        return state.playerStatus;
    },
    playorder:(state)=>{
        return state.playorder;
    },
    playerWord:(state)=>{
        return state.playerWord;
    },
    songReady:(state)=>{
        return state.songReady;
    },
    duration:(state)=>{
        return state.duration;
    },
    currentTime:(state)=>{
        return state.currentTime;
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
    // 播放的歌单顺序
    setPlayerList(state,list){
        state.playerList=list;
    },
    setPlayerStatus(state,status){
        state.playerStatus=status;
    },
    setPlayorder(state,i){
        state.playorder=i;
    },
    setplayerUrl(state,url){
        state.playerUrl=url;
    },
    setPlayerWord(state,word){
        state.playerWord=word;
    },
    setSongReady(state,status){
        state.songReady=status;
    },
    setDuration(state,time){
        state.duration=time;
    },
    setCurrentTime(state,time){
        state.currentTime=time;
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
    getPlayerWord:({commit,state},songid)=>{
        axios.get('http://localhost:3000/lyric?id='+songid).then((res)=>{
            commit('setPlayerWord',res.data.lrc.lyric);
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