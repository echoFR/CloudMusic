let state={
    isShowLoading: true,    
};
const getters={
    isShowLoading:(state)=>{
        return state.isShowLoading;
    },
}
const mutations={
    setLoading(state,flag){
        state.isShowLoading=flag;        
    }
}
const actions={
    showLoading:({commit})=>{
        commit('showLoading');
    },
    hideLoading:({commit})=>{
        commit('hideLoading');
    },
}
export default{
    state,
    getters,
    mutations,
    actions
}