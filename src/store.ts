import Vue from 'vue';
import Vuex from 'vuex';

const prePlugin = (store: any) => {
	store.commit('setUserId', '');
};

Vue.use(Vuex);

export default new Vuex.Store({
	state: {
	},
	mutations: {
	
	},
	actions: {
	},
	getters: {
	},
	plugins: [prePlugin],
});
