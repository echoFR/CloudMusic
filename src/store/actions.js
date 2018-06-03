import axios from 'axios'
const actions={
    showLoading:({commit,state})=>{
        commit('showLoading');
    },
    hideLoading:({commit})=>{
        commit('hideLoading');
    },
    //获取歌曲评论
    getSongComment:({commit,state},songid)=>{   
        axios.get(state.mutations.Api+'/comment/music',{
                params: {
                    id: songid
                }
            }).then((res)=>{
                state.mutations.song.commentCount = res.data.total;
                state.mutations.song.comments =  res.data.comments;//评论
                state.mutations.song.hotComments = res.data.hotComments;//热评
            }).catch(function(err){
                console.log(err);
        });
    }   
}
export default actions;