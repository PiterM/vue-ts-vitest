<template>
  <div>
    <hr v-if="separator" />
    <slot v-else-if="$slots.default"></slot>
    <template v-else>
      <div class="dropdown-nav-item">
        <a
          href="#"
          data-focus
          @focus="updateFocus"
          ref="focusTrigger"
          @keydown.right="onKeyRightHandler"
          @blur="onBlurHandler"
        >
          <span>{{ name }} | {{ focusIndex }}</span>
          <i v-if="hasChildren" class="bi-chevron-right"></i>
        </a>
        <DropDownNav
          v-if="hasChildren"
          class="dropdown-content children-items"
          :class="{ 'is-open': isChildFocused }"
          :items="children"
          :isNested="true"
          ref="containerRef"
          @first-element-selected="onFirstElementSelectedHandler"
        />
      </div>
    </template>
  </div>
</template>

<script setup lang="ts">
import { ref, watch, computed, nextTick } from "vue";

import DropDownNav from "./DropDownNav.vue";

const props = defineProps({
  separator: {
    type: Boolean,
    default: false,
  },
  children: {
    type: Array,
    required: false,
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
  topPosition: {
    type: String,
    required: false,
  },
  isNestedChild: {
    type: Boolean,
    required: false,
  },
});

const emit = defineEmits(["update:current-focused", "close-sub-dropdown"]);
const focusTrigger = ref();
const containerRef = ref<HTMLElement | null>(null);
const isChildFocused = ref(false);

const hasChildren = computed(() => props.children?.length);
const isItemFocused = computed(() => props.currentFocused === props.focusIndex);

watch(
  () => props.currentFocused,
  () => {
    if (isItemFocused.value) {
      focusTrigger.value.focus();
    }
  }
);

function updateFocus() {
  emit("update:current-focused", props.focusIndex);
}

function onFirstElementSelectedHandler() {
  focusTrigger.value.focus();
  isChildFocused.value = false;
}

function onKeyRightHandler() {
  isChildFocused.value = true;
  nextTick(() =>
    containerRef?.value?.$el?.querySelector("[data-focus]").focus()
  );
}

function onBlurHandler() {
  if (props.isNestedChild) {
    emit("close-sub-dropdown", props.focusIndex);
  }
}
</script>

<style scoped lang="sass">
.dropdown-nav-item
  position: relative
  margin: 3px
  display: flex
  justify-content: space-between
  padding: 3px
  a
    border: 1px dotted transparent
    &:focus, &:hover
      border-color: #000
    &:focus + .children-items
      display: block

.children-items
  z-index: 1
  display: none
  position: absolute
  left: 98.5%
  &.is-open
    display: block
</style>
