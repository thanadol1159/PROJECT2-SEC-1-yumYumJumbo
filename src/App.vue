<script setup>
import { RouterView } from "vue-router";
import { ref } from 'vue'
import Navbar from "./components/Navbar.vue";

const productCart = ref([])
const sentToCart = (product) =>{
  productCart.value.push(product)
}

const category = ref([])

const getProduct = (e) => {
  category.value = e
}
</script>

<template>
  <div>
    <div>
      <Navbar @filterByType="getProduct" />
      <RouterView :productCart="productCart" @pushToCart="sentToCart" :productFilter="category"/>
    </div>
  </div>
</template>

<style scoped>

</style>
