import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import Shop from "../views/ShopList.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/about",
      name: "about",
      component: () => import("../views/AboutView.vue"),
    },
    {
      path: "/adminadd",
      name: "adminadd",
      component: () => import("../views/Addpro_admin.vue"),
    },
    {
      path: "/cartshop",
      name: "carshop",
      component: () => import("../views/CartshopVue.vue"),
    },

    {
      path: "/login",
      name: "login",
      component: () => import("../views/LoginWeb.vue"),
    },
    {
      path: "/shop",
      name: "shop",
      props: true,
      component: Shop,
      meta: {
        auth: true,
      },
    },
  ],
});

export default router;
