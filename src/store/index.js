import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex);

import loading from './loading'
import header from './header'
import song from './song'
import mini from './mini'
export default new Vuex.Store({
    modules:{
        loading,
        song,
        header,
        mini
    }
}) 