<script setup>
import { ref, defineProps, onMounted,watch} from 'vue';
import { RouterLink} from "vue-router";

const props = defineProps({
    typeShirt: {
        type: Array,
        default: []
    }
})

const inputProps = ref({})
watch(() => props.typeShirt,
    ()=>{
    inputProps.value = props.typeShirt;
    inputProps.value.sort((a,b) => b.rating.rate - a.rating.rate)

})

</script>
 
<template>
    <div class="pop border border-black w-9/12 m-auto rounded-lg truncate">
        <h1 class="text-4xl mt-2 pl-10 text-white">Popular</h1>
        <div class="flex overflow-y-auto mt-2 pb-2">
            <div v-for="data in inputProps" :key="data.id" >
                <RouterLink :to="{ name: 'ProductDetail', params: { id: data.id } }">
                    <!-- <div v-show="data.rating.rate > 4.7"> -->
                    <div >
                        <div
                            class="cursor-pointer bg-white h-60 w-48 rounded-2xl mx-3 shadow drop-shadow-2xl border                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  border-black hover:border-red-500 hover:shadow-2xl hover:border-2 overflow-hidden ">
                            <img class=" m-auto w-40 mt-4 border rounded-lg border-black shadow shadow-violet-600"
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
                </RouterLink>
            </div>
        </div>
    </div>
</template>
 
<style scoped>
.pop {
    background-color: #754A8F;
    height: 320px;
}

.rateData {
    color: #fddf00;
    text-shadow: 0 0 3px rgb(0, 0, 0);
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
