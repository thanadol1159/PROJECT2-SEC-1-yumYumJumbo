<script setup>
import { ref, watchEffect } from "vue";
import { useRoute, useRouter } from "vue-router";
import Carousel from "../components/Carousel.vue";
import TablerStarFilled from "../components/icons/TablerStarFilled.vue";

const queryProduct = ref({});
const image = ref([]);
const route = useRoute();
const useRoutes = useRouter();
const isSized = ref(false);
defineEmits(['pushToCart'])

// onMounted(async() => {
//     const result = await fetch(`https://localhost:5000/items/${1}`)
//     const response = await result.json()
//     queryProduct.value = response
// })
// const props = defineProps({
//     items: Object
// })
watchEffect(async () => {
  try {
    const result = await fetch(
      `http://localhost:5000/items/${route.params.id}`,
      {
        method: "GET",
      }
    );
    if (result.status === 200) {
      const response = await result.json();
      // console.log(response)
      queryProduct.value = response;
      image.value = queryProduct.value.images;
    } else if (result.status === 404) {
      useRoutes.push({ name: "itemNotfound" });
    }
  } catch (err) {
    console.log(err);
  }
});

const addSize = (size) => {
  queryProduct.value.size = size;
  isSized.value = true;
  // console.log(queryProduct.value)
};
</script>

<template>
  <div class="w-full h-full">
    <!-- <h1>Product {{ $route.params.id }} Detail</h1> -->
    <div class="product flex justify-center items-center mt-32">
      <div class="flex image px-28">
        <Carousel :itemList="queryProduct?.images"></Carousel>
      </div>
      <div class="flex flex-col gap-y-8 leading-loose">
        <h1 class="text-4xl">
          {{ queryProduct.name }}
        </h1>
        <div class="flex flex-col gap-y-3">
          <h1 class="text-2xl">Description:</h1>
          <p class="text-xl">{{ queryProduct.description }}</p>
          <div class="flex flex-row w-full text-2xl"> 
            <span>
              {{ queryProduct?.rating?.rate }} 
            </span>
            <TablerStarFilled class="mt-1 mx-2"/>
          </div>
          <p class="text-2xl">
            ขายแล้ว:
            <span class="text-red-600">{{ queryProduct?.rating?.count }}</span>
            ตัว
          </p>
          <p class="text-2xl"> ราคา: {{ queryProduct.price }} บาท</p>
        </div>
        <div class="flex justify-evenly text-3xl">
            <button
              class="p-7 rounded-lg"
              :class="
                isSized && queryProduct.size === 'S'
                  ? 'bg-slate-400'
                  : ['bg-slate-200', 'hover:bg-slate-400']
              "
              @click="addSize('S')"
            >
              S
            </button>
            <button
              class="p-7 rounded-lg"
              :class="
                isSized && queryProduct.size === 'M'
                  ? 'bg-slate-400'
                  : ['bg-slate-200', 'hover:bg-slate-400']
              "
              @click="addSize('M')"
            >
              M
            </button>
            <button
              class="p-8 rounded-lg"
              :class="
                isSized && queryProduct.size === 'L'
                  ? 'bg-slate-400'
                  : ['bg-slate-200', 'hover:bg-slate-400']
              "
              @click="addSize('L')"
            >
              L
            </button>
            <button
              class="p-6 rounded-lg"
              :class="
                isSized && queryProduct.size === 'XL'
                  ? 'bg-slate-400'
                  : ['bg-slate-200', 'hover:bg-slate-400']
              "
              @click="addSize('XL')"
            >
              XL
            </button>
        </div>
        <div class="text-2xl">
          <button
            @click="$emit('pushToCart', queryProduct)"
            class="p-4 rounded-xl"
            :class="
              isSized
                ? ['bg-red-400', 'hover:bg-red-600']
                : ['disabled', 'cursor-not-allowed']
            "
          >
            <!-- <Cart :ordersFromMark="queryProduct" v-show="false"/> -->
            <p>Add to cart</p>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
