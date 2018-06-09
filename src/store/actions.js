import axios from 'axios'
const actions={
    showLoading:({commit})=>{
        commit('showLoading');
    },
    hideLoading:({commit})=>{
        commit('hideLoading');
    },
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
                commit('setplayerUrl',res.data.data[0].url)       
            }).catch((err)=>{
                console.log(err);
                console.log('请求失败');
        }); 
    }
}
export default actions;