import { createRouter, createWebHistory } from "vue-router";
import Home from "@/js/Pages/Home.vue";
import WeightBattle from "@/js/Pages/WeightBattle.vue";

const routes = [
  {
    path: "/",
    name: "home_page",
    component: Home,
  },
  {
    path: "/weight-battle",
    name: "weight_battle_page",
    component: WeightBattle,
  },
  {
    path: "/:catchAll(.*)",
    redirect: "/",
  },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: routes,
});

export default router;
