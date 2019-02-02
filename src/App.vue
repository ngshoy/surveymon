<template>
  <div id="app">
    <div id="nav">
      <router-link to="/CreatePoll">Create Poll</router-link> |
      <router-link to="/ViewPoll/temp">View Poll</router-link>
    </div>
    <div id="main">
      <router-view/>
    </div>
  </div>
</template>

<style lang="scss">
@import "~vue-material/dist/theme/engine";

@include md-register-theme("default", (
  primary: md-get-palette-color(lightblue, A200),
  accent: md-get-palette-color(red, A200),
));

@import "~vue-material/dist/theme/all";

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  max-width: 960px;
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
