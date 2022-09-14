<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  name: "TheView",
  props: {
    element: String,
    ariaLabel: String,
    isDisabled: Boolean,
  },
});
</script>

<template>
  <component :is="element" :aria-label="ariaLabel" :disabled="isDisabled">
    <slot></slot>
  </component>
</template>
