<template>
  <div class="dropdown" ref="buttonRef">
    <slot name="button"></slot>
    <div class="list" :style="listRectPosition">
      <slot name="list"></slot>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, reactive } from "vue";

const buttonRef = ref(null);
let listRectPosition = reactive({
  left: "",
  top: "",
});

onMounted(() => {
  const buttonElementRef = (buttonRef?.value as any).children[0];
  const { height, width } = buttonElementRef.getBoundingClientRect();
  console.log({ height, width });

  listRectPosition.left = `${Math.floor(width)}px`;
  listRectPosition.top = `${Math.floor(height)}px`;
});
</script>

<style scoped lang="sass">
.list
  position: absolute
</style>
