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
  const { left, top, height, width } =
    buttonRef.value.children[0].getBoundingClientRect();
  console.log({ height, width });

  listRectPosition.left = `${Math.floor(width)}px`;
  listRectPosition.top = `${Math.floor(height)}px`;
});
</script>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({});
</script>

<style scoped lang="sass">
.list
  position: absolute
</style>
