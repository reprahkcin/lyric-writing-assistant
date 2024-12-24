import { createRouter, createWebHistory } from "vue-router";
import store from "@/store";

import ActivityView from "@/views/ActivityView.vue";
import AuthComponent from "@/components/AuthComponent.vue"; // Updated import

const routes = [
  {
    path: store.getters.useLandingPage ? "/activity" : "/",
    name: "Activity",
    component: ActivityView,
  },
  {
    path: "/auth",
    name: "AuthComponent",
    component: AuthComponent, // Updated component reference
  },
];

const router = createRouter({
  linkExactActiveClass: "fw-bold",
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
