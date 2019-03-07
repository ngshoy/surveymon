<template>
  <v-container grid-list-lg>
    <v-layout row wrap align-center justify-center fill-height>
      <v-flex md6>
        <v-card color="accent" ref="form">
          <v-card-title primary-title>
            <div class="headline">
              Create your account
            </div>
          </v-card-title>
          <v-card-text>
            <v-layout row wrap>
              <v-flex xs12 sm6>
                <v-text-field label="first name" type="text"
                color="tertiary" v-model="registerInfo.firstName"
                :rules="[rules.required]" />
              </v-flex>
              <v-flex xs12 sm6>
                <v-text-field label="last name" type="text"
                color="tertiary" v-model="registerInfo.lastName"
                :rules="[rules.required]" />
              </v-flex>
              <v-flex sm12>
                <v-text-field label="email address" type="email"
                  color="tertiary" v-model="registerInfo.email"
                  :rules="[rules.required]" />
              </v-flex>
              <v-flex sm12>
                <v-text-field label="user name" type="text"
                  color="tertiary" v-model="registerInfo.userName"
                  :rules="[rules.required]" />
              </v-flex>
              <v-flex sm12>
                <v-text-field label="password" type="password"
                  color="tertiary" v-model="registerInfo.password"
                  :rules="[rules.required]" />
              </v-flex>
              <v-flex sm12>
                <v-text-field label="confirm password" type="password"
                  :rules="[rules.required,
                          () => registerInfo.password === registerInfo.confirmPassword || 'password does not match']"
                  color="tertiary" v-model="registerInfo.confirmPassword" />
              </v-flex>
            </v-layout>
          </v-card-text>
          <v-card-actions>
            <v-layout justify-end>
              <v-btn flat @click="register">Register</v-btn>
            </v-layout>
          </v-card-actions>
        </v-card>
      </v-flex>
    </v-layout>
    <v-dialog v-model="showDialog">
      <v-card :color="registerResponse !== '' ? 'success' : 'error'">
        <v-card-title v-if="registerResponse !== ''">
          Congratulations, your account has been created successfully! You can now <router-link to="/login">login</router-link>
        </v-card-title>
        <v-card-title v-if="registerResponse === ''">
          Oops! Something went wrong and we couldn\'t create your account... Please try again in another time.
        </v-card-title>
        <v-card-actions>
          <v-layout justify-end>
            <v-btn @click="showDialog = !showDialog">Close</v-btn>
          </v-layout>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-container>
</template>

<script>
import axios from 'axios';

export default {
  name: 'register',
  data: () => ({
    registerInfo: {
      firstName: '',
      lastName: '',
      email: '',
      userName: '',
      password: '',
      confirmPassword: '',
    },
    registerResponse: '',
    showDialog: false,
    rules: {
      required: value => !!value || 'Required.',
    },
  }),
  methods: {
    register() {
      axios.put('http://localhost:3001/CreateUser', {
        userName: this.registerInfo.userName,
        firstName: this.registerInfo.firstName,
        lastName: this.registerInfo.lastName,
        password: this.registerInfo.password,
        email: this.registerInfo.email,
      })
      .then((res) => {
        this.registerResponse = res.statusText;
        this.showDialog = true;
      })
      .catch((err) => {
        console.log(err);
        this.showDialog = true;
      });
    }
  }
};
</script>

<style lang="scss" scoped>
  .container {
    height: 100vh;
  }
</style>
