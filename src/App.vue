<template>
  <div id="app">
    <div id="nav">
      <router-link to="/CreatePoll">Create Poll</router-link> |
      <router-link to="/ViewPoll/temp">View Poll</router-link>
    </div>
    <router-view/>
  </div>
</template>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
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
