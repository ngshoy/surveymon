<template>
  <div>
    <p>this is a page to vote and view on poll {{pollData._id}}</p>
    <ul>
      <li v-for="option in pollData.options" v-bind:key="option">{{option}}</li>
    </ul>
  </div>
</template>

<script>
import axios from 'axios';

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
      axios.get(`http://localhost:3000/ViewPoll/${this.id}`)
        .then((res) => {
          this.pollData = res.data;
        })
        .catch((err) => {
          console.error(err);
        });
      this.loading = false;
    },
  },
};
</script>
