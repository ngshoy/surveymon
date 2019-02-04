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
  </v-container>
</template>

<script>
import axios from 'axios';

export default {
  name: 'view-poll',
  props: {
    id: String,
  },
  data: () => ({
    pollData: {},
    selectedOption: '',
  }),
  created() {
    this.fetchData();
  },
  watch: {
    $route: 'fetchData',
  },
  methods: {
    fetchData() {
      axios.get(`http://localhost:3000/ViewPoll/${this.id}`)
        .then((res) => {
          this.pollData = res.data;
        })
        .catch((err) => {
          console.error(err);
        });
    },
    upvote() {
      axios.patch(`http://localhost:3000/vote/${this.id}`, {
        vote: this.selectedOption,
      })
        .then((res) => {
          console.log(res);
        })
        .catch((err) => {
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
