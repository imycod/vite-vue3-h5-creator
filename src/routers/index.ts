import {
  createRouter,
  createWebHashHistory,
  RouteLocationNormalizedLoaded,
  RouteRecordRaw,
} from "vue-router";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/composition",
    name: "Composition",
    component: () => import("@/views/composition/index.vue"),
    meta: {
      title: "Composition",
      icon: "composition",
    },
    children:[
      {
        path: "/composition/foo",
        name: "Foo",
        component: () => import("@/views/composition/foo/index.vue"),
        meta: {
          title: "Foo",
          icon: "foo",
        },
      },
      {
        path: "/composition/about",
        name: "About",
        component: () => import("@/views/composition/about/index.vue"),
        meta: {
          title: "About",
          icon: "about",
        },
      },
      {
        path: "/composition/recruiment",
        name: "Recruiment",
        component: () => import("@/views/composition/recruiment/form-table/index.vue"),
        meta: {
          title: "Recruiment",
          icon: "recruiment",
        },
      },
    ]
  },
  {
    path: "/",
    name: "Home",
    component: () => import("@/views/index.vue"),
    meta: {
      title: "Home",
      icon: "home",
    },
  },
  {
    path: "/todo-app",
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
