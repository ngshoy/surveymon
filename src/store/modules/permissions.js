const state = {
  access_token: undefined,
};

const getters = {
  getAccessToken(state) {
    return state.access_token;
  },
};

const mutations = {
  setAccessToken(state, accessToken) {
    state.access_token = accessToken;
  },
};

const permissions = {
  state,
  getters,
  mutations,
};

export default permissions;
