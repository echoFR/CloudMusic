const getters={
    isShowHeader:(state)=>{
        return state.isShowHeader;
    },
    isShowLoading:(state)=>{
        return state.isShowLoading;
    },
    isShowMore:(state)=>{
        return state.isShowMore;
    },
    song:(state)=>{
        return state.song;
    },
    // 播放相关
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
    playOrder:(state)=>{
        return state.playOrder;
    },
}
export default getters;