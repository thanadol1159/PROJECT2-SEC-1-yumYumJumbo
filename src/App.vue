<script setup>
import Navbar from "./components/Navbar.vue";
import ContentSection from "./components/ContentSection.vue";
import Carousel from "./components/Carousel.vue";
import { getData } from "./composable/getData.js"

const items = getData()
// const arr = items.slice(3,7)


// const fLength = Math.floor(Math.random() * items.length)
// const lLength = Math.floor(Math.random() * items.length)
// console.log(fLength)
// console.log(lLength)
console.log(items)
const randomPreview = () => {
    const fLength = Math.floor(Math.random() * items.length)
    const lLength = fLength + 3 + Math.ceil(Math.random() * 6)

    if (lLength > items.length) {
      fLength - 7
    }
    console.log(fLength)
    console.log(lLength)
    return items.slice(fLength, lLength)
}
</script>
<template>
  <!-- <Navbar />
  <ContentSection>
    <Carousel :item-list="randomPreview()" :full="true"> </Carousel>
  </ContentSection>

  <ContentSection>
    <div class="w-full h-60 bg-blue-400"></div>
  </ContentSection>

  <ContentSection>
    <div class="w-full h-60 bg-red-400"></div>
  </ContentSection> -->
</template>

<style scoped>
* {
  font-family: "Kanit", sans-serif;
  font-size: 36px;
  margin: 0;
  padding: 0;
}
</style>
