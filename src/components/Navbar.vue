<script setup>
import { ref, computed } from 'vue'
import { getData } from '../composable/getData.js'

// const items = getData()
const searchKeyword = ref('')
const dropdown = ref(false)
const showSeach = ref(false)
// console.log(items.value.name)
// const filterCategory = items.filter((p, index) => items.findIndex((item) => item.name === p.name) === index)

// const searchFilter = computed(() => {
//         dropdown.value = true
//         return filterCategory.filter((product) =>
//             product.name.toLowerCase().includes(searchKeyword.value.toLowerCase()))
// })

</script>
 
<template>
    <div class="sticky top-0 z-50">
        <!-- navbar -->
        <div class="navbar w-full drop-shadow-lg ">
            <nav class="w-full flex justify-between">
                <img src="../assets/logo.png" alt="logoApp" width="52" height="36" class="ml-8 flex justify-start">

                <label class="relative block">
                    <input
                        class="search placeholder:text-slate-400 block bg-white w-full border border-slate-300 rounded-xl py-2 pl-4 pr-10 mr-72 hover:border-slate-500 hover:bg-slate-50 focus:outline-none sm:text-sm"
                        placeholder="Search for anything..." type="text" name="search" v-model.trim="searchKeyword" @click="showSeach = !showSeach"/>
                    <span class="absolute inset-y-0 right-2 flex items-center">
                        <!-- search Icon -->
                        <svg v-show="!showSeach" class="cursor-pointer" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
                            <path fill="none" d="M0 0h24v24H0z" />
                            <path
                                d="M11 2c4.968 0 9 4.032 9 9s-4.032 9-9 9-9-4.032-9-9 4.032-9 9-9zm0 16c3.867 0 7-3.133 7-7 0-3.868-3.133-7-7-7-3.868 0-7 3.132-7 7 0 3.867 3.132 7 7 7zm8.485.071l2.829 2.828-1.415 1.415-2.828-2.829 1.414-1.414z" />
                        </svg>
                        <!-- close Icon -->
                        <svg v-show="showSeach" class="cursor-pointer" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
                            <path fill="none" d="M0 0h24v24H0z"/>
                            <path 
                                d="M12 10.586l4.95-4.95 1.414 1.414-4.95 4.95 4.95 4.95-1.414 1.414-4.95-4.95-4.95 4.95-1.414-1.414 4.95-4.95-4.95-4.95L7.05 5.636z" fill="rgba(255,0,0,1)"/>
                            </svg>
                        
                    </span>

                </label>

                <div class="flex justify-content-end gap-6">
                    <!-- cart button -->
                    <button>
                        <svg class="fill-white transition ease-in duration-150 icons hover:scale-110"
                            xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="32" height="32"
                            aria-labelledby="button-label">
                            <title id="button-label">cart</title>
                            <path fill="none" d="M0 0h24v24H0z" />
                            <path
                                d="M4 16V4H2V2h3a1 1 0 0 1 1 1v12h12.438l2-8H8V5h13.72a1 1 0 0 1 .97 1.243l-2.5 10a1 1 0 0 1-.97.757H5a1 1 0 0 1-1-1zm2 7a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm12 0a2 2 0 1 1 0-4 2 2 0 0 1 0 4z" />
                        </svg>
                    </button>

                    <!-- favorite button -->
                    <button>
                        <svg class="fill-white transition ease-in duration-150 hover:fill-rose-600 hover:scale-110"
                            xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="32" height="32"
                            aria-labelledby="button-label">
                            <title id="button-label">favorite</title>
                            <path fill="none" d="M0 0H24V24H0z" />
                            <path
                                d="M16.5 3C19.538 3 22 5.5 22 9c0 7-7.5 11-10 12.5C9.5 20 2 16 2 9c0-3.5 2.5-6 5.5-6C9.36 3 11 4 12 5c1-1 2.64-2 4.5-2z" />
                        </svg>
                    </button>

                    <!-- proflie button -->
                    <button class="mr-8">
                        <svg class="fill-white ease-in duration-150 hover:fill-sky-400 hover:scale-110"
                            xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="32" height="32"
                            aria-labelledby="button-label">
                            <title id="button-label">profile</title>
                            <path fill="none" d="M0 0h24v24H0z" />
                            <path
                                d="M5 20h14v2H5v-2zm7-2a8 8 0 1 1 0-16 8 8 0 0 1 0 16zm0-2a6 6 0 1 0 0-12 6 6 0 0 0 0 12z" />
                        </svg>
                    </button>
                </div>
            </nav>
        </div>

        <!-- dropdown -->
        <!-- <div v-show="showSeach" class="absolute w-full">
            <div v-if="dropdown" class="w-full">
                <div v-for="(p, index) in items" :key="index" :class="index % 2 === 0 ? 'bg-white' : 'bg-slate-50'" class="pl-5 py-2 text-xl">
                    {{ p.name }}
                </div>
            </div>
            <p v-else class="pl-5 py-2 text-xl">Searching for {{ searchKeyword }}</p>
        </div> -->
    </div>
</template>
 
<style scoped>
*,
body {
    font-family: 'Kanit', sans-serif;
}

.navbar {
    background-color: #602F7E;
}

.search:focus {
    border-color: #56288A;
}


.icons:hover {
    fill: #ffff00;
}
</style>