<script setup>
import { ref, onMounted, defineProps } from 'vue'
import { getData } from '../composable/getData.js'
import {RouterLink, useRoute} from 'vue-router' 
import Carousel from './Carousel.vue';
import Navbar from './Navbar.vue';
import TablerStarFilled from '../../public/TablerStarFilled.vue'

const queryProduct = ref({})
const image = ref([])
const route = useRoute()
const isSized = ref(false)




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
        const result = await fetch(`http://localhost:5000/items/${route.params.id}`)
        if (result.status === 200) {
            const response = await result.json()
            console.log(response)
            queryProduct.value = response
            image.value = queryProduct.value.images
        }
    }
    catch (err) {
        console.log(err);
    }
})

const addSize =(size) =>{
    queryProduct.value.size = size
    isSized.value = true
}



</script>
 
<template>
<div>
    <Navbar/>
    <!-- <h1>Product {{ $route.params.id }} Detail</h1> -->
     <div class="product flex flex-row justify-center">
        <div class="image p-40">
            <div class="image" v-for="picture in image">
                <img :src="`${ picture }`" alt="">
                <!-- <Carousel :itemList="picture" :full="true"></Carousel> -->
            </div>
        </div>
        <div class="content">   
                <div class="flex flex-col space-y-5 text-5xl py-14 px-7 font-bold">
                <h1 class="flex justify-end leading-[70px]">{{ queryProduct.name }}</h1>
                <h1 class="font-bold flex justify-end"></h1>
            </div>  
            <div class="flex flex-col px-16">
                <h1 class="flex justify-start text-3xl font-bold">Description {{ id }}</h1>
                <p class="flex justify-end">{{ queryProduct.description }}</p>
                <TablerStarFilled/>
                <p>{{ queryProduct?.rating?.rate }}</p>
            </div>
            <div class="flex">
                <div class="size pl-12 pt-24 space-x-6">
                <button class=" text-3xl p-5 rounded-lg" :class="isSized && queryProduct.size === 'S' ? 'bg-slate-400' : ['bg-slate-200','hover:bg-slate-400']" @click="addSize('S')">S</button>
                <button class="bg-gray-200 text-3xl p-5 hover:bg-slate-400 rounded-lg" :class="isSized && queryProduct.size === 'M' ? 'bg-slate-400' : ['bg-slate-200','hover:bg-slate-400']" @click="addSize('M')">M</button>
                <button class="bg-gray-200 text-3xl p-5 hover:bg-slate-400 rounded-lg" :class="isSized && queryProduct.size === 'L' ? 'bg-slate-400' : ['bg-slate-200','hover:bg-slate-400']" @click="addSize('L')">L</button>
                <button class="bg-gray-200 text-3xl p-5 hover:bg-slate-400 rounded-lg" :class="isSized && queryProduct.size === 'XL' ? 'bg-slate-400' : ['bg-slate-200','hover:bg-slate-400']" @click="addSize('XL')">XL</button>
            </div>
        </div>
            <div class="pt-16 pl-12">
                <button class="bg-gray-200 rounded-lg p-3" :class="isSized ? ['bg-red-400','hover:bg-red-600'] : ['disabled','cursor-not-allowed']">
                <p>Add to cart</p>  
                </button>
            </div>
        </div>
    </div> 
    
  </div>
</template>
 
<style scoped>

</style>