<script setup lang="ts">
import { ref } from "vue";

import DropDown from "../DropDown/DropDown.vue";
import DropDownNav from "../DropDown/DropDownNav.vue";

const buttonTriggerRef = ref();

const subMenuItems1 = [
  { id: "9", name: "Item 9" },
  { id: "10", name: "Item 10" },
  { id: "11", name: "Item 11" },
  { id: "12", name: "Item 12", isSeparator: true },
  { id: "13", name: "Item 13" },
  { id: "14", name: "Item 14" },
  { id: "15", name: "Item 15", isSeparator: true },
  { id: "16", name: "Item 16" },
];
const subMenuItems2 = [
  { id: "17", name: "Item 17" },
  { id: "18", name: "Item 18" },
  { id: "19", name: "Item 19" },
  { id: "20", name: "Item 20" },
  { id: "21", name: "Item 21" },
  { id: "22", name: "Item 22" },
  { id: "23", name: "Item 23", isSeparator: true },
  { id: "24", name: "Item 24" },
];
const subMenuItems3 = [{ id: "25", name: "Item 25" }];

const mainMenuItems = [
  { id: "1", name: "Pierwszy item" },
  { id: "2", name: "Drugi item", isSeparator: true },
  { id: "3", name: "Trzeci item", child: subMenuItems1 },
  { id: "4", name: "Czwarty item", child: subMenuItems2 },
  { id: "5", name: "Piąty item" },
  { id: "6", name: "Szósty item", child: subMenuItems3 },
  { id: "7", name: "Siódmy item", isSeparator: true },
  { id: "8", name: "Ósmy item" },
];
</script>

<template>
  <DropDown>
    <template v-slot:cta="{ toggleIsOpen, setFocusToFirstChild }">
      <button
        ref="buttonTriggerRef"
        @click="toggleIsOpen"
        @keydown.down="setFocusToFirstChild"
        class="btn btn-light"
      >
        Trigger Dropdown
      </button>
    </template>
    <template #content>
      <DropDownNav
        :items="mainMenuItems"
        @first-element-selected="buttonTriggerRef.focus()"
      />
    </template>
  </DropDown>
</template>
