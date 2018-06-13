let state={
    isShowLoading: true,    
};
const getters={
    isShowLoading:(state)=>{
        return state.isShowLoading;
    },
}
const mutations={
    showLoading(state){
        state.isShowLoading=true;
    },
    hideLoading(state){
        state.isShowLoading=false;
    },
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