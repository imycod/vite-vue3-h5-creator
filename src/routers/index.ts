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
  {
    path: "/recruiment",
    name: "Recruiment",
    component: () => import("@/views/recruiment/form-table/index.vue"),
    meta: {
      title: "Recruiment",
      icon: "info",
    },
  },
  {
    path: "/todoapp",
    name: "TodoApp",
    component: () => import("@/views/todo-app/index.vue"),
    meta: {
      title: "TodoApp",
      icon: "info",
    },
  },
  {
    path: "/bom-api",
    name: "BomApi",
    component: () => import("@/views/bom-api/index.vue"),
    redirect: "/cache/bom-api/scroll",
    meta: {
      title: "BomApi",
      icon: "BomApi",
      isKeepAlive: true,
    },
    children: [
      {
        path: "/cache/bom-api/scroll",
        name: "BomApiScroll",
        component: () => import("@/views/bom-api/cache-scroll.vue"),
        meta: {
          title: "BomApiScroll",
          icon: "BomApiScroll",
          isKeepAlive: true,
        },
      },
    ],
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
