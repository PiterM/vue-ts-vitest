<template>
  <div
    class="dropdown-nav"
    ref="containerRef"
    @keydown.down.stop="onKeyDownHandler"
    @keydown.up.stop="onKeyUpHandler"
    @keydown.left.stop="onKeyLeftHandler"
  >
    <template v-if="focusItems?.length">
      <DropDownNavItem
        v-for="item in focusItems"
        :name="item.name"
        :key="item.id"
        :separator="item.isSeparator"
        :focusIndex="!item.isSeparator ? item.focusIndex : undefined"
        :children="item.child"
        :isNestedChild="isNested"
        v-model:current-focused="currentIndex"
        @close-sub-dropdown="onCloseSubDropdown"
      />
    </template>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from "vue";

import DropDownNavItem from "./DropDownNavItem.vue";
import useKeyboardNav from "./usables/useKeyboardNav";

type DropDownNavPropsItem = {
  name?: string;
  id: string;
  index: number;
  focusIndex?: number;
  isSeparator?: boolean;
  children?: DropDownNavPropsItem[];
};

type DropDownNavProps = {
  items: DropDownNavPropsItem[];
  isNested?: Boolean;
};

const props = defineProps<DropDownNavProps>();

const containerRef = ref<HTMLElement | null>(null);
const emit = defineEmits(["first-element-selected"]);

const separatorsCount = ref(0);

let focusIndex = 0;
const focusItems = computed(() =>
  props.items.map((el, index) => {
    if (!el.isSeparator) {
      return { ...el, index, focusIndex: focusIndex++ };
    } else {
      separatorsCount.value++;
      return { ...el, index };
    }
  })
);

const focusItemsLength = computed(
  () => focusItems.value.length - separatorsCount.value
);
const { isMinIndexSelected, currentIndex, onKeyDown, onKeyUp } = useKeyboardNav(
  focusItemsLength.value
);

function onKeyUpHandler() {
  onKeyUp();
  if (isMinIndexSelected.value && !props.isNested) {
    emit("first-element-selected");
  }
}

function onKeyDownHandler() {
  onKeyDown();
}

function onKeyLeftHandler() {
  if (props.isNested) {
    emit("first-element-selected");
  }
}

function onCloseSubDropdown(lostFocusIndex: number) {
  console.log("onCloseSubDropdown", lostFocusIndex);
}
</script>
