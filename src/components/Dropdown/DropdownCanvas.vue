<script setup lang="ts">
import DropDown from "./DropDown.vue";
import DropdownList from "./DropdownList.vue";
import { ref } from "vue";

const listVisible = ref(false);

const toggleList = () => {
  listVisible.value = !listVisible.value;
};
</script>

<template>
  <section>
    <h4>Dropdown.</h4>
    <div class="canvas">
      <drop-down>
        <template #button>
          <q-btn color="primary" label="Primary" @click="toggleList" />
        </template>
        <template #list v-if="listVisible">
          <dropdown-list></dropdown-list>
        </template>
      </drop-down>
    </div>
  </section>
</template>

<style scoped lang="sass">
section .canvas
  background: #f0f0f0
  height: 85vh
  width: 100%
  position: relative
</style>
