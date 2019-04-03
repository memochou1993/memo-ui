import axios from 'axios';

export default {
  namespaced: true,
  state: {
    icons: {
      type: {
        text: 'mdi-notebook',
        url: 'mdi-link',
        image: 'mdi-file-image',
        video: 'mdi-file-video',
        audio: 'mdi-file-music',
        file: 'mdi-file',
        milestone: 'mdi-trophy',
        html: 'mdi-language-html5',
        markdown: 'mdi-markdown',
        json: 'mdi-json',
        coordinate: 'mdi-map-marker',
      },
    },
    colors: {
      type: {
        text: 'light-blue',
        url: 'light-green',
        image: 'purple',
        video: 'purple',
        audio: 'purple',
        file: 'purple',
        milestone: 'pink',
        html: 'cyan',
        markdown: 'cyan',
        json: 'cyan',
        coordinate: 'pink',
      },
    },
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
