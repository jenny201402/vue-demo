<template>
  <div id="app">
    <!--<img src="./assets/logo.png">-->
    <p>
      <router-link to="/test">test</router-link>
      <router-link to="/pig">pig</router-link>
      <router-link to="/About">About</router-link>
    </p>
    <router-view/>
  </div>
</template>

<script>
  import About from '@/components/About'
  import test from '@/components/test'
  import pig from '@/components/pig'
export default {
  name: 'App',
  components:{
    About,
    test,
    pig,
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
