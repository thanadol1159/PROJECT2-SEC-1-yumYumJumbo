<script setup>
import { RouterView } from "vue-router";
import Navbar from "./components/Navbar.vue";
import Category from "./components/Category.vue";
import PopuparItem from "./components/PopularItem.vue";
// import Buying from "./components/Buying.vue";
import PaymentMethod from "./components/PaymentMethod.vue";
</script>

<template>
  <div>
    <div>
      <!-- <Navbar /> -->
      <RouterView/>
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
