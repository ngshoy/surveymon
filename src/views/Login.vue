<template>
  <v-container grid-list-lg>
    <v-layout row wrap align-center justify-center fill-height>
      <v-flex md6>
        <v-card color="primary">
          <v-card-title primary-title>
            <div class="headline">
              Welcome
            </div>
          </v-card-title>
          <v-card-text>
            <v-text-field label="user name" type="text" color="tertiary" v-model="login.userName" />
            <v-text-field label="password" type="password"
            color="tertiary" v-model="login.password" />
            <!-- :append-icon="showPassword ? 'visibility_off' : 'visibility'"
            :type="showPassword ? 'text' : 'password'"
            @click:append="showPassword = !showPassword"/> -->
          </v-card-text>
          <v-card-actions>
            <v-layout justify-end>
              <v-btn flat to="register">Register</v-btn>
              <v-btn flat>Login</v-btn>
            </v-layout>
          </v-card-actions>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>

</template>

<script>
export default {
  name: 'login',
  data: () => ({
    login: {
      userName: '',
      password: '',
    },
    // showPassword: false,
  }),
};

</script>

<style lang="scss" scoped>
  .container {
    height: 100vh;
  }
</style>
