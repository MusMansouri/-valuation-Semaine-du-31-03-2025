import { createRouter, createWebHashHistory } from "vue-router";

import Home from "@/views/Home.vue";
import Subscription from "@/views/Subscription.vue";
import Contact from "@/views/Contact.vue";

const routes = [
  { path: "/", name: "Home", component: Home },
  { path: "/subscription", name: "Subscription", component: Subscription },
  { path: "/contact", name: "Contact", component: Contact },
];
const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
