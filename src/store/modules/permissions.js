
const state = {
  access_token: '',
};

const mutations = {
  setAccessToken(state, accessToken) {
    state.access_token = accessToken;
  },
};

const permissions = {
  state,
  mutations,
};

export default permissions;
