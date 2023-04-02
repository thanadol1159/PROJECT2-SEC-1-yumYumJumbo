<script setup>
import { RouterLink } from "vue-router";
const props = defineProps({
  itemList: {
    type: Array,
    default: [],
  },
});

</script>

<template>
  <div class="mt-5">    
    <div
    class="flex justify-around"
    v-show="index >= 26 && index <= 29"
    v-for="(items, index) in props.itemList"
    :key="items.id"
    :id="index"
    >
    <RouterLink :to="{ name: 'ProductDetail', params: { id: items.id } }">
      <div class="section">
        <div class="image-container">
          <img :src="items.images[0]" alt="recommend_product"/>
        </div>
      </div>
    </RouterLink>
    </div>
  </div>

</template>
<style scoped>
.section {
  display: flex;
  min-height: 90vh;
  position: relative;
  justify-content: center;
  background-color: rgb(17, 17, 17);
  width: 100vh;
}

.image-container {
  position: relative;
  display: flex;
  transition: 0.2s;
  margin-bottom: 3vh;
  cursor: pointer;
}
.image-container :hover {
  transform: scale(1.05);
  transition: 0.2s;
}

.section.active .image {
  opacity: 1;
  filter: blur(0);
}
</style>
