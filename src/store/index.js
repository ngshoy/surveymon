import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    access_token: '',
  },
  mutations: {
    setAccessToken(state, accessToken) {
      state.access_token = accessToken;
    },
  },
  actions: {

  },
});
