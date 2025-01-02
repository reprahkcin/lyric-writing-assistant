import { createRouter, createWebHistory } from "vue-router";
import store from "@/store/store";

import ActivityView from "@/views/ActivityView.vue";

const routes = [
  {
    path: store.getters.useLandingPage ? "/activity" : "/",
    name: "ActivityView", // Ensure the name matches
    component: ActivityView,
  },
];

const router = createRouter({
  linkExactActiveClass: "fw-bold",
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
