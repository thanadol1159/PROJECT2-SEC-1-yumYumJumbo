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

const itemsToAll = ref([]);
const itemsToPopSorted = ref([]);
const itemsToTopSorted = ref([]);

const itemIMG = ref([]);
const images = ref([]);

onMounted(() => {
  itemsToAll.value = props.productFilter;
  if (!props.productFilter) {
    itemIMG.value = [];
    itemsToAll.value = props.productFilter;
  }
  for (const item of itemsToAll.value) {
    itemIMG.value.push(item.images[0]);
  }
  images.value = itemIMG.value.slice(0, 5);
  itemsToPopSorted.value = itemsToAll.value
    .slice()
    .sort((a, b) => b.rating.rate - a.rating.rate);
  itemsToTopSorted.value = itemsToAll.value
    .slice()
    .sort((a, b) => b.rating.count - a.rating.count);
});

watch(
  () => props.productFilter,
  () => {
    itemsToAll.value = props.productFilter;

    itemIMG.value = [];
    if (!props.productFilter) {
      itemIMG.value = [];
      itemsToAll.value = props.productFilter;
    }
    for (const item of itemsToAll.value) {
      itemIMG.value.push(item.images[0]);
    }
    images.value = itemIMG.value.slice(0, 5);
    itemsToPopSorted.value = itemsToAll.value
      .slice()
      .sort((a, b) => b.rating.rate - a.rating.rate);
    itemsToTopSorted.value = itemsToAll.value
      .slice()
      .sort((a, b) => b.rating.count - a.rating.count);
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
      <PopularItem :typeShirt="itemsToPopSorted" />
    </ContentSection>

    <!-- Topsale -->
    <ContentSection>
      <TopSaleItem :typeShirt="itemsToTopSorted" />
    </ContentSection>

    <!-- Product All -->
    <ContentSection>
      <ProductAll :typeShirt="itemsToAll" />
    </ContentSection>
  </div>
</template>
