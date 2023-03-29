<script setup>
import { ref, onMounted } from "vue";
import { useRoute, useRouter } from "vue-router";
import Carousel from "../components/Carousel.vue";
import TablerStarFilled from "../components/icons/TablerStarFilled.vue";
import Navbar from '../components/Navbar.vue';
import Cart from '../views/Cart.vue';

const queryProduct = ref({});
const image = ref([]);
const route = useRoute();
const useRoutes = useRouter();
const isSized = ref(false);



// onMounted(async() => {
//     const result = await fetch(`https://localhost:5000/items/${1}`)
//     const response = await result.json()
//     queryProduct.value = response
// })
// const props = defineProps({
//     items: Object
// })
onMounted(async () => {
  try {
    const result = await fetch(
      `http://localhost:5000/items/${route.params.id}` , {
        method: 'GET'
      }
    );
    if (result.status === 200) {
      const response = await result.json();
      // console.log(response)
      queryProduct.value = response;
      image.value = queryProduct.value.images;
    }
    else if (result.status === 404) {
      useRoutes.push({ name: "itemNotfound" });
    }
  } catch (err) {
    console.log(err);
  }
});

const addSize = (size) => {
  queryProduct.value.size = size;
  isSized.value = true;
  console.log(queryProduct.value)
};
</script>

<template>
  <div>
    <!-- <h1>Product {{ $route.params.id }} Detail</h1> -->
    <Navbar/>
    <div class="product flex flex-row justify-center">
      <div class="image p-40">
        <Carousel :itemList="queryProduct?.images"></Carousel>
      </div>
      <div class="content">
        <div class="flex flex-col space-y-5 text-5xl py-14 px-7 font-bold">
          <h1 class="flex justify-end leading-[70px]">
            {{ queryProduct.name }}
          </h1>
          <h1 class="font-bold flex justify-end"></h1>
        </div>
        <div class="flex flex-col px-16">
          <h1 class="flex justify-start text-3xl font-bold">Description:</h1>
          <p>{{ queryProduct.description }}</p>
          <div class="flex flex-row">
            <span class="pt-2 pr-2"> <TablerStarFilled/></span>{{ queryProduct?.rating?.rate }}
          </div>
          
          <p>ขายแล้ว: <span class="text-red-600">{{ queryProduct?.rating?.count }}</span> ตัว</p>
          <p>ราคา: {{ queryProduct.price }} บาท</p>
        </div>
        <div class="flex">
          <div class="size pl-12 pt-24 space-x-6">
            <button
              class="text-3xl p-5 rounded-lg"
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
              class="bg-gray-200 text-3xl p-5 hover:bg-slate-400 rounded-lg"
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
              class="bg-gray-200 text-3xl p-5 hover:bg-slate-400 rounded-lg"
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
              class="bg-gray-200 text-3xl p-5 hover:bg-slate-400 rounded-lg"
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
        </div>
        <div class="pt-16 pl-12">
          
          <button
            class="bg-gray-200 rounded-lg p-3"
            :class="
              isSized
                ? ['bg-red-400', 'hover:bg-red-600']
                : ['disabled', 'cursor-not-allowed']
            "     
          >
          <Cart :ordersFromMark="queryProduct" v-show="false"/>
            <p>Add to cart</p>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
