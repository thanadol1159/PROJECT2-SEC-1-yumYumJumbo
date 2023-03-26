<script setup>
import { ref, defineProps, onMounted } from 'vue';
import { RouterLink } from "vue-router";

const props = defineProps({
    typeShirt: {
        type: Array
    }
})

const queryProduct = ref({})
onMounted(async () => {
    try {
        const result = await fetch(`http://localhost:5000/items`)
        if (result.status === 200) {
            const response = await result.json()
            queryProduct.value = response
            console.log(response);
        }
    }
    catch (err) {
        console.log(err);
    }
})

console.log(queryProduct);
</script>
 
<template>
    <div class="w-9/12 justify-center h-auto flex ">
        <div class="pop border border-black w-full rounded-lg ">
            <div class="w-full justify-center flex my-5">
                <h1 class="text-4xl text-white">Product</h1>
            </div>

            <div class="flex flex-wrap justify-center ">
                <div v-for="data in queryProduct" :key="data.id">
                    <div v-show="data">
                        <div class="cursor-pointer bg-white my-3 h-60 w-48 rounded-2xl mx-3 shadow drop-shadow-2xl border border-black hover:border-red-500 hover:shadow-2xl hover:border-2 overflow-hidden "
                            v-on:click="">
                            <img class="m-auto w-40 mt-4 border rounded-lg border-black shadow shadow-violet-600"
                                :src="data.images" />
                            <p
                                class="text-xs pl-5 mt-1 bg-slate-500 border border-red-600 border-l-0 border-r-0 text-slate-200">
                                rating : <span class="rateData">{{
                                    data.rating.rate
                                }}</span></p>
                            <div class="mt-1 bg-black h-12">
                                <h1 class="text-xs px-5 text-white py-2 truncate ">{{
                                    data.name }}
                                </h1>
                            </div>
                        </div>
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

.rateData {
    color: #fddf00;
    text-shadow: 0 0 3px rgb(0, 0, 0);
}
</style>
