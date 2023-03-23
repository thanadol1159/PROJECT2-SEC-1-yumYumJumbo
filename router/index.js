import {createRouter,createWebHistory} from 'vue-router'
import ProductDetail from '../src/components/ProductDetail.vue'
import App from '../src/App.vue'
const router = createRouter({
    history:createWebHistory(),
    routes:[
        {
            path: "/",
            name:"home",
            component: App,
          },
          {
            path: "/",
            name:"home",
            component: App,
          },
        {
            path: "/items/:id",
            name: "ProductDetail",
            component: ProductDetail,
          }
    ]
    
})
    


export default router