<script setup>
import { RouterView } from "vue-router";
import { ref } from 'vue'
import Navbar from "./components/Navbar.vue";

const productCart = ref([])
const pushToCart = (product) =>{
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
      <RouterView :productCart="productCart" @pushToCart="pushToCart" :productFilter="category"/>
    </div>
  </div>
</template>

<style scoped>
* {
  font-family: "Kanit", sans-serif;
  margin: 0;
  padding: 0;
}
</style>
