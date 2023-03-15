<script setup>
import Navbar from "./components/Navbar.vue";
import ContentSection from "./components/ContentSection.vue";
import Carousel from "./components/Carousel.vue";
import { getData } from "./composable/getData.js"

const items = getData()
const arr = items.slice(6,11)


</script>
<template>
  <Navbar />
  <ContentSection>
    <Carousel :item-list="arr" :full="true"> </Carousel>
  </ContentSection>

  <ContentSection>
    <div class="w-full h-60 bg-blue-400"></div>
  </ContentSection>

  <ContentSection>
    <div class="w-full h-60 bg-red-400"></div>
  </ContentSection>
</template>

<style scoped>
* {
  font-family: "Kanit", sans-serif;
  font-size: 36px;
  margin: 0;
  padding: 0;
}
</style>
