<script>
import { ref, onMounted } from 'vue';

const productList = ref([])

// onMounted(() => {
//     fetch('https://localhost:8000/product')
//     .then((response) => response.json())
//     .then(apiProduct => {
//         productList.value = apiProduct
//     })
// })
</script>
 
<template>
<h1>
    {{ productList }}
</h1>
</template>
 
<style scoped>

</style>