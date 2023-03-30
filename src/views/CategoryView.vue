<script setup>
import { ref , onMounted} from "vue";
import { useRoute } from "vue-router";
import ContentSection from "../components/ContentSection.vue";
import PopularItem from "../components/PopularItem.vue";
import TopSaleItem from "../components/TopSaleItem.vue";
import ProductAll from "../components/ProductAll.vue";
import Navbar from "../components/Navbar.vue";
// import Carousel from "../components/Carousel.vue";

const route = useRoute();
// const props = defineProps({
//   itemList: {
//     type: Array,
//     default: []
//   }
// });
// const items = ref()
// onMounted(()=>{
//   items.value = props.itemList
//   console.log(items);
// })
// let test = [
//     {
//       "id": 1,
//       "name": "LOOKER - เสื้อยืดสกรีนนูน",
//       "price": 200,
//       "description": "ฟรีไซต์ อก36-44ใส่ได้ ความยาวประมาณ29นิ้วครับ สินค้าตามภาพ ไม่มีป้ายด้านล่าง",
//       "category": "men's clothing",
//       "type": [
//         "เสื้อยืด",
//         "เสื้อ oversize"
//       ],
//       "images": [
//         "https://cf.shopee.co.th/file/sg-11134201-23010-we1oph91bwlv7c",
//         "https://cf.shopee.co.th/file/sg-11134201-23010-e1hfmnl2bwlv45",
//         "https://cf.shopee.co.th/file/sg-11134201-23010-rjvcgol2bwlv78"
//       ],
//       "rating": {
//         "rate": 4.8,
//         "count": 1145
//       }
//     },
//     {
//       "id": 2,
//       "name": "เสื้อยืดชาย oversize คอกลม แขนสั้น",
//       "price": 85,
//       "description": "เนื้อนุ่ม ใส่สบาย ระบายความร้อนดีเยี่ยม ผ้าไม่ติดตัว",
//       "category": "men's clothing",
//       "type": [
//         "เสื้อยืด",
//         "เสื้อ oversize"
//       ],
//       "images": [
//         "https://cf.shopee.co.th/file/21a5def22b5927960e827b48940d52eb",
//         "https://cf.shopee.co.th/file/df888b6513b63a57b20805f94da32b2f"
//       ],
//       "rating": {
//         "rate": 4.6,
//         "count": 689
//       }
//     },
//     {
//       "id": 3,
//       "name": "สื้อโอเวอร์ไซส์ เสื้อยืด Oversized COTTON 100%",
//       "price": 135,
//       "description": "เสื้อโอเวอร์ไซส์ Oversize สีดำ COTTON 100% (รูปถ่ายสินค้าจริง) เสื้อยืดสีพื้น สไตล์เกาหลี หลากสี ชาย",
//       "category": "men's clothing",
//       "type": [
//         "เสื้อยืด",
//         "เสื้อ oversize",
//         "เสื้อ minimal"
//       ],
//       "images": [
//         "https://cf.shopee.co.th/file/661268f8d87944046c09e88e765314bc"
//       ],
//       "rating": {
//         "rate": 4.8,
//         "count": 259
//       }
//     }]

</script>

<template>
  <div>
    <Navbar/>
    <ContentSection>
      <Carousel :item-list="pd" />
    </ContentSection>
    <!-- popularitem component -->
    <ContentSection>
      <PopularItem :typeShirt="filter"/>
    </ContentSection>
    
    <!-- Topsale -->
    <ContentSection>
      <TopSaleItem />
    </ContentSection>
    
    <!-- Product All -->
    <ContentSection>
      <ProductAll :itemList="route.itemList"/>
    </ContentSection>
  </div>
</template>
