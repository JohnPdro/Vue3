<script setup>
import { onMounted, reactive, ref, computed } from "vue";
import ListPokemons from "../components/ListPokemons.vue";
import CardPokemonSelected from "../components/CardPokemonSelected.vue";

let pokemons = reactive(ref());
let searchPokemonField = ref("");
let pokemonSelected = reactive(ref());
let loading = ref(false);
let urlBaseSvg = ref(
  "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/"
);

onMounted(() => {
  fetch("https://pokeapi.co/api/v2/pokemon?limit=151&offset=0")
    .then((res) => res.json())
    .then((res) => (pokemons.value = res.results));
});

const pokemonFiltered = computed(() => {
  if (pokemons.value && searchPokemonField.value) {
    let pokemonFilter = pokemons.value.filter((x) =>
      x.name.toLowerCase().includes(searchPokemonField.value.toLowerCase())
    );
    pokemonFilter.sort(function (a, b) {
      return a.name < b.name ? -1 : a.name > b.name ? 1 : 0;
    });
    return pokemonFilter;
  }
  return pokemons.value;
});

const selectPokemon = async (pokemon) => {
  loading.value = true;
  await fetch(pokemon.url)
    .then((res) => res.json()) // .then
    .then((res) => (pokemonSelected.value = res))
    .catch((err) => alert(err)) // .catch é para exibir um erro caso a busca da API falhe
    .finally(() => {
      loading.value = false;
    }); // .finally é utilizado para executar algo após a conclusão da busca da API
  console.log(pokemon);
};
</script>

<template>
  <main>
    <div class="container">
      <div class="row mt-4">
        <div class="col-sm-12 col-md-6">
          <CardPokemonSelected
            :name="pokemonSelected?.name"
            :xp="pokemonSelected?.base_experience"
            :height="pokemonSelected?.height"
            :img="pokemonSelected?.sprites.other.dream_world.front_default"
            :loading="loading"
          />
        </div>

        <div class="col-sm-12 col-md-6">
          <div class="card card-list">
            <div class="card-body row">
              <div class="input-group mb-3">
                <button
                  class="btn btn-outline-secondary"
                  type="button"
                  id="button-addon1"
                >
                  <i class="fa fa-search"></i>
                </button>
                <input
                  v-model="searchPokemonField"
                  type="text"
                  class="form-control"
                  placeholder="Pesquisar"
                  aria-label="Example text with button addon"
                  aria-describedby="button-addon1"
                />
              </div>

              <ListPokemons
                v-for="pokemon in pokemonFiltered"
                :key="pokemon.name"
                :name="pokemon.name"
                :urlImagem="urlBaseSvg + pokemon.url.split('/')[6] + '.svg'"
                @click="selectPokemon(pokemon)"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<style scoped>
.card-list {
  max-height: 75vh;
  overflow-y: scroll;
  overflow-x: hidden;
}

@media (max-width: 600px) {
  .card-list {
    max-height: 55vh;
  }
}
</style>
