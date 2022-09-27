import { ref, computed } from "vue";

export default function useKeyboardNav(itemsLength: number) {
  const currentIndex = ref(0);
  const isMinIndexSelected = computed(() => currentIndex.value === 0);
  const isMaxIndexSelected = computed(
    () => currentIndex.value === itemsLength - 1
  );

  function onKeyUp() {
    currentIndex.value = isMinIndexSelected.value ? 0 : currentIndex.value - 1;
  }

  function onKeyDown() {
    currentIndex.value = isMaxIndexSelected.value
      ? currentIndex.value
      : currentIndex.value + 1;
  }

  return {
    isMinIndexSelected,
    isMaxIndexSelected,
    currentIndex,
    onKeyUp,
    onKeyDown,
  };
}
