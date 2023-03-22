<script>
import { ref, computed, onMounted } from 'vue'
import { getData } from '../composable/getData.js'
import {RouterLink, useRoute} from 'vue-router' 


const product = ref(getData())




const props = defineProps({
    
})

</script>
 
<template>
<div>
    <div class="product flex flex-row justify-center">
        <div class="image p-40">
                <img src="../../public/6efbef3de02dd40d88c28a30be279b4c.png" alt="">
        </div>
        <div class="content">   
                <div class="flex flex-col space-y-5 text-5xl py-14 px-7 font-bold">
                <h1 class="flex justify-end"></h1>
                <h1 class="font-bold flex justify-end"></h1>
            </div>
            <div class="flex flex-col px-16">
                <h1 class="flex justify-start text-3xl font-bold">Description</h1>
                <p class="flex justify-end">สวัสดีจ้านี่คือdescriptionน้าทำไมมันไม่ขยับว้า</p>
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