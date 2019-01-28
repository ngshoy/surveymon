<template>
  <div>
    <header>Create Your Personalized Poll</header>
    <br>
    <label for="topic">What is your topic?</label>
    <div>
      <input type="text" id="topic" name="topic" v-model="poll.topic">
    </div>
    <br>
    <label for="options">What are the options?</label>
    <ul name="options">
      <li v-for="(option, index) in poll.options" v-bind:key="index">
        <input type="text" v-model="poll.options[index]">
      </li>
    </ul>
    <button v-on:click="addPollOption">add another option</button>
    <br>
    ---------------------------------

    <header>Preview Your Poll</header>
    <p>{{poll.topic}}</p>
    <p>{{poll.options}}</p>
    <button v-on:click="createNewPoll">Create your poll</button>
    <br>
    ---------------------------------

    <header v-html="respMsg"></header>
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

<style scoped>
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

</style>
