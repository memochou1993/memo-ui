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
    refresh: false,
    query: '',
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
    setRefresh(state, refresh) {
      state.refresh = refresh;
    },
    setQuery(state, query) {
      state.query = query;
    },
  },
  actions: {
    initialState(context) {
      context.commit('setLoading', true);
      context.commit('setError', null);
      context.commit('setNoData', false);
      context.commit('setRefresh', false);
    },
    setLoading(context, loading) {
      context.commit('setLoading', loading);
    },
    setError(context, error) {
      context.commit('setError', error);
    },
    setNoData(context, noData) {
      context.commit('setNoData', noData);
    },
    setRefresh(context, refresh) {
      context.commit('setRefresh', refresh);
    },
    setQuery(context, query) {
      context.commit('setQuery', query);
    },
  },
});
