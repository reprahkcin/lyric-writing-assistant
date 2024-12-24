import { createApp } from "vue";
import App from "@/App.vue";
import store from "@/store";
import router from "@/router";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "@/css/style.css";

async function initializeApp() {
  await store.dispatch("loadStateFromFirestore");
  createApp(App).use(store).use(router).mount("#app");
}

initializeApp();
