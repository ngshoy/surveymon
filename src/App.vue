<template>
  <v-app dark>
    <v-layout row wrap fill-height id="main">
      <router-view />
    </v-layout>
  </v-app>
</template>

<style lang="scss">
  @import '~vuetify/dist/vuetify.min.css';

  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    margin: auto;
    text-align: center
  }

  #nav {
    padding: 30px;

    a {
      font-weight: bold;

      &.router-link-exact-active {
        color: #9e9d42;
      }
    }
  }

</style>
