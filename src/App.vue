<template>
  <div id="app">
    hello world大大{{ hahha }}
    <router-link />
  </div>
</template>

<script>
export default {
  name: 'App',
  data: () => ({
    hahha: 23232, // 2323
  }),
};
</script>

<style scoped>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  transform: rotate(0deg);
}
</style>
