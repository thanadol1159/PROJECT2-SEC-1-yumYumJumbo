<script setup>
import { getData } from '../composable/getData.js'
import { ref } from 'vue'
const items = ref(getData())


</script>
<template>
    <div class="slider">
        <ul class="slides" :style="{ left: -width * current + 'px' }">
            <li v-for="(slide, i) in slides">
                <img :src="slide" alt="">
            </li>
        </ul>
        <ul class="bullets">
            <li v-for="(slide, i) in slides"></li>
        </ul>
        <a class="prev" href="#" @click.prevent="prevSlide">&#x25C0;</a>
        <a class="next" href="#" @click.prevent="nextSlide">&#x25B6;</a>
    </div>

    <div class="w-full">
        <div v-for="(p, index) in items" :key="index" class="w-full flex justify-center">
            <img :src="p.image" alt="p.description" width="150" height="200" class="flex justify-items-content">
        </div>
    </div>
</template>
 
<style scoped>
body {
    background-color: #2C3E50;
}

#slider {
    width: 100%;
}

.slider {
    margin: 0 auto;
    padding: 0;
    width: 800px;
    height: 400px;
    position: relative;
    overflow: hidden;
}

ul.slides {
    width: 100%;
    height: 100%;
    margin: 0;
    padding: 0;
    display: table;
    position: absolute;
    top: 0;
    transition: left 800ms;
}

li {
    list-style-type: none;
    display: table-cell;
}

img {
    width: 800px;
}


ul.bullets {
    width: inherit;
    position: absolute;
    bottom: 0;
    left: 0;
    padding: 0;
    margin: 0 0 10px 0;
    text-align: center;
    z-index: 1;
}

li {
    list-style-type: none;
    display: inline;
    color: #fff;
    cursor: pointer;
    padding: 0 5px;
    font-size: 20px;
    font-family: sans-serif;
}


.prev,
.next {
    text-decoration: none;
    color: #fff;
    position: absolute;
    z-index: 1;
    font-size: 42px;
    top: 43%;
    text-shadow: 2px 2px 5px rgba(0, 0, 0, 0.5);
}

.prev {
    left: 20px;
}

.next {
    right: 20px;
}
</style>