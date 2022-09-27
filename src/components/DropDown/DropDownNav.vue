<template>
  <div
    class="dropdown-nav"
    ref="containerRef"
    @keydown.down="onKeyDownHandler"
    @keydown.up="onKeyUpHandler"
  >
    <template v-if="focusItems && focusItems.length">
      <DropDownNavItem
        v-for="item in focusItems"
        :key="item.id"
        :separator="item.isSeparator"
        :focusIndex="!item.isSeparator ? item.focusIndex : undefined"
        v-model:current-focused="currentIndex"
        :name="item.name"
      />
    </template>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from "vue";

// import type DropDownNavProps from "./DropDownNavProps";
import DropDownNavItem from "./DropDownNavItem.vue";
import useKeyboardNav from "./usables/useKeyboardNav";

type DropDownNavProps = {
  items: {
    name?: string;
    id: string;
    isSeparator?: boolean;
    focusIndex?: number;
  }[];
};

const props = defineProps<DropDownNavProps>();
const containerRef = ref<HTMLElement | null>(null);
const emit = defineEmits(["first-element-selected"]);

let focusIndex = 0;
let separatorsCount = 0;
const focusItems = computed(() =>
  props.items.map((el) => {
    let newElement;
    if (!el.isSeparator) {
      newElement = { ...el, focusIndex };
      focusIndex++;
      return newElement;
    } else {
      separatorsCount++;
      return el;
    }
  })
);

const { isMinIndexSelected, currentIndex, onKeyDown, onKeyUp } = useKeyboardNav(
  focusItems.value.length - separatorsCount
);

function onKeyUpHandler() {
  onKeyUp();
  if (isMinIndexSelected.value) {
    emit("first-element-selected");
  }
}

function onKeyDownHandler() {
  onKeyDown();
}
</script>
