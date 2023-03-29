<script setup>
import { ref, onMounted, watch } from "vue";
import Ordering from "../components/Buying/Ordering.vue";
import Navbar from "../components/Navbar.vue";
import ProductDetail from "./ProductDetail.vue";

const test = [
  {
    id: 1,
    name: "LOOKER - เสื้อยืดสกรีนนูน",
    price: 200,
    description:
      "ฟรีไซต์ อก36-44ใส่ได้ ความยาวประมาณ29นิ้วครับ สินค้าตามภาพ ไม่มีป้ายด้านล่าง",
    category: "men's clothing",
    type: ["เสื้อยืด", "เสื้อ oversize"],
    images: [
      "https://cf.shopee.co.th/file/sg-11134201-23010-we1oph91bwlv7c",
      "https://cf.shopee.co.th/file/sg-11134201-23010-e1hfmnl2bwlv45",
      "https://cf.shopee.co.th/file/sg-11134201-23010-rjvcgol2bwlv78",
    ],
    rating: {
      rate: 4.8,
      count: 1145,
    },
  },
  {
    id: 2,
    name: "เสื้อยืดชาย oversize คอกลม แขนสั้น",
    price: 85,
    description: "เนื้อนุ่ม ใส่สบาย ระบายความร้อนดีเยี่ยม ผ้าไม่ติดตัว",
    category: "men's clothing",
    type: ["เสื้อยืด", "เสื้อ oversize"],
    images: [
      "https://cf.shopee.co.th/file/21a5def22b5927960e827b48940d52eb",
      "https://cf.shopee.co.th/file/df888b6513b63a57b20805f94da32b2f",
    ],
    rating: {
      rate: 4.6,
      count: 689,
    },
  },
];
const totals = ref(0);
const frommark = ref([]);

const changeQuantity = (num, item) => {
  if (num === 1) {
    item.quantity += num;
    item.total_price =  item.quantity * item.price
    totals.value += item.price
  }
  if (num === -1) {
    item.quantity += num;
    item.total_price =  item.quantity * item.price
    totals.value -= item.price
  }
  console.log(frommark.value);
};

onMounted(() => {
  if (test) {
    frommark.value = test;
    for (const item of frommark.value) {
      item.quantity = 1;
      item.total_price = item.price;
      totals.value += item.total_price
    }
  }
});

// items: [
//                 {
//                     product_id: '',
//                     product_name: '',
//                     quantity: '',
//                     size: '',
//                     unit_price: '',
//                     total_price: ''
//                 }
//             ],

// const sendToName = () =>{
//     let toName = [{
//         product_id: frommark.value.id,
//         product_name: frommark.value.id,
//         quantity: frommark.value.id,
//         // size:
//         unit_price: frommark.value.id,
//         total_price: frommark.value.id
//     }]
//     return toName
// }
const toName = ref( [{
        product_id: '',
        product_name: '',
        quantity: '',
        // size:
        unit_price: '',
        total_price: ''
    }])
const popup = ref('Cart')
const setMode = (orders) => {
    toName.value.product_id = orders.id,
    toName.value.product_name = orders.name,
    toName.value.quantity = orders.quantity,
        // size:
    toName.value.unit_price = orders.price,
    toName.value.total_price = orders.total_price
    popup.value = 'Ordering'
}

</script>
<template>
  <!-- <Navbar/> -->
  <div v-if="popup === 'Cart'">
    <div class="flex bg-black justify-around">
      <div class="flex"></div>
      <div class="flex text-slate-50">สินค้า</div>
      <div class="flex text-slate-50">ประเภท</div>
      <div class="flex text-slate-50">ขนาด</div>
      <div class="flex text-slate-50">จำนวน</div>
      <div class="flex text-slate-50">ราคา</div>
    </div>
    <div class="flex bg-orange-600 justify-around py-24" v-for="item of frommark">
      <div class="flex text-slate-50">
        <input type="checkbox" />
      </div>
      <div class="flex text-slate-50">
        <img :src="`${item.images[0]}`" />
      </div>
      <div class="flex text-slate-50">
        {{ item.category }}
      </div>
      <div class="flex text-slate-50">
        {{ item.size }}
      </div>
      <div class="flex text-slate-50 items-center">
        <button
        :disabled="item.quantity == 1 "
          class="border w-5 h-6 text-base solid px-1 bg-white text-stone-900"
          @click="changeQuantity(-1, item)"
        >
          -
        </button>
        <span class="px-3">{{ item.quantity }}</span>
        <button
          class="border w-5 h-6 text-base solid px-1 bg-white text-stone-900"
          
          @click="changeQuantity(1, item)"
        >
          +
        </button>
      </div>
      <div class="flex text-slate-50">
        {{ item.price }}
      </div>
    </div>
    total {{ totals }} 
    <button @click="setMode(frommark)">ส่ง</button>
  </div>
  <Ordering v-if="popup === 'Ordering'" :items_list="toName" @setPage="popup = 'Cart'"/>
</template>
