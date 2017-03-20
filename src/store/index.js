import Vue from 'vue'
import Vuex from 'vuex'
import logger from 'vuex/dist/logger'

Vue.use(Vuex)

Vue.config.debug = true
Vue.config.devtools = true
const debug = process.env.NODE_ENV !== 'production'

const store = new Vuex.Store({
    state: {},
	actions: {},
	mutations: {},
	getters: {},
    strict: debug,
    plugins: debug ? [logger()] : []
})

export default store;
