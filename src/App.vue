<script setup>

import Category from './components/Category.vue';
import PopuparItem from './components/PopularItem.vue'; 
import Buying from './components/Buying.vue';
import Cart from './components/Cart.vue';
import PaymentMethod from './components/PaymentMethod.vue';
import Carousel from './components/Carousel.vue';
import Navbar from './components/Navbar.vue';
import ContentSection from './components/ContentSection.vue';
import { getData } from './composable/getData';

</script>

<template>
<div>
    <div>
        <Navbar/>
        <ContentSection>
            <Carousel >

            </Carousel>
        </ContentSection>
        <!-- <Category />
        <PopuparItem /> -->
        <!-- <Buying /> -->
        <!-- <Cart />
        <PaymentMethod /> -->
        
    </div>

</div>
</template>

<style scoped>
*{
    font-family: 'Kanit', 'sans-serif';
    font-size: 36px;
}


</style>
