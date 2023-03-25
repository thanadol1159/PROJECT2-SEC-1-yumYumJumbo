import {createRouter,createWebHistory} from 'vue-router'
import ProductDetail from '../src/components/ProductDetail.vue'
import TopSaleItem from '../src/components/TopSaleItem.vue'
import App from '../src/App.vue'
const router = createRouter({
    history:createWebHistory(),
    routes:[
        {
            path: "/",
            name:"home",
            component: TopSaleItem
          },
        {
            path: "/items/:id",
            name: "ProductDetail",
            component: ProductDetail,
          }
    ]
    
})
    


export default router