import {createRouter,createWebHistory} from 'vue-router'
import ProductDetail from '../src/components/ProductDetail.vue'
import TopSaleItem from '../src/components/TopSaleItem.vue'
import Carousel from '../src/components/Carousel.vue'
import App from '../src/App.vue'
const router = createRouter({
    history:createWebHistory(),
    routes:[
        {
            path: "/",
            name:"home",
            component: Carousel
          },
        {
            path: "/items/:id",
            name: "ProductDetail",
            component: ProductDetail,
            props : true,
          },
          {
            path: "/topsale",
            name:"home",
            component: TopSaleItem
          }
    ]
    
})
    


export default router