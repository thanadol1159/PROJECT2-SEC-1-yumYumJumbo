<script setup>
import { getData } from "../composable/getData";
import ContentSection from "../components/ContentSection.vue";
import Carousel from "../components/Carousel.vue";
import ReccommandItem from "../components/ReccommandItem.vue";
import FooterContact from "../components/FooterContact.vue";
import Navbar from "../components/Navbar.vue";

const items = getData();

const randomPreview = () => {
  const fLength = Math.floor(Math.random() * items.length);
  const lLength = fLength + 2 + Math.ceil(Math.random() * 5);
  return items.slice(fLength, lLength);
};
const addProduct = (product) => {
  console.log(product);
};
</script>

<template>
  <div>
    <Navbar @filterByType="addProduct" />
    <ContentSection>
      <Carousel :item-list="randomPreview()" :use-length="true" />
    </ContentSection>

    <ContentSection>
      <ReccommandItem />
    </ContentSection>

    <ContentSection>
      <FooterContact />
    </ContentSection>
  </div>
</template>
