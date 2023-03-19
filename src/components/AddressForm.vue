<template>
    <div class="fixed top-0 left-0 w-screen h-screen bg-gray-900 bg-opacity-80 flex items-center justify-center z-50">
        <div class="bg-white rounded-lg p-10 mx-auto h-4/6 w-6/12">
            <h2 class="text-2xl text-center mb-4">เพิ่มที่อยู่ของคุณ</h2>
            <form>
                <div class="mb-4">
                    <label class="block ml-2 text-gray-700 text-xl" for="name">
                        ชื่อผู้รับ
                    </label>
                    <input class="border rounded-xl border-gray-400 p-2 h-12 w-3/5 text-lg" type="text" name="name"
                        id="name" placeholder="นายเอเลน เยเกอร์"/>
                </div>
                <div class="mb-4">
                    <label class="block ml-2 text-gray-700 text-xl" for="address">
                        รายละเอียดที่อยู่
                    </label>
                    <textarea class="border rounded-xl border-gray-400 p-2 h-20 w-full text-lg" type="text" name="address"
                        id="address" placeholder="หมู่บ้านพาราดี ซอยซาซาเกโย"/>
                </div>
                <div class="mb-4">
                    <label class="block ml-2 text-gray-700 text-xl" for="city">
                        เบอร์ติดต่อ
                    </label>
                    <input class="border rounded-xl border-gray-400 p-2 h-12 w-full text-lg" type="tel" name="phone"
                        id="phone" pattern="[0][0-9]{2}-[0-9]{3}-[0-9]{4}" placeholder="Ex 092-216-1111" />
                </div>
                <button class="text-lg text-white bg-[#602F7E] hover:bg-slate-500 active:bg-slate-700 rounded-lg py-3 px-10"
                    type="submit">
                    Submit
                </button>
            </form>
        </div>
    </div>
</template>
  