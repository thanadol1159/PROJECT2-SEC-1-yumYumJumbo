<script setup>
import { ref, computed } from 'vue'
import products from '../../data/product.json'
const size = products.size



</script>
 
<template>
<div>
    <div class="product flex flex-row justify-center">
        <div class="image">
                
        </div>
        
        <div class="content">
            <div class="flex flex-col space-y-10 text-5xl py-14 px-7 font-bold">
                <h1 class="flex justify-end">{{ product }}</h1>
                <h1 class="font-bold flex justify-end">660$</h1>
            </div>
            <div class="flex flex-col px-16">
                <h1 class="flex justify-start text-3xl font-bold">Description</h1>
                <p class="flex justify-center">สวัสดีจ้านี่คือdescriptionน้าทำไมมันไม่ขยับว้าขยับหน่อยเด้โห้ขยับหน่อยพี่เห้ขยับหน่อยๆๆๆ</p>
            </div>
            <div class="size pl-24 pt-60">
                <span class="bg-gray-200 text-3xl p-7 hover:bg-slate-400 rounded-lg m-2" v-for="sizes in size" :key="size.sizeid">
                {{ sizes.sizename }}
                </span>
            </div>
            <div class="pt-16 pl-24">
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