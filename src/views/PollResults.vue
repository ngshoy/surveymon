<template>
  <v-container grid-list-lg>
    <div class="headline" v-if="pollData">{{pollData.topic}}</div>
    <doughnut-chart v-if="loaded" :chartData="pollChartData" />
  </v-container>
</template>

<script>
import axios from 'axios';
import store from '../store';
import DoughnutChart from '../components/DoughnutChart.vue';

export default {
  name: 'poll-results',
  components: { DoughnutChart },
  props: {
    id: String,
  },
  data: () => ({
    loaded: false,
    access_token: '',
    pollData: null,
    pollChartData: {
      labels: [],
      datasets: [
        {
          label: 'Vote Results',
          backgroundColor: ['#7E57C2', '#C62828', '#448AFF', '#43A047'],
          hoverBackgroundColor: ['#673AB7', '#B71C1C', '#2979FF', '#388E3C'],
          data: [],
        },
      ],
    },
  }),
  created() {
    this.access_token = store.state.permissions.access_token;
    this.fetchData();
  },
  watch: {
    $route: 'fetchData',
  },
  methods: {
    fetchData() {
      this.loaded = false;
      axios.get(`http://localhost:3000/PollResults/${this.id}`, {
        headers: { Authorization: `Bearer ${this.access_token}` },
      })
        .then((res) => {
          this.pollData = res.data;
          res.data.options.forEach((option) => {
            this.pollChartData.labels.push(option.name);
            this.pollChartData.datasets[0].data.push(option.voteCount);
          });
          this.loaded = true;
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
