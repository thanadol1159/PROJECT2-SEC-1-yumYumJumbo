<script setup>
import { onMounted, ref } from 'vue';

onMounted(() => {
    calOrderSum();
})
const orderSum = ref(0)
const calOrderSum = () => {
    for (const item of test.items) {
        let prices = item.price
        orderSum.value += prices
    }
}

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
            "category": "men's clothing",
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

</script>
 
<template>
    <div class="text-center">
        <div class="bg-[#EFEFEF] w-8/12 ml-24">
            <span class="text-2xl">รายการสินค้า</span>
            <div class="mt-6 h-80 pl-4">
                <div class="w-full flex" v-for="item of test.items">
                    <div class="h-auto w-5/6 text-left"><span class="text-lg">{{ item.name }}</span></div>
                    <div class="h-auto w-1/6 text-left"><span class="text-lg">{{ item.price }}</span></div>
                </div>
            </div>
            <div class="grid grid-cols-2 pb-6">
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
 
<style scoped></style>