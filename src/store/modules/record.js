import axios from 'axios';

export default {
  namespaced: true,
  state: {
    //
  },
  mutations: {
    //
  },
  actions: {
    searchRecords(context, { url, params }) {
      return new Promise((resolve, reject) => {
        axios({
          method: 'GET',
          url,
          params,
        })
          .then(({ data }) => {
            resolve(data);
          })
          .catch((error) => {
            reject(error);
          });
      });
    },
    fetchRecords(context, { url, params }) {
      context.dispatch('initialState', null, { root: true });
      return new Promise((resolve, reject) => {
        axios({
          method: 'GET',
          url,
          params,
        })
          .then(({ data }) => {
            context.dispatch('setNoData', data.data.length === 0, { root: true });
            resolve(data);
          })
          .catch((error) => {
            setTimeout(() => {
              context.dispatch('setError', error, { root: true });
              context.dispatch('setNoData', true, { root: true });
            }, 500);
            reject(error);
          })
          .then(() => {
            setTimeout(() => {
              context.dispatch('setLoading', false, { root: true });
            }, 500);
          });
      });
    },
  },
};
