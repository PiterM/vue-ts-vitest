import { createRouter, createWebHistory } from "vue-router";

import VitestPage from "@/components/pages/VitestPage.vue";
import DropdownPage from "@/components/pages/DropdownPage.vue";

export default createRouter({
  routes: [
    { path: "/", redirect: { name: "dropdown-route" } },
    {
      name: "vitest-route",
      path: "/vitest",
      component: VitestPage,
    },
    {
      name: "dropdown-route",
      path: "/dropdown",
      component: DropdownPage,
    },
  ],
  history: createWebHistory(),
  linkActiveClass: "active",
});
