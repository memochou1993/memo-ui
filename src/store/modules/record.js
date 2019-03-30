import axios from 'axios';

export default {
  state: {
    //
  },
  mutations: {
    //
  },
  actions: {
    fetchRecords(context, { url, params }) {
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
  },
};
