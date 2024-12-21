import { createRouter, createWebHashHistory } from "vue-router";
import store from "@/store";

import ActivityView from "@/views/ActivityView";

const routes = [
  {
    path: store.getters.useLandingPage ? "/activity" : "/",
    name: "Activity",
    component: ActivityView,
  },
];

const router = createRouter({
  mode: "history",
  linkExactActiveClass: "fw-bold",
  history: createWebHashHistory(process.env.BASE_URL),
  routes,
});

export default router;
