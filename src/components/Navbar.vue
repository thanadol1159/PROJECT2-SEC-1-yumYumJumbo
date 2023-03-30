<script setup>
import { ref, onMounted, computed } from "vue";
import { RouterLink } from "vue-router";

// Fetch Product
const product = ref([]);
const typesOfItemsMan = ref([]);
const typesOfItemsWoman = ref([]);
onMounted(async () => {
  try {
    const result = await fetch(`http://localhost:5000/items`);
    if (result.status === 200) {
      const response = await result.json();
      product.value = response;
      typeFilter(typesOfItemsMan, `men's clothing`);
      typeFilter(typesOfItemsWoman, `women's clothing`);
      // console.log(queryProduct.value);
    }
  } catch (err) {
    console.log(err);
  }
});

const emit = defineEmits(["filterByType"]);
const typeFilter = (arr, sex) => {
  const passArr = [];
  product.value
    .filter((x) => x.category === sex)
    .forEach((element) => {
      passArr.push(...element.type);
    });
  const set = new Set(passArr);
  arr.value = [...set];
  // console.log(arr.value);
};

const filterWithTypes = (clothType, sex) => {
  const filteredSex = product.value.filter((x) => x.category === sex);
  const filteredItems = filteredSex.filter((x) => x.type.includes(clothType));
  // console.log(filteredItems)
  return filteredItems;
};

const filterWithSex = (sex) => {
  const filteredSex = product.value.filter((x) => x.category === sex);
  return filteredSex;
  // console.log(filteredSex);
};

const searchKeyword = ref("");
const dropdown = ref(false);
const mDropdown = ref(false);
const wDropdown = ref(false);
const showSearchIcon = ref(false);

const dropdownHandler = (men) => {
  if (men === true) {
    mDropdown.value = !mDropdown.value;
  } else {
    wDropdown.value = !wDropdown.value;
  }
};

const clearSearch = () => {
  searchKeyword.value = "";
  showSearchIcon.value = false;
  dropdown.value = false;
};

const showDropdown = () => {
  dropdown.value = !dropdown.value;
  showSearchIcon.value = !showSearchIcon.value;
  mDropdown.value = false;
  wDropdown.value = false;
};

const searchFilter = computed(() => {
  const productName = product.value;
  return productName.filter((product) =>
    product.name.toLowerCase().includes(searchKeyword.value.toLowerCase())
  );
});
</script>

