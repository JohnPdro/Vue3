<script setup>
import NavBar from './components/NavBar.vue'
import Footer from './components/Footer.vue';
</script>

<template>
  <NavBar /> 
  
  <RouterView />
  
  <Footer></Footer>
</template>

<style>
body{
  height: 100vh;
  background: #22c1c3;
  background: linear-gradient(0deg, #22c1c3 0%, #8f2dfd 100%);
}
</style>
