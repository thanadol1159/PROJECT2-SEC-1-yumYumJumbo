<script setup>
import { ref } from "vue";
import { getData } from '../composable/getData.js'

const datas = ref(getData())


</script>
 
<template>
    <div
        class="pop  bg-purple-800 border border-black w-9/12 float-right mx-11 rounded-lg overflow-x-scroll overflow-y-hidden ">
        <h1 class="text-3xl pt-4 pl-10 text-white">Popular</h1>
        <div class="flex pl-18 pt-8">
            <div v-for="data in datas" :key="data.id">
                <div class="cursor-pointer bg-white -mt-5 h-60 w-48 rounded-2xl mx-3 shadow drop-shadow-2xl border border-black hover:border-green-500 hover:shadow-2xl hover:border-2 "
                    v-show="data.rating.rate > 4.5">
                    <div v-on:click="">
                        <img class="m-auto w-40 mt-6 overflow-hidden border rounded-lg border-black shadow shadow-violet-600"
                            :src="data.images" />
                        <h1 class="text-xs px-5 bg-black h-8 text-white mt-3 py-2 break-words truncate rounded-md">{{
                            data.name }}
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
    height: 340px;
}

::-webkit-scrollbar {
    width: 5px;
}

::-webkit-scrollbar-track {
    box-shadow: inset 0 0 5px grey;
    border-radius: 45px;
}

/* Handle */
::-webkit-scrollbar-thumb {
    background: #9263B1;
    border: 1px solid rgb(135, 52, 116);
    border-radius: 400px;
}

/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
    background: #9263B1;
    border: 1px solid rgb(255, 255, 255);
}
</style>
