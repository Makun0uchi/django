import Vue from 'vue'
import Vuex from 'vuex'
import { carStore } from './carStore'


Vue.use(Vuex)

export default new Vuex.Store({
    modules: {
        car: carStore
    },

})