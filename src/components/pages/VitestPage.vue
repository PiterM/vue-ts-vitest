<script lang="ts">
import { defineComponent } from "vue";

import Hello from "../Hello/Hello.vue";
import MyPokemon from "../ApiResponse/ApiResponse.vue";
export default defineComponent({
  components: {
    Hello,
    MyPokemon,
  },
});
</script>

<template>
  <h1>Vitest.</h1>
  <section>
    <Hello element="div">Hello from Vue!</Hello>
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
