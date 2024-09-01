<script setup>
import Cabecalho from './Cabecalho.vue';
</script>

<template>
  <NavBar />
  <!-- OU
  <component is="NavBar"></component> 
  -->
  <header>
      <slot name="cabecalho"></slot>
  </header>

  <main>
    <!-- <Usuario /> -->
    <slot></slot>
  </main>

  <footer>
    <slot name="footer"></slot>
  </footer>
</template>

<style>
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: Verdana, Geneva, Tahoma, sans-serif;
}
header {
  line-height: 1.5;
}
[color-scheme="dark"]{
  background-color: #28292e;
  color: #d4d4d4;
}

[color-scheme="light"]{
  background-color: #ffffff;
  color: #28292e;
}
</style>
