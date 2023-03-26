<script setup>

// function filterItem() {

// }
</script>
 
<template>
    <div class="float-left bg-black w-72 h-screen border border-r-purple-800 border-r-4 border-t-0 border-l-0 border-b-0 ">
        <div class="w-full pt-5 border-b-2 border-b-slate-500 pb-6">
            <h1 class="text-gray-100 pl-7 text-2xl">เสื้อผ้าผู้ชาย</h1>
            <p @click="filterItem" class="text-slate-300 pl-16 pt-4 text-lg cursor-pointer hover:text-violet-600">เสื้อยืด
            </p>
            <p @click="filterItem" class="text-slate-300 pl-16 pt-4 text-lg cursor-pointer hover:text-violet-600">
                เสื้อเชิร์ต
            </p>
            <p @click="filterItem" class="text-slate-300 pl-16 pt-4 text-lg cursor-pointer hover:text-violet-600">เสื้อคลุม
            </p>
            <p @click="filterItem" class="text-slate-300 pl-16 pt-4 text-lg cursor-pointer hover:text-violet-600">
                เสื้อแขนยาว</p>
            <p @click="filterItem" class="text-slate-300 pl-16 pt-4 text-lg cursor-pointer hover:text-violet-600">
                เสื้อกล้าม</p>
        </div>
        <div class="w-full pt-6 border-b-2 border-b-slate-500 pb-6">
            <h1 class="text-gray-100 pl-7 text-2xl">เสื้อผ้าผู้หญิง</h1>
            <p @click="filterItem" class="text-slate-300 pl-16 pt-4 text-lg cursor-pointer hover:text-violet-600">เสื้อยืด
            </p>
            <p @click="filterItem" class="text-slate-300 pl-16 pt-4 text-lg cursor-pointer hover:text-violet-600">เสื้อเชิ้ต
            </p>
            <p @click="filterItem" class="text-slate-300 pl-16 pt-4 text-lg cursor-pointer hover:text-violet-600">
                เสื้อแขนยาว
            </p>
            <p @click="filterItem" class="text-slate-300 pl-16 pt-4 text-lg cursor-pointer hover:text-violet-600">เสื้อกั๊ก
            </p>
            <p @click="filterItem" class="text-slate-300 pl-16 pt-4 text-lg cursor-pointer hover:text-violet-600">
                เสื้อสายเดี่ยว</p>
            <p @click="filterItem" class="text-slate-300 pl-16 pt-4 text-lg cursor-pointer hover:text-violet-600">
                เดรส</p>
        </div>
    </div>
</template>
 
