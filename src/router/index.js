import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/",
    name: "Home",
    component: () => import("@/views/Home.vue"),
  },
  {
    path: "/about/:id",
    name: "About",
    component: () => import("@/views/About.vue"),
  },
];

export default createRouter({
  history: createWebHistory(),
  routes,
});
