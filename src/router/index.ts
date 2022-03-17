import Home from "@/views/Home.vue";
import Login from "@/views/Login.vue";
import PageNotFound from "@/views/PageNotFound.vue";
import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";

const routes: Array<RouteRecordRaw> = [
	{
		path: "/",
		name: "Home",
		component: Home,
	},
	{
		path: "/login",
		name: "Login",
		component: Login,
	},
	{
		path: "/:catchAll(.*)",
		name: "PageNotFound",
		component: PageNotFound,
	},
];

const router = createRouter({
	history: createWebHistory(),
	routes,
});

router.beforeEach((to, _, next) => {
  const publicPages = ['/login', '/register'];
  const authRequired = !publicPages.includes(to.path);
  const loggedIn = localStorage.getItem("token");
  if (authRequired && !loggedIn) {
    next('/login');
  } else {
    next();
  }
});

export default router;
