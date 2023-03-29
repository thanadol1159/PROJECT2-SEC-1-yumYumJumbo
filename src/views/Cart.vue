<script setup>
import { ref, onMounted } from 'vue'
import Ordering from '../components/Buying/Ordering.vue';
import Navbar from '../components/Navbar.vue';
import ProductDetail from "./ProductDetail.vue";


const quantity = ref(1)
const plusQuantity = () => { quantity.value++ }
const minusQuantity = () => { quantity.value-- }
const ckQuantity = () => {
    if (quantity.value < 1) {

    }
}
ckQuantity()

const props = defineProps({
    ordersFromMark: { 
        type: Object,
        require: true,
},
});

const orders = ref()
const popup = ref('Cart')
const setMode = (receiveOrders) => {
    orders.value = receiveOrders
    setNewPopup('Ordering')
}
function setNewPopup(newPopup) {
    popup.value = newPopup
}

</script>
<template>
    <!-- <Navbar/> -->
    <div v-if="popup === 'Cart'">
        <div class="flex bg-black justify-around">
            <div class="flex">

            </div>
            <div class="flex text-slate-50">
                สินค้า
            </div>
            <div class="flex text-slate-50">
                ประเภท
            </div>
            <div class="flex text-slate-50">
                ขนาด
            </div>
            <div class="flex text-slate-50">
                จำนวน
            </div>
            <div class="flex text-slate-50">
                ราคา
            </div>
        </div>

                <div class="flex bg-orange-600 justify-around py-24">
                    <div class="flex text-slate-50">
                        <input type="checkbox">
                    </div>
                    <div class="flex text-slate-50">
                        IMG
                    </div>
                    <div class="flex text-slate-50">
                        shirt
                    </div>
                    <div class="flex text-slate-50 ">
                       SIze
                    </div>
                    <div class="flex text-slate-50 items-center">
                         <button class="border w-5 h-6 text-base solid px-1 bg-white text-stone-900 " :disabled="quantity === 1" @click="minusQuantity">-</button> <span class="px-3">{{ quantity }}</span> <button class="border w-5 h-6 text-base solid px-1 bg-white text-stone-900" @click="plusQuantity">+</button>
                    </div>
                    <div class="flex text-slate-50">
                        price
                    </div>

            </div>
            <button @click="setMode(ordersFromMark)">ส่ง</button>
        </div>
    </div>
    <Ordering v-if="popup === 'Ordering'" :items_list="orders" @setPage="popup = 'Cart'" />

</template>