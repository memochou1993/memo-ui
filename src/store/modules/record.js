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
        mood: 'mdi-face',
        milestone: 'mdi-trophy',
        html: 'mdi-language-html5',
        markdown: 'mdi-markdown',
        json: 'mdi-json',
        coordinate: 'mdi-map-marker',
      },
    },
    colors: {
      type: {
        text: 'blue lighten-2',
        url: 'green lighten-2',
        image: 'purple lighten-2',
        video: 'purple lighten-2',
        audio: 'purple lighten-2',
        file: 'purple lighten-2',
        mood: 'orange lighten-2',
        milestone: 'indigo lighten-2',
        html: 'cyan lighten-2',
        markdown: 'cyan lighten-2',
        json: 'cyan lighten-2',
        coordinate: 'amber lighten-2',
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
            context.commit('setNoData', data.data.length === 0, { root: true });
            resolve(data);
          })
          .catch((error) => {
            setTimeout(() => {
              context.commit('setError', error);
              context.commit('setNoData', true);
            }, 500);
            reject(error);
          })
          .then(() => {
            setTimeout(() => {
              context.commit('setLoading', false, { root: true });
            }, 500);
          });
      });
    },
  },
};
