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
        {{ name }} | {{ focusIndex }}
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
  focusIndex: {
    type: Number,
    required: false,
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
    if (props.currentFocused === props.focusIndex) {
      focusTrigger.value.focus();
    }
  }
);

function updateFocus() {
  emit("update:current-focused", props.focusIndex);
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
