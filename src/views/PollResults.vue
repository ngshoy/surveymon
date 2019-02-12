<template>
  <v-container grid-list-lg>
    You're viewing {{pollData._id}}
  </v-container>
</template>

<script>
import axios from 'axios';

export default {
  name: 'poll-results',
  props: {
    id: String,
  },
  data: () => ({
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
      axios.get(`http://localhost:3000/ViewPoll/${this.id}`)
        .then((res) => {
          this.pollData = res.data;
        })
        .catch((err) => {
          console.error(err);
        });
    },
  },
};
</script>

<style lang="scss" scoped>

</style>
