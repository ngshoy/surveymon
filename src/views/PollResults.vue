<template>
  <v-container grid-list-lg>
    <div class="headline" v-if="pollData">{{pollData.topic}}</div>
    <doughnut-chart v-if="loaded" :chartData="pollChartData" />
  </v-container>
</template>

<script>
import axios from 'axios';
import DoughnutChart from '../components/DoughnutChart.vue';

export default {
  name: 'poll-results',
  components: { DoughnutChart },
  props: {
    id: String,
  },
  data: () => ({
    loaded: false,
    pollData: null,
    pollChartData: {
      labels: [],
      datasets: [
        {
          label: 'Vote Results',
          backgroundColor: ['#7E57C2', '#C62828', '#448AFF', '#43A047'],
          data: [],
        },
      ],
    },
  }),
  created() {
    this.fetchData();
  },
  watch: {
    $route: 'fetchData',
  },
  methods: {
    fetchData() {
      this.loaded = false;
      axios.get(`http://localhost:3000/ViewPoll/${this.id}`)
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
