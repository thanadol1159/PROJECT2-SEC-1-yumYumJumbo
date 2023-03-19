<script setup>
// function popUpAddress() {
//     prompt("กรอก")
// }
</script>

<template>
    <div class="m-12 flex">
        <div class="w-7/12">
            <div class="pb-4" @click="">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="inline w-12 h-12">
                    <path fill="none" d="M0 0h24v24H0z" />
                    <path d="M10.828 12l4.95 4.95-1.414 1.414L8 12l6.364-6.364 1.414 1.414z" fill="rgba(96,47,126,1)" />
                </svg>
                <span class="text-xl"> ขั้นตอนการสั่งซื้อ</span>
            </div>

            <div class="w-full">
                <p class="bg-[#EFEFEF] text-xl p-3 pl-8">ที่อยู่การจัดส่งสินค้า</p>
                <div class="pt-4 w-full h-80 pb-4">
                    <button type="button"
                        class="text-lg text-white bg-[#602F7E] hover:bg-slate-500 active:bg-slate-700 rounded-lg py-3 px-10"
                        @click="popUpAddress">เพิ่มที่อยู่</button>
                </div>
            </div>

            <div class="mb-6">
                <p class="bg-[#EFEFEF] text-xl p-3 pl-8 mb-3">วิธีการชำระเงิน</p>
                <div class="pt-4 inline">
                    <button type="button"
                        class="py-3 px-10 mr-6 text-lg rounded-lg bg-[#F6F6F6] text-black hover:bg-slate-500  hover:text-white active:bg-slate-700 "
                        @click="">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="w-7 h-7 inline mr-2">
                            <path fill="none" d="M0 0h24v24H0z" />
                            <path
                                d="M2 20h20v2H2v-2zm2-8h2v7H4v-7zm5 0h2v7H9v-7zm4 0h2v7h-2v-7zm5 0h2v7h-2v-7zM2 7l10-5 10 5v4H2V7zm10 1a1 1 0 1 0 0-2 1 1 0 0 0 0 2z"
                                fill="rgba(96,47,126,1)" />
                        </svg>
                        บัญชีธนาคาร
                    </button>
                    <button type="button"
                        class="py-3 px-10 mr-6 text-lg rounded-lg bg-[#F6F6F6] text-black hover:bg-slate-500  hover:text-white active:bg-slate-700 "
                        @click="">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="w-7 h-7 inline mr-2">
                            <path fill="none" d="M0 0h24v24H0z" />
                            <path
                                d="M20.067 8.478c.492.88.556 2.014.3 3.327-.74 3.806-3.276 5.12-6.514 5.12h-.5a.805.805 0 0 0-.794.68l-.04.22-.63 3.993-.032.17a.804.804 0 0 1-.794.679H7.72a.483.483 0 0 1-.477-.558L7.418 21h1.518l.95-6.02h1.385c4.678 0 7.75-2.203 8.796-6.502zm-2.96-5.09c.762.868.983 1.81.752 3.285-.019.123-.04.24-.062.36-.735 3.773-3.089 5.446-6.956 5.446H8.957c-.63 0-1.174.414-1.354 1.002l-.014-.002-.93 5.894H3.121a.051.051 0 0 1-.05-.06l2.598-16.51A.95.95 0 0 1 6.607 2h5.976c2.183 0 3.716.469 4.523 1.388z"
                                fill="rgba(96,47,126,1)" />
                        </svg>
                        พร้อมเพย์
                    </button>
                </div>
            </div>

        </div>

        <div class="w-5/12 pt-12">
            <div class="bg-[#EFEFEF] w-7/12 mx-32 text-center">
                <span class="text-2xl">รายการสินค้า</span>
                <div class="mt-6 h-80">
                    <div class="grid grid-cols-2">
                        <span class="text-lg font-sans">เสื้อตัวที่หนึ่ง</span>
                        <span class="text-lg">THB 150</span>
                    </div>
                </div>
                <div class="grid grid-cols-2 pb-6">
                    <span class="text-2xl">รวมทั้งหมด</span>
                    <span class="text-2xl text-[#602F7E]">THB 150</span>
                </div>
            </div>
            <div class="pt-4 mx-40 text-center">
                <button type="button"
                    class="text-lg text-white bg-[#602F7E] hover:bg-slate-500 active:bg-slate-700 rounded-lg py-3 w-52"
                    @click="">ยืนยันคำสั่งซื้อ</button>
            </div>
        </div>
    </div>
</template>

<style></style>