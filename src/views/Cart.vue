<script setup>
import { ref, onMounted, watch, defineProps } from "vue";
import Ordering from "../components/Buying/Ordering.vue";

const totals = ref(0);
const buy = ref(0);
const sendToOrder = ref([]);
const resive = ref([]);
const send = ref([])
const popup = ref('Cart')
const isChecked = ref([]);

const backToCart = () => {
  popup.value = 'Cart'
  sendToOrder.value = []
  send.value = []
  isChecked.value = []
  buy.value = 0
  for (const item of resive.value) {
    item.quantity = 1
  }
}

const setMode = (receiveOrders) => {
  send.value = receiveOrders
  popup.value = 'Ordering'
  receiveOrders.value = []
}

const props = defineProps({
  productCart: {
    type: Array,
    default: []
  }
});

const filCart = () => {
  for (let i = 0; i < resive.value.length; i++) {
    for (let j = 0; j < resive.value.length; j++) {
      if (resive.value[i].id === resive.value[j].id
        && i !== j
        && resive.value[i].size === resive.value[j].size) {
        resive.value[i].quantity++
        resive.value.splice(j, 1)
      }
    }
  }
  for (const item of resive.value) {
      item.total_price = item.price * item.quantity
    }
}
onMounted(() => {
  
  if (props.productCart) {
    resive.value = props.productCart
    totals.value = 0
    
    for (const item of resive.value) {
      item.quantity = 1
      totals.value += item.price
      item.total_price = item.price
    }

  }
  filCart()
})




const addToBuy = (item, index) => {

  if (!isChecked.value[index]) {
    buy.value += item.total_price
    sendToOrder.value.push(item)

  } else if (isChecked.value[index]) {
    buy.value -= item.total_price
    sendToOrder.value.splice(index, 1)

  }
  isChecked.value[index] = !isChecked.value[index]

}

const changeQuantity = (num, item, index) => {
  if (num === 1) {
    item.quantity += num;
    item.total_price = item.quantity * item.price
    if (isChecked.value[index]) {
      buy.value += item.price

    }

  }
  if (num === -1) {
    item.quantity += num;
    item.total_price = item.quantity * item.price
    if (isChecked.value[index]) {
      buy.value -= item.price

    }

  }
};

const removeItem = (index) => {
  resive.value.splice(index, 1)
  buy.value = 0
  isChecked.value[index] = false
}


</script>
<template>
  <div>
    <div v-if="popup === 'Cart'">

      <div class="flex bg-black justify-around h-16 items-center text-2xl">
        <div class="flex"></div>
        <div class="flex text-slate-50 w-80">สินค้า</div>
        <div class="flex text-slate-50">ประเภท</div>
        <div class="flex text-slate-50">ขนาด</div>
        <div class="flex text-slate-50">จำนวน</div>
        <div class="flex text-slate-50">ราคา</div>
        <div class="flex w-5"></div>
      </div>
      <div class="flex bg-orange-600 justify-around py-24 text-2xl" v-for="(item, index) in resive " :key="index">


        <!-- checkbox add to order -->
        <div class="flex text-slate-50" @change="addToBuy(item, index)">
          <input class=" w-6 cursor-pointer" type="checkbox" :id="index" :v-model="isChecked[index]" />
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
          <button :disabled="item.quantity == 1" :id="index"
            class="border w-5 h-6 text-base solid px-1 bg-white text-stone-900" @click="changeQuantity(-1, item, index)">
            -
          </button>
          <span class="px-3">{{ item.quantity }}</span>

          <!-- button add more item -->
          <button class="border w-5 h-6 text-base solid px-1 bg-white text-stone-900" :id="index"
            @click="changeQuantity(1, item, index)">
            +
          </button>
        </div>
        <div class="flex text-slate-50 items-center">

          {{ item.total_price }}
        </div>
        <!-- delete product -->
        <div class="flex items-center">
          <img
            class="w-6 cursor-pointer hover:-translate-y-1 hover:scale-110 transition ease-in-out delay-150 duration-300"
            src="../assets/bin.png" @click="removeItem(index, resive, item)">
        </div>
      </div>


      <!-- send data to order -->
      <div class="flex justify-end pr-11 text-2xl pt-3 pb-3 bg-black text-white" >
        <span class=" mx-5 flex items-center"> ราคารวม {{ buy }}</span>
        <button
          class=" bg-red-600 w-32 rounded-lg p-5 hover:-translate-y-1 hover:scale-110 transition ease-in-out delay-150 duration-300 "
          @click="setMode(sendToOrder)"> สั่งสินค้า </button>
      </div>
    </div>
    <Ordering v-if="popup === 'Ordering'" :items_list="send" @setPage="backToCart" />
  </div>
</template>

<style scoped></style>