import { createRouter, createWebHistory } from "vue-router";
import NotFoundView from "../views/NotFoundView.vue";
import HomeView from "../views/HomeView.vue";
import Cart from "../views/Cart.vue";
import Favorites from "../views/Favorites.vue";
import Profile from "../views/Profile.vue";
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
      path: "/fav",
      name: "favorite",
      component: Favorites,
    },
    {
      path: "/profile",
      name: "profile",
      component: Profile,
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
  ],
});
export default router;
