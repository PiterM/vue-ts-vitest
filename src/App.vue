<script lang="ts">
import TheView from "./components/TheView.vue";
import MyPokemon from "./components/MyPokemon.vue";
export default {
  components: {
    TheView,
    MyPokemon,
  },
};
</script>

<template>
  <h1>Ejoppa!</h1>
  <TheView element="div">Hello from Vue!</TheView>
  <MyPokemon />
</template>
