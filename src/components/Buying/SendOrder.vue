<script setup>

</script>
 
<template>
    <div class="text-center">
        <div class="bg-[#EFEFEF] w-8/12 ml-24">
            <span class="text-2xl">รายการสินค้า</span>
            <div class="mt-6 h-80">
                <div class="grid grid-cols-2">
                    <span class="text-lg">เสื้อตัวที่หนึ่ง</span>
                    <span class="text-lg">THB 150</span>
                </div>
            </div>
            <div class="grid grid-cols-2 pb-6">
                <span class="text-2xl">รวมทั้งหมด</span>
                <span class="text-2xl text-[#602F7E]">THB 150</span>
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