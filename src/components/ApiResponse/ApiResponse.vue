<script setup lang="ts">
import { ref } from "vue";
import type IPokemon from "../../types/Pokemon";

const pokemons = ref<IPokemon[]>([]);
const togglePokemons = async () => {
  if (pokemons.value.length === 0) {
    const response = await fetch("https://pokeapi.co/api/v2/pokemon");
    const responseJson = await response.json();
    const data = responseJson.results;
    pokemons.value = data;
    console.log(responseJson);
  } else {
    pokemons.value = [];
  }
};
</script>

<template>
  <button @click="togglePokemons">Toggle Pokemons</button>
  <div v-for="(pokemon, idx) in pokemons" :key="idx">
    <h4>{{ pokemon.name }}</h4>
  </div>
</template>
