<script setup>

import { RouterLink } from 'vue-router';

</script>

<template>
  <header>
    <nav class="navbar navbar-expand-lg bg-body-tertiary">
      <div class="container-fluid">
        <RouterLink class="navbar-brand" to="/">
          <img src="../assets/pokeball.png" alt="Bootstrap" width="30" height="24" class="d-inline-block align-text-top">
          PokeVite
        </RouterLink>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav">
            <li class="nav-item">
              <RouterLink class="nav-link" aria-current="page" to="/">Home</RouterLink>
            </li>
            <li class="nav-item">
              <RouterLink class="nav-link" to="/about">About</RouterLink>
            </li>
            <li class="nav-item">
              <RouterLink class="nav-link" to="/secret">Secret</RouterLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </header>

</template>

<style scoped>

</style>