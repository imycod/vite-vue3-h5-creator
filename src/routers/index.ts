import {
  createRouter,
  createWebHashHistory,
  RouteLocationNormalizedLoaded,
  RouteRecordRaw,
} from "vue-router";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "Home",
    component: () => import("@/views/business3/index.vue"),
    meta: {
      title: "Home",
      icon: "home",
    },
  },
  {
    path: "/about",
    name: "About",
    component: () => import("@/views/demo/index.vue"),
    meta: {
      title: "About",
      icon: "info",
    },
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

router.beforeEach(
  (
    to: RouteLocationNormalizedLoaded,
    from: RouteLocationNormalizedLoaded,
    next: any
  ) => {
    next();
  }
);

export default router;
