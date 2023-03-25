<script setup>
import { getData } from '../composable/getData';
import ContentSection from '../components/ContentSection.vue';
import Carousel from '../components/Carousel.vue';

const items = getData();

const randomPreview = () => {
  const fLength = Math.floor(Math.random() * items.length);
  const lLength = fLength + 2 + Math.ceil(Math.random() * 5);
  return items.slice(fLength, lLength);
};
</script>
 
<template>
<div>
    <ContentSection>
        <Carousel :item-list="randomPreview()" />
    </ContentSection>

    <ContentSection class="w-full h-60 bg-blue-700 ">
     
    </ContentSection>

    <ContentSection class="w-full h-60 bg-orange-500">
      
    </ContentSection>
</div>
</template>
 
<style scoped>

</style>