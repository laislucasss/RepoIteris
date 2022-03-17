<template>
  <div id="app">
    <DesafioContador/>
  </div>
</template>

<script>
import DesafioContador from './components/desafioContador'

export default {
  name: 'App',
  components: {
    DesafioContador,
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
