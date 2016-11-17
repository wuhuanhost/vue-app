<template>
  <div id="app">
<!--     <hello></hello> -->
    <todo></todo>
  </div>
</template>

<script>
import Hello from './components/Hello'
import Todo from './components/Todo'
export default {
  name: 'app',
  components: {
    Hello,
    Todo
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