<template>
  <div class="sticky top-0 z-50">
    <!-- navbar -->
    <div class="navbar w-full drop-shadow-lg">
      <nav class="w-full flex justify-between">
        <!-- home -->
        <div class="flex justify-self-start">
          <RouterLink :to="{ name: 'home' }">
            <img
              src="../assets/logo.png"
              alt="homeLogoApp"
              width="65"
              height="36"
              class="ml-9 flex justify-start"
            />
          </RouterLink>
        </div>

        <!-- Men Women Category-->
        <div class="flex justify-between gap-60">
          <div @mouseenter="dropdownHandler(true)">
            <button
              class="text-white transition duration-150 ease-in hover:text-[#eeb711]"
              :style="mDropdown ? { color: '#eeb711' } : { color: 'white' }"
            >
              MEN
            </button>
            <div
              @mouseover="dropdownHandler(true)"
              @mouseout="dropdownHandler(true)"
              class="w-full grid grid-cols-4 gap-4 absolute bg-[#9263B1] drop-shadow-2xl -left-0 top-14 -right-48 px-10 mt-2 pt-2 text-center"
              v-show="mDropdown"
            >
              <RouterLink
                :to="{
                  name: 'type',
                  itemList: filterWithTypes(types, `men's clothing`),
                }"
                v-for="(types, index) of typesOfItemsMan"
                :key="index"
                :id="index"
                @click="
                  $emit(
                    'filterByType',
                    filterWithTypes(types, `men's clothing`)
                  )
                "
              >
                {{ types }}
              </RouterLink>

              <RouterLink
                :to="{ name: 'type' }"
                @click="$emit('filterByType', filterWithSex(`men's clothing`))"
                >View All</RouterLink
              >
            </div>
          </div>

          <!-- Women Category-->

          <div @mouseenter="dropdownHandler(false)">
            <button
              class="text-white transition duration-150 ease-in hover:text-[#eeb711]"
              :style="wDropdown ? { color: '#eeb711' } : { color: 'white' }"
            >
              WOMEN
            </button>
            <div
              @mouseover="dropdownHandler(false)"
              @mouseout="dropdownHandler(false)"
              class="w-full grid grid-cols-4 gap-4 absolute bg-[#9263B1] drop-shadow-2xl -left-0 top-14 -right-48 px-10 mt-2 pt-2 text-center"
              v-show="wDropdown"
            >
              <RouterLink
                :to="{ name: 'type' }"
                @click="
                  $emit(
                    'filterByType',
                    filterWithTypes(types, `women's clothing`)
                  )
                "
                v-for="(types, index) of typesOfItemsWoman"
                :key="index"
                :id="index"
              >
                {{ types }}
              </RouterLink>
              <RouterLink
                :to="{ name: 'type' }"
                @click="
                  $emit('filterByType', filterWithSex(`women's clothing`))
                "
              >
                View All
              </RouterLink>
            </div>
          </div>
        </div>

        <!-- search bar -->
        <div
          class="flex text-[#ee6311] bg-white border border-slate-300 rounded-xl hover:border-slate-500 hover:bg-slate-50 max-sm:bg-[#602f7e] max-sm:border-none"
        >
          <input
            class="placeholder:text-slate-400 bg-transparent px-4 py-2 outline-none sm:text-lg max-sm:hidden"
            placeholder="Search for anything..."
            type="text"
            name="search"
            v-model.trim="searchKeyword"
            @click="showDropdown()"
          />
          <div
            class="flex items-center justify-center px-3 py-2 transition ease-in duration-150 hover:scale-110"
          >
            <!-- search Icon -->
            <svg
              class="cursor-pointer max-sm:fill-white"
              @click="showSearchIcon = !showSearchIcon"
              v-show="!showSearchIcon"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              width="24"
              height="24"
            >
              <path fill="none" d="M0 0h24v24H0z" />
              <path
                d="M11 2c4.968 0 9 4.032 9 9s-4.032 9-9 9-9-4.032-9-9 4.032-9 9-9zm0 16c3.867 0 7-3.133 7-7 0-3.868-3.133-7-7-7-3.868 0-7 3.132-7 7 0 3.867 3.132 7 7 7zm8.485.071l2.829 2.828-1.415 1.415-2.828-2.829 1.414-1.414z"
              />
            </svg>

            <!-- close Icon -->
            <svg
              class="cursor-pointer"
              @click="clearSearch"
              v-show="showSearchIcon"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              width="24"
              height="24"
            >
              <path fill="none" d="M0 0h24v24H0z" />
              <path
                d="M12 10.586l4.95-4.95 1.414 1.414-4.95 4.95 4.95 4.95-1.414 1.414-4.95-4.95-4.95 4.95-1.414-1.414 4.95-4.95-4.95-4.95L7.05 5.636z"
                fill="rgba(255,0,0,1)"
              />
            </svg>
          </div>
        </div>

        <!-- router link path -->
        <div class="flex justify-self-end gap-6">
          <!-- cart button -->
          <RouterLink :to="{ name: 'cart' }">
            <svg
              class="fill-white transition ease-in duration-150 icons hover:scale-110"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              width="32"
              height="32"
              aria-label="cart-label"
            >
              <title id="cart-label">cart</title>
              <path fill="none" d="M0 0h24v24H0z" />
              <path
                d="M4 16V4H2V2h3a1 1 0 0 1 1 1v12h12.438l2-8H8V5h13.72a1 1 0 0 1 .97 1.243l-2.5 10a1 1 0 0 1-.97.757H5a1 1 0 0 1-1-1zm2 7a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm12 0a2 2 0 1 1 0-4 2 2 0 0 1 0 4z"
              />
            </svg>
          </RouterLink>

          <!-- proflie button -->
          <RouterLink :to="{ name: 'profile' }" class="mr-10">
            <svg
              class="fill-white ease-in duration-150 hover:fill-sky-400 hover:scale-110"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              width="32"
              height="32"
              aria-label="profile-label"
            >
              <title id="profile-label">profile</title>
              <path fill="none" d="M0 0h24v24H0z" />
              <path
                d="M5 20h14v2H5v-2zm7-2a8 8 0 1 1 0-16 8 8 0 0 1 0 16zm0-2a6 6 0 1 0 0-12 6 6 0 0 0 0 12z"
              />
            </svg>
          </RouterLink>
        </div>
      </nav>
    </div>

    <div v-show="dropdown" class="absolute w-full z-50">
      <div class="w-full drop-shadow-lg">
        <p class="pl-5 py-2 text-xl bg-slate-50 text-[#9263B1] hover:bg-[#56288A] hover:text-[#FF8C00] cursor-pointer">
          Searching for
          <span class="text-[#ee6311]"> {{ searchKeyword }} </span>
        </p>

        <div
          v-show="index <= 4"
          v-for="(p, index) in searchFilter"
          :key="p.id"
          :class="index % 2 === 0 ? 'bg-white' : 'bg-slate-50'"
          class="pl-5 py-2 text-xl hover:bg-[#56288A] hover:text-[#FF8C00] cursor-pointer" 
        >
          <RouterLink :to="{ name: 'ProductDetail', params: { id: p.id } }">
            {{ p.name }}
          </RouterLink>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
*,
body {
  font-family: "Kanit", sans-serif;
  font-size: 24px;
}

.navbar {
  background-color: #602f7e;
}

.icons:hover {
  fill: #eeb711;
}
</style>
