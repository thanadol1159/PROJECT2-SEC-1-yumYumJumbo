<script setup>
import { ref } from 'vue';
import AddressForm from './AddressForm.vue';
import SendOrder from './SendOrder.vue';

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
            unit_price: '',
            total_price: ''
        }
    ]
})
// console.log(ordersFromUser.value);

// PopUp
const popup = ref('')
const btnAddAddress = ref(true)
function setNewPopup(newPopup) {
    popup.value = newPopup
}

// Add
const addNewForm = (newForm) => {
    btnAddAddress.value = false
    // setNewPopup('')
    console.log(newForm);
    ordersFromUser.value.customerName = newForm.customerName
    ordersFromUser.value.customerAddress = newForm.customerAddress
    ordersFromUser.value.customerPhone = newForm.customerPhone
    console.log(ordersFromUser.value);
}
// EDIT
const editForm = ref(undefined)
const setEditMode = (oldForm) => {
    editForm.value = oldForm
    setNewPopup('AddressForm')
}
</script>

<template>
    <div class="m-8 ml-32 flex">
        <div class="w-7/12">
            <!-- กดกลับหน้าตระกร้า -->
            <button class="pb-4" @click="">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="inline w-12 h-12">
                    <path fill="none" d="M0 0h24v24H0z" />
                    <path d="M10.828 12l4.95 4.95-1.414 1.414L8 12l6.364-6.364 1.414 1.414z" fill="rgba(96,47,126,1)" />
                </svg>
                <span class="text-xl font-bold"> ขั้นตอนการสั่งซื้อ</span>
            </button>
            <!-- ฟอร์ม -->
            <div class="w-full">
                <p class="bg-[#EFEFEF] text-xl p-3 pl-8">ที่อยู่การจัดส่งสินค้า</p>
                <div class="w-full h-80 py-4" v-if="btnAddAddress">
                    <button type="button"
                        class="text-lg text-white btn border-none bg-[#602F7E] hover:bg-slate-500 active:bg-slate-700 rounded-lg py-3 px-10"
                        @click="setNewPopup('AddressForm')">เพิ่มที่อยู่</button>
                </div>
                <div v-else>
                    <div class="w-full h-80 py-4">
                        <div class="bg-[#F6F6F6] w-96 h-full p-4">
                            <div class=" h-48 w-auto">
                                <p class="text-xl">ชื่อ:
                                    <span class="text-[#602F7E] font-bold"> {{ ordersFromUser?.customerName }} </span>
                                </p>
                                <p class="text-lg pt-2">ที่อยู่: {{ ordersFromUser?.customerAddress }} </p>
                                <p class="text-xl pt-4">เบอร์:
                                    <span class="font-bold">{{ ordersFromUser?.customerPhone }} </span>
                                </p>
                            </div>
                            <button type="button"
                                class="text-lg text-white btn border-none bg-[#602F7E] hover:bg-slate-500 active:bg-slate-700 rounded-lg py-3 px-10"
                                @click="setEditMode(ordersFromUser)">
                                แก้ไข
                            </button>
                        </div>
                    </div>
                </div>
                <AddressForm @add="addNewForm" @close="setNewPopup" v-if="popup === 'AddressForm'" :userForm="editForm" />
            </div>

            <!-- ช่องทางชำระ -->
            <div class="mb-6">
                <p class="bg-[#EFEFEF] text-xl p-3 pl-8 mb-5">ช่องทางชำระเงิน</p>
                <div class="pt-4 inline">
                    <!-- ปุ่มบัญชี -->
                    <button type="button"
                        class="py-3 px-10 mr-6 text-lg rounded-lg btn border-none bg-zinc-200 text-black hover:bg-slate-500  hover:text-white active:bg-slate-700 "
                        @click="setNewPopup('Bank Account')">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="w-7 h-7 inline mr-2">
                            <path fill="none" d="M0 0h24v24H0z" />
                            <path
                                d="M2 20h20v2H2v-2zm2-8h2v7H4v-7zm5 0h2v7H9v-7zm4 0h2v7h-2v-7zm5 0h2v7h-2v-7zM2 7l10-5 10 5v4H2V7zm10 1a1 1 0 1 0 0-2 1 1 0 0 0 0 2z"
                                fill="rgba(96,47,126,1)" />
                        </svg>
                        บัญชีธนาคาร
                    </button>

                    <!-- ปุ่มพร้อมเพย์ -->
                    <button type="button"
                        class="py-3 px-10 mr-6 text-lg rounded-lg btn border-none bg-zinc-200 text-black hover:bg-slate-500  hover:text-white active:bg-slate-700 "
                        @click="setNewPopup('PromptPay')">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="w-7 h-7 inline mr-2">
                            <path fill="none" d="M0 0h24v24H0z" />
                            <path
                                d="M20.067 8.478c.492.88.556 2.014.3 3.327-.74 3.806-3.276 5.12-6.514 5.12h-.5a.805.805 0 0 0-.794.68l-.04.22-.63 3.993-.032.17a.804.804 0 0 1-.794.679H7.72a.483.483 0 0 1-.477-.558L7.418 21h1.518l.95-6.02h1.385c4.678 0 7.75-2.203 8.796-6.502zm-2.96-5.09c.762.868.983 1.81.752 3.285-.019.123-.04.24-.062.36-.735 3.773-3.089 5.446-6.956 5.446H8.957c-.63 0-1.174.414-1.354 1.002l-.014-.002-.93 5.894H3.121a.051.051 0 0 1-.05-.06l2.598-16.51A.95.95 0 0 1 6.607 2h5.976c2.183 0 3.716.469 4.523 1.388z"
                                fill="rgba(96,47,126,1)" />
                        </svg>
                        พร้อมเพย์
                    </button>

                    <!-- popup บัญชี -->
                    <div class="fixed top-0 left-0 w-screen h-screen bg-gray-800 bg-opacity-80 flex items-center justify-center z-50"
                        v-if="popup === 'Bank Account'" @click="setNewPopup('')">
                        <div class="bg-white rounded-lg p-8 mx-auto h-auto w-3/12 text-2xl">
                            <img src="https://mpics.mgronline.com/pics/Images/564000004884401.JPEG">
                            <p class="pt-4">อาร์มิน อาร์เลอร์ท</p>
                            <p class="pt-1 text-[#602F7E]">0123456789</p>
                        </div>
                    </div>
                    <div class="fixed top-0 left-0 w-screen h-screen bg-gray-800 bg-opacity-80 flex items-center justify-center z-50"
                        v-if="popup === 'PromptPay'" @click="setNewPopup('')">
                        <div class="bg-white rounded-lg p-8 mx-auto h-auto w-auto">
                            <img
                                src="https://www.paocloud.co.th/wp-content/uploads/2021/01/Screen-Shot-2564-01-26-at-18.56.53.png">
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <!-- ใบบอกจำนวน -->
        <div class="w-5/12 pt-12">
            <!-- <SendOrder /> -->
        </div>
    </div>
</template>