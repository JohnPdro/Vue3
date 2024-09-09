<script setup>
const pokemon = defineProps(["name", "xp", "height", "img", "loading"]);
</script>

<template>
  <div
    class="card card-pokemon-selected"
    :class="loading ? '' : 'animate__animated animate__flipInY'"
  >
    <img
      v-if="pokemon.name"
      :src="pokemon.img"
      class="card-img-top pt-2"
      :alt="pokemon.name"
    />
    <img
      v-else
      src="../assets/egg_pokemon.svg"
      class="card-img-top pt-2"
      alt="???"
    />

    <div class="card-body">
      <h5 class="card-title text-center">{{ pokemon.name || "???" }}</h5>
      <hr />
      <div class="row text-center">
        <section class="col">
          <strong>XP:</strong>
          <span>{{ pokemon.xp }}</span>
        </section>
        <section class="col">
          <strong>Altura:</strong>
          <span>{{ pokemon.height }}</span>
        </section>
      </div>

      <div class="mt-2 d-none d-md-block">
        <p class="card-text">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum asperiores excepturi dolore animi, consequatur facilis totam, ratione impedit
        </p>
      </div>

    </div>
  </div>
</template>

<style scoped>
.card-pokemon-selected {
  height: 75vh;
  background: #000000;
  background: radial-gradient(circle, #b4ffad 14%, #67ff59 100%);
}

@media (max-width: 768px) {
  .card-pokemon-selected {
    height: 30vh;
    width: 45%;
    margin: 0 auto 10px auto;
  }
  .card-pokemon-selected img {
    height: 100px;
  }
}
</style>
