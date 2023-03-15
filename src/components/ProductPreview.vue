<script setup>
import { getData } from '../composable/getData.js'
import { ref } from 'vue'
const items = ref(getData())

</script>
<template>
    <div class="preview">
        <slot />
    </div>
    <!-- <div class="w-full">
        <div v-for="(p, index) in items" :key="index" class="w-full flex justify-center">
            <img :src="p.image" alt="p.description" width="150" height="200" class="flex justify-items-content">
        </div>
    </div> -->
</template>
 
<style scoped>

</style>