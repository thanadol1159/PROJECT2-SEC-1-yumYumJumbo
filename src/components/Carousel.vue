<script setup>
import { ref, defineProps, computed } from "vue";

const props = defineProps({
  itemList: {
    type: Array,
    required: true,
  },
  full: {
    type: Boolean,
    required: false,
    default: true,
  },
});

const currentIndex = ref(0);
const currentItem = computed(() => props.itemList[currentIndex.value]);

const nextIndex = (next = true) => {
  const length = props.itemList.length;

  if (next) {
    if (currentIndex.value === length - 1) {
      currentIndex.value = 0;
    } else currentIndex.value++;
  } else {
    if (currentIndex.value === 0) {
      currentIndex.value = length - 1;
    } else currentIndex.value--;
  }
};

const clickPageHandler = (e) => {
  currentIndex.value = e.currentTarget.id;
};
</script>

<template>
  <div
    class="h-80 w-[48rem] flex justify-between border rounded-2xl bg-blue-400"
  >
    <div class="h-full w-32 flex justify-center items-center z-10">
      <button @click="nextIndex(false)">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          width="36"
          height="36"
        >
          <path fill="none" d="M0 0h24v24H0z" />
          <path
            d="M10.828 12l4.95 4.95-1.414 1.414L8 12l6.364-6.364 1.414 1.414z"
            fill="rgba(255,255,255,1)"
          />
        </svg>
      </button>
    </div>
    <div class="absolute w-[48rem] h-80 z-0">
    <transition-group 
      name="slide"
      mode="out-in"
      enter-class="slide-in"
      leave-class="slide-out"
      enter-active-class="animated slide-in-active"
      leave-active-class="animated slide-out-active"
    >
      <div
        class="absolute w-[48rem] h-80 border rounded-2xl bg-contain bg-no-repeat bg-center tra"
        :style="{ backgroundImage: 'url(' + currentItem.images[0] + ')' }"
      ></div>
    </transition-group>
      <div class="absolute h-full flex flex-col justify-end p-3.5 w-full z-10">
        <div class="flex flex-row gap-5 justify-center w-full">
          <button
            v-for="(item, index) in itemList"
            :key="index"
            :id="index"
            @click="clickPageHandler"
            class="h-3.5 w-3.5 bg-white rounded-full"
          ></button>
        </div>
      </div>
    </div>

    <div class="h-full w-32 flex justify-center items-center z-10">
      <button @click="nextIndex(true)">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          width="36"
          height="36"
        >
          <path fill="none" d="M0 0h24v24H0z" />
          <path
            d="M13.172 12l-4.95-4.95 1.414-1.414L16 12l-6.364 6.364-1.414-1.414z"
            fill="rgba(255,255,255,1)"
          />
        </svg>
      </button>
    </div>
  </div>
</template>

<style scoped></style>
