<script setup>
import { ref, computed } from "vue";
import { RouterLink } from "vue-router";

const searchKeyword = ref("");
const mDropdown = ref(false);
const wDropdown = ref(false);
const showSearch = ref(false);

const dropdownHandler = (men) => {
  if (men === true) {
    mDropdown.value = !mDropdown.value;
  } else {
    wDropdown.value = !wDropdown.value;
  }
};

const typesOfItems = ['ชุดเซ็ท', 'เสื้อ oversize', 'เสื้อยืด', 'เสื้อ minimal', 'เสื้อเชิ้ต', 'เสื้อแขนยาว', 'เสื้อลาย', 'เสื้อกันหนาว']
let test = {
  "items": [
    {
      "id": 1,
      "name": "LOOKER - เสื้อยืดสกรีนนูน",
      "price": 200,
      "description": "ฟรีไซต์ อก36-44ใส่ได้ ความยาวประมาณ29นิ้วครับ สินค้าตามภาพ ไม่มีป้ายด้านล่าง",
      "category": "men's clothing",
      "type": [
        "เสื้อยืด",
        "เสื้อ oversize"
      ],
      "images": [
        "https://cf.shopee.co.th/file/sg-11134201-23010-we1oph91bwlv7c",
        "https://cf.shopee.co.th/file/sg-11134201-23010-e1hfmnl2bwlv45",
        "https://cf.shopee.co.th/file/sg-11134201-23010-rjvcgol2bwlv78"
      ],
      "rating": {
        "rate": 4.8,
        "count": 1145
      }
    },
    {
      "id": 2,
      "name": "เสื้อยืดชาย oversize คอกลม แขนสั้น",
      "price": 85,
      "description": "เนื้อนุ่ม ใส่สบาย ระบายความร้อนดีเยี่ยม ผ้าไม่ติดตัว",
      "category": "women's clothing",
      "type": [
        "เสื้อยืด",
        "เสื้อ oversize"
      ],
      "images": [
        "https://cf.shopee.co.th/file/21a5def22b5927960e827b48940d52eb",
        "https://cf.shopee.co.th/file/df888b6513b63a57b20805f94da32b2f"
      ],
      "rating": {
        "rate": 4.6,
        "count": 689
      }
    }
  ]
}
const filterWithTypes = (clothType) => {
  // console.log(type);
  const filteredItems = test.items.filter(x => x.type.includes(clothType))
  console.log(filteredItems);
}

