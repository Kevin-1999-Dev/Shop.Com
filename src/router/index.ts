import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import Home from '../views/HomePage.vue'
import About from '../views/AboutPage.vue'
import Product from '../views/ProductPage.vue'
import Profile from '../views/ProfilePage.vue'
import Login from '../views/LoginPage.vue'
import ErrorPage from '../views/404Page.vue'
import ProductDetail from '@/views/ProductDetail.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'home',
    component: Home,
  
  },
  {
    path: '/about',
    name: 'about',
    component: About
  },
  {
    path: '/product',
    name: 'product',
    component: Product,
    beforeEnter: (to, from, next) => {
      const auth = localStorage.getItem('auth');
      if (auth) {
        next();
      } else {
        next('/login');
      }
    },
  },
  {
    path: '/profile',
    name: 'profile',
    component: Profile,
    beforeEnter: (to, from, next) => {
      const auth = localStorage.getItem('auth');
      if (auth) {
        next();
      } else {
        next('/login');
      }
    },
  },
  {
    path: '/login',
    name: 'login',
    component: Login,
    beforeEnter: (to, from, next) => {
      const auth = localStorage.getItem('auth');
      if (auth) {
        next('profile');
      } else {
        next();
      }
    },
  },
  {
    path: '/product/:id',
    name: 'productDetail',
    component: ProductDetail,
    beforeEnter: (to, from, next) => {
      const auth = localStorage.getItem('auth');
      if (auth) {
        next();
      } else {
        next('/login');
      }
    },
  },
  {
    path: '/:pathMatch(.*)*',
    name: '404Page',
    component: ErrorPage,
  }
  
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
  // linkActiveClass : 'active',

})

export default router
