<template>
  <v-container grid-list-lg>
    <div class="headline" v-if="pollData">{{pollData.topic}}</div>
    <bar-chart v-if="loaded" :chartData="pollChartData" />
  </v-container>
</template>

<script>
import axios from 'axios';
import BarChart from '../components/BarChart.vue';

export default {
  name: 'poll-results',
  components: { BarChart },
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
          backgroundColor: '#f87979',
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
