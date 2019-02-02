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
                <md-input type="text" v-model="poll.options[index]"></md-input>
              </md-field>
            </li>
          </ul>
        </md-card-content>
        <md-card-actions>
          <md-button class="md-accent" v-on:click="addPollOption">Add another option</md-button>
        </md-card-actions>
      </md-card>
    </div>
    <div class="md-layout-item">
      <md-card>
        <md-card-header>
          <div class="md-title">Preview Your Poll</div>
        </md-card-header>
        <md-card-content>
          <p>{{poll.topic}}</p>
          <p>{{poll.options}}</p>
        </md-card-content>
        <md-card-actions>
          <md-button class="md-primary" v-on:click="createNewPoll">Create your poll</md-button>
        </md-card-actions>
      </md-card>
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
      options: [''],
    },
    respMsg: '',
  }),
  methods: {
    addPollOption() {
      this.poll.options.push('');
    },
    createNewPoll() {
      axios.put('http://localhost:3000/CreatePoll', { ...this.poll })
        .then((res) => {
          this.respMsg = `Congratulations! Your poll is created successfully! Share your link to get voting: 
          <a href="http://localhost:8080/#/ViewPoll/${res.data._id}" target="_blank" no-referrer>http://localhost:8080/#/ViewPoll/${res.data._id}</a>`;
        })
        .catch((err) => {
          console.error(err);
          this.respMsg = 'Oops! Something went wrong and we couldn\'t create your poll... Please try again in another time.';
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
