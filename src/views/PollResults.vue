<template>
  <v-container grid-list-lg>
    You're viewing {{pollChartData._id}}
  </v-container>
</template>

<script>
import axios from 'axios';
import { Bar } from 'vue-chartjs';

export default {
  extends: Bar,
  name: 'poll-results',
  props: {
    id: String,
  },
  data: () => ({
    pollData: null,
    pollChartData: {
      labels: [],
      datasets: [
        {
          label: 'Vote Results',
          backgroundColor: '#f87979',
          data: [],
        },
      ],
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
    },
  }),
  created() {
    this.fetchData();
  },
  mounted() {
    this.renderChart(this.pollChartData, this.options);
  },
  watch: {
    $route: 'fetchData',
  },
  methods: {
    fetchData() {
      axios.get(`http://localhost:3000/ViewPoll/${this.id}`)
        .then((res) => {
          this.pollData = res.data;
          res.data.options.forEach((option) => {
            this.pollChartData.labels.push(option.name);
            this.pollChartData.datasets[0].data.push(option.voteCount);
          });
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
