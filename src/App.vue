<template>
  <div id="app">
    <MainSection />
  </div>
</template>

<script>
import MainSection from './components/main'

export default {
  name: 'App',
  components: {
    MainSection
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
