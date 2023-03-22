<script setup>
import { onMounted, ref } from 'vue';

defineEmits(['add,close'])
const props = defineProps({
    userForm: { type: Object }
})
const updatedUserFrom = ref({})
onMounted(async () => {
    // Add
    if (props.userForm === undefined) {
        updatedUserFrom.value = {
            name: '',
            address: '',
            phone: ''
        }
    }
    // Edit
    else {
        const addedNewForm = await res.json()
        updatedUserFrom({
            name: addedNewForm.name,
            address: addedNewForm.address,
            phone: addedNewForm.phone
        })
    }
})

</script>
<template>
    <div class="fixed top-0 left-0 w-screen h-screen bg-gray-800 bg-opacity-80 flex items-center justify-center z-50">
        <div class="bg-white rounded-lg p-4 h-auto w-5/12">
            <!-- GoBack -->
            <button class="" @click="$emit('close', '')">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="inline w-12 h-12">
                    <path fill="none" d="M0 0h24v24H0z" />
                    <path d="M10.828 12l4.95 4.95-1.414 1.414L8 12l6.364-6.364 1.414 1.414z" fill="rgba(96,47,126,1)" />
                </svg>
                <h2 class="text-xl inline">เพิ่มที่อยู่ของคุณ</h2>
            </button>

            <!-- Form -->
            <form class="p-4 pl-10">
                <!-- Name -->
                <div class="mb-4">
                    <label class="block ml-2 text-gray-700 text-xl" for="name">
                        ชื่อผู้รับ
                    </label>
                    <input class="border rounded-xl border-gray-400 p-2 h-auto w-3/4 text-lg" type="text" name="name"
                        id="name" placeholder="นายเอเลน เยเกอร์" v-model="updatedUserFrom.name" />
                </div>
                <!-- Address -->
                <div class="mb-4">
                    <label class="block ml-2 text-gray-700 text-xl" for="address">
                        รายละเอียดที่อยู่
                    </label>
                    <textarea class="border rounded-xl border-gray-400 p-2 h-auto w-3/4 text-lg" type="text" name="address"
                        id="address" placeholder="หมู่บ้านพาราดี ซอยซาซาเกโย" v-model="updatedUserFrom.address" />
                </div>
                <!-- Telephone -->
                <div class="mb-4">
                    <label class="block ml-2 text-gray-700 text-xl" for="phone">
                        เบอร์ติดต่อ
                    </label>
                    <input class="border rounded-xl border-gray-400 p-2 h-auto w-3/4 text-lg" type="tel" name="phone"
                        id="phone" placeholder="Ex 0922161111" v-model="updatedUserFrom.phone" />
                </div>
                <!-- Submit -->
                <button type="submit" @click="$emit('add', updatedUserFrom)"
                    class="text-lg btn border-none text-white bg-[#602F7E] hover:bg-slate-500 active:bg-slate-700 rounded-lg py-3 px-10">
                    ยืนยัน
                </button>
            </form>
        </div>
    </div>
</template>
  