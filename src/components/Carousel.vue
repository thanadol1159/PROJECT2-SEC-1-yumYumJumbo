<script setup>
import { ref, defineProps, computed } from "vue";

const props = defineProps({
  itemList: {
    type: Array,
    default: [],
  },
  full: {
    type: Boolean,
    required: false,
    default: true,
  },
});

const currentIndex = ref(0);
const currentItem = computed(() => {

    return props.itemList[currentIndex.value];

});
const nextIndex = (next) => {

  const length = props.itemList.length;
  if (next ==="next") {
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
  currentIndex.value = Number(e.currentTarget.id);
};
</script>

<template>
  <div
    class="h-80 w-[36rem] flex justify-between shadow-lg rounded-2xl bg-white"
  >
    <!-- button back -->
    <div class="h-full w-32 flex justify-center items-center z-10">
      <button @click="nextIndex('back')">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          width="36"
          height="36"
        >
          <path fill="none" d="M0 0h24v24H0z" />
          <path
            d="M10.828 12l4.95 4.95-1.414 1.414L8 12l6.364-6.364 1.414 1.414z"
          />
        </svg>
      </button>
    </div>

    <div class="absolute w-[36rem] h-80 z-0">
      <!-- images -->
      <div
        class="absolute w-[36rem] h-80 border rounded-2xl object-cover flex justify-center"
        
      >
      <!-- :style="{ backgroundImage: 'url(' + currentItem + ')' }" -->
        <img :src="currentItem" width="318" height="318" />
      </div>

      <!-- paginations -->
      <div class="absolute h-full flex flex-col justify-end p-3.5 w-full z-10">
        <div class="dots flex flex-row gap-5 justify-center w-full">
          <button
            v-for="(item, index) in itemList"
            :key="index"
            :id="index"
            @click="clickPageHandler"
            class="h-3.5 w-3.5 rounded-full border"
            :class="
              index === currentIndex
                ? ['bg-white', 'border-[#9263B1]']
                : 'bg-[#9263B1]'
            "
          ></button>
        </div>
      </div>
    </div>

    <!-- button next -->
    <div class="h-full w-32 flex justify-center items-center z-10">
      <button @click="nextIndex('next')">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          width="36"
          height="36"
        >
          <path fill="none" d="M0 0h24v24H0z" />
          <path
            d="M13.172 12l-4.95-4.95 1.414-1.414L16 12l-6.364 6.364-1.414-1.414z"
          />
        </svg>
      </button>
    </div>
  </div>
</template>

<style scoped>
.slides {
  font-size: 40px;
  display: flex;
  height: 100%;
  align-items: center;
  justify-content: center;
  font-weight: bold;
}

.animated {
  transition: all 400ms;
  position: absolute;
  transform: translate(-50%, -50%);
}

.slide-in {
  opacity: 0;
  transform: translate(-40%, -50%);
}

.slide-in-active {
  transition-delay: 150ms;
}

.slide-out {
  opacity: 1;
}

.slide-out-active {
  opacity: 0;
  transform: translate(-60%, -50%);
}
</style>
