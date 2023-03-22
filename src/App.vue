<script setup>
import Category from "./components/Category.vue";
import PopuparItem from "./components/PopularItem.vue";
// import Buying from "./components/Buying.vue";
import Cart from "./components/Cart.vue";
import PaymentMethod from "./components/PaymentMethod.vue";
import Carousel from "./components/Carousel.vue";
import Navbar from "./components/Navbar.vue";
import ContentSection from "./components/ContentSection.vue";
import { getData } from "./composable/getData.js";
const items = getData();

import Category from './components/Category.vue';
import PopuparItem from './components/PopularItem.vue'; 
import Buying from './components/Buying.vue';
import Cart from './components/Cart.vue';
import PaymentMethod from './components/PaymentMethod.vue';
import ProductDetail from './components/ProductDetail.vue';
import { getData } from './composable/getData';
import {RouterView} from 'vue-router'




</script>

<template>
<div>
    <div>   
        <!-- <Category />
        <PopuparItem /> -->
        <!-- <Buying /> -->
        <!-- <Cart />
        <PaymentMethod /> -->
        <ProductDetail/>
        <!-- <router-view></router-view> -->

    </div>
  </div>
</template>

<style scoped>
* {
  font-family: "Kanit", sans-serif;
  font-size: 36px;
  margin: 0;
  padding: 0;
}
</style>
