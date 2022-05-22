import { createRouter, createWebHistory } from "vue-router";
import HomeView from "@/views/HomeView.vue";

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
      component: () => import("@/views/AboutView.vue"),
    },
    {
      path: "/teams",
      name: "teams",
      component: () => import("@/views/TeamsView.vue"),
    },
    {
      path: "/team/:teamId",
      name: "team",
      component: () => import("@/views/TeamView.vue"),
    },
    {
      path: "/match/:matchId",
      name: "match",
      component: () => import("@/views/MatchView.vue"),
    },
  ],
});

export default router;
