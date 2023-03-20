<script setup>
import { ref } from 'vue';
let userForm = ref({})



</script>
<template>
    <div class="fixed top-0 left-0 w-screen h-screen bg-gray-900 bg-opacity-80 flex items-center justify-center z-50">
        <div class="bg-white rounded-lg p-4 h-auto w-5/12">
            <button class="" @click="">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="inline w-12 h-12">
                    <path fill="none" d="M0 0h24v24H0z" />
                    <path d="M10.828 12l4.95 4.95-1.414 1.414L8 12l6.364-6.364 1.414 1.414z" fill="rgba(96,47,126,1)" />
                </svg>
                <h2 class="text-xl inline">เพิ่มที่อยู่ของคุณ</h2>
                
            </button>

            <form class="p-4 pl-10">
                <div class="mb-4">
                    <label class="block ml-2 text-gray-700 text-xl" for="name">
                        ชื่อผู้รับ {{ userForm.name }}
                    </label>
                    <input class="border rounded-xl border-gray-400 p-2 h-auto w-3/4 text-lg" type="text" name="name"
                        id="name" placeholder="นายเอเลน เยเกอร์" v-model="userForm.name" />
                </div>
                <div class="mb-4">
                    <label class="block ml-2 text-gray-700 text-xl" for="address">
                        รายละเอียดที่อยู่ {{ userForm.address }}
                    </label>
                    <textarea class="border rounded-xl border-gray-400 p-2 h-auto w-3/4 text-lg" type="text" name="address"
                        id="address" placeholder="หมู่บ้านพาราดี ซอยซาซาเกโย" v-model="userForm.address" />
                </div>
                <div class="mb-4">
                    <label class="block ml-2 text-gray-700 text-xl" for="city">
                        เบอร์ติดต่อ {{ userForm.phone }}
                    </label>
                    <input class="border rounded-xl border-gray-400 p-2 h-auto w-3/4 text-lg" type="tel" name="phone"
                        id="phone" pattern="[0][0-9]{2}[0-9]{3}[0-9]{4}" placeholder="Ex 0922161111"
                        v-model="userForm.phone" />
                </div>
                <button class="text-lg text-white bg-[#602F7E] hover:bg-slate-500 active:bg-slate-700 rounded-lg py-3 px-10"
                    type="submit" @click="">
                    Submit
                </button>
            </form>
        </div>
    </div>
</template>
  