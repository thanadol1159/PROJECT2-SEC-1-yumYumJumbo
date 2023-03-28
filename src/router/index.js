import { createRouter, createWebHistory } from "vue-router";
import NotFoundView from "../views/NotFoundView.vue";
import HomeView from "../views/HomeView.vue";
import Cart from "../views/Cart.vue";
import ProfileView from "../views/ProfileView.vue";
import CategoryView from "../views/CategoryView.vue";
import ProductDetail from "../views/ProductDetail.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/type",
      name: "type",
      component: CategoryView,
    },
    {
      path: "/cart",
      name: "cart",
      component: Cart,
    },
    {
      path: "/profile",
      name: "profile",
      component: ProfileView,
    },
    {
        path: "/items/:id",
        name: "ProductDetail",
        component: ProductDetail,
      },
    {  
      path: "/:catchNotFound(.*)",
      name: "notfound",
      component: NotFoundView,
    },
    {
      path: "/:pathMatch(.*)*",
      name: "itemNotfound",
      component: NotFoundView,                                                                                 
    }
  ],
});
export default router;
