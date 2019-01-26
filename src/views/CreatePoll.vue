<template>
  <div>
    <header>Create Your Personalized Poll</header>
    <br>
    <label for="pollTopic">What is your topic?</label>
    <div>
      <input type="text" id="pollTopic" name="pollTopic" v-model="poll.pollTopic">
    </div>
    <br>
    <label for="pollOptions">What are the options?</label>
    <ul name="pollOptions">
      <li v-for="(option, index) in poll.pollOptions" v-bind:key="index">
        <input type="text" v-model="poll.pollOptions[index]">
      </li>
    </ul>
    <button v-on:click="addPollOption">add another option</button>
    <br>
    ---------------------------------

    <header>Preview Your Poll</header>
    <p>{{poll.pollTopic}}</p>
    <p>{{poll.pollOptions}}</p>
  </div>
</template>

<script>
export default {
  name: 'create-poll',
  data: () => ({
    poll: {
      pollTopic: '',
      pollOptions: [''],
    },
  }),
  methods: {
    addPollOption() {
      this.poll.pollOptions.push('');
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
</style>
