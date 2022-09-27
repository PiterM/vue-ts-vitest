<template>
  <div class="dropdown-nav-items">
    <hr v-if="separator" />
    <slot v-else-if="$slots.default"></slot>

    <template v-else>
      <a
        href="#"
        data-focus
        @focus="updateFocus"
        ref="focusTrigger"
        class="dropdown-nav-item-focus-element"
      >
        {{ name }} --- {{ index }}
      </a>
    </template>
  </div>
</template>

<script setup lang="ts">
import { ref, watch } from "vue";

const props = defineProps({
  separator: {
    type: Boolean,
    default: false,
  },
  hasChildren: {
    type: Boolean,
    default: false,
  },
  name: {
    type: String,
    default: "",
  },
  index: {
    type: [Number],
    required: true,
  },
  currentFocused: {
    type: Number,
    default: 0,
  },
});

const emit = defineEmits(["update:current-focused"]);
const focusTrigger = ref();

watch(
  () => props.currentFocused,
  () => {
    if (props.currentFocused === props.index && !props.separator) {
      focusTrigger.value.focus();
    }
  }
);

function updateFocus() {
  console.log("updateFocus", props.index);
  emit("update:current-focused", props.index);
}
</script>

<style scoped lang="sass">
.dropdown-nav-items
  margin: 5px 0
  a
    padding: 5px
    &:focus
      border: 1px dotted #000
</style>
