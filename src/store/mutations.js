import getters from './getters'
var state={
    isShowLoading: true,
    isShowHeader: true,//存入local
    // 点击右侧显示更多
    isShowMore: false,
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
    // 播放相关
    //播放歌曲的歌单列表
    songList:[],
    // 播放的歌单
    playerList:[],
    // 播放的序号
    playerIndex: -1,
    // 播放状态  暂停/播放
    playerUrl:'',
    playerStatus: true,
    // 播放顺序 1 顺序 2单曲 3随机  
    playOrder: 1
}
const mutations={
    showHeader(state){
        state.isShowHeader= true;
    },
    hideHeader(state){
        state.isShowHeader= false;
    },
    showLoading(state){
        state.isShowLoading=true;
    },
    hideLoading(state){
        state.isShowLoading=false;
    },
    // 歌曲
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
    getSongComment(state,obj){
        state.song.commentCount=obj.commentCount,
        state.song.comments=obj.comments,
        state.song.hotComments=obj.hotComments
    },
    showMore(state){  
        state.isShowMore=true; 
        document.body.style.overflow='hidden';  
    },
    hideMore(state){
        state.isShowMore=false; 
        document.body.style.overflow='auto'; 
    },
    // 播放相关
    // 获取的播放列表
    setSonglist(state,songList){
       state.songList=songList;
    },
    // 
    setplayerUrl(state,url){
        state.playerUrl=url;
    },
    setplayerIndex(state,index){
        state.playerIndex=index;
    }
}
export default{
    state,
    mutations,
    getters
}