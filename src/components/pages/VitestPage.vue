<script setup lang="ts">
import MyHello from "../Hello/MyHello.vue";
import MyPokemon from "../ApiResponse/ApiResponse.vue";
</script>

<template>
  <h1>Vitest.</h1>
  <section>
    <MyHello element="div">Hello from Vue!</MyHello>
  </section>
  <section>
    <MyPokemon />
  </section>
</template>

<style scoped>
#app section {
  margin-bottom: 20px;
  padding-bottom: 10px;
  border-bottom: 1px solid #ccc;
}
</style>
