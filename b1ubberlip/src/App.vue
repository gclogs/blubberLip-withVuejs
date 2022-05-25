<template>
  <img alt="Vue logo" src="./assets/logo.png">
  <NotFound msg="Welcome to Your Vue.js App"/>
  <RouterView />
</template>

<script>
import NotFound from './pages/NotFoundpage.vue'

export default {
  name: 'App',
  components: {
    NotFound
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
