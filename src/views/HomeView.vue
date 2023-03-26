<script setup>
import { getData } from "../composable/getData";
import ContentSection from "../components/ContentSection.vue";
import Carousel from "../components/Carousel.vue";
import FooterContact from "../components/FooterContact.vue";

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

    <ContentSection>
      <div class="w-full h-60 bg-blue-400">

      </div>
    </ContentSection>

    <ContentSection>
      <div class="w-full h-60 bg-orange-400">
        
      </div>
    </ContentSection>
            
    <FooterContact />
  </div>
</template>
