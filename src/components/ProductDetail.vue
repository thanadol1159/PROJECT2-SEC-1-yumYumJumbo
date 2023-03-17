<script>
import { ref, computed, onMounted } from 'vue'
import { getData } from '../composable/getData.js'


const product = ref(getData())

const productdata = ref(0)

export default{
    data(){
        return {
            products: null
        }
    },
    created(){
        const productId = this.$route.params.id
        this.products = product.find((products) => products.id === productId)
    }
}

</script>
 
<template>
<div>
    <div class="product flex flex-row justify-center">
        <div class="image p-40">
                <img src="../../public/6efbef3de02dd40d88c28a30be279b4c.png" alt="">
        </div>
        <div class="content">
            <div class="flex flex-col space-y-5 text-5xl py-14 px-7 font-bold">
                <h1 class="flex justify-end">{{ products.name }}</h1>
                <h1 class="font-bold flex justify-end">660$</h1>
            </div>
            <div class="flex flex-col px-16">
                <h1 class="flex justify-start text-3xl font-bold">Description</h1>
                <p class="flex justify-end">สวัสดีจ้านี่คือdescriptionน้าทำไมมันไม่ขยับว้า</p>
            </div>
            <div class="flex">
                <div class="size pl-12 pt-60" v-for="sizes in product.size">
                <span class="bg-gray-200 text-3xl p-5 hover:bg-slate-400 rounded-lg" >
                {{ sizes.sizename }}
                </span>
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