import { createRouter, createWebHistory } from "vue-router";
import Home from "@/js/Pages/Home.vue";
import WeightBattle from "@/js/Pages/WeightBattle.vue";
import Search from "@/js/Pages/Search.vue";
import Pokemon from "@/js/Pages/Pokemon.vue";

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
    path: "/find-pokemon",
    name: "search_page",
    component: Search,
  },
  {
    path: "/pokemon/:name",
    name: "pokemon_detail_page",
    component: Pokemon,
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
