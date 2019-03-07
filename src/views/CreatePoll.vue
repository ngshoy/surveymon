<template>
  <v-container grid-list-lg>
    <v-layout row wrap>
      <v-flex md6>
        <v-card color="primary">
          <v-card-title primary-title>
            <div class="headline">
              CREATE YOUR POLL
            </div>
          </v-card-title>
          <v-card-text>
            <v-text-field label="What is your topic?" color="tertiary" v-model="poll.topic" />
            <label for="options">What are the options?</label>
            <ul name="options">
              <li v-for="(option, index) in poll.options" :key="index">
                <v-text-field label="Input option" color="tertiary"
                  v-model="poll.options[index].name" />
              </li>
            </ul>
          </v-card-text>
          <v-card-actions>
            <v-layout justify-end>
              <v-btn flat @click="addPollOption">Add another option</v-btn>
            </v-layout>
          </v-card-actions>
        </v-card>
      </v-flex>
      <v-flex md6>
        <v-card color="accent">
          <v-card-title primary-title>
            <div class="headline">
              PREVIEW YOUR POLL
            </div>
          </v-card-title>
          <v-card-text>
            <v-subheader>{{poll.topic}}</v-subheader>
            <v-list :dark=false>
              <v-list-tile v-for="(option, index) in poll.options" :key="index">
                <v-layout justify-space-between align-center>
                  <span>{{index + 1}}. {{option.name}}</span>
                  <v-btn flat icon @click="removePollOption(index)">
                    <v-icon>clear</v-icon>
                  </v-btn>
                </v-layout>
              </v-list-tile>
            </v-list>
          </v-card-text>
          <v-card-actions>
            <v-layout justify-end>
              <v-btn flat @click="createNewPoll">Create poll</v-btn>
            </v-layout>
          </v-card-actions>
        </v-card>
      </v-flex>
    </v-layout>
    <v-dialog v-model="showDialog">
      <v-card :color="respLink !== '' ? 'success' : 'error'">
        <v-card-title v-if="respLink !== ''">
          Congratulations! Your poll is created successfully! Share your link to get voting:
          <router-link :to="{name: 'view-poll', params: { id: respId}}">{{respLink}}</router-link>
        </v-card-title>
        <v-card-title v-if="respLink === ''">
          Oops! Something went wrong and we couldn\'t create your poll... Please try again in another time.
        </v-card-title>
        <v-card-actions>
          <v-layout justify-end>
            <v-btn @click="showDialog = !showDialog">Close</v-btn>
            <v-btn v-if="respLink !== ''" @click="copyToClipboard">Copy link</v-btn>
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
  name: 'create-poll',
  data: () => ({
    poll: {
      topic: '',
      options: [{
        name: '',
      }],
    },
    respId: '',
    respLink: '',
    showDialog: false,
    access_token: '',
  }),
  created() {
    this.access_token = store.state.permissions.access_token;
  },
  methods: {
    addPollOption() {
      this.poll.options.push({
        name: '',
      });
    },
    removePollOption(index) {
      this.poll.options.splice(index, 1);
    },
    copyToClipboard() {
      const el = document.createElement('textarea');
      el.value = this.respLink;
      el.style = {
        visibility: 'hidden',
      };
      document.body.appendChild(el);
      el.select();
      document.execCommand('copy');
      document.body.removeChild(el);
    },
    createNewPoll() {
      this.respLink = '';
      this.respMsg = '';
      axios.put('http://localhost:3000/CreatePoll', {
        ...this.poll,
      }, {
        headers: { Authorization: `Bearer ${this.access_token}` },
      })
        .then((res) => {
          this.respLink = `http://localhost:8080/ViewPoll/${res.data._id}`;
          this.respId = res.data._id;
          this.showDialog = true;
        })
        .catch((err) => {
          console.error(err);
          this.showDialog = true;
        });
    },
  },
};

</script>

<style lang="scss" scoped>
  ul {
    padding: 0;
    margin: 0;
    list-style-type: none;
  }

  .theme--dark.v-list {
    background: transparent;
  }

</style>
