<script setup>
import { ref, onMounted, watch ,defineProps} from "vue";
import Ordering from "../components/Buying/Ordering.vue";
import Navbar from "../components/Navbar.vue";
import ProductDetail from "./ProductDetail.vue";

const totals = ref(0);
const buy = ref(0);
const sendToOrder = ref([]);
const frommark = ref([]);
const toName = ref([])
const popup = ref('Cart')
const isChecked = ref(false);

const setMode = (receiveOrders) => {
  toName.value = receiveOrders
  popup.value = 'Ordering'
  sendToOrder.value = []
}

const props = defineProps({
    productCart: {
        type: Array,
        default: []
    }
});

onMounted(()=>{
  frommark.value = props.productCart
  totals.value = 0
  for (const item of frommark.value) {
    item.quantity = 1
    totals.value += item.price
    item.total_price = item.price
  }
  console.log(frommark.value.total_price);
  console.log(frommark.value.price);
})

const addToBuy = (item,index)=>{
  isChecked.value = !isChecked.value
    if (isChecked.value) {
      buy.value = item.quantity * item.price
      // toName.value.push(item)
      sendToOrder.value.push(item)
      console.log(isChecked.value);
    }else if(!isChecked.value){
      
      sendToOrder.value.splice(item , 1)
      console.log(isChecked.value);
    }
}

const changeQuantity = (num, item) => {
  if (num === 1) {
    item.quantity += num;
    item.total_price = item.quantity * item.price
    totals.value += item.price
    console.log(item.price);
    console.log(item);
  }
  if (num === -1) {
    item.quantity += num;
    item.total_price = item.quantity * item.price
    totals.value -= item.price
  }
  // console.log(frommark.value);
};

const removeItem = (index)=> {
  frommark.value.splice(index, 1)
}


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
      <div></div>
    </div>
    <!-- v-for="item of frommark" -->
    <div class="flex bg-orange-600 justify-around py-24 text-2xl" v-for="(item,index) in frommark " :key="index">


      <!-- checkbox add to order -->
      <div class="flex text-slate-50">
        <input type="checkbox" :id="checkbox + index" :value="item" :v-model="isChecked" @change="addToBuy(item , index)"/>
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

        <!-- button delete quantity item -->
        <button :disabled="item.quantity == 1" class="border w-5 h-6 text-base solid px-1 bg-white text-stone-900"
          @click="changeQuantity(-1, item)">
          -
        </button>
        <span class="px-3">{{ item.quantity }}</span>

        <!-- button add more item -->
        <button class="border w-5 h-6 text-base solid px-1 bg-white text-stone-900" @click="changeQuantity(1, item)">
          +
        </button>
      </div>
      <div class="flex text-slate-50 items-center">
        
        {{ item.total_price }} 
      </div>
      <!-- delete product -->
      <div class="flex items-center" >
        <img class="w-6 cursor-pointer" src="../assets/bin.png" @click="removeItem(index,frommark,item)">
      </div>
    
    </div>
    <!-- compare total price -->
    total {{ buy }}

    <!-- send data to order -->
    <button @click="setMode(sendToOrder)">ส่ง</button>
  </div>
  <Ordering v-if="popup === 'Ordering'" :items_list="toName" @setPage="popup = 'Cart'" />
</template>
