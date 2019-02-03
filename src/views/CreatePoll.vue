<template>
  <div class="md-layout">
    <div class="md-layout-item">
      <md-card>
        <md-card-header>
          <div class="md-title">Create Your Personalized Poll</div>
        </md-card-header>
        <md-card-content>
          <md-field>
            <label>What is your topic?</label>
            <md-input type="text" v-model="poll.topic"></md-input>
          </md-field>
          <label for="options">What are the options?</label>
          <ul name="options">
            <li v-for="(option, index) in poll.options" v-bind:key="index">
              <md-field md-inline>
                <label>Input Option</label>
                <md-input type="text" v-model="poll.options[index].name"></md-input>
              </md-field>
            </li>
          </ul>
        </md-card-content>
        <md-card-actions>
          <md-button class="md-accent" @click="addPollOption">Add another option</md-button>
        </md-card-actions>
      </md-card>
    </div>
    <div class="md-layout-item">
      <md-card>
        <md-card-header>
          <div class="md-title">Preview Your Poll</div>
        </md-card-header>
        <md-card-content>
          <md-subheader>{{poll.topic}}</md-subheader>
          <md-list>
            <md-list-item v-for="(option, index) in poll.options" v-bind:key="index">
              <span class="md-list-item-text">{{index + 1}}. {{option.name}}</span>
              <md-button class="md-icon-button md-list-action" @click="removePollOption(index)">
                <md-icon class="md-primary">clear</md-icon>
              </md-button>
            </md-list-item>
          </md-list>
        </md-card-content>
        <md-card-actions>
          <md-button class="md-primary" @click="createNewPoll">Create your poll</md-button>
        </md-card-actions>
      </md-card>

      <md-dialog :md-active.sync="showDialog">
        <md-dialog-title v-html="respMsg"></md-dialog-title>
        <md-dialog-actions>
          <md-button class="md-accent" @click="showDialog = !showDialog">Close</md-button>
          <md-button class="md-primary" v-if="this.respLink !== ''" @click="copyToClipboard">
            Copy link
            </md-button>
        </md-dialog-actions>
      </md-dialog>
    </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'create-poll',
  data: () => ({
    poll: {
      topic: '',
      options: [{ name: '' }],
    },
    respMsg: '',
    respLink: '',
    showDialog: false,
  }),
  methods: {
    addPollOption() {
      this.poll.options.push({ name: '' });
    },
    removePollOption(index) {
      this.poll.options.splice(index, 1);
    },
    copyToClipboard() {
      const el = document.createElement('textarea');
      el.value = this.respLink;
      el.style = { visibility: 'hidden' };
      document.body.appendChild(el);
      el.select();
      document.execCommand('copy');
      document.body.removeChild(el);
    },
    createNewPoll() {
      this.respLink = '';
      this.respMsg = '';
      axios.put('http://localhost:3000/CreatePoll', { ...this.poll })
        .then((res) => {
          this.respLink = `http://localhost:8080/#/ViewPoll/${res.data._id}`;
          this.respMsg = `Congratulations! Your poll is created successfully! Share your link to get voting: 
          <a href="${this.respLink}" target="_blank" no-referrer>${this.respLink}</a>`;
          this.showDialog = true;
        })
        .catch((err) => {
          console.error(err);
          this.respMsg = 'Oops! Something went wrong and we couldn\'t create your poll... Please try again in another time.';
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

  ul li input {
    width: 100px;
  }

  #topic {
    width: 200px;
  }

  .md-card {
    width: 460px;
    margin: 10px;
  }

</style>
