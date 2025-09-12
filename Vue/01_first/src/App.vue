<template>
  <div>
    <h2>Vue.js 기초</h2>

    <Directive1/>
  </div>
</template>

<script>
  import Directive1 from './components/Directive1.vue';
  export default {
    name: 'App',
    components: {
      Directive1 //Directive1: Directive1
    }
  }
</script>

<style scoped>

</style>