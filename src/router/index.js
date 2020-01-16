import Vue from "vue";
import VueRouter from "vue-router";
import Home from "@/views/home/index";
import Sort from "@/views/sort/index";
import Book from "@/views/book/index";
import Cart from "@/views/cart/index";
import User from "@/views/user/index";
import Error from "@/views/404";
import Search from "@/components/search/index";
import Setting from "@/views/user/setting";
import Goods from "@/views/goods";
import Login from "@/views/login/login";
import Register from "@/views/login/register";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    redirect: "/home"
  },
  {
    path: "/home",
    name: "home",
    component: Home
  },
  {
    path: "/sort",
    name: "sort",
    component: Sort
  },
  {
    path: "/cart",
    name: "cart",
    component: Cart
  },
  {
    path: "/user",
    name: "user",
    component: User
  },
  {
    path: "/user/setting",
    name: "setting",
    component: Setting
  },
  {
    path: "/book",
    name: "book",
    component: Book
  },
  {
    path: "/goods/:id",
    name: "goods",
    component: Goods
  },
  {
    path: "/404",
    component: Error
  },
  {
    path: "/search",
    component: Search
  },
  {
    path: "/login",
    component: Login
  },
  {
    path: "/register",
    component: Register
  },
  {
    path: "*",
    redirect: "/404"
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

router.beforeEach((to, from, next) => {
  next();
});

export default router;
