<script lang="ts">
export default {
  data() {
    return {
      pokemons: [],
    };
  },
  methods: {
    async getPokemon() {
      const data = await fetch("https://pokeapi.co/api/v2/pokemon");
      this.pokemons = (await data.json()).results;
    },
  },
};
</script>

<template>
  <button @click="getPokemon">Get Pokemon</button>
  <div v-for="(pokemon, idx) in pokemons" :key="idx">
    <h4>{{ pokemon.name }}</h4>
  </div>
</template>
