import Vue from 'vue';
import Vuex from 'vuex';

import permissions from './modules/permissions';
import nav from './modules/nav';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    permissions,
    nav,
  },
});
