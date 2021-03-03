import { createRouter, createWebHashHistory, RouteRecordRaw } from "vue-router";
import main from "_c/layUI/layout.vue";
import Home from "../views/Home.vue";
const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "Home",
    component: main,
    children: [
      {
        path: "/",
        component: Home,
        name: "Home",
        meta: { requireAuth: true }
      }
    ]
  },
  {
    path: "/",
    name: "list",
    component: main,
    children: [
      {
        path: "/about",
        name: "About",
        component: () =>
          import(/* webpackChunkName: "about" */ "../views/About.vue")
      },
    ]
  },
  
  // {
  //   path: '/address/list',
  //   name: 'Address',
  //   component: () => import(/* webpackChunkName: "address" */ '@/views/address/AddressList')
  // },
  // {
  //   path: '/address/edit',
  //   name: 'AddressEdit',
  //   component: () => import(/* webpackChunkName: "address" */ '@/views/address/AddressEdit')
  // },
  // {
  //   path: '/chat/list',
  //   name: 'Chat',
  //   component: () => import(/* webpackChunkName: "chatpage" */ '@/views/chat')
  // }
];

const router = createRouter({
  history: createWebHashHistory(),
  routes
});
export default router


