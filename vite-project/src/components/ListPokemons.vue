<script setup>
const pokemon = defineProps(["name", "urlImagem"]);
</script>

<template>
  <div class="col-4">
    <div class="card p-2 mb-3 card-list-pokemon">
      <p class="text-center">{{ pokemon.name }}</p>
      <img class="card-img-top" :src="urlImagem" alt="Imagem" height="80" />
    </div>
  </div>
</template>

<style scoped>
.card-list-pokemon {
  background: #3f5dff;
  background: radial-gradient(circle, #3292ff 14%, #c0faff 100%);
  cursor: pointer;
}

.card-list-pokemon:hover {
  background: #3f5dff;
  background: radial-gradient(circle, #add3ff 14%, #a2f9ff 100%);
}

.card-list-pokemon img:hover{
    padding: .1rem;
}
</style>
