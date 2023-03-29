<script setup>
import { RouterView } from "vue-router";
import { ref } from 'vue'
import Navbar from "./components/Navbar.vue";
import Category from "./components/Category.vue";
import PopuparItem from "./components/PopularItem.vue";
// import Buying from "./components/Buying.vue";
import PaymentMethod from "./components/PaymentMethod.vue";


const productCart = ref([])
const pushToCart = (product) =>{
  productCart.value.push(product)
}
</script>

<template>
  <div>
    <div>
      <!-- <Navbar /> -->
      <RouterView :productCart="productCart" @pushToCart="pushToCart" />
      <!-- <ContentSection>
        <Carousel :item-list="randomPreview()" :full="true"> </Carousel>
      </ContentSection>
      
      <ContentSection >
        <Category />
      </ContentSection>
      <ContentSection>
        <PopuparItem />
      </ContentSection> -->

      <!-- <Buying />
      <Cart />
        <PaymentMethod /> -->
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
