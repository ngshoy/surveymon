<template>
  <v-app dark>
    <div id="main">
      <router-view />
    </div>
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
