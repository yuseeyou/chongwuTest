import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/views/home/index'
import Sort from '@/views/sort/index'
import Book from '@/views/book/index'
import Cart from '@/views/cart/index'
import User from '@/views/user/index'


Vue.use(VueRouter)

const routes = [
  {
    path:'/',
    redirect:'/home'
  },
  {
    path: '/home',
    name: 'home',
    component: Home
  },
  {
    path: '/sort',
    name:'sort',
    component: Sort
  },
  {
    path: '/cart',
    name:'cart',
    component: Cart
  },
  {
    path: '/user',
    name:'user',
    component: User
  },
  {
    path: '/book',
    name:'book',
    component: Book
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
