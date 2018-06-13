import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex);

import loading from './loading'
import header from './header'
import song from './song'
export default new Vuex.Store({
    modules:{
        loading,
        song,
        header,
    }
}) 