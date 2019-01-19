<template>
  <div>
    <p>this is a page to vote and view on poll {{pollData.pollId}}</p>
    <ul>
      <li v-for="option in pollData.options" v-bind:key="option">{{option}}</li>
    </ul>
  </div>
</template>

<script>
import mockData from '../../tests/mockData';

export default {
  name: 'view-poll',
  props: {
    id: String,
  },
  data: () => ({
    loading: false,
    pollData: {},
  }),
  created() {
    this.fetchData();
  },
  watch: {
    $route: 'fetchData',
  },
  methods: {
    fetchData() {
      this.loading = true;
      console.log('loading...');
      // replace with api call
      this.pollData = { ...mockData };
    },
  },
};
</script>
