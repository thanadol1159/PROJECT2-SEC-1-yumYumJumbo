<script setup>
import { getData } from "../composable/getData";
import ContentSection from "../components/ContentSection.vue";
import Carousel from "../components/Carousel.vue";
import ReccommandItem from "../components/ReccommandItem.vue";
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
      <Carousel :item-list="randomPreview()"/>
    </ContentSection>

    <ContentSection>
      <ReccommandItem/>
    </ContentSection>

    <ContentSection>
      <FooterContact/>
    </ContentSection>
  </div>
</template>
