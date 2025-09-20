import { createRouter, createWebHistory } from "vue-router";

import SongLibraryView from "@/views/SongLibraryView.vue";
import SongView from "@/views/SongView.vue";

const routes = [
  {
    path: "/",
    name: "SongLibrary",
    component: SongLibraryView,
  },
  {
    path: "/song/:id",
    name: "SongView",
    component: SongView,
    props: true,
  },
];

const router = createRouter({
  linkExactActiveClass: "fw-bold",
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
