let state={
    isShowHeader: true,    
};
const getters={
    isShowHeader:(state)=>{
        return state.isShowHeader;
    },
};
const mutations={
    showHeader(state){
        state.isShowHeader= true;
    },
    hideHeader(state){
        state.isShowHeader= false;
    },
}
export default{
    state,
    getters,
    mutations
}