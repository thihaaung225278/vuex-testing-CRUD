<template>
  <h1>Vuex Testing Project</h1>
  <Todo></Todo>
</template>

<script>

import Todo from './components/Todo'
export default {
  components: { Todo },
  name: 'App',
  
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
