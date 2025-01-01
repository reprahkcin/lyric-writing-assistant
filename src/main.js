import { createApp } from "vue";
import App from "@/App.vue";
import store from "@/store";
import router from "@/router";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "@/css/style.css";
import "popper.js";

async function initializeApp() {
  // Load state from local storage instead of Firestore
  const savedState = localStorage.getItem("appState");
  if (savedState) {
    store.replaceState(JSON.parse(savedState));
  }
  createApp(App).use(store).use(router).mount("#app");
}

// Save state to local storage on store changes
store.subscribe((mutation, state) => {
  localStorage.setItem("appState", JSON.stringify(state));
});

initializeApp();
