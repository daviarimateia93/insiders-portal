import { createWebHistory, createRouter } from "vue-router";
import Home from "@/views/Home.vue";
import About from "@/views/About.vue";
import Ideas from "@/views/Ideas.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/about",
    name: "About",
    component: About,
  },
  {
      path: "/ideas",
      name: "Ideas",
      component: Ideas,
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;