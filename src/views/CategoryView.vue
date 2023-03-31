<script setup>
import { ref, onMounted, watch } from "vue";
import ContentSection from "../components/ContentSection.vue";
import PopularItem from "../components/PopularItem.vue";
import TopSaleItem from "../components/TopSaleItem.vue";
import ProductAll from "../components/ProductAll.vue";
import Carousel from "../components/Carousel.vue";

const props = defineProps({
  productFilter: {
    type: Array,
    requied: true,
  },
});

const items = ref([]);
const itemIMG = ref([]);
const images = ref([])
onMounted(() => {
  items.value = props.productFilter;
  if (!props.productFilter) {
    itemIMG.value = [];
    items.value = props.productFilter;
  } 
  for (const item of items.value) {
    itemIMG.value.push(item.images[0]);
  }
  images.value = itemIMG.value.slice(0,5)
});

watch(
  () => props.productFilter,
  () => {
    itemIMG.value = [];
    items.value = props.productFilter;
    for (const item of items.value) {
      itemIMG.value.push(item.images[0]);
    }
    images.value = itemIMG.value.slice(0,5)
  }
);
</script>

<template>
  <div>

    <ContentSection>
      <Carousel :itemList="images" />
    </ContentSection>
    <!-- popularitem component -->
    <ContentSection>
      <PopularItem :typeShirt="items" />
    </ContentSection>

    <!-- Topsale -->
    <ContentSection>
      <TopSaleItem :typeShirt="items" />
    </ContentSection>

    <!-- Product All -->
    <ContentSection>
      <ProductAll :typeShirt="items" />
    </ContentSection>
  </div>
</template>
