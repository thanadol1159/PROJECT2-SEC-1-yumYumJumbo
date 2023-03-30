<script setup>
import { ref, onMounted } from "vue";

import ContentSection from "../components/ContentSection.vue";
import Carousel from "../components/Carousel.vue";
import ReccommandItem from "../components/ReccommandItem.vue";
import FooterContact from "../components/FooterContact.vue";

const items = ref([]);
onMounted(async () => {
  try {
    const result = await fetch(`http://localhost:5000/items`);
    if (result.status === 200) {
      const response = await result.json();
      items.value = response;
      // console.log(response);
      // console.log(items.value)
    }
  } catch (err) {
    console.log(err);
  }
});

const randomPreview = () => { 
  let image , images = [];
  for (const list of items.value) {
    image = list.images[0]
    images.push(image)
  }
  const fLength = Math.floor(Math.random() * images.length);
  const lLength = fLength + 3 + Math.ceil(Math.random() * 4);
  return images.slice(fLength, lLength);
};

</script>

<template>
  <div>
    <ContentSection>
      <Carousel :item-list="randomPreview()"/>
    </ContentSection>

    <ContentSection>
      <ReccommandItem />
    </ContentSection>

    <FooterContact />
  </div>
</template>
