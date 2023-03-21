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

const randomPreview = () => {
  const fLength = Math.floor(Math.random() * items.length);
  const lLength = fLength + 2 + Math.ceil(Math.random() * 4);
  return items.slice(fLength, lLength);
};
</script>

<template>
  <div>
    <div>
      <Navbar />
      <ContentSection>
        <Carousel :item-list="randomPreview()" :full="true"> </Carousel>
      </ContentSection>

      <ContentSection >
        <Category />
      </ContentSection>
      <ContentSection>
        <PopuparItem />
      </ContentSection>

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
