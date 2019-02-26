/* eslint no-shadow: ["error", { "allow": ["state"] }] */
/* eslint no-param-reassign: ["error", { "ignorePropertyModificationsFor": ["state"]}] */

const state = {
  prevPath: undefined,
};

const mutations = {
  updatePrevPath(state, path) {
    state.prevPath = path;
  },
};

const nav = {
  state,
  mutations,
};

export default nav;
