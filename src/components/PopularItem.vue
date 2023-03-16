<script setup>
import { ref } from "vue";
import { getData } from '../composable/getData.js'

const datas = ref(getData())


</script>
 
<template>
    <div class="pop  bg-purple-800 h-96 border border-black w-9/12 float-right mx-11 rounded-2xl">
        <h1 class="text-3xl pt-4 pl-10 text-white">Popular</h1>
        <div class="flex pl-18 pt-8">
            <div v-for="data in datas" :key="data.id">
                <div class="cursor-pointer bg-white h-64 w-52 rounded-2xl mx-3 drop-shadow-2xl border border-black hover:border hover:border-green-500 hover:shadow-2xl hover:border-2"
                    v-show="data.rating.rate > 4.8">
                    <div v-on:click="">
                        <img class="m-auto w-40 mt-6 overflow-hidden border rounded-lg border-black" :src="data.images" />
                        <h1 class="text-xs px-5 bg-black h-8 text-white mt-6 pt-2 break-words truncate">{{ data.name }}
                        </h1>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
 
<style scoped>
.pop {
    background-color: #754A8F;
}
</style>
