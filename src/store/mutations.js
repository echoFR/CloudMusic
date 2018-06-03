import getters from './getters'
var state={
    Api:'http://localhost:3000',
    isShowHeader: true,
    isShowLoading: true,
    // 点击右侧显示更多
    isShowMore: false,
    // 歌单搜索的歌曲
    songsArr:[],
    // 歌曲详细信息
    song:{//歌曲信息
        id:0,
        name:'',
        commentCount: 0,// 评论
        singer:'',//歌手
        album:'',//专辑
        showvideo: false,
        picUrl:'',
        comments: [], //   最新20条
        hotComments: []//热评
    }
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
    showMore(state){  
        state.isShowMore=true; 
        document.body.style.overflow='hidden';  
    },
    hideMore(){
        state.isShowMore=false; 
        document.body.style.overflow='auto'; 
    },
    // 获得歌曲信息
    getSongData(state,song){
        state.song.album=song.al.name;//专辑名
        state.song.picUrl=song.al.picUrl;//图片
        state.song.name=song.name;//歌名 
        state.song.id=song.id;   //id
        state.song.singer=song.ar[0].name;                 
        if(song.ar[1]){
            state.song.singer+=' / '+song.ar[1].name
        }
    }
}
export default{
    state,
    mutations,
    getters
}