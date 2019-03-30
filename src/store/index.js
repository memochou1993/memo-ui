import Vue from 'vue';
import Vuex from 'vuex';
import record from './modules/record';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    record,
  },
  state: {
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
});
