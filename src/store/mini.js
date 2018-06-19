let state={
    miniPlay: true
}
const getters={
    miniPlay:(state)=>{
        return state.miniPlay;
    }
}
const mutations={
    showMiniPlay(state){
        state.miniPlay= true;
    },
    hideMiniPlay(state){
        state.miniPlay= false;
    },
}
export default{
    state,
    getters,
    mutations
}