<script setup>
import { RouterView } from "vue-router";
import { ref } from "vue";
import Navbar from "./components/Navbar.vue";

const productCart = ref([]);
const sentToCart = (product) => {
  productCart.value.push(product);
};

const category = ref([]);
const getProduct = (itemProduct) => {
  category.value = itemProduct;
};
</script>

<template>
  <div>
    <Navbar @filterByType="getProduct" />
    <RouterView @pushToCart="sentToCart" :productCart="productCart" :productFilter="category" />
  </div>
</template>

<style scoped>
*,
body {
  font-family: "Kanit", sans-serif;
}
</style>
