<script lang="ts">
import { defineComponent } from "vue";

interface IPokemon {
  name: string;
}

export default defineComponent({
  data() {
    return {
      pokemons: [] as IPokemon[],
    };
  },
  methods: {
    async togglePokemons() {
      if (this.pokemons.length === 0) {
        const response = await fetch("https://pokeapi.co/api/v2/pokemon");
        const responseJson = await response.json();
        const data = responseJson.results;
        this.pokemons = data;
        console.log(responseJson);
      } else {
        this.pokemons = [];
      }
    },
  },
});
</script>

<template>
  <button @click="togglePokemons">Toggle Pokemons</button>
  <div v-for="(pokemon, idx) in pokemons" :key="idx">
    <h4>{{ pokemon.name }}</h4>
  </div>
</template>
