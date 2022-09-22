<script setup lang="ts">
defineProps({
  element: String,
  ariaLabel: String,
  isDisabled: Boolean,
});
</script>

<template>
  <component :is="element" :aria-label="ariaLabel" :disabled="isDisabled">
    <slot></slot>
  </component>
</template>
