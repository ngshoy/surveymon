<template>
  <v-container grid-list-lg>
    <v-layout row wrap justify-space-around>
      <v-flex md8>
        <v-card color="primary">
          <v-card-title primary-title class="justify-center">
            <div class="headline">
              {{pollData.topic}}
            </div>
          </v-card-title>
          <v-card-text>
            <v-radio-group v-model="selectedOption">
              <v-radio v-for="(option, index) in pollData.options" :key="index"
                :label="option.name" :value="option.name"
                on-icon="radio_button_checked" off-icon="radio_button_unchecked"/>
            </v-radio-group>
          </v-card-text>
          <v-card-actions>
            <v-layout justify-end>
              <v-btn flat @click="upvote">Vote</v-btn>
            </v-layout>
          </v-card-actions>
        </v-card>
      </v-flex>
    </v-layout>
    <v-dialog v-model="showDialog">
      <v-card :color="respStatusText !== '' ? 'success' : 'error'">
        <v-card-title v-html="respMsg" />
        <v-card-actions>
          <v-layout justify-end>
            <v-btn v-if="respStatusText === ''" @click="showDialog = !showDialog">Close</v-btn>
            <v-btn v-if="respStatusText !== ''" :to="resultsLink">View results</v-btn>
          </v-layout>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-container>
</template>

<script>
import axios from 'axios';
import store from '../store';

export default {
  name: 'view-poll',
  props: {
    id: String,
  },
  data: () => ({
    pollData: {},
    selectedOption: '',
    showDialog: false,
    respStatusText: '',
    respMsg: '',
    resultsLink: '',
    access_token: '',
  }),
  created() {
    this.access_token = store.state.permissions.access_token;
    this.fetchData();
  },
  watch: {
    $route: 'fetchData',
  },
  methods: {
    fetchData() {
      axios.get(`http://localhost:3000/ViewPoll/${this.id}`, {
        headers: { Authorization: `Bearer ${this.access_token}` },
      })
        .then((res) => {
          this.pollData = res.data;
        })
        .catch((err) => {
          console.error(err);
        });
    },
    upvote() {
      this.respStatusText = '';
      axios.patch(`http://localhost:3000/vote/${this.id}`, {
        vote: this.selectedOption,
      }, {
        headers: { Authorization: `Bearer ${this.access_token}` },
      })
        .then((res) => {
          this.showDialog = true;
          this.respStatusText = res.statusText;
          this.respMsg = 'Congratulations! Your vote has been counted successfully!';
          this.resultsLink = `/PollResults/${this.id}`;
        })
        .catch((err) => {
          this.showDialog = true;
          this.respMsg = 'Oops! Something went wrong and your vote wasn\'t counted...Please try again later.';
          console.error(err);
        });
    },
  },
};

</script>

<style lang="scss" scoped>
  .theme--dark.v-label {
    color: inherit;
  }
</style>
