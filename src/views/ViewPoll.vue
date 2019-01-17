<template>
    <p>this is a page to vote and view on poll #{{id}}</p>
</template>

<script>
export default {
  name: 'view poll',
  props: {
    id: String,
  },
};
</script>
