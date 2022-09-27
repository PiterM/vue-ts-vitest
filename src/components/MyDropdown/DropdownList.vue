<script setup lang="ts">
import { ref } from "vue";
const noModel = ref(false);
</script>

<template>
  <div class="q-pa-md">
    <q-list bordered>
      <q-item clickable v-ripple>
        <q-item-section>Icon as avatar</q-item-section>
        <q-item-section avatar>
          <q-checkbox v-model="noModel" />
        </q-item-section>
      </q-item>

      <q-separator />

      <q-item clickable v-ripple>
        <q-item-section>Avatar-type icon</q-item-section>
        <q-item-section avatar>
          <q-checkbox v-model="noModel" />
        </q-item-section>
      </q-item>

      <q-item clickable v-ripple>
        <q-item-section>Rounded icon</q-item-section>
        <q-item-section avatar>
          <q-checkbox v-model="noModel" />
        </q-item-section>
      </q-item>

      <q-item clickable v-ripple>
        <q-item-section>Letter avatar-type</q-item-section>
        <q-item-section avatar>
          <q-checkbox v-model="noModel" />
        </q-item-section>
      </q-item>

      <q-separator />

      <q-item clickable v-ripple>
        <q-item-section>List item</q-item-section>
        <q-item-section avatar>
          <q-checkbox v-model="noModel" />
        </q-item-section>
      </q-item>
    </q-list>
  </div>
</template>

<style scoped>
.q-pa-md {
  width: 250px;
  padding: 0;
}
.q-list {
  background-color: #fff;
}
.q-item {
  min-height: unset;
  padding: 1px 4px;
}
</style>
