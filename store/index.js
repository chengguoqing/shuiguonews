import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
 
const store = new Vuex.Store({
	state: {
		iszt: false
	},
	mutations: {
		setiszta(state, data) {
			state.count = true
		}
	},
	
	actions: {
		getiszt(commit,state) {
			state.count = true
		}
	}
})

export default store
