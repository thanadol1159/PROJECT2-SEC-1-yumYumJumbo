<script setup>
import { ref, onMounted, watch ,defineProps} from "vue";
import Ordering from "../components/Buying/Ordering.vue";
import Navbar from "../components/Navbar.vue";
import ProductDetail from "./ProductDetail.vue";


// const test = [
//   {
//     id: 1,
//     name: "LOOKER - เสื้อยืดสกรีนนูน",
//     price: 200,
//     description:
//       "ฟรีไซต์ อก36-44ใส่ได้ ความยาวประมาณ29นิ้วครับ สินค้าตามภาพ ไม่มีป้ายด้านล่าง",
//     category: "men's clothing",
//     type: ["เสื้อยืด", "เสื้อ oversize"],
//     images: [
//       "https://cf.shopee.co.th/file/sg-11134201-23010-we1oph91bwlv7c",
//       "https://cf.shopee.co.th/file/sg-11134201-23010-e1hfmnl2bwlv45",
//       "https://cf.shopee.co.th/file/sg-11134201-23010-rjvcgol2bwlv78",
//     ],
//     rating: {
//       rate: 4.8,
//       count: 1145,
//     },
//   },
//   {
//     id: 2,
//     name: "เสื้อยืดชาย oversize คอกลม แขนสั้น",
//     price: 85,
//     description: "เนื้อนุ่ม ใส่สบาย ระบายความร้อนดีเยี่ยม ผ้าไม่ติดตัว",
//     category: "men's clothing",
//     type: ["เสื้อยืด", "เสื้อ oversize"],
//     images: [
//       "https://cf.shopee.co.th/file/21a5def22b5927960e827b48940d52eb",
//       "https://cf.shopee.co.th/file/df888b6513b63a57b20805f94da32b2f",
//     ],
//     rating: {
//       rate: 4.6,
//       count: 689,
//     },
//   },
// ];
const totals = ref(0);
const buy = []
const frommark = ref([]);
const addToBuy =(item)=>{
  for (let i = 0; i < buy.length; i++) {
    buy[i].push(item);
  }
  // buy.push(item.total_price)
  console.log(buy);
}

const changeQuantity = (num, item) => {
  if (num === 1) {
    item.quantity += num;
    item.total_price = item.quantity * item.price
    totals.value += item.price
    buy.pop(item.total_price)
    buy.push(item.total_price)
    console.log(buy);
  }
  if (num === -1) {
    item.quantity += num;
    item.total_price = item.quantity * item.price
    totals.value -= item.price
    buy.pop(item.total_price)
    buy.push(item.total_price)
    console.log(buy);
  }
  // console.log(frommark.value);
};



const toName = ref([])
const popup = ref('Cart')
const setMode = (receiveOrders) => {
  toName.value = receiveOrders
  popup.value = 'Ordering'
}

const props = defineProps({
    productCart: {
        type: Array,
        default: []
    }
});

onMounted(()=>{
  console.log(props.productCart);
  frommark.value = props.productCart
})

</script>
<template>
  <!-- <Navbar/> -->
  <div v-if="popup === 'Cart'">
    <div class="flex bg-black justify-around h-16 items-center text-2xl">
      <div class="flex"></div>
      <div class="flex text-slate-50 w-96 ">สินค้า</div>
      <div class="flex text-slate-50 ">ประเภท</div>
      <div class="flex text-slate-50">ขนาด</div>
      <div class="flex text-slate-50">จำนวน</div>
      <div class="flex text-slate-50">ราคา</div>
    </div>
    <div class="flex bg-orange-600 justify-around py-24 text-2xl" v-for="item of frommark">
      <div class="flex text-slate-50" @click="addToBuy(item)">
        <input  type="checkbox" />
      </div>
      <div class="flex text-slate-50 w-80">
        
        <img :src="`${item.images[0]}`" />
      </div>
      <div class="flex text-slate-50 items-center">
        {{ item.category }}
      </div>
      <div class="flex text-slate-50 items-center">
        {{ item.size }}
      </div>
      <div class="flex text-slate-50 items-center">
        <button :disabled="item.quantity == 1" class="border w-5 h-6 text-base solid px-1 bg-white text-stone-900"
          @click="changeQuantity(-1, item)">
          -
        </button>
        <span class="px-3">{{ item.quantity }}</span>
        <button class="border w-5 h-6 text-base solid px-1 bg-white text-stone-900" @click="changeQuantity(1, item)">
          +
        </button>
      </div>
      <div class="flex text-slate-50 items-center">
        {{ item.price }} 
      </div>
    </div>
    total {{ totals }}
    <button @click="setMode(frommark)">ส่ง</button>
  </div>
  <Ordering v-if="popup === 'Ordering'" :items_list="toName" @setPage="popup = 'Cart'" />
</template>
