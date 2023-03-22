<script setup>

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
        
        <router-view></router-view>

    </div>

</div>
</template>

<style scoped>
*{
    font-family: 'Kanit', 'sans-serif';
    font-size: 36px;
}


</style>
