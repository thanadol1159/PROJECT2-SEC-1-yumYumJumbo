import Vue from 'vue'
import VueRouter from 'vue-router'
import ProductDetail from '../src/components/ProductDetail.vue'

Vue.useAttrs(VueRouter)

const routes = [
    {
        path: "/products/:id",
        component: ProductDetail,
      }
]

const router = new VueRouter({
    mode: "history",
    base: process.env.BASE_URL,
    routes,
});

export default router