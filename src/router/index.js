import { createRouter, createWebHistory } from "vue-router";
import HomePage from "@/components/Home.vue";
import SignUp from "@/components/SignUp.vue";
import Login from "@/components/Login.vue";
import Update from "@/components/Update.vue";
import Add from "@/components/Add.vue";

const routes = [
  {
    name: "HomePage",
    component: HomePage,
    path: "/",
  },
  {
    name: "SignUp",
    component: SignUp,
    path: "/sign-up",
  },
  {
    name: "LoginPage",
    component: Login,
    path: "/login",
  },
  {
    name: "UpdatePage",
    component: Update,
    path: "/update/:id",
  },
  {
    name: "AddPage",
    component: Add,
    path: "/add",
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

router.beforeEach((to, from, next) => {
  document.title = to.meta.title;
  next();
});
export default router;
