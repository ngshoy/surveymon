<template>
  <div>
    <header>Create Your Personalized Poll</header>
    <label for="pollTopic">What's your topic?</label>
    <input type="text" id="pollTopic" name="pollTopic" v-model="poll.pollTopic">
    <br>
    <label for="pollOption">Add your options</label>
    <input type="text" id="pollOption" v-model="pollOptionInput">
    <button v-on:click="addPollOption">add option</button>
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
      pollOptions: [],
    },
    pollOptionInput: '',
  }),
  methods: {
    addPollOption() {
      this.poll.pollOptions.push(this.pollOptionInput);
      this.pollOptionInput = '';
    },
  },
};

</script>
