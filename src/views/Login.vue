<template>
  <v-container grid-list-lg>
    <v-layout row wrap align-center justify-center fill-height>
      <v-flex md6>
        <v-card color="accent">
          <v-card-title primary-title>
            <div class="headline">
              Welcome
            </div>
          </v-card-title>
          <v-card-text>
            <v-text-field label="user name" type="text"
              color="tertiary" v-model="loginInfo.userName" />
            <v-text-field label="password" type="password"
              color="tertiary" v-model="loginInfo.password" />
            <!-- :append-icon="showPassword ? 'visibility_off' : 'visibility'"
            :type="showPassword ? 'text' : 'password'"
            @click:append="showPassword = !showPassword"/> -->
          </v-card-text>
          <v-card-actions>
            <v-layout justify-end>
              <v-btn flat to="register">Register</v-btn>
              <v-btn flat @click="login">Login</v-btn>
            </v-layout>
          </v-card-actions>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import axios from 'axios';

export default {
  name: 'login',
  data: () => ({
    loginInfo: {
      userName: '',
      password: '',
    },
    // showPassword: false,
    access_token: '',
  }),
  methods: {
    login() {
      axios.post('http://localhost:3001/login', {
        ...this.loginInfo,
      })
        .then((res) => {
          this.$store.commit('setAccessToken', res.data.access_token);
          localStorage.setItem('access_token', res.data.access_token);
          const nextPath = this.$store.state.nav.prevPath || '/CreatePoll';
          this.$router.push(nextPath);
        })
        .catch((err) => {
          console.error(err);
        });
    },
  },
};

</script>

<style lang="scss" scoped>
  .container {
    height: 100vh;
  }
</style>
