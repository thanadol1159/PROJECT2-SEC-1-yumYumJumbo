<script setup>
import { onMounted, ref } from 'vue';

onMounted(() => {
    calOrderSum();
})
const orderSum = ref(0)
const calOrderSum = () => {
    for (const item of ordersFromUser.items) {
        let prices = item.price
        orderSum.value += prices
    }
}

const ordersFromUser = ref({
    id: '',
    customerName: '',
    customerAddress: '',
    customerPhone: '',
    items: [
        {
            product_id: '',
            product_name: '',
            quantity: '',
            size: '',
            unit_price: '',
            total_price: ''
        }
    ],
    orders_Sum: ''
})
// Json Sever
// const addOrder = async (newOrder) => {
//     // setNewPopup('')
//     commitForm.value = newOrder

//     try {
//         const res = await fetch('http://localhost:5000/orders', {
//             method: 'POST',
//             headers: {
//                 'content-type': 'application/json'
//             },
//             body: JSON.stringify({
//                 // userName: newOrder.name,
//                 // userAddress: newOrder.address,
//                 // userPhone: newOrder.phone
//             })
//         })
//         if (res.status === 201) {
//             const addednewOrder = await res.json()
//         } else {
//             throw new Error('cannot add!')
//         }
//     }
//     catch (err) {
//         console.log(err);
//     }
// }
</script>
 
<template>
    <div class="text-center">
        <div class="bg-[#EFEFEF] w-8/12 ml-24">
            <span class="text-2xl font-bold">รายการสินค้า</span>
            <div class="mt-6 h-80 pl-4">
                <div class="w-full flex" v-for="item of ordersFromUser.items">
                    <div class="h-auto w-5/6 text-left"><span class="text-lg">{{ item.name }}</span></div>
                    <div class="h-auto w-1/6 text-left"><span class="text-lg">{{ item.price }}</span></div>
                </div>
            </div>
            <div class="grid grid-cols-2 pb-6 font-bold">
                <span class="text-2xl">รวมทั้งหมด</span>
                <span class="text-2xl text-[#602F7E]">THB {{ orderSum }}</span>
            </div>
        </div>
        <div class="pt-4">
            <button type="button"
                class="text-lg text-white btn border-none bg-[#602F7E] hover:bg-slate-500 active:bg-slate-700 rounded-lg py-3 w-52"
                @click="">ยืนยันคำสั่งซื้อ
            </button>
        </div>
    </div>
</template>