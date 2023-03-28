<!-- <script setup>
import { ref } from 'vue';
const emit = defineEmits(['filterByType'])

const filterWithTypes = (clothType, sex) => {
  const filteredSex = queryProduct.value.filter((x) => x.category === sex);
  const filteredItems = filteredSex.filter((x) => x.type.includes(clothType));
  // console.log(filteredItems)
  return filteredItems
};

const filterWithSex = (sex) => {
  const filteredSex = queryProduct.value.filter((x) => x.category === sex);
  // console.log(filteredSex);
};

</script>
 
<template>
<div>

</div>
</template>
 
<style scoped>

</style> -->