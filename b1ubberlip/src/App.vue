<template>
  <Header />
  <RouterView />
</template>

<script>
import Header from './layout/Header.vue';

export default {
  components: {
    Header
  }
}
</script>

<style lang="scss">
#app {
  a {
    text-decoration: none;
  }
  font-family: 'Noto Sans KR', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