const filterWithSex = (sex) => {
  // console.log(type);
  const filteredItems = test.items.filter(x => x.category === sex)
  console.log(filteredItems);
}
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
    <div class="navbar w-full drop-shadow-lg">
      <nav class="w-full flex justify-between">
        <!-- home -->
        <div class="flex justify-self-start">
          <RouterLink :to="{ name: 'home' }">
            <img src="../assets/logo.svg" alt="homeLogoApp" width="52" height="36" class="ml-9 flex justify-start" />
          </RouterLink>
        </div>

        <!-- Men Category-->
        <div>
          <div @mouseenter="dropdownHandler(true)">
            <button class="text-white transition duration-150 ease-in hover:text-[#eeb711]"
              :style="mDropdown ? { color: '#eeb711' } : { color: 'white' }">
              MEN
            </button>
            <div @mouseover="dropdownHandler(true)" @mouseout="dropdownHandler(true)"
              class="p-3 mt-2 grid grid-cols-4 gap-4 absolute bg-[#9263B1] drop-shadow-2xl" v-show="mDropdown">
              <div v-for="(types, index) of typesOfItems" :key="index" :id="index">
                <button @click="filterWithTypes(types)">{{ types }}</button>
              </div>
              <button @click="filterWithSex(`men's clothing`)">View All</button>
            </div>
          </div>
        </div>
        <!-- Women Category-->
        <div>
          <div @mouseenter="dropdownHandler(false)">
            <button class="text-white transition duration-150 ease-in hover:text-[#eeb711]"
              :style="wDropdown ? { color: '#eeb711' } : { color: 'white' }">
              WOMEN
            </button>
            <div @mouseover="dropdownHandler(false)" @mouseout="dropdownHandler(false)"
              class="p-3 mt-2 grid grid-cols-4 gap-4 absolute bg-[#9263B1] drop-shadow-2xl" v-show="wDropdown">
              <div v-for="(types, index) of typesOfItems" :key="index" :id="index">
                <button @click="filterWithTypes(types)">{{ types }}</button>
              </div>
              <button @click="filterWithSex(`women's clothing`)">View All</button>
            </div>
          </div>
        </div>
        <!-- <div class="dropdown dropdown-hover">
          <label tabindex="0" class="btn m-1">MEN</label>
          <label tabindex="0" class="btn m-1">WOMEN</label>
          <ul
            tabindex="0"
            class="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li><a>Item 1</a></li>
              <li><a>Item 2</a></li>
            </ul>
          </div> -->

        <!-- search bar -->
        <div
          class="flex text-[#ee6311] bg-white border border-slate-300 rounded-xl hover:border-slate-500 hover:bg-slate-50 max-sm:bg-[#602f7e] max-sm:border-none">
          <input class="placeholder:text-slate-400 bg-transparent px-4 py-2 outline-none sm:text-lg max-sm:hidden"
            placeholder="Search for anything..." type="text" name="search" v-model.trim="searchKeyword"
            @click="showSearch = !showSearch" />
          <div class="flex items-center justify-center px-3 py-2 transition ease-in duration-150 hover:scale-110">
            <!-- search Icon -->
            <svg class="cursor-pointer max-sm:fill-white" @click="showSearch = !showSearch" v-show="!showSearch"
              xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
              <path fill="none" d="M0 0h24v24H0z" />
              <path
                d="M11 2c4.968 0 9 4.032 9 9s-4.032 9-9 9-9-4.032-9-9 4.032-9 9-9zm0 16c3.867 0 7-3.133 7-7 0-3.868-3.133-7-7-7-3.868 0-7 3.132-7 7 0 3.867 3.132 7 7 7zm8.485.071l2.829 2.828-1.415 1.415-2.828-2.829 1.414-1.414z" />
            </svg>

            <!-- close Icon -->
            <svg class="cursor-pointer" @click="showSearch = !showSearch" v-show="showSearch"
              xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
              <path fill="none" d="M0 0h24v24H0z" />
              <path
                d="M12 10.586l4.95-4.95 1.414 1.414-4.95 4.95 4.95 4.95-1.414 1.414-4.95-4.95-4.95 4.95-1.414-1.414 4.95-4.95-4.95-4.95L7.05 5.636z"
                fill="rgba(255,0,0,1)" />
            </svg>
          </div>
        </div>

        <!-- router link path -->
        <div class="flex justify-self-end gap-6">
          <!-- cart button -->
          <RouterLink :to="{ name: 'cart' }">
            <svg class="fill-white transition ease-in duration-150 icons hover:scale-110"
              xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="32" height="32" aria-label="cart-label">
              <title id="cart-label">cart</title>
              <path fill="none" d="M0 0h24v24H0z" />
              <path
                d="M4 16V4H2V2h3a1 1 0 0 1 1 1v12h12.438l2-8H8V5h13.72a1 1 0 0 1 .97 1.243l-2.5 10a1 1 0 0 1-.97.757H5a1 1 0 0 1-1-1zm2 7a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm12 0a2 2 0 1 1 0-4 2 2 0 0 1 0 4z" />
            </svg>
          </RouterLink>

          <!-- favorite button -->
          <RouterLink :to="{ name: 'favorite' }">
            <svg class="fill-white transition ease-in duration-150 hover:fill-rose-600 hover:scale-110"
              xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="32" height="32" aria-label="fav-label">
              <title id="fav-label">favorite</title>
              <path fill="none" d="M0 0H24V24H0z" />
              <path
                d="M16.5 3C19.538 3 22 5.5 22 9c0 7-7.5 11-10 12.5C9.5 20 2 16 2 9c0-3.5 2.5-6 5.5-6C9.36 3 11 4 12 5c1-1 2.64-2 4.5-2z" />
            </svg>
          </RouterLink>

          <!-- proflie button -->
          <RouterLink :to="{ name: 'profile' }" class="mr-10">
            <svg class="fill-white ease-in duration-150 hover:fill-sky-400 hover:scale-110"
              xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="32" height="32" aria-label="profile-label">
              <title id="profile-label">profile</title>
              <path fill="none" d="M0 0h24v24H0z" />
              <path d="M5 20h14v2H5v-2zm7-2a8 8 0 1 1 0-16 8 8 0 0 1 0 16zm0-2a6 6 0 1 0 0-12 6 6 0 0 0 0 12z" />
            </svg>
          </RouterLink>
        </div>
      </nav>
    </div>

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
  font-family: "Kanit", sans-serif;
}

.navbar {
  background-color: #602f7e;
}

.icons:hover {
  fill: #eeb711;
}
</style>
