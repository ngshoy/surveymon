<template>
  <div>
    <p>this is a page to vote and view on poll #{{id}}</p>
    <ul>
      <li v-for="option in options" v-bind:key="option">{{option}}</li>
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
  data: () => mockData,
};
</script>
