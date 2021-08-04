import { createWebHistory, createRouter } from "vue-router";


import Home from "@/views/Home.vue";
//PROFILE
import Ideas from "@/views/Ideas.vue";
import CreateIdea from "@/views/create/Ideas.vue";
//CHANNELS
import About from "@/views/About.vue";
//SETTINGS

import Login from "@/views/Login.vue";
import Signup from "@/views/Signup.vue";


const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
      path: "/ideas",
      name: "Ideas",
      component: Ideas,
  },
  {
    path: "/ideas/new",
    name: "newIdea",
    component: CreateIdea,
  },
  {
    path: "/about",
    name: "About",
    component: About,
  },
  {
    path: "/login",
    name: "Login",
    component: Login,
  },
  {
    path: "/signup",
    name: "Signup",
    component: Signup,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;