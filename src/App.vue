<template>
  <div id="app">
    欢迎使用Vue，详情请见 https://github.com/kaisa911
    <div class="menu">
      <div @click="$router.push('/')">index</div>
      <div @click="$router.push('/about')">about</div>
    </div>
    <router-view />
  </div>
</template>

<script>
export default {
  name: 'App',
  data: () => ({}),
  methods: {},
};
</script>

<style lang="less" scoped>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  transform: rotate(0deg);
  .menu {
    display: flex;
    justify-content: center;
    div {
      margin: 10px 10px;
      color: #157ec4;
      font-size: 20px;
      cursor: pointer;
    }
  }
}
</style>
