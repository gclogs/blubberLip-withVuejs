<template>
  <Header />
  <RouterView />
  <Footer />
</template>

<script>
import Header from './layout/Header.vue';
import Footer from './layout/Footer.vue';

export default {
  components: {
    Header,
    Footer
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
