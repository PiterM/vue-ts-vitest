<script setup lang="ts">
import { ref } from "vue";

import DropDown from "../DropDown/DropDown.vue";
import DropDownNav from "../DropDown/DropDownNav.vue";

const buttonTriggerRef = ref();

const items = [
  { id: "1", name: "Pierwszy item" },
  { id: "2", name: "Drugi item", isSeparator: true },
  { id: "3", name: "Trzeci item" },
  { id: "4", name: "Czwarty item" },
  { id: "5", name: "Piąty item" },
  { id: "6", name: "Szósty item" },
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
        @keyup.down="setFocusToFirstChild"
      >
        Trigger Dropdown
      </button>
    </template>
    <template #content>
      <DropDownNav
        :items="items"
        @first-element-selected="buttonTriggerRef.focus()"
      />
    </template>
  </DropDown>
</template>
