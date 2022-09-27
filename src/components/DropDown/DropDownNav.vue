<template>
  <div
    class="dropdown-nav"
    ref="containerRef"
    @keyup.down="onKeyDown"
    @keyup.up="onKeyUpFunction"
  >
    <template v-if="items && items.length">
      <DropDownNavItem
        v-for="(item, index) in items"
        :key="item.id"
        :separator="item.isSeparator"
        :index="item.isSeparator ? index + 1 : index"
        v-model:current-focused="currentIndex"
        :name="item.name"
      />
    </template>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";

// import type DropDownNavProps from "./DropDownNavProps";
import DropDownNavItem from "./DropDownNavItem.vue";
import useKeyboardNav from "./usables/useKeyboardNav";

type DropDownNavProps = {
  items: {
    name?: string;
    id: string;
    isSeparator?: boolean;
  }[];
};

const props = defineProps<DropDownNavProps>();
const containerRef = ref<HTMLElement | null>(null);
const emit = defineEmits(["first-element-selected"]);
const { isMinIndexSelected, currentIndex, onKeyDown, onKeyUp } = useKeyboardNav(
  props.items.length
);

function onKeyUpFunction() {
  onKeyUp();
  if (isMinIndexSelected.value) {
    emit("first-element-selected");
  }
}
</script>
