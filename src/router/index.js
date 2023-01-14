import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import store from "@/store";
import {seoGuardWithNext} from "@aminoeditor/vue-router-seo";

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
    meta: {
      requiresAuth: false,
      seo: {
        title: 'Home',
        metaTags: [
          {
            description: 'Home page description',
            keywords: 'home, page, description',
          }
        ],
      }
    }
  },
  {
    path: '/products/',
    name: 'products',
    component: () => import(/* webpackChunkName: "products" */ '../views/ShopView.vue'),
    meta: {
      requiresAuth: false,
      seo: {
        title: 'Products',
        metaTags: [
          {
            description: 'Products description',
            keywords: 'products, keywords',
          }
        ],
      }
    }
  },
  {
    path: '/500/',
    name: '500',
    component: () => import(/* webpackChunkName: "500" */ '../views/errors/error-500.vue'),
    meta: {
      requiresAuth: false,
      seo: {
        title: '500 - Internal Server Error',
        metaTags: [
          {
            description: '500 - Internal Server Error',
            keywords: '500, error',
          }
        ],
      }
    }
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
});

router.beforeEach(seoGuardWithNext);

router.beforeEach((to, from, next) => {
  if (to.name === 'login') {
    if (store.getters.isLoggedIn) {
      return next({name: 'home'})
    } else {
      next()
    }
  } else  if (to.meta && to.meta.requiresAuth === false) {
    next()
  } else {
    if (store.getters.isLoggedIn) {
      next()
    } else {
      next({name: 'login'})
    }
  }
});

export default router
