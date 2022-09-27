<template>
  <div class="dropdown">
    <slot
      name="cta"
      :toggleIsOpen="toggleIsOpen"
      :setFocusToFirstChild="setFocusToFirstChild"
    ></slot>
    <div class="dropdown-content" v-if="isOpen" ref="containerRef">
      <slot name="content"></slot>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";

const containerRef = ref<HTMLElement | null>(null);
const isOpen = ref(false);

function toggleIsOpen() {
  isOpen.value = !isOpen.value;
}

function setFocusToFirstChild() {
  if (isOpen.value && containerRef.value) {
    const el = containerRef.value.querySelector(
      "[data-focus]"
    ) as HTMLElement | null;
    el?.focus();
  }
}
</script>

<style scoped lang="sass">
.dropdown-content
  width: 170px
  padding: 20px
  border: 1px solid #000
</style>
