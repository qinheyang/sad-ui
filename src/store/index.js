import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);

const store = new Vuex.Store({
	state: {
		breadcrumbItems: [],
	},

	mutations: {
		// 在这里定义你的状态变更函数（mutations）
		setBreadcrumbItems (state, items) {
			state.breadcrumbItems = items;
		},
	},
});

export default store;