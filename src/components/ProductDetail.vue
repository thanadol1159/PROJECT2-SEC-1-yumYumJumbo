<script setup>
import { ref, onMounted, defineProps } from 'vue'
import { getData } from '../composable/getData.js'
import {RouterLink, useRoute} from 'vue-router' 
import Carousel from './Carousel.vue';

const queryProduct = ref({})
const route = useRoute()
const image = ref([])



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
        const result = await fetch(`http://localhost:5000/items/${1}`)
        if (result.status === 200) {
            const response = await result.json()
            // console.log(response);
            queryProduct.value = response
            image.value = queryProduct.value.images
        }
        console.log(image);
    }
    catch (err) {
        console.log(err);
    }
})


</script>
 
<template>
<div>
    
    <!-- <h1>Product {{ $route.params.id }} Detail</h1> -->
     <div class="product flex flex-row justify-center">
        <div class="image p-40">
            <div class="image" v-for="picture in image">
                <!-- <img :src="`${ picture }`" alt=""> -->
                <!-- <Carousel :itemList="picture"></Carousel> -->
            </div>
            
        </div>
        <div class="content">   
                <div class="flex flex-col space-y-5 text-5xl py-14 px-7 font-bold">
                <h1 class="flex justify-end">{{ queryProduct.name }}</h1>
                <h1 class="font-bold flex justify-end"></h1>
            </div>
            <div class="flex flex-col px-16">
                <h1 class="flex justify-start text-3xl font-bold">Description</h1>
                <p class="flex justify-end">{{ queryProduct.description }}</p>
            </div>
            <div class="flex">
                <div class="size pl-12 pt-44 space-x-6">
                <button class="bg-gray-200 text-3xl p-5 hover:bg-slate-400 rounded-lg">S</button>
                <button class="bg-gray-200 text-3xl p-5 hover:bg-slate-400 rounded-lg">M</button>
                <button class="bg-gray-200 text-3xl p-5 hover:bg-slate-400 rounded-lg">L</button>
                <button class="bg-gray-200 text-3xl p-5 hover:bg-slate-400 rounded-lg">XL</button>
            </div>
        </div>
            <div class="pt-16 pl-12">
                <button class="bg-red-200 rounded-lg p-3 hover:bg-red-600">
                <p>Add to cart</p>  
                </button>
            </div>
        </div>
    </div> 
    
  </div>
</template>
 
<style scoped>

</style>