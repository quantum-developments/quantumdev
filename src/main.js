import { createApp } from "vue";
import { createRouter, createWebHistory } from "vue-router";
import "./style.css";
import App from "./App.vue";
import Home from "./views/Home.vue";
import Documentation from "./views/Documentation.vue";
import Resources from "./views/Resources.vue";
import NotFound from "./views/404.vue";

const routes = [
  { path: "/", component: Home },
  { path: "/docs", component: Documentation },
  { path: "/resources", component: Resources },
  { path: "/:pathMatch(.*)", component: NotFound },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

createApp(App).use(router).mount("#app");
