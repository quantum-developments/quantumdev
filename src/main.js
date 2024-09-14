import { createApp } from "vue";
import { createRouter, createWebHistory } from "vue-router";
import "./style.css";
// Supports weights 300-700
import "@fontsource-variable/fira-code";
// Supports weights 100-800
import "@fontsource-variable/jetbrains-mono";
// Supports weights 100-900
import "@fontsource-variable/onest";
import "@fontsource/lato";
import App from "./App.vue";
import Home from "./views/Home.vue";
import Documentation from "./views/Documentation.vue";
import Resources from "./views/Resources.vue";
import Contributors from "./views/Contributors.vue";
import NotFound from "./views/404.vue";

const routes = [
  { path: "/", component: Home },
  { path: "/docs", component: Documentation },
  { path: "/resources", component: Resources },
  { path: "/contributors", component: Contributors },
  { path: "/:pathMatch(.*)", component: NotFound },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

createApp(App).use(router).mount("#app");
