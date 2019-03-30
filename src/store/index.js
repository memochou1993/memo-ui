import Vue from 'vue';
import Vuex from 'vuex';
import record from './modules/record';

Vue.use(Vuex);

export default new Vuex.Store({
  namespaced: true,
  modules: {
    record,
  },
  state: {
    loading: false,
    error: null,
    noData: false,
  },
  mutations: {
    setLoading(state, loading) {
      state.loading = loading;
    },
    setError(state, error) {
      state.error = error;
    },
    setNoData(state, noData) {
      state.noData = noData;
    },
  },
  actions: {
    initialState(context) {
      context.commit('setLoading', true);
      context.commit('setError', null);
      context.commit('setNoData', false);
    },
  },
});
